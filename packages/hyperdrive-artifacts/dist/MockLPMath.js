export const MockLPMath = {
    abi: [
        {
            "type": "function",
            "name": "calculateDistributeExcessIdle",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateDistributeExcessIdleShareProceeds",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxShareReservesDelta",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
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
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_shareReservesDelta",
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateInitialReserves",
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
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_targetApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
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
                    "name": "bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxShareReservesDeltaSafe",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
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
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateNetCurveTrade",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.PresentValueParams",
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
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateNetFlatTrade",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.PresentValueParams",
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
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculatePresentValue",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.PresentValueParams",
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
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256",
                            "internalType": "uint256"
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSharesDeltaGivenBondsDeltaDerivativeSafe",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "int256",
                    "internalType": "int256"
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
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateUpdateLiquidity",
            "inputs": [
                {
                    "name": "_shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAdjustment",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minimumShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareReservesDelta",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
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
                    "name": "bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "shouldShortCircuitDistributeExcessIdleShareProceeds",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "components": [
                        {
                            "name": "presentValueParams",
                            "type": "tuple",
                            "internalType": "struct LPMath.PresentValueParams",
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
                                    "name": "bondReserves",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "vaultSharePrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
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
                                    "name": "timeStretch",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortsOutstanding",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "startingPresentValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "activeLpTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "idle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "netCurveTrade",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "originalShareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "originalBondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_lpTotalSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_presentValue",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPresentValue",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50612617806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a4fc6f8111610071578063a4fc6f8114610178578063b29e1d1e1461018b578063b500f3cb146101b9578063c00b11d3146101cc578063c615b2d9146101df578063cefef8b7146101f257600080fd5b806332c5dec4146100b95780633f9ccc01146100df578063865d65a2146100f25780638f1505fa1461011a5780639e5fc16b1461013d578063a0d1643c14610165575b600080fd5b6100cc6100c73660046121ad565b610205565b6040519081526020015b60405180910390f35b6100cc6100ed366004612252565b610216565b610105610100366004612289565b61022d565b604080519283526020830191909152016100d6565b61012d610128366004612252565b6102b5565b60405190151581526020016100d6565b61015061014b366004612289565b6102c2565b604080519283529015156020830152016100d6565b6100cc610173366004612289565b6102cf565b6100cc6101863660046121ad565b6102e2565b61019e6101993660046122b6565b610363565b604080519384526020840192909252908201526060016100d6565b61019e6101c73660046122f9565b610413565b6100cc6101da3660046121ad565b610527565b6101506101ed366004612252565b6105a2565b610150610200366004612334565b6105bd565b6000610210826105d2565b92915050565b60006102258484846004610645565b949350505050565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef6885856040518363ffffffff1660e01b81526004016102699291906123cf565b6040805180830381865af4158015610285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a99190612445565b915091505b9250929050565b6000610225848484610b6e565b6000806102a98484610bda565b60006102db8383610ce9565b9392505050565b60008060006102f084610db6565b915091508061035c5760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60405163594f0e8f60e11b8152600481018790526024810186905260448101859052606481018490526084810183905260a481018290526000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104019190612469565b919b909a509098509650505050505050565b60405163685a2be760e11b8152600481018690526024810185905260448101849052606481018390526084810182905260009081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac9190612497565b929650909450925090508061051b5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b6064820152608401610353565b50955095509592505050565b604051635f9d50ab60e11b815260009073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906105619085906004016124dd565b602060405180830381865af415801561057e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021091906124ec565b6000806105b08585856110e5565b915091505b935093915050565b6000806105c98361144d565b91509150915091565b600061060a610605836101200151670de0b6b3a76400006105f3919061251b565b60608501516101008601519190611523565b611549565b61063b610605846101600151670de0b6b3a7640000610629919061251b565b60608601516101408701519190611577565b610210919061252e565b6000808560600151866040015161065c919061254e565b602087015160608801519192506000916106769184611577565b90508660a0015160000361068d5791506102259050565b600080808960048810156106a057600497505b60005b88811015610a10576106b5868b611595565b955060006106ec8360c001518460e00151856101000151866000015160a001516106de8c611549565b6106e790612561565b6115aa565b8651604081019290925260208201929092529190915290508061071a57600098505050505050505050610225565b60006107298e600001516116c2565b92509050816107445760009950505050505050505050610225565b61074f84828b610b6e565b1561076557879950505050505050505050610225565b60008460a0015113156108ce57835180516020820151604083015160a084015160e0909401516000946107b9949392916107a790670de0b6b3a764000061251b565b8a51606081015160809091015161174f565b93509050826107d55760009a5050505050505050505050610225565b808560a00151106108cc576107e98561144d565b9099509250826108065760009a5050505050505050505050610225565b61082b8560c001518660e00151876101000151886000015160a001516106de8e611549565b8851604081019290925260208201929092529190915292508261085b5760009a5050505050505050505050610225565b845180516020820151604083015160a084015160e09094015161088b94906107a790670de0b6b3a764000061251b565b93509050826108a75760009a5050505050505050505050610225565b8e60a0015181116108c457889a5050505050505050505050610225565b5050506106a3565b505b60006108df858f8760a001516110e5565b935090508215806108f85750670de0b6b3a76400008110155b156109105760009a5050505050505050505050610225565b80670de0b6b3a7640000039050600061093d6106058760400151886020015161185490919063ffffffff16565b61094a610605858e611869565b610954919061252e565b905088158061097257506109678961187e565b6109708261187e565b105b15610981578098508997508296505b60008113156109af5761099e8b6109988385611891565b90611891565b6109a8908b61254e565b9950610a01565b60008112156109f85760006109c98c610998858186612561565b90508a8110156109dd57808b039a506109f2565b60009c50505050505050505050505050610225565b50610a01565b50505050610a10565b846001019450505050506106a3565b506000610a388260c001518360e00151846101000151856000015160a001516106de8b611549565b85516040810192909252602082019290925291909152905080610a65576000975050505050505050610225565b6000610a7483600001516118a6565b90506000610a966106058560400151866020015161185490919063ffffffff16565b610aa3610605848c611869565b610aad919061252e565b9050610ab88761187e565b610ac18261187e565b1015610ace578795508194505b610af5610ae9655af3107a4000670de0b6b3a764000061251b565b6020860151908b611523565b6040850151610b05908790611891565b1080610b455750610b33610b27655af3107a4000670de0b6b3a764000061254e565b6020860151908b611577565b6040850151610b439087906118d6565b115b15610b5c5760009950505050505050505050610225565b50939c9b505050505050505050505050565b6020830151600090610b8090846118d6565b6040850151610b90908490611891565b1015801561022557506020840151610bc09084610bb9633b9aca00670de0b6b3a764000061254e565b9190611577565b6040850151610bd09084906118d6565b1115949350505050565b60008060008460a0015112610bf7575050608082015160016102ae565b60008460a00151610c0790612561565b90506000610c4385876101000151886000015160e00151670de0b6b3a7640000610c31919061251b565b895160608101516080909101516118eb565b93509050821580610c52575080155b15610c65576000809350935050506102ae565b6000610c7183836118d6565b9050670de0b6b3a76400008111610cad5780670de0b6b3a7640000039450610ca68760c001518661186990919063ffffffff16565b9450610cbc565b600080945094505050506102ae565b8660800151851115610cdb5786608001516001945094505050506102ae565b506001925050509250929050565b600080610d118460c001518560e00151866101000151876000015160a001516106de88611549565b87516040810192909252602082019290925291909152905080610d38576000915050610210565b6000610d4785600001516116c2565b9250905081610d5b57600092505050610210565b84602001518110610d7157600092505050610210565b600085606001518660400151610d87919061254e565b9050610da2828760200151836115779092919063ffffffff16565b610dac908261251b565b9695505050505050565b6000806000610ddb61060585610160015186610140015161186990919063ffffffff16565b610dfb61060586610120015187610100015161185490919063ffffffff16565b610e05919061252e565b9050600080610e1c86600001518760200151611997565b9150915080610e3357506000958695509350505050565b6000831315610f835760008390506000610e81886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610e72919061251b565b8d606001518e6080015161174f565b9350905082610e9a575060009788975095505050505050565b818110610f38576000610ed4858a60400151858c60e00151670de0b6b3a7640000610ec5919061251b565b8d606001518e608001516119d3565b9450905083158015610ee957508860c0015183105b15610f005750600098600198509650505050505050565b83610f1657506000988998509650505050505050565b610f1f81611549565b610f2890612561565b9960019950975050505050505050565b6000886020015112610f6f57610f578860a0015185610605919061251b565b610f6090612561565b98600198509650505050505050565b60a08801518851610f57916106059161251b565b60008312156110d6576000610f9784612561565b90506000610fcb8489604001518a60e00151670de0b6b3a7640000610fbc919061251b565b8b606001518c608001516118eb565b9350905082610fe4575060009788975095505050505050565b81811061106957600061101e858a60400151858c60e00151670de0b6b3a764000061100f919061251b565b8d606001518e60800151611a96565b945090508315801561103357508860c0015183105b1561104a5750600098600198509650505050505050565b8361106057506000988998509650505050505050565b610f2881611549565b600061109b858a604001518b60e00151670de0b6b3a764000061108c919061251b565b8c606001518d60800151611b6d565b94509050836110b557506000988998509650505050505050565b610f286110cc8a606001518486610998919061251b565b610605908361254e565b50600095600195509350505050565b60008060008084126111095785516040015161110290859061254e565b9050611144565b600061111485612561565b875160400151909150811015611134578651604001518190039150611142565b6000809350935050506105b5565b505b85518051602090910151600091829161115d9190611997565b915091508061117557600080945094505050506105b5565b875160e08101516040909101516000916111aa9161119e916111979190611c23565b8a90611869565b6101008b0151906118d6565b895160e08101516080909101516111db916111cf916111c99088611869565b90611c23565b8b5160600151906118d6565b6111e5919061254e565b9050600061121d61121161120a8c6000015160e0015188611c2390919063ffffffff16565b8b90611854565b6101008c015190611891565b905080821015611238576000809650965050505050506105b5565b8082039150600061127a858c60000151604001518d6000015160e00151670de0b6b3a7640000611268919061251b565b8e516060810151608090910151611c8e565b905060006112a48c6000015160e00151670de0b6b3a764000061129d919061251b565b8890611c23565b9050808210156112c15760008098509850505050505050506105b5565b8b516080810151606090910151918303916112dd918391611523565b9050670de0b6b3a76400008110611328578b5160e001516113219061131a9061130e90670de0b6b3a764000061251b565b8e5160e00151906118d6565b8290611c23565b9050611357565b8b5160e001516113549061131a9061134890670de0b6b3a764000061251b565b8e5160e0015190611891565b90505b8b516060015161136a9085908390611523565b935083670de0b6b3a7640000111561138e5783670de0b6b3a76400000393506113a2565b6000600198509850505050505050506105b5565b60008c60e00151126114055760c08c015160e08d01516113c1916118d6565b9250670de0b6b3a76400008311156113e65760008098509850505050505050506105b5565b670de0b6b3a764000092909203916113fe8484611869565b935061143a565b61143761141e8d60c001518e60e0015161099890612561565b61143090670de0b6b3a764000061254e565b8590611869565b93505b50919a60019a5098505050505050505050565b60008060008360e001511361146757506000928392509050565b600061147684600001516105d2565b905060006114a2856040015186606001518760400151611496919061254e565b60208801519190611523565b9050600082126114c957808210156114bc578190036114df565b5060009485945092505050565b6114d282612561565b6114dc908261254e565b90505b60e085015160c08601516114f4918390611523565b9050808560c00151101561150f575060009485945092505050565b808560c00151036001935093505050915091565b600082600019048411830215820261153a57600080fd5b50910281810615159190040190565b60006001600160ff1b038211156115735760405163396ea70160e11b815260040160405180910390fd5b5090565b600082600019048411830215820261158e57600080fd5b5091020490565b60008183116115a457826102db565b50919050565b600080600080846000036115c9575087925086915085905060016116b6565b6000856115d58b611549565b6115df919061257d565b90506115ea87611549565b811215611605576000806000809450945094509450506116b6565b809450600089126116255761161e610605868b8d611577565b9350611648565b61163c6106056116348b612561565b87908d611523565b61164590612561565b93505b6000806116558c8c611997565b91509150806116745760008060008096509650965096505050506116b6565b60006116808888611997565b92509050816116a0576000806000809750975097509750505050506116b6565b6116ab8b8285611577565b955060019450505050505b95509550955095915050565b60008060008060006116d386610db6565b91509150806116ea57506000958695509350505050565b6116f78660a00151611549565b611700876105d2565b8361170e8960000151611549565b611718919061257d565b611722919061257d565b61172c919061252e565b9250505060008112156117455750600093849350915050565b9360019350915050565b60008060008812156117715761176488612561565b61176e908761254e565b95505b60008061177e8b8b611997565b915091508061179557600080935093505050611848565b60006117a4838b8a8a8a611cbd565b905060006117c16117b98a6111c98a8e611854565b899089611523565b9050808210156117db576000809550955050505050611848565b808203670de0b6b3a764000081106118095761180261131a670de0b6b3a76400008c611891565b9050611821565b61181e61131a670de0b6b3a76400008c6118d6565b90505b8b81101561183a57600080965096505050505050611848565b8b9003955060019450505050505b97509795505050505050565b60006102db8383670de0b6b3a7640000611523565b60006102db8383670de0b6b3a7640000611577565b6000808212156115735781600003610210565b60006102db83670de0b6b3a764000084611577565b60008060006118b4846116c2565b915091508061035c57604051635516328b60e11b815260040160405180910390fd5b60006102db83670de0b6b3a764000084611523565b60008060006118fd8888888888611c8e565b90506000611928670de0b6b3a76400006119178888611891565b611921919061254e565b83906118d6565b9050670de0b6b3a764000081106119555761194e61131a670de0b6b3a7640000896118d6565b905061196d565b61196a61131a670de0b6b3a764000089611891565b90505b808810156119835760008093509350505061198d565b8703925060019150505b9550959350505050565b6000806000836119a686611549565b6119b0919061252e565b905060008112156119c85760008092509250506102ae565b946001945092505050565b60008060006119e58989888888611c8e565b90506119f5866111c9898b61254e565b975087811015611a0c576000809250925050611a8b565b878103611a1a818688611523565b9050670de0b6b3a76400008110611a4757611a4061131a670de0b6b3a7640000896118d6565b9050611a5f565b611a5c61131a670de0b6b3a764000089611891565b90505b611a6981866118d6565b9050808a1015611a8157600080935093505050611a8b565b8903925060019150505b965096945050505050565b6000806000611aa88989888888611c8e565b905086881015611abf576000809250925050611a8b565b9686900396611ace8887611c23565b975087811015611ae5576000809250925050611a8b565b878103611af3818688611523565b9050670de0b6b3a76400008110611b2057611b1961131a670de0b6b3a7640000896118d6565b9050611b38565b611b3561131a670de0b6b3a764000089611891565b90505b611b4281866118d6565b905089811015611b5a57600080935093505050611a8b565b9890980398600198509650505050505050565b6000806000611b7f8888888888611cbd565b90506000611baa670de0b6b3a7640000611b9988886118d6565b611ba3919061254e565b8390611891565b9050670de0b6b3a76400008110611bd757611bd061131a670de0b6b3a764000089611891565b9050611bef565b611bec61131a670de0b6b3a7640000896118d6565b90505b611bf98186611891565b905088811015611c115760008093509350505061198d565b97909703976001975095505050505050565b600081600003611c3c5750670de0b6b3a7640000610210565b82600003611c4c57506000610210565b6000611c5783611549565b90506000611c6c611c6786611549565b611ce2565b9050818102611c83670de0b6b3a7640000826125a5565b9050610dac81611f11565b6000611c9a8585611c23565b611cb3611cab866111c9868b611854565b859085611523565b610dac919061254e565b6000611cc98585611c23565b611cb3611cda866111c9868b611869565b859085611577565b6000808213611d045760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611d909084901c611549565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611f2c57506000919050565b680755bf798b4a1bf1e58212611f55576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610dac74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611549565b604051610180810167ffffffffffffffff811182821017156120d857634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156120d857634e487b7160e01b600052604160045260246000fd5b6000610180828403121561212357600080fd5b61212b6120a6565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b600061018082840312156121c057600080fd5b6102db8383612110565b600061028082840312156121dd57600080fd5b6121e56120de565b90506121f18383612110565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c0848603121561226857600080fd5b61227285856121ca565b9561028085013595506102a0909401359392505050565b6000806102a0838503121561229d57600080fd5b6122a784846121ca565b94610280939093013593505050565b60008060008060008060c087890312156122cf57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600060a0868803121561231157600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000610280828403121561234757600080fd5b6102db83836121ca565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506123e3828551612351565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561245857600080fd5b505080516020909101519092909150565b60008060006060848603121561247e57600080fd5b8351925060208401519150604084015190509250925092565b600080600080608085870312156124ad57600080fd5b845193506020850151925060408501519150606085015180151581146124d257600080fd5b939692955090935050565b61018081016102108284612351565b6000602082840312156124fe57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561021057610210612505565b818103600083128015838313168383128216171561035c5761035c612505565b8082018082111561021057610210612505565b6000600160ff1b820161257657612576612505565b5060000390565b808201828112600083128015821682158216171561259d5761259d612505565b505092915050565b6000826125c257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156125dc576125dc612505565b50059056fea2646970667358221220e4e3c555a8dbcc7dc0e7a25b85e0667e1ba4013ed5299eef25ac1c857c126cb964736f6c63430008140033',
    methodIdentifiers: {
        "calculateDistributeExcessIdle(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "865d65a2",
        "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
        "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256))": "cefef8b7",
        "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
        "calculateInitialReserves(uint256,uint256,uint256,uint256,uint256,uint256)": "b29e1d1e",
        "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
        "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
        "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
        "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
        "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9",
        "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb",
        "shouldShortCircuitDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "8f1505fa"
    }
};
