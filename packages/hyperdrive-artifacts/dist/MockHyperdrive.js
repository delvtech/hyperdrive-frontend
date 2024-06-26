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
            "name": "__external_transferFrom",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "caller",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "__setBalanceOf",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_who",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "burn",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
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
                },
                {
                    "name": "spotPrice",
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
            "name": "mint",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "setCheckpointRewarder",
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
            "name": "RestrictedZeroAddress",
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
    bytecode: '0x6102e06040523480156200001257600080fd5b506040516201413538038062014135833981016040819052620000359162000379565b6040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525081826040516200006c9062000279565b6200007891906200048c565b604051809103906000f08015801562000095573d6000803e3d6000fd5b5083604051620000a59062000287565b620000b191906200048c565b604051809103906000f080158015620000ce573d6000803e3d6000fd5b5084604051620000de9062000295565b620000ea91906200048c565b604051809103906000f08015801562000107573d6000803e3d6000fd5b50856040516200011790620002a3565b6200012391906200048c565b604051809103906000f08015801562000140573d6000803e3d6000fd5b506001600081905585516001600160a01b039081166080908152602080890151831660a0908152918901516101a0908152918901516101c090815260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c0180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918c01518616610220528b015161024052918a0151600980549186166001600160a01b0319928316179055918a0151600a805491861691841691909117905591890151600b805491851691831691909117905590880151600c80549190931691161790556200024d878262000643565b506001600160a01b03938416610260529183166102805282166102a052166102c052506200070f915050565b613dd380620035bd83390190565b614216806200739083390190565b614438806200b5a683390190565b614757806200f9de83390190565b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b0381118282101715620002ed57620002ed620002b1565b60405290565b80516001600160a01b03811681146200030b57600080fd5b919050565b6000608082840312156200032357600080fd5b604051608081016001600160401b0381118282101715620003485762000348620002b1565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200038d57600080fd5b62000397620002c7565b620003a283620002f3565b8152620003b260208401620002f3565b6020820152620003c560408401620002f3565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012080840151818301525061014080840151818301525061016062000430818501620002f3565b9082015261018062000444848201620002f3565b908201526101a062000458848201620002f3565b908201526101c06200046c848201620002f3565b908201526101e0620004818585830162000310565b908201529392505050565b81516001600160a01b0316815261026081016020830151620004b960208401826001600160a01b03169052565b506040830151620004d560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015162000548828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e092830151805193830193909352602083015161020083015260408301516102208301526060909201516102409091015290565b600181811c90821680620005c957607f821691505b602082108103620005ea57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200063e57600081815260208120601f850160051c81016020861015620006195750805b601f850160051c820191505b818110156200063a5782815560010162000625565b5050505b505050565b81516001600160401b038111156200065f576200065f620002b1565b6200067781620006708454620005b4565b84620005f0565b602080601f831160018114620006af5760008415620006965750858301515b600019600386901b1c1916600185901b1785556200063a565b600085815260208120601f198616915b82811015620006e057888601518255948401946001909101908401620006bf565b5085821015620006ff5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051612d16620008a7600039600081816108be01528181610a5b01528181610b7801528181610ba80152610dd20152600081816107c50152610fd40152600081816109120152610b150152600081816102aa0152818161046c01528181610a2b01528181610a8d01528181610abf01528181610b4901528181610d8b01528181610e1a01528181610f81015261100701526000505060005050600050506000505060008181611925015281816119610152611c7001526000818161167a015281816116bc01526117d301526000505060008181611140015281816111b9015261150001526000818161118d015261172f015260008181611106015281816114bc015261170e015260008181611658015281816116dd01526117f401526000818161148301526119ea0152600061160501526000505060008181610c0701528181610ca10152610d150152612d166000f3fe6080604052600436106102935760003560e01c806394a97cdb1161015a578063ca6d38f7116100c1578063ded062311161007a578063ded06231146104e6578063e44808bc146108e0578063e4af29d1146103a3578063eac3e79914610900578063f45cf2e014610934578063f698da2514610a1157610293565b8063ca6d38f714610864578063cba2e58d14610884578063cbc13434146103e0578063d5002f2e14610897578063d899e112146108ac578063dbbe80701461088457610293565b8063a510762611610113578063a5107626146103a3578063a6e8a859146107b3578063a77384c1146107e7578063ab033ea9146103a3578063b1b4b17014610807578063b4f8da391461082757610293565b806394a97cdb146107125780639bd33498146107535780639cd241af146107735780639eea5f6614610793578063a22cb4651461064a578063a42dce80146103a357610293565b80634ed2d6ac116101fe57806371f88b7c116101b757806371f88b7c1461066a57806377d05ff41461068a5780638120a3e21461069d578063836a1040146106bd5780639032c726146106dd578063907c0f92146106fd57610293565b80634ed2d6ac1461059b57806358af4a0a146105b657806368096239146105d657806368c2ecb8146105f6578063702db0eb146106165780637180c8ca1461064a57610293565b806322d5506b1161025057806322d5506b146104a657806329b23fc1146104e657806330adf81f146105145780633e691db914610548578063414f826d146105685780634c2ac1d91461058857610293565b806301681a62146103a357806302329a29146103c5578063074a6de9146103e057806317fad7fc1461041a5780631c0f12b61461043a57806321b57d531461045a575b34801561029f57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102e29291906123b0565b600060405180830381855af49150503d806000811461031d576040519150601f19603f3d011682016040523d82523d6000602084013e610322565b606091505b5091509150811561034657604051638bb0a34b60e01b815260040160405180910390fd5b6000610351826123c0565b90506001600160e01b03198116636e64089360e11b1461037357815160208301fd5b8151600319810160048401908152926103949181016020019060240161245b565b80519650602001945050505050f35b3480156103af57600080fd5b506103c36103be366004612512565b610a26565b005b3480156103d157600080fd5b506103c36103be36600461254d565b3480156103ec57600080fd5b506104006103fb36600461257c565b610a53565b604080519283526020830191909152015b60405180910390f35b34801561042657600080fd5b506103c3610435366004612611565b610a88565b34801561044657600080fd5b506103c36104553660046126a6565b610aba565b34801561046657600080fd5b5061048e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610411565b3480156104b257600080fd5b506104c66104c13660046126ee565b610aea565b604080519485526020850193909352918301526060820152608001610411565b3480156104f257600080fd5b50610506610501366004612720565b610b0e565b604051908152602001610411565b34801561052057600080fd5b506105067f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561055457600080fd5b5061050661056336600461277a565b610b42565b34801561057457600080fd5b506103c36105833660046127af565b610b73565b6105066105963660046127d1565b610ba1565b3480156105a757600080fd5b506103c3610455366004612835565b3480156105c257600080fd5b506103c36105d136600461287f565b610bd6565b3480156105e257600080fd5b506103c36105f13660046127af565b610be3565b34801561060257600080fd5b506105066106113660046128de565b610d75565b34801561062257600080fd5b506103c361063136600461290e565b6001600160801b03908116600160801b02911617600255565b34801561065657600080fd5b506103c3610665366004612941565b610d86565b34801561067657600080fd5b5061040061068536600461297a565b610daf565b61050661069836600461257c565b610dcb565b3480156106a957600080fd5b506103c36106b83660046128de565b610dfe565b3480156106c957600080fd5b506103c36106d83660046129a6565b610e0a565b3480156106e957600080fd5b506103c36106f83660046129de565b610e15565b34801561070957600080fd5b50610506610f4d565b34801561071e57600080fd5b506103c361072d3660046129a6565b6000928352600f602090815260408085206001600160a01b039094168552929052912055565b34801561075f57600080fd5b506104c661076e3660046127af565b610f5c565b34801561077f57600080fd5b506103c361078e3660046129a6565b610f7c565b34801561079f57600080fd5b506103c36107ae3660046129a6565b610fab565b3480156107bf57600080fd5b5061048e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156107f357600080fd5b506103c36108023660046128de565b601455565b34801561081357600080fd5b506105066108223660046128de565b610fb6565b34801561083357600080fd5b506103c3610842366004612a5e565b600380546001600160801b0319166001600160801b0392909216919091179055565b34801561087057600080fd5b5061050661087f3660046128de565b610fc1565b610400610892366004612720565b610fcc565b3480156108a357600080fd5b50601454610506565b3480156108b857600080fd5b5061048e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108ec57600080fd5b506103c36108fb36600461287f565b611002565b34801561090c57600080fd5b5061048e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561094057600080fd5b506103c361094f366004612aa2565b805160208201516001600160801b03918216600160801b91831682021760025560408301516060840151908316908316820217600355608083015160a084015190831690831682021760045560c083015160e084015190831690831682021760055561010080840151600680546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a1d57600080fd5b50610506611033565b610a4f7f00000000000000000000000000000000000000000000000000000000000000006110c1565b5050565b600080610a7f7f00000000000000000000000000000000000000000000000000000000000000006110c1565b50935093915050565b610ab17f00000000000000000000000000000000000000000000000000000000000000006110c1565b50505050505050565b610ae37f00000000000000000000000000000000000000000000000000000000000000006110c1565b5050505050565b600080600080610afc888888886110e1565b929b919a509850909650945050505050565b6000610b397f00000000000000000000000000000000000000000000000000000000000000006110c1565b50949350505050565b6000610b6d7f00000000000000000000000000000000000000000000000000000000000000006110c1565b50919050565b610b9c7f00000000000000000000000000000000000000000000000000000000000000006110c1565b505050565b6000610bcc7f00000000000000000000000000000000000000000000000000000000000000006110c1565b5095945050505050565b610ae385858585856111f5565b6040516370a0823160e01b8152306004820152600090610c79906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c729190612b8e565b83856113b6565b9150506000811315610d02576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610cee57600080fd5b505af1158015610ab1573d6000803e3d6000fd5b6000811215610b9c576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d4484612bbd565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610cd4565b6000610d8082611456565b92915050565b610b9c7f00000000000000000000000000000000000000000000000000000000000000006110c1565b600080610dbd8585856114ae565b90925090505b935093915050565b6000610df67f00000000000000000000000000000000000000000000000000000000000000006110c1565b509392505050565b610e078161152e565b50565b610b9c838383611554565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e4a611033565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610ef39190612bd9565b600060405180830381855af49150503d8060008114610f2e576040519150601f19603f3d011682016040523d82523d6000602084013e610f33565b606091505b509150915081610f4557805160208201fd5b805160208201f35b6000610f576115fd565b905090565b600080600080610f6c8686611629565b9299919850965090945092505050565b610fa57f00000000000000000000000000000000000000000000000000000000000000006110c1565b50505050565b610b9c838383611832565b6000610d8082611903565b6000610d808261199f565b600080610ff87f00000000000000000000000000000000000000000000000000000000000000006110c1565b5094509492505050565b61102b7f00000000000000000000000000000000000000000000000000000000000000006110c1565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610ef39291906123b0565b600080808061113887866111318b61112b6111048c670de0b6b3a7640000612bf5565b7f000000000000000000000000000000000000000000000000000000000000000090611a15565b90611a15565b9190611a26565b9350611164847f0000000000000000000000000000000000000000000000000000000000000000611a4c565b9150600061118561117d89670de0b6b3a7640000612bf5565b8a9088611a26565b90506111b1817f0000000000000000000000000000000000000000000000000000000000000000611a15565b93506111dd847f0000000000000000000000000000000000000000000000000000000000000000611a4c565b6111e79084612c08565b915050945094509450949050565b6001600160a01b038416158061121257506001600160a01b038316155b156112305760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146112f4576001600160a01b0380851660009081526011602090815260408083209385168352929052205460ff166112f45760008581526012602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146112f25760008681526012602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906112ec908490612bf5565b90915550505b505b6000858152600f602090815260408083206001600160a01b038816845290915281208054849290611326908490612bf5565b90915550506000858152600f602090815260408083206001600160a01b03871684529091528120805484929061135d908490612c08565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080806113c8846301e13380611a61565b905060006113ed82600088126113de57876113e7565b6113e788612bbd565b90611a4c565b905060008613156114205761140b61140482611a76565b8890611a4c565b93506114178785612bf5565b92505050610dc3565b60008612156114485761143c61143582611a76565b8890611a61565b93506114178785612c1b565b509495600095509350505050565b6000806114616115fd565b905080831161147157600061147b565b61147b8184612bf5565b91506114a7827f0000000000000000000000000000000000000000000000000000000000000000611a61565b9392505050565b6000806114f88561112b85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006114ee818c611c15565b61112b9190612bf5565b9150611524827f0000000000000000000000000000000000000000000000000000000000000000611a4c565b9050935093915050565b61153781611c2a565b610e0757604051635044b7f560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611586908490612c08565b9091555050600083815260106020526040812080548392906115a9908490612c08565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000610f57427f0000000000000000000000000000000000000000000000000000000000000000611dc2565b6000806000806000611639611dd8565b60025490915061169e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000611df9565b600254909450611701908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e25565b91506117588785611753857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e45565b611eb8565b1561176557611765611efa565b60008061177389858a6114ae565b90925090506117828287612bf5565b955061178f81858a611f13565b945061179b858a612bf5565b9650670de0b6b3a76400006118186117b38986612c08565b6002546117d1908a90600160801b90046001600160801b0316612bf5565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e25565b111561182657611826611efa565b50505092959194509250565b6000838152600f602090815260408083206001600160a01b038616845290915290205481111561187557604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b03861684528252808320805485900390558583526010909152812080548392906118b8908490612bf5565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016115f0565b600354600090819061191e906001600160801b031684611c15565b905061194a7f000000000000000000000000000000000000000000000000000000000000000082612c08565b6002546001600160801b03161115610b6d576002547f0000000000000000000000000000000000000000000000000000000000000000906119959083906001600160801b0316612bf5565b6114a79190612bf5565b600080670de0b6b3a76400006119b36115fd565b6119bd9190612c3b565b90508083116119cd5760006119d7565b6119d78184612bf5565b91506114a7611a0e670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612c3b565b8390611a61565b60006114a78383670de0b6b3a76400005b6000826000190484118302158202611a3d57600080fd5b50910281810615159190040190565b60006114a78383670de0b6b3a7640000611f13565b60006114a783670de0b6b3a764000084611f13565b6000680248ce36a70cb26b3e198213611a9157506000919050565b680755bf798b4a1bf1e58212611aba576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611c0b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611f31565b9695505050505050565b60006114a783670de0b6b3a764000084611a26565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ce3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d079190612c68565b935093509350935080611d235750600098975050505050505050565b868414611d5457611d3384611f5f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611d8557611d6483611f89565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611db357611d9582611f5f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000611dce8284612c9e565b6114a79084612bf5565b600254600454600091610f57916001600160801b0390911690600f0b611fd7565b6000611e1a878787611e1388670de0b6b3a7640000612bf5565b8787611ffd565b979650505050505050565b6000611e3c82611e36858888611f13565b906120b1565b95945050505050565b6000611eb0611e86611e5f84670de0b6b3a7640000612bf5565b61112b670de0b6b3a7640000611e75818a611c15565b611e7f9190612bf5565b8790611a15565b611e9890670de0b6b3a7640000612c08565b611eaa84670de0b6b3a7640000612bf5565b90611a61565b949350505050565b600080611eef85611ec7611dd8565b611ed19190612c08565b6002546117d1908790600160801b90046001600160801b0316612bf5565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000826000190484118302158202611f2a57600080fd5b5091020490565b60006001600160ff1b03821115611f5b5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006001600160801b03821115611f5b57604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280611fb957506f7fffffffffffffffffffffffffffffff82135b15611f5b5760405163a5353be560e01b815260040160405180910390fd5b600080611fe4848461211c565b909250905080611ff657611ff6611efa565b5092915050565b60008061200d888887878761215b565b905061202785611e36612020898c612c08565b8690611a4c565b9750612034848985611f13565b97508781101561204657612046611efa565b878103670de0b6b3a7640000811061207b5761207461206d670de0b6b3a764000088611c15565b82906120b1565b9050612093565b61209061206d670de0b6b3a764000088611a61565b90505b808810156120a3576120a3611efa565b909603979650505050505050565b6000816000036120ca5750670de0b6b3a7640000610d80565b826000036120da57506000610d80565b60006120e583611f31565b905060006120fa6120f586611f31565b61218a565b9050818102612111670de0b6b3a764000082612cb2565b9050611c0b81611a76565b60008060008361212b86611f31565b6121359190612c1b565b9050600081121561214d576000809250925050612154565b9150600190505b9250929050565b600061216785856120b1565b61218061217886611e36868b611a15565b859085611a26565b611c0b9190612c08565b60008082136121ac5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061222f9084901c611f31565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156123ef5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715612431576124316123f7565b60405290565b60005b8381101561245257818101518382015260200161243a565b50506000910152565b60006020828403121561246d57600080fd5b815167ffffffffffffffff8082111561248557600080fd5b818401915084601f83011261249957600080fd5b8151818111156124ab576124ab6123f7565b604051601f8201601f19908116603f011681019083821181831017156124d3576124d36123f7565b816040528281528760208487010111156124ec57600080fd5b611e1a836020830160208801612437565b6001600160a01b0381168114610e0757600080fd5b60006020828403121561252457600080fd5b81356114a7816124fd565b8015158114610e0757600080fd5b80356125488161252f565b919050565b60006020828403121561255f57600080fd5b81356114a78161252f565b600060608284031215610b6d57600080fd5b60008060006060848603121561259157600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156125b657600080fd5b6125c28682870161256a565b9150509250925092565b60008083601f8401126125de57600080fd5b50813567ffffffffffffffff8111156125f657600080fd5b6020830191508360208260051b850101111561215457600080fd5b6000806000806000806080878903121561262a57600080fd5b8635612635816124fd565b95506020870135612645816124fd565b9450604087013567ffffffffffffffff8082111561266257600080fd5b61266e8a838b016125cc565b9096509450606089013591508082111561268757600080fd5b5061269489828a016125cc565b979a9699509497509295939492505050565b600080600080608085870312156126bc57600080fd5b8435935060208501356126ce816124fd565b925060408501356126de816124fd565b9396929550929360600135925050565b6000806000806080858703121561270457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561273657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561276257600080fd5b61276e8782880161256a565b91505092959194509250565b60006020828403121561278c57600080fd5b813567ffffffffffffffff8111156127a357600080fd5b611eb08482850161256a565b600080604083850312156127c257600080fd5b50508035926020909101359150565b600080600080600060a086880312156127e957600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561281c57600080fd5b6128288882890161256a565b9150509295509295909350565b6000806000806080858703121561284b57600080fd5b84359350602085013561285d816124fd565b9250604085013591506060850135612874816124fd565b939692955090935050565b600080600080600060a0868803121561289757600080fd5b8535945060208601356128a9816124fd565b935060408601356128b9816124fd565b92506060860135915060808601356128d0816124fd565b809150509295509295909350565b6000602082840312156128f057600080fd5b5035919050565b80356001600160801b038116811461254857600080fd5b6000806040838503121561292157600080fd5b61292a836128f7565b9150612938602084016128f7565b90509250929050565b6000806040838503121561295457600080fd5b823561295f816124fd565b9150602083013561296f8161252f565b809150509250929050565b60008060006060848603121561298f57600080fd5b505081359360208301359350604090920135919050565b6000806000606084860312156129bb57600080fd5b8335925060208401356129cd816124fd565b929592945050506040919091013590565b600080600080600080600060e0888a0312156129f957600080fd5b8735612a04816124fd565b96506020880135612a14816124fd565b95506040880135612a248161252f565b945060608801359350608088013560ff81168114612a4157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600060208284031215612a7057600080fd5b6114a7826128f7565b8035600f81900b811461254857600080fd5b80356001600160701b038116811461254857600080fd5b60006101808284031215612ab557600080fd5b612abd61240d565b612ac6836128f7565b8152612ad4602084016128f7565b6020820152612ae5604084016128f7565b6040820152612af6606084016128f7565b6060820152612b0760808401612a79565b6080820152612b1860a084016128f7565b60a0820152612b2960c084016128f7565b60c0820152612b3a60e084016128f7565b60e0820152610100612b4d81850161253d565b90820152610120612b5f84820161253d565b90820152610140612b71848201612a8b565b90820152610160612b838482016128f7565b908201529392505050565b600060208284031215612ba057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201612bd257612bd2612ba7565b5060000390565b60008251612beb818460208701612437565b9190910192915050565b81810381811115610d8057610d80612ba7565b80820180821115610d8057610d80612ba7565b8181036000831280158383131683831282161715611ff657611ff6612ba7565b8082028115828204841417610d8057610d80612ba7565b634e487b7160e01b600052601260045260246000fd5b60008060008060808587031215612c7e57600080fd5b84519350602085015192506040850151915060608501516128748161252f565b600082612cad57612cad612c52565b500690565b600082612cc157612cc1612c52565b600160ff1b821460001984141615612cdb57612cdb612ba7565b50059056fea264697066735822122076069136728fcabbc143879a4bc3ca7342b273f5762db0e1ce03eea99c9a120c64736f6c634300081400336102606040523480156200001257600080fd5b5060405162003dd338038062003dd3833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516139786200045b60003960008181610d780152611d78015260008181610d510152611d3b01526000610e18015260008181610df20152611f30015260008181610dcc0152611f0a015260008181610da20152611ee401526000610f5401526000610f2f01526000610f0a01526000610ee7015260008181610e8c0152611f56015260008181610e3e015281816110bb0152612677015260008181610e650152612b9f0152600081816106190152610d2501526000818161074901528181610d000152818161107c0152818161239f0152818161254c015281816125950152818161273e01528181612787015281816128c50152818161297101528181612a5d0152612b0901526139786000f3fe608060405234801561001057600080fd5b50600436106102315760003560e01c80637180c8ca11610130578063bd85b039116100b8578063d81657431161007c578063d8165743146104ec578063e44808bc14610501578063e4af29d114610514578063e985e9c514610527578063fba560081461053a57600080fd5b8063bd85b0391461049e578063becee9c3146104b1578063c55dae63146104d1578063c69e16ad14610422578063cf210e65146104d957600080fd5b8063a22cb465116100ff578063a22cb4651461043d578063a42dce8014610450578063a510762614610463578063ab033ea914610476578063b0d965801461048957600080fd5b80637180c8ca146103fc5780637ecebe001461040f5780638e67f87e146104225780639cd241af1461042a57600080fd5b806320fc4881116101be57806346fbf68e1161018257806346fbf68e146103965780634e41a1fb146103b95780634ed2d6ac146103cc57806354fd4d50146103df57806360246c88146103e757600080fd5b806320fc4881146102f057806321ff32a914610335578063313ce567146103565780633656eec2146103705780633e691db91461038357600080fd5b806306fdde031161020557806306fdde031461028f5780630a4e14931461029757806314e5f07b146102b757806317fad7fc146102ca5780631c0f12b6146102dd57600080fd5b8062ad800c1461023657806301681a621461025f57806302329a291461027457806304baa00b14610287575b600080fd5b610249610244366004612df0565b610569565b6040516102569190612e59565b60405180910390f35b61027261026d366004612e81565b6105a0565b005b610272610282366004612eac565b6105ac565b6102496105b5565b6102496105f4565b61029f61060b565b6040516001600160a01b039091168152602001610256565b6102726102c5366004612ed8565b61064b565b6102726102d8366004612fb3565b610667565b6102726102eb366004613048565b61067d565b6103036102fe366004612df0565b610690565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610256565b610348610343366004613090565b6106fc565b604051908152602001610256565b61035e610742565b60405160ff9091168152602001610256565b61034861037e3660046130d2565b6107dd565b610348610391366004613102565b610816565b6103a96103a4366004612e81565b610821565b6040519015158152602001610256565b6102496103c7366004612df0565b610857565b6102726103da36600461313d565b610865565b6102496108b3565b6103ef6108e8565b6040516102569190613187565b61027261040a366004613228565b610bf7565b61034861041d366004612e81565b610c05565b610348610c31565b610272610438366004613256565b610c4b565b61027261044b366004613228565b610c5c565b61027261045e366004612e81565b610cc8565b610272610471366004612e81565b610cd1565b610272610484366004612e81565b610cda565b610491610ce3565b604051610256919061328e565b6103486104ac366004612df0565b610f91565b6104c46104bf3660046133b4565b610fb3565b60405161025691906133f6565b61029f61106e565b6103486104e7366004612df0565b6110ae565b6104f46110f7565b604051610256919061343a565b61027261050f36600461354b565b611203565b610272610522366004612e81565b61124b565b6103a96105353660046135aa565b611254565b610542611298565b6040805182516001600160801b039081168252602093840151169281019290925201610256565b606061059b610577836112f7565b6040516020016105879190612e59565b60405160208183030381529060405261141f565b919050565b6105a981611443565b50565b6105a9816115b9565b60606105f16040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b8152506040516020016105879190612e59565b90565b60606105f1600160405160200161058791906135d8565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105f19101610587565b61065c898989898989898989611655565b505050505050505050565b61067586868686868661184c565b505050505050565b61068a8484848433611900565b50505050565b604080516060810182526000808252602082018190529181019190915261059b60086000848152602001908152602001600020604051602001610587919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60008381526012602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261073b9101610587565b9392505050565b60006105f17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c99190613684565b6040805160ff909216602083015201610587565b6000828152600f602090815260408083206001600160a01b03851684528252808320548151928301526108109101610587565b92915050565b600061081082611ac1565b6001600160a01b0381166000908152600e6020908152604080832054905161059b926105879260ff169101901515815260200190565b606061059b61057783611bff565b8361086f81611cfd565b6001600160a01b0316336001600160a01b0316146108a057604051632aab8bd360e01b815260040160405180910390fd5b6108ac85858585611dba565b5050505050565b60606105f1604051806040016040528060078152602001663b18971817189960c91b8152506040516020016105879190612e59565b610961604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061096b611e27565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916109d691906136cd565b6109e091906136e0565b905060008215610af25773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a0d85611e3f565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae291906136f3565b509050610aef8184611fd5565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610bc357610bbe8486611fea565b610bc6565b60005b81526003546001600160801b0316602091820152604051919250610bf09161058791849101613187565b5050505090565b610c018282611fff565b5050565b6001600160a01b03811660009081526013602090815260408083205481519283015261059b9101610587565b60006105f1600d5460405160200161058791815260200190565b610c5783838333611dba565b505050565b3360008181526011602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6105a981612088565b6105a9816120fc565b6105a981612170565b610ceb612d09565b60408051610200810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f00000000000000000000000000000000000000000000000000000000000000006101208601527f00000000000000000000000000000000000000000000000000000000000000006101408601526009548416610160860152600a548416610180860152600b5484166101a0860152600c549093166101c0850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101e083019190915291516105f19261058792910161328e565b60008181526010602090815260408083205481519283015261059b9101610587565b606060008267ffffffffffffffff811115610fd057610fd0613718565b604051908082528060200260200182016040528015610ff9578160200160208202803683370190505b50905060005b8381101561105257600085858381811061101b5761101b61372e565b9050602002013590506000815490508084848151811061103d5761103d61372e565b60209081029190910101525050600101610fff565b506110678160405160200161058791906133f6565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105f19101610587565b600061059b6110e56110e07f0000000000000000000000000000000000000000000000000000000000000000856136cd565b6121e4565b60405160200161058791815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f16002604051602001610587919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461120d81611cfd565b6001600160a01b0316336001600160a01b03161461123e57604051632aab8bd360e01b815260040160405180910390fd5b6106758686868686611900565b6105a981612228565b6001600160a01b038281166000908152601160209081526040808320938516835292815282822054835160ff90911615159181019190915290916108109101610587565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f190606001610587565b606060f882901c6001600160f81b03831660006113138261229c565b90506000836003811115611329576113296136a1565b0361135b576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611417565b600183600381111561136f5761136f6136a1565b0361139b57806040516020016113859190613744565b6040516020818303038152906040529350611417565b60028360038111156113af576113af6136a1565b036113c55780604051602001611385919061377d565b60038360038111156113d9576113d96136a1565b03611417576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161143a9190612e59565b60405180910390fd5b61144b612351565b600b54336000908152600e60205260409020546001600160a01b039091169060ff161580156114835750336001600160a01b03821614155b801561149a57506009546001600160a01b03163314155b156114b7576040516282b42960e81b815260040160405180910390fd5b60006114c161237b565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561150b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152f91906137b7565b90506115456001600160a01b038516848361240f565b8161154e61237b565b1461156c576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105a96001600055565b336000908152600e602052604090205460ff161580156115e457506009546001600160a01b03163314155b15611601576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061164a90831515815260200190565b60405180910390a150565b834211156116765760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661169d5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526013602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561178b573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117c957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389811660008181526013602090815260408083208054600101905560118252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061186957506001600160a01b038516155b156118875760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118a75760405163174861a760e31b815260040160405180910390fd5b60005b838110156118f7576118ef8585838181106118c7576118c761372e565b9050602002013588888686868181106118e2576118e261372e565b9050602002013533611900565b6001016118aa565b50505050505050565b6001600160a01b038416158061191d57506001600160a01b038316155b1561193b5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146119ff576001600160a01b0380851660009081526011602090815260408083209385168352929052205460ff166119ff5760008581526012602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146119fd5760008681526012602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906119f79084906136e0565b90915550505b505b6000858152600f602090815260408083206001600160a01b038816845290915281208054849290611a319084906136e0565b90915550506000858152600f602090815260408083206001600160a01b038716845290915281208054849290611a689084906136cd565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611acb612351565b611ad482612461565b600a546001600160a01b031680611aee6020850185612e81565b6001600160a01b031614611b1557604051630ad13b3360e21b815260040160405180910390fd5b336000908152600e602052604090205460ff16158015611b3e5750336001600160a01b03821614155b8015611b5557506009546001600160a01b03163314155b15611b72576040516282b42960e81b815260040160405180910390fd5b6000611b7c611e27565b600d80546000909155909150611b93818387612497565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a60383618584611bd260408a0160208b01612eac565b60408051938452602084019290925215159082015260600160405180910390a250505061059b6001600055565b606060f882901c6001600160f81b0383166000611c1b8261229c565b90506000836003811115611c3157611c316136a1565b03611c63576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611417565b6001836003811115611c7757611c776136a1565b03611c8d578060405160200161138591906137d0565b6002836003811115611ca157611ca16136a1565b03611cb757806040516020016113859190613808565b6003836003811115611ccb57611ccb6136a1565b0361141757505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526012602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611e3a670de0b6b3a7640000612531565b905090565b611ea36040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f9b911661262c565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fcd9290041661262c565b905292915050565b600061073b8383670de0b6b3a76400006126a2565b600061073b83670de0b6b3a7640000846126a2565b6009546001600160a01b03163314612029576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600e6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6009546001600160a01b031633146120b2576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6009546001600160a01b03163314612126576040516282b42960e81b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517fae062fb82c932c653cd44617343ecda1d13e375e0d6f20d969c944fbda1963d390600090a250565b6009546001600160a01b0316331461219a576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b600061220c601060006121f86002866126c0565b8152602001908152602001600020546126f5565b61221e601060006121f86001876126c0565b6108109190613834565b6009546001600160a01b03163314612252576040516282b42960e81b815260040160405180910390fd5b600b80546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415612343576122d7600a8661386a565b6122e29060306136cd565b60f81b8260016122f284876136e0565b6122fc91906136e0565b8151811061230c5761230c61372e565b60200101906001600160f81b031916908160001a9053508061232d8161387e565b915061233c9050600a86613897565b94506122c6565b918290030190815292915050565b60026000540361237457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611e3a906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156123e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240a91906137b7565b612723565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c5790849061280c565b60006124706020830183612e81565b6001600160a01b0316036105a95760405163f0dd15fd60e01b815260040160405180910390fd5b6000806124a48585611fd5565b90506124af81612723565b9450846000036124c357600091505061073b565b6124d36040840160208501612eac565b15612502576124fb856124e96020860186612e81565b6124f660408701876138ab565b61286f565b9150612529565b612525856125136020860186612e81565b61252060408701876138ab565b612a09565b8491505b509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161258057504761260b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061260891906137b7565b90505b60145460000361261c57600061073b565b60145461073b90849083906126a2565b600080670de0b6b3a7640000612640612b97565b61264a91906138f2565b905080831161265a576000612664565b61266481846136e0565b915061073b61269b670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138f2565b8390611fea565b60008260001904841183021582026126b957600080fd5b5091020490565b60006001600160f81b038211156126ea5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b0382111561271f5760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127725750476127fd565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156127d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fa91906137b7565b90505b60145461073b908490836126a2565b60006128216001600160a01b03841683612bc3565b905080516000141580156128465750808060200190518101906128449190613909565b155b15610c5757604051635274afe760e01b81526001600160a01b038416600482015260240161143a565b600060145485116128805784612884565b6014545b9450600061289186612531565b905085601460008282546128a591906136e0565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161294b576040516001600160a01b038716908390600081818185875af1925050503d806000811461293b576040519150601f19603f3d011682016040523d82523d6000602084013e612940565b606091505b5050809150506129e1565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129de9190613909565b90505b806129ff576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6014548411612a185783612a1c565b6014545b93506000612a2985612531565b90508460146000828254612a3d91906136e0565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612ae3576040516001600160a01b038616908390600081818185875af1925050503d8060008114612ad3576040519150601f19603f3d011682016040523d82523d6000602084013e612ad8565b606091505b505080915050612b79565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612b52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b769190613909565b90505b80610675576040516312171d8360e31b815260040160405180910390fd5b6000611e3a427f0000000000000000000000000000000000000000000000000000000000000000612bd1565b606061073b83836000612be7565b6000612bdd828461386a565b61073b90846136e0565b606081471015612c0c5760405163cd78605960e01b815230600482015260240161143a565b600080856001600160a01b03168486604051612c289190613926565b60006040518083038185875af1925050503d8060008114612c65576040519150601f19603f3d011682016040523d82523d6000602084013e612c6a565b606091505b5091509150612c7a868383612c84565b9695505050505050565b606082612c9957612c9482612ce0565b61073b565b8151158015612cb057506001600160a01b0384163b155b15612cd957604051639996b31560e01b81526001600160a01b038516600482015260240161143a565b508061073b565b805115612cf05780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612deb6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612e0257600080fd5b5035919050565b60005b83811015612e24578181015183820152602001612e0c565b50506000910152565b60008151808452612e45816020860160208601612e09565b601f01601f19169290920160200192915050565b60208152600061073b6020830184612e2d565b6001600160a01b03811681146105a957600080fd5b600060208284031215612e9357600080fd5b813561073b81612e6c565b80151581146105a957600080fd5b600060208284031215612ebe57600080fd5b813561073b81612e9e565b60ff811681146105a957600080fd5b60008060008060008060008060006101208a8c031215612ef757600080fd5b8935985060208a0135975060408a0135612f1081612e6c565b965060608a0135612f2081612e6c565b955060808a0135612f3081612e9e565b945060a08a0135935060c08a0135612f4781612ec9565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612f7957600080fd5b50813567ffffffffffffffff811115612f9157600080fd5b6020830191508360208260051b8501011115612fac57600080fd5b9250929050565b60008060008060008060808789031215612fcc57600080fd5b8635612fd781612e6c565b95506020870135612fe781612e6c565b9450604087013567ffffffffffffffff8082111561300457600080fd5b6130108a838b01612f67565b9096509450606089013591508082111561302957600080fd5b5061303689828a01612f67565b979a9699509497509295939492505050565b6000806000806080858703121561305e57600080fd5b84359350602085013561307081612e6c565b9250604085013561308081612e6c565b9396929550929360600135925050565b6000806000606084860312156130a557600080fd5b8335925060208401356130b781612e6c565b915060408401356130c781612e6c565b809150509250925092565b600080604083850312156130e557600080fd5b8235915060208301356130f781612e6c565b809150509250929050565b60006020828403121561311457600080fd5b813567ffffffffffffffff81111561312b57600080fd5b82016060818503121561073b57600080fd5b6000806000806080858703121561315357600080fd5b84359350602085013561316581612e6c565b925060408501359150606085013561317c81612e6c565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561323b57600080fd5b823561324681612e6c565b915060208301356130f781612e9e565b60008060006060848603121561326b57600080fd5b83359250602084013561327d81612e6c565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516132ba60208401826001600160a01b03169052565b5060408301516132d560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613347828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b600080602083850312156133c757600080fd5b823567ffffffffffffffff8111156133de57600080fd5b6133ea85828601612f67565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561342e57835183529284019291840191600101613412565b50909695505050505050565b81516001600160801b031681526101808101602083015161346660208401826001600160801b03169052565b50604083015161348160408401826001600160801b03169052565b50606083015161349c60608401826001600160801b03169052565b5060808301516134b16080840182600f0b9052565b5060a08301516134cc60a08401826001600160801b03169052565b5060c08301516134e760c08401826001600160801b03169052565b5060e083015161350260e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526133ac565b600080600080600060a0868803121561356357600080fd5b85359450602086013561357581612e6c565b9350604086013561358581612e6c565b925060608601359150608086013561359c81612e6c565b809150509295509295909350565b600080604083850312156135bd57600080fd5b82356135c881612e6c565b915060208301356130f781612e6c565b600060208083526000845481600182811c9150808316806135fa57607f831692505b858310810361361757634e487b7160e01b85526022600452602485fd5b878601838152602001818015613634576001811461364a57613675565b60ff198616825284151560051b82019650613675565b60008b81526020902060005b8681101561366f57815484820152908501908901613656565b83019750505b50949998505050505050505050565b60006020828403121561369657600080fd5b815161073b81612ec9565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610810576108106136b7565b81810381811115610810576108106136b7565b6000806040838503121561370657600080fd5b8251915060208301516130f781612e9e565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613770816011850160208701612e09565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516137aa816012850160208701612e09565b9190910160120192915050565b6000602082840312156137c957600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516137fb816010850160208701612e09565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613770816011850160208701612e09565b8181036000831280158383131683831282161715611067576110676136b7565b634e487b7160e01b600052601260045260246000fd5b60008261387957613879613854565b500690565b600060018201613890576138906136b7565b5060010190565b6000826138a6576138a6613854565b500490565b6000808335601e198436030181126138c257600080fd5b83018035915067ffffffffffffffff8211156138dd57600080fd5b602001915036819003821315612fac57600080fd5b8082028115828204841417610810576108106136b7565b60006020828403121561391b57600080fd5b815161073b81612e9e565b60008251613938818460208701612e09565b919091019291505056fea2646970667358221220d7f92fbb04bc845b5553705e6e84a127f45e25a89f47f9c10796e02510ba667764736f6c634300081400336102606040523480156200001257600080fd5b506040516200421638038062004216833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613d3c620004da6000396000505060005050600050506000818160af015281816103250152612fcd0152600081816113da015281816117ec0152818161184f01528181612bab01528181612be701528181612de60152612fa701526000818161071301528181610d6301528181610daa01528181610f6f015281816116510152818161169f0152612f8101526000611c0f015260008181611d35015281816123aa01526124230152600081816108d701528181610f0701528181611d0901526123f7015260008181610dfc015261237001526000818161073401528181610d4101528181610dcb01528181610f900152818161162f015281816116c00152612ff301526000818161080f01528181610e86015281816117480152818161224501526135110152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260005050600081816119e101528181611a2a01528181612648015281816126910152818161276c015281816128180152818161290401526129b00152613d3c6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046137bf565b610073565b60405190815260200160405180910390f35b61004e61006e3660046137bf565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bee565b3387610c23565b6000806000806000806101568b888e610cfc565b95509550955095509550955060008c90508c4210156102165782600d60008282546101819190613834565b9091555061019990506101926105ca565b4284610ff0565b6101a68c8887878561112e565b60006101b18e6112a8565b90506101cf6101bf8e6112f2565b6101c99083613847565b82611320565b6101d8896113d3565b6101e4576101e4611433565b60006101ef8a61144c565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b6102208689611459565b955061022b8861144c565b505b600061023a878a8d61153a565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bee565b61027a6020830183613867565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161389e565b6102cc8a6102c68d8f613834565b906115d5565b8d6102da60408c018c6138bb565b6040516102ee98979695949392919061392b565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bee565b6000806000806000806103bb8b888e6115ea565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e69190613834565b909155506103f790506101926105ca565b6104048c888787856117d5565b600061040f826112a8565b905061042761041d8e6112f2565b6101c99083613973565b610430896113d3565b61043c5761043c611433565b60006104478a61144c565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b6104788689611459565b95506104838861144c565b505b6000610492878a8d61153a565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bee565b6104d06020830183613867565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161389e565b8a61051c60408b018b6138bb565b60405161052f979695949392919061399b565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613867565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119c6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611ac1565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613834565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611ad7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b92505b5061076583611b0f565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6139dc565b8a84610ff0565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613834565b4290611b39565b84610ff0565b61080288611b4e565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6139dc565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bee565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611cf2565b9150915080600d60008282546108a59190613834565b909155506108c19050866000846108bb816112f2565b8861112e565b6108cb8183613834565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dc1565b915061090f61090a83856115d5565b611e0b565b600680546002906109309084906201000090046001600160701b03166139ef565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611b0f565b6006805460109061097f908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bee565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611cf2565b9150915080600d60008282546109f69190613834565b90915550610a12905083600084610a0c816112f2565b8a6117d5565b610a1c81836139dc565b9150610a2b61090a83876115d5565b60068054600290610a4c9084906201000090046001600160701b03166139ef565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611b0f565b60068054601090610a9b908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f2565b610add836112f2565b610ae79190613847565b6000611320565b8e610af98482611e35565b50505b6000610b078461202f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd7578e610bd35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061218d565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6657604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca99084906139dc565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d10611ad7565b90506000610d1d8a612218565b6002549091508c908c90610d87908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612269565b600254919d509a50909550610def908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b9550610e25858c610e20897f00000000000000000000000000000000000000000000000000000000000000006122d9565b612309565b15610e3257610e32611433565b6000806000610e4385878b8761234b565b9c5091945092509050610e5681846139dc565b610e609089613834565b9750610e6c8284613834565b610e76908d613834565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eb091906139dc565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef85760008b8152600860205260409020600101546001600160801b0316610efa565b8b5b90508b610f2b8e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611dc1565b9950610f37878a6139dc565b9850670de0b6b3a7640000610fb4610f4f8787613834565b600254610f6d908f90600160801b90046001600160801b03166139dc565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b1115610fc257610fc2611433565b610fd28a8a878a8787600061245f565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101c5750505050565b6000848152600860205260408120546001600160801b0316908190036110765761104583611b0f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f4565b6110c76110c2670de0b6b3a764000061108f88866139dc565b6110999190613a2f565b85670de0b6b3a76400006110ad878a6139dc565b6110b79190613a2f565b8592919060016124fe565b611b0f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fd84611b0f565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111776110c28261115a670de0b6b3a764000086613a2f565b600554600160801b90046001600160801b031691908a60006124fe565b600580546001600160801b03928316600160801b02921691909117905561119d86611b0f565b6111a79082613a46565b600480546001600160801b03928316600160801b0292169190911790556111cd84611b0f565b600280546000906111e89084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611215836125a8565b6004805460009061122a908490600f0b613a66565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125a85611b0f565b6002805460109061127c908490600160801b90046001600160801b0316613a46565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112d0601060006112bc600286610bee565b8152602001908152602001600020546112f2565b6112e2601060006112bc600187610bee565b6112ec9190613847565b92915050565b60006001600160ff1b0382111561131c5760405163396ea70160e11b815260040160405180910390fd5b5090565b600061134961132f84836125e4565b61133a8460006125e4565b6113449190613847565b6125a8565b9050600081600f0b131561139e57600380548291906000906113759084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156113ce576113b381613a93565b600380546000906113759084906001600160801b0316613a46565b505050565b60006113ff7f0000000000000000000000000000000000000000000000000000000000000000836125fa565b60035461141591906001600160801b0316613834565b60025461142b906001600160801b0316846115d5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ec826004611e35565b600080600061146784611b4e565b9092509050600061147886866115d5565b9050818311156114905761148d86838561260f565b95505b828110156114a25780830392506114a7565b600092505b6114b083611e0b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561150357869003611507565b5060005b61151081611b0f565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061154785856115d5565b90506115528161262d565b9450846000036115665760009150506115ce565b611576604084016020850161389e565b156115a55761159e8561158c6020860186613867565b61159960408701876138bb565b612716565b91506115cc565b6115c8856115b66020860186613867565b6115c360408701876138bb565b6128b0565b8491505b505b9392505050565b60006115ce8383670de0b6b3a764000061260f565b6000806000806000806000806115fe611ad7565b9050600061160b8a612218565b6002549091508b908d90611675908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a46565b600254919d509b50909550600090819081906116e4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611af8565b98506116f284878b8861234b565b9c50919450909250905061170682846139dc565b61171090896139dc565b975061171c8184613834565b611726908e6139dc565b9c506117328a8e613834565b9b50505050505050506117bf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f61177291906139dc565b81526020810191909152604001600020600101546001600160801b0316428e116117b65760008e8152600860205260409020600101546001600160801b03166117b8565b8e5b600161245f565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061181757507f000000000000000000000000000000000000000000000000000000000000000061181585836139dc565b105b1561182457611824611433565b6004549084900390600f0b6118398482613847565b905083611845866112f2565b13801561187a57507f00000000000000000000000000000000000000000000000000000000000000006118788383612a9a565b105b1561188757611887611433565b600354600160801b90046001600160801b03166118c96110c2826118b3670de0b6b3a764000088613a2f565b6005546001600160801b031691908c60006124fe565b600580546001600160801b0319166001600160801b03929092169190911790556118f388826139dc565b90506118fe81611b0f565b600380546001600160801b03928316600160801b02921691909117905561192483611b0f565b600280546001600160801b0319166001600160801b039290921691909117905561194d826125a8565b600480546001600160801b0319166001600160801b039290921691909117905561197687611b0f565b60028054601090611998908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a15575047611aa0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9d9190613ab9565b90505b601454600003611ab15760006115ce565b6014546115ce908490839061260f565b6000611acd8284613ae8565b6115ce90846139dc565b6002546004546000916105c5916001600160801b0390911690600f0b612a9a565b600061008182611b0985888861260f565b90612ac0565b60006001600160801b0382111561131c57604051630f0af95160e11b815260040160405180910390fd5b6000818311611b4857826115ce565b50919050565b6006546000908190611b71908490600160801b90046001600160801b03166115d5565b6006546201000090046001600160701b03169250905081811115611ced576000611b9b83836139dc565b9050611baa6110c28286612b35565b60068054601090611bcc908490600160801b90046001600160801b0316613a46565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c058583612b4a90919063ffffffff16565b90506000611c33827f00000000000000000000000000000000000000000000000000000000000000006115d5565b905080600d6000828254611c479190613834565b90915550611c57905081836139dc565b9150611c6282611b0f565b60028054600090611c7d9084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611caa82612b5f565b60048054600090611cbf908490600f0b613a66565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cff8785612b4a565b91506000611d2d837f00000000000000000000000000000000000000000000000000000000000000006115d5565b9050611d59817f00000000000000000000000000000000000000000000000000000000000000006115d5565b91508315611d7c57611d6b82826139dc565b611d7590846139dc565b9250611d93565b611d8682826139dc565b611d909084613834565b92505b86861015611db657611da683878961260f565b9250611db382878961260f565b91505b509550959350505050565b600080611dd984611dd38a888a61260f565b90612b4a565b9050611de688848661260f565b611df09082613834565b905086811115611e005786810391505b509695505050505050565b60006001600160701b0382111561131c5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e80916001600160801b0316906139dc565b905080600003611e945760019150506112ec565b6000611e9f85612b89565b905080600003611eb4576001925050506112ec565b600080611ec2838589612c25565b9150915080611ed85760009450505050506112ec565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f14929190613b7a565b6040805180830381865af4158015611f30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f549190613bf0565b91509150611f72611f64826112f2565b611f6d90613c14565b612da0565b925082611f8857600096505050505050506112ec565b611f9182611b0f565b60078054600090611fac9084906001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fd981611b0f565b60078054601090611ffb908490600160801b90046001600160801b0316613a0f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61205887612f38565b6040518263ffffffff1660e01b81526004016120749190613c30565b6040805180830381865af4158015612090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b49190613c3f565b91509150806120ca575060009485945092505050565b60008086116120da5760006120e4565b6120e483876115d5565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b039092169161214f9190613834565b61215991906139dc565b9050806000036121725750600096879650945050505050565b600061217e8383612b4a565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121b3576121b3613c6f565b6040519080825280601f01601f1916602001820160405280156121dd576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121fe578692505b828152826000602083013e90999098509650505050505050565b6000806122236105ca565b905080831161223357600061223d565b61223d81846139dc565b91506115ce827f0000000000000000000000000000000000000000000000000000000000000000612b4a565b6000808061228a61228288670de0b6b3a76400006139dc565b899087613072565b905086156122cc5761229c88886125fa565b91506122bd8a8a846122b68a670de0b6b3a76400006139dc565b8989613098565b92506122c98382613834565b90505b9750975097945050505050565b60006122f76122f084670de0b6b3a76400006139dc565b83906125fa565b6115ce90670de0b6b3a76400006139dc565b60008061234085612318611ad7565b6123229190613834565b600254610f6d908790600160801b90046001600160801b03166139dc565b909210949350505050565b60008080806123a2878661239b8b61239561236e8c670de0b6b3a76400006139dc565b7f0000000000000000000000000000000000000000000000000000000000000000906125fa565b906125fa565b9190613072565b93506123ce847f00000000000000000000000000000000000000000000000000000000000000006115d5565b915060006123ef6123e789670de0b6b3a76400006139dc565b8a9088613072565b905061241b817f00000000000000000000000000000000000000000000000000000000000000006125fa565b9350612447847f00000000000000000000000000000000000000000000000000000000000000006115d5565b6124519084613834565b915050945094509450949050565b600080600080600080888810156124ce578615612484576124818d898b61260f565b9c505b61248f8c898b61260f565b9b5061249a8b6112f2565b6124a38d6112f2565b6124ad9190613847565b90506124ba8b898b61260f565b9a506124c78a898b61260f565b99506124ed565b6124d78b6112f2565b6124e08d6112f2565b6124ea9190613847565b90505b9b9c9a9b999a975050505050505050565b60008260000361250f57508461259f565b8115612562576125406125228487613834565b61252c85876115d5565b612536888a6115d5565b611dd39190613834565b9050600061254e8588611b39565b90508082101561255c578091505b5061259f565b8285036125715750600061259f565b61259c61257e84876139dc565b61258885876125fa565b612592888a6115d5565b611dd391906139dc565b90505b95945050505050565b600060016001607f1b03198212806125c6575060016001607f1b0382135b1561131c5760405163a5353be560e01b815260040160405180910390fd5b60008183136125f357816115ce565b5090919050565b60006115ce8383670de0b6b3a7640000613072565b600082600019048411830215820261262657600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161267c575047612707565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127049190613ab9565b90505b6014546115ce9084908361260f565b60006014548511612727578461272b565b6014545b94506000612738866119c6565b9050856014600082825461274c91906139dc565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127f2576040516001600160a01b038716908390600081818185875af1925050503d80600081146127e2576040519150601f19603f3d011682016040523d82523d6000602084013e6127e7565b606091505b505080915050612888565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128859190613c85565b90505b806128a6576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60145484116128bf57836128c3565b6014545b935060006128d0856119c6565b905084601460008282546128e491906139dc565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161298a576040516001600160a01b038616908390600081818185875af1925050503d806000811461297a576040519150601f19603f3d011682016040523d82523d6000602084013e61297f565b606091505b505080915050612a20565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a1d9190613c85565b90505b80612a3e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612a67612a5f88670de0b6b3a76400006139dc565b89908761260f565b905086156122cc57612a7988886115d5565b91506122bd8a8a84612a938a670de0b6b3a76400006139dc565b89896130bb565b600080612aa784846130cc565b909250905080612ab957612ab9611433565b5092915050565b600081600003612ad95750670de0b6b3a76400006112ec565b82600003612ae9575060006112ec565b6000612af4836112f2565b90506000612b09612b04866112f2565b61310b565b9050818102612b20670de0b6b3a764000082613ca2565b9050612b2b81613331565b9695505050505050565b60006115ce83670de0b6b3a764000084613072565b60006115ce83670de0b6b3a76400008461260f565b600060016001607f1b0382111561131c5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612ba4906001600160801b031684612b35565b9050612bd07f000000000000000000000000000000000000000000000000000000000000000082613834565b6002546001600160801b03161115611b48576002547f000000000000000000000000000000000000000000000000000000000000000090612c1b9083906001600160801b03166139dc565b6115ce91906139dc565b612c2d61370c565b600080612c3984612f38565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c749190613c30565b6040805180830381865af4158015612c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb49190613c3f565b9350905082612cc9575060009150612d989050565b6000612cf0612ceb8461016001518561014001516115d590919063ffffffff16565b6112f2565b612d10612ceb8561012001518661010001516125fa90919063ffffffff16565b612d1a9190613847565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e7d9190613cd0565b935093509350935080612e995750600098975050505050505050565b868414612eca57612ea984611b0f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612efb57612eda836125a8565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f2957612f0b82611b0f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f4061375e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161303891166134c6565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261306a929004166134c6565b905292915050565b600082600019048411830215820261308957600080fd5b50910281810615159190040190565b6000806130a988888888888861353c565b909250905080611e0057611e00611433565b6000806130a988888888888861361d565b6000806000836130db866112f2565b6130e59190613847565b905060008112156130fd576000809250925050613104565b9150600190505b9250929050565b600080821361312d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131b09084901c6112f2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361334c57506000919050565b680755bf798b4a1bf1e58212613375576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b2b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f2565b600080670de0b6b3a76400006134da6105ca565b6134e49190613a2f565b90508083116134f45760006134fe565b6134fe81846139dc565b91506115ce613535670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a2f565b8390612b4a565b600080600061354e89898888886136dd565b905086881015613565576000809250925050613612565b96869003966135748887612ac0565b97508781101561358b576000809250925050613612565b878103613599818688613072565b9050670de0b6b3a764000081106135cd576135c66135bf670de0b6b3a764000089612b35565b8290612ac0565b90506135e5565b6135e26135bf670de0b6b3a764000089612b4a565b90505b6135ef8186612b35565b90508981101561360757600080935093505050613612565b899003925060019150505b965096945050505050565b600080600061362f89898888886136dd565b905061363f86611b09898b613834565b975087811015613656576000809250925050613612565b878103613664818688613072565b9050670de0b6b3a764000081106136915761368a6135bf670de0b6b3a764000089612b35565b90506136a9565b6136a66135bf670de0b6b3a764000089612b4a565b90505b6136b38186612b35565b9050808a10156136cb57600080935093505050613612565b90980398600198509650505050505050565b60006136e98585612ac0565b6137026136fa86611b09868b6125fa565b859085613072565b61259c9190613834565b60405180610120016040528061372061375e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156137d557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561380157600080fd5b85016060818803121561381357600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ec576112ec61381e565b8181036000831280158383131683831282161715612ab957612ab961381e565b60006020828403121561387957600080fd5b81356001600160a01b03811681146115ce57600080fd5b80151581146105af57600080fd5b6000602082840312156138b057600080fd5b81356115ce81613890565b6000808335601e198436030181126138d257600080fd5b83018035915067ffffffffffffffff8211156138ed57600080fd5b60200191503681900382131561310457600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061396560e083018486613902565b9a9950505050505050505050565b80820182811260008312801582168215821617156139935761399361381e565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006139cf60c083018486613902565b9998505050505050505050565b818103818111156112ec576112ec61381e565b6001600160701b03818116838216019080821115612ab957612ab961381e565b6001600160801b03818116838216019080821115612ab957612ab961381e565b80820281158282048414176112ec576112ec61381e565b6001600160801b03828116828216039080821115612ab957612ab961381e565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ec576112ec61381e565b600081600f0b60016001607f1b03198103613ab057613ab061381e565b60000392915050565b600060208284031215613acb57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613af757613af7613ad2565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b8e828551613afc565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c0357600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c2957613c2961381e565b5060000390565b61018081016112ec8284613afc565b60008060408385031215613c5257600080fd5b825191506020830151613c6481613890565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613c9757600080fd5b81516115ce81613890565b600082613cb157613cb1613ad2565b600160ff1b821460001984141615613ccb57613ccb61381e565b500590565b60008060008060808587031215613ce657600080fd5b84519350602085015192506040850151915060608501516138138161389056fea2646970667358221220604722529255f0ffd69040c7954adafc0400f7631bdc719b9f8cb41c7e6c4bf164736f6c634300081400336102606040523480156200001257600080fd5b506040516200443838038062004438833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f2562000513600039600050506000505060005050600081816101000152818161031001526131f40152600081816114c901528181611fef01528181612052015281816128be01528181612dd901528181612e150152818161300d01526131ce01526000818161083e01528181610d6b01528181610dad01528181610ec40152818161133c0152818161139b015281816118750152818161190801526131a801526000611c0e015260008181611d340152818161279d01528181612aae0152612b27015260008181610a0201528181610e200152818161143601528181611d080152612afb015260008181610dff015281816127590152612a7a01526000818161085f01528181610d4901528181610dce01528181610ee50152818161131a015281816113bc015261321a0152600081816101de015281816103a80152818161093a01526137d80152600081816106f801528181610778015281816107ee015281816108ba01526108f20152600050506000818161055601528181611673015281816116bc0152818161174e015281816117cf01528181611976015281816119f70152818161293f0152818161298801528181612bf40152612c3d0152613f256000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046139a8565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046139a8565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106d2565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106f0565b905061017a818460046001610721565b50600080600061018a8787610d1a565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613a1d565b909155506101d99050844283610f23565b6102037f000000000000000000000000000000000000000000000000000000000000000085613a1d565b98506102118389888c611061565b600061021e60018b6111fb565b90506102378161023160208e018e613a30565b8b611230565b8d8a8a898e8561024a6020830183613a30565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613a67565b8961029560408a018a613a84565b6040516102a89796959493929190613af4565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112d8565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106f0565b9050600061039f6103956106f0565b8460046001610721565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613a1d565b90506000806000806103e08e89886112eb565b600d8054949850929650909450925083916000906103ff908490613a1d565b909155506104109050874283610f23565b50600061041e84898d611471565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b896114a3565b60006104686002886111fb565b90508c6104828261047c6020840184613a30565b85611230565b858b86846104936020860186613a30565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613a67565b6104e4896104de8a8d613b35565b906106d2565b8d6104f260408e018e613a84565b604051610506989796959493929190613b48565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613a30565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061060d6040850160208601613a67565b1561063257610628856106236040870187613a84565b611657565b909350905061064e565b503461064a856106456040870187613a84565b6118eb565b8492505b6106566112d8565b915080156106c957604051600090339083908381818185875af1925050503d80600081146106a0576040519150601f19603f3d011682016040523d82523d6000602084013e6106a5565b606091505b50509050806106c7576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e78383670de0b6b3a7640000611a95565b90505b92915050565b600061071c427f0000000000000000000000000000000000000000000000000000000000000000611ab3565b905090565b600084815260086020526040812060018101546001600160801b031615158061074957504286115b1561076257600101546001600160801b03169050610d12565b600080600061076f6106f0565b9050600061079d7f00000000000000000000000000000000000000000000000000000000000000008b613a1d565b90505b81811015610813576000818152600860205260409020600101546001600160801b031680156107eb576000828152600860205260409020549094506001600160801b03169250610813565b507f0000000000000000000000000000000000000000000000000000000000000000016107a0565b8360000361088657889350610883610829611ac9565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b92505b5061089083611b0a565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e66108df7f00000000000000000000000000000000000000000000000000000000000000008b613b35565b8a84610f23565b6109248961091e6109177f000000000000000000000000000000000000000000000000000000000000000083613a1d565b4290611b38565b84610f23565b61092d88611b4d565b506000905060088161095f7f00000000000000000000000000000000000000000000000000000000000000008d613b35565b815260208101919091526040016000908120600101546001600160801b0316915061098b60028c6111fb565b6000818152601060205260408120549192508c8c8315610ad157600192506000806109ba86898d866000611cf1565b9150915080600d60008282546109d09190613a1d565b909155506109ec9050866000846109e681611dc0565b88611dea565b6109f68183613a1d565b9150610a2686838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f64565b9150610a3a610a3583856106d2565b611fae565b60068054600290610a5b9084906201000090046001600160701b0316613b90565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8882611b0a565b60068054601090610aaa908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ade6001846111fb565b6000818152601060205260409020549091508015610bed5760019450600080610b0b838b8f886001611cf1565b9150915080600d6000828254610b219190613a1d565b90915550610b3d905083600084610b3781611dc0565b8a611fd8565b610b478183613b35565b9150610b56610a3583876106d2565b60068054600290610b779084906201000090046001600160701b0316613b90565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba482611b0a565b60068054601090610bc6908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2757610c19610bff87611dc0565b610c0883611dc0565b610c129190613bd0565b60006121c9565b8e610c24848261227c565b50505b6000610c3284612476565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610d02578e610cfe5a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906125d4565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d2a611ac9565b600254909150610d8f908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061265f565b600254909450610df2908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b9150610e498785610e44857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061268b565b6126f0565b15610e5657610e56612732565b600080610e6489858a61274b565b9092509050610e738287613b35565b9550610e8081858a611a95565b9450610e8c858a613b35565b9650670de0b6b3a7640000610f09610ea48986613a1d565b600254610ec2908a90600160801b90046001600160801b0316613b35565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b1115610f1757610f17612732565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f4f5750505050565b6000848152600860205260408120546001600160801b031690819003610fa957610f7883611b0a565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611027565b610ffa610ff5670de0b6b3a7640000610fc28886613b35565b610fcc9190613bf0565b85670de0b6b3a7640000610fe0878a613b35565b610fea9190613bf0565b8592919060016127cb565b611b0a565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103084611b0a565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110a3610ff58261108d670de0b6b3a764000086613bf0565b6005546001600160801b031691908860016127cb565b600580546001600160801b0319166001600160801b03929092169190911790556110cc85611b0a565b600280546000906110e79084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061111484611b0a565b60028054601090611136908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116384611b0a565b61116d9082613bb0565b600380546001600160801b03808416600160801b0291161790559050600061119483612873565b90506111b2816111a387611dc0565b6111ad9084613c27565b6121c9565b6111bb846128b7565b6111c7576111c7612732565b60006111d285612917565b9050806111f257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112255760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611262908490613a1d565b909155505060008381526010602052604081208054839290611285908490613a1d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061071c670de0b6b3a7640000612924565b60008060008060006112fb611ac9565b600254909150611360908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612a1f565b93508761136d8589612a40565b111561137b5761137b612732565b60025460009081906113e0908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aea565b93506113f68a670de0b6b3a7640000868c612a55565b5091935090915061140990508183613b35565b6114139087613b35565b9550886114608161145a8d611428868c613b35565b8d6114338782612b63565b877f0000000000000000000000000000000000000000000000000000000000000000612b79565b90612a40565b975090945050505093509350935093565b60006114836040830160208401613a67565b1561148f57508261149c565b6114998484612b9e565b90505b9392505050565b6002546001600160801b0316838110156114bf576114bf612732565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114f7908390600f0b612bb3565b101561150557611505612732565b60045461154f90610ff590600160801b90046001600160801b0316611532670de0b6b3a764000086613bf0565b600554600160801b90046001600160801b031691908960016127cb565b600580546001600160801b03928316600160801b02921691909117905561157581611b0a565b600280546001600160801b0319166001600160801b039290921691909117905561159e85611b0a565b600280546010906115c0908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115ed85611b0a565b6004805460109061160f908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061163e83612873565b90506111b28161164d88611dc0565b6111ad9084613bd0565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116a7575047611732565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561170b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172f9190613c4f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016117ad578734101561179c576040516312171d8360e31b815260040160405180910390fd5b6117a68834613b35565b9050611847565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611820573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118449190613c68565b91505b81611865576040516312171d8360e31b815260040160405180910390fd5b6014546000036118aa57611899887f0000000000000000000000000000000000000000000000000000000000000000612b9e565b6014819055945092506118e3915050565b6014546000906118bc908a9086611a95565b905080601460008282546118d09190613a1d565b909155509095509093506118e392505050565b935093915050565b60006118f684612924565b90506014546000036119345761192c817f0000000000000000000000000000000000000000000000000000000000000000612b9e565b60145561195a565b600061193f82612bd9565b905080601460008282546119539190613a1d565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119d557823410156119c4576040516312171d8360e31b815260040160405180910390fd5b6119ce8334613b35565b9050611a6f565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6c9190613c68565b91505b81611a8d576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611aac57600080fd5b5091020490565b6000611abf8284613c9b565b6106e79084613b35565b60025460045460009161071c916001600160801b0390911690600f0b612bb3565b6000611b0182611afb858888611a95565b90612cc2565b95945050505050565b60006001600160801b03821115611b3457604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611b4757826106e7565b50919050565b6006546000908190611b70908490600160801b90046001600160801b03166106d2565b6006546201000090046001600160701b03169250905081811115611cec576000611b9a8383613b35565b9050611ba9610ff58286612d2d565b60068054601090611bcb908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c048583612b9e90919063ffffffff16565b90506000611c32827f00000000000000000000000000000000000000000000000000000000000000006106d2565b905080600d6000828254611c469190613a1d565b90915550611c5690508183613b35565b9150611c6182611b0a565b60028054600090611c7c9084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ca982612d42565b60048054600090611cbe908490600f0b613caf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cfe8785612b9e565b91506000611d2c837f00000000000000000000000000000000000000000000000000000000000000006106d2565b9050611d58817f00000000000000000000000000000000000000000000000000000000000000006106d2565b91508315611d7b57611d6a8282613b35565b611d749084613b35565b9250611d92565b611d858282613b35565b611d8f9084613a1d565b92505b86861015611db557611da5838789611a95565b9250611db2828789611a95565b91505b509550959350505050565b60006001600160ff1b03821115611b345760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e33610ff582611e16670de0b6b3a764000086613bf0565b600554600160801b90046001600160801b031691908a60006127cb565b600580546001600160801b03928316600160801b029216919091179055611e5986611b0a565b611e639082613c07565b600480546001600160801b03928316600160801b029216919091179055611e8984611b0a565b60028054600090611ea49084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ed183612d6c565b60048054600090611ee6908490600f0b613caf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f1685611b0a565b60028054601090611f38908490600160801b90046001600160801b0316613c07565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f7c84611f768a888a611a95565b90612b9e565b9050611f89888486611a95565b611f939082613a1d565b905086811115611fa35786810391505b509695505050505050565b60006001600160701b03821115611b345760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061201a57507f00000000000000000000000000000000000000000000000000000000000000006120188583613b35565b105b1561202757612027612732565b6004549084900390600f0b61203c8482613bd0565b90508361204886611dc0565b13801561207d57507f000000000000000000000000000000000000000000000000000000000000000061207b8383612bb3565b105b1561208a5761208a612732565b600354600160801b90046001600160801b03166120cc610ff5826120b6670de0b6b3a764000088613bf0565b6005546001600160801b031691908c60006127cb565b600580546001600160801b0319166001600160801b03929092169190911790556120f68882613b35565b905061210181611b0a565b600380546001600160801b03928316600160801b02921691909117905561212783611b0a565b600280546001600160801b0319166001600160801b039290921691909117905561215082612d6c565b600480546001600160801b0319166001600160801b039290921691909117905561217987611b0a565b6002805460109061219b908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006121f26121d88483612da8565b6121e3846000612da8565b6121ed9190613bd0565b612d6c565b9050600081600f0b1315612247576003805482919060009061221e9084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156122775761225c81613cdc565b6003805460009061221e9084906001600160801b0316613c07565b505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916122c7916001600160801b031690613b35565b9050806000036122db5760019150506106ea565b60006122e685612db7565b9050806000036122fb576001925050506106ea565b600080612309838589612e53565b915091508061231f5760009450505050506106ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161235b929190613d80565b6040805180830381865af4158015612377573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061239b9190613df6565b915091506123b96123ab82611dc0565b6123b490613e1a565b612fc7565b9250826123cf57600096505050505050506106ea565b6123d882611b0a565b600780546000906123f39084906001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061242081611b0a565b60078054601090612442908490600160801b90046001600160801b0316613bb0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61249f8761315f565b6040518263ffffffff1660e01b81526004016124bb9190613e36565b6040805180830381865af41580156124d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124fb9190613e45565b9150915080612511575060009485945092505050565b600080861161252157600061252b565b61252b83876106d2565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916125969190613a1d565b6125a09190613b35565b9050806000036125b95750600096879650945050505050565b60006125c58383612b9e565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156125fa576125fa613e75565b6040519080825280601f01601f191660200182016040528015612624576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612645578692505b828152826000602083013e90999098509650505050505050565b600061268087878761267988670de0b6b3a7640000613b35565b8787613299565b979650505050505050565b60006114996126cc6126a584670de0b6b3a7640000613b35565b61145a670de0b6b3a76400006126bb818a612d2d565b6126c59190613b35565b8790612a40565b6126de90670de0b6b3a7640000613a1d565b611f7684670de0b6b3a7640000613b35565b600080612727856126ff611ac9565b6127099190613a1d565b600254610ec2908790600160801b90046001600160801b0316613b35565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806127958561145a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061278b818c612d2d565b61145a9190613b35565b91506127c1827f00000000000000000000000000000000000000000000000000000000000000006106d2565b9050935093915050565b6000826000036127dc575084611b01565b811561282f5761280d6127ef8487613a1d565b6127f985876106d2565b612803888a6106d2565b611f769190613a1d565b9050600061281b8588611b38565b905080821015612829578091505b50611b01565b82850361283e57506000611b01565b61286961284b8487613b35565b6128558587612a40565b61285f888a6106d2565b611f769190613b35565b9695505050505050565b600061289b601060006128876002866111fb565b815260200190815260200160002054611dc0565b6128ad601060006128876001876111fb565b6106ea9190613bd0565b60006128e37f000000000000000000000000000000000000000000000000000000000000000083612a40565b6003546128f991906001600160801b0316613a1d565b60025461290f906001600160801b0316846106d2565b101592915050565b60006106ea82600461227c565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129735750476129fe565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156129d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129fb9190613c4f565b90505b601454600003612a0f57600061149c565b60145461149c9084908390611a95565b6000612680878787612a3988670de0b6b3a7640000613b35565b878761334d565b60006106e78383670de0b6b3a7640000613370565b6000808080612aa68786612a9f8b61145a612a788c670de0b6b3a7640000613b35565b7f000000000000000000000000000000000000000000000000000000000000000090612a40565b9190613370565b9350612ad2847f00000000000000000000000000000000000000000000000000000000000000006106d2565b91506000612af3612aeb89670de0b6b3a7640000613b35565b8a9088613370565b9050612b1f817f0000000000000000000000000000000000000000000000000000000000000000612a40565b9350612b4b847f00000000000000000000000000000000000000000000000000000000000000006106d2565b612b559084613a1d565b915050945094509450949050565b6000818311612b7257816106e7565b5090919050565b600080612b9184612b8b8a888a613370565b90612d2d565b9050611f89888486613370565b60006106e783670de0b6b3a764000084611a95565b600080612bc08484613396565b909250905080612bd257612bd2612732565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612c28575047612cb3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb09190613c4f565b90505b60145461149c90849083611a95565b600081600003612cdb5750670de0b6b3a76400006106ea565b82600003612ceb575060006106ea565b6000612cf683611dc0565b90506000612d0b612d0686611dc0565b6133d2565b9050818102612d22670de0b6b3a764000082613e8b565b9050612869816135f8565b60006106e783670de0b6b3a764000084613370565b600060016001607f1b03821115611b345760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612d8a575060016001607f1b0382135b15611b345760405163a5353be560e01b815260040160405180910390fd5b6000818313612b7257816106e7565b6003546000908190612dd2906001600160801b031684612d2d565b9050612dfe7f000000000000000000000000000000000000000000000000000000000000000082613a1d565b6002546001600160801b03161115611b47576002547f000000000000000000000000000000000000000000000000000000000000000090612e499083906001600160801b0316613b35565b61149c9190613b35565b612e5b6138f5565b600080612e678461315f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ea29190613e36565b6040805180830381865af4158015612ebe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ee29190613e45565b9350905082612ef75750600091506118e39050565b6000612f1e612f198461016001518561014001516106d290919063ffffffff16565b611dc0565b612f3e612f19856101200151866101000151612a4090919063ffffffff16565b612f489190613bd0565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015613080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130a49190613eb9565b9350935093509350806130c05750600098975050505050505050565b8684146130f1576130d084611b0a565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146131225761310183612d6c565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146131505761313282611b0a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b613167613947565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161325f911661378d565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926132919290041661378d565b905292915050565b6000806132a98888878787613803565b90506132c385611afb6132bc898c613a1d565b86906106d2565b97506132d0848985611a95565b9750878110156132e2576132e2612732565b878103670de0b6b3a7640000811061331757613310613309670de0b6b3a764000088612d2d565b8290612cc2565b905061332f565b61332c613309670de0b6b3a764000088612b9e565b90505b8088101561333f5761333f612732565b909603979650505050505050565b60008061335e888888888888613832565b909250905080611fa357611fa3612732565b600082600019048411830215820261338757600080fd5b50910281810615159190040190565b6000806000836133a586611dc0565b6133af9190613bd0565b905060008112156133c75760008092509250506106cb565b946001945092505050565b60008082136133f45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134779084901c611dc0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361361357506000919050565b680755bf798b4a1bf1e5821261363c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061286974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611dc0565b600080670de0b6b3a76400006137a16106f0565b6137ab9190613bf0565b90508083116137bb5760006137c5565b6137c58184613b35565b915061149c6137fc670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bf0565b8390612b9e565b600061380f8585612cc2565b61382861382086611afb868b612a40565b859085613370565b6128699190613a1d565b60008060006138448989888888613803565b905061385486611afb898b613a1d565b97508781101561386b5760008092509250506138ea565b878103613879818688613370565b9050670de0b6b3a764000081106138a65761389f613309670de0b6b3a764000089612d2d565b90506138be565b6138bb613309670de0b6b3a764000089612b9e565b90505b6138c88186612d2d565b9050808a10156138e0576000809350935050506138ea565b8903925060019150505b965096945050505050565b604051806101200160405280613909613947565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156139be57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156139ea57600080fd5b8501606081880312156139fc57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106ea576106ea613a07565b600060208284031215613a4257600080fd5b81356001600160a01b038116811461149c57600080fd5b80151581146105f657600080fd5b600060208284031215613a7957600080fd5b813561149c81613a59565b6000808335601e19843603018112613a9b57600080fd5b83018035915067ffffffffffffffff821115613ab657600080fd5b6020019150368190038213156106cb57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613b2860c083018486613acb565b9998505050505050505050565b818103818111156106ea576106ea613a07565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613b8260e083018486613acb565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612bd257612bd2613a07565b6001600160801b03818116838216019080821115612bd257612bd2613a07565b8181036000831280158383131683831282161715612bd257612bd2613a07565b80820281158282048414176106ea576106ea613a07565b6001600160801b03828116828216039080821115612bd257612bd2613a07565b8082018281126000831280158216821582161715613c4757613c47613a07565b505092915050565b600060208284031215613c6157600080fd5b5051919050565b600060208284031215613c7a57600080fd5b815161149c81613a59565b634e487b7160e01b600052601260045260246000fd5b600082613caa57613caa613c85565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106ea576106ea613a07565b600081600f0b60016001607f1b03198103613cf957613cf9613a07565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613d94828551613d02565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e0957600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e2f57613e2f613a07565b5060000390565b61018081016106ea8284613d02565b60008060408385031215613e5857600080fd5b825191506020830151613e6a81613a59565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613e9a57613e9a613c85565b600160ff1b821460001984141615613eb457613eb4613a07565b500590565b60008060008060808587031215613ecf57600080fd5b84519350602085015192506040850151915060608501516139fc81613a5956fea2646970667358221220410c8f81c00a3f817c790841fb5eb9a74d2d173e1c481119d8b7a7adede1691164736f6c634300081400336102606040523480156200001257600080fd5b506040516200475738038062004757833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051614252620005056000396000505060005050600081816104cd015281816104fc01526105290152600081816103340152818161077301528181610c4d01526119b001526000818161091d01528181610a0801528181610a9b01528181610b630152818161198a01528181612584015281816125e70152818161296d015281816129a90152612ba10152600081816103950152818161098d01528181610f490152818161196401528181612f110152612f9c01526000612189015260006122e401526000818161110d01526122b8015260005050600081816103d7015281816109e001528181610f6a01526119d60152600081816103b6015281816104a2015281816109ba01528181611045015261319a0152600081816102840152818161046101528181610e0801528181610e8301528181610ef901528181610fc50152610ffd0152600050506000818161176501528181611e6801528181611eb101528181612d0f01528181612d5801528181612dea01528181612e6b0152818161300a0152818161308b0152818161339d015281816133e6015281816134c10152818161356d01528181613659015261370501526142526000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613c13565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613c63565b61011a565b005b6100be6100b9366004613c85565b610128565b604051908152602001610080565b6100be6100da366004613c13565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613c13565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261022d565b5050565b600061013786868686866102ee565b90505b95945050505050565b60006101508484846108c7565b90505b9392505050565b60008061010d858585610c37565b600080610173610d85565b61017c83610daf565b6000610186610de8565b905061019d610193610e00565b8260046001610e2c565b506101ab3387838888611425565b90935091506101bd6020850185613ce9565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101fb60408b0160208c01613d20565b61020860408c018c613d3d565b60405161021a96959493929190613dad565b60405180910390a3506101126001600055565b610235610d85565b600061023f610de8565b6000848152600860205260409020600101549091506001600160801b0316156102735761026c8183611568565b50506102e4565b600061027d610e00565b90506102a97f000000000000000000000000000000000000000000000000000000000000000085613dfd565b1515806102b557508381105b156102d35760405163ecd29e8160e01b815260040160405180910390fd5b6102e08483856000610e2c565b5050505b6101246001600055565b60006102f8610d85565b600654610100900460ff1615610321576040516321081abf60e01b815260040160405180910390fd5b610329611763565b61033282610daf565b7f00000000000000000000000000000000000000000000000000000000000000008610156103735760405163211ddda360e11b815260040160405180910390fd5b60006103fb6103806117cf565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117f0565b90508481108061040a57508381115b1561042857604051633b61151160e11b815260040160405180910390fd5b6000806104358986611816565b915091506000610443610e00565b9050610453818360046001610e2c565b5060006104c66008826104867f000000000000000000000000000000000000000000000000000000000000000086613e27565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118ef565b90506104f27f000000000000000000000000000000000000000000000000000000000000000082613e3a565b85118061055157507f000000000000000000000000000000000000000000000000000000000000000081118015610551575061054e7f000000000000000000000000000000000000000000000000000000000000000082613e27565b85105b1561056f57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916105bb916001600160801b0390911690613e27565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906105f6908390613e3a565b905060008060006106068761191b565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610640908490600401613ecb565b602060405180830381865af415801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190613eda565b915061069461068f89611a55565b611a83565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916106f591859101613ecb565b602060405180830381865af4158015610712573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190613eda565b9250818310156107595760405163184d952160e11b815260040160405180910390fd5b61076f84836107688187613e27565b9190611aa9565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107b25760405163211ddda360e11b815260040160405180910390fd5b508d8d6107bf828c611ac7565b10156107de5760405163c972651760e01b815260040160405180910390fd5b6107f660006107f060208e018e613ce9565b8c611adc565b600061080188611b85565b90508061082157604051638bdf918d60e01b815260040160405180910390fd5b60008515610838576108338487611ac7565b61083b565b60005b90508c61084b6020820182613ce9565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf8e868d6108886040870160208801613d20565b876108966040890189613d3d565b6040516108a99796959493929190613ef3565b60405180910390a250505050505050505050505061013a6001600055565b60006108d1610d85565b6108d9611763565b6108e282610daf565b60065460ff161561090657604051637983c05160e01b815260040160405180910390fd5b6000806109138685611816565b90925090506109437f00000000000000000000000000000000000000000000000000000000000000006002613f34565b82101561096357604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a939190613f4b565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ac48484611b92565b1015610ae35760405163216f4ab160e21b815260040160405180910390fd5b610aec83611bb8565b600280546001600160801b0319166001600160801b0392909216919091179055610b1582611be2565b600480546001600160801b0319166001600160801b0392909216919091179055610b3e81611bb8565b600280546001600160801b03928316600160801b029216919091179055610b876000807f0000000000000000000000000000000000000000000000000000000000000000611adc565b610b9f6000610b9960208a018a613ce9565b88611adc565b610bb4610baa610e00565b8560046001610e2c565b50610bc26020880188613ce9565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af3878b87610bff60408d0160208e01613d20565b8d610c0d60408f018f613d3d565b604051610c209796959493929190613ef3565b60405180910390a250505050506101536001600055565b600080610c42610d85565b610c4b83610daf565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8c5760405163211ddda360e11b815260040160405180910390fd5b6000610c96610de8565b9050610ca3610193610e00565b50610cb060003388611c1e565b610cc5600360f81b610b996020870187613ce9565b6000610ce0610cd76020870187613ce9565b88848989611425565b9094509050610cef8188613e27565b92506000610cfc83611cef565b509050610d0c6020870187613ce9565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a8887610d4a60408d0160208e01613d20565b8a888e8060400190610d5c9190613d3d565b604051610d70989796959493929190613f79565b60405180910390a35050506101126001600055565b600260005403610da857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dbe6020830183613ce9565b6001600160a01b031603610de55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dfb670de0b6b3a7640000611e4d565b905090565b6000610dfb427f0000000000000000000000000000000000000000000000000000000000000000611f48565b600084815260086020526040812060018101546001600160801b0316151580610e5457504286115b15610e6d57600101546001600160801b0316905061141d565b6000806000610e7a610e00565b90506000610ea87f00000000000000000000000000000000000000000000000000000000000000008b613e3a565b90505b81811015610f1e576000818152600860205260409020600101546001600160801b03168015610ef6576000828152600860205260409020549094506001600160801b03169250610f1e565b507f000000000000000000000000000000000000000000000000000000000000000001610eab565b83600003610f9157889350610f8e610f346117cf565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f5e565b92505b50610f9b83611bb8565b6001850180546001600160801b0319166001600160801b0392909216919091179055610ff1610fea7f00000000000000000000000000000000000000000000000000000000000000008b613e27565b8a84611f75565b61102f896110296110227f000000000000000000000000000000000000000000000000000000000000000083613e3a565b42906120b3565b84611f75565b611038886120c8565b506000905060088161106a7f00000000000000000000000000000000000000000000000000000000000000008d613e27565b815260208101919091526040016000908120600101546001600160801b0316915061109660028c61226c565b6000818152601060205260408120549192508c8c83156111dc57600192506000806110c586898d8660006122a1565b9150915080600d60008282546110db9190613e3a565b909155506110f79050866000846110f181611a55565b88612370565b6111018183613e3a565b915061113186838a8e877f00000000000000000000000000000000000000000000000000000000000000006124ea565b9150611145611140838561252e565b612543565b600680546002906111669084906201000090046001600160701b0316613fc1565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061119382611bb8565b600680546010906111b5908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e960018461226c565b60008181526010602052604090205490915080156112f85760019450600080611216838b8f8860016122a1565b9150915080600d600082825461122c9190613e3a565b9091555061124890508360008461124281611a55565b8a61256d565b6112528183613e27565b9150611261611140838761252e565b600680546002906112829084906201000090046001600160701b0316613fc1565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112af82611bb8565b600680546010906112d1908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113325761132461130a87611a55565b61131383611a55565b61131d9190614001565b600061275e565b8e61132f8482611568565b50505b600061133d84611cef565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b03161561140d578e6114095a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612811565b5050505b50999b5050505050505050505050505b949350505050565b60008061143185611b85565b505060075485906001600160801b03168082111561145657806001600160801b031691505b8160000361146b57600080925092505061155e565b61147a600360f81b8984611c1e565b6007546000906114a09084906001600160801b03600160801b9091048116908516611aa9565b90506114ab83611bb8565b6114b59083614021565b600780546001600160801b0319166001600160801b03929092169190911790556114de81611bb8565b60078054601090611500908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061152f81888761289c565b935061153b8684612936565b84101561155b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916115b3916001600160801b031690613e27565b9050806000036115c757600191505061175d565b60006115d28561294b565b9050806000036115e75760019250505061175d565b6000806115f58385896129e7565b915091508061160b57600094505050505061175d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611647929190614041565b6040805180830381865af4158015611663573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168791906140b7565b915091506116a561169782611a55565b6116a0906140db565b612b5b565b9250826116bb576000965050505050505061175d565b6116c482611bb8565b600780546000906116df9084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170c81611bb8565b6007805460109061172e908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906117af57503415155b156117cd57604051631574f9f360e01b815260040160405180910390fd5b565b600254600454600091610dfb916001600160801b0390911690600f0b611b92565b6000806117ff87878786611f5e565b905061180b81856118ef565b979650505050505050565b6000808061182a6040850160208601613d20565b1561184f57611845856118406040870187613d3d565b612cf3565b909350905061186b565b5034611867856118626040870187613d3d565b612f7f565b8492505b611873610de8565b915080156118e657604051600090339083908381818185875af1925050503d80600081146118bd576040519150601f19603f3d011682016040523d82523d6000602084013e6118c2565b606091505b50509050806118e4576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361190384846301e13380613129565b61191585670de0b6b3a7640000613e27565b90611ac7565b611923613b4e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611a1b911661314f565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611a4d9290041661314f565b905292915050565b60006001600160ff1b03821115611a7f5760405163396ea70160e11b815260040160405180910390fd5b5090565b611a8c81612b5b565b610de557604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ac057600080fd5b5091020490565b600061015383670de0b6b3a764000084611aa9565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611b0e908490613e3a565b909155505060008381526010602052604081208054839290611b31908490613e3a565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061175d826004611568565b600080611b9f84846131c5565b909250905080611bb157611bb1613201565b5092915050565b60006001600160801b03821115611a7f57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c00575060016001607f1b0382135b15611a7f5760405163a5353be560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115611c6157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290611ca4908490613e27565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b78565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d188761191b565b6040518263ffffffff1660e01b8152600401611d349190613ecb565b6040805180830381865af4158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906140f7565b9150915080611d8a575060009485945092505050565b6000808611611d9a576000611da4565b611da4838761252e565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691611e0f9190613e3a565b611e199190613e27565b905080600003611e325750600096879650945050505050565b6000611e3e8383611ac7565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611e9c575047611f27565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f249190613eda565b90505b601454600003611f38576000610153565b6014546101539084908390611aa9565b6000611f548284613dfd565b6101539084613e27565b600061013a82611f6f858888611aa9565b9061321a565b600083815260086020526040902054600160801b90046001600160801b0316808303611fa15750505050565b6000848152600860205260408120546001600160801b031690819003611ffb57611fca83611bb8565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055612079565b61204c612047670de0b6b3a76400006120148886613e27565b61201e9190613f34565b85670de0b6b3a7640000612032878a613e27565b61203c9190613f34565b85929190600161328f565b611bb8565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61208284611bb8565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120c25782610153565b50919050565b60065460009081906120eb908490600160801b90046001600160801b031661252e565b6006546201000090046001600160701b031692509050818111156122675760006121158383613e27565b9050612124612047828661332d565b60068054601090612146908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061217f8583611ac790919063ffffffff16565b905060006121ad827f000000000000000000000000000000000000000000000000000000000000000061252e565b905080600d60008282546121c19190613e3a565b909155506121d190508183613e27565b91506121dc82611bb8565b600280546000906121f79084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061222482613342565b60048054600090612239908490600f0b614127565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122965760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122ae8785611ac7565b915060006122dc837f000000000000000000000000000000000000000000000000000000000000000061252e565b9050612308817f000000000000000000000000000000000000000000000000000000000000000061252e565b9150831561232b5761231a8282613e27565b6123249084613e27565b9250612342565b6123358282613e27565b61233f9084613e3a565b92505b8686101561236557612355838789611aa9565b9250612362828789611aa9565b91505b509550959350505050565b600454600160801b90046001600160801b03166123b96120478261239c670de0b6b3a764000086613f34565b600554600160801b90046001600160801b031691908a600061328f565b600580546001600160801b03928316600160801b0292169190911790556123df86611bb8565b6123e99082614021565b600480546001600160801b03928316600160801b02921691909117905561240f84611bb8565b6002805460009061242a9084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245783611be2565b6004805460009061246c908490600f0b614127565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061249c85611bb8565b600280546010906124be908490600160801b90046001600160801b0316614021565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124fc846119158a888a611aa9565b9050612509888486611aa9565b6125139082613e3a565b9050868111156125235786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611aa9565b60006001600160701b03821115611a7f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806125af57507f00000000000000000000000000000000000000000000000000000000000000006125ad8583613e27565b105b156125bc576125bc613201565b6004549084900390600f0b6125d18482614001565b9050836125dd86611a55565b13801561261257507f00000000000000000000000000000000000000000000000000000000000000006126108383611b92565b105b1561261f5761261f613201565b600354600160801b90046001600160801b03166126616120478261264b670de0b6b3a764000088613f34565b6005546001600160801b031691908c600061328f565b600580546001600160801b0319166001600160801b039290921691909117905561268b8882613e27565b905061269681611bb8565b600380546001600160801b03928316600160801b0292169190911790556126bc83611bb8565b600280546001600160801b0319166001600160801b03929092169190911790556126e582611be2565b600480546001600160801b0319166001600160801b039290921691909117905561270e87611bb8565b60028054601090612730908490600160801b90046001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061278761276d848361336c565b61277884600061336c565b6127829190614001565b611be2565b9050600081600f0b13156127dc57600380548291906000906127b39084906001600160801b0316613fe1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561280c576127f181614154565b600380546000906127b39084906001600160801b0316614021565b505050565b6000606060008060008661ffff1667ffffffffffffffff8111156128375761283761417a565b6040519080825280601f01601f191660200182016040528015612861576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612882578692505b828152826000602083013e90999098509650505050505050565b6000806128a9858561252e565b90506128b481613382565b9450846000036128c8576000915050610153565b6128d86040840160208501613d20565b1561290757612900856128ee6020860186613ce9565b6128fb6040870187613d3d565b61346b565b915061292e565b61292a856129186020860186613ce9565b6129256040870187613d3d565b613605565b8491505b509392505050565b60006101538383670de0b6b3a7640000613129565b6003546000908190612966906001600160801b03168461332d565b90506129927f000000000000000000000000000000000000000000000000000000000000000082613e3a565b6002546001600160801b031611156120c2576002547f0000000000000000000000000000000000000000000000000000000000000000906129dd9083906001600160801b0316613e27565b6101539190613e27565b6129ef613baf565b6000806129fb8461191b565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a369190613ecb565b6040805180830381865af4158015612a52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a7691906140f7565b9350905082612a8b5750600091506101129050565b6000612ab2612aad84610160015185610140015161252e90919063ffffffff16565b611a55565b612ad2612aad85610120015186610100015161293690919063ffffffff16565b612adc9190614001565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c389190614190565b935093509350935080612c545750600098975050505050505050565b868414612c8557612c6484611bb8565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cb657612c9583611be2565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ce457612cc682611bb8565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612d43575047612dce565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612da7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dcb9190613eda565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e495787341015612e38576040516312171d8360e31b815260040160405180910390fd5b612e428834613e27565b9050612ee3565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612ebc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ee091906141d1565b91505b81612f01576040516312171d8360e31b815260040160405180910390fd5b601454600003612f4657612f35887f0000000000000000000000000000000000000000000000000000000000000000611ac7565b601481905594509250610112915050565b601454600090612f58908a9086611aa9565b90508060146000828254612f6c9190613e3a565b9091555090955090935061011292505050565b6000612f8a84611e4d565b9050601454600003612fc857612fc0817f0000000000000000000000000000000000000000000000000000000000000000611ac7565b601455612fee565b6000612fd382613382565b90508060146000828254612fe79190613e3a565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130695782341015613058576040516312171d8360e31b815260040160405180910390fd5b6130628334613e27565b9050613103565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156130dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061310091906141d1565b91505b81613121576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261314057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000613163610e00565b61316d9190613f34565b905080831161317d576000613187565b6131878184613e27565b91506101536131be670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f34565b8390611ac7565b6000806000836131d486611a55565b6131de9190614001565b905060008112156131f65760008092509250506118e8565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036132335750670de0b6b3a764000061175d565b826000036132435750600061175d565b600061324e83611a55565b9050600061326361325e86611a55565b613793565b905081810261327a670de0b6b3a7640000826141ee565b9050613285816139b9565b9695505050505050565b6000826000036132a057508461013a565b81156132f3576132d16132b38487613e3a565b6132bd858761252e565b6132c7888a61252e565b6119159190613e3a565b905060006132df85886120b3565b9050808210156132ed578091505b5061013a565b8285036133025750600061013a565b61013761330f8487613e27565b6133198587612936565b613323888a61252e565b6119159190613e27565b600061015383670de0b6b3a764000084613129565b600060016001607f1b03821115611a7f5760405163a5353be560e01b815260040160405180910390fd5b600081831361337b5781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016133d157504761345c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613435573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134599190613eda565b90505b60145461015390849083611aa9565b6000601454851161347c5784613480565b6014545b9450600061348d86611e4d565b905085601460008282546134a19190613e27565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613547576040516001600160a01b038716908390600081818185875af1925050503d8060008114613537576040519150601f19603f3d011682016040523d82523d6000602084013e61353c565b606091505b5050809150506135dd565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156135b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135da91906141d1565b90505b806135fb576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60145484116136145783613618565b6014545b9350600061362585611e4d565b905084601460008282546136399190613e27565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016136df576040516001600160a01b038616908390600081818185875af1925050503d80600081146136cf576040519150601f19603f3d011682016040523d82523d6000602084013e6136d4565b606091505b505080915050613775565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561374e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061377291906141d1565b90505b80613121576040516312171d8360e31b815260040160405180910390fd5b60008082136137b55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906138389084901c611a55565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136139d457506000919050565b680755bf798b4a1bf1e582126139fd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061328574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a55565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613bc3613b4e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156120c257600080fd5b600080600060608486031215613c2857600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613c4d57600080fd5b613c5986828701613c01565b9150509250925092565b60008060408385031215613c7657600080fd5b50508035926020909101359150565b600080600080600060a08688031215613c9d57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613cd057600080fd5b613cdc88828901613c01565b9150509295509295909350565b600060208284031215613cfb57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610de557600080fd5b600060208284031215613d3257600080fd5b813561015381613d12565b6000808335601e19843603018112613d5457600080fd5b83018035915067ffffffffffffffff821115613d6f57600080fd5b6020019150368190038213156118e857600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000613ddb60a083018486613d84565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082613e0c57613e0c613de7565b500690565b634e487b7160e01b600052601160045260246000fd5b8181038181111561175d5761175d613e11565b8082018082111561175d5761175d613e11565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161175d8284613e4d565b600060208284031215613eec57600080fd5b5051919050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613f2760c083018486613d84565b9998505050505050505050565b808202811582820484141761175d5761175d613e11565b600080600060608486031215613f6057600080fd5b8351925060208401519150604084015190509250925092565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613fb360e083018486613d84565b9a9950505050505050505050565b6001600160701b03818116838216019080821115611bb157611bb1613e11565b6001600160801b03818116838216019080821115611bb157611bb1613e11565b8181036000831280158383131683831282161715611bb157611bb1613e11565b6001600160801b03828116828216039080821115611bb157611bb1613e11565b60006102a082019050614055828551613e4d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156140ca57600080fd5b505080516020909101519092909150565b6000600160ff1b82016140f0576140f0613e11565b5060000390565b6000806040838503121561410a57600080fd5b82519150602083015161411c81613d12565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561175d5761175d613e11565b600081600f0b60016001607f1b0319810361417157614171613e11565b60000392915050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156141a657600080fd5b84519350602085015192506040850151915060608501516141c681613d12565b939692955090935050565b6000602082840312156141e357600080fd5b815161015381613d12565b6000826141fd576141fd613de7565b600160ff1b82146000198414161561421757614217613e11565b50059056fea264697066735822122073073ae48d868f4da5d930108a5f1d7928fd8011f50a00c6f2f5784ec81f143464736f6c63430008140033',
    methodIdentifiers: {
        "PERMIT_TYPEHASH()": "30adf81f",
        "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a",
        "__setBalanceOf(uint256,address,uint256)": "94a97cdb",
        "accrue(uint256,int256)": "68096239",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "burn(uint256,address,uint256)": "9eea5f66",
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
        "mint(uint256,address,uint256)": "836a1040",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setCheckpointRewarder(address)": "a5107626",
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
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "updateLiquidity(int256)": "8120a3e2"
    }
};
