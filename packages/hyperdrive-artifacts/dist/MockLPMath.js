export const MockLPMath = {
    "abi": [
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
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b50612127806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a4fc6f811161005b578063a4fc6f8114610101578063b500f3cb14610114578063c00b11d314610142578063c615b2d91461015557600080fd5b806332c5dec41461008d5780633f9ccc01146100b35780639e5fc16b146100c6578063a0d1643c146100ee575b600080fd5b6100a061009b366004611ed1565b610168565b6040519081526020015b60405180910390f35b6100a06100c1366004611f76565b610179565b6100d96100d4366004611fad565b610190565b604080519283529015156020830152016100aa565b6100a06100fc366004611fad565b6101a9565b6100a061010f366004611ed1565b6101bc565b610127610122366004611fda565b61023d565b604080519384526020840192909252908201526060016100aa565b6100a0610150366004611ed1565b6102cb565b6100d9610163366004611f76565b6102d6565b6000610173826102f1565b92915050565b60006101888484846004610364565b949350505050565b60008061019d848461088d565b915091505b9250929050565b60006101b5838361099c565b9392505050565b60008060006101ca84610a69565b91509150806102365760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b6000806000806102508989898989610d98565b92965090945092509050806102bf5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b606482015260840161022d565b50955095509592505050565b600061017382610eb0565b6000806102e4858585610ee0565b915091505b935093915050565b6000610329610324836101200151670de0b6b3a7640000610312919061202b565b60608501516101008601519190611248565b61126e565b61035a610324846101600151670de0b6b3a7640000610348919061202b565b6060860151610140870151919061129c565b610173919061203e565b6000808560600151866040015161037b919061205e565b60208701516060880151919250600091610395918461129c565b90508660a001516000036103ac5791506101889050565b600080808960048810156103bf57600497505b60005b8881101561072f576103d4868b6112ba565b9550600061040b8360c001518460e00151856101000151866000015160a001516103fd8c61126e565b61040690612071565b610d98565b8651604081019290925260208201929092529190915290508061043957600098505050505050505050610188565b60006104488e600001516112cf565b92509050816104635760009950505050505050505050610188565b61046e84828b61135c565b1561048457879950505050505050505050610188565b60008460a0015113156105ed57835180516020820151604083015160a084015160e0909401516000946104d8949392916104c690670de0b6b3a764000061202b565b8a5160608101516080909101516113c8565b93509050826104f45760009a5050505050505050505050610188565b808560a00151106105eb57610508856114cd565b9099509250826105255760009a5050505050505050505050610188565b61054a8560c001518660e00151876101000151886000015160a001516103fd8e61126e565b8851604081019290925260208201929092529190915292508261057a5760009a5050505050505050505050610188565b845180516020820151604083015160a084015160e0909401516105aa94906104c690670de0b6b3a764000061202b565b93509050826105c65760009a5050505050505050505050610188565b8e60a0015181116105e357889a5050505050505050505050610188565b5050506103c2565b505b60006105fe858f8760a00151610ee0565b935090508215806106175750670de0b6b3a76400008110155b1561062f5760009a5050505050505050505050610188565b80670de0b6b3a7640000039050600061065c610324876040015188602001516115a390919063ffffffff16565b610669610324858e6115b8565b610673919061203e565b90508815806106915750610686896115cd565b61068f826115cd565b125b156106a0578098508997508296505b60008113156106ce576106bd8b6106b783856115e5565b906115e5565b6106c7908b61205e565b9950610720565b60008112156107175760006106e88c6106b7858186612071565b90508a8110156106fc57808b039a50610711565b60009c50505050505050505050505050610188565b50610720565b5050505061072f565b846001019450505050506103c2565b5060006107578260c001518360e00151846101000151856000015160a001516103fd8b61126e565b85516040810192909252602082019290925291909152905080610784576000975050505050505050610188565b60006107938360000151610eb0565b905060006107b5610324856040015186602001516115a390919063ffffffff16565b6107c2610324848c6115b8565b6107cc919061203e565b90506107d7876115cd565b6107e0826115cd565b12156107ed578795508194505b610814610808655af3107a4000670de0b6b3a764000061202b565b6020860151908b611248565b60408501516108249087906115e5565b10806108645750610852610846655af3107a4000670de0b6b3a764000061205e565b6020860151908b61129c565b60408501516108629087906115fa565b115b1561087b5760009950505050505050505050610188565b50939c9b505050505050505050505050565b60008060008460a00151126108aa575050608082015160016101a2565b60008460a001516108ba90612071565b905060006108f685876101000151886000015160e00151670de0b6b3a76400006108e4919061202b565b8951606081015160809091015161160f565b93509050821580610905575080155b15610918576000809350935050506101a2565b600061092483836115fa565b9050670de0b6b3a764000081116109605780670de0b6b3a76400000394506109598760c00151866115b890919063ffffffff16565b945061096f565b600080945094505050506101a2565b866080015185111561098e5786608001516001945094505050506101a2565b506001925050509250929050565b6000806109c48460c001518560e00151866101000151876000015160a001516103fd8861126e565b875160408101929092526020820192909252919091529050806109eb576000915050610173565b60006109fa85600001516112cf565b9250905081610a0e57600092505050610173565b84602001518110610a2457600092505050610173565b600085606001518660400151610a3a919061205e565b9050610a558287602001518361129c9092919063ffffffff16565b610a5f908261202b565b9695505050505050565b6000806000610a8e6103248561016001518661014001516115b890919063ffffffff16565b610aae6103248661012001518761010001516115a390919063ffffffff16565b610ab8919061203e565b9050600080610acf866000015187602001516116bb565b9150915080610ae657506000958695509350505050565b6000831315610c365760008390506000610b34886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610b25919061202b565b8d606001518e608001516113c8565b9350905082610b4d575060009788975095505050505050565b818110610beb576000610b87858a60400151858c60e00151670de0b6b3a7640000610b78919061202b565b8d606001518e608001516116f7565b9450905083158015610b9c57508860c0015183105b15610bb35750600098600198509650505050505050565b83610bc957506000988998509650505050505050565b610bd28161126e565b610bdb90612071565b9960019950975050505050505050565b6000886020015112610c2257610c0a8860a0015185610324919061202b565b610c1390612071565b98600198509650505050505050565b60a08801518851610c0a916103249161202b565b6000831215610d89576000610c4a84612071565b90506000610c7e8489604001518a60e00151670de0b6b3a7640000610c6f919061202b565b8b606001518c6080015161160f565b9350905082610c97575060009788975095505050505050565b818110610d1c576000610cd1858a60400151858c60e00151670de0b6b3a7640000610cc2919061202b565b8d606001518e608001516117ba565b9450905083158015610ce657508860c0015183105b15610cfd5750600098600198509650505050505050565b83610d1357506000988998509650505050505050565b610bdb8161126e565b6000610d4e858a604001518b60e00151670de0b6b3a7640000610d3f919061202b565b8c606001518d60800151611891565b9450905083610d6857506000988998509650505050505050565b610bdb610d7f8a6060015184866106b7919061202b565b610324908361205e565b50600095600195509350505050565b60008060008084600003610db757508792508691508590506001610ea4565b600085610dc38b61126e565b610dcd919061208d565b9050610dd88761126e565b811215610df357600080600080945094509450945050610ea4565b80945060008912610e1357610e0c610324868b8d61129c565b9350610e36565b610e2a610324610e228b612071565b87908d611248565b610e3390612071565b93505b600080610e438c8c6116bb565b9150915080610e62576000806000809650965096509650505050610ea4565b6000610e6e88886116bb565b9250905081610e8e57600080600080975097509750975050505050610ea4565b610e998b828561129c565b955060019450505050505b95509550955095915050565b6000806000610ebe846112cf565b915091508061023657604051635516328b60e11b815260040160405180910390fd5b6000806000808412610f0457855160400151610efd90859061205e565b9050610f3f565b6000610f0f85612071565b875160400151909150811015610f2f578651604001518190039150610f3d565b6000809350935050506102e9565b505b855180516020909101516000918291610f5891906116bb565b9150915080610f7057600080945094505050506102e9565b875160e0810151604090910151600091610fa591610f9991610f929190611947565b8a906115b8565b6101008b0151906115fa565b895160e0810151608090910151610fd691610fca91610fc490886115b8565b90611947565b8b5160600151906115fa565b610fe0919061205e565b9050600061101861100c6110058c6000015160e001518861194790919063ffffffff16565b8b906115a3565b6101008c0151906115e5565b905080821015611033576000809650965050505050506102e9565b80820391506000611075858c60000151604001518d6000015160e00151670de0b6b3a7640000611063919061202b565b8e5160608101516080909101516119b2565b9050600061109f8c6000015160e00151670de0b6b3a7640000611098919061202b565b8890611947565b9050808210156110bc5760008098509850505050505050506102e9565b8b516080810151606090910151918303916110d8918391611248565b9050670de0b6b3a76400008110611123578b5160e0015161111c906111159061110990670de0b6b3a764000061202b565b8e5160e00151906115fa565b8290611947565b9050611152565b8b5160e0015161114f906111159061114390670de0b6b3a764000061202b565b8e5160e00151906115e5565b90505b8b51606001516111659085908390611248565b935083670de0b6b3a764000011156111895783670de0b6b3a764000003935061119d565b6000600198509850505050505050506102e9565b60008c60e00151126112005760c08c015160e08d01516111bc916115fa565b9250670de0b6b3a76400008311156111e15760008098509850505050505050506102e9565b670de0b6b3a764000092909203916111f984846115b8565b9350611235565b6112326112198d60c001518e60e001516106b790612071565b61122b90670de0b6b3a764000061205e565b85906115b8565b93505b50919a60019a5098505050505050505050565b600082600019048411830215820261125f57600080fd5b50910281810615159190040190565b60006001600160ff1b038211156112985760405163396ea70160e11b815260040160405180910390fd5b5090565b60008260001904841183021582026112b357600080fd5b5091020490565b60008183116112c957826101b5565b50919050565b60008060008060006112e086610a69565b91509150806112f757506000958695509350505050565b6113048660a0015161126e565b61130d876102f1565b8361131b896000015161126e565b611325919061208d565b61132f919061208d565b611339919061203e565b9250505060008112156113525750600093849350915050565b9360019350915050565b602083015160009061136e90846115fa565b604085015161137e9084906115e5565b10158015610188575060208401516113ae90846113a7633b9aca00670de0b6b3a764000061205e565b919061129c565b60408501516113be9084906115fa565b1115949350505050565b60008060008812156113ea576113dd88612071565b6113e7908761205e565b95505b6000806113f78b8b6116bb565b915091508061140e576000809350935050506114c1565b600061141d838b8a8a8a6119e1565b9050600061143a6114328a610fc48a8e6115a3565b899089611248565b9050808210156114545760008095509550505050506114c1565b808203670de0b6b3a764000081106114825761147b611115670de0b6b3a76400008c6115e5565b905061149a565b611497611115670de0b6b3a76400008c6115fa565b90505b8b8110156114b3576000809650965050505050506114c1565b8b9003955060019450505050505b97509795505050505050565b60008060008360e00151136114e757506000928392509050565b60006114f684600001516102f1565b90506000611522856040015186606001518760400151611516919061205e565b60208801519190611248565b905060008212611549578082101561153c5781900361155f565b5060009485945092505050565b61155282612071565b61155c908261205e565b90505b60e085015160c0860151611574918390611248565b9050808560c00151101561158f575060009485945092505050565b808560c00151036001935093505050915091565b60006101b58383670de0b6b3a7640000611248565b60006101b58383670de0b6b3a764000061129c565b60008082126115dc5781610173565b61017382612071565b60006101b583670de0b6b3a76400008461129c565b60006101b583670de0b6b3a764000084611248565b600080600061162188888888886119b2565b9050600061164c670de0b6b3a764000061163b88886115e5565b611645919061205e565b83906115fa565b9050670de0b6b3a7640000811061167957611672611115670de0b6b3a7640000896115fa565b9050611691565b61168e611115670de0b6b3a7640000896115e5565b90505b808810156116a7576000809350935050506116b1565b8703925060019150505b9550959350505050565b6000806000836116ca8661126e565b6116d4919061203e565b905060008112156116ec5760008092509250506101a2565b946001945092505050565b600080600061170989898888886119b2565b905061171986610fc4898b61205e565b9750878110156117305760008092509250506117af565b87810361173e818688611248565b9050670de0b6b3a7640000811061176b57611764611115670de0b6b3a7640000896115fa565b9050611783565b611780611115670de0b6b3a7640000896115e5565b90505b61178d81866115fa565b9050808a10156117a5576000809350935050506117af565b8903925060019150505b965096945050505050565b60008060006117cc89898888886119b2565b9050868810156117e35760008092509250506117af565b96869003966117f28887611947565b9750878110156118095760008092509250506117af565b878103611817818688611248565b9050670de0b6b3a764000081106118445761183d611115670de0b6b3a7640000896115fa565b905061185c565b611859611115670de0b6b3a7640000896115e5565b90505b61186681866115fa565b90508981101561187e576000809350935050506117af565b9890980398600198509650505050505050565b60008060006118a388888888886119e1565b905060006118ce670de0b6b3a76400006118bd88886115fa565b6118c7919061205e565b83906115e5565b9050670de0b6b3a764000081106118fb576118f4611115670de0b6b3a7640000896115e5565b9050611913565b611910611115670de0b6b3a7640000896115fa565b90505b61191d81866115e5565b905088811015611935576000809350935050506116b1565b97909703976001975095505050505050565b6000816000036119605750670de0b6b3a7640000610173565b8260000361197057506000610173565b600061197b8361126e565b9050600061199061198b8661126e565b611a06565b90508181026119a7670de0b6b3a7640000826120b5565b9050610a5f81611c35565b60006119be8585611947565b6119d76119cf86610fc4868b6115a3565b859085611248565b610a5f919061205e565b60006119ed8585611947565b6119d76119fe86610fc4868b6115b8565b85908561129c565b6000808213611a285760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611ab49084901c61126e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611c5057506000919050565b680755bf798b4a1bf1e58212611c79576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610a5f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126e565b604051610180810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60006101808284031215611e4757600080fd5b611e4f611dca565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611ee457600080fd5b6101b58383611e34565b60006102808284031215611f0157600080fd5b611f09611e02565b9050611f158383611e34565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611f8c57600080fd5b611f968585611eee565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611fc157600080fd5b611fcb8484611eee565b94610280939093013593505050565b600080600080600060a08688031215611ff257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561017357610173612015565b818103600083128015838313168383128216171561023657610236612015565b8082018082111561017357610173612015565b6000600160ff1b820161208657612086612015565b5060000390565b80820182811260008312801582168215821617156120ad576120ad612015565b505092915050565b6000826120d257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156120ec576120ec612015565b50059056fea264697066735822122069cf9577680f2a7b8d38af93e5be017b04a0721746472dcba4bb25eea6ff0cfd64736f6c63430008140033",
        "sourceMap": "126:3229:138:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100885760003560e01c8063a4fc6f811161005b578063a4fc6f8114610101578063b500f3cb14610114578063c00b11d314610142578063c615b2d91461015557600080fd5b806332c5dec41461008d5780633f9ccc01146100b35780639e5fc16b146100c6578063a0d1643c146100ee575b600080fd5b6100a061009b366004611ed1565b610168565b6040519081526020015b60405180910390f35b6100a06100c1366004611f76565b610179565b6100d96100d4366004611fad565b610190565b604080519283529015156020830152016100aa565b6100a06100fc366004611fad565b6101a9565b6100a061010f366004611ed1565b6101bc565b610127610122366004611fda565b61023d565b604080519384526020840192909252908201526060016100aa565b6100a0610150366004611ed1565b6102cb565b6100d9610163366004611f76565b6102d6565b6000610173826102f1565b92915050565b60006101888484846004610364565b949350505050565b60008061019d848461088d565b915091505b9250929050565b60006101b5838361099c565b9392505050565b60008060006101ca84610a69565b91509150806102365760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b6000806000806102508989898989610d98565b92965090945092509050806102bf5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b606482015260840161022d565b50955095509592505050565b600061017382610eb0565b6000806102e4858585610ee0565b915091505b935093915050565b6000610329610324836101200151670de0b6b3a7640000610312919061202b565b60608501516101008601519190611248565b61126e565b61035a610324846101600151670de0b6b3a7640000610348919061202b565b6060860151610140870151919061129c565b610173919061203e565b6000808560600151866040015161037b919061205e565b60208701516060880151919250600091610395918461129c565b90508660a001516000036103ac5791506101889050565b600080808960048810156103bf57600497505b60005b8881101561072f576103d4868b6112ba565b9550600061040b8360c001518460e00151856101000151866000015160a001516103fd8c61126e565b61040690612071565b610d98565b8651604081019290925260208201929092529190915290508061043957600098505050505050505050610188565b60006104488e600001516112cf565b92509050816104635760009950505050505050505050610188565b61046e84828b61135c565b1561048457879950505050505050505050610188565b60008460a0015113156105ed57835180516020820151604083015160a084015160e0909401516000946104d8949392916104c690670de0b6b3a764000061202b565b8a5160608101516080909101516113c8565b93509050826104f45760009a5050505050505050505050610188565b808560a00151106105eb57610508856114cd565b9099509250826105255760009a5050505050505050505050610188565b61054a8560c001518660e00151876101000151886000015160a001516103fd8e61126e565b8851604081019290925260208201929092529190915292508261057a5760009a5050505050505050505050610188565b845180516020820151604083015160a084015160e0909401516105aa94906104c690670de0b6b3a764000061202b565b93509050826105c65760009a5050505050505050505050610188565b8e60a0015181116105e357889a5050505050505050505050610188565b5050506103c2565b505b60006105fe858f8760a00151610ee0565b935090508215806106175750670de0b6b3a76400008110155b1561062f5760009a5050505050505050505050610188565b80670de0b6b3a7640000039050600061065c610324876040015188602001516115a390919063ffffffff16565b610669610324858e6115b8565b610673919061203e565b90508815806106915750610686896115cd565b61068f826115cd565b125b156106a0578098508997508296505b60008113156106ce576106bd8b6106b783856115e5565b906115e5565b6106c7908b61205e565b9950610720565b60008112156107175760006106e88c6106b7858186612071565b90508a8110156106fc57808b039a50610711565b60009c50505050505050505050505050610188565b50610720565b5050505061072f565b846001019450505050506103c2565b5060006107578260c001518360e00151846101000151856000015160a001516103fd8b61126e565b85516040810192909252602082019290925291909152905080610784576000975050505050505050610188565b60006107938360000151610eb0565b905060006107b5610324856040015186602001516115a390919063ffffffff16565b6107c2610324848c6115b8565b6107cc919061203e565b90506107d7876115cd565b6107e0826115cd565b12156107ed578795508194505b610814610808655af3107a4000670de0b6b3a764000061202b565b6020860151908b611248565b60408501516108249087906115e5565b10806108645750610852610846655af3107a4000670de0b6b3a764000061205e565b6020860151908b61129c565b60408501516108629087906115fa565b115b1561087b5760009950505050505050505050610188565b50939c9b505050505050505050505050565b60008060008460a00151126108aa575050608082015160016101a2565b60008460a001516108ba90612071565b905060006108f685876101000151886000015160e00151670de0b6b3a76400006108e4919061202b565b8951606081015160809091015161160f565b93509050821580610905575080155b15610918576000809350935050506101a2565b600061092483836115fa565b9050670de0b6b3a764000081116109605780670de0b6b3a76400000394506109598760c00151866115b890919063ffffffff16565b945061096f565b600080945094505050506101a2565b866080015185111561098e5786608001516001945094505050506101a2565b506001925050509250929050565b6000806109c48460c001518560e00151866101000151876000015160a001516103fd8861126e565b875160408101929092526020820192909252919091529050806109eb576000915050610173565b60006109fa85600001516112cf565b9250905081610a0e57600092505050610173565b84602001518110610a2457600092505050610173565b600085606001518660400151610a3a919061205e565b9050610a558287602001518361129c9092919063ffffffff16565b610a5f908261202b565b9695505050505050565b6000806000610a8e6103248561016001518661014001516115b890919063ffffffff16565b610aae6103248661012001518761010001516115a390919063ffffffff16565b610ab8919061203e565b9050600080610acf866000015187602001516116bb565b9150915080610ae657506000958695509350505050565b6000831315610c365760008390506000610b34886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610b25919061202b565b8d606001518e608001516113c8565b9350905082610b4d575060009788975095505050505050565b818110610beb576000610b87858a60400151858c60e00151670de0b6b3a7640000610b78919061202b565b8d606001518e608001516116f7565b9450905083158015610b9c57508860c0015183105b15610bb35750600098600198509650505050505050565b83610bc957506000988998509650505050505050565b610bd28161126e565b610bdb90612071565b9960019950975050505050505050565b6000886020015112610c2257610c0a8860a0015185610324919061202b565b610c1390612071565b98600198509650505050505050565b60a08801518851610c0a916103249161202b565b6000831215610d89576000610c4a84612071565b90506000610c7e8489604001518a60e00151670de0b6b3a7640000610c6f919061202b565b8b606001518c6080015161160f565b9350905082610c97575060009788975095505050505050565b818110610d1c576000610cd1858a60400151858c60e00151670de0b6b3a7640000610cc2919061202b565b8d606001518e608001516117ba565b9450905083158015610ce657508860c0015183105b15610cfd5750600098600198509650505050505050565b83610d1357506000988998509650505050505050565b610bdb8161126e565b6000610d4e858a604001518b60e00151670de0b6b3a7640000610d3f919061202b565b8c606001518d60800151611891565b9450905083610d6857506000988998509650505050505050565b610bdb610d7f8a6060015184866106b7919061202b565b610324908361205e565b50600095600195509350505050565b60008060008084600003610db757508792508691508590506001610ea4565b600085610dc38b61126e565b610dcd919061208d565b9050610dd88761126e565b811215610df357600080600080945094509450945050610ea4565b80945060008912610e1357610e0c610324868b8d61129c565b9350610e36565b610e2a610324610e228b612071565b87908d611248565b610e3390612071565b93505b600080610e438c8c6116bb565b9150915080610e62576000806000809650965096509650505050610ea4565b6000610e6e88886116bb565b9250905081610e8e57600080600080975097509750975050505050610ea4565b610e998b828561129c565b955060019450505050505b95509550955095915050565b6000806000610ebe846112cf565b915091508061023657604051635516328b60e11b815260040160405180910390fd5b6000806000808412610f0457855160400151610efd90859061205e565b9050610f3f565b6000610f0f85612071565b875160400151909150811015610f2f578651604001518190039150610f3d565b6000809350935050506102e9565b505b855180516020909101516000918291610f5891906116bb565b9150915080610f7057600080945094505050506102e9565b875160e0810151604090910151600091610fa591610f9991610f929190611947565b8a906115b8565b6101008b0151906115fa565b895160e0810151608090910151610fd691610fca91610fc490886115b8565b90611947565b8b5160600151906115fa565b610fe0919061205e565b9050600061101861100c6110058c6000015160e001518861194790919063ffffffff16565b8b906115a3565b6101008c0151906115e5565b905080821015611033576000809650965050505050506102e9565b80820391506000611075858c60000151604001518d6000015160e00151670de0b6b3a7640000611063919061202b565b8e5160608101516080909101516119b2565b9050600061109f8c6000015160e00151670de0b6b3a7640000611098919061202b565b8890611947565b9050808210156110bc5760008098509850505050505050506102e9565b8b516080810151606090910151918303916110d8918391611248565b9050670de0b6b3a76400008110611123578b5160e0015161111c906111159061110990670de0b6b3a764000061202b565b8e5160e00151906115fa565b8290611947565b9050611152565b8b5160e0015161114f906111159061114390670de0b6b3a764000061202b565b8e5160e00151906115e5565b90505b8b51606001516111659085908390611248565b935083670de0b6b3a764000011156111895783670de0b6b3a764000003935061119d565b6000600198509850505050505050506102e9565b60008c60e00151126112005760c08c015160e08d01516111bc916115fa565b9250670de0b6b3a76400008311156111e15760008098509850505050505050506102e9565b670de0b6b3a764000092909203916111f984846115b8565b9350611235565b6112326112198d60c001518e60e001516106b790612071565b61122b90670de0b6b3a764000061205e565b85906115b8565b93505b50919a60019a5098505050505050505050565b600082600019048411830215820261125f57600080fd5b50910281810615159190040190565b60006001600160ff1b038211156112985760405163396ea70160e11b815260040160405180910390fd5b5090565b60008260001904841183021582026112b357600080fd5b5091020490565b60008183116112c957826101b5565b50919050565b60008060008060006112e086610a69565b91509150806112f757506000958695509350505050565b6113048660a0015161126e565b61130d876102f1565b8361131b896000015161126e565b611325919061208d565b61132f919061208d565b611339919061203e565b9250505060008112156113525750600093849350915050565b9360019350915050565b602083015160009061136e90846115fa565b604085015161137e9084906115e5565b10158015610188575060208401516113ae90846113a7633b9aca00670de0b6b3a764000061205e565b919061129c565b60408501516113be9084906115fa565b1115949350505050565b60008060008812156113ea576113dd88612071565b6113e7908761205e565b95505b6000806113f78b8b6116bb565b915091508061140e576000809350935050506114c1565b600061141d838b8a8a8a6119e1565b9050600061143a6114328a610fc48a8e6115a3565b899089611248565b9050808210156114545760008095509550505050506114c1565b808203670de0b6b3a764000081106114825761147b611115670de0b6b3a76400008c6115e5565b905061149a565b611497611115670de0b6b3a76400008c6115fa565b90505b8b8110156114b3576000809650965050505050506114c1565b8b9003955060019450505050505b97509795505050505050565b60008060008360e00151136114e757506000928392509050565b60006114f684600001516102f1565b90506000611522856040015186606001518760400151611516919061205e565b60208801519190611248565b905060008212611549578082101561153c5781900361155f565b5060009485945092505050565b61155282612071565b61155c908261205e565b90505b60e085015160c0860151611574918390611248565b9050808560c00151101561158f575060009485945092505050565b808560c00151036001935093505050915091565b60006101b58383670de0b6b3a7640000611248565b60006101b58383670de0b6b3a764000061129c565b60008082126115dc5781610173565b61017382612071565b60006101b583670de0b6b3a76400008461129c565b60006101b583670de0b6b3a764000084611248565b600080600061162188888888886119b2565b9050600061164c670de0b6b3a764000061163b88886115e5565b611645919061205e565b83906115fa565b9050670de0b6b3a7640000811061167957611672611115670de0b6b3a7640000896115fa565b9050611691565b61168e611115670de0b6b3a7640000896115e5565b90505b808810156116a7576000809350935050506116b1565b8703925060019150505b9550959350505050565b6000806000836116ca8661126e565b6116d4919061203e565b905060008112156116ec5760008092509250506101a2565b946001945092505050565b600080600061170989898888886119b2565b905061171986610fc4898b61205e565b9750878110156117305760008092509250506117af565b87810361173e818688611248565b9050670de0b6b3a7640000811061176b57611764611115670de0b6b3a7640000896115fa565b9050611783565b611780611115670de0b6b3a7640000896115e5565b90505b61178d81866115fa565b9050808a10156117a5576000809350935050506117af565b8903925060019150505b965096945050505050565b60008060006117cc89898888886119b2565b9050868810156117e35760008092509250506117af565b96869003966117f28887611947565b9750878110156118095760008092509250506117af565b878103611817818688611248565b9050670de0b6b3a764000081106118445761183d611115670de0b6b3a7640000896115fa565b905061185c565b611859611115670de0b6b3a7640000896115e5565b90505b61186681866115fa565b90508981101561187e576000809350935050506117af565b9890980398600198509650505050505050565b60008060006118a388888888886119e1565b905060006118ce670de0b6b3a76400006118bd88886115fa565b6118c7919061205e565b83906115e5565b9050670de0b6b3a764000081106118fb576118f4611115670de0b6b3a7640000896115e5565b9050611913565b611910611115670de0b6b3a7640000896115fa565b90505b61191d81866115e5565b905088811015611935576000809350935050506116b1565b97909703976001975095505050505050565b6000816000036119605750670de0b6b3a7640000610173565b8260000361197057506000610173565b600061197b8361126e565b9050600061199061198b8661126e565b611a06565b90508181026119a7670de0b6b3a7640000826120b5565b9050610a5f81611c35565b60006119be8585611947565b6119d76119cf86610fc4868b6115a3565b859085611248565b610a5f919061205e565b60006119ed8585611947565b6119d76119fe86610fc4868b6115b8565b85908561129c565b6000808213611a285760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611ab49084901c61126e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611c5057506000919050565b680755bf798b4a1bf1e58212611c79576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610a5f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126e565b604051610180810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611dfc57634e487b7160e01b600052604160045260246000fd5b60006101808284031215611e4757600080fd5b611e4f611dca565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611ee457600080fd5b6101b58383611e34565b60006102808284031215611f0157600080fd5b611f09611e02565b9050611f158383611e34565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611f8c57600080fd5b611f968585611eee565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611fc157600080fd5b611fcb8484611eee565b94610280939093013593505050565b600080600080600060a08688031215611ff257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561017357610173612015565b818103600083128015838313168383128216171561023657610236612015565b8082018082111561017357610173612015565b6000600160ff1b820161208657612086612015565b5060000390565b80820182811260008312801582168215821617156120ad576120ad612015565b505092915050565b6000826120d257634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156120ec576120ec612015565b50059056fea264697066735822122069cf9577680f2a7b8d38af93e5be017b04a0721746472dcba4bb25eea6ff0cfd64736f6c63430008140033",
        "sourceMap": "126:3229:138:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1130:179;;;;;;:::i;:::-;;:::i;:::-;;;2167:25:234;;;2155:2;2140:18;1130:179:138;;;;;;;;2030:504;;;;;;:::i;:::-;;:::i;2540:360::-;;;;;;:::i;:::-;;:::i;:::-;;;;4117:25:234;;;4185:14;;4178:22;4173:2;4158:18;;4151:50;4090:18;2540:360:138;3949:258:234;1656:368:138;;;;;;:::i;:::-;;:::i;1315:335::-;;;;;;:::i;:::-;;:::i;152:786::-;;;;;;:::i;:::-;;:::i;:::-;;;;4869:25:234;;;4925:2;4910:18;;4903:34;;;;4953:18;;;4946:34;4857:2;4842:18;152:786:138;4669:317:234;944:180:138;;;;;;:::i;:::-;;:::i;2906:447::-;;;;;;:::i;:::-;;:::i;1130:179::-;1240:6;1265:37;1294:7;1265:28;:37::i;:::-;1258:44;1130:179;-1:-1:-1;;1130:179:138:o;2030:504::-;2258:7;2296:231;2363:7;2388:31;2437:22;871:1:124;2296:49:138;:231::i;:::-;2277:250;2030:504;-1:-1:-1;;;;2030:504:138:o;2540:360::-;2720:7;2729:4;2764:129;2823:7;2848:31;2764:41;:129::i;:::-;2745:148;;;;2540:360;;;;;;:::o;1656:368::-;1843:7;1881:136;1959:7;1984:19;1881:60;:136::i;:::-;1862:155;1656:368;-1:-1:-1;;;1656:368:138:o;1315:335::-;1426:6;1445:20;1467:12;1483:55;1530:7;1483:46;:55::i;:::-;1444:94;;;;1556:7;1548:65;;;;-1:-1:-1;;;1548:65:138;;5602:2:234;1548:65:138;;;5584:21:234;5641:2;5621:18;;;5614:30;5680:34;5660:18;;;5653:62;-1:-1:-1;;;5731:18:234;;;5724:43;5784:19;;1548:65:138;;;;;;;;;-1:-1:-1;1630:13:138;1315:335;-1:-1:-1;;1315:335:138:o;152:786::-;423:21;458:22;494:20;539:12;619:235;685:14;717:16;751:13;782:21;821:19;619:48;:235::i;:::-;561:293;;-1:-1:-1;561:293:138;;-1:-1:-1;561:293:138;-1:-1:-1;561:293:138;-1:-1:-1;561:293:138;864:67;;;;-1:-1:-1;;;864:67:138;;6016:2:234;864:67:138;;;5998:21:234;6055:2;6035:18;;;6028:30;6094:34;6074:18;;;6067:62;-1:-1:-1;;;6145:18:234;;;6138:45;6200:19;;864:67:138;5814:411:234;864:67:138;529:409;152:786;;;;;;;;;:::o;944:180::-;1054:7;1080:37;1109:7;1080:28;:37::i;2906:447::-;3129:7;3138:4;3173:173;3247:7;3272:31;3321:11;3173:56;:173::i;:::-;3154:192;;;;2906:447;;;;;;;:::o;18624:1167:124:-;18727:6;19585:199;19603:156;19664:7;:32;;;193:4:122;19658:38:124;;;;:::i;:::-;19718:23;;;;19603:24;;;;;:156;:33;:156::i;:::-;19585:197;:199::i;:::-;19367:203;19385:160;19449:7;:33;;;193:4:122;19443:39:124;;;;:::i;:::-;19504:23;;;;19385:25;;;;;:160;:36;:160::i;19367:203::-;:417;;;;:::i;29410:13695::-;29663:7;29724:21;29790:7;:35;;;29748:7;:27;;;:77;;;;:::i;:::-;30383:28;;;;30323:35;;;;29724:101;;-1:-1:-1;30299:21:124;;30323:125;;29724:101;30323:46;:125::i;:::-;30299:149;;30561:7;:21;;;30586:1;30561:26;30557:77;;30610:13;-1:-1:-1;30603:20:124;;-1:-1:-1;30603:20:124;30557:77;30992:20;;;31140:7;871:1;31185:46;;31181:123;;;871:1;31247:46;;31181:123;31318:9;31313:9510;31337:14;31333:1;:18;31313:9510;;;31526:41;:13;31544:22;31526:17;:41::i;:::-;31510:57;;31651:12;31891:288;31937:6;:28;;;31983:6;:30;;;32031:6;:27;;;32076:6;:25;;;:46;;;32141:24;:13;:22;:24::i;:::-;32140:25;;;:::i;:::-;31891:28;:288::i;:::-;31695:25;;31811:38;;;31677:502;;;;31752:41;;;31677:502;;;;;;;;;-1:-1:-1;31677:502:124;32193:268;;32445:1;32438:8;;;;;;;;;;;;32193:268;32521:20;32581:83;32624:7;:26;;;32581:25;:83::i;:::-;32555:109;-1:-1:-1;32555:109:124;-1:-1:-1;32555:109:124;32678:265;;32927:1;32920:8;;;;;;;;;;;;;32678:265;33047:166;33120:6;33148:12;33182:13;33047:51;:166::i;:::-;33026:255;;;33253:13;33246:20;;;;;;;;;;;;;33026:255;33530:1;33507:6;:20;;;:24;33503:4415;;;33827:25;;:39;;33892:41;;;;33959:38;;;;34023:46;;;;34101:37;;;;;33672:21;;33738:563;;33827:39;33892:41;33959:38;34095:43;;193:4:122;34095:43:124;:::i;:::-;34164:25;;:41;;;;34231:48;;;;;33738:63;:563::i;:::-;33711:590;-1:-1:-1;33711:590:124;-1:-1:-1;33711:590:124;34319:289;;34588:1;34581:8;;;;;;;;;;;;;;34319:289;34819:13;34794:6;:20;;;34786:46;34782:3122;;35100:115;35187:6;35100:61;:115::i;:::-;35003:212;;-1:-1:-1;35003:212:124;-1:-1:-1;35003:212:124;35237:200;;35413:1;35406:8;;;;;;;;;;;;;;35237:200;35849:336;35903:6;:28;;;35957:6;:30;;;36013:6;:27;;;36066:6;:25;;;:46;;;36139:24;:13;:22;:24::i;35849:336::-;35621:25;;35753:38;;;35595:590;;;;35686:41;;;35595:590;;;;;;;;;-1:-1:-1;35595:590:124;36207:200;;36383:1;36376:8;;;;;;;;;;;;;;36207:200;36552:25;;:39;;36621:41;;;;36692:38;;;;36760:46;;;;36842:37;;;;;36455:599;;36760:46;36836:43;;193:4:122;36836:43:124;:::i;36455:599::-;36428:626;-1:-1:-1;36428:626:124;-1:-1:-1;36428:626:124;37076:200;;37252:1;37245:8;;;;;;;;;;;;;;37076:200;37599:7;:21;;;37574:13;:47;37570:316;;37656:13;37649:20;;;;;;;;;;;;;;37570:316;37855:8;;;31313:9510;;37570:316;33533:4385;33503:4415;38194:18;38296:174;38363:6;38387:31;38436:6;:20;;;38296:49;:174::i;:::-;38226:244;-1:-1:-1;38226:244:124;-1:-1:-1;38488:8:124;;;:29;;;193:4:122;38500:10:124;:17;;38488:29;38484:189;;;38657:1;38650:8;;;;;;;;;;;;;;38484:189;38733:10;193:4:122;38727:16:124;38714:29;;39160:12;39240:135;:103;39316:6;:26;;;39240:6;:48;;;:75;;:103;;;;:::i;:135::-;39175:46;:35;:12;39196:13;39175:20;:35::i;:46::-;:200;;;;:::i;:::-;39160:215;-1:-1:-1;39393:18:124;;;:55;;;39429:19;:13;:17;:19::i;:::-;39415:11;:5;:9;:11::i;:::-;:33;39393:55;39389:221;;;39484:5;39468:21;;39530:13;39507:36;;39583:12;39561:34;;39389:221;39829:1;39821:5;:9;39817:893;;;39994:57;40037:13;39994:34;40002:5;40017:10;39994:22;:34::i;:::-;:42;;:57::i;:::-;39958:93;;:13;:93;:::i;:::-;39922:129;;39817:893;;;40084:1;40076:5;:9;40072:638;;;40177:14;40194:96;40259:13;40194:35;40218:10;40194:35;40203:5;40202:6;:::i;40194:96::-;40177:113;;40321:13;40312:6;:22;40308:344;;;40426:6;40410:13;:22;40394:38;;40308:344;;;40632:1;40625:8;;;;;;;;;;;;;;;;40308:344;40087:579;40072:638;;;40690:5;;;;;;40072:638;40795:3;;;;;31355:9468;;;;31313:9510;;;;40907:13;41125:264;41167:6;:28;;;41209:6;:30;;;41253:6;:27;;;41294:6;:25;;;:46;;;41355:24;:13;:22;:24::i;41125:264::-;40944:25;;41052:38;;;40930:459;;;;40997:41;;;40930:459;;;;;;;;;-1:-1:-1;40930:459:124;41399:153;;41540:1;41533:8;;;;;;;;;;;41399:153;41561:21;41585:70;41620:6;:25;;;41585:21;:70::i;:::-;41561:94;;41888:16;41969:123;:95;42037:6;:26;;;41969:6;:44;;;:67;;:95;;;;:::i;:123::-;41907:47;:36;:13;41929;41907:21;:36::i;:47::-;:185;;;;:::i;:::-;41888:204;;42124:19;:13;:17;:19::i;:::-;42106:15;:9;:13;:15::i;:::-;:37;42102:153;;;42182:13;42159:36;;42231:13;42209:35;;42102:153;42510:129;42564:30;1205:4;193::122;42564:30:124;:::i;:::-;42510:27;;;;;42612:13;42510:36;:129::i;:::-;42468:26;;;;42440:55;;:19;;:27;:55::i;:::-;:199;:472;;;-1:-1:-1;42781:131:124;42837:30;1205:4;193::122;42837:30:124;:::i;:::-;42781:27;;;;;42885:13;42781:38;:131::i;:::-;42739:26;;;;42713:53;;:19;;:25;:53::i;:::-;:199;42440:472;42363:698;;;43049:1;43042:8;;;;;;;;;;;;;42363:698;-1:-1:-1;43078:20:124;;29410:13695;-1:-1:-1;;;;;;;;;;;;29410:13695:124:o;49421:3239::-;49594:29;49625:12;49814:1;49789:7;:21;;;:26;49785:84;;-1:-1:-1;;49839:12:124;;;;49853:4;49831:27;;49785:84;49878:21;49911:7;:21;;;49910:22;;;:::i;:::-;49878:55;;50182:21;50240:316;50296:31;50341:7;:28;;;50389:7;:26;;;:38;;;193:4:122;50383:44:124;;;;:::i;:::-;50441:26;;:42;;;;50497:49;;;;;50240:42;:316::i;:::-;50213:343;-1:-1:-1;50213:343:124;-1:-1:-1;50570:8:124;;;:30;;-1:-1:-1;50582:18:124;;50570:30;50566:78;;;50624:1;50627:5;50616:17;;;;;;;;50566:78;51667:24;51694:34;:13;51714;51694:19;:34::i;:::-;51667:61;;193:4:122;51911:16:124;:23;51907:453;;52008:16;193:4:122;52002:22:124;51978:46;;52076:90;52123:7;:29;;;52076:21;:29;;:90;;;;:::i;:::-;52052:114;;51907:453;;;52340:1;52343:5;52332:17;;;;;;;;;51907:453;52542:7;:12;;;52518:21;:36;52514:94;;;52578:7;:12;;;52592:4;52570:27;;;;;;;;;52514:94;-1:-1:-1;52648:4:124;;-1:-1:-1;;;49421:3239:124;;;;;:::o;26095:2209::-;26275:7;26374:12;26593:274;26635:7;:29;;;26678:7;:31;;;26723:7;:28;;;26765:7;:26;;;:47;;;26827:30;:19;:28;:30::i;26593:274::-;26410:26;;26520:39;;;26396:471;;;;26464:42;;;26396:471;;;;;;;;;-1:-1:-1;26396:471:124;26877:167;;27032:1;27025:8;;;;;26877:167;27053:26;27121:75;27160:7;:26;;;27121:25;:75::i;:::-;27089:107;-1:-1:-1;27089:107:124;-1:-1:-1;27089:107:124;27206:167;;27361:1;27354:8;;;;;;27206:167;27707:7;:28;;;27685:18;:50;27681:89;;27758:1;27751:8;;;;;;27681:89;28019:21;28085:7;:35;;;28043:7;:27;;;:77;;;;:::i;:::-;28019:101;;28177:120;28219:18;28255:7;:28;;;28177:13;:24;;:120;;;;;:::i;:::-;28149:148;;:13;:148;:::i;:::-;28130:167;26095:2209;-1:-1:-1;;;;;;26095:2209:124:o;8934:9443::-;9042:6;9050:4;9852:23;10007:130;:102;10075:7;:33;;;10007:7;:42;;;:67;;:102;;;;:::i;:130::-;9878:114;:90;9935:7;:32;;;9878:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9852:285;;10148:30;10180:12;10196:157;10277:7;:21;;;10316:7;:23;;;10196:63;:157::i;:::-;10147:206;;;;10368:7;10363:160;;-1:-1:-1;10503:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;10363:160::-;10772:1;10753:16;:20;10749:7595;;;10789:25;10825:16;10789:53;;11030:21;11092:401;11173:7;:21;;;11216:7;:23;;;11261:7;:20;;;11303:7;:28;;;11359:7;:19;;;193:4:122;11353:25:124;;;;:::i;:::-;11400:7;:23;;;11445:7;:30;;;11092:59;:401::i;:::-;11065:428;-1:-1:-1;11065:428:124;-1:-1:-1;11065:428:124;11507:176;;-1:-1:-1;11659:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;11507:176::-;11860:17;11843:13;:34;11839:2891;;12151:21;12217:389;12317:22;12365:7;:20;;;12411:17;12460:7;:19;;;193:4:122;12454:25:124;;;;:::i;:::-;12505:7;:23;;;12554:7;:30;;;12217:74;:389::i;:::-;12190:416;-1:-1:-1;12190:416:124;-1:-1:-1;12912:8:124;;:84;;;;;12964:7;:32;;;12944:17;:52;12912:84;12887:335;;;-1:-1:-1;13045:1:124;;13048:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;12887:335::-;13155:7;13150:72;;-1:-1:-1;13194:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;13150:72::-;13249:24;:13;:22;:24::i;:::-;13248:25;;;:::i;:::-;13240:40;13275:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;;8934:9443:124:o;11839:2891::-;13965:1;13938:7;:23;;;:28;13934:782;;14024:95;14050:7;:28;;;14025:22;:53;;;;:::i;14024:95::-;14023:96;;;:::i;:::-;13990:181;14145:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;13934:782::-;14576:28;;;;14552:21;;14551:94;;14552:52;;;:::i;10749:7595::-;14855:1;14836:16;:20;14832:3512;;;14872:25;14908:17;14909:16;14908:17;:::i;:::-;14872:54;;15043:21;15105:307;15186:22;15230:7;:20;;;15278:7;:19;;;193:4:122;15272:25:124;;;;:::i;:::-;15319:7;:23;;;15364:7;:30;;;15105:59;:307::i;:::-;15078:334;-1:-1:-1;15078:334:124;-1:-1:-1;15078:334:124;15426:64;;-1:-1:-1;15466:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;15426:64::-;15667:17;15650:13;:34;15646:2688;;15959:21;16025:387;16123:22;16171:7;:20;;;16217:17;16266:7;:19;;;193:4:122;16260:25:124;;;;:::i;:::-;16311:7;:23;;;16360:7;:30;;;16025:72;:387::i;:::-;15998:414;-1:-1:-1;15998:414:124;-1:-1:-1;16718:8:124;;:84;;;;;16770:7;:32;;;16750:17;:52;16718:84;16693:335;;;-1:-1:-1;16851:1:124;;16854:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16693:335::-;16961:7;16956:72;;-1:-1:-1;17000:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16956:72::-;17054:24;:13;:22;:24::i;15646:2688::-;17412:23;17482:335;17571:22;17619:7;:20;;;17671:7;:19;;;193:4:122;17665:25:124;;;;:::i;:::-;17716:7;:23;;;17765:7;:30;;;17482:63;:335::i;:::-;17453:364;-1:-1:-1;17453:364:124;-1:-1:-1;17453:364:124;17835:72;;-1:-1:-1;17879:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;17835:72::-;18098:177;18141:122;18214:7;:23;;;18162:13;18142:17;:33;;;;:::i;18141:122::-;18099:164;;:15;:164;:::i;14832:3512::-;-1:-1:-1;18362:1:124;;18365:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;2015:3557::-;2290:21;2325:22;2361:20;2395:4;2534:19;2557:1;2534:24;2530:117;;-1:-1:-1;2582:14:124;;-1:-1:-1;2598:16:124;;-1:-1:-1;2616:13:124;;-1:-1:-1;2631:4:124;2574:62;;2530:117;2816:21;2868:19;2840:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2816:71;;2918:32;:21;:30;:32::i;:::-;2901:14;:49;2897:103;;;2974:1;2977;2980;2983:5;2966:23;;;;;;;;;;;2897:103;3033:14;3009:39;;3623:1;3603:16;:21;3599:497;;3736:112;:84;:13;3786:16;3805:14;3736:41;:84::i;:112::-;3718:130;;3599:497;;;3974:111;:83;4022:17;4023:16;4022:17;:::i;:::-;3974:13;;4042:14;3974:39;:83::i;:111::-;3973:112;;;:::i;:::-;3955:130;;3599:497;4798:33;4833:12;4849:143;4930:14;4962:16;4849:63;:143::i;:::-;4797:195;;;;5007:7;5002:62;;5038:1;5041;5044;5047:5;5030:23;;;;;;;;;;;;;5002:62;5073:30;5149:141;5230:13;5261:15;5149:63;:141::i;:::-;5113:177;-1:-1:-1;5113:177:124;-1:-1:-1;5113:177:124;5300:62;;5336:1;5339;5342;5345:5;5328:23;;;;;;;;;;;;;;5300:62;5386:109;:13;5424:22;5460:25;5386:24;:109::i;:::-;5371:124;-1:-1:-1;5560:4:124;;-1:-1:-1;;;;;2015:3557:124;;;;;;;;;;;:::o;6397:341::-;6500:7;6520:20;6542:12;6558:56;6597:7;6558:25;:56::i;:::-;6519:95;;;;6629:7;6624:79;;6659:33;;-1:-1:-1;;;6659:33:124;;;;;;;;;;;55066:5798;55282:7;55291:4;55380:20;55429:1;55414:11;:16;55410:670;;55477:26;;:39;;;:78;;55543:11;;55477:78;:::i;:::-;55446:109;;55410:670;;;55586:18;55615:12;55616:11;55615:12;:::i;:::-;55659:26;;:39;;;55586:42;;-1:-1:-1;55646:52:124;;55642:428;;;55789:26;;:39;;;:76;;;;-1:-1:-1;55642:428:124;;;56046:1;56049:5;56038:17;;;;;;;;55642:428;55572:508;55410:670;56469:26;;:40;;56527:42;;;;;56340:30;;;;56388:195;;56469:40;56388:63;:195::i;:::-;56339:244;;;;56598:7;56593:56;;56629:1;56632:5;56621:17;;;;;;;;;56593:56;57141:26;;:38;;;;57072:39;;;;;56658:18;;56959:274;;57011:208;;57072:129;;:39;:43;:129::i;:::-;57011:31;;:39;:208::i;:::-;56959:28;;;;;:34;:274::i;:::-;56895:26;;:38;;;;56741:83;;;;;56679:265;;56741:193;;:132;;56850:22;56741:108;:132::i;:::-;:153;;:193::i;:::-;56679:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;56658:575;;57303:11;57317:185;57367:125;57422:56;57439:7;:26;;;:38;;;57422:12;:16;;:56;;;;:::i;:::-;57367:31;;:37;:125::i;:::-;57317:28;;;;;:36;:185::i;:::-;57303:199;;57529:3;57516:10;:16;57512:64;;;57556:1;57559:5;57548:17;;;;;;;;;;;57512:64;57623:3;57609:17;;;;57866:9;57878:294;57910:22;57946:7;:26;;;:39;;;58005:7;:26;;;:38;;;193:4:122;57999:44:124;;;;:::i;:::-;58057:26;;:42;;;;58113:49;;;;;57878:18;:294::i;:::-;57866:306;;58182:13;58198:84;58234:7;:26;;;:38;;;193:4:122;58228:44:124;;;;:::i;:::-;58198:12;;:16;:84::i;:::-;58182:100;;58300:5;58296:1;:9;58292:201;;;58473:1;58476:5;58465:17;;;;;;;;;;;;;58292:201;58599:26;;:49;;;;58662:42;;;;;58534:9;;;;58571:143;;58534:9;;58571:14;:143::i;:::-;58563:151;;193:4:122;58728:5:124;:12;58724:584;;58939:26;;:38;;;58840:169;;58867:128;;58933:44;;193:4:122;58933:44:124;:::i;:::-;58867:26;;:38;;;;:44;:128::i;:::-;58840:5;;:9;:169::i;:::-;58832:177;;58724:584;;;59227:26;;:38;;;59126:171;;59153:130;;59221:44;;193:4:122;59221:44:124;:::i;:::-;59153:26;;:38;;;;:46;:130::i;59126:171::-;59118:179;;58724:584;59460:26;;:42;;;59408:104;;:10;;59441:5;;59408:19;:104::i;:::-;59395:117;;59572:10;193:4:122;59566:16:124;59562:398;;;59645:10;193:4:122;59639:16:124;59626:29;;59562:398;;;59941:1;59944:4;59933:16;;;;;;;;;;;;;59562:398;60134:1;60099:7;:31;;;:36;60095:727;;60221:29;;;;60165:31;;;;60157:107;;:46;:107::i;:::-;60151:113;;193:4:122;60282:3:124;:9;60278:167;;;60421:1;60424:5;60413:17;;;;;;;;;;;;;60278:167;193:4:122;60492:9:124;;;;;60542:23;:10;60492:9;60542:18;:23::i;:::-;60529:36;;60095:727;;;60609:202;60671:126;60746:7;:29;;;60680:7;:31;;;60679:32;;;:::i;60671:126::-;60645:152;;193:4:122;60645:152:124;:::i;:::-;60609:10;;:18;:202::i;:::-;60596:215;;60095:727;-1:-1:-1;60840:10:124;;60852:4;;-1:-1:-1;55066:5798:124;-1:-1:-1;;;;;;;;;55066:5798:124:o;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:122;14987:104;-1:-1:-1;14987:104:122:o;7433:1173:124:-;7540:7;7549:4;7926:19;7970:20;7992:12;8008:65;8052:7;8008:26;:65::i;:::-;7969:104;;;;8092:7;8087:64;;-1:-1:-1;8127:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;;;7433:1173:124:o;8087:64::-;8327:39;:7;:28;;;:37;:39::i;:::-;8278:30;8300:7;8278:21;:30::i;:::-;8246:13;8195:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;8164:202;;7955:422;;8508:1;8493:12;:16;8489:64;;;-1:-1:-1;8533:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;8489:64::-;8579:12;8594:4;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;47380:1279::-;48007:28;;;;47584:4;;48007:50;;48042:14;48007:34;:50::i;:::-;47897:27;;;;47875:50;;:13;;:21;:50::i;:::-;:182;;:777;;;;-1:-1:-1;48578:28:124;;;;48503:149;;48624:14;48504:44;1047:3;193:4:122;48504:44:124;:::i;:::-;48503:57;:149;:57;:149::i;:::-;48391:27;;;;48371:48;;:13;;:19;:48::i;:::-;:281;;;47380:1279;-1:-1:-1;;;;47380:1279:124:o;16958:2070:126:-;17163:7;17172:4;17469:1;17462:4;:8;17458:67;;;17508:5;17509:4;17508:5;:::i;:::-;17493:21;;:4;:21;:::i;:::-;17486:28;;17458:67;18021:10;18033:12;18049:72;18113:1;18116:4;18049:63;:72::i;:::-;18020:101;;;;18137:7;18132:56;;18168:1;18171:5;18160:17;;;;;;;;18132:56;18197:9;18209:22;18215:2;18219:1;18222;18225;18228:2;18209:5;:22::i;:::-;18197:34;-1:-1:-1;18241:11:126;18255:37;18266:21;18285:1;18266:14;:2;18275:4;18266:8;:14::i;:21::-;18255:1;;18289:2;18255:10;:37::i;:::-;18241:51;;18310:3;18306:1;:7;18302:55;;;18337:1;18340:5;18329:17;;;;;;;;;;18302:55;18427:7;;;193:4:122;18458:15:126;;18454:295;;18572:28;18585:14;193:4:122;18597:1:126;18585:11;:14::i;18572:28::-;18561:39;;18454:295;;;18712:26;18725:12;193:4:122;18735:1:126;18725:9;:12::i;18712:26::-;18701:37;;18454:295;18906:1;18895:8;:12;18891:60;;;18931:1;18934:5;18923:17;;;;;;;;;;;18891:60;18992:12;;;;-1:-1:-1;19006:4:126;;-1:-1:-1;;;;;16958:2070:126;;;;;;;;;;;:::o;44796:1866:124:-;44947:7;44956:4;45238:1;45203:7;:31;;;:36;45199:84;;-1:-1:-1;45263:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;44796:1866:124:o;45199:84::-;45334:19;45356:49;45378:7;:26;;;45356:21;:49::i;:::-;45334:71;;45548:11;45562:167;45613:7;:27;;;45684:7;:35;;;45654:7;:27;;;:65;;;;:::i;:::-;45562:28;;;;;:167;:37;:167::i;:::-;45548:181;;45759:1;45743:12;:17;45739:411;;45804:3;45788:12;45780:27;45776:304;;;45859:28;;;45739:411;;45776:304;-1:-1:-1;46056:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;;;44796:1866:124:o;45739:411::-;46125:13;46126:12;46125:13;:::i;:::-;46110:29;;;;:::i;:::-;;;45739:411;46390:31;;;;46313:29;;;;:119;;46365:3;;46313:38;:119::i;:::-;46307:125;;46515:3;46483:7;:29;;;:35;46479:83;;;-1:-1:-1;46542:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;;;44796:1866:124:o;46479:83::-;46635:3;46603:7;:29;;;:35;46640:4;46595:50;;;;;;44796:1866;;;:::o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;16056:92::-;16102:6;16131:1;16127;:5;:14;;16140:1;16127:14;;;16135:2;16136:1;16135:2;:::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;15269:1050:126:-;15432:7;15441:4;15653:9;15665:20;15669:2;15673:1;15676;15679;15682:2;15665:3;:20::i;:::-;15653:32;-1:-1:-1;15695:16:126;15714:28;193:4:122;15722:13:126;:1;15732:2;15722:9;:13::i;:::-;:19;;;;:::i;:::-;15714:1;;:7;:28::i;:::-;15695:47;;193:4:122;15756:8:126;:15;15752:293;;15867:26;15880:12;193:4:122;15890:1:126;15880:9;:12::i;15867:26::-;15856:37;;15752:293;;;16006:28;16019:14;193:4:122;16031:1:126;16019:11;:14::i;16006:28::-;15995:39;;15752:293;16190:8;16186:1;:12;16182:60;;;16222:1;16225:5;16214:17;;;;;;;;16182:60;16283:12;;;-1:-1:-1;16297:4:126;;-1:-1:-1;;15269:1050:126;;;;;;;;;:::o;7132:398:123:-;7271:7;7280:4;7296:29;7368:16;7328:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7296:88;;7423:1;7398:22;:26;7394:74;;;7448:1;7451:5;7440:17;;;;;;;7394:74;7493:22;7518:4;;-1:-1:-1;7132:398:123;-1:-1:-1;;;7132:398:123:o;11086:1515:126:-;11280:7;11289:4;11443:9;11455:20;11459:2;11463:1;11466;11469;11472:2;11455:3;:20::i;:::-;11443:32;-1:-1:-1;11518:15:126;11531:1;11519:6;11523:2;11519:1;:6;:::i;11518:15::-;11514:19;;11615:1;11611;:5;11607:53;;;11640:1;11643:5;11632:17;;;;;;;11607:53;11864:5;;;11894:18;11864:5;11906:2;11910:1;11894:11;:18::i;:::-;11889:23;;193:4:122;11926:2:126;:9;11922:263;;12025:20;12032:12;193:4:122;12042:1:126;12032:9;:12::i;12025:20::-;12020:25;;11922:263;;;12152:22;12159:14;193:4:122;12171:1:126;12159:11;:14::i;12152:22::-;12147:27;;11922:263;12267:12;:2;12276;12267:8;:12::i;:::-;12262:17;;12404:2;12399;:7;12395:55;;;12430:1;12433:5;12422:17;;;;;;;;12395:55;12570:7;;;-1:-1:-1;12579:4:126;;-1:-1:-1;;11086:1515:126;;;;;;;;;;:::o;5309:1765::-;5501:7;5510:4;5664:9;5676:20;5680:2;5684:1;5687;5690;5693:2;5676:3;:20::i;:::-;5664:32;;5819:2;5815:1;:6;5811:54;;;5845:1;5848:5;5837:17;;;;;;;5811:54;5927:7;;;;;5958:8;5927:7;5964:1;5958:5;:8::i;:::-;5954:12;;6088:1;6084;:5;6080:53;;;6113:1;6116:5;6105:17;;;;;;;6080:53;6337:5;;;6367:18;6337:5;6379:2;6383:1;6367:11;:18::i;:::-;6362:23;;193:4:122;6399:2:126;:9;6395:261;;6497:20;6504:12;193:4:122;6514:1:126;6504:9;:12::i;6497:20::-;6492:25;;6395:261;;;6623:22;6630:14;193:4:122;6642:1:126;6630:11;:14::i;6623:22::-;6618:27;;6395:261;6738:12;:2;6747;6738:8;:12::i;:::-;6733:17;;6875:2;6870;:7;6866:55;;;6901:1;6904:5;6893:17;;;;;;;;6866:55;7043:7;;;;;7052:4;;-1:-1:-1;5309:1765:126;-1:-1:-1;;;;;;;5309:1765:126:o;13236:1409::-;13399:7;13408:4;13920:9;13932:22;13938:2;13942:1;13945;13948;13951:2;13932:5;:22::i;:::-;13920:34;-1:-1:-1;13964:17:126;13984:28;193:4:122;13994:11:126;:1;14002:2;13994:7;:11::i;:::-;:17;;;;:::i;:::-;13984:1;;:9;:28::i;:::-;13964:48;;193:4:122;14026:9:126;:16;14022:300;;14142:29;14156:14;193:4:122;14168:1:126;14156:11;:14::i;14142:29::-;14130:41;;14022:300;;;14284:27;14298:12;193:4:122;14308:1:126;14298:9;:12::i;14284:27::-;14272:39;;14022:300;14343:21;:9;14361:2;14343:17;:21::i;:::-;14331:33;;14520:2;14508:9;:14;14504:62;;;14546:1;14549:5;14538:17;;;;;;;;14504:62;14607:14;;;;;14623:4;;-1:-1:-1;13236:1409:126;-1:-1:-1;;;;;;13236:1409:126:o;3811:844:122:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;19535:343:126:-;19674:7;19863:8;:1;19869;19863:5;:8::i;:::-;19825:35;19836:19;19853:1;19836:12;:2;19845;19836:8;:12::i;:19::-;19825:1;;19857:2;19825:10;:35::i;:::-;:46;;;;:::i;20391:352::-;20532:7;20728:8;:1;20734;20728:5;:8::i;:::-;20686:39;20699:21;20718:1;20699:14;:2;20710;20699:10;:14::i;:21::-;20686:1;;20722:2;20686:12;:39::i;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:122;9286:41;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;14:351:234:-;85:2;79:9;127:6;115:19;;164:18;149:34;;185:22;;;146:62;143:185;;;250:10;245:3;241:20;238:1;231:31;285:4;282:1;275:15;313:4;310:1;303:15;143:185;344:2;337:22;14:351;:::o;370:347::-;437:2;431:9;479:6;467:19;;516:18;501:34;;537:22;;;498:62;495:185;;;602:10;597:3;593:20;590:1;583:31;637:4;634:1;627:15;665:4;662:1;655:15;722:1040;787:5;835:6;823:9;818:3;814:19;810:32;807:52;;;855:1;852;845:12;807:52;877:21;;:::i;:::-;868:30;;934:9;921:23;914:5;907:38;1005:2;994:9;990:18;977:32;972:2;965:5;961:14;954:56;1070:2;1059:9;1055:18;1042:32;1037:2;1030:5;1026:14;1019:56;1135:2;1124:9;1120:18;1107:32;1102:2;1095:5;1091:14;1084:56;1201:3;1190:9;1186:19;1173:33;1167:3;1160:5;1156:15;1149:58;1268:3;1257:9;1253:19;1240:33;1234:3;1227:5;1223:15;1216:58;1335:3;1324:9;1320:19;1307:33;1301:3;1294:5;1290:15;1283:58;1402:3;1391:9;1387:19;1374:33;1368:3;1361:5;1357:15;1350:58;1427:3;1490:2;1479:9;1475:18;1462:32;1457:2;1450:5;1446:14;1439:56;;1514:3;1577:2;1566:9;1562:18;1549:32;1544:2;1537:5;1533:14;1526:56;;1601:3;1664:2;1653:9;1649:18;1636:32;1631:2;1624:5;1620:14;1613:56;;1688:3;1751:2;1740:9;1736:18;1723:32;1718:2;1711:5;1707:14;1700:56;;722:1040;;;;:::o;1767:251::-;1863:6;1916:3;1904:9;1895:7;1891:23;1887:33;1884:53;;;1933:1;1930;1923:12;1884:53;1956:56;2004:7;1993:9;1956:56;:::i;2203:808::-;2276:5;2324:6;2312:9;2307:3;2303:19;2299:32;2296:52;;;2344:1;2341;2334:12;2296:52;2366:17;;:::i;:::-;2357:26;;2406:52;2454:3;2443:9;2406:52;:::i;:::-;2399:5;2392:67;2521:3;2510:9;2506:19;2493:33;2486:4;2479:5;2475:16;2468:59;2589:3;2578:9;2574:19;2561:33;2554:4;2547:5;2543:16;2536:59;2657:3;2646:9;2642:19;2629:33;2622:4;2615:5;2611:16;2604:59;2725:3;2714:9;2710:19;2697:33;2690:4;2683:5;2679:16;2672:59;2793:3;2782:9;2778:19;2765:33;2758:4;2751:5;2747:16;2740:59;2861:3;2850:9;2846:19;2833:33;2826:4;2819:5;2815:16;2808:59;2929:3;2918:9;2914:19;2901:33;2894:4;2887:5;2883:16;2876:59;2999:3;2988:9;2984:19;2971:33;2962:6;2955:5;2951:18;2944:61;2203:808;;;;:::o;3016:405::-;3138:6;3146;3154;3207:3;3195:9;3186:7;3182:23;3178:33;3175:53;;;3224:1;3221;3214:12;3175:53;3247:64;3303:7;3292:9;3247:64;:::i;:::-;3237:74;3358:3;3343:19;;3330:33;;-1:-1:-1;3410:3:234;3395:19;;;3382:33;;3016:405;-1:-1:-1;;;3016:405:234:o;3608:336::-;3721:6;3729;3782:3;3770:9;3761:7;3757:23;3753:33;3750:53;;;3799:1;3796;3789:12;3750:53;3822:64;3878:7;3867:9;3822:64;:::i;:::-;3812:74;3933:3;3918:19;;;;3905:33;;-1:-1:-1;;;3608:336:234:o;4212:452::-;4305:6;4313;4321;4329;4337;4390:3;4378:9;4369:7;4365:23;4361:33;4358:53;;;4407:1;4404;4397:12;4358:53;-1:-1:-1;;4430:23:234;;;4500:2;4485:18;;4472:32;;-1:-1:-1;4551:2:234;4536:18;;4523:32;;4602:2;4587:18;;4574:32;;-1:-1:-1;4653:3:234;4638:19;4625:33;;-1:-1:-1;4212:452:234;-1:-1:-1;4212:452:234:o;6230:127::-;6291:10;6286:3;6282:20;6279:1;6272:31;6322:4;6319:1;6312:15;6346:4;6343:1;6336:15;6362:128;6429:9;;;6450:11;;;6447:37;;;6464:18;;:::i;6495:200::-;6561:9;;;6534:4;6589:9;;6617:10;;6629:12;;;6613:29;6652:12;;;6644:21;;6610:56;6607:82;;;6669:18;;:::i;6700:125::-;6765:9;;;6786:10;;;6783:36;;;6799:18;;:::i;6830:136::-;6865:3;-1:-1:-1;;;6886:22:234;;6883:48;;6911:18;;:::i;:::-;-1:-1:-1;6951:1:234;6947:13;;6830:136::o;6971:216::-;7035:9;;;7063:11;;;7010:3;7093:9;;7121:10;;7117:19;;7146:10;;7138:19;;7114:44;7111:70;;;7161:18;;:::i;:::-;7111:70;;6971:216;;;;:::o;7324:290::-;7363:1;7389;7379:132;;7433:10;7428:3;7424:20;7421:1;7414:31;7468:4;7465:1;7458:15;7496:4;7493:1;7486:15;7379:132;-1:-1:-1;;;7527:18:234;;-1:-1:-1;;7547:13:234;;7523:38;7520:64;;;7564:18;;:::i;:::-;-1:-1:-1;7598:10:234;;7324:290::o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
        "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
        "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
        "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
        "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
        "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
        "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9",
        "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxShareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleShareProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleWithdrawalSharesRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShareReservesDeltaSafe\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetCurveTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetFlatTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_bondAmount\",\"type\":\"int256\"}],\"name\":\"calculateSharesDeltaGivenBondsDeltaDerivativeSafe\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"calculateUpdateLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLPMath.sol\":\"MockLPMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/MockLPMath.sol\":{\"keccak256\":\"0xe0e08a21de49a3b30961a3ef979a0d4903f052a412845173b608e01acc2f4d0e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1b10f7acdc3f2354a69d0458039ae042cbd7eff22192dfcb985d225621c19734\",\"dweb:/ipfs/QmXWCQgWmJYFcUynd28WL1uR6VYn2ttGXR83LsWUnEmd82\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.DistributeExcessIdleParams",
                            "name": "_params",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "struct LPMath.PresentValueParams",
                                    "name": "presentValueParams",
                                    "type": "tuple",
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
                                    ]
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
                            ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "calculateDistributeExcessIdleShareProceeds",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.DistributeExcessIdleParams",
                            "name": "_params",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "struct LPMath.PresentValueParams",
                                    "name": "presentValueParams",
                                    "type": "tuple",
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
                                    ]
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
                            ]
                        },
                        {
                            "internalType": "uint256",
                            "name": "_shareReservesDelta",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.DistributeExcessIdleParams",
                            "name": "_params",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "struct LPMath.PresentValueParams",
                                    "name": "presentValueParams",
                                    "type": "tuple",
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
                                    ]
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
                            ]
                        },
                        {
                            "internalType": "uint256",
                            "name": "_originalEffectiveShareReserves",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
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
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "_params",
                            "type": "tuple",
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
                            ]
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "calculateNetCurveTrade",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "_params",
                            "type": "tuple",
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
                            ]
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "calculateNetFlatTrade",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.PresentValueParams",
                            "name": "_params",
                            "type": "tuple",
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
                            ]
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "calculatePresentValue",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct LPMath.DistributeExcessIdleParams",
                            "name": "_params",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "struct LPMath.PresentValueParams",
                                    "name": "presentValueParams",
                                    "type": "tuple",
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
                                    ]
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
                            ]
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
                    "stateMutability": "pure",
                    "type": "function",
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
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
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
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/test/MockLPMath.sol": "MockLPMath"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb",
                "urls": [
                    "bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c",
                    "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424",
                "urls": [
                    "bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a",
                    "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189",
                "urls": [
                    "bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786",
                    "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e",
                "urls": [
                    "bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797",
                    "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockLPMath.sol": {
                "keccak256": "0xe0e08a21de49a3b30961a3ef979a0d4903f052a412845173b608e01acc2f4d0e",
                "urls": [
                    "bzz-raw://1b10f7acdc3f2354a69d0458039ae042cbd7eff22192dfcb985d225621c19734",
                    "dweb:/ipfs/QmXWCQgWmJYFcUynd28WL1uR6VYn2ttGXR83LsWUnEmd82"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockLPMath.sol",
        "id": 26149,
        "exportedSymbols": {
            "LPMath": [
                21642
            ],
            "MockLPMath": [
                26148
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3317:138",
        "nodes": [
            {
                "id": 25969,
                "nodeType": "PragmaDirective",
                "src": "39:23:138",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 25971,
                "nodeType": "ImportDirective",
                "src": "64:60:138",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "contracts/src/libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26149,
                "sourceUnit": 21643,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25970,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21642,
                            "src": "73:6:138",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26148,
                "nodeType": "ContractDefinition",
                "src": "126:3229:138",
                "nodes": [
                    {
                        "id": 26014,
                        "nodeType": "FunctionDefinition",
                        "src": "152:786:138",
                        "nodes": [],
                        "body": {
                            "id": 26013,
                            "nodeType": "Block",
                            "src": "529:409:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        25991
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 25991,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "544:7:138",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26013,
                                            "src": "539:12:138",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 25990,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "539:4:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25992,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "539:12:138"
                                },
                                {
                                    "expression": {
                                        "id": 26006,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 25993,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25984,
                                                    "src": "562:13:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25994,
                                                    "name": "shareAdjustment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25986,
                                                    "src": "577:15:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 25995,
                                                    "name": "bondReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25988,
                                                    "src": "594:12:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25996,
                                                    "name": "success",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25991,
                                                    "src": "608:7:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 25997,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "561:55:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,int256,uint256,bool)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26000,
                                                    "name": "_shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25973,
                                                    "src": "685:14:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 26001,
                                                    "name": "_shareAdjustment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25975,
                                                    "src": "717:16:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 26002,
                                                    "name": "_bondReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25977,
                                                    "src": "751:13:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 26003,
                                                    "name": "_minimumShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25979,
                                                    "src": "782:21:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 26004,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25981,
                                                    "src": "821:19:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 25998,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21642,
                                                    "src": "619:6:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 25999,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "639:28:138",
                                                "memberName": "calculateUpdateLiquiditySafe",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19751,
                                                "src": "619:48:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$",
                                                    "typeString": "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256,bool)"
                                                }
                                            },
                                            "id": 26005,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "619:235:138",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,int256,uint256,bool)"
                                            }
                                        },
                                        "src": "561:293:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26007,
                                    "nodeType": "ExpressionStatement",
                                    "src": "561:293:138"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26009,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25991,
                                                "src": "872:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4d6f636b4c504d6174683a2063616c63756c6174655570646174654c697175696469747953616665206661696c6564",
                                                "id": 26010,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "881:49:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a260cd0f079848025f7f6e1b33f9fb2847d1ba104c4f2118aead307845a2156c",
                                                    "typeString": "literal_string \"MockLPMath: calculateUpdateLiquiditySafe failed\""
                                                },
                                                "value": "MockLPMath: calculateUpdateLiquiditySafe failed"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_a260cd0f079848025f7f6e1b33f9fb2847d1ba104c4f2118aead307845a2156c",
                                                    "typeString": "literal_string \"MockLPMath: calculateUpdateLiquiditySafe failed\""
                                                }
                                            ],
                                            "id": 26008,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "864:7:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26011,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "864:67:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26012,
                                    "nodeType": "ExpressionStatement",
                                    "src": "864:67:138"
                                }
                            ]
                        },
                        "functionSelector": "b500f3cb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateUpdateLiquidity",
                        "nameLocation": "161:24:138",
                        "parameters": {
                            "id": 25982,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25973,
                                    "mutability": "mutable",
                                    "name": "_shareReserves",
                                    "nameLocation": "203:14:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "195:22:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25972,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "195:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25975,
                                    "mutability": "mutable",
                                    "name": "_shareAdjustment",
                                    "nameLocation": "234:16:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "227:23:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 25974,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "227:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25977,
                                    "mutability": "mutable",
                                    "name": "_bondReserves",
                                    "nameLocation": "268:13:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "260:21:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25976,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "260:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25979,
                                    "mutability": "mutable",
                                    "name": "_minimumShareReserves",
                                    "nameLocation": "299:21:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "291:29:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25978,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "291:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25981,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "337:19:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "330:26:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 25980,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "330:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "185:177:138"
                        },
                        "returnParameters": {
                            "id": 25989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25984,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "431:13:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "423:21:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25983,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "423:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25986,
                                    "mutability": "mutable",
                                    "name": "shareAdjustment",
                                    "nameLocation": "465:15:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "458:22:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 25985,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25988,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "502:12:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26014,
                                    "src": "494:20:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25987,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "494:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "409:115:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26028,
                        "nodeType": "FunctionDefinition",
                        "src": "944:180:138",
                        "nodes": [],
                        "body": {
                            "id": 26027,
                            "nodeType": "Block",
                            "src": "1063:61:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26024,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26017,
                                                "src": "1109:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26022,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "1080:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26023,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1087:21:138",
                                            "memberName": "calculatePresentValue",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19805,
                                            "src": "1080:28:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$19776_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26025,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1080:37:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26021,
                                    "id": 26026,
                                    "nodeType": "Return",
                                    "src": "1073:44:138"
                                }
                            ]
                        },
                        "functionSelector": "c00b11d3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculatePresentValue",
                        "nameLocation": "953:21:138",
                        "parameters": {
                            "id": 26018,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26017,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1017:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26028,
                                    "src": "984:40:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 26016,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26015,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "984:6:138",
                                                "991:18:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 19776,
                                            "src": "984:25:138"
                                        },
                                        "referencedDeclaration": 19776,
                                        "src": "984:25:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$19776_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "974:56:138"
                        },
                        "returnParameters": {
                            "id": 26021,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26020,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26028,
                                    "src": "1054:7:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26019,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1054:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1053:9:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26042,
                        "nodeType": "FunctionDefinition",
                        "src": "1130:179:138",
                        "nodes": [],
                        "body": {
                            "id": 26041,
                            "nodeType": "Block",
                            "src": "1248:61:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26038,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26031,
                                                "src": "1294:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26036,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "1265:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26037,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1272:21:138",
                                            "memberName": "calculateNetFlatTrade",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20244,
                                            "src": "1265:28:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$19776_memory_ptr_$returns$_t_int256_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (int256)"
                                            }
                                        },
                                        "id": 26039,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1265:37:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 26035,
                                    "id": 26040,
                                    "nodeType": "Return",
                                    "src": "1258:44:138"
                                }
                            ]
                        },
                        "functionSelector": "32c5dec4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateNetFlatTrade",
                        "nameLocation": "1139:21:138",
                        "parameters": {
                            "id": 26032,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26031,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1203:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26042,
                                    "src": "1170:40:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 26030,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26029,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "1170:6:138",
                                                "1177:18:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 19776,
                                            "src": "1170:25:138"
                                        },
                                        "referencedDeclaration": 19776,
                                        "src": "1170:25:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$19776_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1160:56:138"
                        },
                        "returnParameters": {
                            "id": 26035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26034,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26042,
                                    "src": "1240:6:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 26033,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1240:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1239:8:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26067,
                        "nodeType": "FunctionDefinition",
                        "src": "1315:335:138",
                        "nodes": [],
                        "body": {
                            "id": 26066,
                            "nodeType": "Block",
                            "src": "1434:216:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26051,
                                        26053
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26051,
                                            "mutability": "mutable",
                                            "name": "netCurveTrade",
                                            "nameLocation": "1452:13:138",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26066,
                                            "src": "1445:20:138",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 26050,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1445:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 26053,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1472:7:138",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26066,
                                            "src": "1467:12:138",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 26052,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1467:4:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26058,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 26056,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26045,
                                                "src": "1530:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26054,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "1483:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26055,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1503:26:138",
                                            "memberName": "calculateNetCurveTradeSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20206,
                                            "src": "1483:46:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$19776_memory_ptr_$returns$_t_int256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (int256,bool)"
                                            }
                                        },
                                        "id": 26057,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1483:55:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_int256_$_t_bool_$",
                                            "typeString": "tuple(int256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1444:94:138"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26060,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26053,
                                                "src": "1556:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4d6f636b4c504d6174683a2063616c63756c6174654e65744375727665547261646553616665206661696c6564",
                                                "id": 26061,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1565:47:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_2d6b234109070984815d54c0ad886a5e811642efea043271318956686e5476d9",
                                                    "typeString": "literal_string \"MockLPMath: calculateNetCurveTradeSafe failed\""
                                                },
                                                "value": "MockLPMath: calculateNetCurveTradeSafe failed"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_2d6b234109070984815d54c0ad886a5e811642efea043271318956686e5476d9",
                                                    "typeString": "literal_string \"MockLPMath: calculateNetCurveTradeSafe failed\""
                                                }
                                            ],
                                            "id": 26059,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1548:7:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26062,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1548:65:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26063,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1548:65:138"
                                },
                                {
                                    "expression": {
                                        "id": 26064,
                                        "name": "netCurveTrade",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26051,
                                        "src": "1630:13:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 26049,
                                    "id": 26065,
                                    "nodeType": "Return",
                                    "src": "1623:20:138"
                                }
                            ]
                        },
                        "functionSelector": "a4fc6f81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateNetCurveTrade",
                        "nameLocation": "1324:22:138",
                        "parameters": {
                            "id": 26046,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26045,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1389:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26067,
                                    "src": "1356:40:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$19776_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 26044,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26043,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "1356:6:138",
                                                "1363:18:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 19776,
                                            "src": "1356:25:138"
                                        },
                                        "referencedDeclaration": 19776,
                                        "src": "1356:25:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$19776_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1346:56:138"
                        },
                        "returnParameters": {
                            "id": 26049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26048,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26067,
                                    "src": "1426:6:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 26047,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1426:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1425:8:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26084,
                        "nodeType": "FunctionDefinition",
                        "src": "1656:368:138",
                        "nodes": [],
                        "body": {
                            "id": 26083,
                            "nodeType": "Block",
                            "src": "1852:172:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26079,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26070,
                                                "src": "1959:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 26080,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26072,
                                                "src": "1984:19:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26077,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "1881:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26078,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1888:53:138",
                                            "memberName": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20479,
                                            "src": "1881:60:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20264_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26081,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1881:136:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26076,
                                    "id": 26082,
                                    "nodeType": "Return",
                                    "src": "1862:155:138"
                                }
                            ]
                        },
                        "functionSelector": "a0d1643c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
                        "nameLocation": "1665:53:138",
                        "parameters": {
                            "id": 26073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26070,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1769:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26084,
                                    "src": "1728:48:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 26069,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26068,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "1728:6:138",
                                                "1735:26:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20264,
                                            "src": "1728:33:138"
                                        },
                                        "referencedDeclaration": 20264,
                                        "src": "1728:33:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26072,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "1794:19:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26084,
                                    "src": "1786:27:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26071,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1786:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1718:101:138"
                        },
                        "returnParameters": {
                            "id": 26076,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26075,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26084,
                                    "src": "1843:7:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26074,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1843:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1842:9:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26106,
                        "nodeType": "FunctionDefinition",
                        "src": "2030:504:138",
                        "nodes": [],
                        "body": {
                            "id": 26105,
                            "nodeType": "Block",
                            "src": "2267:267:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26098,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26087,
                                                "src": "2363:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 26099,
                                                "name": "_originalEffectiveShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26089,
                                                "src": "2388:31:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26100,
                                                "name": "_maxShareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26091,
                                                "src": "2437:22:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 26101,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21642,
                                                    "src": "2477:6:138",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 26102,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "2484:29:138",
                                                "memberName": "SHARE_PROCEEDS_MAX_ITERATIONS",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19590,
                                                "src": "2477:36:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26096,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "2296:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26097,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2303:42:138",
                                            "memberName": "calculateDistributeExcessIdleShareProceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21031,
                                            "src": "2296:49:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20264_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26103,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2296:231:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26095,
                                    "id": 26104,
                                    "nodeType": "Return",
                                    "src": "2277:250:138"
                                }
                            ]
                        },
                        "functionSelector": "3f9ccc01",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateDistributeExcessIdleShareProceeds",
                        "nameLocation": "2039:42:138",
                        "parameters": {
                            "id": 26092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26087,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "2132:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26106,
                                    "src": "2091:48:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 26086,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26085,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "2091:6:138",
                                                "2098:26:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20264,
                                            "src": "2091:33:138"
                                        },
                                        "referencedDeclaration": 20264,
                                        "src": "2091:33:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26089,
                                    "mutability": "mutable",
                                    "name": "_originalEffectiveShareReserves",
                                    "nameLocation": "2157:31:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26106,
                                    "src": "2149:39:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26088,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2149:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26091,
                                    "mutability": "mutable",
                                    "name": "_maxShareReservesDelta",
                                    "nameLocation": "2206:22:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26106,
                                    "src": "2198:30:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26090,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2198:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2081:153:138"
                        },
                        "returnParameters": {
                            "id": 26095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26094,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26106,
                                    "src": "2258:7:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26093,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2258:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2257:9:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26125,
                        "nodeType": "FunctionDefinition",
                        "src": "2540:360:138",
                        "nodes": [],
                        "body": {
                            "id": 26124,
                            "nodeType": "Block",
                            "src": "2735:165:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26120,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26109,
                                                "src": "2823:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 26121,
                                                "name": "_originalEffectiveShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26111,
                                                "src": "2848:31:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26118,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "2764:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26119,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2771:34:138",
                                            "memberName": "calculateMaxShareReservesDeltaSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21300,
                                            "src": "2764:41:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20264_memory_ptr_$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256,bool)"
                                            }
                                        },
                                        "id": 26122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2764:129:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "functionReturnParameters": 26117,
                                    "id": 26123,
                                    "nodeType": "Return",
                                    "src": "2745:148:138"
                                }
                            ]
                        },
                        "functionSelector": "9e5fc16b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMaxShareReservesDeltaSafe",
                        "nameLocation": "2549:34:138",
                        "parameters": {
                            "id": 26112,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26109,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "2634:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26125,
                                    "src": "2593:48:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 26108,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26107,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "2593:6:138",
                                                "2600:26:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20264,
                                            "src": "2593:33:138"
                                        },
                                        "referencedDeclaration": 20264,
                                        "src": "2593:33:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26111,
                                    "mutability": "mutable",
                                    "name": "_originalEffectiveShareReserves",
                                    "nameLocation": "2659:31:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26125,
                                    "src": "2651:39:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26110,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2651:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2583:113:138"
                        },
                        "returnParameters": {
                            "id": 26117,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26114,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26125,
                                    "src": "2720:7:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26113,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2720:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26116,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26125,
                                    "src": "2729:4:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 26115,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2729:4:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2719:15:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26147,
                        "nodeType": "FunctionDefinition",
                        "src": "2906:447:138",
                        "nodes": [],
                        "body": {
                            "id": 26146,
                            "nodeType": "Block",
                            "src": "3144:209:138",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26141,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26128,
                                                "src": "3247:7:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 26142,
                                                "name": "_originalEffectiveShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26130,
                                                "src": "3272:31:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 26143,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26132,
                                                "src": "3321:11:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26139,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21642,
                                                "src": "3173:6:138",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 26140,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3180:49:138",
                                            "memberName": "calculateSharesDeltaGivenBondsDeltaDerivativeSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21641,
                                            "src": "3173:56:138",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20264_memory_ptr_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256,int256) pure returns (uint256,bool)"
                                            }
                                        },
                                        "id": 26144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3173:173:138",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "functionReturnParameters": 26138,
                                    "id": 26145,
                                    "nodeType": "Return",
                                    "src": "3154:192:138"
                                }
                            ]
                        },
                        "functionSelector": "c615b2d9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesDeltaGivenBondsDeltaDerivativeSafe",
                        "nameLocation": "2915:49:138",
                        "parameters": {
                            "id": 26133,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26128,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "3015:7:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26147,
                                    "src": "2974:48:138",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 26127,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26126,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "2974:6:138",
                                                "2981:26:138"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 20264,
                                            "src": "2974:33:138"
                                        },
                                        "referencedDeclaration": 20264,
                                        "src": "2974:33:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20264_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26130,
                                    "mutability": "mutable",
                                    "name": "_originalEffectiveShareReserves",
                                    "nameLocation": "3040:31:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26147,
                                    "src": "3032:39:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26129,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3032:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26132,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "3088:11:138",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26147,
                                    "src": "3081:18:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 26131,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3081:6:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2964:141:138"
                        },
                        "returnParameters": {
                            "id": 26138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26135,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26147,
                                    "src": "3129:7:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26134,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3129:7:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26137,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26147,
                                    "src": "3138:4:138",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 26136,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3138:4:138",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3128:15:138"
                        },
                        "scope": 26148,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "MockLPMath",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    26148
                ],
                "name": "MockLPMath",
                "nameLocation": "135:10:138",
                "scope": 26149,
                "usedErrors": [
                    10219,
                    10249,
                    10258,
                    10314
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 138
};
