export const MockLPMath = {
    abi: [
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
    bytecode: '0x608060405234801561001057600080fd5b50612177806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a4fc6f8111610066578063a4fc6f811461010c578063b500f3cb1461011f578063c00b11d31461014d578063c615b2d914610160578063cefef8b71461017357600080fd5b806332c5dec4146100985780633f9ccc01146100be5780639e5fc16b146100d1578063a0d1643c146100f9575b600080fd5b6100ab6100a6366004611f04565b610186565b6040519081526020015b60405180910390f35b6100ab6100cc366004611fa9565b610197565b6100e46100df366004611fe0565b6101ae565b604080519283529015156020830152016100b5565b6100ab610107366004611fe0565b6101c7565b6100ab61011a366004611f04565b6101da565b61013261012d36600461200d565b61025b565b604080519384526020840192909252908201526060016100b5565b6100ab61015b366004611f04565b6102e9565b6100e461016e366004611fa9565b6102f4565b6100e4610181366004612048565b61030f565b600061019182610324565b92915050565b60006101a68484846004610397565b949350505050565b6000806101bb84846108c0565b915091505b9250929050565b60006101d383836109cf565b9392505050565b60008060006101e884610a9c565b91509150806102545760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60008060008061026e8989898989610dcb565b92965090945092509050806102dd5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b606482015260840161024b565b50955095509592505050565b600061019182610ee3565b600080610302858585610f13565b915091505b935093915050565b60008061031b8361127b565b91509150915091565b600061035c610357836101200151670de0b6b3a7640000610345919061207b565b60608501516101008601519190611351565b611377565b61038d610357846101600151670de0b6b3a764000061037b919061207b565b606086015161014087015191906113a5565b610191919061208e565b600080856060015186604001516103ae91906120ae565b602087015160608801519192506000916103c891846113a5565b90508660a001516000036103df5791506101a69050565b600080808960048810156103f257600497505b60005b8881101561076257610407868b6113c3565b9550600061043e8360c001518460e00151856101000151866000015160a001516104308c611377565b610439906120c1565b610dcb565b8651604081019290925260208201929092529190915290508061046c576000985050505050505050506101a6565b600061047b8e600001516113d8565b925090508161049657600099505050505050505050506101a6565b6104a184828b611465565b156104b7578799505050505050505050506101a6565b60008460a00151131561062057835180516020820151604083015160a084015160e09094015160009461050b949392916104f990670de0b6b3a764000061207b565b8a5160608101516080909101516114d1565b93509050826105275760009a50505050505050505050506101a6565b808560a001511061061e5761053b8561127b565b9099509250826105585760009a50505050505050505050506101a6565b61057d8560c001518660e00151876101000151886000015160a001516104308e611377565b885160408101929092526020820192909252919091529250826105ad5760009a50505050505050505050506101a6565b845180516020820151604083015160a084015160e0909401516105dd94906104f990670de0b6b3a764000061207b565b93509050826105f95760009a50505050505050505050506101a6565b8e60a00151811161061657889a50505050505050505050506101a6565b5050506103f5565b505b6000610631858f8760a00151610f13565b9350905082158061064a5750670de0b6b3a76400008110155b156106625760009a50505050505050505050506101a6565b80670de0b6b3a7640000039050600061068f610357876040015188602001516115d690919063ffffffff16565b61069c610357858e6115eb565b6106a6919061208e565b90508815806106c457506106b989611600565b6106c282611600565b125b156106d3578098508997508296505b6000811315610701576106f08b6106ea8385611618565b90611618565b6106fa908b6120ae565b9950610753565b600081121561074a57600061071b8c6106ea8581866120c1565b90508a81101561072f57808b039a50610744565b60009c505050505050505050505050506101a6565b50610753565b50505050610762565b846001019450505050506103f5565b50600061078a8260c001518360e00151846101000151856000015160a001516104308b611377565b855160408101929092526020820192909252919091529050806107b75760009750505050505050506101a6565b60006107c68360000151610ee3565b905060006107e8610357856040015186602001516115d690919063ffffffff16565b6107f5610357848c6115eb565b6107ff919061208e565b905061080a87611600565b61081382611600565b1215610820578795508194505b61084761083b655af3107a4000670de0b6b3a764000061207b565b6020860151908b611351565b6040850151610857908790611618565b10806108975750610885610879655af3107a4000670de0b6b3a76400006120ae565b6020860151908b6113a5565b604085015161089590879061162d565b115b156108ae57600099505050505050505050506101a6565b50939c9b505050505050505050505050565b60008060008460a00151126108dd575050608082015160016101c0565b60008460a001516108ed906120c1565b9050600061092985876101000151886000015160e00151670de0b6b3a7640000610917919061207b565b89516060810151608090910151611642565b93509050821580610938575080155b1561094b576000809350935050506101c0565b6000610957838361162d565b9050670de0b6b3a764000081116109935780670de0b6b3a764000003945061098c8760c00151866115eb90919063ffffffff16565b94506109a2565b600080945094505050506101c0565b86608001518511156109c15786608001516001945094505050506101c0565b506001925050509250929050565b6000806109f78460c001518560e00151866101000151876000015160a0015161043088611377565b87516040810192909252602082019290925291909152905080610a1e576000915050610191565b6000610a2d85600001516113d8565b9250905081610a4157600092505050610191565b84602001518110610a5757600092505050610191565b600085606001518660400151610a6d91906120ae565b9050610a88828760200151836113a59092919063ffffffff16565b610a92908261207b565b9695505050505050565b6000806000610ac16103578561016001518661014001516115eb90919063ffffffff16565b610ae16103578661012001518761010001516115d690919063ffffffff16565b610aeb919061208e565b9050600080610b02866000015187602001516116ee565b9150915080610b1957506000958695509350505050565b6000831315610c695760008390506000610b67886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610b58919061207b565b8d606001518e608001516114d1565b9350905082610b80575060009788975095505050505050565b818110610c1e576000610bba858a60400151858c60e00151670de0b6b3a7640000610bab919061207b565b8d606001518e6080015161172a565b9450905083158015610bcf57508860c0015183105b15610be65750600098600198509650505050505050565b83610bfc57506000988998509650505050505050565b610c0581611377565b610c0e906120c1565b9960019950975050505050505050565b6000886020015112610c5557610c3d8860a0015185610357919061207b565b610c46906120c1565b98600198509650505050505050565b60a08801518851610c3d916103579161207b565b6000831215610dbc576000610c7d846120c1565b90506000610cb18489604001518a60e00151670de0b6b3a7640000610ca2919061207b565b8b606001518c60800151611642565b9350905082610cca575060009788975095505050505050565b818110610d4f576000610d04858a60400151858c60e00151670de0b6b3a7640000610cf5919061207b565b8d606001518e608001516117ed565b9450905083158015610d1957508860c0015183105b15610d305750600098600198509650505050505050565b83610d4657506000988998509650505050505050565b610c0e81611377565b6000610d81858a604001518b60e00151670de0b6b3a7640000610d72919061207b565b8c606001518d608001516118c4565b9450905083610d9b57506000988998509650505050505050565b610c0e610db28a6060015184866106ea919061207b565b61035790836120ae565b50600095600195509350505050565b60008060008084600003610dea57508792508691508590506001610ed7565b600085610df68b611377565b610e0091906120dd565b9050610e0b87611377565b811215610e2657600080600080945094509450945050610ed7565b80945060008912610e4657610e3f610357868b8d6113a5565b9350610e69565b610e5d610357610e558b6120c1565b87908d611351565b610e66906120c1565b93505b600080610e768c8c6116ee565b9150915080610e95576000806000809650965096509650505050610ed7565b6000610ea188886116ee565b9250905081610ec157600080600080975097509750975050505050610ed7565b610ecc8b82856113a5565b955060019450505050505b95509550955095915050565b6000806000610ef1846113d8565b915091508061025457604051635516328b60e11b815260040160405180910390fd5b6000806000808412610f3757855160400151610f309085906120ae565b9050610f72565b6000610f42856120c1565b875160400151909150811015610f62578651604001518190039150610f70565b600080935093505050610307565b505b855180516020909101516000918291610f8b91906116ee565b9150915080610fa35760008094509450505050610307565b875160e0810151604090910151600091610fd891610fcc91610fc5919061197a565b8a906115eb565b6101008b01519061162d565b895160e081015160809091015161100991610ffd91610ff790886115eb565b9061197a565b8b51606001519061162d565b61101391906120ae565b9050600061104b61103f6110388c6000015160e001518861197a90919063ffffffff16565b8b906115d6565b6101008c015190611618565b90508082101561106657600080965096505050505050610307565b808203915060006110a8858c60000151604001518d6000015160e00151670de0b6b3a7640000611096919061207b565b8e5160608101516080909101516119e5565b905060006110d28c6000015160e00151670de0b6b3a76400006110cb919061207b565b889061197a565b9050808210156110ef576000809850985050505050505050610307565b8b5160808101516060909101519183039161110b918391611351565b9050670de0b6b3a76400008110611156578b5160e0015161114f906111489061113c90670de0b6b3a764000061207b565b8e5160e001519061162d565b829061197a565b9050611185565b8b5160e00151611182906111489061117690670de0b6b3a764000061207b565b8e5160e0015190611618565b90505b8b51606001516111989085908390611351565b935083670de0b6b3a764000011156111bc5783670de0b6b3a76400000393506111d0565b600060019850985050505050505050610307565b60008c60e00151126112335760c08c015160e08d01516111ef9161162d565b9250670de0b6b3a7640000831115611214576000809850985050505050505050610307565b670de0b6b3a7640000929092039161122c84846115eb565b9350611268565b61126561124c8d60c001518e60e001516106ea906120c1565b61125e90670de0b6b3a76400006120ae565b85906115eb565b93505b50919a60019a5098505050505050505050565b60008060008360e001511361129557506000928392509050565b60006112a48460000151610324565b905060006112d08560400151866060015187604001516112c491906120ae565b60208801519190611351565b9050600082126112f757808210156112ea5781900361130d565b5060009485945092505050565b611300826120c1565b61130a90826120ae565b90505b60e085015160c0860151611322918390611351565b9050808560c00151101561133d575060009485945092505050565b808560c00151036001935093505050915091565b600082600019048411830215820261136857600080fd5b50910281810615159190040190565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b60008260001904841183021582026113bc57600080fd5b5091020490565b60008183116113d257826101d3565b50919050565b60008060008060006113e986610a9c565b915091508061140057506000958695509350505050565b61140d8660a00151611377565b61141687610324565b836114248960000151611377565b61142e91906120dd565b61143891906120dd565b611442919061208e565b92505050600081121561145b5750600093849350915050565b9360019350915050565b6020830151600090611477908461162d565b6040850151611487908490611618565b101580156101a6575060208401516114b790846114b0633b9aca00670de0b6b3a76400006120ae565b91906113a5565b60408501516114c790849061162d565b1115949350505050565b60008060008812156114f3576114e6886120c1565b6114f090876120ae565b95505b6000806115008b8b6116ee565b9150915080611517576000809350935050506115ca565b6000611526838b8a8a8a611a14565b9050600061154361153b8a610ff78a8e6115d6565b899089611351565b90508082101561155d5760008095509550505050506115ca565b808203670de0b6b3a7640000811061158b57611584611148670de0b6b3a76400008c611618565b90506115a3565b6115a0611148670de0b6b3a76400008c61162d565b90505b8b8110156115bc576000809650965050505050506115ca565b8b9003955060019450505050505b97509795505050505050565b60006101d38383670de0b6b3a7640000611351565b60006101d38383670de0b6b3a76400006113a5565b600080821261160f5781610191565b610191826120c1565b60006101d383670de0b6b3a7640000846113a5565b60006101d383670de0b6b3a764000084611351565b600080600061165488888888886119e5565b9050600061167f670de0b6b3a764000061166e8888611618565b61167891906120ae565b839061162d565b9050670de0b6b3a764000081106116ac576116a5611148670de0b6b3a76400008961162d565b90506116c4565b6116c1611148670de0b6b3a764000089611618565b90505b808810156116da576000809350935050506116e4565b8703925060019150505b9550959350505050565b6000806000836116fd86611377565b611707919061208e565b9050600081121561171f5760008092509250506101c0565b946001945092505050565b600080600061173c89898888886119e5565b905061174c86610ff7898b6120ae565b9750878110156117635760008092509250506117e2565b878103611771818688611351565b9050670de0b6b3a7640000811061179e57611797611148670de0b6b3a76400008961162d565b90506117b6565b6117b3611148670de0b6b3a764000089611618565b90505b6117c0818661162d565b9050808a10156117d8576000809350935050506117e2565b8903925060019150505b965096945050505050565b60008060006117ff89898888886119e5565b9050868810156118165760008092509250506117e2565b9686900396611825888761197a565b97508781101561183c5760008092509250506117e2565b87810361184a818688611351565b9050670de0b6b3a7640000811061187757611870611148670de0b6b3a76400008961162d565b905061188f565b61188c611148670de0b6b3a764000089611618565b90505b611899818661162d565b9050898110156118b1576000809350935050506117e2565b9890980398600198509650505050505050565b60008060006118d68888888888611a14565b90506000611901670de0b6b3a76400006118f0888861162d565b6118fa91906120ae565b8390611618565b9050670de0b6b3a7640000811061192e57611927611148670de0b6b3a764000089611618565b9050611946565b611943611148670de0b6b3a76400008961162d565b90505b6119508186611618565b905088811015611968576000809350935050506116e4565b97909703976001975095505050505050565b6000816000036119935750670de0b6b3a7640000610191565b826000036119a357506000610191565b60006119ae83611377565b905060006119c36119be86611377565b611a39565b90508181026119da670de0b6b3a764000082612105565b9050610a9281611c68565b60006119f1858561197a565b611a0a611a0286610ff7868b6115d6565b859085611351565b610a9291906120ae565b6000611a20858561197a565b611a0a611a3186610ff7868b6115eb565b8590856113a5565b6000808213611a5b5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611ae79084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611c8357506000919050565b680755bf798b4a1bf1e58212611cac576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610a9274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b604051610180810167ffffffffffffffff81118282101715611e2f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611e2f57634e487b7160e01b600052604160045260246000fd5b60006101808284031215611e7a57600080fd5b611e82611dfd565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611f1757600080fd5b6101d38383611e67565b60006102808284031215611f3457600080fd5b611f3c611e35565b9050611f488383611e67565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611fbf57600080fd5b611fc98585611f21565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611ff457600080fd5b611ffe8484611f21565b94610280939093013593505050565b600080600080600060a0868803121561202557600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000610280828403121561205b57600080fd5b6101d38383611f21565b634e487b7160e01b600052601160045260246000fd5b8181038181111561019157610191612065565b818103600083128015838313168383128216171561025457610254612065565b8082018082111561019157610191612065565b6000600160ff1b82016120d6576120d6612065565b5060000390565b80820182811260008312801582168215821617156120fd576120fd612065565b505092915050565b60008261212257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561213c5761213c612065565b50059056fea2646970667358221220208a180bef793b2674ca4edcaaf6a694cbf96641765b5481154382747d0a68df64736f6c63430008140033',
    methodIdentifiers: {
        "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
        "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256))": "cefef8b7",
        "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
        "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
        "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
        "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
        "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
        "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9",
        "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb"
    }
};
