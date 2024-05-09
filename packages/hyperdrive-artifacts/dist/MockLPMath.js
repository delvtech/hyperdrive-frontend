export const MockLPMath = {
    abi: [
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPresentValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxIterations",
                    "type": "uint256"
                }
            ],
            "name": "calculateDistributeExcessIdle",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxShareReservesDelta",
                    "type": "uint256"
                }
            ],
            "name": "calculateDistributeExcessIdleShareProceeds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                }
            ],
            "name": "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_shareReservesDelta",
                    "type": "uint256"
                }
            ],
            "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shareAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_initialVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_targetApr",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_positionDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timeStretch",
                    "type": "uint256"
                }
            ],
            "name": "calculateInitialReserves",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "shareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "shareAdjustment",
                    "type": "int256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondReserves",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256"
                }
            ],
            "name": "calculateMaxShareReservesDeltaSafe",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "shareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longAverageTimeRemaining",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.PresentValueParams",
                    "name": "_params",
                    "type": "tuple"
                }
            ],
            "name": "calculateNetCurveTrade",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "shareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longAverageTimeRemaining",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.PresentValueParams",
                    "name": "_params",
                    "type": "tuple"
                }
            ],
            "name": "calculateNetFlatTrade",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "shareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longAverageTimeRemaining",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortAverageTimeRemaining",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.PresentValueParams",
                    "name": "_params",
                    "type": "tuple"
                }
            ],
            "name": "calculatePresentValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_originalEffectiveShareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "_bondAmount",
                    "type": "int256"
                }
            ],
            "name": "calculateSharesDeltaGivenBondsDeltaDerivativeSafe",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "_shareAdjustment",
                    "type": "int256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minimumShareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "_shareReservesDelta",
                    "type": "int256"
                }
            ],
            "name": "calculateUpdateLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "shareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "shareAdjustment",
                    "type": "int256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondReserves",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageTimeRemaining",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageTimeRemaining",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "presentValueParams",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startingPresentValue",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activeLpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "idle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "netCurveTrade",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "originalShareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "originalBondReserves",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LPMath.DistributeExcessIdleParams",
                    "name": "_params",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "_lpTotalSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_presentValue",
                    "type": "uint256"
                }
            ],
            "name": "shouldShortCircuitDistributeExcessIdleShareProceeds",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b5061261c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a4fc6f8111610071578063a4fc6f8114610178578063b29e1d1e1461018b578063b500f3cb146101b9578063c00b11d3146101cc578063c615b2d9146101df578063cefef8b7146101f257600080fd5b806332c5dec4146100b95780633f9ccc01146100df578063865d65a2146100f25780638f1505fa1461011a5780639e5fc16b1461013d578063a0d1643c14610165575b600080fd5b6100cc6100c73660046121b2565b610205565b6040519081526020015b60405180910390f35b6100cc6100ed366004612257565b610216565b61010561010036600461228e565b61022d565b604080519283526020830191909152016100d6565b61012d610128366004612257565b6102b5565b60405190151581526020016100d6565b61015061014b36600461228e565b6102c2565b604080519283529015156020830152016100d6565b6100cc61017336600461228e565b6102cf565b6100cc6101863660046121b2565b6102e2565b61019e6101993660046122bb565b610363565b604080519384526020840192909252908201526060016100d6565b61019e6101c73660046122fe565b610413565b6100cc6101da3660046121b2565b610527565b6101506101ed366004612257565b6105a2565b610150610200366004612339565b6105bd565b6000610210826105d2565b92915050565b60006102258484846004610645565b949350505050565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef6885856040518363ffffffff1660e01b81526004016102699291906123d4565b6040805180830381865af4158015610285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a9919061244a565b915091505b9250929050565b6000610225848484610b6e565b6000806102a98484610bda565b60006102db8383610ce9565b9392505050565b60008060006102f084610db6565b915091508061035c5760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60405163594f0e8f60e11b8152600481018790526024810186905260448101859052606481018490526084810183905260a481018290526000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610401919061246e565b919b909a509098509650505050505050565b60405163685a2be760e11b8152600481018690526024810185905260448101849052606481018390526084810182905260009081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac919061249c565b929650909450925090508061051b5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b6064820152608401610353565b50955095509592505050565b604051635f9d50ab60e11b815260009073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906105619085906004016124e2565b602060405180830381865af415801561057e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021091906124f1565b6000806105b08585856110e5565b915091505b935093915050565b6000806105c98361144d565b91509150915091565b600061060a610605836101200151670de0b6b3a76400006105f39190612520565b60608501516101008601519190611523565b611549565b61063b610605846101600151670de0b6b3a76400006106299190612520565b60608601516101408701519190611577565b6102109190612533565b6000808560600151866040015161065c9190612553565b602087015160608801519192506000916106769184611577565b90508660a0015160000361068d5791506102259050565b600080808960048810156106a057600497505b60005b88811015610a10576106b5868b611595565b955060006106ec8360c001518460e00151856101000151866000015160a001516106de8c611549565b6106e790612566565b6115aa565b8651604081019290925260208201929092529190915290508061071a57600098505050505050505050610225565b60006107298e600001516116c2565b92509050816107445760009950505050505050505050610225565b61074f84828b610b6e565b1561076557879950505050505050505050610225565b60008460a0015113156108ce57835180516020820151604083015160a084015160e0909401516000946107b9949392916107a790670de0b6b3a7640000612520565b8a51606081015160809091015161174f565b93509050826107d55760009a5050505050505050505050610225565b808560a00151106108cc576107e98561144d565b9099509250826108065760009a5050505050505050505050610225565b61082b8560c001518660e00151876101000151886000015160a001516106de8e611549565b8851604081019290925260208201929092529190915292508261085b5760009a5050505050505050505050610225565b845180516020820151604083015160a084015160e09094015161088b94906107a790670de0b6b3a7640000612520565b93509050826108a75760009a5050505050505050505050610225565b8e60a0015181116108c457889a5050505050505050505050610225565b5050506106a3565b505b60006108df858f8760a001516110e5565b935090508215806108f85750670de0b6b3a76400008110155b156109105760009a5050505050505050505050610225565b80670de0b6b3a7640000039050600061093d6106058760400151886020015161185490919063ffffffff16565b61094a610605858e611869565b6109549190612533565b905088158061097257506109678961187e565b6109708261187e565b125b15610981578098508997508296505b60008113156109af5761099e8b6109988385611896565b90611896565b6109a8908b612553565b9950610a01565b60008112156109f85760006109c98c610998858186612566565b90508a8110156109dd57808b039a506109f2565b60009c50505050505050505050505050610225565b50610a01565b50505050610a10565b846001019450505050506106a3565b506000610a388260c001518360e00151846101000151856000015160a001516106de8b611549565b85516040810192909252602082019290925291909152905080610a65576000975050505050505050610225565b6000610a7483600001516118ab565b90506000610a966106058560400151866020015161185490919063ffffffff16565b610aa3610605848c611869565b610aad9190612533565b9050610ab88761187e565b610ac18261187e565b1215610ace578795508194505b610af5610ae9655af3107a4000670de0b6b3a7640000612520565b6020860151908b611523565b6040850151610b05908790611896565b1080610b455750610b33610b27655af3107a4000670de0b6b3a7640000612553565b6020860151908b611577565b6040850151610b439087906118db565b115b15610b5c5760009950505050505050505050610225565b50939c9b505050505050505050505050565b6020830151600090610b8090846118db565b6040850151610b90908490611896565b1015801561022557506020840151610bc09084610bb9633b9aca00670de0b6b3a7640000612553565b9190611577565b6040850151610bd09084906118db565b1115949350505050565b60008060008460a0015112610bf7575050608082015160016102ae565b60008460a00151610c0790612566565b90506000610c4385876101000151886000015160e00151670de0b6b3a7640000610c319190612520565b895160608101516080909101516118f0565b93509050821580610c52575080155b15610c65576000809350935050506102ae565b6000610c7183836118db565b9050670de0b6b3a76400008111610cad5780670de0b6b3a7640000039450610ca68760c001518661186990919063ffffffff16565b9450610cbc565b600080945094505050506102ae565b8660800151851115610cdb5786608001516001945094505050506102ae565b506001925050509250929050565b600080610d118460c001518560e00151866101000151876000015160a001516106de88611549565b87516040810192909252602082019290925291909152905080610d38576000915050610210565b6000610d4785600001516116c2565b9250905081610d5b57600092505050610210565b84602001518110610d7157600092505050610210565b600085606001518660400151610d879190612553565b9050610da2828760200151836115779092919063ffffffff16565b610dac9082612520565b9695505050505050565b6000806000610ddb61060585610160015186610140015161186990919063ffffffff16565b610dfb61060586610120015187610100015161185490919063ffffffff16565b610e059190612533565b9050600080610e1c8660000151876020015161199c565b9150915080610e3357506000958695509350505050565b6000831315610f835760008390506000610e81886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610e729190612520565b8d606001518e6080015161174f565b9350905082610e9a575060009788975095505050505050565b818110610f38576000610ed4858a60400151858c60e00151670de0b6b3a7640000610ec59190612520565b8d606001518e608001516119d8565b9450905083158015610ee957508860c0015183105b15610f005750600098600198509650505050505050565b83610f1657506000988998509650505050505050565b610f1f81611549565b610f2890612566565b9960019950975050505050505050565b6000886020015112610f6f57610f578860a00151856106059190612520565b610f6090612566565b98600198509650505050505050565b60a08801518851610f579161060591612520565b60008312156110d6576000610f9784612566565b90506000610fcb8489604001518a60e00151670de0b6b3a7640000610fbc9190612520565b8b606001518c608001516118f0565b9350905082610fe4575060009788975095505050505050565b81811061106957600061101e858a60400151858c60e00151670de0b6b3a764000061100f9190612520565b8d606001518e60800151611a9b565b945090508315801561103357508860c0015183105b1561104a5750600098600198509650505050505050565b8361106057506000988998509650505050505050565b610f2881611549565b600061109b858a604001518b60e00151670de0b6b3a764000061108c9190612520565b8c606001518d60800151611b72565b94509050836110b557506000988998509650505050505050565b610f286110cc8a6060015184866109989190612520565b6106059083612553565b50600095600195509350505050565b600080600080841261110957855160400151611102908590612553565b9050611144565b600061111485612566565b875160400151909150811015611134578651604001518190039150611142565b6000809350935050506105b5565b505b85518051602090910151600091829161115d919061199c565b915091508061117557600080945094505050506105b5565b875160e08101516040909101516000916111aa9161119e916111979190611c28565b8a90611869565b6101008b0151906118db565b895160e08101516080909101516111db916111cf916111c99088611869565b90611c28565b8b5160600151906118db565b6111e59190612553565b9050600061121d61121161120a8c6000015160e0015188611c2890919063ffffffff16565b8b90611854565b6101008c015190611896565b905080821015611238576000809650965050505050506105b5565b8082039150600061127a858c60000151604001518d6000015160e00151670de0b6b3a76400006112689190612520565b8e516060810151608090910151611c93565b905060006112a48c6000015160e00151670de0b6b3a764000061129d9190612520565b8890611c28565b9050808210156112c15760008098509850505050505050506105b5565b8b516080810151606090910151918303916112dd918391611523565b9050670de0b6b3a76400008110611328578b5160e001516113219061131a9061130e90670de0b6b3a7640000612520565b8e5160e00151906118db565b8290611c28565b9050611357565b8b5160e001516113549061131a9061134890670de0b6b3a7640000612520565b8e5160e0015190611896565b90505b8b516060015161136a9085908390611523565b935083670de0b6b3a7640000111561138e5783670de0b6b3a76400000393506113a2565b6000600198509850505050505050506105b5565b60008c60e00151126114055760c08c015160e08d01516113c1916118db565b9250670de0b6b3a76400008311156113e65760008098509850505050505050506105b5565b670de0b6b3a764000092909203916113fe8484611869565b935061143a565b61143761141e8d60c001518e60e0015161099890612566565b61143090670de0b6b3a7640000612553565b8590611869565b93505b50919a60019a5098505050505050505050565b60008060008360e001511361146757506000928392509050565b600061147684600001516105d2565b905060006114a28560400151866060015187604001516114969190612553565b60208801519190611523565b9050600082126114c957808210156114bc578190036114df565b5060009485945092505050565b6114d282612566565b6114dc9082612553565b90505b60e085015160c08601516114f4918390611523565b9050808560c00151101561150f575060009485945092505050565b808560c00151036001935093505050915091565b600082600019048411830215820261153a57600080fd5b50910281810615159190040190565b60006001600160ff1b038211156115735760405163396ea70160e11b815260040160405180910390fd5b5090565b600082600019048411830215820261158e57600080fd5b5091020490565b60008183116115a457826102db565b50919050565b600080600080846000036115c9575087925086915085905060016116b6565b6000856115d58b611549565b6115df9190612582565b90506115ea87611549565b811215611605576000806000809450945094509450506116b6565b809450600089126116255761161e610605868b8d611577565b9350611648565b61163c6106056116348b612566565b87908d611523565b61164590612566565b93505b6000806116558c8c61199c565b91509150806116745760008060008096509650965096505050506116b6565b6000611680888861199c565b92509050816116a0576000806000809750975097509750505050506116b6565b6116ab8b8285611577565b955060019450505050505b95509550955095915050565b60008060008060006116d386610db6565b91509150806116ea57506000958695509350505050565b6116f78660a00151611549565b611700876105d2565b8361170e8960000151611549565b6117189190612582565b6117229190612582565b61172c9190612533565b9250505060008112156117455750600093849350915050565b9360019350915050565b60008060008812156117715761176488612566565b61176e9087612553565b95505b60008061177e8b8b61199c565b915091508061179557600080935093505050611848565b60006117a4838b8a8a8a611cc2565b905060006117c16117b98a6111c98a8e611854565b899089611523565b9050808210156117db576000809550955050505050611848565b808203670de0b6b3a764000081106118095761180261131a670de0b6b3a76400008c611896565b9050611821565b61181e61131a670de0b6b3a76400008c6118db565b90505b8b81101561183a57600080965096505050505050611848565b8b9003955060019450505050505b97509795505050505050565b60006102db8383670de0b6b3a7640000611523565b60006102db8383670de0b6b3a7640000611577565b600080821261188d5781610210565b61021082612566565b60006102db83670de0b6b3a764000084611577565b60008060006118b9846116c2565b915091508061035c57604051635516328b60e11b815260040160405180910390fd5b60006102db83670de0b6b3a764000084611523565b60008060006119028888888888611c93565b9050600061192d670de0b6b3a764000061191c8888611896565b6119269190612553565b83906118db565b9050670de0b6b3a7640000811061195a5761195361131a670de0b6b3a7640000896118db565b9050611972565b61196f61131a670de0b6b3a764000089611896565b90505b8088101561198857600080935093505050611992565b8703925060019150505b9550959350505050565b6000806000836119ab86611549565b6119b59190612533565b905060008112156119cd5760008092509250506102ae565b946001945092505050565b60008060006119ea8989888888611c93565b90506119fa866111c9898b612553565b975087811015611a11576000809250925050611a90565b878103611a1f818688611523565b9050670de0b6b3a76400008110611a4c57611a4561131a670de0b6b3a7640000896118db565b9050611a64565b611a6161131a670de0b6b3a764000089611896565b90505b611a6e81866118db565b9050808a1015611a8657600080935093505050611a90565b8903925060019150505b965096945050505050565b6000806000611aad8989888888611c93565b905086881015611ac4576000809250925050611a90565b9686900396611ad38887611c28565b975087811015611aea576000809250925050611a90565b878103611af8818688611523565b9050670de0b6b3a76400008110611b2557611b1e61131a670de0b6b3a7640000896118db565b9050611b3d565b611b3a61131a670de0b6b3a764000089611896565b90505b611b4781866118db565b905089811015611b5f57600080935093505050611a90565b9890980398600198509650505050505050565b6000806000611b848888888888611cc2565b90506000611baf670de0b6b3a7640000611b9e88886118db565b611ba89190612553565b8390611896565b9050670de0b6b3a76400008110611bdc57611bd561131a670de0b6b3a764000089611896565b9050611bf4565b611bf161131a670de0b6b3a7640000896118db565b90505b611bfe8186611896565b905088811015611c1657600080935093505050611992565b97909703976001975095505050505050565b600081600003611c415750670de0b6b3a7640000610210565b82600003611c5157506000610210565b6000611c5c83611549565b90506000611c71611c6c86611549565b611ce7565b9050818102611c88670de0b6b3a7640000826125aa565b9050610dac81611f16565b6000611c9f8585611c28565b611cb8611cb0866111c9868b611854565b859085611523565b610dac9190612553565b6000611cce8585611c28565b611cb8611cdf866111c9868b611869565b859085611577565b6000808213611d095760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611d959084901c611549565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611f3157506000919050565b680755bf798b4a1bf1e58212611f5a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610dac74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611549565b604051610180810167ffffffffffffffff811182821017156120dd57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156120dd57634e487b7160e01b600052604160045260246000fd5b6000610180828403121561212857600080fd5b6121306120ab565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b600061018082840312156121c557600080fd5b6102db8383612115565b600061028082840312156121e257600080fd5b6121ea6120e3565b90506121f68383612115565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c0848603121561226d57600080fd5b61227785856121cf565b9561028085013595506102a0909401359392505050565b6000806102a083850312156122a257600080fd5b6122ac84846121cf565b94610280939093013593505050565b60008060008060008060c087890312156122d457600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600060a0868803121561231657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000610280828403121561234c57600080fd5b6102db83836121cf565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506123e8828551612356565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561245d57600080fd5b505080516020909101519092909150565b60008060006060848603121561248357600080fd5b8351925060208401519150604084015190509250925092565b600080600080608085870312156124b257600080fd5b845193506020850151925060408501519150606085015180151581146124d757600080fd5b939692955090935050565b61018081016102108284612356565b60006020828403121561250357600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102105761021061250a565b818103600083128015838313168383128216171561035c5761035c61250a565b808201808211156102105761021061250a565b6000600160ff1b820161257b5761257b61250a565b5060000390565b80820182811260008312801582168215821617156125a2576125a261250a565b505092915050565b6000826125c757634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156125e1576125e161250a565b50059056fea26469706673582212205a9bffd67e32d18aabbcea321ceda36596d89fe84416715a0b7c8e1291780c4e64736f6c63430008140033',
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
