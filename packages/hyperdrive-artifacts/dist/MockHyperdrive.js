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
    bytecode: '0x6103006040523480156200001257600080fd5b50604051620174c0380380620174c08339810160408190526200003591620003c7565b6040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525081826040516200006c90620002b9565b620000789190620004da565b604051809103906000f08015801562000095573d6000803e3d6000fd5b5083604051620000a590620002c7565b620000b19190620004da565b604051809103906000f080158015620000ce573d6000803e3d6000fd5b5084604051620000de90620002d5565b620000ea9190620004da565b604051809103906000f08015801562000107573d6000803e3d6000fd5b50856040516200011790620002e3565b620001239190620004da565b604051809103906000f08015801562000140573d6000803e3d6000fd5b50866040516200015090620002f1565b6200015c9190620004da565b604051809103906000f08015801562000179573d6000803e3d6000fd5b506001600081905586516001600160a01b0390811660809081526020808a0151831660a0908152918a01516101a0908152918a01516101c090815260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d0180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918d01518616610220528c015161024052918b0151600980549186166001600160a01b0319928316179055918b0151600a8054918616918416919091179055918a0151600b805491851691831691909117905590890151600c805491909316911617905562000286888262000691565b506001600160a01b0394851661026052928416610280529083166102a05282166102c052166102e052506200075d915050565b613e2a80620036cc83390190565b6141ce80620074f683390190565b614434806200b6c483390190565b6143f5806200faf883390190565b6135d38062013eed83390190565b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b03811182821017156200033b576200033b620002ff565b60405290565b80516001600160a01b03811681146200035957600080fd5b919050565b6000608082840312156200037157600080fd5b604051608081016001600160401b0381118282101715620003965762000396620002ff565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620003db57600080fd5b620003e562000315565b620003f08362000341565b8152620004006020840162000341565b6020820152620004136040840162000341565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200047e81850162000341565b908201526101806200049284820162000341565b908201526101a0620004a684820162000341565b908201526101c0620004ba84820162000341565b908201526101e0620004cf858583016200035e565b908201529392505050565b81516001600160a01b03168152610260810160208301516200050760208401826001600160a01b03169052565b5060408301516200052360408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015162000596828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e092830151805193830193909352602083015161020083015260408301516102208301526060909201516102409091015290565b600181811c908216806200061757607f821691505b6020821081036200063857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200068c57600081815260208120601f850160051c81016020861015620006675750805b601f850160051c820191505b81811015620006885782815560010162000673565b5050505b505050565b81516001600160401b03811115620006ad57620006ad620002ff565b620006c581620006be845462000602565b846200063e565b602080601f831160018114620006fd5760008415620006e45750858301515b600019600386901b1c1916600185901b17855562000688565b600085815260208120601f198616915b828110156200072e578886015182559484019460019091019084016200070d565b50858210156200074d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051612dcc620009006000396000818161096101528181610aaa0152610bc70152600081816108d901528181610bf70152610e210152600081816107e0015261102301526000818161092d0152610b640152600081816102c50152818161048701528181610a7a01528181610adc01528181610b0e01528181610b9801528181610dda01528181610e6901528181610fd001526110560152600050506000505060005050600050506000818161194d015281816119890152611c980152600081816116c90152818161170b01526117fd0152600050506000818161118f01528181611208015261154f0152600081816111dc015261177e0152600081816111550152818161150b015261175d0152600081816116a70152818161172c015261181e0152600081816114d20152611a120152600061165401526000505060008181610c5601528181610cf00152610d640152612dcc6000f3fe6080604052600436106102ae5760003560e01c806394a97cdb11610175578063ca6d38f7116100dc578063ded0623111610095578063eac3e7991161006f578063eac3e7991461091b578063f3f707071461094f578063f45cf2e014610983578063f698da2514610a60576102ae565b8063ded0623114610501578063e44808bc146108fb578063e4af29d1146103be576102ae565b8063ca6d38f71461087f578063cba2e58d1461089f578063cbc13434146103fb578063d5002f2e146108b2578063d899e112146108c7578063dbbe80701461089f576102ae565b8063a51076261161012e578063a5107626146103be578063a6e8a859146107ce578063a77384c114610802578063ab033ea9146103be578063b1b4b17014610822578063b4f8da3914610842576102ae565b806394a97cdb1461072d5780639bd334981461076e5780639cd241af1461078e5780639eea5f66146107ae578063a22cb46514610665578063a42dce80146103be576102ae565b80634ed2d6ac1161021957806371f88b7c116101d257806371f88b7c1461068557806377d05ff4146106a55780638120a3e2146106b8578063836a1040146106d85780639032c726146106f8578063907c0f9214610718576102ae565b80634ed2d6ac146105b657806358af4a0a146105d157806368096239146105f157806368c2ecb814610611578063702db0eb146106315780637180c8ca14610665576102ae565b806322d5506b1161026b57806322d5506b146104c157806329b23fc11461050157806330adf81f1461052f5780633e691db914610563578063414f826d146105835780634c2ac1d9146105a3576102ae565b806301681a62146103be57806302329a29146103e0578063074a6de9146103fb57806317fad7fc146104355780631c0f12b61461045557806321b57d5314610475575b3480156102ba57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102fd929190612466565b600060405180830381855af49150503d8060008114610338576040519150601f19603f3d011682016040523d82523d6000602084013e61033d565b606091505b5091509150811561036157604051638bb0a34b60e01b815260040160405180910390fd5b600061036c82612476565b90506001600160e01b03198116636e64089360e11b1461038e57815160208301fd5b8151600319810160048401908152926103af91810160200190602401612511565b80519650602001945050505050f35b3480156103ca57600080fd5b506103de6103d93660046125c8565b610a75565b005b3480156103ec57600080fd5b506103de6103d9366004612603565b34801561040757600080fd5b5061041b610416366004612632565b610aa2565b604080519283526020830191909152015b60405180910390f35b34801561044157600080fd5b506103de6104503660046126c7565b610ad7565b34801561046157600080fd5b506103de61047036600461275c565b610b09565b34801561048157600080fd5b506104a97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161042c565b3480156104cd57600080fd5b506104e16104dc3660046127a4565b610b39565b60408051948552602085019390935291830152606082015260800161042c565b34801561050d57600080fd5b5061052161051c3660046127d6565b610b5d565b60405190815260200161042c565b34801561053b57600080fd5b506105217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561056f57600080fd5b5061052161057e366004612830565b610b91565b34801561058f57600080fd5b506103de61059e366004612865565b610bc2565b6105216105b1366004612887565b610bf0565b3480156105c257600080fd5b506103de6104703660046128eb565b3480156105dd57600080fd5b506103de6105ec366004612935565b610c25565b3480156105fd57600080fd5b506103de61060c366004612865565b610c32565b34801561061d57600080fd5b5061052161062c366004612994565b610dc4565b34801561063d57600080fd5b506103de61064c3660046129c4565b6001600160801b03908116600160801b02911617600255565b34801561067157600080fd5b506103de6106803660046129f7565b610dd5565b34801561069157600080fd5b5061041b6106a0366004612a30565b610dfe565b6105216106b3366004612632565b610e1a565b3480156106c457600080fd5b506103de6106d3366004612994565b610e4d565b3480156106e457600080fd5b506103de6106f3366004612a5c565b610e59565b34801561070457600080fd5b506103de610713366004612a94565b610e64565b34801561072457600080fd5b50610521610f9c565b34801561073957600080fd5b506103de610748366004612a5c565b6000928352600f602090815260408085206001600160a01b039094168552929052912055565b34801561077a57600080fd5b506104e1610789366004612865565b610fab565b34801561079a57600080fd5b506103de6107a9366004612a5c565b610fcb565b3480156107ba57600080fd5b506103de6107c9366004612a5c565b610ffa565b3480156107da57600080fd5b506104a97f000000000000000000000000000000000000000000000000000000000000000081565b34801561080e57600080fd5b506103de61081d366004612994565b601455565b34801561082e57600080fd5b5061052161083d366004612994565b611005565b34801561084e57600080fd5b506103de61085d366004612b14565b600380546001600160801b0319166001600160801b0392909216919091179055565b34801561088b57600080fd5b5061052161089a366004612994565b611010565b61041b6108ad3660046127d6565b61101b565b3480156108be57600080fd5b50601454610521565b3480156108d357600080fd5b506104a97f000000000000000000000000000000000000000000000000000000000000000081565b34801561090757600080fd5b506103de610916366004612935565b611051565b34801561092757600080fd5b506104a97f000000000000000000000000000000000000000000000000000000000000000081565b34801561095b57600080fd5b506104a97f000000000000000000000000000000000000000000000000000000000000000081565b34801561098f57600080fd5b506103de61099e366004612b58565b805160208201516001600160801b03918216600160801b91831682021760025560408301516060840151908316908316820217600355608083015160a084015190831690831682021760045560c083015160e084015190831690831682021760055561010080840151600680546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a6c57600080fd5b50610521611082565b610a9e7f0000000000000000000000000000000000000000000000000000000000000000611110565b5050565b600080610ace7f0000000000000000000000000000000000000000000000000000000000000000611110565b50935093915050565b610b007f0000000000000000000000000000000000000000000000000000000000000000611110565b50505050505050565b610b327f0000000000000000000000000000000000000000000000000000000000000000611110565b5050505050565b600080600080610b4b88888888611130565b929b919a509850909650945050505050565b6000610b887f0000000000000000000000000000000000000000000000000000000000000000611110565b50949350505050565b6000610bbc7f0000000000000000000000000000000000000000000000000000000000000000611110565b50919050565b610beb7f0000000000000000000000000000000000000000000000000000000000000000611110565b505050565b6000610c1b7f0000000000000000000000000000000000000000000000000000000000000000611110565b5095945050505050565b610b328585858585611244565b6040516370a0823160e01b8152306004820152600090610cc8906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190612c44565b8385611405565b9150506000811315610d51576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610d3d57600080fd5b505af1158015610b00573d6000803e3d6000fd5b6000811215610beb576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d9384612c73565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610d23565b6000610dcf826114a5565b92915050565b610beb7f0000000000000000000000000000000000000000000000000000000000000000611110565b600080610e0c8585856114fd565b90925090505b935093915050565b6000610e457f0000000000000000000000000000000000000000000000000000000000000000611110565b509392505050565b610e568161157d565b50565b610beb8383836115a3565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e99611082565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610f429190612c8f565b600060405180830381855af49150503d8060008114610f7d576040519150601f19603f3d011682016040523d82523d6000602084013e610f82565b606091505b509150915081610f9457805160208201fd5b805160208201f35b6000610fa661164c565b905090565b600080600080610fbb8686611678565b9299919850965090945092505050565b610ff47f0000000000000000000000000000000000000000000000000000000000000000611110565b50505050565b610beb83838361185a565b6000610dcf8261192b565b6000610dcf826119c7565b6000806110477f0000000000000000000000000000000000000000000000000000000000000000611110565b5094509492505050565b61107a7f0000000000000000000000000000000000000000000000000000000000000000611110565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610f42929190612466565b600080808061118787866111808b61117a6111538c670de0b6b3a7640000612cab565b7f000000000000000000000000000000000000000000000000000000000000000090611a3d565b90611a3d565b9190611a4e565b93506111b3847f0000000000000000000000000000000000000000000000000000000000000000611a74565b915060006111d46111cc89670de0b6b3a7640000612cab565b8a9088611a4e565b9050611200817f0000000000000000000000000000000000000000000000000000000000000000611a3d565b935061122c847f0000000000000000000000000000000000000000000000000000000000000000611a74565b6112369084612cbe565b915050945094509450949050565b6001600160a01b038416158061126157506001600160a01b038316155b1561127f5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611343576001600160a01b0380851660009081526011602090815260408083209385168352929052205460ff166113435760008581526012602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146113415760008681526012602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061133b908490612cab565b90915550505b505b6000858152600f602090815260408083206001600160a01b038816845290915281208054849290611375908490612cab565b90915550506000858152600f602090815260408083206001600160a01b0387168452909152812080548492906113ac908490612cbe565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60008080611417846301e13380611a89565b9050600061143c826000881261142d5787611436565b61143688612c73565b90611a74565b9050600086131561146f5761145a61145382611a9e565b8890611a74565b93506114668785612cab565b92505050610e12565b60008612156114975761148b61148482611a9e565b8890611a89565b93506114668785612cd1565b509495600095509350505050565b6000806114b061164c565b90508083116114c05760006114ca565b6114ca8184612cab565b91506114f6827f0000000000000000000000000000000000000000000000000000000000000000611a89565b9392505050565b6000806115478561117a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061153d818c611c3d565b61117a9190612cab565b9150611573827f0000000000000000000000000000000000000000000000000000000000000000611a74565b9050935093915050565b61158681611c52565b610e5657604051635044b7f560e01b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906115d5908490612cbe565b9091555050600083815260106020526040812080548392906115f8908490612cbe565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000610fa6427f0000000000000000000000000000000000000000000000000000000000000000611dea565b6000806000806000611688611e00565b6002549091506116ed908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000611e21565b600254909450611750908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4d565b91506117a787856117a2857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e6d565b611ee0565b156117b4576117b4611f22565b6117c087858885611f3b565b91965094509250670de0b6b3a76400006118426117dd8784612cbe565b6002546117fb908890600160801b90046001600160801b0316612cab565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4d565b111561185057611850611f22565b5092959194509250565b6000838152600f602090815260408083206001600160a01b038616845290915290205481111561189d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b03861684528252808320805485900390558583526010909152812080548392906118e0908490612cab565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161163f565b6003546000908190611946906001600160801b031684611c3d565b90506119727f000000000000000000000000000000000000000000000000000000000000000082612cbe565b6002546001600160801b03161115610bbc576002547f0000000000000000000000000000000000000000000000000000000000000000906119bd9083906001600160801b0316612cab565b6114f69190612cab565b600080670de0b6b3a76400006119db61164c565b6119e59190612cf1565b90508083116119f55760006119ff565b6119ff8184612cab565b91506114f6611a36670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612cf1565b8390611a89565b60006114f68383670de0b6b3a76400005b6000826000190484118302158202611a6557600080fd5b50910281810615159190040190565b60006114f68383670de0b6b3a7640000611f87565b60006114f683670de0b6b3a764000084611f87565b6000680248ce36a70cb26b3e198213611ab957506000919050565b680755bf798b4a1bf1e58212611ae2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611c3374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611fa5565b9695505050505050565b60006114f683670de0b6b3a764000084611a4e565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611d0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2f9190612d1e565b935093509350935080611d4b5750600098975050505050505050565b868414611d7c57611d5b84611fd3565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611dad57611d8c83611ffd565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ddb57611dbd82611fd3565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000611df68284612d54565b6114f69084612cab565b600254600454600091610fa6916001600160801b0390911690600f0b61204b565b6000611e42878787611e3b88670de0b6b3a7640000612cab565b8787612071565b979650505050505050565b6000611e6482611e5e858888611f87565b9061209f565b95945050505050565b6000611ed8611eae611e8784670de0b6b3a7640000612cab565b61117a670de0b6b3a7640000611e9d818a611c3d565b611ea79190612cab565b8790611a3d565b611ec090670de0b6b3a7640000612cbe565b611ed284670de0b6b3a7640000612cab565b90611a89565b949350505050565b600080611f1785611eef611e00565b611ef99190612cbe565b6002546117fb908790600160801b90046001600160801b0316612cab565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000611f4e8987896114fd565b9092509050611f5d8289612cab565b97506000611f6c82888a611f87565b9050611f78818b612cab565b9a989950979650505050505050565b6000826000190484118302158202611f9e57600080fd5b5091020490565b60006001600160ff1b03821115611fcf5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006001600160801b03821115611fcf57604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff1982128061202d57506f7fffffffffffffffffffffffffffffff82135b15611fcf5760405163a5353be560e01b815260040160405180910390fd5b600080612058848461210a565b90925090508061206a5761206a611f22565b5092915050565b600080612082888888888888612149565b90925090508061209457612094611f22565b509695505050505050565b6000816000036120b85750670de0b6b3a7640000610dcf565b826000036120c857506000610dcf565b60006120d383611fa5565b905060006120e86120e386611fa5565b612211565b90508181026120ff670de0b6b3a764000082612d68565b9050611c3381611a9e565b60008060008361211986611fa5565b6121239190612cd1565b9050600081121561213b576000809250925050612142565b9150600190505b9250929050565b600080600061215b8989888888612437565b905061217586611e5e61216e8a8d612cbe565b8790611a74565b9850612182858a86611f87565b985088811015612199576000809250925050612206565b888103670de0b6b3a764000081106121ce576121c76121c0670de0b6b3a764000089611c3d565b829061209f565b90506121e6565b6121e36121c0670de0b6b3a764000089611a89565b90505b808910156121fc57600080935093505050612206565b8803925060019150505b965096945050505050565b60008082136122335760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906122b69084901c611fa5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000612443858561209f565b61245c61245486611e5e868b611a3d565b859085611a4e565b611c339190612cbe565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156124a55780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156124e7576124e76124ad565b60405290565b60005b838110156125085781810151838201526020016124f0565b50506000910152565b60006020828403121561252357600080fd5b815167ffffffffffffffff8082111561253b57600080fd5b818401915084601f83011261254f57600080fd5b815181811115612561576125616124ad565b604051601f8201601f19908116603f01168101908382118183101715612589576125896124ad565b816040528281528760208487010111156125a257600080fd5b611e428360208301602088016124ed565b6001600160a01b0381168114610e5657600080fd5b6000602082840312156125da57600080fd5b81356114f6816125b3565b8015158114610e5657600080fd5b80356125fe816125e5565b919050565b60006020828403121561261557600080fd5b81356114f6816125e5565b600060608284031215610bbc57600080fd5b60008060006060848603121561264757600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561266c57600080fd5b61267886828701612620565b9150509250925092565b60008083601f84011261269457600080fd5b50813567ffffffffffffffff8111156126ac57600080fd5b6020830191508360208260051b850101111561214257600080fd5b600080600080600080608087890312156126e057600080fd5b86356126eb816125b3565b955060208701356126fb816125b3565b9450604087013567ffffffffffffffff8082111561271857600080fd5b6127248a838b01612682565b9096509450606089013591508082111561273d57600080fd5b5061274a89828a01612682565b979a9699509497509295939492505050565b6000806000806080858703121561277257600080fd5b843593506020850135612784816125b3565b92506040850135612794816125b3565b9396929550929360600135925050565b600080600080608085870312156127ba57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080608085870312156127ec57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561281857600080fd5b61282487828801612620565b91505092959194509250565b60006020828403121561284257600080fd5b813567ffffffffffffffff81111561285957600080fd5b611ed884828501612620565b6000806040838503121561287857600080fd5b50508035926020909101359150565b600080600080600060a0868803121561289f57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156128d257600080fd5b6128de88828901612620565b9150509295509295909350565b6000806000806080858703121561290157600080fd5b843593506020850135612913816125b3565b925060408501359150606085013561292a816125b3565b939692955090935050565b600080600080600060a0868803121561294d57600080fd5b85359450602086013561295f816125b3565b9350604086013561296f816125b3565b9250606086013591506080860135612986816125b3565b809150509295509295909350565b6000602082840312156129a657600080fd5b5035919050565b80356001600160801b03811681146125fe57600080fd5b600080604083850312156129d757600080fd5b6129e0836129ad565b91506129ee602084016129ad565b90509250929050565b60008060408385031215612a0a57600080fd5b8235612a15816125b3565b91506020830135612a25816125e5565b809150509250929050565b600080600060608486031215612a4557600080fd5b505081359360208301359350604090920135919050565b600080600060608486031215612a7157600080fd5b833592506020840135612a83816125b3565b929592945050506040919091013590565b600080600080600080600060e0888a031215612aaf57600080fd5b8735612aba816125b3565b96506020880135612aca816125b3565b95506040880135612ada816125e5565b945060608801359350608088013560ff81168114612af757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600060208284031215612b2657600080fd5b6114f6826129ad565b8035600f81900b81146125fe57600080fd5b80356001600160701b03811681146125fe57600080fd5b60006101808284031215612b6b57600080fd5b612b736124c3565b612b7c836129ad565b8152612b8a602084016129ad565b6020820152612b9b604084016129ad565b6040820152612bac606084016129ad565b6060820152612bbd60808401612b2f565b6080820152612bce60a084016129ad565b60a0820152612bdf60c084016129ad565b60c0820152612bf060e084016129ad565b60e0820152610100612c038185016125f3565b90820152610120612c158482016125f3565b90820152610140612c27848201612b41565b90820152610160612c398482016129ad565b908201529392505050565b600060208284031215612c5657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201612c8857612c88612c5d565b5060000390565b60008251612ca18184602087016124ed565b9190910192915050565b81810381811115610dcf57610dcf612c5d565b80820180821115610dcf57610dcf612c5d565b818103600083128015838313168383128216171561206a5761206a612c5d565b8082028115828204841417610dcf57610dcf612c5d565b634e487b7160e01b600052601260045260246000fd5b60008060008060808587031215612d3457600080fd5b845193506020850151925060408501519150606085015161292a816125e5565b600082612d6357612d63612d08565b500690565b600082612d7757612d77612d08565b600160ff1b821460001984141615612d9157612d91612c5d565b50059056fea2646970667358221220a12bd8c7fb13539b6a963c468902da91bf92e5362dc5da5c904707bff095999a64736f6c634300081400336102606040523480156200001257600080fd5b5060405162003e2a38038062003e2a833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516139cf6200045b60003960008181610db40152611dd0015260008181610d8d0152611d9301526000610e54015260008181610e2e0152611f88015260008181610e080152611f62015260008181610dde0152611f3c01526000610f9001526000610f6b01526000610f4601526000610f23015260008181610ec80152611fae015260008181610e7a0152818161112501526127b7015260008181610ea10152612bf60152600081816106550152610d6101526000818161078501528181610d3c015281816110d801528181612257015281816122a0015281816123520152818161239b015281816125db0152818161291c015281816129c801528181612ab40152612b6001526139cf6000f3fe608060405234801561001057600080fd5b50600436106102475760003560e01c80637ecebe001161013b578063becee9c3116100b8578063d81657431161007c578063d816574314610528578063e44808bc1461053d578063e4af29d114610550578063e985e9c514610563578063fba560081461057657600080fd5b8063becee9c3146104da578063c55dae63146104fa578063c69e16ad14610438578063c6e6f59214610502578063cf210e651461051557600080fd5b8063a5107626116100ff578063a510762614610479578063ab033ea91461048c578063b0d965801461049f578063b88fed9f146104b4578063bd85b039146104c757600080fd5b80637ecebe00146104255780638e67f87e146104385780639cd241af14610440578063a22cb46514610453578063a42dce801461046657600080fd5b806321ff32a9116101c95780634e41a1fb1161018d5780634e41a1fb146103cf5780634ed2d6ac146103e257806354fd4d50146103f557806360246c88146103fd5780637180c8ca1461041257600080fd5b806321ff32a91461034b578063313ce5671461036c5780633656eec2146103865780633e691db91461039957806346fbf68e146103ac57600080fd5b80630a4e1493116102105780630a4e1493146102ad57806314e5f07b146102cd57806317fad7fc146102e05780631c0f12b6146102f357806320fc48811461030657600080fd5b8062ad800c1461024c57806301681a621461027557806302329a291461028a57806304baa00b1461029d57806306fdde03146102a5575b600080fd5b61025f61025a366004612e47565b6105a5565b60405161026c9190612eb0565b60405180910390f35b610288610283366004612ed8565b6105dc565b005b610288610298366004612f03565b6105e8565b61025f6105f1565b61025f610630565b6102b5610647565b6040516001600160a01b03909116815260200161026c565b6102886102db366004612f2f565b610687565b6102886102ee36600461300a565b6106a3565b61028861030136600461309f565b6106b9565b610319610314366004612e47565b6106cc565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161026c565b61035e6103593660046130e7565b610738565b60405190815260200161026c565b61037461077e565b60405160ff909116815260200161026c565b61035e610394366004613129565b610819565b61035e6103a7366004613159565b610852565b6103bf6103ba366004612ed8565b61085d565b604051901515815260200161026c565b61025f6103dd366004612e47565b610893565b6102886103f0366004613194565b6108a1565b61025f6108ef565b610405610924565b60405161026c91906131de565b61028861042036600461327f565b610c33565b61035e610433366004612ed8565b610c41565b61035e610c6d565b61028861044e3660046132ad565b610c87565b61028861046136600461327f565b610c98565b610288610474366004612ed8565b610d04565b610288610487366004612ed8565b610d0d565b61028861049a366004612ed8565b610d16565b6104a7610d1f565b60405161026c91906132e5565b61035e6104c2366004612e47565b610fcd565b61035e6104d5366004612e47565b610fed565b6104ed6104e836600461340b565b61100f565b60405161026c919061344d565b6102b56110ca565b61035e610510366004612e47565b61110a565b61035e610523366004612e47565b611118565b61053061114f565b60405161026c9190613491565b61028861054b3660046135a2565b61125b565b61028861055e366004612ed8565b6112a3565b6103bf610571366004613601565b6112ac565b61057e6112f0565b6040805182516001600160801b03908116825260209384015116928101929092520161026c565b60606105d76105b38361134f565b6040516020016105c39190612eb0565b604051602081830303815290604052611477565b919050565b6105e58161149b565b50565b6105e581611611565b606061062d6040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b8152506040516020016105c39190612eb0565b90565b606061062d60016040516020016105c3919061362f565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c3565b6106988989898989898989896116ad565b505050505050505050565b6106b18686868686866118a4565b505050505050565b6106c68484848433611958565b50505050565b60408051606081018252600080825260208201819052918101919091526105d7600860008481526020019081526020016000206040516020016105c3919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b60008381526012602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261077791016105c3565b9392505050565b600061062d7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080591906136db565b6040805160ff9092166020830152016105c3565b6000828152600f602090815260408083206001600160a01b038516845282528083205481519283015261084c91016105c3565b92915050565b600061084c82611b19565b6001600160a01b0381166000908152600e602090815260408083205490516105d7926105c39260ff169101901515815260200190565b60606105d76105b383611c57565b836108ab81611d55565b6001600160a01b0316336001600160a01b0316146108dc57604051632aab8bd360e01b815260040160405180910390fd5b6108e885858585611e12565b5050505050565b606061062d604051806040016040528060078152602001663b18971817189b60c91b8152506040516020016105c39190612eb0565b61099d604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006109a7611e7f565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b0390921691610a129190613724565b610a1c9190613737565b905060008215610b2e5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a4985611e97565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e919061374a565b509050610b2b818461202d565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610bff57610bfa8486612042565b610c02565b60005b81526003546001600160801b0316602091820152604051919250610c2c916105c3918491016131de565b5050505090565b610c3d8282612057565b5050565b6001600160a01b0381166000908152601360209081526040808320548151928301526105d791016105c3565b600061062d600d546040516020016105c391815260200190565b610c9383838333611e12565b505050565b3360008181526011602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6105e5816120e0565b6105e581612154565b6105e5816121c8565b610d27612d60565b60408051610200810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f00000000000000000000000000000000000000000000000000000000000000006101208601527f00000000000000000000000000000000000000000000000000000000000000006101408601526009548416610160860152600a548416610180860152600b5484166101a0860152600c549093166101c0850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101e0830191909152915161062d926105c39291016132e5565b60006105d7610fdb8361223c565b6040516020016105c391815260200190565b6000818152601060209081526040808320548151928301526105d791016105c3565b606060008267ffffffffffffffff81111561102c5761102c61376f565b604051908082528060200260200182016040528015611055578160200160208202803683370190505b50905060005b838110156110ae57600085858381811061107757611077613785565b9050602002013590506000815490508084848151811061109957611099613785565b6020908102919091010152505060010161105b565b506110c3816040516020016105c3919061344d565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c3565b60006105d7610fdb83612337565b60006105d7610fdb61114a7f000000000000000000000000000000000000000000000000000000000000000085613724565b612420565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261062d60026040516020016105c3919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461126581611d55565b6001600160a01b0316336001600160a01b03161461129657604051632aab8bd360e01b815260040160405180910390fd5b6106b18686868686611958565b6105e581612464565b6001600160a01b038281166000908152601160209081526040808320938516835292815282822054835160ff909116151591810191909152909161084c91016105c3565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261062d906060016105c3565b606060f882901c6001600160f81b038316600061136b826124d8565b90506000836003811115611381576113816136f8565b036113b3576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061146f565b60018360038111156113c7576113c76136f8565b036113f357806040516020016113dd919061379b565b604051602081830303815290604052935061146f565b6002836003811115611407576114076136f8565b0361141d57806040516020016113dd91906137d4565b6003836003811115611431576114316136f8565b0361146f576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016114929190612eb0565b60405180910390fd5b6114a361258d565b600b54336000908152600e60205260409020546001600160a01b039091169060ff161580156114db5750336001600160a01b03821614155b80156114f257506009546001600160a01b03163314155b1561150f576040516282b42960e81b815260040160405180910390fd5b60006115196125b7565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611563573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611587919061380e565b905061159d6001600160a01b038516848361264b565b816115a66125b7565b146115c4576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105e56001600055565b336000908152600e602052604090205460ff1615801561163c57506009546001600160a01b03163314155b15611659576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906116a290831515815260200190565b60405180910390a150565b834211156116ce5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116f55760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526013602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117e3573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461182157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389811660008181526013602090815260408083208054600101905560118252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806118c157506001600160a01b038516155b156118df5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118ff5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561194f5761194785858381811061191f5761191f613785565b90506020020135888886868681811061193a5761193a613785565b9050602002013533611958565b600101611902565b50505050505050565b6001600160a01b038416158061197557506001600160a01b038316155b156119935760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a57576001600160a01b0380851660009081526011602090815260408083209385168352929052205460ff16611a575760008581526012602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a555760008681526012602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a4f908490613737565b90915550505b505b6000858152600f602090815260408083206001600160a01b038816845290915281208054849290611a89908490613737565b90915550506000858152600f602090815260408083206001600160a01b038716845290915281208054849290611ac0908490613724565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611b2361258d565b611b2c8261269d565b600a546001600160a01b031680611b466020850185612ed8565b6001600160a01b031614611b6d57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600e602052604090205460ff16158015611b965750336001600160a01b03821614155b8015611bad57506009546001600160a01b03163314155b15611bca576040516282b42960e81b815260040160405180910390fd5b6000611bd4611e7f565b600d80546000909155909150611beb8183876126d3565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a60383618584611c2a60408a0160208b01612f03565b60408051938452602084019290925215159082015260600160405180910390a25050506105d76001600055565b606060f882901c6001600160f81b0383166000611c73826124d8565b90506000836003811115611c8957611c896136f8565b03611cbb576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061146f565b6001836003811115611ccf57611ccf6136f8565b03611ce557806040516020016113dd9190613827565b6002836003811115611cf957611cf96136f8565b03611d0f57806040516020016113dd919061385f565b6003836003811115611d2357611d236136f8565b0361146f57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526012602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611e92670de0b6b3a764000061223c565b905090565b611efb6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611ff3911661276c565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120259290041661276c565b905292915050565b60006107778383670de0b6b3a76400006127e2565b600061077783670de0b6b3a7640000846127e2565b6009546001600160a01b03163314612081576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600e6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b6009546001600160a01b0316331461210a576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6009546001600160a01b0316331461217e576040516282b42960e81b815260040160405180910390fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517fae062fb82c932c653cd44617343ecda1d13e375e0d6f20d969c944fbda1963d390600090a250565b6009546001600160a01b031633146121f2576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161228b575047612316565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156122ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612313919061380e565b90505b601454600003612327576000610777565b60145461077790849083906127e2565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612386575047612411565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156123ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061240e919061380e565b90505b601454610777908490836127e2565b600061244860106000612434600286612800565b815260200190815260200160002054612835565b61245a60106000612434600187612800565b61084c919061388b565b6009546001600160a01b0316331461248e576040516282b42960e81b815260040160405180910390fd5b600b80546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561257f57612513600a866138c1565b61251e906030613724565b60f81b82600161252e8487613737565b6125389190613737565b8151811061254857612548613785565b60200101906001600160f81b031916908160001a90535080612569816138d5565b91506125789050600a866138ee565b9450612502565b918290030190815292915050565b6002600054036125b057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611e92906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612622573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612646919061380e565b612337565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c93908490612863565b60006126ac6020830183612ed8565b6001600160a01b0316036105e55760405163f0dd15fd60e01b815260040160405180910390fd5b6000806126e0858561202d565b90506126eb81612337565b9450846000036126ff576000915050610777565b8491506127126040840160208501612f03565b156127415761273a856127286020860186612ed8565b6127356040870187613902565b6128c6565b9150612764565b612764856127526020860186612ed8565b61275f6040870187613902565b612a60565b509392505050565b600080670de0b6b3a7640000612780612bee565b61278a9190613949565b905080831161279a5760006127a4565b6127a48184613737565b91506107776127db670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613949565b8390612042565b60008260001904841183021582026127f957600080fd5b5091020490565b60006001600160f81b0382111561282a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b0382111561285f5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006128786001600160a01b03841683612c1a565b9050805160001415801561289d57508080602001905181019061289b9190613960565b155b15610c9357604051635274afe760e01b81526001600160a01b0384166004820152602401611492565b600060145485116128d757846128db565b6014545b945060006128e88661223c565b905085601460008282546128fc9190613737565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129a2576040516001600160a01b038716908390600081818185875af1925050503d8060008114612992576040519150601f19603f3d011682016040523d82523d6000602084013e612997565b606091505b505080915050612a38565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a359190613960565b90505b80612a56576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6014548411612a6f5783612a73565b6014545b93506000612a808561223c565b90508460146000828254612a949190613737565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612b3a576040516001600160a01b038616908390600081818185875af1925050503d8060008114612b2a576040519150601f19603f3d011682016040523d82523d6000602084013e612b2f565b606091505b505080915050612bd0565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bcd9190613960565b90505b806106b1576040516312171d8360e31b815260040160405180910390fd5b6000611e92427f0000000000000000000000000000000000000000000000000000000000000000612c28565b606061077783836000612c3e565b6000612c3482846138c1565b6107779084613737565b606081471015612c635760405163cd78605960e01b8152306004820152602401611492565b600080856001600160a01b03168486604051612c7f919061397d565b60006040518083038185875af1925050503d8060008114612cbc576040519150601f19603f3d011682016040523d82523d6000602084013e612cc1565b606091505b5091509150612cd1868383612cdb565b9695505050505050565b606082612cf057612ceb82612d37565b610777565b8151158015612d0757506001600160a01b0384163b155b15612d3057604051639996b31560e01b81526001600160a01b0385166004820152602401611492565b5080610777565b805115612d475780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612e426040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612e5957600080fd5b5035919050565b60005b83811015612e7b578181015183820152602001612e63565b50506000910152565b60008151808452612e9c816020860160208601612e60565b601f01601f19169290920160200192915050565b6020815260006107776020830184612e84565b6001600160a01b03811681146105e557600080fd5b600060208284031215612eea57600080fd5b813561077781612ec3565b80151581146105e557600080fd5b600060208284031215612f1557600080fd5b813561077781612ef5565b60ff811681146105e557600080fd5b60008060008060008060008060006101208a8c031215612f4e57600080fd5b8935985060208a0135975060408a0135612f6781612ec3565b965060608a0135612f7781612ec3565b955060808a0135612f8781612ef5565b945060a08a0135935060c08a0135612f9e81612f20565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612fd057600080fd5b50813567ffffffffffffffff811115612fe857600080fd5b6020830191508360208260051b850101111561300357600080fd5b9250929050565b6000806000806000806080878903121561302357600080fd5b863561302e81612ec3565b9550602087013561303e81612ec3565b9450604087013567ffffffffffffffff8082111561305b57600080fd5b6130678a838b01612fbe565b9096509450606089013591508082111561308057600080fd5b5061308d89828a01612fbe565b979a9699509497509295939492505050565b600080600080608085870312156130b557600080fd5b8435935060208501356130c781612ec3565b925060408501356130d781612ec3565b9396929550929360600135925050565b6000806000606084860312156130fc57600080fd5b83359250602084013561310e81612ec3565b9150604084013561311e81612ec3565b809150509250925092565b6000806040838503121561313c57600080fd5b82359150602083013561314e81612ec3565b809150509250929050565b60006020828403121561316b57600080fd5b813567ffffffffffffffff81111561318257600080fd5b82016060818503121561077757600080fd5b600080600080608085870312156131aa57600080fd5b8435935060208501356131bc81612ec3565b92506040850135915060608501356131d381612ec3565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561329257600080fd5b823561329d81612ec3565b9150602083013561314e81612ef5565b6000806000606084860312156132c257600080fd5b8335925060208401356132d481612ec3565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161331160208401826001600160a01b03169052565b50604083015161332c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161339e828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b6000806020838503121561341e57600080fd5b823567ffffffffffffffff81111561343557600080fd5b61344185828601612fbe565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561348557835183529284019291840191600101613469565b50909695505050505050565b81516001600160801b03168152610180810160208301516134bd60208401826001600160801b03169052565b5060408301516134d860408401826001600160801b03169052565b5060608301516134f360608401826001600160801b03169052565b5060808301516135086080840182600f0b9052565b5060a083015161352360a08401826001600160801b03169052565b5060c083015161353e60c08401826001600160801b03169052565b5060e083015161355960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613403565b600080600080600060a086880312156135ba57600080fd5b8535945060208601356135cc81612ec3565b935060408601356135dc81612ec3565b92506060860135915060808601356135f381612ec3565b809150509295509295909350565b6000806040838503121561361457600080fd5b823561361f81612ec3565b9150602083013561314e81612ec3565b600060208083526000845481600182811c91508083168061365157607f831692505b858310810361366e57634e487b7160e01b85526022600452602485fd5b87860183815260200181801561368b57600181146136a1576136cc565b60ff198616825284151560051b820196506136cc565b60008b81526020902060005b868110156136c6578154848201529085019089016136ad565b83019750505b50949998505050505050505050565b6000602082840312156136ed57600080fd5b815161077781612f20565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561084c5761084c61370e565b8181038181111561084c5761084c61370e565b6000806040838503121561375d57600080fd5b82519150602083015161314e81612ef5565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b8152600082516137c7816011850160208701612e60565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613801816012850160208701612e60565b9190910160120192915050565b60006020828403121561382057600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613852816010850160208701612e60565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b8152600082516137c7816011850160208701612e60565b81810360008312801583831316838312821617156110c3576110c361370e565b634e487b7160e01b600052601260045260246000fd5b6000826138d0576138d06138ab565b500690565b6000600182016138e7576138e761370e565b5060010190565b6000826138fd576138fd6138ab565b500490565b6000808335601e1984360301811261391957600080fd5b83018035915067ffffffffffffffff82111561393457600080fd5b60200191503681900382131561300357600080fd5b808202811582820484141761084c5761084c61370e565b60006020828403121561397257600080fd5b815161077781612ef5565b6000825161398f818460208701612e60565b919091019291505056fea2646970667358221220e4dece1c9391a916c15a3c7abe52479f12c5794b170f8cab556e33831facd68864736f6c634300081400336102606040523480156200001257600080fd5b50604051620041ce380380620041ce833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613cf4620004da6000396000505060005050600050506000818160af015281816103250152612f9501526000818161136401528181611775015281816117d801528181612b7301528181612baf01528181612dae0152612f6f01526000818161071301528181610d6101528181610da801528181610f6d015281816115da015281816116280152612f4901526000611b98015260008181611cbe01528181612321015261239a0152600081816108d701528181610f0501528181611c92015261236e015260008181610dfa01526122e701526000818161073401528181610d3f01528181610dc901528181610f8e015281816115b8015281816116490152612fbb01526000818161080f01528181610e84015281816116d1015281816121bc01526134ef0152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600050506000818161196a015281816119b3015281816126100152818161265901528181612734015281816127e0015281816128cc01526129780152613cf46000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461379d565b610073565b60405190815260200160405180910390f35b61004e61006e36600461379d565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bec565b3387610c21565b6000806000806000806101568b888e610cfa565b95509550955095509550955060008c90508c4210156102165782600d60008282546101819190613812565b9091555061019990506101926105ca565b4284610fee565b6101a68c8887878561112c565b60006101b18e6112a6565b90506101cf6101bf8e6112f0565b6101c99083613825565b8261131e565b6101d88961135d565b6101e4576101e46113bd565b60006101ef8a6113d6565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b61022086896113e3565b955061022b886113d6565b505b600061023a878a8d6114c4565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bec565b61027a6020830183613845565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161387c565b6102cc8a6102c68d8f613812565b9061155e565b8d6102da60408c018c613899565b6040516102ee989796959493929190613909565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bec565b6000806000806000806103bb8b888e611573565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e69190613812565b909155506103f790506101926105ca565b6104048c8887878561175e565b600061040f826112a6565b905061042761041d8e6112f0565b6101c99083613951565b6104308961135d565b61043c5761043c6113bd565b60006104478a6113d6565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b61047886896113e3565b9550610483886113d6565b505b6000610492878a8d6114c4565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bec565b6104d06020830183613845565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161387c565b8a61051c60408b018b613899565b60405161052f9796959493929190613979565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613845565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a764000061194f565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a4a565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613812565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a60565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b92505b5061076583611a98565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6139ba565b8a84610fee565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613812565b4290611ac2565b84610fee565b61080288611ad7565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6139ba565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bec565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c7b565b9150915080600d60008282546108a59190613812565b909155506108c19050866000846108bb816112f0565b8861112c565b6108cb8183613812565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d4a565b915061090f61090a838561155e565b611d94565b600680546002906109309084906201000090046001600160701b03166139cd565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a98565b6006805460109061097f908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bec565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611c7b565b9150915080600d60008282546109f69190613812565b90915550610a12905083600084610a0c816112f0565b8a61175e565b610a1c81836139ba565b9150610a2b61090a838761155e565b60068054600290610a4c9084906201000090046001600160701b03166139cd565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a98565b60068054601090610a9b908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f0565b610add836112f0565b610ae79190613825565b600061131e565b8e610af98482611dbe565b50505b6000610b0784611fb8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd5578e610bd15a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612104565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c165760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6457604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca79084906139ba565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d0e611a60565b90506000610d1b8a61218f565b6002549091508c908c90610d85908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121e0565b600254919d509a50909550610ded908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b9550610e23858c610e1e897f0000000000000000000000000000000000000000000000000000000000000000612250565b612280565b15610e3057610e306113bd565b6000806000610e4185878b876122c2565b9c5091945092509050610e5481846139ba565b610e5e9089613812565b9750610e6a8284613812565b610e74908d613812565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eae91906139ba565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef65760008b8152600860205260409020600101546001600160801b0316610ef8565b8b5b90508b610f298e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d4a565b9950610f35878a6139ba565b9850670de0b6b3a7640000610fb2610f4d8787613812565b600254610f6b908f90600160801b90046001600160801b03166139ba565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b1115610fc057610fc06113bd565b610fd08a8a878a878760006123d6565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101a5750505050565b6000848152600860205260408120546001600160801b0316908190036110745761104383611a98565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f2565b6110c56110c0670de0b6b3a764000061108d88866139ba565b6110979190613a0d565b85670de0b6b3a76400006110ab878a6139ba565b6110b59190613a0d565b859291906001612475565b611a98565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fb84611a98565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111756110c082611158670de0b6b3a764000086613a0d565b600554600160801b90046001600160801b031691908a6000612475565b600580546001600160801b03928316600160801b02921691909117905561119b86611a98565b6111a59082613a24565b600480546001600160801b03928316600160801b0292169190911790556111cb84611a98565b600280546000906111e69084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112138361251f565b60048054600090611228908490600f0b613a44565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125885611a98565b6002805460109061127a908490600160801b90046001600160801b0316613a24565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112ce601060006112ba600286610bec565b8152602001908152602001600020546112f0565b6112e0601060006112ba600187610bec565b6112ea9190613825565b92915050565b60006001600160ff1b0382111561131a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611339906110c0906001600160801b0316848461255b565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006113897f0000000000000000000000000000000000000000000000000000000000000000836125c2565b60035461139f91906001600160801b0316613812565b6002546113b5906001600160801b03168461155e565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ea826004611dbe565b60008060006113f184611ad7565b90925090506000611402868661155e565b90508183111561141a576114178683856125d7565b95505b8281101561142c578083039250611431565b600092505b61143a83611d94565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148d57869003611491565b5060005b61149a81611a98565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114d1858561155e565b90506114dc816125f5565b9450846000036114f0576000915050611557565b849150611503604084016020850161387c565b156115325761152b856115196020860186613845565b6115266040870187613899565b6126de565b9150611555565b611555856115436020860186613845565b6115506040870187613899565b612878565b505b9392505050565b60006115578383670de0b6b3a76400006125d7565b600080600080600080600080611587611a60565b905060006115948a61218f565b6002549091508b908d906115fe908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a0e565b600254919d509b509095506000908190819061166d908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b985061167b84878b886122c2565b9c50919450909250905061168f82846139ba565b61169990896139ba565b97506116a58184613812565b6116af908e6139ba565b9c506116bb8a8e613812565b9b505050505050505061174886868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6116fb91906139ba565b81526020810191909152604001600020600101546001600160801b0316428e1161173f5760008e8152600860205260409020600101546001600160801b0316611741565b8e5b60016123d6565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117a057507f000000000000000000000000000000000000000000000000000000000000000061179e85836139ba565b105b156117ad576117ad6113bd565b6004549084900390600f0b6117c28482613825565b9050836117ce866112f0565b13801561180357507f00000000000000000000000000000000000000000000000000000000000000006118018383612a62565b105b15611810576118106113bd565b600354600160801b90046001600160801b03166118526110c08261183c670de0b6b3a764000088613a0d565b6005546001600160801b031691908c6000612475565b600580546001600160801b0319166001600160801b039290921691909117905561187c88826139ba565b905061188781611a98565b600380546001600160801b03928316600160801b0292169190911790556118ad83611a98565b600280546001600160801b0319166001600160801b03929092169190911790556118d68261251f565b600480546001600160801b0319166001600160801b03929092169190911790556118ff87611a98565b60028054601090611921908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161199e575047611a29565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a269190613a71565b90505b601454600003611a3a576000611557565b60145461155790849083906125d7565b6000611a568284613aa0565b61155790846139ba565b6002546004546000916105c5916001600160801b0390911690600f0b612a62565b600061008182611a928588886125d7565b90612a88565b60006001600160801b0382111561131a57604051630f0af95160e11b815260040160405180910390fd5b6000818311611ad15782611557565b50919050565b6006546000908190611afa908490600160801b90046001600160801b031661155e565b6006546201000090046001600160701b03169250905081811115611c76576000611b2483836139ba565b9050611b336110c08286612afd565b60068054601090611b55908490600160801b90046001600160801b0316613a24565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b8e8583612b1290919063ffffffff16565b90506000611bbc827f000000000000000000000000000000000000000000000000000000000000000061155e565b905080600d6000828254611bd09190613812565b90915550611be0905081836139ba565b9150611beb82611a98565b60028054600090611c069084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3382612b27565b60048054600090611c48908490600f0b613a44565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c888785612b12565b91506000611cb6837f000000000000000000000000000000000000000000000000000000000000000061155e565b9050611ce2817f000000000000000000000000000000000000000000000000000000000000000061155e565b91508315611d0557611cf482826139ba565b611cfe90846139ba565b9250611d1c565b611d0f82826139ba565b611d199084613812565b92505b86861015611d3f57611d2f8387896125d7565b9250611d3c8287896125d7565b91505b509550959350505050565b600080611d6284611d5c8a888a6125d7565b90612b12565b9050611d6f8884866125d7565b611d799082613812565b905086811115611d895786810391505b509695505050505050565b60006001600160701b0382111561131a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e09916001600160801b0316906139ba565b905080600003611e1d5760019150506112ea565b6000611e2885612b51565b905080600003611e3d576001925050506112ea565b600080611e4b838589612bed565b9150915080611e615760009450505050506112ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e9d929190613b32565b6040805180830381865af4158015611eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611edd9190613ba8565b91509150611efb611eed826112f0565b611ef690613bcc565b612d68565b925082611f1157600096505050505050506112ea565b611f1a82611a98565b60078054600090611f359084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f6281611a98565b60078054601090611f84908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fe187612f00565b6040518263ffffffff1660e01b8152600401611ffd9190613be8565b6040805180830381865af4158015612019573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203d9190613bf7565b9150915080612053575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916120b991613812565b6120c391906139ba565b9050806000036120db57506000958695509350505050565b60008087116120eb5760006120f6565b6120f68488846125d7565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561212a5761212a613c27565b6040519080825280601f01601f191660200182016040528015612154576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612175578692505b828152826000602083013e90999098509650505050505050565b60008061219a6105ca565b90508083116121aa5760006121b4565b6121b481846139ba565b9150611557827f0000000000000000000000000000000000000000000000000000000000000000612b12565b600080806122016121f988670de0b6b3a76400006139ba565b89908761303a565b905086156122435761221388886125c2565b91506122348a8a8461222d8a670de0b6b3a76400006139ba565b8989613060565b92506122408382613812565b90505b9750975097945050505050565b600061226e61226784670de0b6b3a76400006139ba565b83906125c2565b61155790670de0b6b3a76400006139ba565b6000806122b78561228f611a60565b6122999190613812565b600254610f6b908790600160801b90046001600160801b03166139ba565b909210949350505050565b600080808061231987866123128b61230c6122e58c670de0b6b3a76400006139ba565b7f0000000000000000000000000000000000000000000000000000000000000000906125c2565b906125c2565b919061303a565b9350612345847f000000000000000000000000000000000000000000000000000000000000000061155e565b9150600061236661235e89670de0b6b3a76400006139ba565b8a908861303a565b9050612392817f00000000000000000000000000000000000000000000000000000000000000006125c2565b93506123be847f000000000000000000000000000000000000000000000000000000000000000061155e565b6123c89084613812565b915050945094509450949050565b600080600080600080888810156124455786156123fb576123f88d898b6125d7565b9c505b6124068c898b6125d7565b9b506124118b6112f0565b61241a8d6112f0565b6124249190613825565b90506124318b898b6125d7565b9a5061243e8a898b6125d7565b9950612464565b61244e8b6112f0565b6124578d6112f0565b6124619190613825565b90505b9b9c9a9b999a975050505050505050565b600082600003612486575084612516565b81156124d9576124b76124998487613812565b6124a3858761155e565b6124ad888a61155e565b611d5c9190613812565b905060006124c58588611ac2565b9050808210156124d3578091505b50612516565b8285036124e857506000612516565b6125136124f584876139ba565b6124ff85876125c2565b612509888a61155e565b611d5c91906139ba565b90505b95945050505050565b600060016001607f1b031982128061253d575060016001607f1b0382135b1561131a5760405163a5353be560e01b815260040160405180910390fd5b600080612569846000613083565b612574846000613083565b61257e9190613825565b9050600081131561259a576125938186613812565b94506125b9565b60008112156125b9576125ac81613bcc565b6125b690866139ba565b94505b50929392505050565b60006115578383670de0b6b3a764000061303a565b60008260001904841183021582026125ee57600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126445750476126cf565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126cc9190613a71565b90505b601454611557908490836125d7565b600060145485116126ef57846126f3565b6014545b945060006127008661194f565b9050856014600082825461271491906139ba565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127ba576040516001600160a01b038716908390600081818185875af1925050503d80600081146127aa576040519150601f19603f3d011682016040523d82523d6000602084013e6127af565b606091505b505080915050612850565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612829573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061284d9190613c3d565b90505b8061286e576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6014548411612887578361288b565b6014545b935060006128988561194f565b905084601460008282546128ac91906139ba565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612952576040516001600160a01b038616908390600081818185875af1925050503d8060008114612942576040519150601f19603f3d011682016040523d82523d6000602084013e612947565b606091505b5050809150506129e8565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129e59190613c3d565b90505b80612a06576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612a2f612a2788670de0b6b3a76400006139ba565b8990876125d7565b9050861561224357612a41888861155e565b91506122348a8a84612a5b8a670de0b6b3a76400006139ba565b8989613099565b600080612a6f84846130aa565b909250905080612a8157612a816113bd565b5092915050565b600081600003612aa15750670de0b6b3a76400006112ea565b82600003612ab1575060006112ea565b6000612abc836112f0565b90506000612ad1612acc866112f0565b6130e9565b9050818102612ae8670de0b6b3a764000082613c5a565b9050612af38161330f565b9695505050505050565b600061155783670de0b6b3a76400008461303a565b600061155783670de0b6b3a7640000846125d7565b600060016001607f1b0382111561131a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612b6c906001600160801b031684612afd565b9050612b987f000000000000000000000000000000000000000000000000000000000000000082613812565b6002546001600160801b03161115611ad1576002547f000000000000000000000000000000000000000000000000000000000000000090612be39083906001600160801b03166139ba565b61155791906139ba565b612bf56136ea565b600080612c0184612f00565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c3c9190613be8565b6040805180830381865af4158015612c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c7c9190613bf7565b9350905082612c91575060009150612d609050565b6000612cb8612cb384610160015185610140015161155e90919063ffffffff16565b6112f0565b612cd8612cb38561012001518661010001516125c290919063ffffffff16565b612ce29190613825565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e459190613c88565b935093509350935080612e615750600098975050505050505050565b868414612e9257612e7184611a98565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ec357612ea28361251f565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ef157612ed382611a98565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f0861373c565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161300091166134a4565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192613032929004166134a4565b905292915050565b600082600019048411830215820261305157600080fd5b50910281810615159190040190565b60008061307188888888888861351a565b909250905080611d8957611d896113bd565b60008183136130925781611557565b5090919050565b6000806130718888888888886135fb565b6000806000836130b9866112f0565b6130c39190613825565b905060008112156130db5760008092509250506130e2565b9150600190505b9250929050565b600080821361310b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061318e9084901c6112f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361332a57506000919050565b680755bf798b4a1bf1e58212613353576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612af374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f0565b600080670de0b6b3a76400006134b86105ca565b6134c29190613a0d565b90508083116134d25760006134dc565b6134dc81846139ba565b9150611557613513670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a0d565b8390612b12565b600080600061352c89898888886136bb565b9050868810156135435760008092509250506135f0565b96869003966135528887612a88565b9750878110156135695760008092509250506135f0565b87810361357781868861303a565b9050670de0b6b3a764000081106135ab576135a461359d670de0b6b3a764000089612afd565b8290612a88565b90506135c3565b6135c061359d670de0b6b3a764000089612b12565b90505b6135cd8186612afd565b9050898110156135e5576000809350935050506135f0565b899003925060019150505b965096945050505050565b600080600061360d89898888886136bb565b905061361d86611a92898b613812565b9750878110156136345760008092509250506135f0565b87810361364281868861303a565b9050670de0b6b3a7640000811061366f5761366861359d670de0b6b3a764000089612afd565b9050613687565b61368461359d670de0b6b3a764000089612b12565b90505b6136918186612afd565b9050808a10156136a9576000809350935050506135f0565b90980398600198509650505050505050565b60006136c78585612a88565b6136e06136d886611a92868b6125c2565b85908561303a565b6125139190613812565b6040518061012001604052806136fe61373c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156137b357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156137df57600080fd5b8501606081880312156137f157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ea576112ea6137fc565b8181036000831280158383131683831282161715612a8157612a816137fc565b60006020828403121561385757600080fd5b81356001600160a01b038116811461155757600080fd5b80151581146105af57600080fd5b60006020828403121561388e57600080fd5b81356115578161386e565b6000808335601e198436030181126138b057600080fd5b83018035915067ffffffffffffffff8211156138cb57600080fd5b6020019150368190038213156130e257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061394360e0830184866138e0565b9a9950505050505050505050565b8082018281126000831280158216821582161715613971576139716137fc565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006139ad60c0830184866138e0565b9998505050505050505050565b818103818111156112ea576112ea6137fc565b6001600160701b03818116838216019080821115612a8157612a816137fc565b6001600160801b03818116838216019080821115612a8157612a816137fc565b80820281158282048414176112ea576112ea6137fc565b6001600160801b03828116828216039080821115612a8157612a816137fc565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ea576112ea6137fc565b600060208284031215613a8357600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613aaf57613aaf613a8a565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b46828551613ab4565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bbb57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613be157613be16137fc565b5060000390565b61018081016112ea8284613ab4565b60008060408385031215613c0a57600080fd5b825191506020830151613c1c8161386e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613c4f57600080fd5b81516115578161386e565b600082613c6957613c69613a8a565b600160ff1b821460001984141615613c8357613c836137fc565b500590565b60008060008060808587031215613c9e57600080fd5b84519350602085015192506040850151915060608501516137f18161386e56fea26469706673582212209c549956088b50fcd44e09178f2c1d660c5fbd79f8a632bd62a2491bd2e0ea6164736f6c634300081400336102606040523480156200001257600080fd5b506040516200443438038062004434833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f21620005136000396000505060005050600050506000818161010001528181610310015261316501526000818161149c01528181611fc201528181612025015281816127d701528181612d4a01528181612d8601528181612f7e015261313f01526000818161083a01528181610d6501528181610da701528181610e990152818161130f0152818161136e01528181611848015281816118db015261311901526000611be1015260008181611d07015281816129c701528181612a40015261327f0152600081816109fe01528181610e1a0152818161140901528181611cdb0152612a14015260008181610df901528181612993015261323b01526000818161085b01528181610d4301528181610dc801528181610eba015281816112ed0152818161138f015261318b0152600081816101de015281816103a80152818161093601526137350152600081816106f401528181610774015281816107ea015281816108b601526108ee01526000505060008181610556015281816116460152818161168f01528181611721015281816117a201528181611949015281816119ca01528181612858015281816128a101528181612b0d0152612b560152613f216000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046139ca565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046139ca565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106ce565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ec565b905061017a81846004600161071d565b50600080600061018a8787610d14565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613a3f565b909155506101d99050844283610ef6565b6102037f000000000000000000000000000000000000000000000000000000000000000085613a3f565b98506102118389888c611034565b600061021e60018b6111ce565b90506102378161023160208e018e613a52565b8b611203565b8d8a8a898e8561024a6020830183613a52565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613a89565b8961029560408a018a613aa6565b6040516102a89796959493929190613b16565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112ab565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106ec565b9050600061039f6103956106ec565b846004600161071d565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613a3f565b90506000806000806103e08e89886112be565b600d8054949850929650909450925083916000906103ff908490613a3f565b909155506104109050874283610ef6565b50600061041e84898d611444565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b89611476565b60006104686002886111ce565b90508c6104828261047c6020840184613a52565b85611203565b858b86846104936020860186613a52565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613a89565b6104e4896104de8a8d613b57565b906106ce565b8d6104f260408e018e613aa6565b604051610506989796959493929190613b6a565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613a52565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061060d6040850160208601613a89565b1561063257610628856106236040870187613aa6565b61162a565b909350905061064a565b503461064a856106456040870187613aa6565b6118be565b6106526112ab565b915080156106c557604051600090339083908381818185875af1925050503d806000811461069c576040519150601f19603f3d011682016040523d82523d6000602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e38383670de0b6b3a7640000611a68565b90505b92915050565b6000610718427f0000000000000000000000000000000000000000000000000000000000000000611a86565b905090565b600084815260086020526040812060018101546001600160801b031615158061074557504286115b1561075e57600101546001600160801b03169050610d0c565b600080600061076b6106ec565b905060006107997f00000000000000000000000000000000000000000000000000000000000000008b613a3f565b90505b8181101561080f576000818152600860205260409020600101546001600160801b031680156107e7576000828152600860205260409020549094506001600160801b0316925061080f565b507f00000000000000000000000000000000000000000000000000000000000000000161079c565b836000036108825788935061087f610825611a9c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b92505b5061088c83611add565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e26108db7f00000000000000000000000000000000000000000000000000000000000000008b613b57565b8a84610ef6565b6109208961091a6109137f000000000000000000000000000000000000000000000000000000000000000083613a3f565b4290611b0b565b84610ef6565b61092988611b20565b506000905060088161095b7f00000000000000000000000000000000000000000000000000000000000000008d613b57565b815260208101919091526040016000908120600101546001600160801b0316915061098760028c6111ce565b6000818152601060205260408120549192508c8c8315610acd57600192506000806109b686898d866000611cc4565b9150915080600d60008282546109cc9190613a3f565b909155506109e89050866000846109e281611d93565b88611dbd565b6109f28183613a3f565b9150610a2286838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f37565b9150610a36610a3183856106ce565b611f81565b60068054600290610a579084906201000090046001600160701b0316613bb2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8482611add565b60068054601090610aa6908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ada6001846111ce565b6000818152601060205260409020549091508015610be95760019450600080610b07838b8f886001611cc4565b9150915080600d6000828254610b1d9190613a3f565b90915550610b39905083600084610b3381611d93565b8a611fab565b610b438183613b57565b9150610b52610a3183876106ce565b60068054600290610b739084906201000090046001600160701b0316613bb2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba082611add565b60068054601090610bc2908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2357610c15610bfb87611d93565b610c0483611d93565b610c0e9190613bf2565b600061219c565b8e610c2084826121db565b50505b6000610c2e846123d5565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cfc578e610cf85a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612521565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610d24611a9c565b600254909150610d89908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006125ac565b600254909450610dec908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b9150610e438785610e3e857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006125d8565b61263d565b15610e5057610e5061267f565b610e5c87858885612698565b91965094509250670de0b6b3a7640000610ede610e798784613a3f565b600254610e97908890600160801b90046001600160801b0316613b57565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b1115610eec57610eec61267f565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f225750505050565b6000848152600860205260408120546001600160801b031690819003610f7c57610f4b83611add565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610ffa565b610fcd610fc8670de0b6b3a7640000610f958886613b57565b610f9f9190613c12565b85670de0b6b3a7640000610fb3878a613b57565b610fbd9190613c12565b8592919060016126e4565b611add565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61100384611add565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611076610fc882611060670de0b6b3a764000086613c12565b6005546001600160801b031691908860016126e4565b600580546001600160801b0319166001600160801b039290921691909117905561109f85611add565b600280546000906110ba9084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110e784611add565b60028054601090611109908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061113684611add565b6111409082613bd2565b600380546001600160801b03808416600160801b029116179055905060006111678361278c565b90506111858161117687611d93565b6111809084613c49565b61219c565b61118e846127d0565b61119a5761119a61267f565b60006111a585612830565b9050806111c557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111f85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611235908490613a3f565b909155505060008381526010602052604081208054839290611258908490613a3f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610718670de0b6b3a764000061283d565b60008060008060006112ce611a9c565b600254909150611333908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612938565b9350876113408589612959565b111561134e5761134e61267f565b60025460009081906113b3908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611abd565b93506113c98a670de0b6b3a7640000868c61296e565b509193509091506113dc90508183613b57565b6113e69087613b57565b9550886114338161142d8d6113fb868c613b57565b8d6114068782612a7c565b877f0000000000000000000000000000000000000000000000000000000000000000612a92565b90612959565b975090945050505093509350935093565b60006114566040830160208401613a89565b1561146257508261146f565b61146c8484612ab7565b90505b9392505050565b6002546001600160801b0316838110156114925761149261267f565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114ca908390600f0b612acc565b10156114d8576114d861267f565b60045461152290610fc890600160801b90046001600160801b0316611505670de0b6b3a764000086613c12565b600554600160801b90046001600160801b031691908960016126e4565b600580546001600160801b03928316600160801b02921691909117905561154881611add565b600280546001600160801b0319166001600160801b039290921691909117905561157185611add565b60028054601090611593908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115c085611add565b600480546010906115e2908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116118361278c565b90506111858161162088611d93565b6111809084613bf2565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161167a575047611705565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156116de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117029190613c71565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611780578734101561176f576040516312171d8360e31b815260040160405180910390fd5b6117798834613b57565b905061181a565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156117f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118179190613c8a565b91505b81611838576040516312171d8360e31b815260040160405180910390fd5b60145460000361187d5761186c887f0000000000000000000000000000000000000000000000000000000000000000612ab7565b6014819055945092506118b6915050565b60145460009061188f908a9086611a68565b905080601460008282546118a39190613a3f565b909155509095509093506118b692505050565b935093915050565b60006118c98461283d565b9050601454600003611907576118ff817f0000000000000000000000000000000000000000000000000000000000000000612ab7565b60145561192d565b600061191282612af2565b905080601460008282546119269190613a3f565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119a85782341015611997576040516312171d8360e31b815260040160405180910390fd5b6119a18334613b57565b9050611a42565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611a1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3f9190613c8a565b91505b81611a60576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611a7f57600080fd5b5091020490565b6000611a928284613cbd565b6106e39084613b57565b600254600454600091610718916001600160801b0390911690600f0b612acc565b6000611ad482611ace858888611a68565b90612bdb565b95945050505050565b60006001600160801b03821115611b0757604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611b1a57826106e3565b50919050565b6006546000908190611b43908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611cbf576000611b6d8383613b57565b9050611b7c610fc88286612c46565b60068054601090611b9e908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611bd78583612ab790919063ffffffff16565b90506000611c05827f00000000000000000000000000000000000000000000000000000000000000006106ce565b905080600d6000828254611c199190613a3f565b90915550611c2990508183613b57565b9150611c3482611add565b60028054600090611c4f9084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c7c82612c5b565b60048054600090611c91908490600f0b613cd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cd18785612ab7565b91506000611cff837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611d2b817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611d4e57611d3d8282613b57565b611d479084613b57565b9250611d65565b611d588282613b57565b611d629084613a3f565b92505b86861015611d8857611d78838789611a68565b9250611d85828789611a68565b91505b509550959350505050565b60006001600160ff1b03821115611b075760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e06610fc882611de9670de0b6b3a764000086613c12565b600554600160801b90046001600160801b031691908a60006126e4565b600580546001600160801b03928316600160801b029216919091179055611e2c86611add565b611e369082613c29565b600480546001600160801b03928316600160801b029216919091179055611e5c84611add565b60028054600090611e779084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ea483612c85565b60048054600090611eb9908490600f0b613cd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ee985611add565b60028054601090611f0b908490600160801b90046001600160801b0316613c29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f4f84611f498a888a611a68565b90612ab7565b9050611f5c888486611a68565b611f669082613a3f565b905086811115611f765786810391505b509695505050505050565b60006001600160701b03821115611b075760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611fed57507f0000000000000000000000000000000000000000000000000000000000000000611feb8583613b57565b105b15611ffa57611ffa61267f565b6004549084900390600f0b61200f8482613bf2565b90508361201b86611d93565b13801561205057507f000000000000000000000000000000000000000000000000000000000000000061204e8383612acc565b105b1561205d5761205d61267f565b600354600160801b90046001600160801b031661209f610fc882612089670de0b6b3a764000088613c12565b6005546001600160801b031691908c60006126e4565b600580546001600160801b0319166001600160801b03929092169190911790556120c98882613b57565b90506120d481611add565b600380546001600160801b03928316600160801b0292169190911790556120fa83611add565b600280546001600160801b0319166001600160801b039290921691909117905561212382612c85565b600480546001600160801b0319166001600160801b039290921691909117905561214c87611add565b6002805460109061216e908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546121b790610fc8906001600160801b03168484612cc1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612226916001600160801b031690613b57565b90508060000361223a5760019150506106e6565b600061224585612d28565b90508060000361225a576001925050506106e6565b600080612268838589612dc4565b915091508061227e5760009450505050506106e6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122ba929190613d7c565b6040805180830381865af41580156122d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122fa9190613df2565b9150915061231861230a82611d93565b61231390613e16565b612f38565b92508261232e57600096505050505050506106e6565b61233782611add565b600780546000906123529084906001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061237f81611add565b600780546010906123a1908490600160801b90046001600160801b0316613bd2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123fe876130d0565b6040518263ffffffff1660e01b815260040161241a9190613e32565b6040805180830381865af4158015612436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061245a9190613e41565b9150915080612470575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916124d691613a3f565b6124e09190613b57565b9050806000036124f857506000958695509350505050565b6000808711612508576000612513565b612513848884611a68565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561254757612547613e71565b6040519080825280601f01601f191660200182016040528015612571576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612592578692505b828152826000602083013e90999098509650505050505050565b60006125cd8787876125c688670de0b6b3a7640000613b57565b878761320a565b979650505050505050565b600061146c6126196125f284670de0b6b3a7640000613b57565b61142d670de0b6b3a7640000612608818a612c46565b6126129190613b57565b8790612959565b61262b90670de0b6b3a7640000613a3f565b611f4984670de0b6b3a7640000613b57565b6000806126748561264c611a9c565b6126569190613a3f565b600254610e97908790600160801b90046001600160801b0316613b57565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006126ab89878961322d565b90925090506126ba8289613b57565b975060006126c982888a611a68565b90506126d5818b613b57565b9a989950979650505050505050565b6000826000036126f5575084611ad4565b8115612748576127266127088487613a3f565b61271285876106ce565b61271c888a6106ce565b611f499190613a3f565b905060006127348588611b0b565b905080821015612742578091505b50611ad4565b82850361275757506000611ad4565b6127826127648487613b57565b61276e8587612959565b612778888a6106ce565b611f499190613b57565b9695505050505050565b60006127b4601060006127a06002866111ce565b815260200190815260200160002054611d93565b6127c6601060006127a06001876111ce565b6106e69190613bf2565b60006127fc7f000000000000000000000000000000000000000000000000000000000000000083612959565b60035461281291906001600160801b0316613a3f565b600254612828906001600160801b0316846106ce565b101592915050565b60006106e68260046121db565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161288c575047612917565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129149190613c71565b90505b60145460000361292857600061146f565b60145461146f9084908390611a68565b60006125cd87878761295288670de0b6b3a7640000613b57565b87876132ad565b60006106e38383670de0b6b3a76400006132be565b60008080806129bf87866129b88b61142d6129918c670de0b6b3a7640000613b57565b7f000000000000000000000000000000000000000000000000000000000000000090612959565b91906132be565b93506129eb847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91506000612a0c612a0489670de0b6b3a7640000613b57565b8a90886132be565b9050612a38817f0000000000000000000000000000000000000000000000000000000000000000612959565b9350612a64847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612a6e9084613a3f565b915050945094509450949050565b6000818311612a8b57816106e3565b5090919050565b600080612aaa84612aa48a888a6132be565b90612c46565b9050611f5c8884866132be565b60006106e383670de0b6b3a764000084611a68565b600080612ad984846132e4565b909250905080612aeb57612aeb61267f565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612b41575047612bcc565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612ba5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bc99190613c71565b90505b60145461146f90849083611a68565b600081600003612bf45750670de0b6b3a76400006106e6565b82600003612c04575060006106e6565b6000612c0f83611d93565b90506000612c24612c1f86611d93565b613320565b9050818102612c3b670de0b6b3a764000082613e87565b905061278281613546565b60006106e383670de0b6b3a7640000846132be565b600060016001607f1b03821115611b075760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612ca3575060016001607f1b0382135b15611b075760405163a5353be560e01b815260040160405180910390fd5b600080612ccf8460006136db565b612cda8460006136db565b612ce49190613bf2565b90506000811315612d0057612cf98186613a3f565b9450612d1f565b6000811215612d1f57612d1281613e16565b612d1c9086613b57565b94505b50929392505050565b6003546000908190612d43906001600160801b031684612c46565b9050612d6f7f000000000000000000000000000000000000000000000000000000000000000082613a3f565b6002546001600160801b03161115611b1a576002547f000000000000000000000000000000000000000000000000000000000000000090612dba9083906001600160801b0316613b57565b61146f9190613b57565b612dcc613917565b600080612dd8846130d0565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e139190613e32565b6040805180830381865af4158015612e2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e539190613e41565b9350905082612e685750600091506118b69050565b6000612e8f612e8a8461016001518561014001516106ce90919063ffffffff16565b611d93565b612eaf612e8a85610120015186610100015161295990919063ffffffff16565b612eb99190613bf2565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ff1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130159190613eb5565b9350935093509350806130315750600098975050505050505050565b8684146130625761304184611add565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146130935761307283612c85565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146130c1576130a382611add565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6130d8613969565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916131d091166136ea565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192613202929004166136ea565b905292915050565b60008061321b888888888888613760565b909250905080611f7657611f7661267f565b6000806132778561142d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061326d818c612c46565b61142d9190613b57565b91506132a3827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b60008061321b888888888888613828565b60008260001904841183021582026132d557600080fd5b50910281810615159190040190565b6000806000836132f386611d93565b6132fd9190613bf2565b905060008112156133155760008092509250506106c7565b946001945092505050565b60008082136133425760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133c59084901c611d93565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361356157506000919050565b680755bf798b4a1bf1e5821261358a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061278274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611d93565b6000818313612a8b57816106e3565b600080670de0b6b3a76400006136fe6106ec565b6137089190613c12565b9050808311613718576000613722565b6137228184613b57565b915061146f613759670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c12565b8390612ab7565b600080600061377289898888886138e8565b905061378c86611ace6137858a8d613a3f565b87906106ce565b9850613799858a86611a68565b9850888110156137b057600080925092505061381d565b888103670de0b6b3a764000081106137e5576137de6137d7670de0b6b3a764000089612c46565b8290612bdb565b90506137fd565b6137fa6137d7670de0b6b3a764000089612ab7565b90505b808910156138135760008093509350505061381d565b8803925060019150505b965096945050505050565b600080600061383a89898888886138e8565b905061384a86611ace898b613a3f565b97508781101561386157600080925092505061381d565b87810361386f8186886132be565b9050670de0b6b3a7640000811061389c576138956137d7670de0b6b3a764000089612c46565b90506138b4565b6138b16137d7670de0b6b3a764000089612ab7565b90505b6138be8186612c46565b9050808a10156138d65760008093509350505061381d565b90980398600198509650505050505050565b60006138f48585612bdb565b61390d61390586611ace868b612959565b8590856132be565b6127829190613a3f565b60405180610120016040528061392b613969565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156139e057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a0c57600080fd5b850160608188031215613a1e57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106e6576106e6613a29565b600060208284031215613a6457600080fd5b81356001600160a01b038116811461146f57600080fd5b80151581146105f657600080fd5b600060208284031215613a9b57600080fd5b813561146f81613a7b565b6000808335601e19843603018112613abd57600080fd5b83018035915067ffffffffffffffff821115613ad857600080fd5b6020019150368190038213156106c757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613b4a60c083018486613aed565b9998505050505050505050565b818103818111156106e6576106e6613a29565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613ba460e083018486613aed565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612aeb57612aeb613a29565b6001600160801b03818116838216019080821115612aeb57612aeb613a29565b8181036000831280158383131683831282161715612aeb57612aeb613a29565b80820281158282048414176106e6576106e6613a29565b6001600160801b03828116828216039080821115612aeb57612aeb613a29565b8082018281126000831280158216821582161715613c6957613c69613a29565b505092915050565b600060208284031215613c8357600080fd5b5051919050565b600060208284031215613c9c57600080fd5b815161146f81613a7b565b634e487b7160e01b600052601260045260246000fd5b600082613ccc57613ccc613ca7565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e6576106e6613a29565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613d90828551613cfe565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e0557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e2b57613e2b613a29565b5060000390565b61018081016106e68284613cfe565b60008060408385031215613e5457600080fd5b825191506020830151613e6681613a7b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613e9657613e96613ca7565b600160ff1b821460001984141615613eb057613eb0613a29565b500590565b60008060008060808587031215613ecb57600080fd5b8451935060208501519250604085015191506060850151613a1e81613a7b56fea2646970667358221220977e76ddc60d949579ba4827d645dc6e030e1bf9a3f8ba6c8eb1e5135454e0d764736f6c634300081400336102606040523480156200001257600080fd5b50604051620043f5380380620043f5833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613ed26200052360003960005050600050506000818161030301528181610332015261035f01526000818160de015281816105a901526116e401526000818161085601528181610941015281816109d401528181610add015281816115b5015281816116be015281816123ed0152818161245001528181612d2f015281816131f2015261322e01526000818161013f015281816108c601528181610ef201528181611479015281816114dd015281816115240152818161169801528181611b9b0152611c2e01526000611ff201526000818161214d01526134870152600081816110b601526121210152600061343d0152600081816101810152818161091901528181610f1301528181611449015281816114ad01528181611545015261170a01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fee0152612cc501526000818161029701528181610db101528181610e2c01528181610ea201528181610f6e0152610fa601526000505060008181610be501528181611999015281816119e201528181611a7401528181611af501528181611c9c01528181611d1d01528181612f2a01528181612f7301528181613025015261306e0152613ed26000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c36600461394b565b610066565b60405190815260200160405180910390f35b6100416100613660046139af565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c4f565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cae565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610cd4565b9150915060006101ed610da9565b90506101fd818360046001610dd5565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a15565b6113cc565b611416565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613a28565b81526020810191909152604001600020546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611623565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a15565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613a28565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613a28565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c908390613a15565b9050600080600061043c8a61164f565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613ab9565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613ac8565b91506104ca6104c58c611789565b6117b7565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613ab9565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613ac8565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613a28565b91906117dd565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117fb565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613ae1565b8e611810565b61063a896118b8565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a15565b9b5090508a158061073757506107348c60006118c5565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b6117dd565b610770565b60005b905061077f6020850185613ae1565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613b18565b866107ca60408c018c613b35565b6040516107dd9796959493929190613b7c565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c4f565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610cd4565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613bd0565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613be7565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd84846118da565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611416565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a6685611900565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f8461192a565b600480546001600160801b0319166001600160801b0392909216919091179055610ab883611900565b600280546001600160801b03928316600160801b029216919091179055610b016000807f0000000000000000000000000000000000000000000000000000000000000000611810565b610b196000610b1360208c018c613ae1565b8a611810565b610b2e610b24610da9565b8760046001610dd5565b508a8a8a610b3f6020820182613ae1565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613b18565b87610b8a6040890189613b35565b604051610b9d9796959493929190613b7c565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c2f57503415155b15610c4d57604051631574f9f360e01b815260040160405180910390fd5b565b6000610c5e6020830183613ae1565b6001600160a01b031603610c855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610ca9916001600160801b0390911690600f0b6118da565b905090565b600080610cbd87878786611966565b9050610cc98185611623565b979650505050505050565b81600080610ce86040850160208601613b18565b15610d0d57610d0385610cfe6040870187613b35565b61197d565b9093509050610d25565b5034610d2585610d206040870187613b35565b611c11565b610d2d611dbb565b91508015610da057604051600090339083908381818185875af1925050503d8060008114610d77576040519150601f19603f3d011682016040523d82523d6000602084013e610d7c565b606091505b5050905080610d9e576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610ca9427f0000000000000000000000000000000000000000000000000000000000000000611dce565b600084815260086020526040812060018101546001600160801b0316151580610dfd57504286115b15610e1657600101546001600160801b031690506113c4565b6000806000610e23610da9565b90506000610e517f00000000000000000000000000000000000000000000000000000000000000008b613a15565b90505b81811015610ec7576000818152600860205260409020600101546001600160801b03168015610e9f576000828152600860205260409020549094506001600160801b03169250610ec7565b507f000000000000000000000000000000000000000000000000000000000000000001610e54565b83600003610f3a57889350610f37610edd610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611966565b92505b50610f4483611900565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f9a610f937f00000000000000000000000000000000000000000000000000000000000000008b613a28565b8a84611de4565b610fd889610fd2610fcb7f000000000000000000000000000000000000000000000000000000000000000083613a15565b4290611f22565b84611de4565b610fe188611f31565b50600090506008816110137f00000000000000000000000000000000000000000000000000000000000000008d613a28565b815260208101919091526040016000908120600101546001600160801b0316915061103f60028c6120d5565b6000818152601060205260408120549192508c8c8315611185576001925060008061106e86898d86600061210a565b9150915080600d60008282546110849190613a15565b909155506110a090508660008461109a81611789565b886121d9565b6110aa8183613a15565b91506110da86838a8e877f0000000000000000000000000000000000000000000000000000000000000000612353565b91506110ee6110e98385612397565b6123ac565b6006805460029061110f9084906201000090046001600160701b0316613c15565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061113c82611900565b6006805460109061115e908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111926001846120d5565b60008181526010602052604090205490915080156112a157600194506000806111bf838b8f88600161210a565b9150915080600d60008282546111d59190613a15565b909155506111f19050836000846111eb81611789565b8a6123d6565b6111fb8183613a28565b915061120a6110e98387612397565b6006805460029061122b9084906201000090046001600160701b0316613c15565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061125882611900565b6006805460109061127a908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112db576112cd6112b387611789565b6112bc83611789565b6112c69190613c55565b60006125c7565b8e6112d88482612606565b50505b60006112e684612800565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b0316156113b4578e6113b05a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061294c565b5050505b50999b5050505050505050505050505b949350505050565b60006113f4601060006113e06002866120d5565b815260200190815260200160002054611789565b611406601060006113e06001876120d5565b6114109190613c55565b92915050565b6000806000806114268a8a6129d9565b915091508061143d57600080935093505050611618565b600061149d838a6114767f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a28565b8b7f0000000000000000000000000000000000000000000000000000000000000000612a15565b5090506000611501848b846114da7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a28565b8d7f0000000000000000000000000000000000000000000000000000000000000000612ad2565b50905081158061150f575080155b1561151b575060009050805b6000611569858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611966565b905061157783838c84612b90565b5090935060009050611589848f613a15565b905060006115aa8b8b61159b87611789565b6115a5908e613c75565b612bdc565b90508b6115df6115da7f000000000000000000000000000000000000000000000000000000000000000083612c43565b611789565b6115e883611789565b6115f56115da8685612397565b6115ff9190613c55565b6116099190613c55565b60019950995050505050505050505b965096945050505050565b600061009161163784846301e13380612c54565b61164985670de0b6b3a7640000613a28565b906117fb565b611657613886565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161174f9116612c7a565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261178192900416612c7a565b905292915050565b60006001600160ff1b038211156117b35760405163396ea70160e11b815260040160405180910390fd5b5090565b6117c081612ce9565b610c8557604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117f457600080fd5b5091020490565b600061009183670de0b6b3a7640000846117dd565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611842908490613a15565b909155505060008381526010602052604081208054839290611865908490613a15565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611410826004612606565b60008183136118d45782610091565b50919050565b6000806118e784846129d9565b9092509050806118f9576118f9612e81565b5092915050565b60006001600160801b038211156117b357604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611948575060016001607f1b0382135b156117b35760405163a5353be560e01b815260040160405180910390fd5b6000610078826119778588886117dd565b90612e9a565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119cd575047611a58565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a559190613ac8565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ad35787341015611ac2576040516312171d8360e31b815260040160405180910390fd5b611acc8834613a28565b9050611b6d565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6a9190613c9d565b91505b81611b8b576040516312171d8360e31b815260040160405180910390fd5b601454600003611bd057611bbf887f00000000000000000000000000000000000000000000000000000000000000006117fb565b601481905594509250611c09915050565b601454600090611be2908a90866117dd565b90508060146000828254611bf69190613a15565b90915550909550909350611c0992505050565b935093915050565b6000611c1c84612f0f565b9050601454600003611c5a57611c52817f00000000000000000000000000000000000000000000000000000000000000006117fb565b601455611c80565b6000611c658261300a565b90508060146000828254611c799190613a15565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611cfb5782341015611cea576040516312171d8360e31b815260040160405180910390fd5b611cf48334613a28565b9050611d95565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d929190613c9d565b91505b81611db3576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610ca9670de0b6b3a7640000612f0f565b6000611dda8284613cd0565b6100919084613a28565b600083815260086020526040902054600160801b90046001600160801b0316808303611e105750505050565b6000848152600860205260408120546001600160801b031690819003611e6a57611e3983611900565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611ee8565b611ebb611eb6670de0b6b3a7640000611e838886613a28565b611e8d9190613bd0565b85670de0b6b3a7640000611ea1878a613a28565b611eab9190613bd0565b8592919060016130f3565b611900565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611ef184611900565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118d45782610091565b6006546000908190611f54908490600160801b90046001600160801b0316612397565b6006546201000090046001600160701b031692509050818111156120d0576000611f7e8383613a28565b9050611f8d611eb68286613191565b60068054601090611faf908490600160801b90046001600160801b0316613ce4565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611fe885836117fb90919063ffffffff16565b90506000612016827f0000000000000000000000000000000000000000000000000000000000000000612397565b905080600d600082825461202a9190613a15565b9091555061203a90508183613a28565b915061204582611900565b600280546000906120609084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061208d826131a6565b600480546000906120a2908490600f0b613d04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156120ff5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061211787856117fb565b91506000612145837f0000000000000000000000000000000000000000000000000000000000000000612397565b9050612171817f0000000000000000000000000000000000000000000000000000000000000000612397565b91508315612194576121838282613a28565b61218d9084613a28565b92506121ab565b61219e8282613a28565b6121a89084613a15565b92505b868610156121ce576121be8387896117dd565b92506121cb8287896117dd565b91505b509550959350505050565b600454600160801b90046001600160801b0316612222611eb682612205670de0b6b3a764000086613bd0565b600554600160801b90046001600160801b031691908a60006130f3565b600580546001600160801b03928316600160801b02921691909117905561224886611900565b6122529082613ce4565b600480546001600160801b03928316600160801b02921691909117905561227884611900565b600280546000906122939084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122c08361192a565b600480546000906122d5908490600f0b613d04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061230585611900565b60028054601090612327908490600160801b90046001600160801b0316613ce4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612365846116498a888a6117dd565b90506123728884866117dd565b61237c9082613a15565b90508681111561238c5786810391505b509695505050505050565b60006100918383670de0b6b3a76400006117dd565b60006001600160701b038211156117b35760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061241857507f00000000000000000000000000000000000000000000000000000000000000006124168583613a28565b105b1561242557612425612e81565b6004549084900390600f0b61243a8482613c55565b90508361244686611789565b13801561247b57507f000000000000000000000000000000000000000000000000000000000000000061247983836118da565b105b1561248857612488612e81565b600354600160801b90046001600160801b03166124ca611eb6826124b4670de0b6b3a764000088613bd0565b6005546001600160801b031691908c60006130f3565b600580546001600160801b0319166001600160801b03929092169190911790556124f48882613a28565b90506124ff81611900565b600380546001600160801b03928316600160801b02921691909117905561252583611900565b600280546001600160801b0319166001600160801b039290921691909117905561254e8261192a565b600480546001600160801b0319166001600160801b039290921691909117905561257787611900565b60028054601090612599908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546125e290611eb6906001600160801b03168484612bdc565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612651916001600160801b031690613a28565b905080600003612665576001915050611410565b6000612670856131d0565b90508060000361268557600192505050611410565b60008061269383858961326c565b91509150806126a9576000945050505050611410565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016126e5929190613d31565b6040805180830381865af4158015612701573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127259190613da7565b9150915061274361273582611789565b61273e90613dcb565b612ce9565b9250826127595760009650505050505050611410565b61276282611900565b6007805460009061277d9084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506127aa81611900565b600780546010906127cc908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6128298761164f565b6040518263ffffffff1660e01b81526004016128459190613ab9565b6040805180830381865af4158015612861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128859190613de7565b915091508061289b575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161290191613a15565b61290b9190613a28565b90508060000361292357506000958695509350505050565b600080871161293357600061293e565b61293e8488846117dd565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561297257612972613e17565b6040519080825280601f01601f19166020018201604052801561299c576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156129bd578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836129e886611789565b6129f29190613c55565b90506000811215612a0a576000809250925050610da2565b946001945092505050565b6000806000612a2788888888886133db565b90506000612a52670de0b6b3a7640000612a418888613191565b612a4b9190613a15565b83906117fb565b9050670de0b6b3a76400008110612a8657612a7f612a78670de0b6b3a7640000896117fb565b8290612e9a565b9050612a9e565b612a9b612a78670de0b6b3a764000089613191565b90505b612aa881866117fb565b905088811015612ac0576000809350935050506129cf565b97909703976001975095505050505050565b6000806000612ae4898988888861340a565b9050612afe86611977612af78a8d613a15565b8790612397565b9850612b0b858a866117dd565b985088811015612b22576000809250925050611618565b888103670de0b6b3a76400008110612b5057612b49612a78670de0b6b3a764000089613191565b9050612b68565b612b65612a78670de0b6b3a7640000896117fb565b90505b80891015612b7e57600080935093505050611618565b90970398600198509650505050505050565b6000806000806000612ba389878961342f565b9092509050612bb28289613a28565b97506000612bc182888a6117dd565b9050612bcd818b613a28565b9a989950979650505050505050565b600080612bea8460006134b5565b612bf58460006134b5565b612bff9190613c55565b90506000811315612c1b57612c148186613a15565b9450612c3a565b6000811215612c3a57612c2d81613dcb565b612c379086613a28565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612c6b57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612c8e610da9565b612c989190613bd0565b9050808311612ca8576000612cb2565b612cb28184613a28565b9150610091612a4b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bd0565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612da2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dc69190613e2d565b935093509350935080612de25750600098975050505050505050565b868414612e1357612df284611900565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612e4457612e238361192a565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e7257612e5482611900565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612eb35750670de0b6b3a7640000611410565b82600003612ec357506000611410565b6000612ece83611789565b90506000612ee3612ede86611789565b6134cb565b9050818102612efa670de0b6b3a764000082613e6e565b9050612f05816136f1565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f5e575047612fe9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fe69190613ac8565b90505b601454600003612ffa576000610091565b60145461009190849083906117dd565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130595750476130e4565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156130bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130e19190613ac8565b90505b601454610091908490836117dd565b600082600003613104575084610078565b8115613157576131356131178487613a15565b6131218587612397565b61312b888a612397565b6116499190613a15565b905060006131438588611f22565b905080821015613151578091505b50610078565b82850361316657506000610078565b6100756131738487613a28565b61317d8587612c43565b613187888a612397565b6116499190613a28565b600061009183670de0b6b3a764000084612c54565b600060016001607f1b038211156117b35760405163a5353be560e01b815260040160405180910390fd5b60035460009081906131eb906001600160801b031684613191565b90506132177f000000000000000000000000000000000000000000000000000000000000000082613a15565b6002546001600160801b031611156118d4576002547f0000000000000000000000000000000000000000000000000000000000000000906132629083906001600160801b0316613a28565b6100919190613a28565b6132746138e7565b6000806132808461164f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016132bb9190613ab9565b6040805180830381865af41580156132d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132fb9190613de7565b9350905082613310575060009150611c099050565b60006133326115da84610160015185610140015161239790919063ffffffff16565b6133526115da856101200151866101000151612c4390919063ffffffff16565b61335c9190613c55565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006133e78585612e9a565b6134006133f886611977868b612397565b8590856117dd565b6100759190613a15565b60006134168585612e9a565b61340061342786611977868b612c43565b859085612c54565b60008061347f8561347985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061346f818c613191565b6134799190613a28565b90612c43565b91506134ab827f0000000000000000000000000000000000000000000000000000000000000000612397565b9050935093915050565b60008183136134c45781610091565b5090919050565b60008082136134ed5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135709084901c611789565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361370c57506000919050565b680755bf798b4a1bf1e58212613735576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f0574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611789565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806138fb613886565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156118d457600080fd5b600080600080600060a0868803121561396357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561399657600080fd5b6139a288828901613939565b9150509295509295909350565b6000806000606084860312156139c457600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156139e957600080fd5b6139f586828701613939565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b80820180821115611410576114106139ff565b81810381811115611410576114106139ff565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016114108284613a3b565b600060208284031215613ada57600080fd5b5051919050565b600060208284031215613af357600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c8557600080fd5b600060208284031215613b2a57600080fd5b813561009181613b0a565b6000808335601e19843603018112613b4c57600080fd5b83018035915067ffffffffffffffff821115613b6757600080fd5b602001915036819003821315610da257600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b8082028115828204841417611410576114106139ff565b600080600060608486031215613bfc57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118f9576118f96139ff565b6001600160801b038181168382160190808211156118f9576118f96139ff565b81810360008312801583831316838312821617156118f9576118f96139ff565b8082018281126000831280158216821582161715613c9557613c956139ff565b505092915050565b600060208284031215613caf57600080fd5b815161009181613b0a565b634e487b7160e01b600052601260045260246000fd5b600082613cdf57613cdf613cba565b500690565b6001600160801b038281168282160390808211156118f9576118f96139ff565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611410576114106139ff565b60006102a082019050613d45828551613a3b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613dba57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613de057613de06139ff565b5060000390565b60008060408385031215613dfa57600080fd5b825191506020830151613e0c81613b0a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613e4357600080fd5b8451935060208501519250604085015191506060850151613e6381613b0a565b939692955090935050565b600082613e7d57613e7d613cba565b600160ff1b821460001984141615613e9757613e976139ff565b50059056fea264697066735822122015e5e89941b952217b73ee1a60715456c13e19a6ab0d17f59f79b0d2d3e11a9464736f6c634300081400336102606040523480156200001257600080fd5b50604051620035d3380380620035d3833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613180620004536000396000505060005050600050506000818161026d0152611fcd0152600081816118130152818161187601528181611bb201528181611bee01528181611de60152611fa701526000818161056f0152611f81015260006113e8015260006115430152600081816107330152611517015260005050600081816105900152611ff301526000818161066b01526127450152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb015261062301526000505060008181611068015281816110b1015281816122d60152818161231f015281816123fa015281816124a601528181612592015261263e01526131806000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612c33565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612c8a565b6100b5565b005b610059610095366004612c33565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612cac565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612ce3565b61017160408c018c612d00565b60405161018396959493929190612d70565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612dc0565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612cac565b88610e61565b60006103066102fd6020870187612cac565b88848989610a49565b90945090506103158188612dea565b9250600061032283610f01565b5090506103326020870187612cac565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612ce3565b8a888e80604001906103829190612d00565b604051610396989796959493929190612dfd565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612cac565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f000000000000000000000000000000000000000000000000000000000000000061114f565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612e45565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a611165565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611186565b92505b506105c1836111a6565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612dea565b8a846111d4565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612e45565b4290611312565b846111d4565b61065e88611327565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612dea565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6114cb565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611500565b9150915080600d60008282546107019190612e45565b9091555061071d905086600084610717816115cf565b886115f9565b6107278183612e45565b915061075786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611773565b915061076b61076683856117bd565b6117d2565b6006805460029061078c9084906201000090046001600160701b0316612e58565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826111a6565b600680546010906107db908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846114cb565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611500565b9150915080600d60008282546108529190612e45565b9091555061086e905083600084610868816115cf565b8a6117fc565b6108788183612dea565b915061088761076683876117bd565b600680546002906108a89084906201000090046001600160701b0316612e58565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826111a6565b600680546010906108f7908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876115cf565b610939836115cf565b6109439190612e98565b60006119ed565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190611a2c565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611ab7565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611ac4565b9050610acf836111a6565b610ad99083612eb8565b600780546001600160801b0319166001600160801b0392909216919091179055610b02816111a6565b60078054601090610b24908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611ae2565b9350610b5f8684611b7b565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612dea565b905080600003610beb576001915050610d81565b6000610bf685611b90565b905080600003610c0b57600192505050610d81565b600080610c19838589611c2c565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612f56565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612fcc565b91509150610cc9610cbb826115cf565b610cc490612ff0565b611da0565b925082610cdf5760009650505050505050610d81565b610ce8826111a6565b60078054600090610d039084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d30816111a6565b60078054601090610d52908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612dea565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612e45565b909155505060008381526010602052604081208054839290610eb6908490612e45565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611f38565b6040518263ffffffff1660e01b8152600401610f46919061300c565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f86919061301b565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612e45565b61100c9190612dea565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611ac4565b976001975095505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161109c575047611127565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611100573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611124919061304b565b90505b601454600003611138576000611148565b6014546111489084908390611ac4565b9392505050565b600061115b8284612dc0565b6111489084612dea565b600254600454600091610421916001600160801b0390911690600f0b612072565b600061119d82611197858888611ac4565b90612098565b95945050505050565b60006001600160801b038211156111d057604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112005750505050565b6000848152600860205260408120546001600160801b03169081900361125a57611229836111a6565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112d8565b6112ab6112a6670de0b6b3a76400006112738886612dea565b61127d9190613064565b85670de0b6b3a7640000611291878a612dea565b61129b9190613064565b85929190600161210d565b6111a6565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112e1846111a6565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113215782611148565b50919050565b600654600090819061134a908490600160801b90046001600160801b03166117bd565b6006546201000090046001600160701b031692509050818111156114c65760006113748383612dea565b90506113836112a682866121ab565b600680546010906113a5908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113de85836121c090919063ffffffff16565b9050600061140c827f00000000000000000000000000000000000000000000000000000000000000006117bd565b905080600d60008282546114209190612e45565b9091555061143090508183612dea565b915061143b826111a6565b600280546000906114569084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611483826121d5565b60048054600090611498908490600f0b61307b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114f55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061150d87856121c0565b9150600061153b837f00000000000000000000000000000000000000000000000000000000000000006117bd565b9050611567817f00000000000000000000000000000000000000000000000000000000000000006117bd565b9150831561158a576115798282612dea565b6115839084612dea565b92506115a1565b6115948282612dea565b61159e9084612e45565b92505b868610156115c4576115b4838789611ac4565b92506115c1828789611ac4565b91505b509550959350505050565b60006001600160ff1b038211156111d05760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116426112a682611625670de0b6b3a764000086613064565b600554600160801b90046001600160801b031691908a600061210d565b600580546001600160801b03928316600160801b029216919091179055611668866111a6565b6116729082612eb8565b600480546001600160801b03928316600160801b029216919091179055611698846111a6565b600280546000906116b39084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e0836121ff565b600480546000906116f5908490600f0b61307b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611725856111a6565b60028054601090611747908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061178b846117858a888a611ac4565b906121c0565b9050611798888486611ac4565b6117a29082612e45565b9050868111156117b25786810391505b509695505050505050565b60006111488383670de0b6b3a7640000611ac4565b60006001600160701b038211156111d05760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061183e57507f000000000000000000000000000000000000000000000000000000000000000061183c8583612dea565b105b1561184b5761184b61223b565b6004549084900390600f0b6118608482612e98565b90508361186c866115cf565b1380156118a157507f000000000000000000000000000000000000000000000000000000000000000061189f8383612072565b105b156118ae576118ae61223b565b600354600160801b90046001600160801b03166118f06112a6826118da670de0b6b3a764000088613064565b6005546001600160801b031691908c600061210d565b600580546001600160801b0319166001600160801b039290921691909117905561191a8882612dea565b9050611925816111a6565b600380546001600160801b03928316600160801b02921691909117905561194b836111a6565b600280546001600160801b0319166001600160801b0392909216919091179055611974826121ff565b600480546001600160801b0319166001600160801b039290921691909117905561199d876111a6565b600280546010906119bf908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a08906112a6906001600160801b03168484612254565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a5257611a526130a8565b6040519080825280601f01601f191660200182016040528015611a7c576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a9d578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611adb57600080fd5b5091020490565b600080611aef85856117bd565b9050611afa816122bb565b945084600003611b0e576000915050611148565b849150611b216040840160208501612ce3565b15611b5057611b4985611b376020860186612cac565b611b446040870187612d00565b6123a4565b9150611b73565b611b7385611b616020860186612cac565b611b6e6040870187612d00565b61253e565b509392505050565b60006111488383670de0b6b3a76400006126d4565b6003546000908190611bab906001600160801b0316846121ab565b9050611bd77f000000000000000000000000000000000000000000000000000000000000000082612e45565b6002546001600160801b03161115611321576002547f000000000000000000000000000000000000000000000000000000000000000090611c229083906001600160801b0316612dea565b6111489190612dea565b611c34612b80565b600080611c4084611f38565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c7b919061300c565b6040805180830381865af4158015611c97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cbb919061301b565b9350905082611cd05750600091506100ad9050565b6000611cf7611cf28461016001518561014001516117bd90919063ffffffff16565b6115cf565b611d17611cf2856101200151866101000151611b7b90919063ffffffff16565b611d219190612e98565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7d91906130be565b935093509350935080611e995750600098975050505050505050565b868414611eca57611ea9846111a6565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611efb57611eda836121ff565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2957611f0b826111a6565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f40612bd2565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161203891166126fa565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261206a929004166126fa565b905292915050565b60008061207f8484612770565b9092509050806120915761209161223b565b5092915050565b6000816000036120b15750670de0b6b3a7640000610d81565b826000036120c157506000610d81565b60006120cc836115cf565b905060006120e16120dc866115cf565b6127af565b90508181026120f8670de0b6b3a7640000826130ff565b9050612103816129d5565b9695505050505050565b60008260000361211e57508461119d565b81156121715761214f6121318487612e45565b61213b85876117bd565b612145888a6117bd565b6117859190612e45565b9050600061215d8588611312565b90508082101561216b578091505b5061119d565b8285036121805750600061119d565b61210361218d8487612dea565b6121978587611b7b565b6121a1888a6117bd565b6117859190612dea565b600061114883670de0b6b3a7640000846126d4565b600061114883670de0b6b3a764000084611ac4565b600060016001607f1b038211156111d05760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061221d575060016001607f1b0382135b156111d05760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b600080612262846000612b6a565b61226d846000612b6a565b6122779190612e98565b905060008113156122935761228c8186612e45565b94506122b2565b60008112156122b2576122a581612ff0565b6122af9086612dea565b94505b50929392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161230a575047612395565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561236e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612392919061304b565b90505b60145461114890849083611ac4565b600060145485116123b557846123b9565b6014545b945060006123c68661104d565b905085601460008282546123da9190612dea565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612480576040516001600160a01b038716908390600081818185875af1925050503d8060008114612470576040519150601f19603f3d011682016040523d82523d6000602084013e612475565b606091505b505080915050612516565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156124ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612513919061312d565b90505b80612534576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601454841161254d5783612551565b6014545b9350600061255e8561104d565b905084601460008282546125729190612dea565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612618576040516001600160a01b038616908390600081818185875af1925050503d8060008114612608576040519150601f19603f3d011682016040523d82523d6000602084013e61260d565b606091505b5050809150506126ae565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ab919061312d565b90505b806126cc576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026126eb57600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061270e610426565b6127189190613064565b9050808311612728576000612732565b6127328184612dea565b9150611148612769670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613064565b83906121c0565b60008060008361277f866115cf565b6127899190612e98565b905060008112156127a15760008092509250506127a8565b9150600190505b9250929050565b60008082136127d15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906128549084901c6115cf565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136129f057506000919050565b680755bf798b4a1bf1e58212612a19576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061210374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115cf565b6000818313612b795781611148565b5090919050565b604051806101200160405280612b94612bd2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612c4857600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612c6d57600080fd5b840160608187031215612c7f57600080fd5b809150509250925092565b60008060408385031215612c9d57600080fd5b50508035926020909101359150565b600060208284031215612cbe57600080fd5b81356001600160a01b038116811461114857600080fd5b801515811461040b57600080fd5b600060208284031215612cf557600080fd5b813561114881612cd5565b6000808335601e19843603018112612d1757600080fd5b83018035915067ffffffffffffffff821115612d3257600080fd5b6020019150368190038213156127a857600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612d9e60a083018486612d47565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612dcf57612dcf612daa565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612dd4565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612e3760e083018486612d47565b9a9950505050505050505050565b80820180821115610d8157610d81612dd4565b6001600160701b0381811683821601908082111561209157612091612dd4565b6001600160801b0381811683821601908082111561209157612091612dd4565b818103600083128015838313168383128216171561209157612091612dd4565b6001600160801b0382811682821603908082111561209157612091612dd4565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612f6a828551612ed8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612fdf57600080fd5b505080516020909101519092909150565b6000600160ff1b820161300557613005612dd4565b5060000390565b6101808101610d818284612ed8565b6000806040838503121561302e57600080fd5b82519150602083015161304081612cd5565b809150509250929050565b60006020828403121561305d57600080fd5b5051919050565b8082028115828204841417610d8157610d81612dd4565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612dd4565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156130d457600080fd5b84519350602085015192506040850151915060608501516130f481612cd5565b939692955090935050565b60008261310e5761310e612daa565b600160ff1b82146000198414161561312857613128612dd4565b500590565b60006020828403121561313f57600080fd5b815161114881612cd556fea2646970667358221220eb0bfd0561c003200e372dd890081318307aeb2b9fd5324d851e2a3c23721a4664736f6c63430008140033',
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
        "target4()": "f3f70707",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "updateLiquidity(int256)": "8120a3e2"
    }
};
