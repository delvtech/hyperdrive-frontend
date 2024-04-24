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
    bytecode: '0x608060405234801561001057600080fd5b50612127806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a4fc6f811161005b578063a4fc6f8114610101578063b500f3cb14610114578063c00b11d314610142578063c615b2d91461015557600080fd5b806332c5dec41461008d5780633f9ccc01146100b35780639e5fc16b146100c6578063a0d1643c146100ee575b600080fd5b6100a061009b366004611ed1565b610168565b6040519081526020015b60405180910390f35b6100a06100c1366004611f76565b610179565b6100d96100d4366004611fad565b610190565b604080519283529015156020830152016100aa565b6100a06100fc366004611fad565b6101a9565b6100a061010f366004611ed1565b6101bc565b610127610122366004611fda565b61023d565b604080519384526020840192909252908201526060016100aa565b6100a0610150366004611ed1565b6102cb565b6100d9610163366004611f76565b6102d6565b6000610173826102f1565b92915050565b60006101888484846004610364565b949350505050565b60008061019d848461088d565b915091505b9250929050565b60006101b5838361099c565b9392505050565b60008060006101ca84610a69565b91509150806102365760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b6000806000806102508989898989610d98565b92965090945092509050806102bf5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b606482015260840161022d565b50955095509592505050565b600061017382610eb0565b6000806102e4858585610ee0565b915091505b935093915050565b6000610329610324836101200151670de0b6b3a7640000610312919061202b565b60608501516101008601519190611248565b61126e565b61035a610324846101600151670de0b6b3a7640000610348919061202b565b6060860151610140870151919061129c565b610173919061203e565b6000808560600151866040015161037b919061205e565b60208701516060880151919250600091610395918461129c565b90508660a001516000036103ac5791506101889050565b600080808960048810156103bf57600497505b60005b8881101561072f576103d4868b6112ba565b9550600061040b8360c001518460e00151856101000151866000015160a001516103fd8c61126e565b61040690612071565b610d98565b8651604081019290925260208201929092529190915290508061043957600098505050505050505050610188565b60006104488e600001516112cf565b92509050816104635760009950505050505050505050610188565b61046e84828b61135c565b1561048457879950505050505050505050610188565b60008460a0015113156105ed57835180516020820151604083015160a084015160e0909401516000946104d8949392916104c690670de0b6b3a764000061202b565b8a5160608101516080909101516113c8565b93509050826104f45760009a5050505050505050505050610188565b808560a00151106105eb57610508856114cd565b9099509250826105255760009a5050505050505050505050610188565b61054a8560c001518660e00151876101000151886000015160a001516103fd8e61126e565b8851604081019290925260208201929092529190915292508261057a5760009a5050505050505050505050610188565b845180516020820151604083015160a084015160e0909401516105aa94906104c690670de0b6b3a764000061202b565b93509050826105c65760009a5050505050505050505050610188565b8e60a0015181116105e357889a5050505050505050505050610188565b5050506103c2565b505b60006105fe858f8760a00151610ee0565b935090508215806106175750670de0b6b3a76400008110155b1561062f5760009a5050505050505050505050610188565b80670de0b6b3a7640000039050600061065c610324876040015188602001516115a390919063ffffffff16565b610669610324858e6115b8565b610673919061203e565b90508815806106915750610686896115cd565b61068f826115cd565b125b156106a0578098508997508296505b60008113156106ce576106bd8b6106b783856115e5565b906115e5565b6106c7908b61205e565b9950610720565b60008112156107175760006106e88c6106b7858186612071565b90508a8110156106fc57808b039a50610711565b60009c50505050505050505050505050610188565b50610720565b5050505061072f565b846001019450505050506103c2565b5060006107578260c001518360e00151846101000151856000015160a001516103fd8b61126e565b85516040810192909252602082019290925291909152905080610784576000975050505050505050610188565b60006107938360000151610eb0565b905060006107b5610324856040015186602001516115a390919063ffffffff16565b6107c2610324848c6115b8565b6107cc919061203e565b90506107d7876115cd565b6107e0826115cd565b12156107ed578795508194505b610814610808655af3107a4000670de0b6b3a764000061202b565b6020860151908b611248565b60408501516108249087906115e5565b10806108645750610852610846655af3107a4000670de0b6b3a764000061205e565b6020860151908b61129c565b60408501516108629087906115fa565b115b1561087b5760009950505050505050505050610188565b50939c9b505050505050505050505050565b60008060008460a00151126108aa575050608082015160016101a2565b60008460a001516108ba90612071565b905060006108f685876101000151886000015160e00151670de0b6b3a76400006108e4919061202b565b8951606081015160809091015161160f565b93509050821580610905575080155b15610918576000809350935050506101a2565b600061092483836115fa565b9050670de0b6b3a764000081116109605780670de0b6b3a76400000394506109598760c00151866115b890919063ffffffff16565b945061096f565b600080945094505050506101a2565b866080015185111561098e5786608001516001945094505050506101a2565b506001925050509250929050565b6000806109c48460c001518560e00151866101000151876000015160a001516103fd8861126e565b875160408101929092526020820192909252919091529050806109eb576000915050610173565b60006109fa85600001516112cf565b9250905081610a0e57600092505050610173565b84602001518110610a2457600092505050610173565b600085606001518660400151610a3a919061205e565b9050610a558287602001518361129c9092919063ffffffff16565b610a5f908261202b565b9695505050505050565b6000806000610a8e6103248561016001518661014001516115b890919063ffffffff16565b610aae6103248661012001518761010001516115a390919063ffffffff16565b610ab8919061203e565b9050600080610acf866000015187602001516116bb565b9150915080610ae657506000958695509350505050565b6000831315610c365760008390506000610b34886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610b25919061202b565b8d606001518e608001516113c8565b9350905082610b4d575060009788975095505050505050565b818110610beb576000610b87858a60400151858c60e00151670de0b6b3a7640000610b78919061202b565b8d606001518e608001516116f7565b9450905083158015610b9c57508860c0015183105b15610bb35750600098600198509650505050505050565b83610bc957506000988998509650505050505050565b610bd28161126e565b610bdb90612071565b9960019950975050505050505050565b6000886020015112610c2257610c0a8860a0015185610324919061202b565b610c1390612071565b98600198509650505050505050565b60a08801518851610c0a916103249161202b565b6000831215610d89576000610c4a84612071565b90506000610c7e8489604001518a60e00151670de0b6b3a7640000610c6f919061202b565b8b606001518c6080015161160f565b9350905082610c97575060009788975095505050505050565b818110610d1c576000610cd1858a60400151858c60e00151670de0b6b3a7640000610cc2919061202b565b8d606001518e608001516117ba565b9450905083158015610ce657508860c0015183105b15610cfd5750600098600198509650505050505050565b83610d1357506000988998509650505050505050565b610bdb8161126e565b6000610d4e858a604001518b60e00151670de0b6b3a7640000610d3f919061202b565b8c606001518d60800151611891565b9450905083610d6857506000988998509650505050505050565b610bdb610d7f8a6060015184866106b7919061202b565b610324908361205e565b50600095600195509350505050565b60008060008084600003610db757508792508691508590506001610ea4565b600085610dc38b61126e565b610dcd919061208d565b9050610dd88761126e565b811215610df357600080600080945094509450945050610ea4565b80945060008912610e1357610e0c610324868b8d61129c565b9350610e36565b610e2a610324610e228b612071565b87908d611248565b610e3390612071565b93505b600080610e438c8c6116bb565b9150915080610e62576000806000809650965096509650505050610ea4565b6000610e6e88886116bb565b9250905081610e8e57600080600080975097509750975050505050610ea4565b610e998b828561129c565b955060019450505050505b95509550955095915050565b6000806000610ebe846112cf565b915091508061023657604051635516328b60e11b815260040160405180910390fd5b6000806000808412610f0457855160400151610efd90859061205e565b9050610f3f565b6000610f0f85612071565b875160400151909150811015610f2f578651604001518190039150610f3d565b6000809350935050506102e9565b505b855180516020909101516000918291610f5891906116bb565b9150915080610f7057600080945094505050506102e9565b875160e0810151604090910151600091610fa591610f9991610f929190611947565b8a906115b8565b6101008b0151906115fa565b895160e0810151608090910151610fd691610fca91610fc490886115b8565b90611947565b8b5160600151906115fa565b610fe0919061205e565b9050600061101861100c6110058c6000015160e001518861194790919063ffffffff16565b8b906115a3565b6101008c0151906115e5565b905080821015611033576000809650965050505050506102e9565b80820391506000611075858c60000151604001518d6000015160e00151670de0b6b3a7640000611063919061202b565b8e5160608101516080909101516119b2565b9050600061109f8c6000015160e00151670de0b6b3a7640000611098919061202b565b8890611947565b9050808210156110bc5760008098509850505050505050506102e9565b8b516080810151606090910151918303916110d8918391611248565b9050670de0b6b3a76400008110611123578b5160e0015161111c906111159061110990670de0b6b3a764000061202b565b8e5160e00151906115fa565b8290611947565b9050611152565b8b5160e0015161114f906111159061114390670de0b6b3a764000061202b565b8e5160e00151906115e5565b90505b8b51606001516111659085908390611248565b935083670de0b6b3a764000011156111895783670de0b6b3a764000003935061119d565b6000600198509850505050505050506102e9565b60008c60e00151126112005760c08c015160e08d01516111bc916115fa565b9250670de0b6b3a76400008311156111e15760008098509850505050505050506102e9565b670de0b6b3a764000092909203916111f984846115b8565b9350611235565b6112326112198d60c001518e60e001516106b790612071565b61122b90670de0b6b3a764000061205e565b85906115b8565b93505b50919a60019a5098505050505050505050565b600082600019048411830215820261125f57600080fd5b50910281810615159190040190565b60006001600160ff1b038211156112985760405163396ea70160e11b815260040160405180910390fd5b5090565b60008260001904841183021582026112b357600080fd5b5091020490565b60008183116112c957826101b5565b50919050565b60008060008060006112e086610a69565b91509150806112f757506000958695509350505050565b6113048660a0015161126e565b61130d876102f1565b8361131b896000015161126e565b611325919061208d565b61132f919061208d565b611339919061203e565b9250505060008112156113525750600093849350915050565b9360019350915050565b602083015160009061136e90846115fa565b604085015161137e9084906115e5565b10158015610188575060208401516113ae90846113a7633b9aca00670de0b6b3a764000061205e565b919061129c565b60408501516113be9084906115fa565b1115949350505050565b60008060008812156113ea576113dd88612071565b6113e7908761205e565b95505b6000806113f78b8b6116bb565b915091508061140e576000809350935050506114c1565b600061141d838b8a8a8a6119e1565b9050600061143a6114328a610fc48a8e6115a3565b899089611248565b9050808210156114545760008095509550505050506114c1565b808203670de0b6b3a764000081106114825761147b611115670de0b6b3a76400008c6115e5565b905061149a565b611497611115670de0b6b3a76400008c6115fa565b90505b8b8110156114b3576000809650965050505050506114c1565b8b9003955060019450505050505b97509795505050505050565b60008060008360e00151136114e757506000928392509050565b60006114f684600001516102f1565b90506000611522856040015186606001518760400151611516919061205e565b60208801519190611248565b905060008212611549578082101561153c5781900361155f565b5060009485945092505050565b61155282612071565b61155c908261205e565b90505b60e085015160c0860151611574918390611248565b9050808560c00151101561158f575060009485945092505050565b808560c00151036001935093505050915091565b60006101b58383670de0b6b3a7640000611248565b60006101b58383670de0b6b3a764000061129c565b60008082126115dc5781610173565b61017382612071565b60006101b583670de0b6b3a76400008461129c565b60006101b583670de0b6b3a764000084611248565b600080600061162188888888886119b2565b9050600061164c670de0b6b3a764000061163b88886115e5565b611645919061205e565b83906115fa565b9050670de0b6b3a7640000811061167957611672611115670de0b6b3a7640000896115fa565b9050611691565b61168e611115670de0b6b3a7640000896115e5565b90505b808810156116a7576000809350935050506116b1565b8703925060019150505b9550959350505050565b6000806000836116ca8661126e565b6116d4919061203e565b905060008112156116ec5760008092509250506101a2565b946001945092505050565b600080600061170989898888886119b2565b905061171986610fc4898b61205e565b9750878110156117305760008092509250506117af565b87810361173e818688611248565b9050670de0b6b3a7640000811061176b57611764611115670de0b6b3a7640000896115fa565b9050611783565b611780611115670de0b6b3a7640000896115e5565b90505b61178d81866115fa565b9050808a10156117a5576000809350935050506117af565b8903925060019150505b965096945050505050565b60008060006117cc89898888886119b2565b9050868810156117e35760008092509250506117af565b96869003966117f28887611947565b9750878110156118095760008092509250506117af565b878103611817818688611248565b9050670de0b6b3a764000081106118445761183d611115670de0b6b3a7640000896115fa565b905061185c565b611859611115670de0b6b3a7640000896115e5565b90505b61186681866115fa565b90508981101561187e576000809350935050506117af565b9890980398600198509650505050505050565b60008060006118a388888888886119e1565b905060006118ce670de0b6b3a76400006118bd88886115fa565b6118c7919061205e565b83906115e5565b9050670de0b6b3a764000081106118fb576118f4611115670de0b6b3a7640000896115e5565b9050611913565b611910611115670de0b6b3a7640000896115fa565b90505b61191d81866115e5565b905088811015611935576000809350935050506116b1565b97909703976001975095505050505050565b6000816000036119605750670de0b6b3a7640000610173565b8260000361197057506000610173565b600061197b8361126e565b9050600061199061198b8661126e565b611a06565b90508181026119a7670de0b6b3a7640000826120b5565b9050610a5f81611c35565b60006119be8585611947565b6119d76119cf86610fc4868b6115a3565b859085611248565b610a5f919061205e565b60006119ed8585611947565b6119d76119fe86610fc4868b6115b8565b85908561129c565b6000808213611a285760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611ab49084901c61126e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611c5057506000919050565b680755bf798b4a1bf1e58212611c79576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610a5f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126e565b604051610180810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60006101808284031215611e4757600080fd5b611e4f611dca565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611ee457600080fd5b6101b58383611e34565b60006102808284031215611f0157600080fd5b611f09611e02565b9050611f158383611e34565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611f8c57600080fd5b611f968585611eee565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611fc157600080fd5b611fcb8484611eee565b94610280939093013593505050565b600080600080600060a08688031215611ff257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561017357610173612015565b818103600083128015838313168383128216171561023657610236612015565b8082018082111561017357610173612015565b6000600160ff1b820161208657612086612015565b5060000390565b80820182811260008312801582168215821617156120ad576120ad612015565b505092915050565b6000826120d257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156120ec576120ec612015565b50059056fea264697066735822122069cf9577680f2a7b8d38af93e5be017b04a0721746472dcba4bb25eea6ff0cfd64736f6c63430008140033',
    methodIdentifiers: {
        "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
        "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
        "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
        "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
        "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
        "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
        "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9",
        "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb"
    }
};
