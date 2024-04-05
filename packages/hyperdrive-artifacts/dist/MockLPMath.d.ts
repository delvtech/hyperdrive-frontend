export declare const MockLPMath: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPresentValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly name: "presentValueParams";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "startingPresentValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idle";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "netCurveTrade";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalBondReserves";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_originalEffectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxShareReservesDelta";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistributeExcessIdleShareProceeds";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly name: "presentValueParams";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "startingPresentValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idle";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "netCurveTrade";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalBondReserves";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareReservesDelta";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly name: "presentValueParams";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "startingPresentValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "idle";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "netCurveTrade";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originalBondReserves";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_originalEffectiveShareReserves";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxShareReservesDeltaSafe";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "calculateNetCurveTrade";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "calculateNetFlatTrade";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "calculatePresentValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "_shareAdjustment";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minimumShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "_shareReservesDelta";
            readonly type: "int256";
        }];
        readonly name: "calculateUpdateLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "shareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "shareAdjustment";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bondReserves";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50611f21806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611ccb565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611d70565b61015b565b6100ce6100c9366004611da7565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611da7565b61018b565b610095610104366004611ccb565b610197565b61011c610117366004611dd4565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611ccb565b6102a6565b6000610155826102b1565b92915050565b6000610168848484610324565b90505b9392505050565b60008061017f848461069d565b915091505b9250929050565b600061016b83836107ac565b60008060006101a584610879565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60008060008061022b8989898989610ba8565b929650909450925090508061029a5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b6064820152608401610208565b50955095509592505050565b600061015582610cc0565b60006102e96102e4836101200151670de0b6b3a76400006102d29190611e25565b60608501516101008601519190610cf0565b610d16565b61031a6102e4846101600151670de0b6b3a76400006103089190611e25565b60608601516101408701519190610d44565b6101559190611e38565b6000808460600151856040015161033b9190611e58565b602086015160608701519192506000916103559184610d44565b90508560a0015160000361036c57915061016b9050565b60005b6004811015610693576103828286610d62565b915060006103b98860c001518960e001518a61010001518b6000015160a001516103ab88610d16565b6103b490611e6b565b610ba8565b8b5160408101929092526020820192909252919091529050806103e357600094505050505061016b565b60006103f28960000151610d77565b92509050816104095760009550505050505061016b565b610414898287610e04565b15610420575050610693565b60008960a00151131561058457885180516020820151604083015160a084015160e0909401518d9460009461047a949093909290919061046890670de0b6b3a7640000611e25565b87516060810151608090910151610e70565b945090508361049357600097505050505050505061016b565b808260a0015110610581576104a782610f82565b9096509350836104c157600097505050505050505061016b565b6104e68260c001518360e00151846101000151856000015160a001516103ab8b610d16565b8551604081019290925260208201929092529190915293508361051357600097505050505050505061016b565b815180516020820151604083015160a0909301518e5160e0015161054594919061046890670de0b6b3a7640000611e25565b945090508361055e57600097505050505050505061016b565b8a60a001518111610578578597505050505050505061016b565b5050505061036f565b50505b60006105958a8a8c60a00151611058565b935090508215806105ae5750670de0b6b3a76400008110155b156105c2576000965050505050505061016b565b80670de0b6b3a764000003905060006105ef6102e48c604001518d602001516113b590919063ffffffff16565b6105fc6102e4858a6113ca565b6106069190611e38565b90506000811315610636576106258761061f83856113df565b906113df565b61062f9087611e58565b9550610684565b600081121561067b5760006106508861061f858186611e6b565b905086811015610664578087039650610675565b60009850505050505050505061016b565b50610684565b50505050610693565b8460010194505050505061036f565b5095945050505050565b60008060008460a00151126106ba57505060808201516001610184565b60008460a001516106ca90611e6b565b9050600061070685876101000151886000015160e00151670de0b6b3a76400006106f49190611e25565b895160608101516080909101516113f4565b93509050821580610715575080155b1561072857600080935093505050610184565b600061073483836114a0565b9050670de0b6b3a764000081116107705780670de0b6b3a76400000394506107698760c00151866113ca90919063ffffffff16565b945061077f565b60008094509450505050610184565b866080015185111561079e578660800151600194509450505050610184565b506001925050509250929050565b6000806107d48460c001518560e00151866101000151876000015160a001516103ab88610d16565b875160408101929092526020820192909252919091529050806107fb576000915050610155565b600061080a8560000151610d77565b925090508161081e57600092505050610155565b8460200151811061083457600092505050610155565b60008560600151866040015161084a9190611e58565b905061086582876020015183610d449092919063ffffffff16565b61086f9082611e25565b9695505050505050565b600080600061089e6102e48561016001518661014001516113ca90919063ffffffff16565b6108be6102e48661012001518761010001516113b590919063ffffffff16565b6108c89190611e38565b90506000806108df866000015187602001516114b5565b91509150806108f657506000958695509350505050565b6000831315610a465760008390506000610944886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006109359190611e25565b8d606001518e60800151610e70565b935090508261095d575060009788975095505050505050565b8181106109fb576000610997858a60400151858c60e00151670de0b6b3a76400006109889190611e25565b8d606001518e608001516114f1565b94509050831580156109ac57508860c0015183105b156109c35750600098600198509650505050505050565b836109d957506000988998509650505050505050565b6109e281610d16565b6109eb90611e6b565b9960019950975050505050505050565b6000886020015112610a3257610a1a8860a00151856102e49190611e25565b610a2390611e6b565b98600198509650505050505050565b60a08801518851610a1a916102e491611e25565b6000831215610b99576000610a5a84611e6b565b90506000610a8e8489604001518a60e00151670de0b6b3a7640000610a7f9190611e25565b8b606001518c608001516113f4565b9350905082610aa7575060009788975095505050505050565b818110610b2c576000610ae1858a60400151858c60e00151670de0b6b3a7640000610ad29190611e25565b8d606001518e608001516115b4565b9450905083158015610af657508860c0015183105b15610b0d5750600098600198509650505050505050565b83610b2357506000988998509650505050505050565b6109eb81610d16565b6000610b5e858a604001518b60e00151670de0b6b3a7640000610b4f9190611e25565b8c606001518d6080015161168b565b9450905083610b7857506000988998509650505050505050565b6109eb610b8f8a60600151848661061f9190611e25565b6102e49083611e58565b50600095600195509350505050565b60008060008084600003610bc757508792508691508590506001610cb4565b600085610bd38b610d16565b610bdd9190611e87565b9050610be887610d16565b811215610c0357600080600080945094509450945050610cb4565b80945060008912610c2357610c1c6102e4868b8d610d44565b9350610c46565b610c3a6102e4610c328b611e6b565b87908d610cf0565b610c4390611e6b565b93505b600080610c538c8c6114b5565b9150915080610c72576000806000809650965096509650505050610cb4565b6000610c7e88886114b5565b9250905081610c9e57600080600080975097509750975050505050610cb4565b610ca98b8285610d44565b955060019450505050505b95509550955095915050565b6000806000610cce84610d77565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610d0757600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610d405760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610d5b57600080fd5b5091020490565b6000818311610d71578261016b565b50919050565b6000806000806000610d8886610879565b9150915080610d9f57506000958695509350505050565b610dac8660a00151610d16565b610db5876102b1565b83610dc38960000151610d16565b610dcd9190611e87565b610dd79190611e87565b610de19190611e38565b925050506000811215610dfa5750600093849350915050565b9360019350915050565b6020830151600090610e1690846114a0565b6040850151610e269084906113df565b1015801561016857506020840151610e569084610e4f633b9aca00670de0b6b3a7640000611e58565b9190610d44565b6040850151610e669084906114a0565b1115949350505050565b6000806000881215610e9257610e8588611e6b565b610e8f9087611e58565b95505b600080610e9f8b8b6114b5565b9150915080610eb657600080935093505050610f76565b6000610ec5838b8a8a8a611741565b90506000610ee8610ee08a610eda8a8e6113b5565b90611770565b899089610cf0565b905080821015610f02576000809550955050505050610f76565b808203670de0b6b3a76400008110610f3757610f30610f29670de0b6b3a76400008c6113df565b8290611770565b9050610f4f565b610f4c610f29670de0b6b3a76400008c6114a0565b90505b8b811015610f6857600080965096505050505050610f76565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113610f9c57506000928392509050565b6000610fab84600001516102b1565b90506000610fd7856040015186606001518760400151610fcb9190611e58565b60208801519190610cf0565b905060008212610ffe5780821015610ff157819003611014565b5060009485945092505050565b61100782611e6b565b6110119082611e58565b90505b60e085015160c0860151611029918390610cf0565b9050808560c001511015611044575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261107c57855160400151611075908590611e58565b90506110b7565b600061108785611e6b565b8751604001519091508110156110a75786516040015181900391506110b5565b6000809350935050506113ad565b505b8551805160209091015160009182916110d091906114b5565b91509150806110e857600080945094505050506113ad565b875160e081015160409091015160009161111d916111119161110a9190611770565b8a906113ca565b6101008b0151906114a0565b895160e08101516080909101516111489161113c91610eda90886113ca565b8b5160600151906114a0565b6111529190611e58565b9050600061118a61117e6111778c6000015160e001518861177090919063ffffffff16565b8b906113b5565b6101008c0151906113df565b9050808210156111a5576000809650965050505050506113ad565b808203915060006111e7858c60000151604001518d6000015160e00151670de0b6b3a76400006111d59190611e25565b8e5160608101516080909101516117db565b905060006112118c6000015160e00151670de0b6b3a764000061120a9190611e25565b8890611770565b90508082101561122e5760008098509850505050505050506113ad565b8b5160808101516060909101519183039161124a918391610cf0565b9050670de0b6b3a7640000811061128e578b5160e0015161128790610f299061127b90670de0b6b3a7640000611e25565b8e5160e00151906114a0565b90506112bd565b8b5160e001516112ba90610f29906112ae90670de0b6b3a7640000611e25565b8e5160e00151906113df565b90505b8b51606001516112d09085908390610cf0565b935083670de0b6b3a764000011156112f45783670de0b6b3a7640000039350611308565b6000600198509850505050505050506113ad565b60008c60e001511261136a5760c08c015160e08d0151611327916114a0565b9250670de0b6b3a7640000831061134b5760008098509850505050505050506113ad565b670de0b6b3a7640000929092039161136384846113ca565b935061139f565b61139c6113838d60c001518e60e0015161061f90611e6b565b61139590670de0b6b3a7640000611e58565b85906113ca565b93505b509196506001955050505050505b935093915050565b600061016b8383670de0b6b3a7640000610cf0565b600061016b8383670de0b6b3a7640000610d44565b600061016b83670de0b6b3a764000084610d44565b600080600061140688888888886117db565b90506000611431670de0b6b3a764000061142088886113df565b61142a9190611e58565b83906114a0565b9050670de0b6b3a7640000811061145e57611457610f29670de0b6b3a7640000896114a0565b9050611476565b611473610f29670de0b6b3a7640000896113df565b90505b8088101561148c57600080935093505050611496565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610cf0565b6000806000836114c486610d16565b6114ce9190611e38565b905060008112156114e6576000809250925050610184565b946001945092505050565b600080600061150389898888886117db565b905061151386610eda898b611e58565b97508781101561152a5760008092509250506115a9565b878103611538818688610cf0565b9050670de0b6b3a764000081106115655761155e610f29670de0b6b3a7640000896114a0565b905061157d565b61157a610f29670de0b6b3a7640000896113df565b90505b61158781866114a0565b9050808a101561159f576000809350935050506115a9565b8903925060019150505b965096945050505050565b60008060006115c689898888886117db565b9050868810156115dd5760008092509250506115a9565b96869003966115ec8887611770565b9750878110156116035760008092509250506115a9565b878103611611818688610cf0565b9050670de0b6b3a7640000811061163e57611637610f29670de0b6b3a7640000896114a0565b9050611656565b611653610f29670de0b6b3a7640000896113df565b90505b61166081866114a0565b905089811015611678576000809350935050506115a9565b9890980398600198509650505050505050565b600080600061169d8888888888611741565b905060006116c8670de0b6b3a76400006116b788886114a0565b6116c19190611e58565b83906113df565b9050670de0b6b3a764000081106116f5576116ee610f29670de0b6b3a7640000896113df565b905061170d565b61170a610f29670de0b6b3a7640000896114a0565b90505b61171781866113df565b90508881101561172f57600080935093505050611496565b97909703976001975095505050505050565b600061174d8585611770565b61176661175e86610eda868b6113ca565b859085610d44565b61086f9190611e58565b6000816000036117895750670de0b6b3a7640000610155565b8260000361179957506000610155565b60006117a483610d16565b905060006117b96117b486610d16565b611800565b90508181026117d0670de0b6b3a764000082611eaf565b905061086f81611a2f565b60006117e78585611770565b6117666117f886610eda868b6113b5565b859085610cf0565b60008082136118225760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906118ae9084901c610d16565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611a4a57506000919050565b680755bf798b4a1bf1e58212611a73576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061086f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610d16565b604051610180810167ffffffffffffffff81118282101715611bf657634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611bf657634e487b7160e01b600052604160045260246000fd5b60006101808284031215611c4157600080fd5b611c49611bc4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611cde57600080fd5b61016b8383611c2e565b60006102808284031215611cfb57600080fd5b611d03611bfc565b9050611d0f8383611c2e565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611d8657600080fd5b611d908585611ce8565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611dbb57600080fd5b611dc58484611ce8565b94610280939093013593505050565b600080600080600060a08688031215611dec57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611e0f565b818103600083128015838313168383128216171561021157610211611e0f565b8082018082111561015557610155611e0f565b6000600160ff1b8201611e8057611e80611e0f565b5060000390565b8082018281126000831280158216821582161715611ea757611ea7611e0f565b505092915050565b600082611ecc57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611ee657611ee6611e0f565b50059056fea2646970667358221220ee4a4e088444c048f41b2f08f1bdc39ac0e03eeb2640ded17ae777b2e4735b2564736f6c63430008140033";
        readonly sourceMap: "126:2722:138:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611ccb565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611d70565b61015b565b6100ce6100c9366004611da7565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611da7565b61018b565b610095610104366004611ccb565b610197565b61011c610117366004611dd4565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611ccb565b6102a6565b6000610155826102b1565b92915050565b6000610168848484610324565b90505b9392505050565b60008061017f848461069d565b915091505b9250929050565b600061016b83836107ac565b60008060006101a584610879565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60008060008061022b8989898989610ba8565b929650909450925090508061029a5760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b6064820152608401610208565b50955095509592505050565b600061015582610cc0565b60006102e96102e4836101200151670de0b6b3a76400006102d29190611e25565b60608501516101008601519190610cf0565b610d16565b61031a6102e4846101600151670de0b6b3a76400006103089190611e25565b60608601516101408701519190610d44565b6101559190611e38565b6000808460600151856040015161033b9190611e58565b602086015160608701519192506000916103559184610d44565b90508560a0015160000361036c57915061016b9050565b60005b6004811015610693576103828286610d62565b915060006103b98860c001518960e001518a61010001518b6000015160a001516103ab88610d16565b6103b490611e6b565b610ba8565b8b5160408101929092526020820192909252919091529050806103e357600094505050505061016b565b60006103f28960000151610d77565b92509050816104095760009550505050505061016b565b610414898287610e04565b15610420575050610693565b60008960a00151131561058457885180516020820151604083015160a084015160e0909401518d9460009461047a949093909290919061046890670de0b6b3a7640000611e25565b87516060810151608090910151610e70565b945090508361049357600097505050505050505061016b565b808260a0015110610581576104a782610f82565b9096509350836104c157600097505050505050505061016b565b6104e68260c001518360e00151846101000151856000015160a001516103ab8b610d16565b8551604081019290925260208201929092529190915293508361051357600097505050505050505061016b565b815180516020820151604083015160a0909301518e5160e0015161054594919061046890670de0b6b3a7640000611e25565b945090508361055e57600097505050505050505061016b565b8a60a001518111610578578597505050505050505061016b565b5050505061036f565b50505b60006105958a8a8c60a00151611058565b935090508215806105ae5750670de0b6b3a76400008110155b156105c2576000965050505050505061016b565b80670de0b6b3a764000003905060006105ef6102e48c604001518d602001516113b590919063ffffffff16565b6105fc6102e4858a6113ca565b6106069190611e38565b90506000811315610636576106258761061f83856113df565b906113df565b61062f9087611e58565b9550610684565b600081121561067b5760006106508861061f858186611e6b565b905086811015610664578087039650610675565b60009850505050505050505061016b565b50610684565b50505050610693565b8460010194505050505061036f565b5095945050505050565b60008060008460a00151126106ba57505060808201516001610184565b60008460a001516106ca90611e6b565b9050600061070685876101000151886000015160e00151670de0b6b3a76400006106f49190611e25565b895160608101516080909101516113f4565b93509050821580610715575080155b1561072857600080935093505050610184565b600061073483836114a0565b9050670de0b6b3a764000081116107705780670de0b6b3a76400000394506107698760c00151866113ca90919063ffffffff16565b945061077f565b60008094509450505050610184565b866080015185111561079e578660800151600194509450505050610184565b506001925050509250929050565b6000806107d48460c001518560e00151866101000151876000015160a001516103ab88610d16565b875160408101929092526020820192909252919091529050806107fb576000915050610155565b600061080a8560000151610d77565b925090508161081e57600092505050610155565b8460200151811061083457600092505050610155565b60008560600151866040015161084a9190611e58565b905061086582876020015183610d449092919063ffffffff16565b61086f9082611e25565b9695505050505050565b600080600061089e6102e48561016001518661014001516113ca90919063ffffffff16565b6108be6102e48661012001518761010001516113b590919063ffffffff16565b6108c89190611e38565b90506000806108df866000015187602001516114b5565b91509150806108f657506000958695509350505050565b6000831315610a465760008390506000610944886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006109359190611e25565b8d606001518e60800151610e70565b935090508261095d575060009788975095505050505050565b8181106109fb576000610997858a60400151858c60e00151670de0b6b3a76400006109889190611e25565b8d606001518e608001516114f1565b94509050831580156109ac57508860c0015183105b156109c35750600098600198509650505050505050565b836109d957506000988998509650505050505050565b6109e281610d16565b6109eb90611e6b565b9960019950975050505050505050565b6000886020015112610a3257610a1a8860a00151856102e49190611e25565b610a2390611e6b565b98600198509650505050505050565b60a08801518851610a1a916102e491611e25565b6000831215610b99576000610a5a84611e6b565b90506000610a8e8489604001518a60e00151670de0b6b3a7640000610a7f9190611e25565b8b606001518c608001516113f4565b9350905082610aa7575060009788975095505050505050565b818110610b2c576000610ae1858a60400151858c60e00151670de0b6b3a7640000610ad29190611e25565b8d606001518e608001516115b4565b9450905083158015610af657508860c0015183105b15610b0d5750600098600198509650505050505050565b83610b2357506000988998509650505050505050565b6109eb81610d16565b6000610b5e858a604001518b60e00151670de0b6b3a7640000610b4f9190611e25565b8c606001518d6080015161168b565b9450905083610b7857506000988998509650505050505050565b6109eb610b8f8a60600151848661061f9190611e25565b6102e49083611e58565b50600095600195509350505050565b60008060008084600003610bc757508792508691508590506001610cb4565b600085610bd38b610d16565b610bdd9190611e87565b9050610be887610d16565b811215610c0357600080600080945094509450945050610cb4565b80945060008912610c2357610c1c6102e4868b8d610d44565b9350610c46565b610c3a6102e4610c328b611e6b565b87908d610cf0565b610c4390611e6b565b93505b600080610c538c8c6114b5565b9150915080610c72576000806000809650965096509650505050610cb4565b6000610c7e88886114b5565b9250905081610c9e57600080600080975097509750975050505050610cb4565b610ca98b8285610d44565b955060019450505050505b95509550955095915050565b6000806000610cce84610d77565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610d0757600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610d405760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610d5b57600080fd5b5091020490565b6000818311610d71578261016b565b50919050565b6000806000806000610d8886610879565b9150915080610d9f57506000958695509350505050565b610dac8660a00151610d16565b610db5876102b1565b83610dc38960000151610d16565b610dcd9190611e87565b610dd79190611e87565b610de19190611e38565b925050506000811215610dfa5750600093849350915050565b9360019350915050565b6020830151600090610e1690846114a0565b6040850151610e269084906113df565b1015801561016857506020840151610e569084610e4f633b9aca00670de0b6b3a7640000611e58565b9190610d44565b6040850151610e669084906114a0565b1115949350505050565b6000806000881215610e9257610e8588611e6b565b610e8f9087611e58565b95505b600080610e9f8b8b6114b5565b9150915080610eb657600080935093505050610f76565b6000610ec5838b8a8a8a611741565b90506000610ee8610ee08a610eda8a8e6113b5565b90611770565b899089610cf0565b905080821015610f02576000809550955050505050610f76565b808203670de0b6b3a76400008110610f3757610f30610f29670de0b6b3a76400008c6113df565b8290611770565b9050610f4f565b610f4c610f29670de0b6b3a76400008c6114a0565b90505b8b811015610f6857600080965096505050505050610f76565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113610f9c57506000928392509050565b6000610fab84600001516102b1565b90506000610fd7856040015186606001518760400151610fcb9190611e58565b60208801519190610cf0565b905060008212610ffe5780821015610ff157819003611014565b5060009485945092505050565b61100782611e6b565b6110119082611e58565b90505b60e085015160c0860151611029918390610cf0565b9050808560c001511015611044575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261107c57855160400151611075908590611e58565b90506110b7565b600061108785611e6b565b8751604001519091508110156110a75786516040015181900391506110b5565b6000809350935050506113ad565b505b8551805160209091015160009182916110d091906114b5565b91509150806110e857600080945094505050506113ad565b875160e081015160409091015160009161111d916111119161110a9190611770565b8a906113ca565b6101008b0151906114a0565b895160e08101516080909101516111489161113c91610eda90886113ca565b8b5160600151906114a0565b6111529190611e58565b9050600061118a61117e6111778c6000015160e001518861177090919063ffffffff16565b8b906113b5565b6101008c0151906113df565b9050808210156111a5576000809650965050505050506113ad565b808203915060006111e7858c60000151604001518d6000015160e00151670de0b6b3a76400006111d59190611e25565b8e5160608101516080909101516117db565b905060006112118c6000015160e00151670de0b6b3a764000061120a9190611e25565b8890611770565b90508082101561122e5760008098509850505050505050506113ad565b8b5160808101516060909101519183039161124a918391610cf0565b9050670de0b6b3a7640000811061128e578b5160e0015161128790610f299061127b90670de0b6b3a7640000611e25565b8e5160e00151906114a0565b90506112bd565b8b5160e001516112ba90610f29906112ae90670de0b6b3a7640000611e25565b8e5160e00151906113df565b90505b8b51606001516112d09085908390610cf0565b935083670de0b6b3a764000011156112f45783670de0b6b3a7640000039350611308565b6000600198509850505050505050506113ad565b60008c60e001511261136a5760c08c015160e08d0151611327916114a0565b9250670de0b6b3a7640000831061134b5760008098509850505050505050506113ad565b670de0b6b3a7640000929092039161136384846113ca565b935061139f565b61139c6113838d60c001518e60e0015161061f90611e6b565b61139590670de0b6b3a7640000611e58565b85906113ca565b93505b509196506001955050505050505b935093915050565b600061016b8383670de0b6b3a7640000610cf0565b600061016b8383670de0b6b3a7640000610d44565b600061016b83670de0b6b3a764000084610d44565b600080600061140688888888886117db565b90506000611431670de0b6b3a764000061142088886113df565b61142a9190611e58565b83906114a0565b9050670de0b6b3a7640000811061145e57611457610f29670de0b6b3a7640000896114a0565b9050611476565b611473610f29670de0b6b3a7640000896113df565b90505b8088101561148c57600080935093505050611496565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610cf0565b6000806000836114c486610d16565b6114ce9190611e38565b905060008112156114e6576000809250925050610184565b946001945092505050565b600080600061150389898888886117db565b905061151386610eda898b611e58565b97508781101561152a5760008092509250506115a9565b878103611538818688610cf0565b9050670de0b6b3a764000081106115655761155e610f29670de0b6b3a7640000896114a0565b905061157d565b61157a610f29670de0b6b3a7640000896113df565b90505b61158781866114a0565b9050808a101561159f576000809350935050506115a9565b8903925060019150505b965096945050505050565b60008060006115c689898888886117db565b9050868810156115dd5760008092509250506115a9565b96869003966115ec8887611770565b9750878110156116035760008092509250506115a9565b878103611611818688610cf0565b9050670de0b6b3a7640000811061163e57611637610f29670de0b6b3a7640000896114a0565b9050611656565b611653610f29670de0b6b3a7640000896113df565b90505b61166081866114a0565b905089811015611678576000809350935050506115a9565b9890980398600198509650505050505050565b600080600061169d8888888888611741565b905060006116c8670de0b6b3a76400006116b788886114a0565b6116c19190611e58565b83906113df565b9050670de0b6b3a764000081106116f5576116ee610f29670de0b6b3a7640000896113df565b905061170d565b61170a610f29670de0b6b3a7640000896114a0565b90505b61171781866113df565b90508881101561172f57600080935093505050611496565b97909703976001975095505050505050565b600061174d8585611770565b61176661175e86610eda868b6113ca565b859085610d44565b61086f9190611e58565b6000816000036117895750670de0b6b3a7640000610155565b8260000361179957506000610155565b60006117a483610d16565b905060006117b96117b486610d16565b611800565b90508181026117d0670de0b6b3a764000082611eaf565b905061086f81611a2f565b60006117e78585611770565b6117666117f886610eda868b6113b5565b859085610cf0565b60008082136118225760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906118ae9084901c610d16565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611a4a57506000919050565b680755bf798b4a1bf1e58212611a73576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061086f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610d16565b604051610180810167ffffffffffffffff81118282101715611bf657634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611bf657634e487b7160e01b600052604160045260246000fd5b60006101808284031215611c4157600080fd5b611c49611bc4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611cde57600080fd5b61016b8383611c2e565b60006102808284031215611cfb57600080fd5b611d03611bfc565b9050611d0f8383611c2e565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611d8657600080fd5b611d908585611ce8565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611dbb57600080fd5b611dc58484611ce8565b94610280939093013593505050565b600080600080600060a08688031215611dec57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611e0f565b818103600083128015838313168383128216171561021157610211611e0f565b8082018082111561015557610155611e0f565b6000600160ff1b8201611e8057611e80611e0f565b5060000390565b8082018281126000831280158216821582161715611ea757611ea7611e0f565b505092915050565b600082611ecc57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611ee657611ee6611e0f565b50059056fea2646970667358221220ee4a4e088444c048f41b2f08f1bdc39ac0e03eeb2640ded17ae777b2e4735b2564736f6c63430008140033";
        readonly sourceMap: "126:2722:138:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1130:179;;;;;;:::i;:::-;;:::i;:::-;;;2167:25:234;;;2155:2;2140:18;1130:179:138;;;;;;;;2030:450;;;;;;:::i;:::-;;:::i;2486:360::-;;;;;;:::i;:::-;;:::i;:::-;;;;4117:25:234;;;4185:14;;4178:22;4173:2;4158:18;;4151:50;4090:18;2486:360:138;3949:258:234;1656:368:138;;;;;;:::i;:::-;;:::i;1315:335::-;;;;;;:::i;:::-;;:::i;152:786::-;;;;;;:::i;:::-;;:::i;:::-;;;;4869:25:234;;;4925:2;4910:18;;4903:34;;;;4953:18;;;4946:34;4857:2;4842:18;152:786:138;4669:317:234;944:180:138;;;;;;:::i;:::-;;:::i;1130:179::-;1240:6;1265:37;1294:7;1265:28;:37::i;:::-;1258:44;1130:179;-1:-1:-1;;1130:179:138:o;2030:450::-;2258:7;2296:177;2363:7;2388:31;2437:22;2296:49;:177::i;:::-;2277:196;;2030:450;;;;;;:::o;2486:360::-;2666:7;2675:4;2710:129;2769:7;2794:31;2710:41;:129::i;:::-;2691:148;;;;2486:360;;;;;;:::o;1656:368::-;1843:7;1881:136;1959:7;1984:19;1881:60;:136::i;1315:335::-;1426:6;1445:20;1467:12;1483:55;1530:7;1483:46;:55::i;:::-;1444:94;;;;1556:7;1548:65;;;;-1:-1:-1;;;1548:65:138;;5193:2:234;1548:65:138;;;5175:21:234;5232:2;5212:18;;;5205:30;5271:34;5251:18;;;5244:62;-1:-1:-1;;;5322:18:234;;;5315:43;5375:19;;1548:65:138;;;;;;;;;-1:-1:-1;1630:13:138;1315:335;-1:-1:-1;;1315:335:138:o;152:786::-;423:21;458:22;494:20;539:12;619:235;685:14;717:16;751:13;782:21;821:19;619:48;:235::i;:::-;561:293;;-1:-1:-1;561:293:138;;-1:-1:-1;561:293:138;-1:-1:-1;561:293:138;-1:-1:-1;561:293:138;864:67;;;;-1:-1:-1;;;864:67:138;;5607:2:234;864:67:138;;;5589:21:234;5646:2;5626:18;;;5619:30;5685:34;5665:18;;;5658:62;-1:-1:-1;;;5736:18:234;;;5729:45;5791:19;;864:67:138;5405:411:234;864:67:138;529:409;152:786;;;;;;;;;:::o;944:180::-;1054:7;1080:37;1109:7;1080:28;:37::i;18455:1167:124:-;18558:6;19416:199;19434:156;19495:7;:32;;;193:4:122;19489:38:124;;;;:::i;:::-;19549:23;;;;19434:24;;;;;:156;:33;:156::i;:::-;19416:197;:199::i;:::-;19198:203;19216:160;19280:7;:33;;;193:4:122;19274:39:124;;;;:::i;:::-;19335:23;;;;19216:25;;;;;:160;:36;:160::i;19198:203::-;:417;;;;:::i;28733:10660::-;28954:7;29015:21;29081:7;:35;;;29039:7;:27;;;:77;;;;:::i;:::-;29674:28;;;;29614:35;;;;29015:101;;-1:-1:-1;29590:21:124;;29614:125;;29015:101;29614:46;:125::i;:::-;29590:149;;29852:7;:21;;;29877:1;29852:26;29848:77;;29901:13;-1:-1:-1;29894:20:124;;-1:-1:-1;29894:20:124;29848:77;30288:9;30283:9073;871:1;30303;:33;30283:9073;;;30511:41;:13;30529:22;30511:17;:41::i;:::-;30495:57;;30636:12;30879:292;30925:7;:29;;;30972:7;:31;;;31021:7;:28;;;31067:7;:26;;;:47;;;31133:24;:13;:22;:24::i;:::-;31132:25;;;:::i;:::-;30879:28;:292::i;:::-;30680:26;;30798:39;;;30662:509;;;;30738:42;;;30662:509;;;;;;;;;-1:-1:-1;30662:509:124;31185:268;;31437:1;31430:8;;;;;;;;31185:268;31513:20;31573:83;31616:7;:26;;;31573:25;:83::i;:::-;31547:109;-1:-1:-1;31547:109:124;-1:-1:-1;31547:109:124;31670:265;;31919:1;31912:8;;;;;;;;;31670:265;32039:167;32112:7;32141:12;32175:13;32039:51;:167::i;:::-;32018:241;;;32239:5;;;;32018:241;32509:1;32485:7;:21;;;:25;32481:4509;;;32898:25;;:39;;32963:41;;;;33030:38;;;;33094:46;;;;33172:37;;;;;32694:7;;32651:40;;32809:563;;32898:39;;32963:41;;33030:38;;33094:46;33166:43;;193:4:122;33166:43:124;:::i;:::-;33235:25;;:41;;;;33302:48;;;;;32809:63;:563::i;:::-;32782:590;-1:-1:-1;32782:590:124;-1:-1:-1;32782:590:124;33390:289;;33659:1;33652:8;;;;;;;;;;;33390:289;33890:13;33865:6;:20;;;33857:46;33853:3123;;34171:115;34258:6;34171:61;:115::i;:::-;34074:212;;-1:-1:-1;34074:212:124;-1:-1:-1;34074:212:124;34308:200;;34484:1;34477:8;;;;;;;;;;;34308:200;34920:336;34974:6;:28;;;35028:6;:30;;;35084:6;:27;;;35137:6;:25;;;:46;;;35210:24;:13;:22;:24::i;34920:336::-;34692:25;;34824:38;;;34666:590;;;;34757:41;;;34666:590;;;;;;;;;-1:-1:-1;34666:590:124;35278:200;;35454:1;35447:8;;;;;;;;;;;35278:200;35623:25;;:39;;35692:41;;;;35763:38;;;;35831:46;;;;;35913:26;;:38;;;35526:600;;35763:38;35831:46;35907:44;;193:4:122;35907:44:124;:::i;35526:600::-;35499:627;-1:-1:-1;35499:627:124;-1:-1:-1;35499:627:124;36148:200;;36324:1;36317:8;;;;;;;;;;;36148:200;36671:7;:21;;;36646:13;:47;36642:316;;36728:13;36721:20;;;;;;;;;;;36642:316;36927:8;;;;30283:9073;;36642:316;32512:4478;;32481:4509;37266:18;37368:176;37435:7;37460:31;37509:7;:21;;;37368:49;:176::i;:::-;37298:246;-1:-1:-1;37298:246:124;-1:-1:-1;37562:8:124;;;:29;;;193:4:122;37574:10:124;:17;;37562:29;37558:189;;;37731:1;37724:8;;;;;;;;;;37558:189;37807:10;193:4:122;37801:16:124;37788:29;;38119:12;38199:137;:105;38276:7;:27;;;38199:7;:49;;;:76;;:105;;;;:::i;:137::-;38134:46;:35;:12;38155:13;38134:20;:35::i;:46::-;:202;;;;:::i;:::-;38119:217;;38362:1;38354:5;:9;38350:893;;;38527:57;38570:13;38527:34;38535:5;38550:10;38527:22;:34::i;:::-;:42;;:57::i;:::-;38491:93;;:13;:93;:::i;:::-;38455:129;;38350:893;;;38617:1;38609:5;:9;38605:638;;;38710:14;38727:96;38792:13;38727:35;38751:10;38727:35;38736:5;38735:6;:::i;38727:96::-;38710:113;;38854:13;38845:6;:22;38841:344;;;38959:6;38943:13;:22;38927:38;;38841:344;;;39165:1;39158:8;;;;;;;;;;;;38841:344;38620:579;38605:638;;;39223:5;;;;;;38605:638;39328:3;;;;;30340:9016;;;;30283:9073;;;-1:-1:-1;39373:13:124;28733:10660;-1:-1:-1;;;;;28733:10660:124:o;45699:3239::-;45872:29;45903:12;46092:1;46067:7;:21;;;:26;46063:84;;-1:-1:-1;;46117:12:124;;;;46131:4;46109:27;;46063:84;46156:21;46189:7;:21;;;46188:22;;;:::i;:::-;46156:55;;46460:21;46518:316;46574:31;46619:7;:28;;;46667:7;:26;;;:38;;;193:4:122;46661:44:124;;;;:::i;:::-;46719:26;;:42;;;;46775:49;;;;;46518:42;:316::i;:::-;46491:343;-1:-1:-1;46491:343:124;-1:-1:-1;46848:8:124;;;:30;;-1:-1:-1;46860:18:124;;46848:30;46844:78;;;46902:1;46905:5;46894:17;;;;;;;;46844:78;47945:24;47972:34;:13;47992;47972:19;:34::i;:::-;47945:61;;193:4:122;48189:16:124;:23;48185:453;;48286:16;193:4:122;48280:22:124;48256:46;;48354:90;48401:7;:29;;;48354:21;:29;;:90;;;;:::i;:::-;48330:114;;48185:453;;;48618:1;48621:5;48610:17;;;;;;;;;48185:453;48820:7;:12;;;48796:21;:36;48792:94;;;48856:7;:12;;;48870:4;48848:27;;;;;;;;;48792:94;-1:-1:-1;48926:4:124;;-1:-1:-1;;;45699:3239:124;;;;;:::o;25642:2209::-;25822:7;25921:12;26140:274;26182:7;:29;;;26225:7;:31;;;26270:7;:28;;;26312:7;:26;;;:47;;;26374:30;:19;:28;:30::i;26140:274::-;25957:26;;26067:39;;;25943:471;;;;26011:42;;;25943:471;;;;;;;;;-1:-1:-1;25943:471:124;26424:167;;26579:1;26572:8;;;;;26424:167;26600:26;26668:75;26707:7;:26;;;26668:25;:75::i;:::-;26636:107;-1:-1:-1;26636:107:124;-1:-1:-1;26636:107:124;26753:167;;26908:1;26901:8;;;;;;26753:167;27254:7;:28;;;27232:18;:50;27228:89;;27305:1;27298:8;;;;;;27228:89;27566:21;27632:7;:35;;;27590:7;:27;;;:77;;;;:::i;:::-;27566:101;;27724:120;27766:18;27802:7;:28;;;27724:13;:24;;:120;;;;;:::i;:::-;27696:148;;:13;:148;:::i;:::-;27677:167;25642:2209;-1:-1:-1;;;;;;25642:2209:124:o;8765:9443::-;8873:6;8881:4;9683:23;9838:130;:102;9906:7;:33;;;9838:7;:42;;;:67;;:102;;;;:::i;:130::-;9709:114;:90;9766:7;:32;;;9709:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9683:285;;9979:30;10011:12;10027:157;10108:7;:21;;;10147:7;:23;;;10027:63;:157::i;:::-;9978:206;;;;10199:7;10194:160;;-1:-1:-1;10334:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;10194:160::-;10603:1;10584:16;:20;10580:7595;;;10620:25;10656:16;10620:53;;10861:21;10923:401;11004:7;:21;;;11047:7;:23;;;11092:7;:20;;;11134:7;:28;;;11190:7;:19;;;193:4:122;11184:25:124;;;;:::i;:::-;11231:7;:23;;;11276:7;:30;;;10923:59;:401::i;:::-;10896:428;-1:-1:-1;10896:428:124;-1:-1:-1;10896:428:124;11338:176;;-1:-1:-1;11490:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;11338:176::-;11691:17;11674:13;:34;11670:2891;;11982:21;12048:389;12148:22;12196:7;:20;;;12242:17;12291:7;:19;;;193:4:122;12285:25:124;;;;:::i;:::-;12336:7;:23;;;12385:7;:30;;;12048:74;:389::i;:::-;12021:416;-1:-1:-1;12021:416:124;-1:-1:-1;12743:8:124;;:84;;;;;12795:7;:32;;;12775:17;:52;12743:84;12718:335;;;-1:-1:-1;12876:1:124;;12879:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12718:335::-;12986:7;12981:72;;-1:-1:-1;13025:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12981:72::-;13080:24;:13;:22;:24::i;:::-;13079:25;;;:::i;:::-;13071:40;13106:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;;8765:9443:124:o;11670:2891::-;13796:1;13769:7;:23;;;:28;13765:782;;13855:95;13881:7;:28;;;13856:22;:53;;;;:::i;13855:95::-;13854:96;;;:::i;:::-;13821:181;13976:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;13765:782::-;14407:28;;;;14383:21;;14382:94;;14383:52;;;:::i;10580:7595::-;14686:1;14667:16;:20;14663:3512;;;14703:25;14739:17;14740:16;14739:17;:::i;:::-;14703:54;;14874:21;14936:307;15017:22;15061:7;:20;;;15109:7;:19;;;193:4:122;15103:25:124;;;;:::i;:::-;15150:7;:23;;;15195:7;:30;;;14936:59;:307::i;:::-;14909:334;-1:-1:-1;14909:334:124;-1:-1:-1;14909:334:124;15257:64;;-1:-1:-1;15297:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;15257:64::-;15498:17;15481:13;:34;15477:2688;;15790:21;15856:387;15954:22;16002:7;:20;;;16048:17;16097:7;:19;;;193:4:122;16091:25:124;;;;:::i;:::-;16142:7;:23;;;16191:7;:30;;;15856:72;:387::i;:::-;15829:414;-1:-1:-1;15829:414:124;-1:-1:-1;16549:8:124;;:84;;;;;16601:7;:32;;;16581:17;:52;16549:84;16524:335;;;-1:-1:-1;16682:1:124;;16685:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16524:335::-;16792:7;16787:72;;-1:-1:-1;16831:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16787:72::-;16885:24;:13;:22;:24::i;15477:2688::-;17243:23;17313:335;17402:22;17450:7;:20;;;17502:7;:19;;;193:4:122;17496:25:124;;;;:::i;:::-;17547:7;:23;;;17596:7;:30;;;17313:63;:335::i;:::-;17284:364;-1:-1:-1;17284:364:124;-1:-1:-1;17284:364:124;17666:72;;-1:-1:-1;17710:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;17666:72::-;17929:177;17972:122;18045:7;:23;;;17993:13;17973:17;:33;;;;:::i;17972:122::-;17930:164;;:15;:164;:::i;14663:3512::-;-1:-1:-1;18193:1:124;;18196:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;1846:3557::-;2121:21;2156:22;2192:20;2226:4;2365:19;2388:1;2365:24;2361:117;;-1:-1:-1;2413:14:124;;-1:-1:-1;2429:16:124;;-1:-1:-1;2447:13:124;;-1:-1:-1;2462:4:124;2405:62;;2361:117;2647:21;2699:19;2671:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2647:71;;2749:32;:21;:30;:32::i;:::-;2732:14;:49;2728:103;;;2805:1;2808;2811;2814:5;2797:23;;;;;;;;;;;2728:103;2864:14;2840:39;;3454:1;3434:16;:21;3430:497;;3567:112;:84;:13;3617:16;3636:14;3567:41;:84::i;:112::-;3549:130;;3430:497;;;3805:111;:83;3853:17;3854:16;3853:17;:::i;:::-;3805:13;;3873:14;3805:39;:83::i;:111::-;3804:112;;;:::i;:::-;3786:130;;3430:497;4629:33;4664:12;4680:143;4761:14;4793:16;4680:63;:143::i;:::-;4628:195;;;;4838:7;4833:62;;4869:1;4872;4875;4878:5;4861:23;;;;;;;;;;;;;4833:62;4904:30;4980:141;5061:13;5092:15;4980:63;:141::i;:::-;4944:177;-1:-1:-1;4944:177:124;-1:-1:-1;4944:177:124;5131:62;;5167:1;5170;5173;5176:5;5159:23;;;;;;;;;;;;;;5131:62;5217:109;:13;5255:22;5291:25;5217:24;:109::i;:::-;5202:124;-1:-1:-1;5391:4:124;;-1:-1:-1;;;;;1846:3557:124;;;;;;;;;;;:::o;6228:341::-;6331:7;6351:20;6373:12;6389:56;6428:7;6389:25;:56::i;:::-;6350:95;;;;6460:7;6455:79;;6490:33;;-1:-1:-1;;;6490:33:124;;;;;;;;;;;2284:748:122;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:125;2001:204::o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:122;14987:104;-1:-1:-1;14987:104:122:o;7264:1173:124:-;7371:7;7380:4;7757:19;7801:20;7823:12;7839:65;7883:7;7839:26;:65::i;:::-;7800:104;;;;7923:7;7918:64;;-1:-1:-1;7958:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;;;7264:1173:124:o;7918:64::-;8158:39;:7;:28;;;:37;:39::i;:::-;8109:30;8131:7;8109:21;:30::i;:::-;8077:13;8026:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7995:202;;7786:422;;8339:1;8324:12;:16;8320:64;;;-1:-1:-1;8364:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;8320:64::-;8410:12;8425:4;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;43668:1269::-;44295:28;;;;43872:4;;44295:50;;44330:14;44295:34;:50::i;:::-;44185:27;;;;44163:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;44856:28:124;;;;44791:139;;44902:14;44792:34;1037:3;193:4:122;44792:34:124;:::i;:::-;44791:47;:139;:47;:139::i;:::-;44679:27;;;;44659:48;;:13;;:19;:48::i;:::-;:271;;;43668:1269;-1:-1:-1;;;;43668:1269:124:o;17581:2070:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18644:10;18656:12;18672:72;18736:1;18739:4;18672:63;:72::i;:::-;18643:101;;;;18760:7;18755:56;;18791:1;18794:5;18783:17;;;;;;;;18755:56;18820:9;18832:22;18838:2;18842:1;18845;18848;18851:2;18832:5;:22::i;:::-;18820:34;-1:-1:-1;18864:11:126;18878:37;18889:21;18908:1;18889:14;:2;18898:4;18889:8;:14::i;:::-;:18;;:21::i;:::-;18878:1;;18912:2;18878:10;:37::i;:::-;18864:51;;18933:3;18929:1;:7;18925:55;;;18960:1;18963:5;18952:17;;;;;;;;;;18925:55;19050:7;;;193:4:122;19081:15:126;;19077:295;;19195:28;19208:14;193:4:122;19220:1:126;19208:11;:14::i;:::-;19195:8;;:12;:28::i;:::-;19184:39;;19077:295;;;19335:26;19348:12;193:4:122;19358:1:126;19348:9;:12::i;19335:26::-;19324:37;;19077:295;19529:1;19518:8;:12;19514:60;;;19554:1;19557:5;19546:17;;;;;;;;;;;19514:60;19615:12;;;;-1:-1:-1;19629:4:126;;-1:-1:-1;;;;;17581:2070:126;;;;;;;;;;;:::o;41084:1866:124:-;41235:7;41244:4;41526:1;41491:7;:31;;;:36;41487:84;;-1:-1:-1;41551:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;41084:1866:124:o;41487:84::-;41622:19;41644:49;41666:7;:26;;;41644:21;:49::i;:::-;41622:71;;41836:11;41850:167;41901:7;:27;;;41972:7;:35;;;41942:7;:27;;;:65;;;;:::i;:::-;41850:28;;;;;:167;:37;:167::i;:::-;41836:181;;42047:1;42031:12;:17;42027:411;;42092:3;42076:12;42068:27;42064:304;;;42147:28;;;42027:411;;42064:304;-1:-1:-1;42344:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42027:411::-;42413:13;42414:12;42413:13;:::i;:::-;42398:29;;;;:::i;:::-;;;42027:411;42678:31;;;;42601:29;;;;:119;;42653:3;;42601:38;:119::i;:::-;42595:125;;42803:3;42771:7;:29;;;:35;42767:83;;;-1:-1:-1;42830:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42767:83::-;42923:3;42891:7;:29;;;:35;42928:4;42883:50;;;;;;41084:1866;;;:::o;51344:5799::-;51560:7;51569:4;51658:20;51707:1;51692:11;:16;51688:670;;51755:26;;:39;;;:78;;51821:11;;51755:78;:::i;:::-;51724:109;;51688:670;;;51864:18;51893:12;51894:11;51893:12;:::i;:::-;51937:26;;:39;;;51864:42;;-1:-1:-1;51924:52:124;;51920:428;;;52067:26;;:39;;;:76;;;;-1:-1:-1;51920:428:124;;;52324:1;52327:5;52316:17;;;;;;;;51920:428;51850:508;51688:670;52747:26;;:40;;52805:42;;;;;52618:30;;;;52666:195;;52747:40;52666:63;:195::i;:::-;52617:244;;;;52876:7;52871:56;;52907:1;52910:5;52899:17;;;;;;;;;52871:56;53419:26;;:38;;;;53350:39;;;;;52936:18;;53237:274;;53289:208;;53350:129;;:39;:43;:129::i;:::-;53289:31;;:39;:208::i;:::-;53237:28;;;;;:34;:274::i;:::-;53173:26;;:38;;;;53019:83;;;;;52957:265;;53019:193;;:132;;53128:22;53019:108;:132::i;:193::-;52957:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;52936:575;;53581:11;53595:185;53645:125;53700:56;53717:7;:26;;;:38;;;53700:12;:16;;:56;;;;:::i;:::-;53645:31;;:37;:125::i;:::-;53595:28;;;;;:36;:185::i;:::-;53581:199;;53807:3;53794:10;:16;53790:64;;;53834:1;53837:5;53826:17;;;;;;;;;;;53790:64;53901:3;53887:17;;;;54144:9;54156:294;54188:22;54224:7;:26;;;:39;;;54283:7;:26;;;:38;;;193:4:122;54277:44:124;;;;:::i;:::-;54335:26;;:42;;;;54391:49;;;;;54156:18;:294::i;:::-;54144:306;;54460:13;54476:84;54512:7;:26;;;:38;;;193:4:122;54506:44:124;;;;:::i;:::-;54476:12;;:16;:84::i;:::-;54460:100;;54578:5;54574:1;:9;54570:201;;;54751:1;54754:5;54743:17;;;;;;;;;;;;;54570:201;54877:26;;:49;;;;54940:42;;;;;54812:9;;;;54849:143;;54812:9;;54849:14;:143::i;:::-;54841:151;;193:4:122;55006:5:124;:12;55002:584;;55217:26;;:38;;;55118:169;;55145:128;;55211:44;;193:4:122;55211:44:124;:::i;:::-;55145:26;;:38;;;;:44;:128::i;55118:169::-;55110:177;;55002:584;;;55505:26;;:38;;;55404:171;;55431:130;;55499:44;;193:4:122;55499:44:124;:::i;:::-;55431:26;;:38;;;;:46;:130::i;55404:171::-;55396:179;;55002:584;55738:26;;:42;;;55686:104;;:10;;55719:5;;55686:19;:104::i;:::-;55673:117;;55850:10;193:4:122;55844:16:124;55840:398;;;55923:10;193:4:122;55917:16:124;55904:29;;55840:398;;;56219:1;56222:4;56211:16;;;;;;;;;;;;;55840:398;56412:1;56377:7;:31;;;:36;56373:728;;56499:29;;;;56443:31;;;;56435:107;;:46;:107::i;:::-;56429:113;;193:4:122;56560:3:124;:10;56556:168;;56700:1;56703:5;56692:17;;;;;;;;;;;;;56556:168;193:4:122;56771:9:124;;;;;56821:23;:10;56771:9;56821:18;:23::i;:::-;56808:36;;56373:728;;;56888:202;56950:126;57025:7;:29;;;56959:7;:31;;;56958:32;;;:::i;56950:126::-;56924:152;;193:4:122;56924:152:124;:::i;:::-;56888:10;;:18;:202::i;:::-;56875:215;;56373:728;-1:-1:-1;57119:10:124;;-1:-1:-1;57131:4:124;;-1:-1:-1;;;;;;51344:5799:124;;;;;;;:::o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;3462:114:122:-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;:::-;14607:1;;:9;:28::i;:::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;21014:352::-;21155:7;21351:8;:1;21357;21351:5;:8::i;:::-;21309:39;21322:21;21341:1;21322:14;:2;21333;21322:10;:14::i;:21::-;21309:1;;21345:2;21309:12;:39::i;:::-;:50;;;;:::i;3811:844:122:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;20158:343:126:-;20297:7;20486:8;:1;20492;20486:5;:8::i;:::-;20448:35;20459:19;20476:1;20459:12;:2;20468;20459:8;:12::i;:19::-;20448:1;;20480:2;20448:10;:35::i;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:122;9286:41;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;14:351:234:-;85:2;79:9;127:6;115:19;;164:18;149:34;;185:22;;;146:62;143:185;;;250:10;245:3;241:20;238:1;231:31;285:4;282:1;275:15;313:4;310:1;303:15;143:185;344:2;337:22;14:351;:::o;370:347::-;437:2;431:9;479:6;467:19;;516:18;501:34;;537:22;;;498:62;495:185;;;602:10;597:3;593:20;590:1;583:31;637:4;634:1;627:15;665:4;662:1;655:15;722:1040;787:5;835:6;823:9;818:3;814:19;810:32;807:52;;;855:1;852;845:12;807:52;877:21;;:::i;:::-;868:30;;934:9;921:23;914:5;907:38;1005:2;994:9;990:18;977:32;972:2;965:5;961:14;954:56;1070:2;1059:9;1055:18;1042:32;1037:2;1030:5;1026:14;1019:56;1135:2;1124:9;1120:18;1107:32;1102:2;1095:5;1091:14;1084:56;1201:3;1190:9;1186:19;1173:33;1167:3;1160:5;1156:15;1149:58;1268:3;1257:9;1253:19;1240:33;1234:3;1227:5;1223:15;1216:58;1335:3;1324:9;1320:19;1307:33;1301:3;1294:5;1290:15;1283:58;1402:3;1391:9;1387:19;1374:33;1368:3;1361:5;1357:15;1350:58;1427:3;1490:2;1479:9;1475:18;1462:32;1457:2;1450:5;1446:14;1439:56;;1514:3;1577:2;1566:9;1562:18;1549:32;1544:2;1537:5;1533:14;1526:56;;1601:3;1664:2;1653:9;1649:18;1636:32;1631:2;1624:5;1620:14;1613:56;;1688:3;1751:2;1740:9;1736:18;1723:32;1718:2;1711:5;1707:14;1700:56;;722:1040;;;;:::o;1767:251::-;1863:6;1916:3;1904:9;1895:7;1891:23;1887:33;1884:53;;;1933:1;1930;1923:12;1884:53;1956:56;2004:7;1993:9;1956:56;:::i;2203:808::-;2276:5;2324:6;2312:9;2307:3;2303:19;2299:32;2296:52;;;2344:1;2341;2334:12;2296:52;2366:17;;:::i;:::-;2357:26;;2406:52;2454:3;2443:9;2406:52;:::i;:::-;2399:5;2392:67;2521:3;2510:9;2506:19;2493:33;2486:4;2479:5;2475:16;2468:59;2589:3;2578:9;2574:19;2561:33;2554:4;2547:5;2543:16;2536:59;2657:3;2646:9;2642:19;2629:33;2622:4;2615:5;2611:16;2604:59;2725:3;2714:9;2710:19;2697:33;2690:4;2683:5;2679:16;2672:59;2793:3;2782:9;2778:19;2765:33;2758:4;2751:5;2747:16;2740:59;2861:3;2850:9;2846:19;2833:33;2826:4;2819:5;2815:16;2808:59;2929:3;2918:9;2914:19;2901:33;2894:4;2887:5;2883:16;2876:59;2999:3;2988:9;2984:19;2971:33;2962:6;2955:5;2951:18;2944:61;2203:808;;;;:::o;3016:405::-;3138:6;3146;3154;3207:3;3195:9;3186:7;3182:23;3178:33;3175:53;;;3224:1;3221;3214:12;3175:53;3247:64;3303:7;3292:9;3247:64;:::i;:::-;3237:74;3358:3;3343:19;;3330:33;;-1:-1:-1;3410:3:234;3395:19;;;3382:33;;3016:405;-1:-1:-1;;;3016:405:234:o;3608:336::-;3721:6;3729;3782:3;3770:9;3761:7;3757:23;3753:33;3750:53;;;3799:1;3796;3789:12;3750:53;3822:64;3878:7;3867:9;3822:64;:::i;:::-;3812:74;3933:3;3918:19;;;;3905:33;;-1:-1:-1;;;3608:336:234:o;4212:452::-;4305:6;4313;4321;4329;4337;4390:3;4378:9;4369:7;4365:23;4361:33;4358:53;;;4407:1;4404;4397:12;4358:53;-1:-1:-1;;4430:23:234;;;4500:2;4485:18;;4472:32;;-1:-1:-1;4551:2:234;4536:18;;4523:32;;4602:2;4587:18;;4574:32;;-1:-1:-1;4653:3:234;4638:19;4625:33;;-1:-1:-1;4212:452:234;-1:-1:-1;4212:452:234:o;5821:127::-;5882:10;5877:3;5873:20;5870:1;5863:31;5913:4;5910:1;5903:15;5937:4;5934:1;5927:15;5953:128;6020:9;;;6041:11;;;6038:37;;;6055:18;;:::i;6086:200::-;6152:9;;;6125:4;6180:9;;6208:10;;6220:12;;;6204:29;6243:12;;;6235:21;;6201:56;6198:82;;;6260:18;;:::i;6291:125::-;6356:9;;;6377:10;;;6374:36;;;6390:18;;:::i;6421:136::-;6456:3;-1:-1:-1;;;6477:22:234;;6474:48;;6502:18;;:::i;:::-;-1:-1:-1;6542:1:234;6538:13;;6421:136::o;6562:216::-;6626:9;;;6654:11;;;6601:3;6684:9;;6712:10;;6708:19;;6737:10;;6729:19;;6705:44;6702:70;;;6752:18;;:::i;:::-;6702:70;;6562:216;;;;:::o;6915:290::-;6954:1;6980;6970:132;;7024:10;7019:3;7015:20;7012:1;7005:31;7059:4;7056:1;7049:15;7087:4;7084:1;7077:15;6970:132;-1:-1:-1;;;7118:18:234;;-1:-1:-1;;7138:13:234;;7114:38;7111:64;;;7155:18;;:::i;:::-;-1:-1:-1;7189:10:234;;6915:290::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01";
        readonly "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c";
        readonly "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b";
        readonly "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81";
        readonly "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4";
        readonly "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3";
        readonly "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxShareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleShareProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleWithdrawalSharesRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShareReservesDeltaSafe\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetCurveTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetFlatTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"calculateUpdateLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLPMath.sol\":\"MockLPMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"contracts/test/MockLPMath.sol\":{\"keccak256\":\"0x2e0f452d6eaf9c33253ba86e84b17bade51fff6c673686aa2c33c8696dfd0367\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ed9d41745b9d3bc02471f8e1a8668b74d3920de8e788459cb4871b7f02602a31\",\"dweb:/ipfs/QmQPzLHEFAf4esjdzKUqnV1T6vAp6BLkW459o8jwivPKHR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPresentValue";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.DistributeExcessIdleParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "struct LPMath.PresentValueParams";
                        readonly name: "presentValueParams";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "shareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "int256";
                            readonly name: "shareAdjustment";
                            readonly type: "int256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "bondReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "vaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "initialVaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumShareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumTransactionAmount";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "timeStretch";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longAverageTimeRemaining";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortAverageTimeRemaining";
                            readonly type: "uint256";
                        }];
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "startingPresentValue";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "activeLpTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "idle";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "netCurveTrade";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "originalShareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalBondReserves";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_originalEffectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxShareReservesDelta";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateDistributeExcessIdleShareProceeds";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.DistributeExcessIdleParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "struct LPMath.PresentValueParams";
                        readonly name: "presentValueParams";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "shareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "int256";
                            readonly name: "shareAdjustment";
                            readonly type: "int256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "bondReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "vaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "initialVaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumShareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumTransactionAmount";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "timeStretch";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longAverageTimeRemaining";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortAverageTimeRemaining";
                            readonly type: "uint256";
                        }];
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "startingPresentValue";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "activeLpTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "idle";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "netCurveTrade";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "originalShareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalBondReserves";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareReservesDelta";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.DistributeExcessIdleParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "struct LPMath.PresentValueParams";
                        readonly name: "presentValueParams";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "shareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "int256";
                            readonly name: "shareAdjustment";
                            readonly type: "int256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "bondReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "vaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "initialVaultSharePrice";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumShareReserves";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "minimumTransactionAmount";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "timeStretch";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "longAverageTimeRemaining";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortsOutstanding";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "shortAverageTimeRemaining";
                            readonly type: "uint256";
                        }];
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "startingPresentValue";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "activeLpTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "idle";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "netCurveTrade";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "originalShareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "originalBondReserves";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_originalEffectiveShareReserves";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMaxShareReservesDeltaSafe";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.PresentValueParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longAverageTimeRemaining";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortAverageTimeRemaining";
                        readonly type: "uint256";
                    }];
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateNetCurveTrade";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.PresentValueParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longAverageTimeRemaining";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortAverageTimeRemaining";
                        readonly type: "uint256";
                    }];
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateNetFlatTrade";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct LPMath.PresentValueParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longAverageTimeRemaining";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortAverageTimeRemaining";
                        readonly type: "uint256";
                    }];
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculatePresentValue";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "_shareAdjustment";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minimumShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "_shareReservesDelta";
                    readonly type: "int256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateUpdateLiquidity";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockLPMath.sol": "MockLPMath";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed";
                readonly urls: readonly ["bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a", "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1";
                readonly urls: readonly ["bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9", "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockLPMath.sol": {
                readonly keccak256: "0x2e0f452d6eaf9c33253ba86e84b17bade51fff6c673686aa2c33c8696dfd0367";
                readonly urls: readonly ["bzz-raw://ed9d41745b9d3bc02471f8e1a8668b74d3920de8e788459cb4871b7f02602a31", "dweb:/ipfs/QmQPzLHEFAf4esjdzKUqnV1T6vAp6BLkW459o8jwivPKHR"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockLPMath.sol";
        readonly id: 26132;
        readonly exportedSymbols: {
            readonly LPMath: readonly [21624];
            readonly MockLPMath: readonly [26131];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2810:138";
        readonly nodes: readonly [{
            readonly id: 25976;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:138";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 25978;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:138";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "contracts/src/libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26132;
            readonly sourceUnit: 21625;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25977;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21624;
                    readonly src: "73:6:138";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26131;
            readonly nodeType: "ContractDefinition";
            readonly src: "126:2722:138";
            readonly nodes: readonly [{
                readonly id: 26021;
                readonly nodeType: "FunctionDefinition";
                readonly src: "152:786:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26020;
                    readonly nodeType: "Block";
                    readonly src: "529:409:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25998];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25998;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "544:7:138";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26020;
                            readonly src: "539:12:138";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25997;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "539:4:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25999;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "539:12:138";
                    }, {
                        readonly expression: {
                            readonly id: 26013;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 26000;
                                    readonly name: "shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25991;
                                    readonly src: "562:13:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26001;
                                    readonly name: "shareAdjustment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25993;
                                    readonly src: "577:15:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 26002;
                                    readonly name: "bondReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25995;
                                    readonly src: "594:12:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26003;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25998;
                                    readonly src: "608:7:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 26004;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "561:55:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,int256,uint256,bool)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26007;
                                    readonly name: "_shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25980;
                                    readonly src: "685:14:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26008;
                                    readonly name: "_shareAdjustment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25982;
                                    readonly src: "717:16:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 26009;
                                    readonly name: "_bondReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25984;
                                    readonly src: "751:13:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26010;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25986;
                                    readonly src: "782:21:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26011;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25988;
                                    readonly src: "821:19:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 26005;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21624;
                                        readonly src: "619:6:138";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 26006;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "639:28:138";
                                    readonly memberName: "calculateUpdateLiquiditySafe";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 19896;
                                    readonly src: "619:48:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$";
                                        readonly typeString: "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256,bool)";
                                    };
                                };
                                readonly id: 26012;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "619:235:138";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,int256,uint256,bool)";
                                };
                            };
                            readonly src: "561:293:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26014;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "561:293:138";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26016;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25998;
                                readonly src: "872:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b4c504d6174683a2063616c63756c6174655570646174654c697175696469747953616665206661696c6564";
                                readonly id: 26017;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "881:49:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a260cd0f079848025f7f6e1b33f9fb2847d1ba104c4f2118aead307845a2156c";
                                    readonly typeString: "literal_string \"MockLPMath: calculateUpdateLiquiditySafe failed\"";
                                };
                                readonly value: "MockLPMath: calculateUpdateLiquiditySafe failed";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_a260cd0f079848025f7f6e1b33f9fb2847d1ba104c4f2118aead307845a2156c";
                                    readonly typeString: "literal_string \"MockLPMath: calculateUpdateLiquiditySafe failed\"";
                                }];
                                readonly id: 26015;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "864:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26018;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "864:67:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26019;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "864:67:138";
                    }];
                };
                readonly functionSelector: "b500f3cb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateUpdateLiquidity";
                readonly nameLocation: "161:24:138";
                readonly parameters: {
                    readonly id: 25989;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25980;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "203:14:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "195:22:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25979;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "195:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25982;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "234:16:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "227:23:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25981;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "227:6:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25984;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "268:13:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "260:21:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25983;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "260:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25986;
                        readonly mutability: "mutable";
                        readonly name: "_minimumShareReserves";
                        readonly nameLocation: "299:21:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "291:29:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25985;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "291:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25988;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "337:19:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "330:26:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25987;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "330:6:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "185:177:138";
                };
                readonly returnParameters: {
                    readonly id: 25996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25991;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "431:13:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "423:21:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25990;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "423:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25993;
                        readonly mutability: "mutable";
                        readonly name: "shareAdjustment";
                        readonly nameLocation: "465:15:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "458:22:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25992;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "458:6:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25995;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "502:12:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26021;
                        readonly src: "494:20:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25994;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "494:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "409:115:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26035;
                readonly nodeType: "FunctionDefinition";
                readonly src: "944:180:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26034;
                    readonly nodeType: "Block";
                    readonly src: "1063:61:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26031;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26024;
                                readonly src: "1109:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26029;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "1080:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26030;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1087:21:138";
                                readonly memberName: "calculatePresentValue";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 19950;
                                readonly src: "1080:28:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$19921_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256)";
                                };
                            };
                            readonly id: 26032;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1080:37:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26028;
                        readonly id: 26033;
                        readonly nodeType: "Return";
                        readonly src: "1073:44:138";
                    }];
                };
                readonly functionSelector: "c00b11d3";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculatePresentValue";
                readonly nameLocation: "953:21:138";
                readonly parameters: {
                    readonly id: 26025;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26024;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1017:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26035;
                        readonly src: "984:40:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26023;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26022;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["984:6:138", "991:18:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 19921;
                                readonly src: "984:25:138";
                            };
                            readonly referencedDeclaration: 19921;
                            readonly src: "984:25:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "974:56:138";
                };
                readonly returnParameters: {
                    readonly id: 26028;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26027;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26035;
                        readonly src: "1054:7:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26026;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1054:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1053:9:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26049;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1130:179:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26048;
                    readonly nodeType: "Block";
                    readonly src: "1248:61:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26045;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26038;
                                readonly src: "1294:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26043;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "1265:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26044;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1272:21:138";
                                readonly memberName: "calculateNetFlatTrade";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20389;
                                readonly src: "1265:28:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$19921_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256)";
                                };
                            };
                            readonly id: 26046;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1265:37:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 26042;
                        readonly id: 26047;
                        readonly nodeType: "Return";
                        readonly src: "1258:44:138";
                    }];
                };
                readonly functionSelector: "32c5dec4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetFlatTrade";
                readonly nameLocation: "1139:21:138";
                readonly parameters: {
                    readonly id: 26039;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26038;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1203:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26049;
                        readonly src: "1170:40:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26037;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26036;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1170:6:138", "1177:18:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 19921;
                                readonly src: "1170:25:138";
                            };
                            readonly referencedDeclaration: 19921;
                            readonly src: "1170:25:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1160:56:138";
                };
                readonly returnParameters: {
                    readonly id: 26042;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26041;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26049;
                        readonly src: "1240:6:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26040;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1240:6:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1239:8:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26074;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1315:335:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26073;
                    readonly nodeType: "Block";
                    readonly src: "1434:216:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26058, 26060];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26058;
                            readonly mutability: "mutable";
                            readonly name: "netCurveTrade";
                            readonly nameLocation: "1452:13:138";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26073;
                            readonly src: "1445:20:138";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 26057;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1445:6:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26060;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1472:7:138";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26073;
                            readonly src: "1467:12:138";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26059;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1467:4:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26065;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26063;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26052;
                                readonly src: "1530:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26061;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "1483:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26062;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1503:26:138";
                                readonly memberName: "calculateNetCurveTradeSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20351;
                                readonly src: "1483:46:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$19921_memory_ptr_$returns$_t_int256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256,bool)";
                                };
                            };
                            readonly id: 26064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1483:55:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_int256_$_t_bool_$";
                                readonly typeString: "tuple(int256,bool)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1444:94:138";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26067;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26060;
                                readonly src: "1556:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b4c504d6174683a2063616c63756c6174654e65744375727665547261646553616665206661696c6564";
                                readonly id: 26068;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1565:47:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_2d6b234109070984815d54c0ad886a5e811642efea043271318956686e5476d9";
                                    readonly typeString: "literal_string \"MockLPMath: calculateNetCurveTradeSafe failed\"";
                                };
                                readonly value: "MockLPMath: calculateNetCurveTradeSafe failed";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_2d6b234109070984815d54c0ad886a5e811642efea043271318956686e5476d9";
                                    readonly typeString: "literal_string \"MockLPMath: calculateNetCurveTradeSafe failed\"";
                                }];
                                readonly id: 26066;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1548:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26069;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1548:65:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26070;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1548:65:138";
                    }, {
                        readonly expression: {
                            readonly id: 26071;
                            readonly name: "netCurveTrade";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26058;
                            readonly src: "1630:13:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 26056;
                        readonly id: 26072;
                        readonly nodeType: "Return";
                        readonly src: "1623:20:138";
                    }];
                };
                readonly functionSelector: "a4fc6f81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetCurveTrade";
                readonly nameLocation: "1324:22:138";
                readonly parameters: {
                    readonly id: 26053;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26052;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1389:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26074;
                        readonly src: "1356:40:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26051;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26050;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1356:6:138", "1363:18:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 19921;
                                readonly src: "1356:25:138";
                            };
                            readonly referencedDeclaration: 19921;
                            readonly src: "1356:25:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$19921_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1346:56:138";
                };
                readonly returnParameters: {
                    readonly id: 26056;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26055;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26074;
                        readonly src: "1426:6:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26054;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1426:6:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1425:8:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26091;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1656:368:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26090;
                    readonly nodeType: "Block";
                    readonly src: "1852:172:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26086;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26077;
                                readonly src: "1959:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26087;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26079;
                                readonly src: "1984:19:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26084;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "1881:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26085;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1888:53:138";
                                readonly memberName: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20621;
                                readonly src: "1881:60:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20409_memory_ptr_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26088;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1881:136:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26083;
                        readonly id: 26089;
                        readonly nodeType: "Return";
                        readonly src: "1862:155:138";
                    }];
                };
                readonly functionSelector: "a0d1643c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                readonly nameLocation: "1665:53:138";
                readonly parameters: {
                    readonly id: 26080;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26077;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1769:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26091;
                        readonly src: "1728:48:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26076;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26075;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["1728:6:138", "1735:26:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20409;
                                readonly src: "1728:33:138";
                            };
                            readonly referencedDeclaration: 20409;
                            readonly src: "1728:33:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26079;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "1794:19:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26091;
                        readonly src: "1786:27:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26078;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1786:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1718:101:138";
                };
                readonly returnParameters: {
                    readonly id: 26083;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26082;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26091;
                        readonly src: "1843:7:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26081;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1843:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1842:9:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26111;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2030:450:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26110;
                    readonly nodeType: "Block";
                    readonly src: "2267:213:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26105;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26094;
                                readonly src: "2363:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26106;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26096;
                                readonly src: "2388:31:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26107;
                                readonly name: "_maxShareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26098;
                                readonly src: "2437:22:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26103;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "2296:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26104;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2303:42:138";
                                readonly memberName: "calculateDistributeExcessIdleShareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21013;
                                readonly src: "2296:49:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20409_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26108;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2296:177:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26102;
                        readonly id: 26109;
                        readonly nodeType: "Return";
                        readonly src: "2277:196:138";
                    }];
                };
                readonly functionSelector: "3f9ccc01";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleShareProceeds";
                readonly nameLocation: "2039:42:138";
                readonly parameters: {
                    readonly id: 26099;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26094;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "2132:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26111;
                        readonly src: "2091:48:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26093;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26092;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["2091:6:138", "2098:26:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20409;
                                readonly src: "2091:33:138";
                            };
                            readonly referencedDeclaration: 20409;
                            readonly src: "2091:33:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26096;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2157:31:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26111;
                        readonly src: "2149:39:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26095;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2149:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26098;
                        readonly mutability: "mutable";
                        readonly name: "_maxShareReservesDelta";
                        readonly nameLocation: "2206:22:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26111;
                        readonly src: "2198:30:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26097;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2198:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2081:153:138";
                };
                readonly returnParameters: {
                    readonly id: 26102;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26101;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26111;
                        readonly src: "2258:7:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26100;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2258:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2257:9:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26130;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2486:360:138";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26129;
                    readonly nodeType: "Block";
                    readonly src: "2681:165:138";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26125;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26114;
                                readonly src: "2769:7:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26126;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26116;
                                readonly src: "2794:31:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26123;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21624;
                                    readonly src: "2710:6:138";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$21624_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26124;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2717:34:138";
                                readonly memberName: "calculateMaxShareReservesDeltaSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21282;
                                readonly src: "2710:41:138";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20409_memory_ptr_$_t_uint256_$returns$_t_uint256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256,bool)";
                                };
                            };
                            readonly id: 26127;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2710:129:138";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 26122;
                        readonly id: 26128;
                        readonly nodeType: "Return";
                        readonly src: "2691:148:138";
                    }];
                };
                readonly functionSelector: "9e5fc16b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShareReservesDeltaSafe";
                readonly nameLocation: "2495:34:138";
                readonly parameters: {
                    readonly id: 26117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26114;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "2580:7:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26130;
                        readonly src: "2539:48:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26113;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26112;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["2539:6:138", "2546:26:138"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20409;
                                readonly src: "2539:33:138";
                            };
                            readonly referencedDeclaration: 20409;
                            readonly src: "2539:33:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$20409_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26116;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2605:31:138";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26130;
                        readonly src: "2597:39:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26115;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2597:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2529:113:138";
                };
                readonly returnParameters: {
                    readonly id: 26122;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26119;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26130;
                        readonly src: "2666:7:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2666:7:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26121;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26130;
                        readonly src: "2675:4:138";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 26120;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2675:4:138";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2665:15:138";
                };
                readonly scope: 26131;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockLPMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [26131];
            readonly name: "MockLPMath";
            readonly nameLocation: "135:10:138";
            readonly scope: 26132;
            readonly usedErrors: readonly [10371, 10404, 10413, 10469];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 138;
};
//# sourceMappingURL=MockLPMath.d.ts.map