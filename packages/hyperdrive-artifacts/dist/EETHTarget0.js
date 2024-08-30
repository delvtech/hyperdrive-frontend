export const EETHTarget0 = {
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
                },
                {
                    "name": "_liquidityPool",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "_liquidityPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "adminController",
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
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
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
            "name": "baseToken",
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
            "name": "batchTransferFrom",
            "inputs": [
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
                    "name": "ids",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "values",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "collectGovernanceFee",
            "inputs": [
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
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
                {
                    "name": "_shareAmount",
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
            "name": "convertToShares",
            "inputs": [
                {
                    "name": "_baseAmount",
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
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "getCheckpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Checkpoint",
                    "components": [
                        {
                            "name": "weightedSpotPrice",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "lastWeightedSpotPriceUpdateTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getCheckpointExposure",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getMarketState",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPoolConfig",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPoolInfo",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolInfo",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "zombieBaseProceeds",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "zombieShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longAverageMaturityTime",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortAverageMaturityTime",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesReadyToWithdraw",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesProceeds",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUncollectedGovernanceFees",
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
            "name": "getWithdrawPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.WithdrawPool",
                    "components": [
                        {
                            "name": "readyToWithdraw",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "proceeds",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isPauser",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "kind",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "liquidityPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "load",
            "inputs": [
                {
                    "name": "_slots",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]",
                    "internalType": "bytes32[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
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
            "name": "pause",
            "inputs": [
                {
                    "name": "_status",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "perTokenApprovals",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
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
            "name": "permitForAll",
            "inputs": [
                {
                    "name": "domainSeparator",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "permitTypeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
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
            "name": "setApproval",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "operator",
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
            "name": "setApprovalBridge",
            "inputs": [
                {
                    "name": "tokenID",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "operator",
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
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
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
            "name": "sweep",
            "inputs": [
                {
                    "name": "_target",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "totalShares",
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
            "name": "totalSupply",
            "inputs": [
                {
                    "name": "tokenId",
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
            "name": "transferFrom",
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
            "name": "vaultSharesToken",
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
            "name": "version",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "pure"
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
            "name": "BatchInputLengthMismatch",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpiredDeadline",
            "inputs": []
        },
        {
            "type": "error",
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidERC20Bridge",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFeeDestination",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSignature",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTimestamp",
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
            "name": "ReturnData",
            "inputs": [
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ]
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
            "name": "SweepFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b5060405162004016380380620040168339810160408190526200003591620001b5565b600160005582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519092015190915280516040908101516101605290516060908101516101805290850151821661024052909301516102605290821661022052166102805262000305565b60405161020081016001600160401b03811182821017156200011d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013b57600080fd5b919050565b6000608082840312156200015357600080fd5b604051608081016001600160401b03811182821017156200018457634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008385036102a0811215620001cd57600080fd5b61026080821215620001de57600080fd5b620001e8620000eb565b9150620001f58662000123565b8252620002056020870162000123565b6020830152620002186040870162000123565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e08301526101008087015181840152506101208087015181840152506101408087015181840152506101606200028381880162000123565b908301526101806200029787820162000123565b908301526101a0620002ab87820162000123565b908301526101c0620002bf87820162000123565b908301526101e0620002d48888830162000140565b8184015250819450620002e981870162000123565b93505050620002fc610280850162000123565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613b84620004926000396000818161030b01528181610bc70152818161261e015261266b015260008181610d880152612395015260008181610d590152612358015260008181610c3301528181610eb801528181610f4801528181610fd801528181611068015281816116830152818161171b015281816118e401528181611f0f01528181611fe5015261213c01526000610e20015260008181610dfa0152612548015260008181610dd40152612522015260008181610dae01526124fc015260006111750152600061114f0152600061112901526000611103015260008181610e92015261256e015260008181610e460152818161130a0152612940015260008181610e6c0152612cdf01526000818161065501528181610d2a01528181611e800152818161263f0152818161268c0152612c4a015260008181610cfb01526112a30152613b846000f3fe608060405234801561001057600080fd5b50600436106102475760003560e01c806360246c881161013b578063bd85b039116100b8578063cf210e651161007c578063cf210e651461052b578063d81657431461053e578063e44808bc14610553578063e985e9c514610566578063fba560081461057957600080fd5b8063bd85b039146104d5578063becee9c3146104e8578063c55dae6314610508578063c69e16ad14610510578063c6e6f5921461051857600080fd5b80639cd241af116100ff5780639cd241af14610476578063a22cb46514610489578063ab033ea91461049c578063b0d96580146104ad578063b88fed9f146104c257600080fd5b806360246c881461042c578063665a11ca146104415780637180c8ca146104495780637ecebe001461045b578063950c5d031461046e57600080fd5b806320fc4881116101c95780633e691db91161018d5780633e691db9146103c857806346fbf68e146103db5780634e41a1fb146103fe5780634ed2d6ac1461041157806354fd4d501461042457600080fd5b806320fc48811461032d57806321ff32a914610372578063313ce567146103935780633656eec2146103ad5780633a98ef39146103c057600080fd5b80630a4e1493116102105780630a4e1493146102ad57806314e5f07b146102cd57806317fad7fc146102e05780631c0f12b6146102f3578063207deba01461030657600080fd5b8062ad800c1461024c57806301681a621461027557806302329a291461028a57806304baa00b1461029d57806306fdde03146102a5575b600080fd5b61025f61025a366004612f30565b6105a8565b60405161026c9190612f99565b60405180910390f35b610288610283366004612fc1565b6105df565b005b610288610298366004612fec565b6105e8565b61025f6105f1565b61025f610630565b6102b5610647565b6040516001600160a01b03909116815260200161026c565b6102886102db366004613009565b610687565b6102886102ee3660046130ea565b6106a3565b61028861030136600461317f565b6106b9565b6102b57f000000000000000000000000000000000000000000000000000000000000000081565b61034061033b366004612f30565b6106cc565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161026c565b6103856103803660046131c7565b610738565b60405190815260200161026c565b61039b61077e565b60405160ff909116815260200161026c565b6103856103bb366004613209565b610796565b6103856107cf565b6103856103d6366004613239565b6107ee565b6103ee6103e9366004612fc1565b6107f9565b604051901515815260200161026c565b61025f61040c366004612f30565b610819565b61028861041f366004613274565b610827565b61025f610875565b6104346108aa565b60405161026c91906132be565b6102b5610bb9565b61028861045736600461335f565b5050565b610385610469366004612fc1565b610bf9565b6102b5610c25565b61028861048436600461338d565b610c65565b61028861049736600461335f565b610c76565b6102886104aa366004612fc1565b50565b6104b5610ce2565b60405161026c91906133c5565b6103856104d0366004612f30565b6111aa565b6103856104e3366004612f30565b6111b8565b6104fb6104f63660046134eb565b6111da565b60405161026c919061352d565b6102b5611295565b6103856112d5565b610385610526366004612f30565b6112ef565b610385610539366004612f30565b6112fd565b610546611334565b60405161026c9190613571565b610288610561366004613682565b611440565b6103ee6105743660046136e1565b611488565b6105816114cc565b6040805182516001600160801b03908116825260209384015116928101929092520161026c565b60606105da6105b68361152b565b6040516020016105c69190612f99565b604051602081830303815290604052611653565b919050565b6104aa81611677565b6104aa816118e2565b606061062d6040518060400160405280600e81526020016d454554484879706572647269766560901b8152506040516020016105c69190612f99565b90565b606061062d60016040516020016105c6919061370f565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c6565b6106988989898989898989896119fc565b505050505050505050565b6106b1868686868686611bf3565b505050505050565b6106c68484848433611ca7565b50505050565b60408051606081018252600080825260208201819052918101919091526105da600860008481526020019081526020016000206040516020016105c6919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b6000838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261077791016105c6565b9392505050565b604080516012602082015260009161062d91016105c6565b6000828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107c991016105c6565b92915050565b600061062d6107dc611e68565b6040516020016105c691815260200190565b60006107c982611ef8565b60006105da61080783612137565b604080519115156020830152016105c6565b60606105da6105b68361221c565b836108318161231a565b6001600160a01b0316336001600160a01b03161461086257604051632aab8bd360e01b815260040160405180910390fd5b61086e858585856123d7565b5050505050565b606061062d604051806040016040528060078152602001660ec625c605c62760cb1b8152506040516020016105c69190612f99565b610923604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061092d612444565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b039092169161099891906137ec565b6109a291906137ff565b905060008215610ab45773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109cf85612457565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa49190613812565b509050610ab181846125ed565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201526000906101a081018415610b8557610b808486612602565b610b88565b60005b81526003546001600160801b0316602091820152604051919250610bb2916105c6918491016132be565b5050505090565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c6565b6001600160a01b0381166000908152600e60209081526040808320548151928301526105da91016105c6565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c6565b610c71838383336123d7565b505050565b336000818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cea612e49565b61062d6040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f389190613842565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc89190613842565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611034573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110589190613842565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e89190613842565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016105c691906133c5565b60006105da6107dc83612617565b6000818152600b60209081526040808320548151928301526105da91016105c6565b606060008267ffffffffffffffff8111156111f7576111f761385f565b604051908082528060200260200182016040528015611220578160200160208202803683370190505b50905060005b8381101561127957600085858381811061124257611242613875565b9050602002013590506000815490508084848151811061126457611264613875565b60209081029190910101525050600101611226565b5061128e816040516020016105c6919061352d565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161062d91016105c6565b600061062d6009546040516020016105c691815260200190565b60006105da6107dc83612664565b60006105da6107dc61132f7f0000000000000000000000000000000000000000000000000000000000000000856137ec565b6126b1565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261062d60026040516020016105c6919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461144a8161231a565b6001600160a01b0316336001600160a01b03161461147b57604051632aab8bd360e01b815260040160405180910390fd5b6106b18686868686611ca7565b6001600160a01b038281166000908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107c991016105c6565b60408051808201909152600080825260208201526040805180820182526007546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261062d906060016105c6565b606060f882901c6001600160f81b0383166000611547826126f5565b9050600083600381111561155d5761155d6137c0565b0361158f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061164b565b60018360038111156115a3576115a36137c0565b036115cf57806040516020016115b9919061388b565b604051602081830303815290604052935061164b565b60028360038111156115e3576115e36137c0565b036115f957806040516020016115b991906138c4565b600383600381111561160d5761160d6137c0565b0361164b576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161166e9190612f99565b60405180910390fd5b61167f6127aa565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117039190613842565b9050336001600160a01b038216148015906117b157507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179b9190613842565b6001600160a01b0316336001600160a01b031614155b80156117c357506117c133612137565b155b156117e0576040516282b42960e81b815260040160405180910390fd5b60006117ea611e68565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611834573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185891906138fe565b905061186e6001600160a01b03851684836127d4565b81611877611e68565b14611895576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104aa6001600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611940573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119649190613842565b6001600160a01b0316336001600160a01b03161415801561198b575061198933612137565b155b156119a8576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119f190831515815260200190565b60405180910390a150565b83421115611a1d5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a445760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b32573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b7057604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981166000818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c1057506001600160a01b038516155b15611c2e5760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c4e5760405163174861a760e31b815260040160405180910390fd5b60005b83811015611c9e57611c96858583818110611c6e57611c6e613875565b905060200201358888868686818110611c8957611c89613875565b9050602002013533611ca7565b600101611c51565b50505050505050565b6001600160a01b0384161580611cc457506001600160a01b038316155b15611ce25760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611da6576001600160a01b038085166000908152600c602090815260408083209385168352929052205460ff16611da6576000858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611da4576000868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d9e9084906137ff565b90915550505b505b6000858152600a602090815260408083206001600160a01b038816845290915281208054849290611dd89084906137ff565b90915550506000858152600a602090815260408083206001600160a01b038716845290915281208054849290611e0f9084906137ec565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ecf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef391906138fe565b905090565b6000611f026127aa565b611f0b82612826565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8f9190613842565b90506001600160a01b038116611fa86020850185612fc1565b6001600160a01b031614611fcf57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061207b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612041573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120659190613842565b6001600160a01b0316336001600160a01b031614155b801561208d575061208b33612137565b155b156120aa576040516282b42960e81b815260040160405180910390fd5b60006120b4612444565b6009805460009091559091506120cb81838761285c565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461210a60408a0160208b01612fec565b60408051938452602084019290925215159082015260600160405180910390a25050506105da6001600055565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612198573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121c09190810190613917565b905060005b815181101561221257836001600160a01b03168282815181106121ea576121ea613875565b60200260200101516001600160a01b03160361220a575060019392505050565b6001016121c5565b5060009392505050565b606060f882901c6001600160f81b0383166000612238826126f5565b9050600083600381111561224e5761224e6137c0565b03612280576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061164b565b6001836003811115612294576122946137c0565b036122aa57806040516020016115b991906139dc565b60028360038111156122be576122be6137c0565b036122d457806040516020016115b99190613a14565b60038360038111156122e8576122e86137c0565b0361164b57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611ef3670de0b6b3a7640000612617565b6124bb6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125b391166128f5565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926125e5929004166128f5565b905292915050565b60006107778383670de0b6b3a764000061296b565b600061077783670de0b6b3a76400008461296b565b60006107c97f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612989565b60006107c97f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612a78565b60006126d9600b60006126c5600286612b32565b815260200190815260200160002054612b67565b6126eb600b60006126c5600187612b32565b6107c99190613a40565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561279c57612730600a86613a76565b61273b9060306137ec565b60f81b82600161274b84876137ff565b61275591906137ff565b8151811061276557612765613875565b60200101906001600160f81b031916908160001a9053508061278681613a8a565b91506127959050600a86613aa3565b945061271f565b918290030190815292915050565b6002600054036127cd57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c71908490612b95565b60006128356020830183612fc1565b6001600160a01b0316036104aa5760405163f0dd15fd60e01b815260040160405180910390fd5b60008061286985856125ed565b905061287481612664565b945084600003612888576000915050610777565b84915061289b6040840160208501612fec565b156128ca576128c3856128b16020860186612fc1565b6128be6040870187613ab7565b612bf8565b91506128ed565b6128ed856128db6020860186612fc1565b6128e86040870187613ab7565b612c13565b509392505050565b600080670de0b6b3a7640000612909612cd7565b6129139190613afe565b905080831161292357600061292d565b61292d81846137ff565b9150610777612964670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613afe565b8390612602565b600082600019048411830215820261298257600080fd5b5091020490565b600080836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129ee91906138fe565b905080600003612a02576000915050610777565b612a6f856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6791906138fe565b84908361296b565b95945050505050565b600080846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612add91906138fe565b905080600003612af1576000915050610777565b612a6f846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a43573d6000803e3d6000fd5b60006001600160f81b03821115612b5c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b03821115612b915760405163396ea70160e11b815260040160405180910390fd5b5090565b6000612baa6001600160a01b03841683612d03565b90508051600014158015612bcf575080806020019051810190612bcd9190613b15565b155b15610c7157604051635274afe760e01b81526001600160a01b038416600482015260240161166e565b600060405163350b944160e11b815260040160405180910390fd5b6000612c1e85612617565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb79190613b15565b9050806106b1576040516312171d8360e31b815260040160405180910390fd5b6000611ef3427f0000000000000000000000000000000000000000000000000000000000000000612d11565b606061077783836000612d27565b6000612d1d8284613a76565b61077790846137ff565b606081471015612d4c5760405163cd78605960e01b815230600482015260240161166e565b600080856001600160a01b03168486604051612d689190613b32565b60006040518083038185875af1925050503d8060008114612da5576040519150601f19603f3d011682016040523d82523d6000602084013e612daa565b606091505b5091509150612dba868383612dc4565b9695505050505050565b606082612dd957612dd482612e20565b610777565b8151158015612df057506001600160a01b0384163b155b15612e1957604051639996b31560e01b81526001600160a01b038516600482015260240161166e565b5080610777565b805115612e305780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612f2b6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612f4257600080fd5b5035919050565b60005b83811015612f64578181015183820152602001612f4c565b50506000910152565b60008151808452612f85816020860160208601612f49565b601f01601f19169290920160200192915050565b6020815260006107776020830184612f6d565b6001600160a01b03811681146104aa57600080fd5b600060208284031215612fd357600080fd5b813561077781612fac565b80151581146104aa57600080fd5b600060208284031215612ffe57600080fd5b813561077781612fde565b60008060008060008060008060006101208a8c03121561302857600080fd5b8935985060208a0135975060408a013561304181612fac565b965060608a013561305181612fac565b955060808a013561306181612fde565b945060a08a0135935060c08a013560ff8116811461307e57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126130b057600080fd5b50813567ffffffffffffffff8111156130c857600080fd5b6020830191508360208260051b85010111156130e357600080fd5b9250929050565b6000806000806000806080878903121561310357600080fd5b863561310e81612fac565b9550602087013561311e81612fac565b9450604087013567ffffffffffffffff8082111561313b57600080fd5b6131478a838b0161309e565b9096509450606089013591508082111561316057600080fd5b5061316d89828a0161309e565b979a9699509497509295939492505050565b6000806000806080858703121561319557600080fd5b8435935060208501356131a781612fac565b925060408501356131b781612fac565b9396929550929360600135925050565b6000806000606084860312156131dc57600080fd5b8335925060208401356131ee81612fac565b915060408401356131fe81612fac565b809150509250925092565b6000806040838503121561321c57600080fd5b82359150602083013561322e81612fac565b809150509250929050565b60006020828403121561324b57600080fd5b813567ffffffffffffffff81111561326257600080fd5b82016060818503121561077757600080fd5b6000806000806080858703121561328a57600080fd5b84359350602085013561329c81612fac565b92506040850135915060608501356132b381612fac565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561337257600080fd5b823561337d81612fac565b9150602083013561322e81612fde565b6000806000606084860312156133a257600080fd5b8335925060208401356133b481612fac565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516133f160208401826001600160a01b03169052565b50604083015161340c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161347e828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b600080602083850312156134fe57600080fd5b823567ffffffffffffffff81111561351557600080fd5b6135218582860161309e565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561356557835183529284019291840191600101613549565b50909695505050505050565b81516001600160801b031681526101808101602083015161359d60208401826001600160801b03169052565b5060408301516135b860408401826001600160801b03169052565b5060608301516135d360608401826001600160801b03169052565b5060808301516135e86080840182600f0b9052565b5060a083015161360360a08401826001600160801b03169052565b5060c083015161361e60c08401826001600160801b03169052565b5060e083015161363960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526134e3565b600080600080600060a0868803121561369a57600080fd5b8535945060208601356136ac81612fac565b935060408601356136bc81612fac565b92506060860135915060808601356136d381612fac565b809150509295509295909350565b600080604083850312156136f457600080fd5b82356136ff81612fac565b9150602083013561322e81612fac565b60006020808352600084548160018260011c9150600183168061373357607f831692505b60208310810361375157634e487b7160e01b85526022600452602485fd5b60208801839052604088018180156137705760018114613786576137b1565b60ff198616825284151560051b820196506137b1565b60008b81526020902060005b868110156137ab57815484820152908501908901613792565b83019750505b50949998505050505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156107c9576107c96137d6565b818103818111156107c9576107c96137d6565b6000806040838503121561382557600080fd5b82519150602083015161322e81612fde565b80516105da81612fac565b60006020828403121561385457600080fd5b815161077781612fac565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b8152600082516138b7816011850160208701612f49565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516138f1816012850160208701612f49565b9190910160120192915050565b60006020828403121561391057600080fd5b5051919050565b6000602080838503121561392a57600080fd5b825167ffffffffffffffff8082111561394257600080fd5b818501915085601f83011261395657600080fd5b8151818111156139685761396861385f565b8060051b604051601f19603f8301168101818110858211171561398d5761398d61385f565b6040529182528482019250838101850191888311156139ab57600080fd5b938501935b828510156139d0576139c185613837565b845293850193928501926139b0565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613a07816010850160208701612f49565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b8152600082516138b7816011850160208701612f49565b818103600083128015838313168383128216171561128e5761128e6137d6565b634e487b7160e01b600052601260045260246000fd5b600082613a8557613a85613a60565b500690565b600060018201613a9c57613a9c6137d6565b5060010190565b600082613ab257613ab2613a60565b500490565b6000808335601e19843603018112613ace57600080fd5b83018035915067ffffffffffffffff821115613ae957600080fd5b6020019150368190038213156130e357600080fd5b80820281158282048414176107c9576107c96137d6565b600060208284031215613b2757600080fd5b815161077781612fde565b60008251613b44818460208701612f49565b919091019291505056fea264697066735822122091691a32bf058c407faa4510dc17f52091af03a8a31188859fcdc7cc3a4d710864736f6c63430008160033',
    methodIdentifiers: {
        "_liquidityPool()": "207deba0",
        "adminController()": "950c5d03",
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "convertToBase(uint256)": "b88fed9f",
        "convertToShares(uint256)": "c6e6f592",
        "decimals()": "313ce567",
        "getCheckpoint(uint256)": "20fc4881",
        "getCheckpointExposure(uint256)": "cf210e65",
        "getMarketState()": "d8165743",
        "getPoolConfig()": "b0d96580",
        "getPoolInfo()": "60246c88",
        "getUncollectedGovernanceFees()": "c69e16ad",
        "getWithdrawPool()": "fba56008",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isPauser(address)": "46fbf68e",
        "kind()": "04baa00b",
        "liquidityPool()": "665a11ca",
        "load(uint256[])": "becee9c3",
        "name()": "06fdde03",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "pause(bool)": "02329a29",
        "perTokenApprovals(uint256,address,address)": "21ff32a9",
        "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "sweep(address)": "01681a62",
        "symbol(uint256)": "4e41a1fb",
        "totalShares()": "3a98ef39",
        "totalSupply(uint256)": "bd85b039",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "vaultSharesToken()": "0a4e1493",
        "version()": "54fd4d50"
    }
};
