export declare const MockLPMath: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "calculateDistributeExcessIdleShareProceeds";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly components: readonly [{
                readonly name: "presentValueParams";
                readonly type: "tuple";
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly components: readonly [{
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                    readonly internalType: "int256";
                }, {
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "startingPresentValue";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "idle";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "netCurveTrade";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalBondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_originalEffectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxShareReservesDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly components: readonly [{
                readonly name: "presentValueParams";
                readonly type: "tuple";
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly components: readonly [{
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                    readonly internalType: "int256";
                }, {
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "startingPresentValue";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "idle";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "netCurveTrade";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalBondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_shareReservesDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateMaxShareReservesDeltaSafe";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.DistributeExcessIdleParams";
            readonly components: readonly [{
                readonly name: "presentValueParams";
                readonly type: "tuple";
                readonly internalType: "struct LPMath.PresentValueParams";
                readonly components: readonly [{
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shareAdjustment";
                    readonly type: "int256";
                    readonly internalType: "int256";
                }, {
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "initialVaultSharePrice";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumShareReserves";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minimumTransactionAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "timeStretch";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "longAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortsOutstanding";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "shortAverageTimeRemaining";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "startingPresentValue";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "activeLpTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "idle";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "netCurveTrade";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "originalShareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "originalBondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_originalEffectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateNetCurveTrade";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateNetFlatTrade";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculatePresentValue";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct LPMath.PresentValueParams";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortAverageTimeRemaining";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateUpdateLiquidity";
        readonly inputs: readonly [{
            readonly name: "_shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareAdjustment";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minimumShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareReservesDelta";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shareAdjustment";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "ExpInvalidExponent";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientLiquidity";
        readonly inputs: readonly [{
            readonly name: "reason";
            readonly type: "uint8";
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidPresentValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LnInvalidInput";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UpdateLiquidityFailed";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50611f33806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611cb5565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611d5a565b61015b565b6100ce6100c9366004611d91565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611d91565b61018b565b610095610104366004611cb5565b610197565b61011c610117366004611dbe565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611cb5565b61023b565b600061015582610246565b92915050565b60006101688484846102b9565b90505b9392505050565b60008061017f848461061d565b915091505b9250929050565b600061016b838361072c565b60008060006101a5846107f9565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022a8888888888610b28565b925092509250955095509592505050565b600061015582610b6f565b600061027e610279836101200151670de0b6b3a76400006102679190611e0f565b60608501516101008601519190610b9f565b610bc5565b6102af610279846101600151670de0b6b3a764000061029d9190611e0f565b60608601516101408701519190610bf3565b6101559190611e22565b600080846060015185604001516102d09190611e42565b602086015160608701519192506000916102ea9184610bf3565b90508560a0015160000361030157915061016b9050565b60005b6004811015610613576103178286610c11565b9150600061034e8860c001518960e001518a61010001518b6000015160a0015161034088610bc5565b61034990611e55565b610c26565b8b51604081019290925260208201929092529190915290508061037857600094505050505061016b565b60006103878960000151610b6f565b9050610394898287610d3e565b156103a0575050610613565b60008960a00151131561050457885180516020820151604083015160a084015160e0909401518d946000946103fa94909390929091906103e890670de0b6b3a7640000611e0f565b87516060810151608090910151610daa565b945090508361041357600097505050505050505061016b565b808260a00151106105015761042782610ea3565b90965093508361044157600097505050505050505061016b565b6104668260c001518360e00151846101000151856000015160a001516103408b610bc5565b8551604081019290925260208201929092529190915293508361049357600097505050505050505061016b565b815180516020820151604083015160a0909301518e5160e001516104c59491906103e890670de0b6b3a7640000611e0f565b94509050836104de57600097505050505050505061016b565b8a60a0015181116104f8578597505050505050505061016b565b50505050610304565b50505b60006105158a8a8c60a00151610f79565b9350905082158061052e5750670de0b6b3a76400008110155b15610542576000965050505050505061016b565b80670de0b6b3a7640000039050600061056f6102798c604001518d602001516112d690919063ffffffff16565b61057c610279858a6112eb565b6105869190611e22565b905060008113156105b6576105a58761059f8385611300565b90611300565b6105af9087611e42565b9550610604565b60008112156105fb5760006105d08861059f858186611e55565b9050868110156105e45780870396506105f5565b60009850505050505050505061016b565b50610604565b50505050610613565b84600101945050505050610304565b5095945050505050565b60008060008460a001511261063a57505060808201516001610184565b60008460a0015161064a90611e55565b9050600061068685876101000151886000015160e00151670de0b6b3a76400006106749190611e0f565b89516060810151608090910151611315565b93509050821580610695575080155b156106a857600080935093505050610184565b60006106b483836113c1565b9050670de0b6b3a764000081116106f05780670de0b6b3a76400000394506106e98760c00151866112eb90919063ffffffff16565b94506106ff565b60008094509450505050610184565b866080015185111561071e578660800151600194509450505050610184565b506001925050509250929050565b6000806107548460c001518560e00151866101000151876000015160a0015161034088610bc5565b8751604081019290925260208201929092529190915290508061077b576000915050610155565b600061078a85600001516113d6565b925090508161079e57600092505050610155565b846020015181106107b457600092505050610155565b6000856060015186604001516107ca9190611e42565b90506107e582876020015183610bf39092919063ffffffff16565b6107ef9082611e0f565b9695505050505050565b600080600061081e6102798561016001518661014001516112eb90919063ffffffff16565b61083e6102798661012001518761010001516112d690919063ffffffff16565b6108489190611e22565b905060008061085f86600001518760200151611463565b915091508061087657506000958695509350505050565b60008313156109c657600083905060006108c4886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006108b59190611e0f565b8d606001518e60800151610daa565b93509050826108dd575060009788975095505050505050565b81811061097b576000610917858a60400151858c60e00151670de0b6b3a76400006109089190611e0f565b8d606001518e6080015161149f565b945090508315801561092c57508860c0015183105b156109435750600098600198509650505050505050565b8361095957506000988998509650505050505050565b61096281610bc5565b61096b90611e55565b9960019950975050505050505050565b60008860200151126109b25761099a8860a00151856102799190611e0f565b6109a390611e55565b98600198509650505050505050565b60a0880151885161099a9161027991611e0f565b6000831215610b195760006109da84611e55565b90506000610a0e8489604001518a60e00151670de0b6b3a76400006109ff9190611e0f565b8b606001518c60800151611315565b9350905082610a27575060009788975095505050505050565b818110610aac576000610a61858a60400151858c60e00151670de0b6b3a7640000610a529190611e0f565b8d606001518e60800151611562565b9450905083158015610a7657508860c0015183105b15610a8d5750600098600198509650505050505050565b83610aa357506000988998509650505050505050565b61096b81610bc5565b6000610ade858a604001518b60e00151670de0b6b3a7640000610acf9190611e0f565b8c606001518d60800151611639565b9450905083610af857506000988998509650505050505050565b61096b610b0f8a60600151848661059f9190611e0f565b6102799083611e42565b50600095600195509350505050565b600080600080610b3b8989898989610c26565b9296509094509250905080610b6357604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b6000806000610b7d846113d6565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610bb657600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610bef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610c0a57600080fd5b5091020490565b6000818311610c20578261016b565b50919050565b60008060008084600003610c4557508792508691508590506001610d32565b600085610c518b610bc5565b610c5b9190611e71565b9050610c6687610bc5565b811215610c8157600080600080945094509450945050610d32565b80945060008912610ca157610c9a610279868b8d610bf3565b9350610cc4565b610cb8610279610cb08b611e55565b87908d610b9f565b610cc190611e55565b93505b600080610cd18c8c611463565b9150915080610cf0576000806000809650965096509650505050610d32565b6000610cfc8888611463565b9250905081610d1c57600080600080975097509750975050505050610d32565b610d278b8285610bf3565b955060019450505050505b95509550955095915050565b6020830151600090610d5090846113c1565b6040850151610d60908490611300565b1015801561016857506020840151610d909084610d89633b9aca00670de0b6b3a7640000611e42565b9190610bf3565b6040850151610da09084906113c1565b1115949350505050565b6000806000881215610dcc57610dbf88611e55565b610dc99087611e42565b95505b6000610dd88a8a6116ef565b90506000610de9828a898989611710565b90506000610e0c610e0489610dfe898d6112d6565b9061173f565b889088610b9f565b905080821015610e255760008094509450505050610e97565b808203670de0b6b3a76400008110610e5a57610e53610e4c670de0b6b3a76400008b611300565b829061173f565b9050610e72565b610e6f610e4c670de0b6b3a76400008b6113c1565b90505b8a811015610e8a576000809550955050505050610e97565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113610ebd57506000928392509050565b6000610ecc8460000151610246565b90506000610ef8856040015186606001518760400151610eec9190611e42565b60208801519190610b9f565b905060008212610f1f5780821015610f1257819003610f35565b5060009485945092505050565b610f2882611e55565b610f329082611e42565b90505b60e085015160c0860151610f4a918390610b9f565b9050808560c001511015610f65575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412610f9d57855160400151610f96908590611e42565b9050610fd8565b6000610fa885611e55565b875160400151909150811015610fc8578651604001518190039150610fd6565b6000809350935050506112ce565b505b855180516020909101516000918291610ff19190611463565b915091508061100957600080945094505050506112ce565b875160e081015160409091015160009161103e916110329161102b919061173f565b8a906112eb565b6101008b0151906113c1565b895160e08101516080909101516110699161105d91610dfe90886112eb565b8b5160600151906113c1565b6110739190611e42565b905060006110ab61109f6110988c6000015160e001518861173f90919063ffffffff16565b8b906112d6565b6101008c015190611300565b9050808210156110c6576000809650965050505050506112ce565b80820391506000611108858c60000151604001518d6000015160e00151670de0b6b3a76400006110f69190611e0f565b8e5160608101516080909101516117aa565b905060006111328c6000015160e00151670de0b6b3a764000061112b9190611e0f565b889061173f565b90508082101561114f5760008098509850505050505050506112ce565b8b5160808101516060909101519183039161116b918391610b9f565b9050670de0b6b3a764000081106111af578b5160e001516111a890610e4c9061119c90670de0b6b3a7640000611e0f565b8e5160e00151906113c1565b90506111de565b8b5160e001516111db90610e4c906111cf90670de0b6b3a7640000611e0f565b8e5160e0015190611300565b90505b8b51606001516111f19085908390610b9f565b935083670de0b6b3a764000011156112155783670de0b6b3a7640000039350611229565b6000600198509850505050505050506112ce565b60008c60e001511261128b5760c08c015160e08d0151611248916113c1565b9250670de0b6b3a7640000831061126c5760008098509850505050505050506112ce565b670de0b6b3a7640000929092039161128484846112eb565b93506112c0565b6112bd6112a48d60c001518e60e0015161059f90611e55565b6112b690670de0b6b3a7640000611e42565b85906112eb565b93505b509196506001955050505050505b935093915050565b600061016b8383670de0b6b3a7640000610b9f565b600061016b8383670de0b6b3a7640000610bf3565b600061016b83670de0b6b3a764000084610bf3565b600080600061132788888888886117aa565b90506000611352670de0b6b3a76400006113418888611300565b61134b9190611e42565b83906113c1565b9050670de0b6b3a7640000811061137f57611378610e4c670de0b6b3a7640000896113c1565b9050611397565b611394610e4c670de0b6b3a764000089611300565b90505b808810156113ad576000809350935050506113b7565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610b9f565b60008060008060006113e7866107f9565b91509150806113fe57506000958695509350505050565b61140b8660a00151610bc5565b61141487610246565b836114228960000151610bc5565b61142c9190611e71565b6114369190611e71565b6114409190611e22565b9250505060008112156114595750600093849350915050565b9360019350915050565b60008060008361147286610bc5565b61147c9190611e22565b90506000811215611494576000809250925050610184565b946001945092505050565b60008060006114b189898888886117aa565b90506114c186610dfe898b611e42565b9750878110156114d8576000809250925050611557565b8781036114e6818688610b9f565b9050670de0b6b3a764000081106115135761150c610e4c670de0b6b3a7640000896113c1565b905061152b565b611528610e4c670de0b6b3a764000089611300565b90505b61153581866113c1565b9050808a101561154d57600080935093505050611557565b8903925060019150505b965096945050505050565b600080600061157489898888886117aa565b90508688101561158b576000809250925050611557565b968690039661159a888761173f565b9750878110156115b1576000809250925050611557565b8781036115bf818688610b9f565b9050670de0b6b3a764000081106115ec576115e5610e4c670de0b6b3a7640000896113c1565b9050611604565b611601610e4c670de0b6b3a764000089611300565b90505b61160e81866113c1565b90508981101561162657600080935093505050611557565b9890980398600198509650505050505050565b600080600061164b8888888888611710565b90506000611676670de0b6b3a764000061166588886113c1565b61166f9190611e42565b8390611300565b9050670de0b6b3a764000081106116a35761169c610e4c670de0b6b3a764000089611300565b90506116bb565b6116b8610e4c670de0b6b3a7640000896113c1565b90505b6116c58186611300565b9050888110156116dd576000809350935050506113b7565b97909703976001975095505050505050565b6000806116fc8484611463565b9092509050806102115761021160016117cf565b600061171c858561173f565b61173561172d86610dfe868b6112eb565b859085610bf3565b6107ef9190611e42565b6000816000036117585750670de0b6b3a7640000610155565b8260000361176857506000610155565b600061177383610bc5565b9050600061178861178386610bc5565b6117ea565b905081810261179f670de0b6b3a764000082611e99565b90506107ef81611a19565b60006117b6858561173f565b6117356117c786610dfe868b6112d6565b859085610b9f565b80604051633c06d78b60e11b81526004016102089190611ed5565b600080821361180c5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906118989084901c610bc5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611a3457506000919050565b680755bf798b4a1bf1e58212611a5d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906107ef74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610bc5565b604051610180810167ffffffffffffffff81118282101715611be057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611be057634e487b7160e01b600052604160045260246000fd5b60006101808284031215611c2b57600080fd5b611c33611bae565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611cc857600080fd5b61016b8383611c18565b60006102808284031215611ce557600080fd5b611ced611be6565b9050611cf98383611c18565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611d7057600080fd5b611d7a8585611cd2565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611da557600080fd5b611daf8484611cd2565b94610280939093013593505050565b600080600080600060a08688031215611dd657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611df9565b818103600083128015838313168383128216171561021157610211611df9565b8082018082111561015557610155611df9565b6000600160ff1b8201611e6a57611e6a611df9565b5060000390565b8082018281126000831280158216821582161715611e9157611e91611df9565b505092915050565b600082611eb657634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611ed057611ed0611df9565b500590565b6020810160048310611ef757634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220462883967a6a89b23a574529c875531d5019ebeae5ae627ef4522103e2f982d964736f6c63430008140033";
        readonly sourceMap: "126:2567:144:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a0d1643c1161005b578063a0d1643c146100e3578063a4fc6f81146100f6578063b500f3cb14610109578063c00b11d31461013757600080fd5b806332c5dec4146100825780633f9ccc01146100a85780639e5fc16b146100bb575b600080fd5b610095610090366004611cb5565b61014a565b6040519081526020015b60405180910390f35b6100956100b6366004611d5a565b61015b565b6100ce6100c9366004611d91565b610172565b6040805192835290151560208301520161009f565b6100956100f1366004611d91565b61018b565b610095610104366004611cb5565b610197565b61011c610117366004611dbe565b610218565b6040805193845260208401929092529082015260600161009f565b610095610145366004611cb5565b61023b565b600061015582610246565b92915050565b60006101688484846102b9565b90505b9392505050565b60008061017f848461061d565b915091505b9250929050565b600061016b838361072c565b60008060006101a5846107f9565b91509150806102115760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022a8888888888610b28565b925092509250955095509592505050565b600061015582610b6f565b600061027e610279836101200151670de0b6b3a76400006102679190611e0f565b60608501516101008601519190610b9f565b610bc5565b6102af610279846101600151670de0b6b3a764000061029d9190611e0f565b60608601516101408701519190610bf3565b6101559190611e22565b600080846060015185604001516102d09190611e42565b602086015160608701519192506000916102ea9184610bf3565b90508560a0015160000361030157915061016b9050565b60005b6004811015610613576103178286610c11565b9150600061034e8860c001518960e001518a61010001518b6000015160a0015161034088610bc5565b61034990611e55565b610c26565b8b51604081019290925260208201929092529190915290508061037857600094505050505061016b565b60006103878960000151610b6f565b9050610394898287610d3e565b156103a0575050610613565b60008960a00151131561050457885180516020820151604083015160a084015160e0909401518d946000946103fa94909390929091906103e890670de0b6b3a7640000611e0f565b87516060810151608090910151610daa565b945090508361041357600097505050505050505061016b565b808260a00151106105015761042782610ea3565b90965093508361044157600097505050505050505061016b565b6104668260c001518360e00151846101000151856000015160a001516103408b610bc5565b8551604081019290925260208201929092529190915293508361049357600097505050505050505061016b565b815180516020820151604083015160a0909301518e5160e001516104c59491906103e890670de0b6b3a7640000611e0f565b94509050836104de57600097505050505050505061016b565b8a60a0015181116104f8578597505050505050505061016b565b50505050610304565b50505b60006105158a8a8c60a00151610f79565b9350905082158061052e5750670de0b6b3a76400008110155b15610542576000965050505050505061016b565b80670de0b6b3a7640000039050600061056f6102798c604001518d602001516112d690919063ffffffff16565b61057c610279858a6112eb565b6105869190611e22565b905060008113156105b6576105a58761059f8385611300565b90611300565b6105af9087611e42565b9550610604565b60008112156105fb5760006105d08861059f858186611e55565b9050868110156105e45780870396506105f5565b60009850505050505050505061016b565b50610604565b50505050610613565b84600101945050505050610304565b5095945050505050565b60008060008460a001511261063a57505060808201516001610184565b60008460a0015161064a90611e55565b9050600061068685876101000151886000015160e00151670de0b6b3a76400006106749190611e0f565b89516060810151608090910151611315565b93509050821580610695575080155b156106a857600080935093505050610184565b60006106b483836113c1565b9050670de0b6b3a764000081116106f05780670de0b6b3a76400000394506106e98760c00151866112eb90919063ffffffff16565b94506106ff565b60008094509450505050610184565b866080015185111561071e578660800151600194509450505050610184565b506001925050509250929050565b6000806107548460c001518560e00151866101000151876000015160a0015161034088610bc5565b8751604081019290925260208201929092529190915290508061077b576000915050610155565b600061078a85600001516113d6565b925090508161079e57600092505050610155565b846020015181106107b457600092505050610155565b6000856060015186604001516107ca9190611e42565b90506107e582876020015183610bf39092919063ffffffff16565b6107ef9082611e0f565b9695505050505050565b600080600061081e6102798561016001518661014001516112eb90919063ffffffff16565b61083e6102798661012001518761010001516112d690919063ffffffff16565b6108489190611e22565b905060008061085f86600001518760200151611463565b915091508061087657506000958695509350505050565b60008313156109c657600083905060006108c4886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006108b59190611e0f565b8d606001518e60800151610daa565b93509050826108dd575060009788975095505050505050565b81811061097b576000610917858a60400151858c60e00151670de0b6b3a76400006109089190611e0f565b8d606001518e6080015161149f565b945090508315801561092c57508860c0015183105b156109435750600098600198509650505050505050565b8361095957506000988998509650505050505050565b61096281610bc5565b61096b90611e55565b9960019950975050505050505050565b60008860200151126109b25761099a8860a00151856102799190611e0f565b6109a390611e55565b98600198509650505050505050565b60a0880151885161099a9161027991611e0f565b6000831215610b195760006109da84611e55565b90506000610a0e8489604001518a60e00151670de0b6b3a76400006109ff9190611e0f565b8b606001518c60800151611315565b9350905082610a27575060009788975095505050505050565b818110610aac576000610a61858a60400151858c60e00151670de0b6b3a7640000610a529190611e0f565b8d606001518e60800151611562565b9450905083158015610a7657508860c0015183105b15610a8d5750600098600198509650505050505050565b83610aa357506000988998509650505050505050565b61096b81610bc5565b6000610ade858a604001518b60e00151670de0b6b3a7640000610acf9190611e0f565b8c606001518d60800151611639565b9450905083610af857506000988998509650505050505050565b61096b610b0f8a60600151848661059f9190611e0f565b6102799083611e42565b50600095600195509350505050565b600080600080610b3b8989898989610c26565b9296509094509250905080610b6357604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b6000806000610b7d846113d6565b915091508061021157604051635516328b60e11b815260040160405180910390fd5b6000826000190484118302158202610bb657600080fd5b50910281810615159190040190565b60006001600160ff1b03821115610bef5760405163396ea70160e11b815260040160405180910390fd5b5090565b6000826000190484118302158202610c0a57600080fd5b5091020490565b6000818311610c20578261016b565b50919050565b60008060008084600003610c4557508792508691508590506001610d32565b600085610c518b610bc5565b610c5b9190611e71565b9050610c6687610bc5565b811215610c8157600080600080945094509450945050610d32565b80945060008912610ca157610c9a610279868b8d610bf3565b9350610cc4565b610cb8610279610cb08b611e55565b87908d610b9f565b610cc190611e55565b93505b600080610cd18c8c611463565b9150915080610cf0576000806000809650965096509650505050610d32565b6000610cfc8888611463565b9250905081610d1c57600080600080975097509750975050505050610d32565b610d278b8285610bf3565b955060019450505050505b95509550955095915050565b6020830151600090610d5090846113c1565b6040850151610d60908490611300565b1015801561016857506020840151610d909084610d89633b9aca00670de0b6b3a7640000611e42565b9190610bf3565b6040850151610da09084906113c1565b1115949350505050565b6000806000881215610dcc57610dbf88611e55565b610dc99087611e42565b95505b6000610dd88a8a6116ef565b90506000610de9828a898989611710565b90506000610e0c610e0489610dfe898d6112d6565b9061173f565b889088610b9f565b905080821015610e255760008094509450505050610e97565b808203670de0b6b3a76400008110610e5a57610e53610e4c670de0b6b3a76400008b611300565b829061173f565b9050610e72565b610e6f610e4c670de0b6b3a76400008b6113c1565b90505b8a811015610e8a576000809550955050505050610e97565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113610ebd57506000928392509050565b6000610ecc8460000151610246565b90506000610ef8856040015186606001518760400151610eec9190611e42565b60208801519190610b9f565b905060008212610f1f5780821015610f1257819003610f35565b5060009485945092505050565b610f2882611e55565b610f329082611e42565b90505b60e085015160c0860151610f4a918390610b9f565b9050808560c001511015610f65575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412610f9d57855160400151610f96908590611e42565b9050610fd8565b6000610fa885611e55565b875160400151909150811015610fc8578651604001518190039150610fd6565b6000809350935050506112ce565b505b855180516020909101516000918291610ff19190611463565b915091508061100957600080945094505050506112ce565b875160e081015160409091015160009161103e916110329161102b919061173f565b8a906112eb565b6101008b0151906113c1565b895160e08101516080909101516110699161105d91610dfe90886112eb565b8b5160600151906113c1565b6110739190611e42565b905060006110ab61109f6110988c6000015160e001518861173f90919063ffffffff16565b8b906112d6565b6101008c015190611300565b9050808210156110c6576000809650965050505050506112ce565b80820391506000611108858c60000151604001518d6000015160e00151670de0b6b3a76400006110f69190611e0f565b8e5160608101516080909101516117aa565b905060006111328c6000015160e00151670de0b6b3a764000061112b9190611e0f565b889061173f565b90508082101561114f5760008098509850505050505050506112ce565b8b5160808101516060909101519183039161116b918391610b9f565b9050670de0b6b3a764000081106111af578b5160e001516111a890610e4c9061119c90670de0b6b3a7640000611e0f565b8e5160e00151906113c1565b90506111de565b8b5160e001516111db90610e4c906111cf90670de0b6b3a7640000611e0f565b8e5160e0015190611300565b90505b8b51606001516111f19085908390610b9f565b935083670de0b6b3a764000011156112155783670de0b6b3a7640000039350611229565b6000600198509850505050505050506112ce565b60008c60e001511261128b5760c08c015160e08d0151611248916113c1565b9250670de0b6b3a7640000831061126c5760008098509850505050505050506112ce565b670de0b6b3a7640000929092039161128484846112eb565b93506112c0565b6112bd6112a48d60c001518e60e0015161059f90611e55565b6112b690670de0b6b3a7640000611e42565b85906112eb565b93505b509196506001955050505050505b935093915050565b600061016b8383670de0b6b3a7640000610b9f565b600061016b8383670de0b6b3a7640000610bf3565b600061016b83670de0b6b3a764000084610bf3565b600080600061132788888888886117aa565b90506000611352670de0b6b3a76400006113418888611300565b61134b9190611e42565b83906113c1565b9050670de0b6b3a7640000811061137f57611378610e4c670de0b6b3a7640000896113c1565b9050611397565b611394610e4c670de0b6b3a764000089611300565b90505b808810156113ad576000809350935050506113b7565b8703925060019150505b9550959350505050565b600061016b83670de0b6b3a764000084610b9f565b60008060008060006113e7866107f9565b91509150806113fe57506000958695509350505050565b61140b8660a00151610bc5565b61141487610246565b836114228960000151610bc5565b61142c9190611e71565b6114369190611e71565b6114409190611e22565b9250505060008112156114595750600093849350915050565b9360019350915050565b60008060008361147286610bc5565b61147c9190611e22565b90506000811215611494576000809250925050610184565b946001945092505050565b60008060006114b189898888886117aa565b90506114c186610dfe898b611e42565b9750878110156114d8576000809250925050611557565b8781036114e6818688610b9f565b9050670de0b6b3a764000081106115135761150c610e4c670de0b6b3a7640000896113c1565b905061152b565b611528610e4c670de0b6b3a764000089611300565b90505b61153581866113c1565b9050808a101561154d57600080935093505050611557565b8903925060019150505b965096945050505050565b600080600061157489898888886117aa565b90508688101561158b576000809250925050611557565b968690039661159a888761173f565b9750878110156115b1576000809250925050611557565b8781036115bf818688610b9f565b9050670de0b6b3a764000081106115ec576115e5610e4c670de0b6b3a7640000896113c1565b9050611604565b611601610e4c670de0b6b3a764000089611300565b90505b61160e81866113c1565b90508981101561162657600080935093505050611557565b9890980398600198509650505050505050565b600080600061164b8888888888611710565b90506000611676670de0b6b3a764000061166588886113c1565b61166f9190611e42565b8390611300565b9050670de0b6b3a764000081106116a35761169c610e4c670de0b6b3a764000089611300565b90506116bb565b6116b8610e4c670de0b6b3a7640000896113c1565b90505b6116c58186611300565b9050888110156116dd576000809350935050506113b7565b97909703976001975095505050505050565b6000806116fc8484611463565b9092509050806102115761021160016117cf565b600061171c858561173f565b61173561172d86610dfe868b6112eb565b859085610bf3565b6107ef9190611e42565b6000816000036117585750670de0b6b3a7640000610155565b8260000361176857506000610155565b600061177383610bc5565b9050600061178861178386610bc5565b6117ea565b905081810261179f670de0b6b3a764000082611e99565b90506107ef81611a19565b60006117b6858561173f565b6117356117c786610dfe868b6112d6565b859085610b9f565b80604051633c06d78b60e11b81526004016102089190611ed5565b600080821361180c5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906118989084901c610bc5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213611a3457506000919050565b680755bf798b4a1bf1e58212611a5d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906107ef74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610bc5565b604051610180810167ffffffffffffffff81118282101715611be057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611be057634e487b7160e01b600052604160045260246000fd5b60006101808284031215611c2b57600080fd5b611c33611bae565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60006101808284031215611cc857600080fd5b61016b8383611c18565b60006102808284031215611ce557600080fd5b611ced611be6565b9050611cf98383611c18565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b60008060006102c08486031215611d7057600080fd5b611d7a8585611cd2565b9561028085013595506102a0909401359392505050565b6000806102a08385031215611da557600080fd5b611daf8484611cd2565b94610280939093013593505050565b600080600080600060a08688031215611dd657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561015557610155611df9565b818103600083128015838313168383128216171561021157610211611df9565b8082018082111561015557610155611df9565b6000600160ff1b8201611e6a57611e6a611df9565b5060000390565b8082018281126000831280158216821582161715611e9157611e91611df9565b505092915050565b600082611eb657634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615611ed057611ed0611df9565b500590565b6020810160048310611ef757634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220462883967a6a89b23a574529c875531d5019ebeae5ae627ef4522103e2f982d964736f6c63430008140033";
        readonly sourceMap: "126:2567:144:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;975:179;;;;;;:::i;:::-;;:::i;:::-;;;2163:25:239;;;2151:2;2136:18;975:179:144;;;;;;;;1875:450;;;;;;:::i;:::-;;:::i;2331:360::-;;;;;;:::i;:::-;;:::i;:::-;;;;4117:25:239;;;4185:14;;4178:22;4173:2;4158:18;;4151:50;4090:18;2331:360:144;3949:258:239;1501:368:144;;;;;;:::i;:::-;;:::i;1160:335::-;;;;;;:::i;:::-;;:::i;152:631::-;;;;;;:::i;:::-;;:::i;:::-;;;;4869:25:239;;;4925:2;4910:18;;4903:34;;;;4953:18;;;4946:34;4857:2;4842:18;152:631:144;4669:317:239;789:180:144;;;;;;:::i;:::-;;:::i;975:179::-;1085:6;1110:37;1139:7;1110:28;:37::i;:::-;1103:44;975:179;-1:-1:-1;;975:179:144:o;1875:450::-;2103:7;2141:177;2208:7;2233:31;2282:22;2141:49;:177::i;:::-;2122:196;;1875:450;;;;;;:::o;2331:360::-;2511:7;2520:4;2555:129;2614:7;2639:31;2555:41;:129::i;:::-;2536:148;;;;2331:360;;;;;;:::o;1501:368::-;1688:7;1726:136;1804:7;1829:19;1726:60;:136::i;1160:335::-;1271:6;1290:20;1312:12;1328:55;1375:7;1328:46;:55::i;:::-;1289:94;;;;1401:7;1393:65;;;;-1:-1:-1;;;1393:65:144;;5193:2:239;1393:65:144;;;5175:21:239;5232:2;5212:18;;;5205:30;5271:34;5251:18;;;5244:62;-1:-1:-1;;;5322:18:239;;;5315:43;5375:19;;1393:65:144;;;;;;;;;-1:-1:-1;1475:13:144;1160:335;-1:-1:-1;;1160:335:144:o;152:631::-;423:21;458:22;494:20;558:218;607:14;639:16;673:13;704:21;743:19;558:31;:218::i;:::-;539:237;;;;;;152:631;;;;;;;;;:::o;789:180::-;899:7;925:37;954:7;925:28;:37::i;20009:1167:130:-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:128;21043:38:130;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;:::-;20970:197;:199::i;:::-;20752:203;20770:160;20834:7;:33;;;193:4:128;20828:39:130;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;20752:203::-;:417;;;;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:130;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:130;;-1:-1:-1;31448:20:130;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;:::-;32735:25;;;:::i;:::-;32482:28;:292::i;:::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:130;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:128;34403:43:130;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:130;-1:-1:-1;34019:590:130;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:130;-1:-1:-1;35311:212:130;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:130;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:128;37144:44:130;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:130;-1:-1:-1;36736:627:130;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:130;-1:-1:-1;38799:8:130;;;:29;;;193:4:128;38811:10:130;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:128;39038:16:130;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:::-;:42;;:57::i;:::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:130;30287:10343;-1:-1:-1;;;;;30287:10343:130:o;46936:3239::-;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:130;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:128;47898:44:130;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:130;-1:-1:-1;48085:8:130;;;:30;;-1:-1:-1;48097:18:130;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:128;49426:16:130;:23;49422:453;;49523:16;193:4:128;49517:22:130;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:130;;-1:-1:-1;;;46936:3239:130;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;27694:274::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:130;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:130;-1:-1:-1;28190:107:130;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;:::-;29231:167;27196:2209;-1:-1:-1;;;;;;27196:2209:130:o;10319:9443::-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;10319:9443:130:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:128;12738:25:130;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:130;-1:-1:-1;12450:428:130;12892:176;;-1:-1:-1;13044:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;10319:9443:130:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:128;13839:25:130;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:130;-1:-1:-1;14297:8:130;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:130;;14433:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;;10319:9443:130:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;:::-;15375:181;15530:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:128;16657:25:130;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:130;-1:-1:-1;16463:334:130;16811:64;;-1:-1:-1;16851:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;10319:9443:130:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:128;17645:25:130;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:130;-1:-1:-1;18103:8:130;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:130;;18239:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:128;19050:25:130;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:130;-1:-1:-1;18838:364:130;19220:72;;-1:-1:-1;19264:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:130;;19750:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;10319:9443:130:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:130;;-1:-1:-1;2191:307:130;-1:-1:-1;2191:307:130;-1:-1:-1;2191:307:130;2508:81;;2543:35;;-1:-1:-1;;;2543:35:130;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:130;;;;;;;;;;;2284:748:128;2398:9;2663:1;-1:-1:-1;;2646:19:128;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:128;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;2001:204:131:-;2053:8;-1:-1:-1;;;;;2079:1:131;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:131;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:131;2001:204::o;898:556:128:-;1014:9;1279:1;-1:-1:-1;;1262:19:128;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:128;;1411:27;;898:556::o;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:128;14987:104;-1:-1:-1;14987:104:128:o;3400:3557:130:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:130;;-1:-1:-1;3983:16:130;;-1:-1:-1;4001:13:130;;-1:-1:-1;4016:4:130;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:130;-1:-1:-1;6498:177:130;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:130;;-1:-1:-1;;;;;3400:3557:130;;;;;;;;;;;:::o;44905:1269::-;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:130;;;;46028:139;;46139:14;46029:34;1037:3;193:4:128;46029:34:130;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;;44905:1269;-1:-1:-1;;;;44905:1269:130:o;17581:1971:132:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:132;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:::-;:18;;:21::i;:::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:128;18982:15:132;;18978:295;;19096:28;19109:14;193:4:128;19121:1:132;19109:11;:14::i;:::-;19096:8;;:12;:28::i;:::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:128;19259:1:132;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:132;;-1:-1:-1;;;;17581:1971:132;;;;;;;;;;;:::o;42321:1866:130:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;42321:1866:130:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;;;42321:1866:130:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;;;42321:1866:130:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:130;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:130;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:128;55514:44:130;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:128;55743:44:130;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:128;56243:5:130;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:128;56448:44:130;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:128;56736:44:130;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:128;57081:16:130;57077:398;;;57160:10;193:4:128;57154:16:130;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:128;57797:3:130;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:128;58008:9:130;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:128;58161:152:130;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:130;;-1:-1:-1;58368:4:130;;-1:-1:-1;;;;;;52581:5799:130;;;;;;;:::o;3190:114:128:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;15892:1050:132:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:132;16337:28;193:4:128;16345:13:132;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:128;16379:8:132;:15;16375:293;;16490:26;16503:12;193:4:128;16513:1:132;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:128;16654:1:132;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:132;;-1:-1:-1;;15892:1050:132;;;;;;;;;:::o;3462:114:128:-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;8818:1173:130:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:130;;;;-1:-1:-1;8818:1173:130;-1:-1:-1;;;;8818:1173:130:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:130;;;;-1:-1:-1;8818:1173:130;-1:-1:-1;;8818:1173:130:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:130;-1:-1:-1;;8818:1173:130:o;7273:398:129:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:129;-1:-1:-1;;;7273:398:129:o;11709:1515:132:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:132;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:128;12549:2:132;:9;12545:263;;12648:20;12655:12;193:4:128;12665:1:132;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:128;12794:1:132;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:132;;-1:-1:-1;;11709:1515:132;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:128;6666:2:132;:9;6662:261;;6764:20;6771:12;193:4:128;6781:1:132;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:128;6909:1:132;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:132;-1:-1:-1;;;;;;;5576:1765:132:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:132;14607:28;193:4:128;14617:11:132;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;:::-;14607:1;;:9;:28::i;:::-;14587:48;;193:4:128;14649:9:132;:16;14645:300;;14765:29;14779:14;193:4:128;14791:1:132;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:128;14931:1:132;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:132;-1:-1:-1;;;;;;13859:1409:132:o;6050:574:129:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:129;-1:-1:-1;6249:139:129;6398:220;;6426:181;6482:111;6426:38;:181::i;20915:352:132:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3811:844:128:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:128;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:128;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:128;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;20059:343:132:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;317:182:127:-;485:6;451:41;;-1:-1:-1;;;451:41:127;;;;;;;;:::i;8508:3846:128:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:128;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:128;9286:41;-1:-1:-1;9283:1:128;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:128;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:128;10385:5;;10384:13;;-1:-1:-1;;10383:50:128;10453:5;;10452:13;;;-1:-1:-1;;10451:50:128;10519:5;;;-1:-1:-1;;10519:46:128;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:128:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:128;:26;5126:40;;-1:-1:-1;5165:1:128;;4907:3302;-1:-1:-1;4907:3302:128:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:128;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:128;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:128;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:128;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:128;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:128;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:128;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:128;7584:10;;;;-1:-1:-1;6063:75:128;;-1:-1:-1;6458:50:128;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;14:347:239:-;81:2;75:9;123:6;111:19;;160:18;145:34;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:351::-;437:2;431:9;479:6;467:19;;516:18;501:34;;537:22;;;498:62;495:185;;;602:10;597:3;593:20;590:1;583:31;637:4;634:1;627:15;665:4;662:1;655:15;722:1036;787:5;835:6;823:9;818:3;814:19;810:32;807:52;;;855:1;852;845:12;807:52;877:17;;:::i;:::-;868:26;;930:9;917:23;910:5;903:38;1001:2;990:9;986:18;973:32;968:2;961:5;957:14;950:56;1066:2;1055:9;1051:18;1038:32;1033:2;1026:5;1022:14;1015:56;1131:2;1120:9;1116:18;1103:32;1098:2;1091:5;1087:14;1080:56;1197:3;1186:9;1182:19;1169:33;1163:3;1156:5;1152:15;1145:58;1264:3;1253:9;1249:19;1236:33;1230:3;1223:5;1219:15;1212:58;1331:3;1320:9;1316:19;1303:33;1297:3;1290:5;1286:15;1279:58;1398:3;1387:9;1383:19;1370:33;1364:3;1357:5;1353:15;1346:58;1423:3;1486:2;1475:9;1471:18;1458:32;1453:2;1446:5;1442:14;1435:56;;1510:3;1573:2;1562:9;1558:18;1545:32;1540:2;1533:5;1529:14;1522:56;;1597:3;1660:2;1649:9;1645:18;1632:32;1627:2;1620:5;1616:14;1609:56;;1684:3;1747:2;1736:9;1732:18;1719:32;1714:2;1707:5;1703:14;1696:56;;722:1036;;;;:::o;1763:251::-;1859:6;1912:3;1900:9;1891:7;1887:23;1883:33;1880:53;;;1929:1;1926;1919:12;1880:53;1952:56;2000:7;1989:9;1952:56;:::i;2199:812::-;2272:5;2320:6;2308:9;2303:3;2299:19;2295:32;2292:52;;;2340:1;2337;2330:12;2292:52;2362:21;;:::i;:::-;2353:30;;2406:52;2454:3;2443:9;2406:52;:::i;:::-;2399:5;2392:67;2521:3;2510:9;2506:19;2493:33;2486:4;2479:5;2475:16;2468:59;2589:3;2578:9;2574:19;2561:33;2554:4;2547:5;2543:16;2536:59;2657:3;2646:9;2642:19;2629:33;2622:4;2615:5;2611:16;2604:59;2725:3;2714:9;2710:19;2697:33;2690:4;2683:5;2679:16;2672:59;2793:3;2782:9;2778:19;2765:33;2758:4;2751:5;2747:16;2740:59;2861:3;2850:9;2846:19;2833:33;2826:4;2819:5;2815:16;2808:59;2929:3;2918:9;2914:19;2901:33;2894:4;2887:5;2883:16;2876:59;2999:3;2988:9;2984:19;2971:33;2962:6;2955:5;2951:18;2944:61;2199:812;;;;:::o;3016:405::-;3138:6;3146;3154;3207:3;3195:9;3186:7;3182:23;3178:33;3175:53;;;3224:1;3221;3214:12;3175:53;3247:64;3303:7;3292:9;3247:64;:::i;:::-;3237:74;3358:3;3343:19;;3330:33;;-1:-1:-1;3410:3:239;3395:19;;;3382:33;;3016:405;-1:-1:-1;;;3016:405:239:o;3608:336::-;3721:6;3729;3782:3;3770:9;3761:7;3757:23;3753:33;3750:53;;;3799:1;3796;3789:12;3750:53;3822:64;3878:7;3867:9;3822:64;:::i;:::-;3812:74;3933:3;3918:19;;;;3905:33;;-1:-1:-1;;;3608:336:239:o;4212:452::-;4305:6;4313;4321;4329;4337;4390:3;4378:9;4369:7;4365:23;4361:33;4358:53;;;4407:1;4404;4397:12;4358:53;-1:-1:-1;;4430:23:239;;;4500:2;4485:18;;4472:32;;-1:-1:-1;4551:2:239;4536:18;;4523:32;;4602:2;4587:18;;4574:32;;-1:-1:-1;4653:3:239;4638:19;4625:33;;-1:-1:-1;4212:452:239;-1:-1:-1;4212:452:239:o;5405:127::-;5466:10;5461:3;5457:20;5454:1;5447:31;5497:4;5494:1;5487:15;5521:4;5518:1;5511:15;5537:128;5604:9;;;5625:11;;;5622:37;;;5639:18;;:::i;5670:200::-;5736:9;;;5709:4;5764:9;;5792:10;;5804:12;;;5788:29;5827:12;;;5819:21;;5785:56;5782:82;;;5844:18;;:::i;5875:125::-;5940:9;;;5961:10;;;5958:36;;;5974:18;;:::i;6005:136::-;6040:3;-1:-1:-1;;;6061:22:239;;6058:48;;6086:18;;:::i;:::-;-1:-1:-1;6126:1:239;6122:13;;6005:136::o;6146:216::-;6210:9;;;6238:11;;;6185:3;6268:9;;6296:10;;6292:19;;6321:10;;6313:19;;6289:44;6286:70;;;6336:18;;:::i;:::-;6286:70;;6146:216;;;;:::o;6499:290::-;6538:1;6564;6554:132;;6608:10;6603:3;6599:20;6596:1;6589:31;6643:4;6640:1;6633:15;6671:4;6668:1;6661:15;6554:132;-1:-1:-1;;;6702:18:239;;-1:-1:-1;;6722:13:239;;6698:38;6695:64;;;6739:18;;:::i;:::-;-1:-1:-1;6773:10:239;;6499:290::o;6794:361::-;6959:2;6944:18;;6992:1;6981:13;;6971:144;;7037:10;7032:3;7028:20;7025:1;7018:31;7072:4;7069:1;7062:15;7100:4;7097:1;7090:15;6971:144;7124:25;;;6794:361;:::o";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxShareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleShareProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleWithdrawalSharesRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShareReservesDeltaSafe\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetCurveTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetFlatTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"calculateUpdateLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLPMath.sol\":\"MockLPMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/MockLPMath.sol\":{\"keccak256\":\"0xfcd3a7c0429eded99ddfdf28814092876b2ac0418275d303211c224281a0b647\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6cbaa0b18cd8bb6ff0faa098c98b243a3651f65e90f6d3056699ee545afa12c\",\"dweb:/ipfs/QmSvh1apdAfWv4h9cx7AB5HrPpan2SsdAbHwSM5oazZHjc\"]}},\"version\":1}";
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
                readonly inputs: readonly [{
                    readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
                    readonly name: "reason";
                    readonly type: "uint8";
                }];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
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
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UpdateLiquidityFailed";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
                readonly keccak256: "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067";
                readonly urls: readonly ["bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f", "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockLPMath.sol": {
                readonly keccak256: "0xfcd3a7c0429eded99ddfdf28814092876b2ac0418275d303211c224281a0b647";
                readonly urls: readonly ["bzz-raw://e6cbaa0b18cd8bb6ff0faa098c98b243a3651f65e90f6d3056699ee545afa12c", "dweb:/ipfs/QmSvh1apdAfWv4h9cx7AB5HrPpan2SsdAbHwSM5oazZHjc"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockLPMath.sol";
        readonly id: 26752;
        readonly exportedSymbols: {
            readonly LPMath: readonly [22264];
            readonly MockLPMath: readonly [26751];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2655:144";
        readonly nodes: readonly [{
            readonly id: 26610;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:144";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 26612;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:144";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "contracts/src/libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26752;
            readonly sourceUnit: 22265;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26611;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 22264;
                    readonly src: "73:6:144";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26751;
            readonly nodeType: "ContractDefinition";
            readonly src: "126:2567:144";
            readonly nodes: readonly [{
                readonly id: 26641;
                readonly nodeType: "FunctionDefinition";
                readonly src: "152:631:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26640;
                    readonly nodeType: "Block";
                    readonly src: "529:254:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26633;
                                readonly name: "_shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26614;
                                readonly src: "607:14:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26634;
                                readonly name: "_shareAdjustment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26616;
                                readonly src: "639:16:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 26635;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26618;
                                readonly src: "673:13:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26636;
                                readonly name: "_minimumShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26620;
                                readonly src: "704:21:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26637;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26622;
                                readonly src: "743:19:144";
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
                                    readonly id: 26631;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "558:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26632;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "565:24:144";
                                readonly memberName: "calculateUpdateLiquidity";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20394;
                                readonly src: "558:31:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256)";
                                };
                            };
                            readonly id: 26638;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "558:218:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 26630;
                        readonly id: 26639;
                        readonly nodeType: "Return";
                        readonly src: "539:237:144";
                    }];
                };
                readonly functionSelector: "b500f3cb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateUpdateLiquidity";
                readonly nameLocation: "161:24:144";
                readonly parameters: {
                    readonly id: 26623;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26614;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "203:14:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "195:22:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26613;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "195:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26616;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "234:16:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "227:23:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26615;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "227:6:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26618;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "268:13:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "260:21:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26617;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "260:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26620;
                        readonly mutability: "mutable";
                        readonly name: "_minimumShareReserves";
                        readonly nameLocation: "299:21:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "291:29:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26619;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "291:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26622;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "337:19:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "330:26:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26621;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "330:6:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "185:177:144";
                };
                readonly returnParameters: {
                    readonly id: 26630;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26625;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "431:13:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "423:21:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26624;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "423:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26627;
                        readonly mutability: "mutable";
                        readonly name: "shareAdjustment";
                        readonly nameLocation: "465:15:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "458:22:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26626;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "458:6:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26629;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "502:12:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26641;
                        readonly src: "494:20:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26628;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "494:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "409:115:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26655;
                readonly nodeType: "FunctionDefinition";
                readonly src: "789:180:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26654;
                    readonly nodeType: "Block";
                    readonly src: "908:61:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26651;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26644;
                                readonly src: "954:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26649;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "925:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26650;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "932:21:144";
                                readonly memberName: "calculatePresentValue";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20601;
                                readonly src: "925:28:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20572_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256)";
                                };
                            };
                            readonly id: 26652;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "925:37:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26648;
                        readonly id: 26653;
                        readonly nodeType: "Return";
                        readonly src: "918:44:144";
                    }];
                };
                readonly functionSelector: "c00b11d3";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculatePresentValue";
                readonly nameLocation: "798:21:144";
                readonly parameters: {
                    readonly id: 26645;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26644;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "862:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26655;
                        readonly src: "829:40:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26643;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26642;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["829:6:144", "836:18:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20572;
                                readonly src: "829:25:144";
                            };
                            readonly referencedDeclaration: 20572;
                            readonly src: "829:25:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "819:56:144";
                };
                readonly returnParameters: {
                    readonly id: 26648;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26647;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26655;
                        readonly src: "899:7:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26646;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "899:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "898:9:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26669;
                readonly nodeType: "FunctionDefinition";
                readonly src: "975:179:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26668;
                    readonly nodeType: "Block";
                    readonly src: "1093:61:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26665;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26658;
                                readonly src: "1139:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26663;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "1110:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26664;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1117:21:144";
                                readonly memberName: "calculateNetFlatTrade";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21040;
                                readonly src: "1110:28:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20572_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256)";
                                };
                            };
                            readonly id: 26666;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1110:37:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 26662;
                        readonly id: 26667;
                        readonly nodeType: "Return";
                        readonly src: "1103:44:144";
                    }];
                };
                readonly functionSelector: "32c5dec4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetFlatTrade";
                readonly nameLocation: "984:21:144";
                readonly parameters: {
                    readonly id: 26659;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26658;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1048:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26669;
                        readonly src: "1015:40:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26657;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26656;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1015:6:144", "1022:18:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20572;
                                readonly src: "1015:25:144";
                            };
                            readonly referencedDeclaration: 20572;
                            readonly src: "1015:25:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1005:56:144";
                };
                readonly returnParameters: {
                    readonly id: 26662;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26661;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26669;
                        readonly src: "1085:6:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26660;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1085:6:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1084:8:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26694;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1160:335:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26693;
                    readonly nodeType: "Block";
                    readonly src: "1279:216:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26678, 26680];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26678;
                            readonly mutability: "mutable";
                            readonly name: "netCurveTrade";
                            readonly nameLocation: "1297:13:144";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26693;
                            readonly src: "1290:20:144";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 26677;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1290:6:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 26680;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1317:7:144";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26693;
                            readonly src: "1312:12:144";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 26679;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1312:4:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26685;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26683;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26672;
                                readonly src: "1375:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 26681;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "1328:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26682;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1348:26:144";
                                readonly memberName: "calculateNetCurveTradeSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21002;
                                readonly src: "1328:46:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20572_memory_ptr_$returns$_t_int256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256,bool)";
                                };
                            };
                            readonly id: 26684;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1328:55:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_int256_$_t_bool_$";
                                readonly typeString: "tuple(int256,bool)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1289:94:144";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26687;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26680;
                                readonly src: "1401:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b4c504d6174683a2063616c63756c6174654e65744375727665547261646553616665206661696c6564";
                                readonly id: 26688;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1410:47:144";
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
                                readonly id: 26686;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1393:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26689;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1393:65:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26690;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1393:65:144";
                    }, {
                        readonly expression: {
                            readonly id: 26691;
                            readonly name: "netCurveTrade";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26678;
                            readonly src: "1475:13:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 26676;
                        readonly id: 26692;
                        readonly nodeType: "Return";
                        readonly src: "1468:20:144";
                    }];
                };
                readonly functionSelector: "a4fc6f81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetCurveTrade";
                readonly nameLocation: "1169:22:144";
                readonly parameters: {
                    readonly id: 26673;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26672;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1234:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26694;
                        readonly src: "1201:40:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 26671;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26670;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1201:6:144", "1208:18:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 20572;
                                readonly src: "1201:25:144";
                            };
                            readonly referencedDeclaration: 20572;
                            readonly src: "1201:25:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20572_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1191:56:144";
                };
                readonly returnParameters: {
                    readonly id: 26676;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26675;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26694;
                        readonly src: "1271:6:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26674;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:6:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:8:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26711;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1501:368:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26710;
                    readonly nodeType: "Block";
                    readonly src: "1697:172:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26706;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26697;
                                readonly src: "1804:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26707;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26699;
                                readonly src: "1829:19:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26704;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "1726:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26705;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1733:53:144";
                                readonly memberName: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21272;
                                readonly src: "1726:60:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$21060_memory_ptr_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26708;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1726:136:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26703;
                        readonly id: 26709;
                        readonly nodeType: "Return";
                        readonly src: "1707:155:144";
                    }];
                };
                readonly functionSelector: "a0d1643c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                readonly nameLocation: "1510:53:144";
                readonly parameters: {
                    readonly id: 26700;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26697;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1614:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26711;
                        readonly src: "1573:48:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26696;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26695;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["1573:6:144", "1580:26:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 21060;
                                readonly src: "1573:33:144";
                            };
                            readonly referencedDeclaration: 21060;
                            readonly src: "1573:33:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26699;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "1639:19:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26711;
                        readonly src: "1631:27:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26698;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1563:101:144";
                };
                readonly returnParameters: {
                    readonly id: 26703;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26702;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26711;
                        readonly src: "1688:7:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26701;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1688:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1687:9:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26731;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:450:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26730;
                    readonly nodeType: "Block";
                    readonly src: "2112:213:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26725;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26714;
                                readonly src: "2208:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26726;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26716;
                                readonly src: "2233:31:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 26727;
                                readonly name: "_maxShareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26718;
                                readonly src: "2282:22:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26723;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "2141:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26724;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2148:42:144";
                                readonly memberName: "calculateDistributeExcessIdleShareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21653;
                                readonly src: "2141:49:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$21060_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26728;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2141:177:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26722;
                        readonly id: 26729;
                        readonly nodeType: "Return";
                        readonly src: "2122:196:144";
                    }];
                };
                readonly functionSelector: "3f9ccc01";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleShareProceeds";
                readonly nameLocation: "1884:42:144";
                readonly parameters: {
                    readonly id: 26719;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26714;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1977:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26731;
                        readonly src: "1936:48:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26713;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26712;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["1936:6:144", "1943:26:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 21060;
                                readonly src: "1936:33:144";
                            };
                            readonly referencedDeclaration: 21060;
                            readonly src: "1936:33:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26716;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2002:31:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26731;
                        readonly src: "1994:39:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26715;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1994:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26718;
                        readonly mutability: "mutable";
                        readonly name: "_maxShareReservesDelta";
                        readonly nameLocation: "2051:22:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26731;
                        readonly src: "2043:30:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26717;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2043:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1926:153:144";
                };
                readonly returnParameters: {
                    readonly id: 26722;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26721;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26731;
                        readonly src: "2103:7:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26720;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2103:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2102:9:144";
                };
                readonly scope: 26751;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26750;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2331:360:144";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26749;
                    readonly nodeType: "Block";
                    readonly src: "2526:165:144";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26745;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26734;
                                readonly src: "2614:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 26746;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26736;
                                readonly src: "2639:31:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26743;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22264;
                                    readonly src: "2555:6:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22264_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 26744;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2562:34:144";
                                readonly memberName: "calculateMaxShareReservesDeltaSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21922;
                                readonly src: "2555:41:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$21060_memory_ptr_$_t_uint256_$returns$_t_uint256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256,bool)";
                                };
                            };
                            readonly id: 26747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2555:129:144";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 26742;
                        readonly id: 26748;
                        readonly nodeType: "Return";
                        readonly src: "2536:148:144";
                    }];
                };
                readonly functionSelector: "9e5fc16b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShareReservesDeltaSafe";
                readonly nameLocation: "2340:34:144";
                readonly parameters: {
                    readonly id: 26737;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26734;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "2425:7:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26750;
                        readonly src: "2384:48:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 26733;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26732;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["2384:6:144", "2391:26:144"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 21060;
                                readonly src: "2384:33:144";
                            };
                            readonly referencedDeclaration: 21060;
                            readonly src: "2384:33:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$21060_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26736;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2450:31:144";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26750;
                        readonly src: "2442:39:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26735;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2442:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2374:113:144";
                };
                readonly returnParameters: {
                    readonly id: 26742;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26739;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26750;
                        readonly src: "2511:7:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26738;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2511:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26741;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26750;
                        readonly src: "2520:4:144";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 26740;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2520:4:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2510:15:144";
                };
                readonly scope: 26751;
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
            readonly linearizedBaseContracts: readonly [26751];
            readonly name: "MockLPMath";
            readonly nameLocation: "135:10:144";
            readonly scope: 26752;
            readonly usedErrors: readonly [11005, 11017, 11041, 11050, 11106, 11112];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 144;
};
//# sourceMappingURL=MockLPMath.d.ts.map