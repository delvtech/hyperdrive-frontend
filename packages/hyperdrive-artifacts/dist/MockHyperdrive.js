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
                },
                {
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
    bytecode: '0x6103206040523480156200001257600080fd5b5060405162017abd38038062017abd83398101604081905262000035916200037f565b6040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b815250828284846040516200006e9062000271565b6200007b929190620004bc565b604051809103906000f08015801562000098573d6000803e3d6000fd5b508585604051620000a9906200027f565b620000b6929190620004bc565b604051809103906000f080158015620000d3573d6000803e3d6000fd5b508686604051620000e4906200028d565b620000f1929190620004bc565b604051809103906000f0801580156200010e573d6000803e3d6000fd5b5087876040516200011f906200029b565b6200012c929190620004bc565b604051809103906000f08015801562000149573d6000803e3d6000fd5b5088886040516200015a90620002a9565b62000167929190620004bc565b604051809103906000f08015801562000184573d6000803e3d6000fd5b506001600081905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a0151821661024052890151610260528716610220526200023c898262000681565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e0521661030052506200074d9350505050565b614228806200369383390190565b61425c80620078bb83390190565b6144c2806200bb1783390190565b614483806200ffd983390190565b613661806201445c83390190565b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b0381118282101715620002f357620002f3620002b7565b60405290565b80516001600160a01b03811681146200031157600080fd5b919050565b6000608082840312156200032957600080fd5b604051608081016001600160401b03811182821017156200034e576200034e620002b7565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000808284036102808112156200039557600080fd5b61026080821215620003a657600080fd5b620003b0620002cd565b9150620003bd85620002f9565b8252620003cd60208601620002f9565b6020830152620003e060408601620002f9565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200044b818701620002f9565b908301526101806200045f868201620002f9565b908301526101a062000473868201620002f9565b908301526101c062000487868201620002f9565b908301526101e06200049c8787830162000316565b8184015250819350620004b1818601620002f9565b925050509250929050565b82516001600160a01b0316815261028081016020840151620004e960208401826001600160a01b03169052565b5060408401516200050560408401826001600160a01b03169052565b50606084015160608301526080840151608083015260a084015160a083015260c084015160c083015260e084015160e08301526101008085015181840152506101208085015181840152506101408085015181840152506101608085015162000578828501826001600160a01b03169052565b5050610180848101516001600160a01b03908116918401919091526101a0808601518216908401526101c0808601518216908401526101e09485015180519584019590955260208501516102008401526040850151610220840152606090940151610240830152919092166102609092019190915290565b600181811c908216806200060557607f821691505b6020821081036200062657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200067c576000816000526020600020601f850160051c81016020861015620006575750805b601f850160051c820191505b81811015620006785782815560010162000663565b5050505b505050565b81516001600160401b038111156200069d576200069d620002b7565b620006b581620006ae8454620005f0565b846200062c565b602080601f831160018114620006ed5760008415620006d45750858301515b600019600386901b1c1916600185901b17855562000678565b600085815260208120601f198616915b828110156200071e57888601518255948401946001909101908401620006fd565b50858210156200073d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051612d9b620008f86000396000818161093001528181610a790152610b960152600081816108a801528181610bc60152610df00152600081816107af0152610ff20152600081816108fc0152610b330152600081816102940152818161045601528181610a4901528181610aab01528181610add01528181610b6701528181610da901528181610e3801528181610f9f0152611025015260005050600050506000505060005050600050506000818161191c015281816119580152611c67015260008181611698015281816116da01526117cc0152600050506000818161115e015281816111d7015261151e0152600081816111ab015261174d015260008181611124015281816114da015261172c015260008181611676015281816116fb01526117ed0152600081816114a101526119e10152600061162301526000505060008181610c2501528181610cbf0152610d330152612d9b6000f3fe60806040526004361061027d5760003560e01c8063907c0f921161014f578063ca6d38f7116100c1578063ded062311161007a578063ded06231146104d0578063e44808bc146108ca578063eac3e799146108ea578063f3f707071461091e578063f45cf2e014610952578063f698da2514610a2f5761027d565b8063ca6d38f71461084e578063cba2e58d1461086e578063cbc13434146103ca578063d5002f2e14610881578063d899e11214610896578063dbbe80701461086e5761027d565b8063a22cb46511610113578063a22cb46514610634578063a6e8a8591461079d578063a77384c1146107d1578063ab033ea91461038d578063b1b4b170146107f1578063b4f8da39146108115761027d565b8063907c0f92146106e757806394a97cdb146106fc5780639bd334981461073d5780639cd241af1461075d5780639eea5f661461077d5761027d565b80634c2ac1d9116101f35780637180c8ca116101ac5780637180c8ca1461063457806371f88b7c1461065457806377d05ff4146106745780638120a3e214610687578063836a1040146106a75780639032c726146106c75761027d565b80634c2ac1d9146105725780634ed2d6ac1461058557806358af4a0a146105a057806368096239146105c057806368c2ecb8146105e0578063702db0eb146106005761027d565b806321b57d531161024557806321b57d531461044457806322d5506b1461049057806329b23fc1146104d057806330adf81f146104fe5780633e691db914610532578063414f826d146105525761027d565b806301681a621461038d57806302329a29146103af578063074a6de9146103ca57806317fad7fc146104045780631c0f12b614610424575b34801561028957600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102cc929190612435565b600060405180830381855af49150503d8060008114610307576040519150601f19603f3d011682016040523d82523d6000602084013e61030c565b606091505b5091509150811561033057604051638bb0a34b60e01b815260040160405180910390fd5b600061033b82612445565b90506001600160e01b03198116636e64089360e11b1461035d57815160208301fd5b81516003198101600484019081529261037e918101602001906024016124e0565b80519650602001945050505050f35b34801561039957600080fd5b506103ad6103a8366004612597565b610a44565b005b3480156103bb57600080fd5b506103ad6103a83660046125d2565b3480156103d657600080fd5b506103ea6103e5366004612601565b610a71565b604080519283526020830191909152015b60405180910390f35b34801561041057600080fd5b506103ad61041f366004612696565b610aa6565b34801561043057600080fd5b506103ad61043f36600461272b565b610ad8565b34801561045057600080fd5b506104787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103fb565b34801561049c57600080fd5b506104b06104ab366004612773565b610b08565b6040805194855260208501939093529183015260608201526080016103fb565b3480156104dc57600080fd5b506104f06104eb3660046127a5565b610b2c565b6040519081526020016103fb565b34801561050a57600080fd5b506104f07f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561053e57600080fd5b506104f061054d3660046127ff565b610b60565b34801561055e57600080fd5b506103ad61056d366004612834565b610b91565b6104f0610580366004612856565b610bbf565b34801561059157600080fd5b506103ad61043f3660046128ba565b3480156105ac57600080fd5b506103ad6105bb366004612904565b610bf4565b3480156105cc57600080fd5b506103ad6105db366004612834565b610c01565b3480156105ec57600080fd5b506104f06105fb366004612963565b610d93565b34801561060c57600080fd5b506103ad61061b366004612993565b6001600160801b03908116600160801b02911617600255565b34801561064057600080fd5b506103ad61064f3660046129c6565b610da4565b34801561066057600080fd5b506103ea61066f3660046129ff565b610dcd565b6104f0610682366004612601565b610de9565b34801561069357600080fd5b506103ad6106a2366004612963565b610e1c565b3480156106b357600080fd5b506103ad6106c2366004612a2b565b610e28565b3480156106d357600080fd5b506103ad6106e2366004612a63565b610e33565b3480156106f357600080fd5b506104f0610f6b565b34801561070857600080fd5b506103ad610717366004612a2b565b6000928352600a602090815260408085206001600160a01b039094168552929052912055565b34801561074957600080fd5b506104b0610758366004612834565b610f7a565b34801561076957600080fd5b506103ad610778366004612a2b565b610f9a565b34801561078957600080fd5b506103ad610798366004612a2b565b610fc9565b3480156107a957600080fd5b506104787f000000000000000000000000000000000000000000000000000000000000000081565b3480156107dd57600080fd5b506103ad6107ec366004612963565b600f55565b3480156107fd57600080fd5b506104f061080c366004612963565b610fd4565b34801561081d57600080fd5b506103ad61082c366004612ae3565b600380546001600160801b0319166001600160801b0392909216919091179055565b34801561085a57600080fd5b506104f0610869366004612963565b610fdf565b6103ea61087c3660046127a5565b610fea565b34801561088d57600080fd5b50600f546104f0565b3480156108a257600080fd5b506104787f000000000000000000000000000000000000000000000000000000000000000081565b3480156108d657600080fd5b506103ad6108e5366004612904565b611020565b3480156108f657600080fd5b506104787f000000000000000000000000000000000000000000000000000000000000000081565b34801561092a57600080fd5b506104787f000000000000000000000000000000000000000000000000000000000000000081565b34801561095e57600080fd5b506103ad61096d366004612b27565b805160208201516001600160801b03918216600160801b91831682021760025560408301516060840151908316908316820217600355608083015160a084015190831690831682021760045560c083015160e084015190831690831682021760055561010080840151600680546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a3b57600080fd5b506104f0611051565b610a6d7f00000000000000000000000000000000000000000000000000000000000000006110df565b5050565b600080610a9d7f00000000000000000000000000000000000000000000000000000000000000006110df565b50935093915050565b610acf7f00000000000000000000000000000000000000000000000000000000000000006110df565b50505050505050565b610b017f00000000000000000000000000000000000000000000000000000000000000006110df565b5050505050565b600080600080610b1a888888886110ff565b929b919a509850909650945050505050565b6000610b577f00000000000000000000000000000000000000000000000000000000000000006110df565b50949350505050565b6000610b8b7f00000000000000000000000000000000000000000000000000000000000000006110df565b50919050565b610bba7f00000000000000000000000000000000000000000000000000000000000000006110df565b505050565b6000610bea7f00000000000000000000000000000000000000000000000000000000000000006110df565b5095945050505050565b610b018585858585611213565b6040516370a0823160e01b8152306004820152600090610c97906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c909190612c13565b83856113d4565b9150506000811315610d20576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610d0c57600080fd5b505af1158015610acf573d6000803e3d6000fd5b6000811215610bba576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d6284612c42565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610cf2565b6000610d9e82611474565b92915050565b610bba7f00000000000000000000000000000000000000000000000000000000000000006110df565b600080610ddb8585856114cc565b90925090505b935093915050565b6000610e147f00000000000000000000000000000000000000000000000000000000000000006110df565b509392505050565b610e258161154c565b50565b610bba838383611572565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e68611051565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610f119190612c5e565b600060405180830381855af49150503d8060008114610f4c576040519150601f19603f3d011682016040523d82523d6000602084013e610f51565b606091505b509150915081610f6357805160208201fd5b805160208201f35b6000610f7561161b565b905090565b600080600080610f8a8686611647565b9299919850965090945092505050565b610fc37f00000000000000000000000000000000000000000000000000000000000000006110df565b50505050565b610bba838383611829565b6000610d9e826118fa565b6000610d9e82611996565b6000806110167f00000000000000000000000000000000000000000000000000000000000000006110df565b5094509492505050565b6110497f00000000000000000000000000000000000000000000000000000000000000006110df565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610f11929190612435565b6000808080611156878661114f8b6111496111228c670de0b6b3a7640000612c7a565b7f000000000000000000000000000000000000000000000000000000000000000090611a0c565b90611a0c565b9190611a1d565b9350611182847f0000000000000000000000000000000000000000000000000000000000000000611a43565b915060006111a361119b89670de0b6b3a7640000612c7a565b8a9088611a1d565b90506111cf817f0000000000000000000000000000000000000000000000000000000000000000611a0c565b93506111fb847f0000000000000000000000000000000000000000000000000000000000000000611a43565b6112059084612c8d565b915050945094509450949050565b6001600160a01b038416158061123057506001600160a01b038316155b1561124e5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611312576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611312576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611310576000868152600d602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061130a908490612c7a565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611344908490612c7a565b90915550506000858152600a602090815260408083206001600160a01b03871684529091528120805484929061137b908490612c8d565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080806113e6846301e13380611a58565b9050600061140b82600088126113fc5787611405565b61140588612c42565b90611a43565b9050600086131561143e5761142961142282611a6d565b8890611a43565b93506114358785612c7a565b92505050610de1565b60008612156114665761145a61145382611a6d565b8890611a58565b93506114358785612ca0565b509495600095509350505050565b60008061147f61161b565b905080831161148f576000611499565b6114998184612c7a565b91506114c5827f0000000000000000000000000000000000000000000000000000000000000000611a58565b9392505050565b6000806115168561114985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061150c818c611c0c565b6111499190612c7a565b9150611542827f0000000000000000000000000000000000000000000000000000000000000000611a43565b9050935093915050565b61155581611c21565b610e2557604051635044b7f560e01b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906115a4908490612c8d565b90915550506000838152600b6020526040812080548392906115c7908490612c8d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000610f75427f0000000000000000000000000000000000000000000000000000000000000000611db9565b6000806000806000611657611dcf565b6002549091506116bc908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000611df0565b60025490945061171f908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e1c565b91506117768785611771857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e3c565b611eaf565b1561178357611783611ef1565b61178f87858885611f0a565b91965094509250670de0b6b3a76400006118116117ac8784612c8d565b6002546117ca908890600160801b90046001600160801b0316612c7a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e1c565b111561181f5761181f611ef1565b5092959194509250565b6000838152600a602090815260408083206001600160a01b038616845290915290205481111561186c57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b909152812080548392906118af908490612c7a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161160e565b6003546000908190611915906001600160801b031684611c0c565b90506119417f000000000000000000000000000000000000000000000000000000000000000082612c8d565b6002546001600160801b03161115610b8b576002547f00000000000000000000000000000000000000000000000000000000000000009061198c9083906001600160801b0316612c7a565b6114c59190612c7a565b600080670de0b6b3a76400006119aa61161b565b6119b49190612cc0565b90508083116119c45760006119ce565b6119ce8184612c7a565b91506114c5611a05670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612cc0565b8390611a58565b60006114c58383670de0b6b3a76400005b6000826000190484118302158202611a3457600080fd5b50910281810615159190040190565b60006114c58383670de0b6b3a7640000611f56565b60006114c583670de0b6b3a764000084611f56565b6000680248ce36a70cb26b3e198213611a8857506000919050565b680755bf798b4a1bf1e58212611ab1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611c0274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611f74565b9695505050505050565b60006114c583670de0b6b3a764000084611a1d565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611cda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cfe9190612ced565b935093509350935080611d1a5750600098975050505050505050565b868414611d4b57611d2a84611fa2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611d7c57611d5b83611fcc565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611daa57611d8c82611fa2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000611dc58284612d23565b6114c59084612c7a565b600254600454600091610f75916001600160801b0390911690600f0b61201a565b6000611e11878787611e0a88670de0b6b3a7640000612c7a565b8787612040565b979650505050505050565b6000611e3382611e2d858888611f56565b9061206e565b95945050505050565b6000611ea7611e7d611e5684670de0b6b3a7640000612c7a565b611149670de0b6b3a7640000611e6c818a611c0c565b611e769190612c7a565b8790611a0c565b611e8f90670de0b6b3a7640000612c8d565b611ea184670de0b6b3a7640000612c7a565b90611a58565b949350505050565b600080611ee685611ebe611dcf565b611ec89190612c8d565b6002546117ca908790600160801b90046001600160801b0316612c7a565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000611f1d8987896114cc565b9092509050611f2c8289612c7a565b97506000611f3b82888a611f56565b9050611f47818b612c7a565b9a989950979650505050505050565b6000826000190484118302158202611f6d57600080fd5b5091020490565b60006001600160ff1b03821115611f9e5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006001600160801b03821115611f9e57604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280611ffc57506f7fffffffffffffffffffffffffffffff82135b15611f9e5760405163a5353be560e01b815260040160405180910390fd5b60008061202784846120d9565b90925090508061203957612039611ef1565b5092915050565b600080612051888888888888612118565b90925090508061206357612063611ef1565b509695505050505050565b6000816000036120875750670de0b6b3a7640000610d9e565b8260000361209757506000610d9e565b60006120a283611f74565b905060006120b76120b286611f74565b6121e0565b90508181026120ce670de0b6b3a764000082612d37565b9050611c0281611a6d565b6000806000836120e886611f74565b6120f29190612ca0565b9050600081121561210a576000809250925050612111565b9150600190505b9250929050565b600080600061212a8989888888612406565b905061214486611e2d61213d8a8d612c8d565b8790611a43565b9850612151858a86611f56565b9850888110156121685760008092509250506121d5565b888103670de0b6b3a7640000811061219d5761219661218f670de0b6b3a764000089611c0c565b829061206e565b90506121b5565b6121b261218f670de0b6b3a764000089611a58565b90505b808910156121cb576000809350935050506121d5565b8803925060019150505b965096945050505050565b60008082136122025760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906122859084901c611f74565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000612412858561206e565b61242b61242386611e2d868b611a0c565b859085611a1d565b611c029190612c8d565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156124745780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156124b6576124b661247c565b60405290565b60005b838110156124d75781810151838201526020016124bf565b50506000910152565b6000602082840312156124f257600080fd5b815167ffffffffffffffff8082111561250a57600080fd5b818401915084601f83011261251e57600080fd5b8151818111156125305761253061247c565b604051601f8201601f19908116603f011681019083821181831017156125585761255861247c565b8160405282815287602084870101111561257157600080fd5b611e118360208301602088016124bc565b6001600160a01b0381168114610e2557600080fd5b6000602082840312156125a957600080fd5b81356114c581612582565b8015158114610e2557600080fd5b80356125cd816125b4565b919050565b6000602082840312156125e457600080fd5b81356114c5816125b4565b600060608284031215610b8b57600080fd5b60008060006060848603121561261657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561263b57600080fd5b612647868287016125ef565b9150509250925092565b60008083601f84011261266357600080fd5b50813567ffffffffffffffff81111561267b57600080fd5b6020830191508360208260051b850101111561211157600080fd5b600080600080600080608087890312156126af57600080fd5b86356126ba81612582565b955060208701356126ca81612582565b9450604087013567ffffffffffffffff808211156126e757600080fd5b6126f38a838b01612651565b9096509450606089013591508082111561270c57600080fd5b5061271989828a01612651565b979a9699509497509295939492505050565b6000806000806080858703121561274157600080fd5b84359350602085013561275381612582565b9250604085013561276381612582565b9396929550929360600135925050565b6000806000806080858703121561278957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080608085870312156127bb57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156127e757600080fd5b6127f3878288016125ef565b91505092959194509250565b60006020828403121561281157600080fd5b813567ffffffffffffffff81111561282857600080fd5b611ea7848285016125ef565b6000806040838503121561284757600080fd5b50508035926020909101359150565b600080600080600060a0868803121561286e57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156128a157600080fd5b6128ad888289016125ef565b9150509295509295909350565b600080600080608085870312156128d057600080fd5b8435935060208501356128e281612582565b92506040850135915060608501356128f981612582565b939692955090935050565b600080600080600060a0868803121561291c57600080fd5b85359450602086013561292e81612582565b9350604086013561293e81612582565b925060608601359150608086013561295581612582565b809150509295509295909350565b60006020828403121561297557600080fd5b5035919050565b80356001600160801b03811681146125cd57600080fd5b600080604083850312156129a657600080fd5b6129af8361297c565b91506129bd6020840161297c565b90509250929050565b600080604083850312156129d957600080fd5b82356129e481612582565b915060208301356129f4816125b4565b809150509250929050565b600080600060608486031215612a1457600080fd5b505081359360208301359350604090920135919050565b600080600060608486031215612a4057600080fd5b833592506020840135612a5281612582565b929592945050506040919091013590565b600080600080600080600060e0888a031215612a7e57600080fd5b8735612a8981612582565b96506020880135612a9981612582565b95506040880135612aa9816125b4565b945060608801359350608088013560ff81168114612ac657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600060208284031215612af557600080fd5b6114c58261297c565b8035600f81900b81146125cd57600080fd5b80356001600160701b03811681146125cd57600080fd5b60006101808284031215612b3a57600080fd5b612b42612492565b612b4b8361297c565b8152612b596020840161297c565b6020820152612b6a6040840161297c565b6040820152612b7b6060840161297c565b6060820152612b8c60808401612afe565b6080820152612b9d60a0840161297c565b60a0820152612bae60c0840161297c565b60c0820152612bbf60e0840161297c565b60e0820152610100612bd28185016125c2565b90820152610120612be48482016125c2565b90820152610140612bf6848201612b10565b90820152610160612c0884820161297c565b908201529392505050565b600060208284031215612c2557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201612c5757612c57612c2c565b5060000390565b60008251612c708184602087016124bc565b9190910192915050565b81810381811115610d9e57610d9e612c2c565b80820180821115610d9e57610d9e612c2c565b818103600083128015838313168383128216171561203957612039612c2c565b8082028115828204841417610d9e57610d9e612c2c565b634e487b7160e01b600052601260045260246000fd5b60008060008060808587031215612d0357600080fd5b84519350602085015192506040850151915060608501516128f9816125b4565b600082612d3257612d32612cd7565b500690565b600082612d4657612d46612cd7565b600160ff1b821460001984141615612d6057612d60612c2c565b50059056fea264697066735822122028225495b55ff8044a9b2cfc205104da25e2203eea5fc4481d445a5306de1fa464736f6c634300081600336102806040523480156200001257600080fd5b5060405162004228380380620042288339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613da66200048260003960008181610dab01526123a7015260008181610d7c015261236a015260008181610c5601528181610edb01528181610f6b01528181610ffb0152818161108b0152818161168c01528181611724015281816118ed01528181611f2101528181611ff7015261214e01526000610e43015260008181610e1d015261255a015260008181610df70152612534015260008181610dd1015261250e01526000611198015260006111720152600061114c01526000611126015260008181610eb50152612580015260008181610e69015281816113130152612a9c015260008181610e8f0152612edb01526000818161061b0152610d4d01526000818161074b01528181610d1e015281816112c601528181611e95015281816126440152818161268d0152818161273f0152818161278801528181612c0101528181612cad01528181612d990152612e450152613da66000f3fe608060405234801561001057600080fd5b506004361061023c5760003560e01c806360246c881161013b578063bd85b039116100b8578063cf210e651161007c578063cf210e65146104f1578063d816574314610504578063e44808bc14610519578063e985e9c51461052c578063fba560081461053f57600080fd5b8063bd85b039146104a3578063becee9c3146104b6578063c55dae63146104d6578063c69e16ad14610434578063c6e6f592146104de57600080fd5b80639cd241af116100ff5780639cd241af14610444578063a22cb46514610457578063ab033ea91461046a578063b0d965801461047b578063b88fed9f1461049057600080fd5b806360246c88146103fa5780637180c8ca1461040f5780637ecebe00146104215780638e67f87e14610434578063950c5d031461043c57600080fd5b806320fc4881116101c95780633e691db91161018d5780633e691db91461039657806346fbf68e146103a95780634e41a1fb146103cc5780634ed2d6ac146103df57806354fd4d50146103f257600080fd5b806320fc4881146102fb57806321ff32a914610340578063313ce567146103615780633656eec21461037b5780633a98ef391461038e57600080fd5b806306fdde031161021057806306fdde031461029a5780630a4e1493146102a257806314e5f07b146102c257806317fad7fc146102d55780631c0f12b6146102e857600080fd5b8062ad800c1461024157806301681a621461026a57806302329a291461027f57806304baa00b14610292575b600080fd5b61025461024f36600461312c565b61056e565b6040516102619190613195565b60405180910390f35b61027d6102783660046131bd565b6105a5565b005b61027d61028d3660046131e8565b6105ae565b6102546105b7565b6102546105f6565b6102aa61060d565b6040516001600160a01b039091168152602001610261565b61027d6102d0366004613214565b61064d565b61027d6102e33660046132ef565b610669565b61027d6102f6366004613384565b61067f565b61030e61030936600461312c565b610692565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610261565b61035361034e3660046133cc565b6106fe565b604051908152602001610261565b610369610744565b60405160ff9091168152602001610261565b61035361038936600461340e565b6107df565b610353610818565b6103536103a436600461343e565b610837565b6103bc6103b73660046131bd565b610842565b6040519015158152602001610261565b6102546103da36600461312c565b610862565b61027d6103ed366004613479565b610870565b6102546108be565b6104026108f3565b60405161026191906134c3565b61027d61041d366004613564565b5050565b61035361042f3660046131bd565b610c02565b610353610c2e565b6102aa610c48565b61027d610452366004613592565b610c88565b61027d610465366004613564565b610c99565b61027d6104783660046131bd565b50565b610483610d05565b60405161026191906135ca565b61035361049e36600461312c565b6111cd565b6103536104b136600461312c565b6111db565b6104c96104c43660046136f0565b6111fd565b6040516102619190613732565b6102aa6112b8565b6103536104ec36600461312c565b6112f8565b6103536104ff36600461312c565b611306565b61050c61133d565b6040516102619190613776565b61027d610527366004613887565b611449565b6103bc61053a3660046138e6565b611491565b6105476114d5565b6040805182516001600160801b039081168252602093840151169281019290925201610261565b60606105a061057c83611534565b60405160200161058c9190613195565b60405160208183030381529060405261165c565b919050565b61047881611680565b610478816118eb565b60606105f36040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525060405160200161058c9190613195565b90565b60606105f3600160405160200161058c9190613914565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105f3910161058c565b61065e898989898989898989611a05565b505050505050505050565b610677868686868686611bfc565b505050505050565b61068c8484848433611cb0565b50505050565b60408051606081018252600080825260208201819052918101919091526105a06008600084815260200190815260200160002060405160200161058c919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b6000838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261073d910161058c565b9392505050565b60006105f37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cb91906139c5565b6040805160ff90921660208301520161058c565b6000828152600a602090815260408083206001600160a01b0385168452825280832054815192830152610812910161058c565b92915050565b60006105f3610825611e71565b60405160200161058c91815260200190565b600061081282611f0a565b60006105a061085083612149565b6040805191151560208301520161058c565b60606105a061057c8361222e565b8361087a8161232c565b6001600160a01b0316336001600160a01b0316146108ab57604051632aab8bd360e01b815260040160405180910390fd5b6108b7858585856123e9565b5050505050565b60606105f3604051806040016040528060078152602001660ec625c605c62760cb1b81525060405160200161058c9190613195565b61096c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610976612456565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109e19190613a0e565b6109eb9190613a21565b905060008215610afd5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a1885612469565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610ac9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aed9190613a34565b509050610afa81846125ff565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610bce57610bc98486612614565b610bd1565b60005b81526003546001600160801b0316602091820152604051919250610bfb9161058c918491016134c3565b5050505090565b6001600160a01b0381166000908152600e60209081526040808320548151928301526105a0910161058c565b60006105f360095460405160200161058c91815260200190565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105f3910161058c565b610c94838383336123e9565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d0d613045565b6105f36040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5b9190613a64565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb9190613a64565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611057573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107b9190613a64565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110b9190613a64565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058c91906135ca565b60006105a061082583612629565b6000818152600b60209081526040808320548151928301526105a0910161058c565b606060008267ffffffffffffffff81111561121a5761121a613a81565b604051908082528060200260200182016040528015611243578160200160208202803683370190505b50905060005b8381101561129c57600085858381811061126557611265613a97565b9050602002013590506000815490508084848151811061128757611287613a97565b60209081029190910101525050600101611249565b506112b18160405160200161058c9190613732565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105f3910161058c565b60006105a061082583612724565b60006105a06108256113387f000000000000000000000000000000000000000000000000000000000000000085613a0e565b61280d565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f3600260405160200161058c919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b846114538161232c565b6001600160a01b0316336001600160a01b03161461148457604051632aab8bd360e01b815260040160405180910390fd5b6106778686868686611cb0565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610812910161058c565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f39060600161058c565b606060f882901c6001600160f81b038316600061155082612851565b90506000836003811115611566576115666139e2565b03611598576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611654565b60018360038111156115ac576115ac6139e2565b036115d857806040516020016115c29190613aad565b6040516020818303038152906040529350611654565b60028360038111156115ec576115ec6139e2565b0361160257806040516020016115c29190613ae6565b6003836003811115611616576116166139e2565b03611654576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116779190613195565b60405180910390fd5b611688612906565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170c9190613a64565b9050336001600160a01b038216148015906117ba57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a49190613a64565b6001600160a01b0316336001600160a01b031614155b80156117cc57506117ca33612149565b155b156117e9576040516282b42960e81b815260040160405180910390fd5b60006117f3611e71565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa15801561183d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118619190613b20565b90506118776001600160a01b0385168483612930565b81611880611e71565b1461189e576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104786001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190613a64565b6001600160a01b0316336001600160a01b031614158015611994575061199233612149565b155b156119b1576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119fa90831515815260200190565b60405180910390a150565b83421115611a265760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a4d5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b3b573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b7957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c1957506001600160a01b038516155b15611c375760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c575760405163174861a760e31b815260040160405180910390fd5b60005b83811015611ca757611c9f858583818110611c7757611c77613a97565b905060200201358888868686818110611c9257611c92613a97565b9050602002013533611cb0565b600101611c5a565b50505050505050565b6001600160a01b0384161580611ccd57506001600160a01b038316155b15611ceb5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611daf576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611daf576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611dad576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611da7908490613a21565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611de1908490613a21565b90915550506000858152600a602090815260408083206001600160a01b038716845290915281208054849290611e18908490613a0e565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b8152306004820152600090611f05906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611edc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f009190613b20565b612724565b905090565b6000611f14612906565b611f1d82612982565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa19190613a64565b90506001600160a01b038116611fba60208501856131bd565b6001600160a01b031614611fe157604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061208d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612053573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120779190613a64565b6001600160a01b0316336001600160a01b031614155b801561209f575061209d33612149565b155b156120bc576040516282b42960e81b815260040160405180910390fd5b60006120c6612456565b6009805460009091559091506120dd8183876129b8565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461211c60408a0160208b016131e8565b60408051938452602084019290925215159082015260600160405180910390a25050506105a06001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156121aa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121d29190810190613b39565b905060005b815181101561222457836001600160a01b03168282815181106121fc576121fc613a97565b60200260200101516001600160a01b03160361221c575060019392505050565b6001016121d7565b5060009392505050565b606060f882901c6001600160f81b038316600061224a82612851565b90506000836003811115612260576122606139e2565b03612292576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611654565b60018360038111156122a6576122a66139e2565b036122bc57806040516020016115c29190613bfe565b60028360038111156122d0576122d06139e2565b036122e657806040516020016115c29190613c36565b60038360038111156122fa576122fa6139e2565b0361165457505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611f05670de0b6b3a7640000612629565b6124cd6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125c59116612a51565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926125f792900416612a51565b905292915050565b600061073d8383670de0b6b3a7640000612ac7565b600061073d83670de0b6b3a764000084612ac7565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612678575047612703565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127009190613b20565b90505b600f5460000361271457600061073d565b600f5461073d9084908390612ac7565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127735750476127fe565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156127d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fb9190613b20565b90505b600f5461073d90849083612ac7565b6000612835600b6000612821600286612ae5565b815260200190815260200160002054612b1a565b612847600b6000612821600187612ae5565b6108129190613c62565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b84156128f85761288c600a86613c98565b612897906030613a0e565b60f81b8260016128a78487613a21565b6128b19190613a21565b815181106128c1576128c1613a97565b60200101906001600160f81b031916908160001a905350806128e281613cac565b91506128f19050600a86613cc5565b945061287b565b918290030190815292915050565b60026000540361292957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c94908490612b48565b600061299160208301836131bd565b6001600160a01b0316036104785760405163f0dd15fd60e01b815260040160405180910390fd5b6000806129c585856125ff565b90506129d081612724565b9450846000036129e457600091505061073d565b8491506129f760408401602085016131e8565b15612a2657612a1f85612a0d60208601866131bd565b612a1a6040870187613cd9565b612bab565b9150612a49565b612a4985612a3760208601866131bd565b612a446040870187613cd9565b612d45565b509392505050565b600080670de0b6b3a7640000612a65612ed3565b612a6f9190613d20565b9050808311612a7f576000612a89565b612a898184613a21565b915061073d612ac0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613d20565b8390612614565b6000826000190484118302158202612ade57600080fd5b5091020490565b60006001600160f81b03821115612b0f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612b445760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612b5d6001600160a01b03841683612eff565b90508051600014158015612b82575080806020019051810190612b809190613d37565b155b15610c9457604051635274afe760e01b81526001600160a01b0384166004820152602401611677565b6000600f548511612bbc5784612bc0565b600f545b94506000612bcd86612629565b905085600f6000828254612be19190613a21565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612c87576040516001600160a01b038716908390600081818185875af1925050503d8060008114612c77576040519150601f19603f3d011682016040523d82523d6000602084013e612c7c565b606091505b505080915050612d1d565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612cf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d1a9190613d37565b90505b80612d3b576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f548411612d545783612d58565b600f545b93506000612d6585612629565b905084600f6000828254612d799190613a21565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e1f576040516001600160a01b038616908390600081818185875af1925050503d8060008114612e0f576040519150601f19603f3d011682016040523d82523d6000602084013e612e14565b606091505b505080915050612eb5565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612e8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eb29190613d37565b90505b80610677576040516312171d8360e31b815260040160405180910390fd5b6000611f05427f0000000000000000000000000000000000000000000000000000000000000000612f0d565b606061073d83836000612f23565b6000612f198284613c98565b61073d9084613a21565b606081471015612f485760405163cd78605960e01b8152306004820152602401611677565b600080856001600160a01b03168486604051612f649190613d54565b60006040518083038185875af1925050503d8060008114612fa1576040519150601f19603f3d011682016040523d82523d6000602084013e612fa6565b606091505b5091509150612fb6868383612fc0565b9695505050505050565b606082612fd557612fd08261301c565b61073d565b8151158015612fec57506001600160a01b0384163b155b1561301557604051639996b31560e01b81526001600160a01b0385166004820152602401611677565b508061073d565b80511561302c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016131276040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561313e57600080fd5b5035919050565b60005b83811015613160578181015183820152602001613148565b50506000910152565b60008151808452613181816020860160208601613145565b601f01601f19169290920160200192915050565b60208152600061073d6020830184613169565b6001600160a01b038116811461047857600080fd5b6000602082840312156131cf57600080fd5b813561073d816131a8565b801515811461047857600080fd5b6000602082840312156131fa57600080fd5b813561073d816131da565b60ff8116811461047857600080fd5b60008060008060008060008060006101208a8c03121561323357600080fd5b8935985060208a0135975060408a013561324c816131a8565b965060608a013561325c816131a8565b955060808a013561326c816131da565b945060a08a0135935060c08a013561328381613205565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126132b557600080fd5b50813567ffffffffffffffff8111156132cd57600080fd5b6020830191508360208260051b85010111156132e857600080fd5b9250929050565b6000806000806000806080878903121561330857600080fd5b8635613313816131a8565b95506020870135613323816131a8565b9450604087013567ffffffffffffffff8082111561334057600080fd5b61334c8a838b016132a3565b9096509450606089013591508082111561336557600080fd5b5061337289828a016132a3565b979a9699509497509295939492505050565b6000806000806080858703121561339a57600080fd5b8435935060208501356133ac816131a8565b925060408501356133bc816131a8565b9396929550929360600135925050565b6000806000606084860312156133e157600080fd5b8335925060208401356133f3816131a8565b91506040840135613403816131a8565b809150509250925092565b6000806040838503121561342157600080fd5b823591506020830135613433816131a8565b809150509250929050565b60006020828403121561345057600080fd5b813567ffffffffffffffff81111561346757600080fd5b82016060818503121561073d57600080fd5b6000806000806080858703121561348f57600080fd5b8435935060208501356134a1816131a8565b92506040850135915060608501356134b8816131a8565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561357757600080fd5b8235613582816131a8565b91506020830135613433816131da565b6000806000606084860312156135a757600080fd5b8335925060208401356135b9816131a8565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516135f660208401826001600160a01b03169052565b50604083015161361160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613683828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b6000806020838503121561370357600080fd5b823567ffffffffffffffff81111561371a57600080fd5b613726858286016132a3565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561376a5783518352928401929184019160010161374e565b50909695505050505050565b81516001600160801b03168152610180810160208301516137a260208401826001600160801b03169052565b5060408301516137bd60408401826001600160801b03169052565b5060608301516137d860608401826001600160801b03169052565b5060808301516137ed6080840182600f0b9052565b5060a083015161380860a08401826001600160801b03169052565b5060c083015161382360c08401826001600160801b03169052565b5060e083015161383e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526136e8565b600080600080600060a0868803121561389f57600080fd5b8535945060208601356138b1816131a8565b935060408601356138c1816131a8565b92506060860135915060808601356138d8816131a8565b809150509295509295909350565b600080604083850312156138f957600080fd5b8235613904816131a8565b91506020830135613433816131a8565b60006020808352600084548160018260011c9150600183168061393857607f831692505b60208310810361395657634e487b7160e01b85526022600452602485fd5b6020880183905260408801818015613975576001811461398b576139b6565b60ff198616825284151560051b820196506139b6565b60008b81526020902060005b868110156139b057815484820152908501908901613997565b83019750505b50949998505050505050505050565b6000602082840312156139d757600080fd5b815161073d81613205565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610812576108126139f8565b81810381811115610812576108126139f8565b60008060408385031215613a4757600080fd5b825191506020830151613433816131da565b80516105a0816131a8565b600060208284031215613a7657600080fd5b815161073d816131a8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613ad9816011850160208701613145565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613b13816012850160208701613145565b9190910160120192915050565b600060208284031215613b3257600080fd5b5051919050565b60006020808385031215613b4c57600080fd5b825167ffffffffffffffff80821115613b6457600080fd5b818501915085601f830112613b7857600080fd5b815181811115613b8a57613b8a613a81565b8060051b604051601f19603f83011681018181108582111715613baf57613baf613a81565b604052918252848201925083810185019188831115613bcd57600080fd5b938501935b82851015613bf257613be385613a59565b84529385019392850192613bd2565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613c29816010850160208701613145565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613ad9816011850160208701613145565b81810360008312801583831316838312821617156112b1576112b16139f8565b634e487b7160e01b600052601260045260246000fd5b600082613ca757613ca7613c82565b500690565b600060018201613cbe57613cbe6139f8565b5060010190565b600082613cd457613cd4613c82565b500490565b6000808335601e19843603018112613cf057600080fd5b83018035915067ffffffffffffffff821115613d0b57600080fd5b6020019150368190038213156132e857600080fd5b8082028115828204841417610812576108126139f8565b600060208284031215613d4957600080fd5b815161073d816131da565b60008251613d66818460208701613145565b919091019291505056fea2646970667358221220b7b92a23978c1ba9c06ed305b8ba1c5a9b01f5495a9419da81a618620b1be72b64736f6c634300081600336102806040523480156200001257600080fd5b506040516200425c3803806200425c8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613da1620004bb60003960005050600050506000610b650152600050506000818160af01528181610325015261301c0152600081816113eb015281816117fc0152818161185f01528181612bfa01528181612c3601528181612e350152612ff601526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612fd001526000611c1f015260008181611d45015281816123a801526124210152600081816108d701528181610f8c01528181611d1901526123f5015260008181610e81015261236e01526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d0015261304201526000818161080f01528181610f0b015281816117580152818161224301526135760152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260005050600081816119f101528181611a3a01528181612697015281816126e0015281816127bb015281816128670152818161295301526129ff0152613da16000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613824565b610073565b60405190815260200160405180910390f35b61004e61006e366004613824565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613899565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c990836138ac565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a60208301836138e1565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161390c565b6102cc8a6102c68d8f613899565b906115e5565b8d6102da60408c018c613929565b6040516102ee989796959493929190613999565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613899565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c990836139e1565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d060208301836138e1565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161390c565b8a61051c60408b018b613929565b60405161052f9796959493929190613a09565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836138e1565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611ad1565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613899565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611ae7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b92505b5061076583611b1f565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613a4a565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613899565b4290611b49565b84611075565b61080288611b5e565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613a4a565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611d02565b9150915080600960008282546108a59190613899565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613899565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dd1565b915061090f61090a83856115e5565b611e1b565b600680546002906109309084906201000090046001600160701b0316613a5d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611b1f565b6006805460109061097f908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611d02565b9150915080600960008282546109f69190613899565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c8183613a4a565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b0316613a5d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611b1f565b60068054601090610a9b908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae791906138ac565b60006113a5565b8e610af98482611e45565b50505b6000610b078461203f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be59190613a9d565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061218b565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e908490613a4a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611ae7565b90506000610da28a612216565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612267565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b9550610eaa858c610ea5897f00000000000000000000000000000000000000000000000000000000000000006122d7565b612307565b15610eb757610eb7611444565b6000806000610ec885878b87612349565b9c5091945092509050610edb8184613a4a565b610ee59089613899565b9750610ef18284613899565b610efb908d613899565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f359190613a4a565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611dd1565b9950610fbc878a613a4a565b9850670de0b6b3a7640000611039610fd48787613899565b600254610ff2908f90600160801b90046001600160801b0316613a4a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b111561104757611047611444565b6110578a8a878a8787600061245d565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611b1f565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a76400006111148886613a4a565b61111e9190613aba565b85670de0b6b3a7640000611132878a613a4a565b61113c9190613aba565b8592919060016124fc565b611b1f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611b1f565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a764000086613aba565b600554600160801b90046001600160801b031691908a60006124fc565b600580546001600160801b03928316600160801b02921691909117905561122286611b1f565b61122c9082613ad1565b600480546001600160801b03928316600160801b02921691909117905561125284611b1f565b6002805460009061126d9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836125a6565b600480546000906112af908490600f0b613af1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611b1f565b60028054601090611301908490600160801b90046001600160801b0316613ad1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b61137191906138ac565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b031684846125e2565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f000000000000000000000000000000000000000000000000000000000000000083612649565b60035461142691906001600160801b0316613899565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611e45565b600080600061147884611b5e565b9092509050600061148986866115e5565b9050818311156114a15761149e86838561265e565b95505b828110156114b35780830392506114b8565b600092505b6114c183611e1b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611b1f565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b90506115638161267c565b9450846000036115775760009150506115de565b84915061158a604084016020850161390c565b156115b9576115b2856115a060208601866138e1565b6115ad6040870187613929565b612765565b91506115dc565b6115dc856115ca60208601866138e1565b6115d76040870187613929565b6128ff565b505b9392505050565b60006115de8383670de0b6b3a764000061265e565b60008060008060008060008061160e611ae7565b9050600061161b8a612216565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a95565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b985061170284878b88612349565b9c5091945090925090506117168284613a4a565b6117209089613a4a565b975061172c8184613899565b611736908e613a4a565b9c506117428a8e613899565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117829190613a4a565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b600161245d565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f00000000000000000000000000000000000000000000000000000000000000006118258583613a4a565b105b1561183457611834611444565b6004549084900390600f0b61184984826138ac565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612ae9565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a764000088613aba565b6005546001600160801b031691908c60006124fc565b600580546001600160801b0319166001600160801b03929092169190911790556119038882613a4a565b905061190e81611b1f565b600380546001600160801b03928316600160801b02921691909117905561193483611b1f565b600280546001600160801b0319166001600160801b039290921691909117905561195d826125a6565b600480546001600160801b0319166001600160801b039290921691909117905561198687611b1f565b600280546010906119a8908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a25575047611ab0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aad9190613b1e565b90505b600f54600003611ac15760006115de565b600f546115de908490839061265e565b6000611add8284613b4d565b6115de9084613a4a565b6002546004546000916105c5916001600160801b0390911690600f0b612ae9565b600061008182611b1985888861265e565b90612b0f565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611b5857826115de565b50919050565b6006546000908190611b81908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611cfd576000611bab8383613a4a565b9050611bba6111478286612b84565b60068054601090611bdc908490600160801b90046001600160801b0316613ad1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c158583612b9990919063ffffffff16565b90506000611c43827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611c579190613899565b90915550611c6790508183613a4a565b9150611c7282611b1f565b60028054600090611c8d9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cba82612bae565b60048054600090611ccf908490600f0b613af1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611d0f8785612b99565b91506000611d3d837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611d69817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611d8c57611d7b8282613a4a565b611d859084613a4a565b9250611da3565b611d968282613a4a565b611da09084613899565b92505b86861015611dc657611db683878961265e565b9250611dc382878961265e565b91505b509550959350505050565b600080611de984611de38a888a61265e565b90612b99565b9050611df688848661265e565b611e009082613899565b905086811115611e105786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e90916001600160801b031690613a4a565b905080600003611ea4576001915050611371565b6000611eaf85612bd8565b905080600003611ec457600192505050611371565b600080611ed2838589612c74565b9150915080611ee8576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f24929190613bdf565b6040805180830381865af4158015611f40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f649190613c55565b91509150611f82611f7482611377565b611f7d90613c79565b612def565b925082611f985760009650505050505050611371565b611fa182611b1f565b60078054600090611fbc9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fe981611b1f565b6007805460109061200b908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61206887612f87565b6040518263ffffffff1660e01b81526004016120849190613c95565b6040805180830381865af41580156120a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c49190613ca4565b91509150806120da575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161214091613899565b61214a9190613a4a565b90508060000361216257506000958695509350505050565b600080871161217257600061217d565b61217d84888461265e565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121b1576121b1613cd4565b6040519080825280601f01601f1916602001820160405280156121db576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121fc578692505b828152826000602083013e90999098509650505050505050565b6000806122216105ca565b905080831161223157600061223b565b61223b8184613a4a565b91506115de827f0000000000000000000000000000000000000000000000000000000000000000612b99565b6000808061228861228088670de0b6b3a7640000613a4a565b8990876130c1565b905086156122ca5761229a8888612649565b91506122bb8a8a846122b48a670de0b6b3a7640000613a4a565b89896130e7565b92506122c78382613899565b90505b9750975097945050505050565b60006122f56122ee84670de0b6b3a7640000613a4a565b8390612649565b6115de90670de0b6b3a7640000613a4a565b60008061233e85612316611ae7565b6123209190613899565b600254610ff2908790600160801b90046001600160801b0316613a4a565b909210949350505050565b60008080806123a087866123998b61239361236c8c670de0b6b3a7640000613a4a565b7f000000000000000000000000000000000000000000000000000000000000000090612649565b90612649565b91906130c1565b93506123cc847f00000000000000000000000000000000000000000000000000000000000000006115e5565b915060006123ed6123e589670de0b6b3a7640000613a4a565b8a90886130c1565b9050612419817f0000000000000000000000000000000000000000000000000000000000000000612649565b9350612445847f00000000000000000000000000000000000000000000000000000000000000006115e5565b61244f9084613899565b915050945094509450949050565b600080600080600080888810156124cc5786156124825761247f8d898b61265e565b9c505b61248d8c898b61265e565b9b506124988b611377565b6124a18d611377565b6124ab91906138ac565b90506124b88b898b61265e565b9a506124c58a898b61265e565b99506124eb565b6124d58b611377565b6124de8d611377565b6124e891906138ac565b90505b9b9c9a9b999a975050505050505050565b60008260000361250d57508461259d565b81156125605761253e6125208487613899565b61252a85876115e5565b612534888a6115e5565b611de39190613899565b9050600061254c8588611b49565b90508082101561255a578091505b5061259d565b82850361256f5750600061259d565b61259a61257c8487613a4a565b6125868587612649565b612590888a6115e5565b611de39190613a4a565b90505b95945050505050565b600060016001607f1b03198212806125c4575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b6000806125f084600061310a565b6125fb84600061310a565b61260591906138ac565b905060008113156126215761261a8186613899565b9450612640565b60008112156126405761263381613c79565b61263d9086613a4a565b94505b50929392505050565b60006115de8383670de0b6b3a76400006130c1565b600082600019048411830215820261267557600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126cb575047612756565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561272f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127539190613b1e565b90505b600f546115de9084908361265e565b6000600f548511612776578461277a565b600f545b94506000612787866119d6565b905085600f600082825461279b9190613a4a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612841576040516001600160a01b038716908390600081818185875af1925050503d8060008114612831576040519150601f19603f3d011682016040523d82523d6000602084013e612836565b606091505b5050809150506128d7565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d49190613cea565b90505b806128f5576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f54841161290e5783612912565b600f545b9350600061291f856119d6565b905084600f60008282546129339190613a4a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129d9576040516001600160a01b038616908390600081818185875af1925050503d80600081146129c9576040519150601f19603f3d011682016040523d82523d6000602084013e6129ce565b606091505b505080915050612a6f565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6c9190613cea565b90505b80612a8d576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612ab6612aae88670de0b6b3a7640000613a4a565b89908761265e565b905086156122ca57612ac888886115e5565b91506122bb8a8a84612ae28a670de0b6b3a7640000613a4a565b8989613120565b600080612af68484613131565b909250905080612b0857612b08611444565b5092915050565b600081600003612b285750670de0b6b3a7640000611371565b82600003612b3857506000611371565b6000612b4383611377565b90506000612b58612b5386611377565b613170565b9050818102612b6f670de0b6b3a764000082613d07565b9050612b7a81613396565b9695505050505050565b60006115de83670de0b6b3a7640000846130c1565b60006115de83670de0b6b3a76400008461265e565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612bf3906001600160801b031684612b84565b9050612c1f7f000000000000000000000000000000000000000000000000000000000000000082613899565b6002546001600160801b03161115611b58576002547f000000000000000000000000000000000000000000000000000000000000000090612c6a9083906001600160801b0316613a4a565b6115de9190613a4a565b612c7c613771565b600080612c8884612f87565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612cc39190613c95565b6040805180830381865af4158015612cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d039190613ca4565b9350905082612d18575060009150612de79050565b6000612d3f612d3a8461016001518561014001516115e590919063ffffffff16565b611377565b612d5f612d3a85610120015186610100015161264990919063ffffffff16565b612d6991906138ac565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ecc9190613d35565b935093509350935080612ee85750600098975050505050505050565b868414612f1957612ef884611b1f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612f4a57612f29836125a6565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f7857612f5a82611b1f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f8f6137c3565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191613087911661352b565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926130b99290041661352b565b905292915050565b60008260001904841183021582026130d857600080fd5b50910281810615159190040190565b6000806130f88888888888886135a1565b909250905080611e1057611e10611444565b600081831361311957816115de565b5090919050565b6000806130f8888888888888613682565b60008060008361314086611377565b61314a91906138ac565b90506000811215613162576000809250925050613169565b9150600190505b9250929050565b60008082136131925760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132159084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133b157506000919050565b680755bf798b4a1bf1e582126133da576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b7a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a764000061353f6105ca565b6135499190613aba565b9050808311613559576000613563565b6135638184613a4a565b91506115de61359a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613aba565b8390612b99565b60008060006135b38989888888613742565b9050868810156135ca576000809250925050613677565b96869003966135d98887612b0f565b9750878110156135f0576000809250925050613677565b8781036135fe8186886130c1565b9050670de0b6b3a764000081106136325761362b613624670de0b6b3a764000089612b84565b8290612b0f565b905061364a565b613647613624670de0b6b3a764000089612b99565b90505b6136548186612b84565b90508981101561366c57600080935093505050613677565b899003925060019150505b965096945050505050565b60008060006136948989888888613742565b90506136a486611b19898b613899565b9750878110156136bb576000809250925050613677565b8781036136c98186886130c1565b9050670de0b6b3a764000081106136f6576136ef613624670de0b6b3a764000089612b84565b905061370e565b61370b613624670de0b6b3a764000089612b99565b90505b6137188186612b84565b9050808a101561373057600080935093505050613677565b90980398600198509650505050505050565b600061374e8585612b0f565b61376761375f86611b19868b612649565b8590856130c1565b61259a9190613899565b6040518061012001604052806137856137c3565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561383a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561386657600080fd5b85016060818803121561387857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561137157611371613883565b8181036000831280158383131683831282161715612b0857612b08613883565b6001600160a01b03811681146105af57600080fd5b6000602082840312156138f357600080fd5b81356115de816138cc565b80151581146105af57600080fd5b60006020828403121561391e57600080fd5b81356115de816138fe565b6000808335601e1984360301811261394057600080fd5b83018035915067ffffffffffffffff82111561395b57600080fd5b60200191503681900382131561316957600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006139d360e083018486613970565b9a9950505050505050505050565b8082018281126000831280158216821582161715613a0157613a01613883565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613a3d60c083018486613970565b9998505050505050505050565b8181038181111561137157611371613883565b6001600160701b03818116838216019080821115612b0857612b08613883565b6001600160801b03818116838216019080821115612b0857612b08613883565b600060208284031215613aaf57600080fd5b81516115de816138cc565b808202811582820484141761137157611371613883565b6001600160801b03828116828216039080821115612b0857612b08613883565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137157611371613883565b600060208284031215613b3057600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613b5c57613b5c613b37565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613bf3828551613b61565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c6857600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c8e57613c8e613883565b5060000390565b61018081016113718284613b61565b60008060408385031215613cb757600080fd5b825191506020830151613cc9816138fe565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613cfc57600080fd5b81516115de816138fe565b600082613d1657613d16613b37565b600160ff1b821460001984141615613d3057613d30613883565b500590565b60008060008060808587031215613d4b57600080fd5b8451935060208501519250604085015191506060850151613878816138fe56fea26469706673582212207255e7d73034b69a3e5d352773f7784542b092b7199cade1ede58995980a29b164736f6c634300081600336102806040523480156200001257600080fd5b50604051620044c2380380620044c28339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613fce620004f460003960005050600050506000610c8c015260005050600081816101000152818161031001526131ec01526000818161152301528181612049015281816120ac0152818161285e01528181612dd101528181612e0d0152818161300501526131c601526000818161083a01528181610dec01528181610e2e01528181610f2001528181611396015281816113f5015281816118cf0152818161196201526131a001526000611c68015260008181611d8e01528181612a4e01528181612ac701526133060152600081816109fe01528181610ea10152818161149001528181611d620152612a9b015260008181610e8001528181612a1a01526132c201526000818161085b01528181610dca01528181610e4f01528181610f41015281816113740152818161141601526132120152600081816101de015281816103a80152818161093601526137bc0152600081816106f401528181610774015281816107ea015281816108b601526108ee01526000505060008181610556015281816116cd01528181611716015281816117a801528181611829015281816119d001528181611a51015281816128df0152818161292801528181612b940152612bdd0152613fce6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613a51565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613a51565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de836105c0565b6000806100eb88866105f9565b909250905060006100fc83836106ce565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ec565b905061017a81846004600161071d565b50600080600061018a8787610d9b565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613ac6565b909155506101d99050844283610f7d565b6102037f000000000000000000000000000000000000000000000000000000000000000085613ac6565b98506102118389888c6110bb565b600061021e60018b611255565b90506102378161023160208e018e613aee565b8b61128a565b8d8a8a898e8561024a6020830183613aee565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613b19565b8961029560408a018a613b36565b6040516102a89796959493929190613ba6565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e836105c0565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611332565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106ec565b9050600061039f6103956106ec565b846004600161071d565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613ac6565b90506000806000806103e08e8988611345565b60098054949850929650909450925083916000906103ff908490613ac6565b909155506104109050874283610f7d565b50600061041e84898d6114cb565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105f9565b508e905061045b81858b896114fd565b6000610468600288611255565b90508c6104828261047c6020840184613aee565b8561128a565b858b86846104936020860186613aee565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613b19565b6104e4896104de8a8d613be7565b906106ce565b8d6104f260408e018e613b36565b604051610506989796959493929190613bfa565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a057503415155b156105be57604051631574f9f360e01b815260040160405180910390fd5b565b60006105cf6020830183613aee565b6001600160a01b0316036105f65760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061060d6040850160208601613b19565b1561063257610628856106236040870187613b36565b6116b1565b909350905061064a565b503461064a856106456040870187613b36565b611945565b610652611332565b915080156106c557604051600090339083908381818185875af1925050503d806000811461069c576040519150601f19603f3d011682016040523d82523d6000602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106e38383670de0b6b3a7640000611aef565b90505b92915050565b6000610718427f0000000000000000000000000000000000000000000000000000000000000000611b0d565b905090565b600084815260086020526040812060018101546001600160801b031615158061074557504286115b1561075e57600101546001600160801b03169050610d93565b600080600061076b6106ec565b905060006107997f00000000000000000000000000000000000000000000000000000000000000008b613ac6565b90505b8181101561080f576000818152600860205260409020600101546001600160801b031680156107e7576000828152600860205260409020549094506001600160801b0316925061080f565b507f00000000000000000000000000000000000000000000000000000000000000000161079c565b836000036108825788935061087f610825611b23565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b92505b5061088c83611b64565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e26108db7f00000000000000000000000000000000000000000000000000000000000000008b613be7565b8a84610f7d565b6109208961091a6109137f000000000000000000000000000000000000000000000000000000000000000083613ac6565b4290611b92565b84610f7d565b61092988611ba7565b506000905060088161095b7f00000000000000000000000000000000000000000000000000000000000000008d613be7565b815260208101919091526040016000908120600101546001600160801b0316915061098760028c611255565b6000818152600b60205260408120549192508c8c8315610acd57600192506000806109b686898d866000611d4b565b9150915080600960008282546109cc9190613ac6565b909155506109e89050866000846109e281611e1a565b88611e44565b6109f28183613ac6565b9150610a2286838a8e877f0000000000000000000000000000000000000000000000000000000000000000611fbe565b9150610a36610a3183856106ce565b612008565b60068054600290610a579084906201000090046001600160701b0316613c42565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a8482611b64565b60068054601090610aa6908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ada600184611255565b6000818152600b60205260409020549091508015610be95760019450600080610b07838b8f886001611d4b565b915091508060096000828254610b1d9190613ac6565b90915550610b39905083600084610b3381611e1a565b8a612032565b610b438183613be7565b9150610b52610a3183876106ce565b60068054600290610b739084906201000090046001600160701b0316613c42565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ba082611b64565b60068054601090610bc2908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c2357610c15610bfb87611e1a565b610c0483611e1a565b610c0e9190613c82565b6000612223565b8e610c208482612262565b50505b6000610c2e8461245c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ce8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0c9190613ca2565b90506001600160a01b03811615610d8157610d7e5a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906125a8565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610dab611b23565b600254909150610e10908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612633565b600254909450610e73908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b9150610eca8785610ec5857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061265f565b6126c4565b15610ed757610ed7612706565b610ee38785888561271f565b91965094509250670de0b6b3a7640000610f65610f008784613ac6565b600254610f1e908890600160801b90046001600160801b0316613be7565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b1115610f7357610f73612706565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610fa95750505050565b6000848152600860205260408120546001600160801b03169081900361100357610fd283611b64565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611081565b61105461104f670de0b6b3a764000061101c8886613be7565b6110269190613cbf565b85670de0b6b3a764000061103a878a613be7565b6110449190613cbf565b85929190600161276b565b611b64565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61108a84611b64565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110fd61104f826110e7670de0b6b3a764000086613cbf565b6005546001600160801b0316919088600161276b565b600580546001600160801b0319166001600160801b039290921691909117905561112685611b64565b600280546000906111419084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116e84611b64565b60028054601090611190908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111bd84611b64565b6111c79082613c62565b600380546001600160801b03808416600160801b029116179055905060006111ee83612813565b905061120c816111fd87611e1a565b6112079084613cf6565b612223565b61121584612857565b61122157611221612706565b600061122c856128b7565b90508061124c57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561127f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112bc908490613ac6565b90915550506000838152600b6020526040812080548392906112df908490613ac6565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610718670de0b6b3a76400006128c4565b6000806000806000611355611b23565b6002549091506113ba908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006129bf565b9350876113c785896129e0565b11156113d5576113d5612706565b600254600090819061143a908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b44565b93506114508a670de0b6b3a7640000868c6129f5565b5091935090915061146390508183613be7565b61146d9087613be7565b9550886114ba816114b48d611482868c613be7565b8d61148d8782612b03565b877f0000000000000000000000000000000000000000000000000000000000000000612b19565b906129e0565b975090945050505093509350935093565b60006114dd6040830160208401613b19565b156114e95750826114f6565b6114f38484612b3e565b90505b9392505050565b6002546001600160801b03168381101561151957611519612706565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611551908390600f0b612b53565b101561155f5761155f612706565b6004546115a99061104f90600160801b90046001600160801b031661158c670de0b6b3a764000086613cbf565b600554600160801b90046001600160801b0316919089600161276b565b600580546001600160801b03928316600160801b0292169190911790556115cf81611b64565b600280546001600160801b0319166001600160801b03929092169190911790556115f885611b64565b6002805460109061161a908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061164785611b64565b60048054601090611669908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061169883612813565b905061120c816116a788611e1a565b6112079084613c82565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161170157504761178c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611765573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117899190613d1e565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161180757873410156117f6576040516312171d8360e31b815260040160405180910390fd5b6118008834613be7565b90506118a1565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561187a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189e9190613d37565b91505b816118bf576040516312171d8360e31b815260040160405180910390fd5b600f54600003611904576118f3887f0000000000000000000000000000000000000000000000000000000000000000612b3e565b600f8190559450925061193d915050565b600f54600090611916908a9086611aef565b905080600f600082825461192a9190613ac6565b9091555090955090935061193d92505050565b935093915050565b6000611950846128c4565b9050600f5460000361198e57611986817f0000000000000000000000000000000000000000000000000000000000000000612b3e565b600f556119b4565b600061199982612b79565b905080600f60008282546119ad9190613ac6565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a2f5782341015611a1e576040516312171d8360e31b815260040160405180910390fd5b611a288334613be7565b9050611ac9565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac69190613d37565b91505b81611ae7576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611b0657600080fd5b5091020490565b6000611b198284613d6a565b6106e39084613be7565b600254600454600091610718916001600160801b0390911690600f0b612b53565b6000611b5b82611b55858888611aef565b90612c62565b95945050505050565b60006001600160801b03821115611b8e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611ba157826106e3565b50919050565b6006546000908190611bca908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611d46576000611bf48383613be7565b9050611c0361104f8286612ccd565b60068054601090611c25908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c5e8583612b3e90919063ffffffff16565b90506000611c8c827f00000000000000000000000000000000000000000000000000000000000000006106ce565b90508060096000828254611ca09190613ac6565b90915550611cb090508183613be7565b9150611cbb82611b64565b60028054600090611cd69084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d0382612ce2565b60048054600090611d18908490600f0b613d7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611d588785612b3e565b91506000611d86837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611db2817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611dd557611dc48282613be7565b611dce9084613be7565b9250611dec565b611ddf8282613be7565b611de99084613ac6565b92505b86861015611e0f57611dff838789611aef565b9250611e0c828789611aef565b91505b509550959350505050565b60006001600160ff1b03821115611b8e5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611e8d61104f82611e70670de0b6b3a764000086613cbf565b600554600160801b90046001600160801b031691908a600061276b565b600580546001600160801b03928316600160801b029216919091179055611eb386611b64565b611ebd9082613cd6565b600480546001600160801b03928316600160801b029216919091179055611ee384611b64565b60028054600090611efe9084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f2b83612d0c565b60048054600090611f40908490600f0b613d7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f7085611b64565b60028054601090611f92908490600160801b90046001600160801b0316613cd6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611fd684611fd08a888a611aef565b90612b3e565b9050611fe3888486611aef565b611fed9082613ac6565b905086811115611ffd5786810391505b509695505050505050565b60006001600160701b03821115611b8e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061207457507f00000000000000000000000000000000000000000000000000000000000000006120728583613be7565b105b1561208157612081612706565b6004549084900390600f0b6120968482613c82565b9050836120a286611e1a565b1380156120d757507f00000000000000000000000000000000000000000000000000000000000000006120d58383612b53565b105b156120e4576120e4612706565b600354600160801b90046001600160801b031661212661104f82612110670de0b6b3a764000088613cbf565b6005546001600160801b031691908c600061276b565b600580546001600160801b0319166001600160801b03929092169190911790556121508882613be7565b905061215b81611b64565b600380546001600160801b03928316600160801b02921691909117905561218183611b64565b600280546001600160801b0319166001600160801b03929092169190911790556121aa82612d0c565b600480546001600160801b0319166001600160801b03929092169190911790556121d387611b64565b600280546010906121f5908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461223e9061104f906001600160801b03168484612d48565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916122ad916001600160801b031690613be7565b9050806000036122c15760019150506106e6565b60006122cc85612daf565b9050806000036122e1576001925050506106e6565b6000806122ef838589612e4b565b91509150806123055760009450505050506106e6565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612341929190613e29565b6040805180830381865af415801561235d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123819190613e9f565b9150915061239f61239182611e1a565b61239a90613ec3565b612fbf565b9250826123b557600096505050505050506106e6565b6123be82611b64565b600780546000906123d99084906001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061240681611b64565b60078054601090612428908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61248587613157565b6040518263ffffffff1660e01b81526004016124a19190613edf565b6040805180830381865af41580156124bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e19190613eee565b91509150806124f7575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161255d91613ac6565b6125679190613be7565b90508060000361257f57506000958695509350505050565b600080871161258f57600061259a565b61259a848884611aef565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156125ce576125ce613f1e565b6040519080825280601f01601f1916602001820160405280156125f8576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612619578692505b828152826000602083013e90999098509650505050505050565b600061265487878761264d88670de0b6b3a7640000613be7565b8787613291565b979650505050505050565b60006114f36126a061267984670de0b6b3a7640000613be7565b6114b4670de0b6b3a764000061268f818a612ccd565b6126999190613be7565b87906129e0565b6126b290670de0b6b3a7640000613ac6565b611fd084670de0b6b3a7640000613be7565b6000806126fb856126d3611b23565b6126dd9190613ac6565b600254610f1e908790600160801b90046001600160801b0316613be7565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006127328987896132b4565b90925090506127418289613be7565b9750600061275082888a611aef565b905061275c818b613be7565b9a989950979650505050505050565b60008260000361277c575084611b5b565b81156127cf576127ad61278f8487613ac6565b61279985876106ce565b6127a3888a6106ce565b611fd09190613ac6565b905060006127bb8588611b92565b9050808210156127c9578091505b50611b5b565b8285036127de57506000611b5b565b6128096127eb8487613be7565b6127f585876129e0565b6127ff888a6106ce565b611fd09190613be7565b9695505050505050565b600061283b600b6000612827600286611255565b815260200190815260200160002054611e1a565b61284d600b6000612827600187611255565b6106e69190613c82565b60006128837f0000000000000000000000000000000000000000000000000000000000000000836129e0565b60035461289991906001600160801b0316613ac6565b6002546128af906001600160801b0316846106ce565b101592915050565b60006106e6826004612262565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161291357504761299e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612977573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299b9190613d1e565b90505b600f546000036129af5760006114f6565b600f546114f69084908390611aef565b60006126548787876129d988670de0b6b3a7640000613be7565b8787613334565b60006106e38383670de0b6b3a7640000613345565b6000808080612a468786612a3f8b6114b4612a188c670de0b6b3a7640000613be7565b7f0000000000000000000000000000000000000000000000000000000000000000906129e0565b9190613345565b9350612a72847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91506000612a93612a8b89670de0b6b3a7640000613be7565b8a9088613345565b9050612abf817f00000000000000000000000000000000000000000000000000000000000000006129e0565b9350612aeb847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612af59084613ac6565b915050945094509450949050565b6000818311612b1257816106e3565b5090919050565b600080612b3184612b2b8a888a613345565b90612ccd565b9050611fe3888486613345565b60006106e383670de0b6b3a764000084611aef565b600080612b60848461336b565b909250905080612b7257612b72612706565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612bc8575047612c53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612c2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c509190613d1e565b90505b600f546114f690849083611aef565b600081600003612c7b5750670de0b6b3a76400006106e6565b82600003612c8b575060006106e6565b6000612c9683611e1a565b90506000612cab612ca686611e1a565b6133a7565b9050818102612cc2670de0b6b3a764000082613f34565b9050612809816135cd565b60006106e383670de0b6b3a764000084613345565b600060016001607f1b03821115611b8e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612d2a575060016001607f1b0382135b15611b8e5760405163a5353be560e01b815260040160405180910390fd5b600080612d56846000613762565b612d61846000613762565b612d6b9190613c82565b90506000811315612d8757612d808186613ac6565b9450612da6565b6000811215612da657612d9981613ec3565b612da39086613be7565b94505b50929392505050565b6003546000908190612dca906001600160801b031684612ccd565b9050612df67f000000000000000000000000000000000000000000000000000000000000000082613ac6565b6002546001600160801b03161115611ba1576002547f000000000000000000000000000000000000000000000000000000000000000090612e419083906001600160801b0316613be7565b6114f69190613be7565b612e5361399e565b600080612e5f84613157565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e9a9190613edf565b6040805180830381865af4158015612eb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eda9190613eee565b9350905082612eef57506000915061193d9050565b6000612f16612f118461016001518561014001516106ce90919063ffffffff16565b611e1a565b612f36612f118561012001518661010001516129e090919063ffffffff16565b612f409190613c82565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015613078573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061309c9190613f62565b9350935093509350806130b85750600098975050505050505050565b8684146130e9576130c884611b64565b600280546001600160801b0319166001600160801b03929092169190911790555b85831461311a576130f983612d0c565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146131485761312a82611b64565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61315f6139f0565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916132579116613771565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261328992900416613771565b905292915050565b6000806132a28888888888886137e7565b909250905080611ffd57611ffd612706565b6000806132fe856114b485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006132f4818c612ccd565b6114b49190613be7565b915061332a827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b6000806132a28888888888886138af565b600082600019048411830215820261335c57600080fd5b50910281810615159190040190565b60008060008361337a86611e1a565b6133849190613c82565b9050600081121561339c5760008092509250506106c7565b946001945092505050565b60008082136133c95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061344c9084901c611e1a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135e857506000919050565b680755bf798b4a1bf1e58212613611576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061280974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611e1a565b6000818313612b1257816106e3565b600080670de0b6b3a76400006137856106ec565b61378f9190613cbf565b905080831161379f5760006137a9565b6137a98184613be7565b91506114f66137e0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613cbf565b8390612b3e565b60008060006137f9898988888861396f565b905061381386611b5561380c8a8d613ac6565b87906106ce565b9850613820858a86611aef565b9850888110156138375760008092509250506138a4565b888103670de0b6b3a7640000811061386c5761386561385e670de0b6b3a764000089612ccd565b8290612c62565b9050613884565b61388161385e670de0b6b3a764000089612b3e565b90505b8089101561389a576000809350935050506138a4565b8803925060019150505b965096945050505050565b60008060006138c1898988888861396f565b90506138d186611b55898b613ac6565b9750878110156138e85760008092509250506138a4565b8781036138f6818688613345565b9050670de0b6b3a764000081106139235761391c61385e670de0b6b3a764000089612ccd565b905061393b565b61393861385e670de0b6b3a764000089612b3e565b90505b6139458186612ccd565b9050808a101561395d576000809350935050506138a4565b90980398600198509650505050505050565b600061397b8585612c62565b61399461398c86611b55868b6129e0565b859085613345565b6128099190613ac6565b6040518061012001604052806139b26139f0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613a6757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a9357600080fd5b850160608188031215613aa557600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106e6576106e6613ab0565b6001600160a01b03811681146105f657600080fd5b600060208284031215613b0057600080fd5b81356114f681613ad9565b80151581146105f657600080fd5b600060208284031215613b2b57600080fd5b81356114f681613b0b565b6000808335601e19843603018112613b4d57600080fd5b83018035915067ffffffffffffffff821115613b6857600080fd5b6020019150368190038213156106c757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613bda60c083018486613b7d565b9998505050505050505050565b818103818111156106e6576106e6613ab0565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613c3460e083018486613b7d565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612b7257612b72613ab0565b6001600160801b03818116838216019080821115612b7257612b72613ab0565b8181036000831280158383131683831282161715612b7257612b72613ab0565b600060208284031215613cb457600080fd5b81516114f681613ad9565b80820281158282048414176106e6576106e6613ab0565b6001600160801b03828116828216039080821115612b7257612b72613ab0565b8082018281126000831280158216821582161715613d1657613d16613ab0565b505092915050565b600060208284031215613d3057600080fd5b5051919050565b600060208284031215613d4957600080fd5b81516114f681613b0b565b634e487b7160e01b600052601260045260246000fd5b600082613d7957613d79613d54565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e6576106e6613ab0565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613e3d828551613dab565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613eb257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613ed857613ed8613ab0565b5060000390565b61018081016106e68284613dab565b60008060408385031215613f0157600080fd5b825191506020830151613f1381613b0b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613f4357613f43613d54565b600160ff1b821460001984141615613f5d57613f5d613ab0565b500590565b60008060008060808587031215613f7857600080fd5b8451935060208501519250604085015191506060850151613aa581613b0b56fea26469706673582212207a71f99251d5fa4e75796bfea6136f7a4837e1e6076631aa1484dd0a04a64a0964736f6c634300081600336102806040523480156200001257600080fd5b5060405162004483380380620044838339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613f7f620005046000396000505060005050600061134401526000818161030301528181610332015261035f01526000818160de015281816105a9015261176b01526000818161085601528181610941015281816109d401528181610add0152818161163c0152818161174501528181612474015281816124d701528181612db60152818161327901526132b501526000818161013f015281816108c601528181610ef20152818161150001528181611564015281816115ab0152818161171f01528181611c220152611cb5015260006120790152600081816121d4015261350e0152600081816110b601526121a8015260006134c40152600081816101810152818161091901528181610f13015281816114d001528181611534015281816115cc015261179101526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fee0152612d4c01526000818161029701528181610db101528181610e2c01528181610ea201528181610f6e0152610fa601526000505060008181610be501528181611a2001528181611a6901528181611afb01528181611b7c01528181611d2301528181611da401528181612fb101528181612ffa015281816130ac01526130f50152613f7f6000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c3660046139d2565b610066565b60405190815260200160405180910390f35b610041610061366004613a36565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c4f565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cae565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610cd4565b9150915060006101ed610da9565b90506101fd818360046001610dd5565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a9c565b611453565b61149d565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613aaf565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006116aa565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a9c565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613aaf565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103f1916001600160801b0390911690613aaf565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061042c908390613a9c565b9050600080600061043c8a6116d6565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613b40565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613b4f565b91506104ca6104c58c611810565b61183e565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613b40565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613b4f565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613aaf565b9190611864565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e611882565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613b7d565b8e611897565b61063a8961193f565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a9c565b9b5090508a158061073757506107348c600061194c565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611864565b610770565b60005b905061077f6020850185613b7d565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613ba8565b866107ca60408c018c613bc5565b6040516107dd9796959493929190613c0c565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c4f565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610cd4565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613c60565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613c77565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd8484611961565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e8585858960008061149d565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a6685611987565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846119b1565b600480546001600160801b0319166001600160801b0392909216919091179055610ab883611987565b600280546001600160801b03928316600160801b029216919091179055610b016000807f0000000000000000000000000000000000000000000000000000000000000000611897565b610b196000610b1360208c018c613b7d565b8a611897565b610b2e610b24610da9565b8760046001610dd5565b508a8a8a610b3f6020820182613b7d565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613ba8565b87610b8a6040890189613bc5565b604051610b9d9796959493929190613c0c565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c2f57503415155b15610c4d57604051631574f9f360e01b815260040160405180910390fd5b565b6000610c5e6020830183613b7d565b6001600160a01b031603610c855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610ca9916001600160801b0390911690600f0b611961565b905090565b600080610cbd878787866119ed565b9050610cc981856116aa565b979650505050505050565b81600080610ce86040850160208601613ba8565b15610d0d57610d0385610cfe6040870187613bc5565b611a04565b9093509050610d25565b5034610d2585610d206040870187613bc5565b611c98565b610d2d611e42565b91508015610da057604051600090339083908381818185875af1925050503d8060008114610d77576040519150601f19603f3d011682016040523d82523d6000602084013e610d7c565b606091505b5050905080610d9e576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610ca9427f0000000000000000000000000000000000000000000000000000000000000000611e55565b600084815260086020526040812060018101546001600160801b0316151580610dfd57504286115b15610e1657600101546001600160801b0316905061144b565b6000806000610e23610da9565b90506000610e517f00000000000000000000000000000000000000000000000000000000000000008b613a9c565b90505b81811015610ec7576000818152600860205260409020600101546001600160801b03168015610e9f576000828152600860205260409020549094506001600160801b03169250610ec7565b507f000000000000000000000000000000000000000000000000000000000000000001610e54565b83600003610f3a57889350610f37610edd610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ed565b92505b50610f4483611987565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f9a610f937f00000000000000000000000000000000000000000000000000000000000000008b613aaf565b8a84611e6b565b610fd889610fd2610fcb7f000000000000000000000000000000000000000000000000000000000000000083613a9c565b4290611fa9565b84611e6b565b610fe188611fb8565b50600090506008816110137f00000000000000000000000000000000000000000000000000000000000000008d613aaf565b815260208101919091526040016000908120600101546001600160801b0316915061103f60028c61215c565b6000818152600b60205260408120549192508c8c8315611185576001925060008061106e86898d866000612191565b9150915080600960008282546110849190613a9c565b909155506110a090508660008461109a81611810565b88612260565b6110aa8183613a9c565b91506110da86838a8e877f00000000000000000000000000000000000000000000000000000000000000006123da565b91506110ee6110e9838561241e565b612433565b6006805460029061110f9084906201000090046001600160701b0316613ca5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061113c82611987565b6006805460109061115e908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061119260018461215c565b6000818152600b602052604090205490915080156112a157600194506000806111bf838b8f886001612191565b9150915080600960008282546111d59190613a9c565b909155506111f19050836000846111eb81611810565b8a61245d565b6111fb8183613aaf565b915061120a6110e9838761241e565b6006805460029061122b9084906201000090046001600160701b0316613ca5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061125882611987565b6006805460109061127a908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112db576112cd6112b387611810565b6112bc83611810565b6112c69190613ce5565b600061264e565b8e6112d8848261268d565b50505b60006112e684612887565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c49190613d05565b90506001600160a01b03811615611439576114365a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906129d3565b50505b509b9d50505050505050505050505050505b949350505050565b600061147b600b600061146760028661215c565b815260200190815260200160002054611810565b61148d600b600061146760018761215c565b6114979190613ce5565b92915050565b6000806000806114ad8a8a612a60565b91509150806114c45760008093509350505061169f565b6000611524838a6114fd7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613aaf565b8b7f0000000000000000000000000000000000000000000000000000000000000000612a9c565b5090506000611588848b846115617f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613aaf565b8d7f0000000000000000000000000000000000000000000000000000000000000000612b59565b509050811580611596575080155b156115a2575060009050805b60006115f0858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119ed565b90506115fe83838c84612c17565b5090935060009050611610848f613a9c565b905060006116318b8b61162287611810565b61162c908e613d22565b612c63565b90508b6116666116617f000000000000000000000000000000000000000000000000000000000000000083612cca565b611810565b61166f83611810565b61167c611661868561241e565b6116869190613ce5565b6116909190613ce5565b60019950995050505050505050505b965096945050505050565b60006100916116be84846301e13380612cdb565b6116d085670de0b6b3a7640000613aaf565b90611882565b6116de61390d565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117d69116612d01565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261180892900416612d01565b905292915050565b60006001600160ff1b0382111561183a5760405163396ea70160e11b815260040160405180910390fd5b5090565b61184781612d70565b610c8557604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261187b57600080fd5b5091020490565b600061009183670de0b6b3a764000084611864565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906118c9908490613a9c565b90915550506000838152600b6020526040812080548392906118ec908490613a9c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061149782600461268d565b600081831361195b5782610091565b50919050565b60008061196e8484612a60565b90925090508061198057611980612f08565b5092915050565b60006001600160801b0382111561183a57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806119cf575060016001607f1b0382135b1561183a5760405163a5353be560e01b815260040160405180910390fd5b6000610078826119fe858888611864565b90612f21565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a54575047611adf565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ab8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611adc9190613b4f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611b5a5787341015611b49576040516312171d8360e31b815260040160405180910390fd5b611b538834613aaf565b9050611bf4565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf19190613d4a565b91505b81611c12576040516312171d8360e31b815260040160405180910390fd5b600f54600003611c5757611c46887f0000000000000000000000000000000000000000000000000000000000000000611882565b600f81905594509250611c90915050565b600f54600090611c69908a9086611864565b905080600f6000828254611c7d9190613a9c565b90915550909550909350611c9092505050565b935093915050565b6000611ca384612f96565b9050600f54600003611ce157611cd9817f0000000000000000000000000000000000000000000000000000000000000000611882565b600f55611d07565b6000611cec82613091565b905080600f6000828254611d009190613a9c565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d825782341015611d71576040516312171d8360e31b815260040160405180910390fd5b611d7b8334613aaf565b9050611e1c565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e199190613d4a565b91505b81611e3a576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610ca9670de0b6b3a7640000612f96565b6000611e618284613d7d565b6100919084613aaf565b600083815260086020526040902054600160801b90046001600160801b0316808303611e975750505050565b6000848152600860205260408120546001600160801b031690819003611ef157611ec083611987565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611f6f565b611f42611f3d670de0b6b3a7640000611f0a8886613aaf565b611f149190613c60565b85670de0b6b3a7640000611f28878a613aaf565b611f329190613c60565b85929190600161317a565b611987565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f7884611987565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161195b5782610091565b6006546000908190611fdb908490600160801b90046001600160801b031661241e565b6006546201000090046001600160701b031692509050818111156121575760006120058383613aaf565b9050612014611f3d8286613218565b60068054601090612036908490600160801b90046001600160801b0316613d91565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061206f858361188290919063ffffffff16565b9050600061209d827f000000000000000000000000000000000000000000000000000000000000000061241e565b905080600960008282546120b19190613a9c565b909155506120c190508183613aaf565b91506120cc82611987565b600280546000906120e79084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121148261322d565b60048054600090612129908490600f0b613db1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121865760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061219e8785611882565b915060006121cc837f000000000000000000000000000000000000000000000000000000000000000061241e565b90506121f8817f000000000000000000000000000000000000000000000000000000000000000061241e565b9150831561221b5761220a8282613aaf565b6122149084613aaf565b9250612232565b6122258282613aaf565b61222f9084613a9c565b92505b8686101561225557612245838789611864565b9250612252828789611864565b91505b509550959350505050565b600454600160801b90046001600160801b03166122a9611f3d8261228c670de0b6b3a764000086613c60565b600554600160801b90046001600160801b031691908a600061317a565b600580546001600160801b03928316600160801b0292169190911790556122cf86611987565b6122d99082613d91565b600480546001600160801b03928316600160801b0292169190911790556122ff84611987565b6002805460009061231a9084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612347836119b1565b6004805460009061235c908490600f0b613db1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061238c85611987565b600280546010906123ae908490600160801b90046001600160801b0316613d91565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806123ec846116d08a888a611864565b90506123f9888486611864565b6124039082613a9c565b9050868111156124135786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611864565b60006001600160701b0382111561183a5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061249f57507f000000000000000000000000000000000000000000000000000000000000000061249d8583613aaf565b105b156124ac576124ac612f08565b6004549084900390600f0b6124c18482613ce5565b9050836124cd86611810565b13801561250257507f00000000000000000000000000000000000000000000000000000000000000006125008383611961565b105b1561250f5761250f612f08565b600354600160801b90046001600160801b0316612551611f3d8261253b670de0b6b3a764000088613c60565b6005546001600160801b031691908c600061317a565b600580546001600160801b0319166001600160801b039290921691909117905561257b8882613aaf565b905061258681611987565b600380546001600160801b03928316600160801b0292169190911790556125ac83611987565b600280546001600160801b0319166001600160801b03929092169190911790556125d5826119b1565b600480546001600160801b0319166001600160801b03929092169190911790556125fe87611987565b60028054601090612620908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461266990611f3d906001600160801b03168484612c63565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916126d8916001600160801b031690613aaf565b9050806000036126ec576001915050611497565b60006126f785613257565b90508060000361270c57600192505050611497565b60008061271a8385896132f3565b9150915080612730576000945050505050611497565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161276c929190613dde565b6040805180830381865af4158015612788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127ac9190613e54565b915091506127ca6127bc82611810565b6127c590613e78565b612d70565b9250826127e05760009650505050505050611497565b6127e982611987565b600780546000906128049084906001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061283181611987565b60078054601090612853908490600160801b90046001600160801b0316613cc5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6128b0876116d6565b6040518263ffffffff1660e01b81526004016128cc9190613b40565b6040805180830381865af41580156128e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290c9190613e94565b9150915080612922575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161298891613a9c565b6129929190613aaf565b9050806000036129aa57506000958695509350505050565b60008087116129ba5760006129c5565b6129c5848884611864565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156129f9576129f9613ec4565b6040519080825280601f01601f191660200182016040528015612a23576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612a44578692505b828152826000602083013e9093509150505b9550959350505050565b600080600083612a6f86611810565b612a799190613ce5565b90506000811215612a91576000809250925050610da2565b946001945092505050565b6000806000612aae8888888888613462565b90506000612ad9670de0b6b3a7640000612ac88888613218565b612ad29190613a9c565b8390611882565b9050670de0b6b3a76400008110612b0d57612b06612aff670de0b6b3a764000089611882565b8290612f21565b9050612b25565b612b22612aff670de0b6b3a764000089613218565b90505b612b2f8186611882565b905088811015612b4757600080935093505050612a56565b97909703976001975095505050505050565b6000806000612b6b8989888888613491565b9050612b85866119fe612b7e8a8d613a9c565b879061241e565b9850612b92858a86611864565b985088811015612ba957600080925092505061169f565b888103670de0b6b3a76400008110612bd757612bd0612aff670de0b6b3a764000089613218565b9050612bef565b612bec612aff670de0b6b3a764000089611882565b90505b80891015612c055760008093509350505061169f565b90970398600198509650505050505050565b6000806000806000612c2a8987896134b6565b9092509050612c398289613aaf565b97506000612c4882888a611864565b9050612c54818b613aaf565b9a989950979650505050505050565b600080612c7184600061353c565b612c7c84600061353c565b612c869190613ce5565b90506000811315612ca257612c9b8186613a9c565b9450612cc1565b6000811215612cc157612cb481613e78565b612cbe9086613aaf565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612cf257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612d15610da9565b612d1f9190613c60565b9050808311612d2f576000612d39565b612d398184613aaf565b9150610091612ad2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c60565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e4d9190613eda565b935093509350935080612e695750600098975050505050505050565b868414612e9a57612e7984611987565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ecb57612eaa836119b1565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ef957612edb82611987565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612f3a5750670de0b6b3a7640000611497565b82600003612f4a57506000611497565b6000612f5583611810565b90506000612f6a612f6586611810565b613552565b9050818102612f81670de0b6b3a764000082613f1b565b9050612f8c81613778565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612fe5575047613070565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306d9190613b4f565b90505b600f54600003613081576000610091565b600f546100919084908390611864565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130e057504761316b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613144573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131689190613b4f565b90505b600f5461009190849083611864565b60008260000361318b575084610078565b81156131de576131bc61319e8487613a9c565b6131a8858761241e565b6131b2888a61241e565b6116d09190613a9c565b905060006131ca8588611fa9565b9050808210156131d8578091505b50610078565b8285036131ed57506000610078565b6100756131fa8487613aaf565b6132048587612cca565b61320e888a61241e565b6116d09190613aaf565b600061009183670de0b6b3a764000084612cdb565b600060016001607f1b0382111561183a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190613272906001600160801b031684613218565b905061329e7f000000000000000000000000000000000000000000000000000000000000000082613a9c565b6002546001600160801b0316111561195b576002547f0000000000000000000000000000000000000000000000000000000000000000906132e99083906001600160801b0316613aaf565b6100919190613aaf565b6132fb61396e565b600080613307846116d6565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016133429190613b40565b6040805180830381865af415801561335e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133829190613e94565b9350905082613397575060009150611c909050565b60006133b961166184610160015185610140015161241e90919063ffffffff16565b6133d9611661856101200151866101000151612cca90919063ffffffff16565b6133e39190613ce5565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600061346e8585612f21565b61348761347f866119fe868b61241e565b859085611864565b6100759190613a9c565b600061349d8585612f21565b6134876134ae866119fe868b612cca565b859085612cdb565b6000806135068561350085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006134f6818c613218565b6135009190613aaf565b90612cca565b9150613532827f000000000000000000000000000000000000000000000000000000000000000061241e565b9050935093915050565b600081831361354b5781610091565b5090919050565b60008082136135745760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135f79084901c611810565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361379357506000919050565b680755bf798b4a1bf1e582126137bc576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f8c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611810565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061398261390d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561195b57600080fd5b600080600080600060a086880312156139ea57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613a1d57600080fd5b613a29888289016139c0565b9150509295509295909350565b600080600060608486031215613a4b57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613a7057600080fd5b613a7c868287016139c0565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561149757611497613a86565b8181038181111561149757611497613a86565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016114978284613ac2565b600060208284031215613b6157600080fd5b5051919050565b6001600160a01b0381168114610c8557600080fd5b600060208284031215613b8f57600080fd5b813561009181613b68565b8015158114610c8557600080fd5b600060208284031215613bba57600080fd5b813561009181613b9a565b6000808335601e19843603018112613bdc57600080fd5b83018035915067ffffffffffffffff821115613bf757600080fd5b602001915036819003821315610da257600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761149757611497613a86565b600080600060608486031215613c8c57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561198057611980613a86565b6001600160801b0381811683821601908082111561198057611980613a86565b818103600083128015838313168383128216171561198057611980613a86565b600060208284031215613d1757600080fd5b815161009181613b68565b8082018281126000831280158216821582161715613d4257613d42613a86565b505092915050565b600060208284031215613d5c57600080fd5b815161009181613b9a565b634e487b7160e01b600052601260045260246000fd5b600082613d8c57613d8c613d67565b500690565b6001600160801b0382811682821603908082111561198057611980613a86565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561149757611497613a86565b60006102a082019050613df2828551613ac2565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613e6757600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e8d57613e8d613a86565b5060000390565b60008060408385031215613ea757600080fd5b825191506020830151613eb981613b9a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613ef057600080fd5b8451935060208501519250604085015191506060850151613f1081613b9a565b939692955090935050565b600082613f2a57613f2a613d67565b600160ff1b821460001984141615613f4457613f44613a86565b50059056fea26469706673582212208fe535d4724c34a0af34b5c4668028f92a3efc21decb7a6e108667d20130fee964736f6c634300081600336102806040523480156200001257600080fd5b5060405162003661380380620036618339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161322d62000434600039600050506000505060006109c10152600050506000818161026d015261205401526000818161189a015281816118fd01528181611c3901528181611c7501528181611e6d015261202e01526000818161056f01526120080152600061146f015260006115ca015260008181610733015261159e01526000505060008181610590015261207a01526000818161066b01526127cc0152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260005050600081816110ef015281816111380152818161235d015281816123a6015281816124810152818161252d0152818161261901526126c5015261322d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612cba565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612d11565b6100b5565b005b610059610095366004612cba565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610ad0565b90935091506101266020850185612d48565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612d73565b61017160408c018c612d90565b60405161018396959493929190612e00565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610c13565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612e50565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610e0e565b6102eb600360f81b6102e56020870187612d48565b88610ee8565b60006103066102fd6020870187612d48565b88848989610ad0565b90945090506103158188612e7a565b9250600061032283610f88565b5090506103326020870187612d48565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612d73565b8a888e80604001906103829190612d90565b604051610396989796959493929190612e8d565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612d48565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a76400006110d4565b905090565b6000610421427f00000000000000000000000000000000000000000000000000000000000000006111d6565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610ac8565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612ed5565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6111ec565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061120d565b92505b506105c18361122d565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612e7a565b8a8461125b565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612ed5565b4290611399565b8461125b565b61065e886113ae565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612e7a565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c611552565b6000818152600b60205260408120549192508c8c831561080257600192506000806106eb86898d866000611587565b9150915080600960008282546107019190612ed5565b9091555061071d90508660008461071781611656565b88611680565b6107278183612ed5565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006117fa565b915061076b6107668385611844565b611859565b6006805460029061078c9084906201000090046001600160701b0316612ee8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b98261122d565b600680546010906107db908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f600184611552565b6000818152600b6020526040902054909150801561091e576001945060008061083c838b8f886001611587565b9150915080600960008282546108529190612ed5565b9091555061086e90508360008461086881611656565b8a611883565b6108788183612e7a565b91506108876107668387611844565b600680546002906108a89084906201000090046001600160701b0316612ee8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d58261122d565b600680546010906108f7908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611656565b61093983611656565b6109439190612f28565b6000611a74565b8e6109558482610c13565b50505b600061096384610f88565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190612f48565b90506001600160a01b03811615610ab657610ab35a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611ab3565b50505b509b9d50505050505050505050505050505b949350505050565b600080610adc85611b3e565b505060075485906001600160801b031680821115610b0157806001600160801b031691505b81600003610b16576000809250925050610c09565b610b25600360f81b8984610e0e565b600754600090610b4b9084906001600160801b03600160801b9091048116908516611b4b565b9050610b568361122d565b610b609083612f65565b600780546001600160801b0319166001600160801b0392909216919091179055610b898161122d565b60078054601090610bab908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bda818887611b69565b9350610be68684611c02565b841015610c065760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c5e916001600160801b031690612e7a565b905080600003610c72576001915050610e08565b6000610c7d85611c17565b905080600003610c9257600192505050610e08565b600080610ca0838589611cb3565b9150915080610cb6576000945050505050610e08565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cf2929190613003565b6040805180830381865af4158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d329190613079565b91509150610d50610d4282611656565b610d4b9061309d565b611e27565b925082610d665760009650505050505050610e08565b610d6f8261122d565b60078054600090610d8a9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610db78161122d565b60078054601090610dd9908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5157604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e94908490612e7a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290610f1a908490612ed5565b90915550506000838152600b602052604081208054839290610f3d908490612ed5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610edb565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb187611fbf565b6040518263ffffffff1660e01b8152600401610fcd91906130b9565b6040805180830381865af4158015610fe9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100d91906130c8565b9150915080611023575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108991612ed5565b6110939190612e7a565b9050806000036110ab57506000958695509350505050565b60008087116110bb5760006110c6565b6110c6848884611b4b565b976001975095505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016111235750476111ae565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ab91906130f8565b90505b600f546000036111bf5760006111cf565b600f546111cf9084908390611b4b565b9392505050565b60006111e28284612e50565b6111cf9084612e7a565b600254600454600091610421916001600160801b0390911690600f0b6120f9565b60006112248261121e858888611b4b565b9061211f565b95945050505050565b60006001600160801b0382111561125757604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112875750505050565b6000848152600860205260408120546001600160801b0316908190036112e1576112b08361122d565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561135f565b61133261132d670de0b6b3a76400006112fa8886612e7a565b6113049190613111565b85670de0b6b3a7640000611318878a612e7a565b6113229190613111565b859291906001612194565b61122d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6113688461122d565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113a857826111cf565b50919050565b60065460009081906113d1908490600160801b90046001600160801b0316611844565b6006546201000090046001600160701b0316925090508181111561154d5760006113fb8383612e7a565b905061140a61132d8286612232565b6006805460109061142c908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611465858361224790919063ffffffff16565b90506000611493827f0000000000000000000000000000000000000000000000000000000000000000611844565b905080600960008282546114a79190612ed5565b909155506114b790508183612e7a565b91506114c28261122d565b600280546000906114dd9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061150a8261225c565b6004805460009061151f908490600f0b613128565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561157c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806115948785612247565b915060006115c2837f0000000000000000000000000000000000000000000000000000000000000000611844565b90506115ee817f0000000000000000000000000000000000000000000000000000000000000000611844565b91508315611611576116008282612e7a565b61160a9084612e7a565b9250611628565b61161b8282612e7a565b6116259084612ed5565b92505b8686101561164b5761163b838789611b4b565b9250611648828789611b4b565b91505b509550959350505050565b60006001600160ff1b038211156112575760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116c961132d826116ac670de0b6b3a764000086613111565b600554600160801b90046001600160801b031691908a6000612194565b600580546001600160801b03928316600160801b0292169190911790556116ef8661122d565b6116f99082612f65565b600480546001600160801b03928316600160801b02921691909117905561171f8461122d565b6002805460009061173a9084906001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061176783612286565b6004805460009061177c908490600f0b613128565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506117ac8561122d565b600280546010906117ce908490600160801b90046001600160801b0316612f65565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806118128461180c8a888a611b4b565b90612247565b905061181f888486611b4b565b6118299082612ed5565b9050868111156118395786810391505b509695505050505050565b60006111cf8383670de0b6b3a7640000611b4b565b60006001600160701b038211156112575760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806118c557507f00000000000000000000000000000000000000000000000000000000000000006118c38583612e7a565b105b156118d2576118d26122c2565b6004549084900390600f0b6118e78482612f28565b9050836118f386611656565b13801561192857507f000000000000000000000000000000000000000000000000000000000000000061192683836120f9565b105b15611935576119356122c2565b600354600160801b90046001600160801b031661197761132d82611961670de0b6b3a764000088613111565b6005546001600160801b031691908c6000612194565b600580546001600160801b0319166001600160801b03929092169190911790556119a18882612e7a565b90506119ac8161122d565b600380546001600160801b03928316600160801b0292169190911790556119d28361122d565b600280546001600160801b0319166001600160801b03929092169190911790556119fb82612286565b600480546001600160801b0319166001600160801b0392909216919091179055611a248761122d565b60028054601090611a46908490600160801b90046001600160801b0316612f08565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a8f9061132d906001600160801b031684846122db565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611ad957611ad9613155565b6040519080825280601f01601f191660200182016040528015611b03576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611b24578692505b828152826000602083013e90999098509650505050505050565b6000610e08826004610c13565b6000826000190484118302158202611b6257600080fd5b5091020490565b600080611b768585611844565b9050611b8181612342565b945084600003611b955760009150506111cf565b849150611ba86040840160208501612d73565b15611bd757611bd085611bbe6020860186612d48565b611bcb6040870187612d90565b61242b565b9150611bfa565b611bfa85611be86020860186612d48565b611bf56040870187612d90565b6125c5565b509392505050565b60006111cf8383670de0b6b3a764000061275b565b6003546000908190611c32906001600160801b031684612232565b9050611c5e7f000000000000000000000000000000000000000000000000000000000000000082612ed5565b6002546001600160801b031611156113a8576002547f000000000000000000000000000000000000000000000000000000000000000090611ca99083906001600160801b0316612e7a565b6111cf9190612e7a565b611cbb612c07565b600080611cc784611fbf565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611d0291906130b9565b6040805180830381865af4158015611d1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4291906130c8565b9350905082611d575750600091506100ad9050565b6000611d7e611d7984610160015185610140015161184490919063ffffffff16565b611656565b611d9e611d79856101200151866101000151611c0290919063ffffffff16565b611da89190612f28565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ee0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f04919061316b565b935093509350935080611f205750600098975050505050505050565b868414611f5157611f308461122d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f8257611f6183612286565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611fb057611f928261122d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611fc7612c59565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916120bf9116612781565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120f192900416612781565b905292915050565b60008061210684846127f7565b909250905080612118576121186122c2565b5092915050565b6000816000036121385750670de0b6b3a7640000610e08565b8260000361214857506000610e08565b600061215383611656565b9050600061216861216386611656565b612836565b905081810261217f670de0b6b3a7640000826131ac565b905061218a81612a5c565b9695505050505050565b6000826000036121a5575084611224565b81156121f8576121d66121b88487612ed5565b6121c28587611844565b6121cc888a611844565b61180c9190612ed5565b905060006121e48588611399565b9050808210156121f2578091505b50611224565b82850361220757506000611224565b61218a6122148487612e7a565b61221e8587611c02565b612228888a611844565b61180c9190612e7a565b60006111cf83670de0b6b3a76400008461275b565b60006111cf83670de0b6b3a764000084611b4b565b600060016001607f1b038211156112575760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806122a4575060016001607f1b0382135b156112575760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122e9846000612bf1565b6122f4846000612bf1565b6122fe9190612f28565b9050600081131561231a576123138186612ed5565b9450612339565b60008112156123395761232c8161309d565b6123369086612e7a565b94505b50929392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161239157504761241c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156123f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061241991906130f8565b90505b600f546111cf90849083611b4b565b6000600f54851161243c5784612440565b600f545b9450600061244d866110d4565b905085600f60008282546124619190612e7a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612507576040516001600160a01b038716908390600081818185875af1925050503d80600081146124f7576040519150601f19603f3d011682016040523d82523d6000602084013e6124fc565b606091505b50508091505061259d565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061259a91906131da565b90505b806125bb576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f5484116125d457836125d8565b600f545b935060006125e5856110d4565b905084600f60008282546125f99190612e7a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161269f576040516001600160a01b038616908390600081818185875af1925050503d806000811461268f576040519150601f19603f3d011682016040523d82523d6000602084013e612694565b606091505b505080915050612735565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561270e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273291906131da565b90505b80612753576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600082600019048411830215820261277257600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612795610426565b61279f9190613111565b90508083116127af5760006127b9565b6127b98184612e7a565b91506111cf6127f0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613111565b8390612247565b60008060008361280686611656565b6128109190612f28565b9050600081121561282857600080925092505061282f565b9150600190505b9250929050565b60008082136128585760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906128db9084901c611656565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612a7757506000919050565b680755bf798b4a1bf1e58212612aa0576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061218a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611656565b6000818313612c0057816111cf565b5090919050565b604051806101200160405280612c1b612c59565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612ccf57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612cf457600080fd5b840160608187031215612d0657600080fd5b809150509250925092565b60008060408385031215612d2457600080fd5b50508035926020909101359150565b6001600160a01b038116811461040b57600080fd5b600060208284031215612d5a57600080fd5b81356111cf81612d33565b801515811461040b57600080fd5b600060208284031215612d8557600080fd5b81356111cf81612d65565b6000808335601e19843603018112612da757600080fd5b83018035915067ffffffffffffffff821115612dc257600080fd5b60200191503681900382131561282f57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612e2e60a083018486612dd7565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612e5f57612e5f612e3a565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0857610e08612e64565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612ec760e083018486612dd7565b9a9950505050505050505050565b80820180821115610e0857610e08612e64565b6001600160701b0381811683821601908082111561211857612118612e64565b6001600160801b0381811683821601908082111561211857612118612e64565b818103600083128015838313168383128216171561211857612118612e64565b600060208284031215612f5a57600080fd5b81516111cf81612d33565b6001600160801b0382811682821603908082111561211857612118612e64565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613017828551612f85565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561308c57600080fd5b505080516020909101519092909150565b6000600160ff1b82016130b2576130b2612e64565b5060000390565b6101808101610e088284612f85565b600080604083850312156130db57600080fd5b8251915060208301516130ed81612d65565b809150509250929050565b60006020828403121561310a57600080fd5b5051919050565b8082028115828204841417610e0857610e08612e64565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0857610e08612e64565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561318157600080fd5b84519350602085015192506040850151915060608501516131a181612d65565b939692955090935050565b6000826131bb576131bb612e3a565b600160ff1b8214600019841416156131d5576131d5612e64565b500590565b6000602082840312156131ec57600080fd5b81516111cf81612d6556fea264697066735822122048a85ade144bfa6998fe91d86a11a4fc7e53cc31fad1bfdb0fc9c60526543c0e64736f6c63430008160033',
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
        "setGovernance(address)": "ab033ea9",
        "setLongExposure(uint128)": "b4f8da39",
        "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": "f45cf2e0",
        "setPauser(address,bool)": "7180c8ca",
        "setReserves(uint128,uint128)": "702db0eb",
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
