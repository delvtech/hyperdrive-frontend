export const MockLPMath = {
    "abi": [
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                    "name": "reason",
                    "type": "uint8"
                }
            ],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPresentValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidShareReserves",
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
        "object": "0x608060405234801561001057600080fd5b50611de3806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611b65565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611c0a565b61015b565b6100ce6100c9366004611c41565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611c41565b61018b565b610095610104366004611b65565b610197565b61011c610117366004611c6e565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611b65565b61023c565b600061015582610247565b92915050565b60006101688484846102ba565b90505b9392505050565b60008061017f84846105f0565b915091505b9250929050565b600061016b83836106f4565b60008060006101a5846107a8565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022a8888888888610ac2565b9250925092505b955095509592505050565b600061015582610b8d565b600061027f61027a836101200151670de0b6b3a76400006102689190611cbf565b60608501516101008601519190610bbd565b610be3565b6102b061027a846101600151670de0b6b3a764000061029e9190611cbf565b60608601516101408701519190610c11565b6101559190611cd2565b600080846060015185604001516102d19190611cf2565b602086015160608701519192506000916102eb9184610c11565b90508560a0015160000361030257915061016b9050565b60005b60048110156105e6576103188286610c2f565b915061034d8760c001518860e001518961010001518a6000015160a0015161033f87610be3565b61034890611d05565b610ac2565b89516040810191909152602081019190915252865160009061036e90610b8d565b905061037b888286610c44565b1561038657506105e6565b60008860a0015113156104d657875180516020820151604083015160a084015160e0909401518c9460009485946103e09491939092906103ce90670de0b6b3a7640000611cbf565b88516060810151608090910151610ca9565b91509150806103f957600097505050505050505061016b565b818360a00151106104d25761040d83610da2565b90965090508061042757600097505050505050505061016b565b61044c8360c001518460e00151856101000151866000015160a0015161033f8b610be3565b85516040808201929092526020808201939093529290925284518051918101519281015160a0909101518e5160e00151610495949291906103ce90670de0b6b3a7640000611cbf565b9092509050806104af57600097505050505050505061016b565b8a60a0015182116104c9578597505050505050505061016b565b50505050610305565b5050505b6000806104e88a8a8c60a00151610e78565b915091508015806105015750670de0b6b3a76400008210155b15610515576000965050505050505061016b565b81670de0b6b3a7640000039150600061054261027a8c604001518d602001516111b790919063ffffffff16565b61054f61027a868a6111cc565b6105599190611cd2565b90506000811315610589576105788761057283866111e1565b906111e1565b6105829087611cf2565b95506105d7565b60008112156105ce5760006105a388610572868186611d05565b9050868110156105b75780870396506105c8565b60009850505050505050505061016b565b506105d7565b505050506105e6565b84600101945050505050610305565b5095945050505050565b60008060008460a001511261060d57505060808201516001610184565b60008460a0015161061d90611d05565b9050600061065985876101000151886000015160e00151670de0b6b3a76400006106479190611cbf565b895160608101516080909101516111f6565b935090508261067057600080935093505050610184565b600061067c83836112a2565b9050670de0b6b3a764000081116106b85780670de0b6b3a76400000394506106b18760c00151866111cc90919063ffffffff16565b94506106c7565b60008094509450505050610184565b86608001518511156106e6578660800151600194509450505050610184565b506001925050509250929050565b600061071b8360c001518460e00151856101000151866000015160a0015161033f87610be3565b855160408101919091526020810191909152528251600090819061073e906112b7565b91509150801580610753575084602001518210155b1561076357600092505050610155565b6000856060015186604001516107799190611cf2565b905061079483876020015183610c119092919063ffffffff16565b61079e9082611cbf565b9695505050505050565b60008060006107cd61027a8561016001518661014001516111cc90919063ffffffff16565b6107ed61027a8661012001518761010001516111b790919063ffffffff16565b6107f79190611cd2565b9050600061080d85600001518660200151611344565b9050600082131561096057600082905060008061085e886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061084f9190611cbf565b8d606001518e60800151610ca9565b9150915080610877575060009788975095505050505050565b8282106109155760006108b1858a60400151868c60e00151670de0b6b3a76400006108a29190611cbf565b8d606001518e60800151611370565b92509050811580156108c657508860c0015184105b156108dd5750600098600198509650505050505050565b816108f357506000988998509650505050505050565b6108fc81610be3565b61090590611d05565b9960019950975050505050505050565b600088602001511261094c576109348860a001518561027a9190611cbf565b61093d90611d05565b98600198509650505050505050565b60a088015188516109349161027a91611cbf565b6000821215610ab457600061097483611d05565b90506000806109a98489604001518a60e00151670de0b6b3a764000061099a9190611cbf565b8b606001518c608001516111f6565b91509150806109c2575060009788975095505050505050565b828210610a475760006109fc858a60400151868c60e00151670de0b6b3a76400006109ed9190611cbf565b8d606001518e60800151611433565b9250905081158015610a1157508860c0015184105b15610a285750600098600198509650505050505050565b81610a3e57506000988998509650505050505050565b61090581610be3565b6000610a79858a604001518b60e00151670de0b6b3a7640000610a6a9190611cbf565b8c606001518d6080015161150a565b9250905081610a9357506000988998509650505050505050565b610905610aaa8a6060015185876105729190611cbf565b61027a9083611cf2565b506000946001945092505050565b600080600083600003610adc575086915085905084610231565b600084610ae88a610be3565b610af29190611d21565b9050610afd86610be3565b811215610b1d5760405163585fe6df60e11b815260040160405180910390fd5b80935060008812610b3d57610b3661027a858a8c610c11565b9250610b60565b610b5461027a610b4c8a611d05565b86908c610bbd565b610b5d90611d05565b92505b610b7f87610b6e8b8b611344565b610b788787611344565b9190610c11565b915050955095509592505050565b6000806000610b9b846112b7565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610bd457600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610c0d5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610c2857600080fd5b5091020490565b6000818311610c3e578261016b565b50919050565b6020830151600090610c5690846112a2565b6040850151610c669084906111e1565b1015801561016857506020840151610c8f9084610b78633b9aca00670de0b6b3a7640000611cf2565b6040850151610c9f9084906112a2565b1115949350505050565b6000806000881215610ccb57610cbe88611d05565b610cc89087611cf2565b95505b6000610cd78a8a611344565b90506000610ce8828a8989896115c0565b90506000610d0b610d0389610cfd898d6111b7565b906115ef565b889088610bbd565b905080821015610d245760008094509450505050610d96565b808203670de0b6b3a76400008110610d5957610d52610d4b670de0b6b3a76400008b6111e1565b82906115ef565b9050610d71565b610d6e610d4b670de0b6b3a76400008b6112a2565b90505b8a811015610d89576000809550955050505050610d96565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113610dbc57506000928392509050565b6000610dcb8460000151610247565b90506000610df7856040015186606001518760400151610deb9190611cf2565b60208801519190610bbd565b905060008212610e1e5780821015610e1157819003610e34565b5060009485945092505050565b610e2782611d05565b610e319082611cf2565b90505b60e085015160c0860151610e49918390610bbd565b9050808560c001511015610e64575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412610e9c57855160400151610e95908590611cf2565b9050610ed7565b6000610ea785611d05565b875160400151909150811015610ec7578651604001518190039150610ed5565b6000809350935050506111af565b505b85518051602090910151600091610eed91611344565b875160e0810151604090910151919250600091610f2491610f1891610f11916115ef565b89906111cc565b6101008a0151906112a2565b885160e0810151608090910151610f4f91610f4391610cfd90876111cc565b8a5160600151906112a2565b610f599190611cf2565b90506000610f91610f85610f7e8b6000015160e00151876115ef90919063ffffffff16565b8a906111b7565b6101008b0151906111e1565b905080821015610fab5760008095509550505050506111af565b80820391506000610fed848b60000151604001518c6000015160e00151670de0b6b3a7640000610fdb9190611cbf565b8d51606081015160809091015161165a565b905060006110178b6000015160e00151670de0b6b3a76400006110109190611cbf565b87906115ef565b90508082101561103357600080975097505050505050506111af565b8a5160808101516060909101519183039161104f918391610bbd565b9050670de0b6b3a76400008110611093578a5160e0015161108c90610d4b9061108090670de0b6b3a7640000611cbf565b8d5160e00151906112a2565b90506110c2565b8a5160e001516110bf90610d4b906110b390670de0b6b3a7640000611cbf565b8d5160e00151906111e1565b90505b8a51606001516110d59085908390610bbd565b935083670de0b6b3a764000011156110f95783670de0b6b3a764000003935061110c565b60006001975097505050505050506111af565b60008b60e001511261116d5760c08b015160e08c015161112b916112a2565b9250670de0b6b3a7640000831061114e57600080975097505050505050506111af565b670de0b6b3a7640000929092039161116684846111cc565b93506111a2565b61119f6111868c60c001518d60e0015161057290611d05565b61119890670de0b6b3a7640000611cf2565b85906111cc565b93505b5091955060019450505050505b935093915050565b600061016b8383670de0b6b3a7640000610bbd565b600061016b8383670de0b6b3a7640000610c11565b600061016b83670de0b6b3a764000084610c11565b6000806000611208888888888861165a565b90506000611233670de0b6b3a764000061122288886111e1565b61122c9190611cf2565b83906112a2565b9050670de0b6b3a7640000811061126057611259610d4b670de0b6b3a7640000896112a2565b9050611278565b611275610d4b670de0b6b3a7640000896111e1565b90505b8088101561128e57600080935093505050611298565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610bbd565b60008060008060006112c8866107a8565b91509150806112df57506000958695509350505050565b6112ec8660a00151610be3565b6112f587610247565b836113038960000151610be3565b61130d9190611d21565b6113179190611d21565b6113219190611cd2565b92505050600081121561133a5750600093849350915050565b9360019350915050565b6000808261135185610be3565b61135b9190611cd2565b9050600081121561016b5761016b600161167f565b6000806000611382898988888861165a565b905061139286610cfd898b611cf2565b9750878110156113a9576000809250925050611428565b8781036113b7818688610bbd565b9050670de0b6b3a764000081106113e4576113dd610d4b670de0b6b3a7640000896112a2565b90506113fc565b6113f9610d4b670de0b6b3a7640000896111e1565b90505b61140681866112a2565b9050808a101561141e57600080935093505050611428565b8903925060019150505b965096945050505050565b6000806000611445898988888861165a565b90508688101561145c576000809250925050611428565b968690039661146b88876115ef565b975087811015611482576000809250925050611428565b878103611490818688610bbd565b9050670de0b6b3a764000081106114bd576114b6610d4b670de0b6b3a7640000896112a2565b90506114d5565b6114d2610d4b670de0b6b3a7640000896111e1565b90505b6114df81866112a2565b9050898110156114f757600080935093505050611428565b9890980398600198509650505050505050565b600080600061151c88888888886115c0565b90506000611547670de0b6b3a764000061153688886112a2565b6115409190611cf2565b83906111e1565b9050670de0b6b3a764000081106115745761156d610d4b670de0b6b3a7640000896111e1565b905061158c565b611589610d4b670de0b6b3a7640000896112a2565b90505b61159681866111e1565b9050888110156115ae57600080935093505050611298565b97909703976001975095505050505050565b60006115cc85856115ef565b6115e56115dd86610cfd868b6111cc565b859085610c11565b61079e9190611cf2565b6000816000036116085750670de0b6b3a7640000610155565b8260000361161857506000610155565b600061162383610be3565b9050600061163861163386610be3565b61169a565b905081810261164f670de0b6b3a764000082611d49565b905061079e816118c9565b600061166685856115ef565b6115e561167786610cfd868b6111b7565b859085610bbd565b80604051633c06d78b60e11b81526004016102089190611d85565b60008082136116bc5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117489084901c610be3565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136118e457506000919050565b680755bf798b4a1bf1e5821261190d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061079e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610be3565b604051610180810167ffffffffffffffff81118282101715611a9057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611a9057634e487b7160e01b600052604160045260246000fd5b60006101808284031215611adb57600080fd5b611ae3611a5e565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611b7857600080fd5b61016b8383611ac8565b60006102808284031215611b9557600080fd5b611b9d611a96565b9050611ba98383611ac8565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611c2057600080fd5b611c2a8585611b82565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611c5557600080fd5b611c5f8484611b82565b94610280939093013593505050565b600080600080600060a08688031215611c8657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611ca9565b818103600083128015838313168383128216171561021157610211611ca9565b8082018082111561015557610155611ca9565b6000600160ff1b8201611d1a57611d1a611ca9565b5060000390565b8082018281126000831280158216821582161715611d4157611d41611ca9565b505092915050565b600082611d6657634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611d8057611d80611ca9565b500590565b6020810160048310611da757634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212202c4a8e98b72216507948202e59fa01801119535939e892d1e1dd0158faf62aa964736f6c63430008140033",
        "sourceMap": "126:2567:90:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611b65565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611c0a565b61015b565b6100ce6100c9366004611c41565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611c41565b61018b565b610095610104366004611b65565b610197565b61011c610117366004611c6e565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611b65565b61023c565b600061015582610247565b92915050565b60006101688484846102ba565b90505b9392505050565b60008061017f84846105f0565b915091505b9250929050565b600061016b83836106f4565b60008060006101a5846107a8565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022a8888888888610ac2565b9250925092505b955095509592505050565b600061015582610b8d565b600061027f61027a836101200151670de0b6b3a76400006102689190611cbf565b60608501516101008601519190610bbd565b610be3565b6102b061027a846101600151670de0b6b3a764000061029e9190611cbf565b60608601516101408701519190610c11565b6101559190611cd2565b600080846060015185604001516102d19190611cf2565b602086015160608701519192506000916102eb9184610c11565b90508560a0015160000361030257915061016b9050565b60005b60048110156105e6576103188286610c2f565b915061034d8760c001518860e001518961010001518a6000015160a0015161033f87610be3565b61034890611d05565b610ac2565b89516040810191909152602081019190915252865160009061036e90610b8d565b905061037b888286610c44565b1561038657506105e6565b60008860a0015113156104d657875180516020820151604083015160a084015160e0909401518c9460009485946103e09491939092906103ce90670de0b6b3a7640000611cbf565b88516060810151608090910151610ca9565b91509150806103f957600097505050505050505061016b565b818360a00151106104d25761040d83610da2565b90965090508061042757600097505050505050505061016b565b61044c8360c001518460e00151856101000151866000015160a0015161033f8b610be3565b85516040808201929092526020808201939093529290925284518051918101519281015160a0909101518e5160e00151610495949291906103ce90670de0b6b3a7640000611cbf565b9092509050806104af57600097505050505050505061016b565b8a60a0015182116104c9578597505050505050505061016b565b50505050610305565b5050505b6000806104e88a8a8c60a00151610e78565b915091508015806105015750670de0b6b3a76400008210155b15610515576000965050505050505061016b565b81670de0b6b3a7640000039150600061054261027a8c604001518d602001516111b790919063ffffffff16565b61054f61027a868a6111cc565b6105599190611cd2565b90506000811315610589576105788761057283866111e1565b906111e1565b6105829087611cf2565b95506105d7565b60008112156105ce5760006105a388610572868186611d05565b9050868110156105b75780870396506105c8565b60009850505050505050505061016b565b506105d7565b505050506105e6565b84600101945050505050610305565b5095945050505050565b60008060008460a001511261060d57505060808201516001610184565b60008460a0015161061d90611d05565b9050600061065985876101000151886000015160e00151670de0b6b3a76400006106479190611cbf565b895160608101516080909101516111f6565b935090508261067057600080935093505050610184565b600061067c83836112a2565b9050670de0b6b3a764000081116106b85780670de0b6b3a76400000394506106b18760c00151866111cc90919063ffffffff16565b94506106c7565b60008094509450505050610184565b86608001518511156106e6578660800151600194509450505050610184565b506001925050509250929050565b600061071b8360c001518460e00151856101000151866000015160a0015161033f87610be3565b855160408101919091526020810191909152528251600090819061073e906112b7565b91509150801580610753575084602001518210155b1561076357600092505050610155565b6000856060015186604001516107799190611cf2565b905061079483876020015183610c119092919063ffffffff16565b61079e9082611cbf565b9695505050505050565b60008060006107cd61027a8561016001518661014001516111cc90919063ffffffff16565b6107ed61027a8661012001518761010001516111b790919063ffffffff16565b6107f79190611cd2565b9050600061080d85600001518660200151611344565b9050600082131561096057600082905060008061085e886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061084f9190611cbf565b8d606001518e60800151610ca9565b9150915080610877575060009788975095505050505050565b8282106109155760006108b1858a60400151868c60e00151670de0b6b3a76400006108a29190611cbf565b8d606001518e60800151611370565b92509050811580156108c657508860c0015184105b156108dd5750600098600198509650505050505050565b816108f357506000988998509650505050505050565b6108fc81610be3565b61090590611d05565b9960019950975050505050505050565b600088602001511261094c576109348860a001518561027a9190611cbf565b61093d90611d05565b98600198509650505050505050565b60a088015188516109349161027a91611cbf565b6000821215610ab457600061097483611d05565b90506000806109a98489604001518a60e00151670de0b6b3a764000061099a9190611cbf565b8b606001518c608001516111f6565b91509150806109c2575060009788975095505050505050565b828210610a475760006109fc858a60400151868c60e00151670de0b6b3a76400006109ed9190611cbf565b8d606001518e60800151611433565b9250905081158015610a1157508860c0015184105b15610a285750600098600198509650505050505050565b81610a3e57506000988998509650505050505050565b61090581610be3565b6000610a79858a604001518b60e00151670de0b6b3a7640000610a6a9190611cbf565b8c606001518d6080015161150a565b9250905081610a9357506000988998509650505050505050565b610905610aaa8a6060015185876105729190611cbf565b61027a9083611cf2565b506000946001945092505050565b600080600083600003610adc575086915085905084610231565b600084610ae88a610be3565b610af29190611d21565b9050610afd86610be3565b811215610b1d5760405163585fe6df60e11b815260040160405180910390fd5b80935060008812610b3d57610b3661027a858a8c610c11565b9250610b60565b610b5461027a610b4c8a611d05565b86908c610bbd565b610b5d90611d05565b92505b610b7f87610b6e8b8b611344565b610b788787611344565b9190610c11565b915050955095509592505050565b6000806000610b9b846112b7565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610bd457600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610c0d5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610c2857600080fd5b5091020490565b6000818311610c3e578261016b565b50919050565b6020830151600090610c5690846112a2565b6040850151610c669084906111e1565b1015801561016857506020840151610c8f9084610b78633b9aca00670de0b6b3a7640000611cf2565b6040850151610c9f9084906112a2565b1115949350505050565b6000806000881215610ccb57610cbe88611d05565b610cc89087611cf2565b95505b6000610cd78a8a611344565b90506000610ce8828a8989896115c0565b90506000610d0b610d0389610cfd898d6111b7565b906115ef565b889088610bbd565b905080821015610d245760008094509450505050610d96565b808203670de0b6b3a76400008110610d5957610d52610d4b670de0b6b3a76400008b6111e1565b82906115ef565b9050610d71565b610d6e610d4b670de0b6b3a76400008b6112a2565b90505b8a811015610d89576000809550955050505050610d96565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113610dbc57506000928392509050565b6000610dcb8460000151610247565b90506000610df7856040015186606001518760400151610deb9190611cf2565b60208801519190610bbd565b905060008212610e1e5780821015610e1157819003610e34565b5060009485945092505050565b610e2782611d05565b610e319082611cf2565b90505b60e085015160c0860151610e49918390610bbd565b9050808560c001511015610e64575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412610e9c57855160400151610e95908590611cf2565b9050610ed7565b6000610ea785611d05565b875160400151909150811015610ec7578651604001518190039150610ed5565b6000809350935050506111af565b505b85518051602090910151600091610eed91611344565b875160e0810151604090910151919250600091610f2491610f1891610f11916115ef565b89906111cc565b6101008a0151906112a2565b885160e0810151608090910151610f4f91610f4391610cfd90876111cc565b8a5160600151906112a2565b610f599190611cf2565b90506000610f91610f85610f7e8b6000015160e00151876115ef90919063ffffffff16565b8a906111b7565b6101008b0151906111e1565b905080821015610fab5760008095509550505050506111af565b80820391506000610fed848b60000151604001518c6000015160e00151670de0b6b3a7640000610fdb9190611cbf565b8d51606081015160809091015161165a565b905060006110178b6000015160e00151670de0b6b3a76400006110109190611cbf565b87906115ef565b90508082101561103357600080975097505050505050506111af565b8a5160808101516060909101519183039161104f918391610bbd565b9050670de0b6b3a76400008110611093578a5160e0015161108c90610d4b9061108090670de0b6b3a7640000611cbf565b8d5160e00151906112a2565b90506110c2565b8a5160e001516110bf90610d4b906110b390670de0b6b3a7640000611cbf565b8d5160e00151906111e1565b90505b8a51606001516110d59085908390610bbd565b935083670de0b6b3a764000011156110f95783670de0b6b3a764000003935061110c565b60006001975097505050505050506111af565b60008b60e001511261116d5760c08b015160e08c015161112b916112a2565b9250670de0b6b3a7640000831061114e57600080975097505050505050506111af565b670de0b6b3a7640000929092039161116684846111cc565b93506111a2565b61119f6111868c60c001518d60e0015161057290611d05565b61119890670de0b6b3a7640000611cf2565b85906111cc565b93505b5091955060019450505050505b935093915050565b600061016b8383670de0b6b3a7640000610bbd565b600061016b8383670de0b6b3a7640000610c11565b600061016b83670de0b6b3a764000084610c11565b6000806000611208888888888861165a565b90506000611233670de0b6b3a764000061122288886111e1565b61122c9190611cf2565b83906112a2565b9050670de0b6b3a7640000811061126057611259610d4b670de0b6b3a7640000896112a2565b9050611278565b611275610d4b670de0b6b3a7640000896111e1565b90505b8088101561128e57600080935093505050611298565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610bbd565b60008060008060006112c8866107a8565b91509150806112df57506000958695509350505050565b6112ec8660a00151610be3565b6112f587610247565b836113038960000151610be3565b61130d9190611d21565b6113179190611d21565b6113219190611cd2565b92505050600081121561133a5750600093849350915050565b9360019350915050565b6000808261135185610be3565b61135b9190611cd2565b9050600081121561016b5761016b600161167f565b6000806000611382898988888861165a565b905061139286610cfd898b611cf2565b9750878110156113a9576000809250925050611428565b8781036113b7818688610bbd565b9050670de0b6b3a764000081106113e4576113dd610d4b670de0b6b3a7640000896112a2565b90506113fc565b6113f9610d4b670de0b6b3a7640000896111e1565b90505b61140681866112a2565b9050808a101561141e57600080935093505050611428565b8903925060019150505b965096945050505050565b6000806000611445898988888861165a565b90508688101561145c576000809250925050611428565b968690039661146b88876115ef565b975087811015611482576000809250925050611428565b878103611490818688610bbd565b9050670de0b6b3a764000081106114bd576114b6610d4b670de0b6b3a7640000896112a2565b90506114d5565b6114d2610d4b670de0b6b3a7640000896111e1565b90505b6114df81866112a2565b9050898110156114f757600080935093505050611428565b9890980398600198509650505050505050565b600080600061151c88888888886115c0565b90506000611547670de0b6b3a764000061153688886112a2565b6115409190611cf2565b83906111e1565b9050670de0b6b3a764000081106115745761156d610d4b670de0b6b3a7640000896111e1565b905061158c565b611589610d4b670de0b6b3a7640000896112a2565b90505b61159681866111e1565b9050888110156115ae57600080935093505050611298565b97909703976001975095505050505050565b60006115cc85856115ef565b6115e56115dd86610cfd868b6111cc565b859085610c11565b61079e9190611cf2565b6000816000036116085750670de0b6b3a7640000610155565b8260000361161857506000610155565b600061162383610be3565b9050600061163861163386610be3565b61169a565b905081810261164f670de0b6b3a764000082611d49565b905061079e816118c9565b600061166685856115ef565b6115e561167786610cfd868b6111b7565b859085610bbd565b80604051633c06d78b60e11b81526004016102089190611d85565b60008082136116bc5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117489084901c610be3565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136118e457506000919050565b680755bf798b4a1bf1e5821261190d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061079e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610be3565b604051610180810167ffffffffffffffff81118282101715611a9057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611a9057634e487b7160e01b600052604160045260246000fd5b60006101808284031215611adb57600080fd5b611ae3611a5e565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611b7857600080fd5b61016b8383611ac8565b60006102808284031215611b9557600080fd5b611b9d611a96565b9050611ba98383611ac8565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611c2057600080fd5b611c2a8585611b82565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611c5557600080fd5b611c5f8484611b82565b94610280939093013593505050565b600080600080600060a08688031215611c8657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611ca9565b818103600083128015838313168383128216171561021157610211611ca9565b8082018082111561015557610155611ca9565b6000600160ff1b8201611d1a57611d1a611ca9565b5060000390565b8082018281126000831280158216821582161715611d4157611d41611ca9565b505092915050565b600082611d6657634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611d8057611d80611ca9565b500590565b6020810160048310611da757634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212202c4a8e98b72216507948202e59fa01801119535939e892d1e1dd0158faf62aa964736f6c63430008140033",
        "sourceMap": "126:2567:90:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;975:179;;;;;;:::i;:::-;;:::i;:::-;;;2163:25:182;;;2151:2;2136:18;975:179:90;;;;;;;;1875:450;;;;;;:::i;:::-;;:::i;2331:360::-;;;;;;:::i;:::-;;:::i;:::-;;;;4117:25:182;;;4185:14;;4178:22;4173:2;4158:18;;4151:50;4090:18;2331:360:90;3949:258:182;1501:368:90;;;;;;:::i;:::-;;:::i;1160:335::-;;;;;;:::i;:::-;;:::i;152:631::-;;;;;;:::i;:::-;;:::i;:::-;;;;4869:25:182;;;4925:2;4910:18;;4903:34;;;;4953:18;;;4946:34;4857:2;4842:18;152:631:90;4669:317:182;789:180:90;;;;;;:::i;:::-;;:::i;975:179::-;1085:6;1110:37;1139:7;1110:28;:37::i;:::-;1103:44;975:179;-1:-1:-1;;975:179:90:o;1875:450::-;2103:7;2141:177;2208:7;2233:31;2282:22;2141:49;:177::i;:::-;2122:196;;1875:450;;;;;;:::o;2331:360::-;2511:7;2520:4;2555:129;2614:7;2639:31;2555:41;:129::i;:::-;2536:148;;;;2331:360;;;;;;:::o;1501:368::-;1688:7;1726:136;1804:7;1829:19;1726:60;:136::i;1160:335::-;1271:6;1290:20;1312:12;1328:55;1375:7;1328:46;:55::i;:::-;1289:94;;;;1401:7;1393:65;;;;-1:-1:-1;;;1393:65:90;;5193:2:182;1393:65:90;;;5175:21:182;5232:2;5212:18;;;5205:30;5271:34;5251:18;;;5244:62;-1:-1:-1;;;5322:18:182;;;5315:43;5375:19;;1393:65:90;;;;;;;;;-1:-1:-1;1475:13:90;1160:335;-1:-1:-1;;1160:335:90:o;152:631::-;423:21;458:22;494:20;558:218;607:14;639:16;673:13;704:21;743:19;558:31;:218::i;:::-;539:237;;;;;;152:631;;;;;;;;;;:::o;789:180::-;899:7;925:37;954:7;925:28;:37::i;17599:1167:76:-;17702:6;18560:199;18578:156;18639:7;:32;;;193:4:74;18633:38:76;;;;:::i;:::-;18693:23;;;;18578:24;;;;;:156;:33;:156::i;:::-;18560:197;:199::i;:::-;18342:203;18360:160;18424:7;:33;;;193:4:74;18418:39:76;;;;:::i;:::-;18479:23;;;;18360:25;;;;;:160;:36;:160::i;18342:203::-;:417;;;;:::i;27340:9726::-;27561:7;27622:21;27688:7;:35;;;27646:7;:27;;;:77;;;;:::i;:::-;28281:28;;;;28221:35;;;;27622:101;;-1:-1:-1;28197:21:76;;28221:125;;27622:101;28221:46;:125::i;:::-;28197:149;;28459:7;:21;;;28484:1;28459:26;28455:77;;28508:13;-1:-1:-1;28501:20:76;;-1:-1:-1;28501:20:76;28455:77;28895:9;28890:8139;871:1;28910;:33;28890:8139;;;29118:41;:13;29136:22;29118:17;:41::i;:::-;29102:57;;29484:288;29526:7;:29;;;29573:7;:31;;;29622:7;:28;;;29668:7;:26;;;:47;;;29734:24;:13;:22;:24::i;:::-;29733:25;;;:::i;:::-;29484:24;:288::i;:::-;29310:26;;29428:39;;;29292:480;;;;29368:42;;;29292:480;;;;;29848:26;;29310;;29809:79;;:21;:79::i;:::-;29786:102;;29993:167;30066:7;30095:12;30129:13;29993:51;:167::i;:::-;29972:241;;;30193:5;;;29972:241;30463:1;30439:7;:21;;;:25;30435:4231;;;30827:25;;:39;;30892:41;;;;30959:38;;;;31023:46;;;;31101:37;;;;;30648:7;;30605:40;;;;30738:563;;30827:39;;30892:41;;31023:46;31095:43;;193:4:74;31095:43:76;:::i;:::-;31164:25;;:41;;;;31231:48;;;;;30738:63;:563::i;:::-;30697:604;;;;31324:8;31319:290;;31589:1;31582:8;;;;;;;;;;;31319:290;31820:13;31795:6;:20;;;31787:46;31783:2869;;32102:115;32189:6;32102:61;:115::i;:::-;32004:213;;-1:-1:-1;32004:213:76;-1:-1:-1;32004:213:76;32239:201;;32416:1;32409:8;;;;;;;;;;;32239:201;32819:332;32869:6;:28;;;32923:6;:30;;;32979:6;:27;;;33032:6;:25;;;:46;;;33105:24;:13;:22;:24::i;32819:332::-;32624:25;;32756:38;;;;32598:553;;;;32689:41;;;;32598:553;;;;;;;;33298:25;;:39;;33367:41;;;;33438:38;;;;33506:46;;;;;33588:26;;:38;;;33201:600;;33367:41;33438:38;33506:46;33582:44;;193:4:74;33582:44:76;:::i;33201:600::-;33173:628;;-1:-1:-1;33173:628:76;-1:-1:-1;33173:628:76;33823:201;;34000:1;33993:8;;;;;;;;;;;33823:201;34347:7;:21;;;34322:13;:47;34318:316;;34404:13;34397:20;;;;;;;;;;;34318:316;34603:8;;;;28890:8139;;34318:316;30466:4200;;;30435:4231;34960:18;34996:12;35025:192;35096:7;35125:31;35178:7;:21;;;35025:49;:192::i;:::-;34942:275;;;;35236:7;35235:8;:29;;;;193:4:74;35247:10:76;:17;;35235:29;35231:189;;;35404:1;35397:8;;;;;;;;;;35231:189;35480:10;193:4:74;35474:16:76;35461:29;;35792:12;35872:137;:105;35949:7;:27;;;35872:7;:49;;;:76;;:105;;;;:::i;:137::-;35807:46;:35;:12;35828:13;35807:20;:35::i;:46::-;:202;;;;:::i;:::-;35792:217;;36035:1;36027:5;:9;36023:893;;;36200:57;36243:13;36200:34;36208:5;36223:10;36200:22;:34::i;:::-;:42;;:57::i;:::-;36164:93;;:13;:93;:::i;:::-;36128:129;;36023:893;;;36290:1;36282:5;:9;36278:638;;;36383:14;36400:96;36465:13;36400:35;36424:10;36400:35;36409:5;36408:6;:::i;36400:96::-;36383:113;;36527:13;36518:6;:22;36514:344;;;36632:6;36616:13;:22;36600:38;;36514:344;;;36838:1;36831:8;;;;;;;;;;;;36514:344;36293:579;36278:638;;;36896:5;;;;;;36278:638;37001:3;;;;;28947:8082;;;;28890:8139;;;-1:-1:-1;37046:13:76;27340:9726;-1:-1:-1;;;;;27340:9726:76:o;43372:3084::-;43545:29;43576:12;43765:1;43740:7;:21;;;:26;43736:84;;-1:-1:-1;;43790:12:76;;;;43804:4;43782:27;;43736:84;43829:21;43862:7;:21;;;43861:22;;;:::i;:::-;43829:55;;44000:21;44058:316;44114:31;44159:7;:28;;;44207:7;:26;;;:38;;;193:4:74;44201:44:76;;;;:::i;:::-;44259:26;;:42;;;;44315:49;;;;;44058:42;:316::i;:::-;44031:343;-1:-1:-1;44031:343:76;-1:-1:-1;44031:343:76;44384:56;;44420:1;44423:5;44412:17;;;;;;;;44384:56;45463:24;45490:34;:13;45510;45490:19;:34::i;:::-;45463:61;;193:4:74;45707:16:76;:23;45703:453;;45804:16;193:4:74;45798:22:76;45774:46;;45872:90;45919:7;:29;;;45872:21;:29;;:90;;;;:::i;:::-;45848:114;;45703:453;;;46136:1;46139:5;46128:17;;;;;;;;;45703:453;46338:7;:12;;;46314:21;:36;46310:94;;;46374:7;:12;;;46388:4;46366:27;;;;;;;;;46310:94;-1:-1:-1;46444:4:76;;-1:-1:-1;;;43372:3084:76;;;;;:::o;24605:1853::-;24785:7;25060:270;25098:7;:29;;;25141:7;:31;;;25186:7;:28;;;25228:7;:26;;;:47;;;25290:30;:19;:28;:30::i;25060:270::-;24898:26;;25008:39;;;24884:446;;;;24952:42;;;24884:446;;;;;25424:26;;24898;;;;25385:75;;:25;:75::i;:::-;25340:120;;;;25828:7;25827:8;:62;;;;25861:7;:28;;;25839:18;:50;;25827:62;25823:101;;;25912:1;25905:8;;;;;;25823:101;26173:21;26239:7;:35;;;26197:7;:27;;;:77;;;;:::i;:::-;26173:101;;26331:120;26373:18;26409:7;:28;;;26331:13;:24;;:120;;;;;:::i;:::-;26303:148;;:13;:148;:::i;:::-;26284:167;24605:1853;-1:-1:-1;;;;;;24605:1853:76:o;8254:9098::-;8362:6;8370:4;9172:23;9327:130;:102;9395:7;:33;;;9327:7;:42;;;:67;;:102;;;;:::i;:130::-;9198:114;:90;9255:7;:32;;;9198:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9172:285;;9467:30;9500:153;9577:7;:21;;;9616:7;:23;;;9500:59;:153::i;:::-;9467:186;;9903:1;9884:16;:20;9880:7439;;;9920:25;9956:16;9920:53;;10162:21;10185:12;10201:401;10282:7;:21;;;10325:7;:23;;;10370:7;:20;;;10412:7;:28;;;10468:7;:19;;;193:4:74;10462:25:76;;;;:::i;:::-;10509:7;:23;;;10554:7;:30;;;10201:59;:401::i;:::-;10161:441;;;;10621:7;10616:64;;-1:-1:-1;10656:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;10616:64::-;10857:17;10840:13;:34;10836:2891;;11148:21;11214:389;11314:22;11362:7;:20;;;11408:17;11457:7;:19;;;193:4:74;11451:25:76;;;;:::i;:::-;11502:7;:23;;;11551:7;:30;;;11214:74;:389::i;:::-;11187:416;-1:-1:-1;11187:416:76;-1:-1:-1;11909:8:76;;:84;;;;;11961:7;:32;;;11941:17;:52;11909:84;11884:335;;;-1:-1:-1;12042:1:76;;12045:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;11884:335::-;12152:7;12147:72;;-1:-1:-1;12191:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12147:72::-;12246:24;:13;:22;:24::i;:::-;12245:25;;;:::i;:::-;12237:40;12272:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;;8254:9098:76:o;10836:2891::-;12962:1;12935:7;:23;;;:28;12931:782;;13021:95;13047:7;:28;;;13022:22;:53;;;;:::i;13021:95::-;13020:96;;;:::i;:::-;12987:181;13142:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;12931:782::-;13573:28;;;;13549:21;;13548:94;;13549:52;;;:::i;9880:7439::-;13852:1;13833:16;:20;13829:3490;;;13869:25;13905:17;13906:16;13905:17;:::i;:::-;13869:54;;14041:21;14064:12;14080:307;14161:22;14205:7;:20;;;14253:7;:19;;;193:4:74;14247:25:76;;;;:::i;:::-;14294:7;:23;;;14339:7;:30;;;14080:59;:307::i;:::-;14040:347;;;;14406:7;14401:64;;-1:-1:-1;14441:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;8254:9098:76:o;14401:64::-;14642:17;14625:13;:34;14621:2688;;14934:21;15000:387;15098:22;15146:7;:20;;;15192:17;15241:7;:19;;;193:4:74;15235:25:76;;;;:::i;:::-;15286:7;:23;;;15335:7;:30;;;15000:72;:387::i;:::-;14973:414;-1:-1:-1;14973:414:76;-1:-1:-1;15693:8:76;;:84;;;;;15745:7;:32;;;15725:17;:52;15693:84;15668:335;;;-1:-1:-1;15826:1:76;;15829:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15668:335::-;15936:7;15931:72;;-1:-1:-1;15975:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;15931:72::-;16029:24;:13;:22;:24::i;14621:2688::-;16387:23;16457:335;16546:22;16594:7;:20;;;16646:7;:19;;;193:4:74;16640:25:76;;;;:::i;:::-;16691:7;:23;;;16740:7;:30;;;16457:63;:335::i;:::-;16428:364;-1:-1:-1;16428:364:76;-1:-1:-1;16428:364:76;16810:72;;-1:-1:-1;16854:1:76;;;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;;;;;8254:9098:76:o;16810:72::-;17073:177;17116:122;17189:7;:23;;;17137:13;17117:17;:33;;;;:::i;17116:122::-;17074:164;;:15;:164;:::i;13829:3490::-;-1:-1:-1;17337:1:76;;17340:4;;-1:-1:-1;8254:9098:76;-1:-1:-1;;;8254:9098:76:o;1782:3110::-;2053:21;2088:22;2124:20;2279:19;2302:1;2279:24;2275:111;;-1:-1:-1;2327:14:76;;-1:-1:-1;2343:16:76;;-1:-1:-1;2361:13:76;2319:56;;2275:111;2555:21;2607:19;2579:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2555:71;;2657:32;:21;:30;:32::i;:::-;2640:14;:49;2636:121;;;2712:34;;-1:-1:-1;;;2712:34:76;;;;;;;;;;;2636:121;2790:14;2766:39;;3380:1;3360:16;:21;3356:497;;3493:112;:84;:13;3543:16;3562:14;3493:41;:84::i;:112::-;3475:130;;3356:497;;;3731:111;:83;3779:17;3780:16;3779:17;:::i;:::-;3731:13;;3799:14;3731:39;:83::i;:111::-;3730:112;;;:::i;:::-;3712:130;;3356:497;4569:316;4702:13;4733:138;4801:14;4837:16;4733:46;:138::i;:::-;4569:91;4629:13;4644:15;4569:59;:91::i;:::-;:115;:316;:115;:316::i;:::-;4554:331;;2159:2733;1782:3110;;;;;;;;;:::o;5717:341::-;5820:7;5840:20;5862:12;5878:56;5917:7;5878:25;:56::i;:::-;5839:95;;;;5949:7;5944:79;;5979:33;;-1:-1:-1;;;5979:33:76;;;;;;;;;;;2284:748:74;2398:9;2663:1;-1:-1:-1;;2646:19:74;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:74;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:77;2001:204::o;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:74;14987:104;-1:-1:-1;14987:104:74:o;41341:1269:76:-;41968:28;;;;41545:4;;41968:50;;42003:14;41968:34;:50::i;:::-;41858:27;;;;41836:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;42529:28:76;;;;42464:139;;42575:14;42465:34;1037:3;193:4:74;42465:34:76;:::i;42464:139::-;42352:27;;;;42332:48;;:13;;:19;:48::i;:::-;:271;;;41341:1269;-1:-1:-1;;;;41341:1269:76:o;17581:1971:78:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:78;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:::-;:18;;:21::i;:::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:74;18982:15:78;;18978:295;;19096:28;19109:14;193:4:74;19121:1:78;19109:11;:14::i;:::-;19096:8;;:12;:28::i;:::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:74;19259:1:78;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:78;;-1:-1:-1;;;;17581:1971:78;;;;;;;;;;;:::o;38757:1866:76:-;38908:7;38917:4;39199:1;39164:7;:31;;;:36;39160:84;;-1:-1:-1;39224:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;38757:1866:76:o;39160:84::-;39295:19;39317:49;39339:7;:26;;;39317:21;:49::i;:::-;39295:71;;39509:11;39523:167;39574:7;:27;;;39645:7;:35;;;39615:7;:27;;;:65;;;;:::i;:::-;39523:28;;;;;:167;:37;:167::i;:::-;39509:181;;39720:1;39704:12;:17;39700:411;;39765:3;39749:12;39741:27;39737:304;;;39820:28;;;39700:411;;39737:304;-1:-1:-1;40017:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;;;38757:1866:76:o;39700:411::-;40086:13;40087:12;40086:13;:::i;:::-;40071:29;;;;:::i;:::-;;;39700:411;40351:31;;;;40274:29;;;;:119;;40326:3;;40274:38;:119::i;:::-;40268:125;;40476:3;40444:7;:29;;;:35;40440:83;;;-1:-1:-1;40503:1:76;;;;-1:-1:-1;38757:1866:76;-1:-1:-1;;;38757:1866:76:o;40440:83::-;40596:3;40564:7;:29;;;:35;40601:4;40556:50;;;;;;38757:1866;;;:::o;48862:5714::-;49078:7;49087:4;49176:20;49225:1;49210:11;:16;49206:670;;49273:26;;:39;;;:78;;49339:11;;49273:78;:::i;:::-;49242:109;;49206:670;;;49382:18;49411:12;49412:11;49411:12;:::i;:::-;49455:26;;:39;;;49382:42;;-1:-1:-1;49442:52:76;;49438:428;;;49585:26;;:39;;;:76;;;;-1:-1:-1;49438:428:76;;;49842:1;49845:5;49834:17;;;;;;;;49438:428;49368:508;49206:670;50245:26;;:40;;50303:42;;;;;50135:30;;50168:191;;:59;:191::i;:::-;50852:26;;:38;;;;50783:39;;;;;50135:224;;-1:-1:-1;50369:18:76;;50670:274;;50722:208;;50783:129;;:43;:129::i;:::-;50722:31;;:39;:208::i;:::-;50670:28;;;;;:34;:274::i;:::-;50606:26;;:38;;;;50452:83;;;;;50390:265;;50452:193;;:132;;50561:22;50452:108;:132::i;:193::-;50390:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;50369:575;;51014:11;51028:185;51078:125;51133:56;51150:7;:26;;;:38;;;51133:12;:16;;:56;;;;:::i;:::-;51078:31;;:37;:125::i;:::-;51028:28;;;;;:36;:185::i;:::-;51014:199;;51240:3;51227:10;:16;51223:64;;;51267:1;51270:5;51259:17;;;;;;;;;;51223:64;51334:3;51320:17;;;;51577:9;51589:294;51621:22;51657:7;:26;;;:39;;;51716:7;:26;;;:38;;;193:4:74;51710:44:76;;;;:::i;:::-;51768:26;;:42;;;;51824:49;;;;;51589:18;:294::i;:::-;51577:306;;51893:13;51909:84;51945:7;:26;;;:38;;;193:4:74;51939:44:76;;;;:::i;:::-;51909:12;;:16;:84::i;:::-;51893:100;;52011:5;52007:1;:9;52003:201;;;52184:1;52187:5;52176:17;;;;;;;;;;;;52003:201;52310:26;;:49;;;;52373:42;;;;;52245:9;;;;52282:143;;52245:9;;52282:14;:143::i;:::-;52274:151;;193:4:74;52439:5:76;:12;52435:584;;52650:26;;:38;;;52551:169;;52578:128;;52644:44;;193:4:74;52644:44:76;:::i;:::-;52578:26;;:38;;;;:44;:128::i;52551:169::-;52543:177;;52435:584;;;52938:26;;:38;;;52837:171;;52864:130;;52932:44;;193:4:74;52932:44:76;:::i;:::-;52864:26;;:38;;;;:46;:130::i;52837:171::-;52829:179;;52435:584;53171:26;;:42;;;53119:104;;:10;;53152:5;;53119:19;:104::i;:::-;53106:117;;53283:10;193:4:74;53277:16:76;53273:398;;;53356:10;193:4:74;53350:16:76;53337:29;;53273:398;;;53652:1;53655:4;53644:16;;;;;;;;;;;;53273:398;53845:1;53810:7;:31;;;:36;53806:728;;53932:29;;;;53876:31;;;;53868:107;;:46;:107::i;:::-;53862:113;;193:4:74;53993:3:76;:10;53989:168;;54133:1;54136:5;54125:17;;;;;;;;;;;;53989:168;193:4:74;54204:9:76;;;;;54254:23;:10;54204:9;54254:18;:23::i;:::-;54241:36;;53806:728;;;54321:202;54383:126;54458:7;:29;;;54392:7;:31;;;54391:32;;;:::i;54383:126::-;54357:152;;193:4:74;54357:152:76;:::i;:::-;54321:10;;:18;:202::i;:::-;54308:215;;53806:728;-1:-1:-1;54552:10:76;;-1:-1:-1;54564:4:76;;-1:-1:-1;;;;;48862:5714:76;;;;;;;:::o;3190:114:74:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;15892:1050:78:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:78;16337:28;193:4:74;16345:13:78;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:74;16379:8:78;:15;16375:293;;16490:26;16503:12;193:4:74;16513:1:78;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:74;16654:1:78;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:78;;-1:-1:-1;;15892:1050:78;;;;;;;;;:::o;3462:114:74:-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;6753:1173:76:-;6860:7;6869:4;7246:19;7290:20;7312:12;7328:65;7372:7;7328:26;:65::i;:::-;7289:104;;;;7412:7;7407:64;;-1:-1:-1;7447:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;;;6753:1173:76:o;7407:64::-;7647:39;:7;:28;;;:37;:39::i;:::-;7598:30;7620:7;7598:21;:30::i;:::-;7566:13;7515:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7484:202;;7275:422;;7828:1;7813:12;:16;7809:64;;;-1:-1:-1;7853:1:76;;;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;7809:64::-;7899:12;7914:4;;-1:-1:-1;6753:1173:76;-1:-1:-1;;6753:1173:76:o;6027:544:75:-;6162:7;6181:29;6253:16;6213:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;6181:88;;6308:1;6283:22;:26;6279:238;;;6325:181;6381:111;6325:38;:181::i;11709:1515:78:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:78;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:74;12549:2:78;:9;12545:263;;12648:20;12655:12;193:4:74;12665:1:78;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:74;12794:1:78;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:78;;-1:-1:-1;;11709:1515:78;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:74;6666:2:78;:9;6662:261;;6764:20;6771:12;193:4:74;6781:1:78;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:74;6909:1:78;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:78;-1:-1:-1;;;;;;;5576:1765:78:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:78;14607:28;193:4:74;14617:11:78;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;:::-;14607:1;;:9;:28::i;:::-;14587:48;;193:4:74;14649:9:78;:16;14645:300;;14765:29;14779:14;193:4:74;14791:1:78;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:74;14931:1:78;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:78;-1:-1:-1;;;;;;13859:1409:78:o;20915:352::-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3811:844:74:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:74;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:74;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:74;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;20059:343:78:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;317:182:73:-;485:6;451:41;;-1:-1:-1;;;451:41:73;;;;;;;;:::i;8508:3846:74:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:74;9286:41;-1:-1:-1;9283:1:74;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:74;:26;5126:40;;-1:-1:-1;5165:1:74;;4907:3302;-1:-1:-1;4907:3302:74:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:74;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:74;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:74;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:74;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:74;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:74;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:74;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:74;7584:10;;;;-1:-1:-1;6063:75:74;;-1:-1:-1;6458:50:74;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;14:347:182:-;81:2;75:9;123:6;111:19;;160:18;145:34;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:351::-;437:2;431:9;479:6;467:19;;516:18;501:34;;537:22;;;498:62;495:185;;;602:10;597:3;593:20;590:1;583:31;637:4;634:1;627:15;665:4;662:1;655:15;722:1036;787:5;835:6;823:9;818:3;814:19;810:32;807:52;;;855:1;852;845:12;807:52;877:17;;:::i;:::-;868:26;;930:9;917:23;910:5;903:38;1001:2;990:9;986:18;973:32;968:2;961:5;957:14;950:56;1066:2;1055:9;1051:18;1038:32;1033:2;1026:5;1022:14;1015:56;1131:2;1120:9;1116:18;1103:32;1098:2;1091:5;1087:14;1080:56;1197:3;1186:9;1182:19;1169:33;1163:3;1156:5;1152:15;1145:58;1264:3;1253:9;1249:19;1236:33;1230:3;1223:5;1219:15;1212:58;1331:3;1320:9;1316:19;1303:33;1297:3;1290:5;1286:15;1279:58;1398:3;1387:9;1383:19;1370:33;1364:3;1357:5;1353:15;1346:58;1423:3;1486:2;1475:9;1471:18;1458:32;1453:2;1446:5;1442:14;1435:56;;1510:3;1573:2;1562:9;1558:18;1545:32;1540:2;1533:5;1529:14;1522:56;;1597:3;1660:2;1649:9;1645:18;1632:32;1627:2;1620:5;1616:14;1609:56;;1684:3;1747:2;1736:9;1732:18;1719:32;1714:2;1707:5;1703:14;1696:56;;722:1036;;;;:::o;1763:251::-;1859:6;1912:3;1900:9;1891:7;1887:23;1883:33;1880:53;;;1929:1;1926;1919:12;1880:53;1952:56;2000:7;1989:9;1952:56;:::i;2199:812::-;2272:5;2320:6;2308:9;2303:3;2299:19;2295:32;2292:52;;;2340:1;2337;2330:12;2292:52;2362:21;;:::i;:::-;2353:30;;2406:52;2454:3;2443:9;2406:52;:::i;:::-;2399:5;2392:67;2521:3;2510:9;2506:19;2493:33;2486:4;2479:5;2475:16;2468:59;2589:3;2578:9;2574:19;2561:33;2554:4;2547:5;2543:16;2536:59;2657:3;2646:9;2642:19;2629:33;2622:4;2615:5;2611:16;2604:59;2725:3;2714:9;2710:19;2697:33;2690:4;2683:5;2679:16;2672:59;2793:3;2782:9;2778:19;2765:33;2758:4;2751:5;2747:16;2740:59;2861:3;2850:9;2846:19;2833:33;2826:4;2819:5;2815:16;2808:59;2929:3;2918:9;2914:19;2901:33;2894:4;2887:5;2883:16;2876:59;2999:3;2988:9;2984:19;2971:33;2962:6;2955:5;2951:18;2944:61;2199:812;;;;:::o;3016:405::-;3138:6;3146;3154;3207:3;3195:9;3186:7;3182:23;3178:33;3175:53;;;3224:1;3221;3214:12;3175:53;3247:64;3303:7;3292:9;3247:64;:::i;:::-;3237:74;3358:3;3343:19;;3330:33;;-1:-1:-1;3410:3:182;3395:19;;;3382:33;;3016:405;-1:-1:-1;;;3016:405:182:o;3608:336::-;3721:6;3729;3782:3;3770:9;3761:7;3757:23;3753:33;3750:53;;;3799:1;3796;3789:12;3750:53;3822:64;3878:7;3867:9;3822:64;:::i;:::-;3812:74;3933:3;3918:19;;;;3905:33;;-1:-1:-1;;;3608:336:182:o;4212:452::-;4305:6;4313;4321;4329;4337;4390:3;4378:9;4369:7;4365:23;4361:33;4358:53;;;4407:1;4404;4397:12;4358:53;-1:-1:-1;;4430:23:182;;;4500:2;4485:18;;4472:32;;-1:-1:-1;4551:2:182;4536:18;;4523:32;;4602:2;4587:18;;4574:32;;-1:-1:-1;4653:3:182;4638:19;4625:33;;-1:-1:-1;4212:452:182;-1:-1:-1;4212:452:182:o;5405:127::-;5466:10;5461:3;5457:20;5454:1;5447:31;5497:4;5494:1;5487:15;5521:4;5518:1;5511:15;5537:128;5604:9;;;5625:11;;;5622:37;;;5639:18;;:::i;5670:200::-;5736:9;;;5709:4;5764:9;;5792:10;;5804:12;;;5788:29;5827:12;;;5819:21;;5785:56;5782:82;;;5844:18;;:::i;5875:125::-;5940:9;;;5961:10;;;5958:36;;;5974:18;;:::i;6005:136::-;6040:3;-1:-1:-1;;;6061:22:182;;6058:48;;6086:18;;:::i;:::-;-1:-1:-1;6126:1:182;6122:13;;6005:136::o;6146:216::-;6210:9;;;6238:11;;;6185:3;6268:9;;6296:10;;6292:19;;6321:10;;6313:19;;6289:44;6286:70;;;6336:18;;:::i;:::-;6286:70;;6146:216;;;;:::o;6499:290::-;6538:1;6564;6554:132;;6608:10;6603:3;6599:20;6596:1;6589:31;6643:4;6640:1;6633:15;6671:4;6668:1;6661:15;6554:132;-1:-1:-1;;;6702:18:182;;-1:-1:-1;;6722:13:182;;6698:38;6695:64;;;6739:18;;:::i;:::-;-1:-1:-1;6773:10:182;;6499:290::o;6794:360::-;6958:2;6943:18;;6991:1;6980:13;;6970:144;;7036:10;7031:3;7027:20;7024:1;7017:31;7071:4;7068:1;7061:15;7099:4;7096:1;7089:15;6970:144;7123:25;;;6794:360;:::o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
        "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
        "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
        "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
        "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
        "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
        "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxShareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleShareProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleWithdrawalSharesRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShareReservesDeltaSafe\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetCurveTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetFlatTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"calculateUpdateLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLPMath.sol\":\"MockLPMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/MockLPMath.sol\":{\"keccak256\":\"0xfcd3a7c0429eded99ddfdf28814092876b2ac0418275d303211c224281a0b647\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6cbaa0b18cd8bb6ff0faa098c98b243a3651f65e90f6d3056699ee545afa12c\",\"dweb:/ipfs/QmSvh1apdAfWv4h9cx7AB5HrPpan2SsdAbHwSM5oazZHjc\"]}},\"version\":1}",
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
                    "inputs": [
                        {
                            "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                            "name": "reason",
                            "type": "uint8"
                        }
                    ],
                    "type": "error",
                    "name": "InsufficientLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidShareReserves"
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
                "aave-v3-core/=lib/aave-v3-core/",
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
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
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockLPMath.sol": {
                "keccak256": "0xfcd3a7c0429eded99ddfdf28814092876b2ac0418275d303211c224281a0b647",
                "urls": [
                    "bzz-raw://e6cbaa0b18cd8bb6ff0faa098c98b243a3651f65e90f6d3056699ee545afa12c",
                    "dweb:/ipfs/QmSvh1apdAfWv4h9cx7AB5HrPpan2SsdAbHwSM5oazZHjc"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockLPMath.sol",
        "id": 21645,
        "exportedSymbols": {
            "LPMath": [
                17396
            ],
            "MockLPMath": [
                21644
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2655:90",
        "nodes": [
            {
                "id": 21503,
                "nodeType": "PragmaDirective",
                "src": "39:23:90",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 21505,
                "nodeType": "ImportDirective",
                "src": "64:60:90",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "contracts/src/libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21645,
                "sourceUnit": 17397,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21504,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17396,
                            "src": "73:6:90",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21644,
                "nodeType": "ContractDefinition",
                "src": "126:2567:90",
                "nodes": [
                    {
                        "id": 21534,
                        "nodeType": "FunctionDefinition",
                        "src": "152:631:90",
                        "nodes": [],
                        "body": {
                            "id": 21533,
                            "nodeType": "Block",
                            "src": "529:254:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21526,
                                                "name": "_shareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21507,
                                                "src": "607:14:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 21527,
                                                "name": "_shareAdjustment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21509,
                                                "src": "639:16:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 21528,
                                                "name": "_bondReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21511,
                                                "src": "673:13:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 21529,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21513,
                                                "src": "704:21:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 21530,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21515,
                                                "src": "743:19:90",
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
                                                "id": 21524,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "558:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21525,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "565:24:90",
                                            "memberName": "calculateUpdateLiquidity",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15765,
                                            "src": "558:31:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256)"
                                            }
                                        },
                                        "id": 21531,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "558:218:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,int256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 21523,
                                    "id": 21532,
                                    "nodeType": "Return",
                                    "src": "539:237:90"
                                }
                            ]
                        },
                        "functionSelector": "b500f3cb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateUpdateLiquidity",
                        "nameLocation": "161:24:90",
                        "parameters": {
                            "id": 21516,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21507,
                                    "mutability": "mutable",
                                    "name": "_shareReserves",
                                    "nameLocation": "203:14:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "195:22:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21506,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "195:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21509,
                                    "mutability": "mutable",
                                    "name": "_shareAdjustment",
                                    "nameLocation": "234:16:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "227:23:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21508,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "227:6:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21511,
                                    "mutability": "mutable",
                                    "name": "_bondReserves",
                                    "nameLocation": "268:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "260:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21510,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "260:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21513,
                                    "mutability": "mutable",
                                    "name": "_minimumShareReserves",
                                    "nameLocation": "299:21:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "291:29:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21512,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "291:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21515,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "337:19:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "330:26:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21514,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "330:6:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "185:177:90"
                        },
                        "returnParameters": {
                            "id": 21523,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21518,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "431:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "423:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21517,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "423:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21520,
                                    "mutability": "mutable",
                                    "name": "shareAdjustment",
                                    "nameLocation": "465:15:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "458:22:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21519,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:6:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21522,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "502:12:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21534,
                                    "src": "494:20:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21521,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "494:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "409:115:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21548,
                        "nodeType": "FunctionDefinition",
                        "src": "789:180:90",
                        "nodes": [],
                        "body": {
                            "id": 21547,
                            "nodeType": "Block",
                            "src": "908:61:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21544,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21537,
                                                "src": "954:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 21542,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "925:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21543,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "932:21:90",
                                            "memberName": "calculatePresentValue",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15819,
                                            "src": "925:28:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21545,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "925:37:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21541,
                                    "id": 21546,
                                    "nodeType": "Return",
                                    "src": "918:44:90"
                                }
                            ]
                        },
                        "functionSelector": "c00b11d3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculatePresentValue",
                        "nameLocation": "798:21:90",
                        "parameters": {
                            "id": 21538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21537,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "862:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21548,
                                    "src": "829:40:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 21536,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21535,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "829:6:90",
                                                "836:18:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 15790,
                                            "src": "829:25:90"
                                        },
                                        "referencedDeclaration": 15790,
                                        "src": "829:25:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "819:56:90"
                        },
                        "returnParameters": {
                            "id": 21541,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21540,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21548,
                                    "src": "899:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21539,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "899:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "898:9:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21562,
                        "nodeType": "FunctionDefinition",
                        "src": "975:179:90",
                        "nodes": [],
                        "body": {
                            "id": 21561,
                            "nodeType": "Block",
                            "src": "1093:61:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21558,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21551,
                                                "src": "1139:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 21556,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "1110:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21557,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1117:21:90",
                                            "memberName": "calculateNetFlatTrade",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 16242,
                                            "src": "1110:28:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_int256_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (int256)"
                                            }
                                        },
                                        "id": 21559,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1110:37:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 21555,
                                    "id": 21560,
                                    "nodeType": "Return",
                                    "src": "1103:44:90"
                                }
                            ]
                        },
                        "functionSelector": "32c5dec4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateNetFlatTrade",
                        "nameLocation": "984:21:90",
                        "parameters": {
                            "id": 21552,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21551,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1048:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21562,
                                    "src": "1015:40:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 21550,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21549,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "1015:6:90",
                                                "1022:18:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 15790,
                                            "src": "1015:25:90"
                                        },
                                        "referencedDeclaration": 15790,
                                        "src": "1015:25:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1005:56:90"
                        },
                        "returnParameters": {
                            "id": 21555,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21554,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21562,
                                    "src": "1085:6:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21553,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1085:6:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1084:8:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21587,
                        "nodeType": "FunctionDefinition",
                        "src": "1160:335:90",
                        "nodes": [],
                        "body": {
                            "id": 21586,
                            "nodeType": "Block",
                            "src": "1279:216:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        21571,
                                        21573
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21571,
                                            "mutability": "mutable",
                                            "name": "netCurveTrade",
                                            "nameLocation": "1297:13:90",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21586,
                                            "src": "1290:20:90",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 21570,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1290:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 21573,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "1317:7:90",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21586,
                                            "src": "1312:12:90",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 21572,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1312:4:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21578,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 21576,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21565,
                                                "src": "1375:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 21574,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "1328:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21575,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1348:26:90",
                                            "memberName": "calculateNetCurveTradeSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 16204,
                                            "src": "1328:46:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_int256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (int256,bool)"
                                            }
                                        },
                                        "id": 21577,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1328:55:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_int256_$_t_bool_$",
                                            "typeString": "tuple(int256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1289:94:90"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21580,
                                                "name": "success",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21573,
                                                "src": "1401:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4d6f636b4c504d6174683a2063616c63756c6174654e65744375727665547261646553616665206661696c6564",
                                                "id": 21581,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1410:47:90",
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
                                            "id": 21579,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1393:7:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 21582,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1393:65:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21583,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1393:65:90"
                                },
                                {
                                    "expression": {
                                        "id": 21584,
                                        "name": "netCurveTrade",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21571,
                                        "src": "1475:13:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 21569,
                                    "id": 21585,
                                    "nodeType": "Return",
                                    "src": "1468:20:90"
                                }
                            ]
                        },
                        "functionSelector": "a4fc6f81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateNetCurveTrade",
                        "nameLocation": "1169:22:90",
                        "parameters": {
                            "id": 21566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21565,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1234:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21587,
                                    "src": "1201:40:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 21564,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21563,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "1201:6:90",
                                                "1208:18:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 15790,
                                            "src": "1201:25:90"
                                        },
                                        "referencedDeclaration": 15790,
                                        "src": "1201:25:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1191:56:90"
                        },
                        "returnParameters": {
                            "id": 21569,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21568,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21587,
                                    "src": "1271:6:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21567,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1271:6:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1270:8:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21604,
                        "nodeType": "FunctionDefinition",
                        "src": "1501:368:90",
                        "nodes": [],
                        "body": {
                            "id": 21603,
                            "nodeType": "Block",
                            "src": "1697:172:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21599,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21590,
                                                "src": "1804:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 21600,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21592,
                                                "src": "1829:19:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 21597,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "1726:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21598,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1733:53:90",
                                            "memberName": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 16441,
                                            "src": "1726:60:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21601,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1726:136:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21596,
                                    "id": 21602,
                                    "nodeType": "Return",
                                    "src": "1707:155:90"
                                }
                            ]
                        },
                        "functionSelector": "a0d1643c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
                        "nameLocation": "1510:53:90",
                        "parameters": {
                            "id": 21593,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21590,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1614:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21604,
                                    "src": "1573:48:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 21589,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21588,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "1573:6:90",
                                                "1580:26:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 16262,
                                            "src": "1573:33:90"
                                        },
                                        "referencedDeclaration": 16262,
                                        "src": "1573:33:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21592,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "1639:19:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21604,
                                    "src": "1631:27:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21591,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1631:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1563:101:90"
                        },
                        "returnParameters": {
                            "id": 21596,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21595,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21604,
                                    "src": "1688:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21594,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1688:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1687:9:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21624,
                        "nodeType": "FunctionDefinition",
                        "src": "1875:450:90",
                        "nodes": [],
                        "body": {
                            "id": 21623,
                            "nodeType": "Block",
                            "src": "2112:213:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21618,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21607,
                                                "src": "2208:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 21619,
                                                "name": "_originalEffectiveShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21609,
                                                "src": "2233:31:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 21620,
                                                "name": "_maxShareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21611,
                                                "src": "2282:22:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
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
                                                "id": 21616,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "2141:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21617,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2148:42:90",
                                            "memberName": "calculateDistributeExcessIdleShareProceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 16799,
                                            "src": "2141:49:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21621,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2141:177:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21615,
                                    "id": 21622,
                                    "nodeType": "Return",
                                    "src": "2122:196:90"
                                }
                            ]
                        },
                        "functionSelector": "3f9ccc01",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateDistributeExcessIdleShareProceeds",
                        "nameLocation": "1884:42:90",
                        "parameters": {
                            "id": 21612,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21607,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "1977:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21624,
                                    "src": "1936:48:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 21606,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21605,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "1936:6:90",
                                                "1943:26:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 16262,
                                            "src": "1936:33:90"
                                        },
                                        "referencedDeclaration": 16262,
                                        "src": "1936:33:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21609,
                                    "mutability": "mutable",
                                    "name": "_originalEffectiveShareReserves",
                                    "nameLocation": "2002:31:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21624,
                                    "src": "1994:39:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21608,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1994:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21611,
                                    "mutability": "mutable",
                                    "name": "_maxShareReservesDelta",
                                    "nameLocation": "2051:22:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21624,
                                    "src": "2043:30:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21610,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2043:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1926:153:90"
                        },
                        "returnParameters": {
                            "id": 21615,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21614,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21624,
                                    "src": "2103:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21613,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2103:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2102:9:90"
                        },
                        "scope": 21644,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21643,
                        "nodeType": "FunctionDefinition",
                        "src": "2331:360:90",
                        "nodes": [],
                        "body": {
                            "id": 21642,
                            "nodeType": "Block",
                            "src": "2526:165:90",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21638,
                                                "name": "_params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21627,
                                                "src": "2614:7:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            },
                                            {
                                                "id": 21639,
                                                "name": "_originalEffectiveShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21629,
                                                "src": "2639:31:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 21636,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "2555:6:90",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 21637,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2562:34:90",
                                            "memberName": "calculateMaxShareReservesDeltaSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17064,
                                            "src": "2555:41:90",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256,bool)"
                                            }
                                        },
                                        "id": 21640,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2555:129:90",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "functionReturnParameters": 21635,
                                    "id": 21641,
                                    "nodeType": "Return",
                                    "src": "2536:148:90"
                                }
                            ]
                        },
                        "functionSelector": "9e5fc16b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMaxShareReservesDeltaSafe",
                        "nameLocation": "2340:34:90",
                        "parameters": {
                            "id": 21630,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21627,
                                    "mutability": "mutable",
                                    "name": "_params",
                                    "nameLocation": "2425:7:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21643,
                                    "src": "2384:48:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 21626,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 21625,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "2384:6:90",
                                                "2391:26:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 16262,
                                            "src": "2384:33:90"
                                        },
                                        "referencedDeclaration": 16262,
                                        "src": "2384:33:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21629,
                                    "mutability": "mutable",
                                    "name": "_originalEffectiveShareReserves",
                                    "nameLocation": "2450:31:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21643,
                                    "src": "2442:39:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21628,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2442:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2374:113:90"
                        },
                        "returnParameters": {
                            "id": 21635,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21632,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21643,
                                    "src": "2511:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21631,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2511:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21634,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21643,
                                    "src": "2520:4:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 21633,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:4:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2510:15:90"
                        },
                        "scope": 21644,
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
                    21644
                ],
                "name": "MockLPMath",
                "nameLocation": "135:10:90",
                "scope": 21645,
                "usedErrors": [
                    7478,
                    7490,
                    7514,
                    7517,
                    7526,
                    7582
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 90
};
