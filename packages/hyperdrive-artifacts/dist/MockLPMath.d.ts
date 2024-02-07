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
        readonly name: "calculateMaxShareReservesDelta";
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
        readonly name: "InvalidShareReserves";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LnInvalidInput";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NegativePresentValue";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506123b3806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637d840b6d1161005b5780637d840b6d146100ce578063b500f3cb146100e1578063ce2e339c1461010f578063f10824481461012257600080fd5b806337043a53146100825780635dcbd5ca146100a857806374bbc903146100bb575b600080fd5b61009561009036600461218a565b610135565b6040519081526020015b60405180910390f35b6100956100b63660046121a7565b610146565b6100956100c936600461218a565b610159565b6100956100dc3660046121a7565b610164565b6100f46100ef366004612246565b610170565b6040805193845260208401929092529082015260600161009f565b61009561011d3660046121a7565b610194565b61009561013036600461218a565b6101a0565b600061014082610221565b92915050565b60006101528383610251565b9392505050565b600061014082610555565b600061015283836105bc565b600080600061018288888888886109e7565b9250925092505b955095509592505050565b60006101528383610a9a565b60008060006101ae84610b4f565b915091508061021a5760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022f84610d8c565b915091508061021a5760405163aeeb825d60e01b815260040160405180910390fd5b6000808360a001511261026957506080820151610140565b60008360a0015161027990612297565b90506102aa8460c001518560e00151866101000151876000015160a0015188608001516102a590612297565b6109e7565b86516040810191909152602080820192909252919091528451805191015160009161030a916102d99190610e06565b8651604081015160c0909101516102f890670de0b6b3a76400006122b3565b88516060810151608090910151610e23565b9050818110610320575050506080820151610140565b50600061032e858584610ec0565b905060005b60038110156104b0576103628660c001518760e00151886101000151896000015160a00151866102a590612297565b8851604081019190915260208082019290925291909152865180519101516000916103c2916103919190610e06565b8851604081015160c0909101516103b090670de0b6b3a76400006122b3565b8a516060810151608090910151610e23565b90506000806103d1898961106d565b91509150806103e2575050506104b0565b858311156104445784965061040e620f4240670de0b6b3a764000061040791906122c6565b87906112eb565b831161041f57505050505050610140565b6104338261042d88866122b3565b90611300565b61043d90866122c6565b945061048e565b8583101561048057600061045c8361042d868a6122b3565b905085811061046e57505050506104b0565b61047881876122b3565b95505061048e565b849650505050505050610140565b88608001518511156104a257886080015194505b836001019350505050610333565b5082811461054d576104de8560c001518660e00151876101000151886000015160a00151856102a590612297565b87516040810191909152602080820192909252919091528551805191015160009161053e9161050d9190610e06565b8751604081015160c09091015161052c90670de0b6b3a76400006122b3565b89516060810151608090910151610e23565b905082811061054b578193505b505b505092915050565b6000610584826101000151670de0b6b3a764000061057391906122b3565b606084015160e08501519190611315565b6105b2836101400151670de0b6b3a76400006105a091906122b3565b6060850151610120860151919061133b565b61014091906122d9565b600080836060015184604001516105d391906122c6565b90508360a001516000036105fd57606084015160208501516105f5918361133b565b915050610140565b6020840151606085015160009161061591908461133b565b905060008560a0015113156108575760005b6004811015610851576106568660c001518760e00151886101000151896000015160a00151866102a590612297565b88516040810191909152602081019190915252855160009061067790610221565b9050610684878286611359565b1561068f5750610851565b865180516020820151604083015160a084015160c09094015160009485946106dc94909390929091906106ca90670de0b6b3a76400006122b3565b8e5160608101516080909101516113d2565b91509150806106ed57505050610851565b6000828a60a0015111610750576107098a8a8c60a001516114b4565b925090508115806107225750670de0b6b3a76400008110155b15610737576000975050505050505050610140565b61074981670de0b6b3a76400006122b3565b9050610782565b6107598a611775565b909650915081610773576000975050505050505050610140565b85975050505050505050610140565b600061079f8b604001518c6020015161186090919063ffffffff16565b6107a9868a6112eb565b6107b391906122d9565b905060008113156107e3576107d26107cb838a611860565b8290611300565b6107dc90886122c6565b9650610841565b60008112156108375760006108046107fb848b611860565b61042d84612297565b90508781101561081f5761081881896122b3565b9750610831565b60009950505050505050505050610140565b50610841565b5050505050610851565b8560010195505050505050610627565b506109df565b60005b60048110156109dd576108898660c001518760e00151886101000151896000015160a00151866102a590612297565b8851604081019190915260208101919091525285516000906108aa90610221565b90506108b7878286611359565b156108c257506109dd565b6000806108dd89898b60a001516108d890612297565b611875565b915091508015806108f65750670de0b6b3a76400008210155b1561090a5760009650505050505050610140565b61091c82670de0b6b3a76400006122b3565b9150600061093b8a604001518b6020015161186090919063ffffffff16565b61094585896112eb565b61094f91906122d9565b90506000811315610979576109688761042d8386611300565b61097290876122c6565b95506109ce565b60008112156109c55760006109938861042d868186612297565b9050868110156109ae576109a781886122b3565b96506109bf565b600098505050505050505050610140565b506109ce565b505050506109dd565b8460010194505050505061085a565b505b949350505050565b600080600083600003610a01575086915085905084610189565b6000610a0d858a6122f9565b905085811215610a305760405163585fe6df60e11b815260040160405180910390fd5b80935060008812610a4d57610a4684898b61133b565b9250610a6d565b610a61610a5989612297565b85908b61133b565b610a6a90612297565b92505b610a8c87610a7b8b8b610e06565b610a858787610e06565b919061133b565b915050955095509592505050565b6000610ac28360c001518460e00151856101000151866000015160a00151866102a590612297565b8551604081019190915260208101919091525282516000908190610ae590610d8c565b91509150801580610afa575084602001518210155b15610b0a57600092505050610140565b600085606001518660400151610b2091906122c6565b9050610b3b8387602001518361133b9092919063ffffffff16565b610b4590826122b3565b9695505050505050565b6000806000610b718461014001518561012001516112eb90919063ffffffff16565b61010085015160e0860151610b8591611860565b610b8f91906122d9565b90506000610ba585600001518660200151610e06565b90506000821315610ca8576000829050600080610bf6886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000610be791906122b3565b8d606001518e608001516113d2565b9150915080610c0f575060009788975095505050505050565b828210610c64576000610c49858a60400151868c60c00151670de0b6b3a7640000610c3a91906122b3565b8d606001518e608001516119b4565b9050610c5481612297565b9960019950975050505050505050565b6000886020015112610c975760a0880151610c7f90856122b3565b610c8890612297565b98600198509650505050505050565b60a08801518851610c7f91906122b3565b6000821215610d7e576000610cbc83612297565b90506000610cf08388604001518960c00151670de0b6b3a7640000610ce191906122b3565b8a606001518b60800151610e23565b9050818110610d2c576000610c88848960400151858b60c00151670de0b6b3a7640000610d1d91906122b3565b8c606001518d608001516119e4565b6000610d5e8489604001518a60c00151670de0b6b3a7640000610d4f91906122b3565b8b606001518c60800151611abc565b9050610d748860600151838561042d91906122b3565b610c8890826122c6565b506000946001945092505050565b6000806000806000610d9d86610b4f565b9150915080610db457506000958695509350505050565b8560a00151610dc287610555565b8751610dcf9085906122f9565b610dd991906122f9565b610de391906122d9565b925050506000811215610dfc5750600093849350915050565b9360019350915050565b600080610e1383856122d9565b9050600081121561015257600080fd5b600080610e338787878787611b4b565b90506000610e5e670de0b6b3a7640000610e4d8787611300565b610e5791906122c6565b8390611b7a565b9050670de0b6b3a76400008110610e9257610e8b610e84670de0b6b3a764000088611b7a565b8290611b8f565b9050610eaa565b610ea7610e84670de0b6b3a764000088611300565b90505b610eb481886122b3565b98975050505050505050565b825160808101516060909101516000918291610f2f91670de0b6b3a764000091610ee991611300565b610ef391906122c6565b610100870151875160c00151610f29918891610f1790670de0b6b3a76400006122b3565b8a516060810151608090910151611b4b565b90611b7a565b9050670de0b6b3a76400008110610f7657845160c00151610f6f90610e8490610f6090670de0b6b3a76400006122b3565b670de0b6b3a764000090611b7a565b9050610fa8565b845160c00151610fa590610e8490610f9690670de0b6b3a76400006122b3565b670de0b6b3a764000090611300565b90505b610fb283826122c6565b905060008560e001511261100e57611007611000610fe18760c001518860e00151611b7a90919063ffffffff16565b610ff390670de0b6b3a76400006122b3565b610100880151908761133b565b8290611b7a565b905061103f565b61103c61100061102a8760c001518860e0015161042d90612297565b610ff390670de0b6b3a76400006122c6565b90505b8460c001518110611054576000915050610152565b808560c0015161106491906122b3565b95945050505050565b815180516020909101516000918291829161108791610e06565b855160c08101516040909101519192506000916110be916110b2916110ab91611b8f565b8790611860565b61010088015190611300565b865160c08101516080909101516110ef916110e3916110dd9087611860565b90611b8f565b88516060015190611300565b6110f991906122c6565b9050600061113883886000015160400151896000015160c00151670de0b6b3a764000061112691906122b3565b8a516060810151608090910151611be6565b9050670de0b6b3a7640000811061118f5761118861118161117a896000015160c00151670de0b6b3a764000061116e91906122b3565b8a5160c0015190611300565b8390611b8f565b83906112eb565b91506111c3565b6111c061118161117a896000015160c00151670de0b6b3a76400006111b491906122b3565b8a5160c0015190611b7a565b91505b61121a6112136111e8896000015160c00151670de0b6b3a7640000610f6091906122b3565b89516080810151606090910151670de0b6b3a7640000916112099190611b7a565b6110dd91906122c6565b8390611300565b9150600061123687896101000151611b7a90919063ffffffff16565b90508083116112505761124983826122b3565b9250611260565b60008095509550505050506112e4565b60008860e00151126112aa576112a38361128b8a60c001518b60e0015161130090919063ffffffff16565b61129d90670de0b6b3a76400006122b3565b90611860565b92506112d9565b6112d6836112c48a60c001518b60e00151610f2990612297565b61129d90670de0b6b3a76400006122c6565b92505b509093506001925050505b9250929050565b60006101528383670de0b6b3a764000061133b565b600061015283670de0b6b3a76400008461133b565b600082600019048411830215820261132c57600080fd5b50910281810615159190040190565b600082600019048411830215820261135257600080fd5b5091020490565b60008061137384866020015161130090919063ffffffff16565b9050600061138e86604001518561130090919063ffffffff16565b9050818110156113a357600092505050610152565b818110158015610b4557506113c7611181633b9aca00670de0b6b3a76400006122c6565b101595945050505050565b60008060008812156113f4576113e788612297565b6113f190876122c6565b95505b60006114008a8a610e06565b90506000611411828a898989611be6565b9050600061142e611426896110dd898d611860565b889088611315565b61143890836122b3565b9050670de0b6b3a764000081106114655761145e610e84670de0b6b3a76400008a611300565b905061147d565b61147a610e84670de0b6b3a76400008a611b7a565b90505b8981101561149457600080945094505050506114a8565b61149e8a826122b3565b6001945094505050505b97509795505050505050565b82518051602090910151600091829182916114ce91610e06565b9050600061150b6114ff6114f8896000015160c00151888b60000151604001516110dd91906122c6565b8890611860565b61010089015190611300565b875160c081015160409091015161153c916115309161152991611b8f565b89906112eb565b6101008a015190611b7a565b885160c08101516080909101516115679161155b916110dd90886112eb565b8a516060015190611b7a565b61157191906122c6565b61157b91906122b3565b905060006115ba838960000151604001518a6000015160c00151670de0b6b3a76400006115a891906122b3565b8b516060810151608090910151611b4b565b905060006115ee896000015160c00151670de0b6b3a76400006115dd91906122b3565b8a51604001516110dd908a906122c6565b90508082101561160857600080955095505050505061176d565b61162961161582846122b3565b8a5160608101516080909101519190611315565b9050670de0b6b3a7640000811061166d57885160c0015161166690610e849061165a90670de0b6b3a76400006122b3565b8b5160c0015190611b7a565b905061169c565b885160c0015161169990610e849061168d90670de0b6b3a76400006122b3565b8b5160c0015190611300565b90505b8851606001516116af9084908390611315565b925082670de0b6b3a7640000106116d9576116d283670de0b6b3a76400006122b3565b92506116ea565b60006001955095505050505061176d565b60008960e00151126117345761172d6117148a60c001518b60e00151611b7a90919063ffffffff16565b61172690670de0b6b3a76400006122b3565b84906112eb565b9250611762565b61175f61174d8a60c001518b60e0015161042d90612297565b61172690670de0b6b3a76400006122c6565b92505b509093506001925050505b935093915050565b60008060008360e001511361178f57506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906117bc90610555565b905060008082126117fe576040850151606086015183916117ed916117e190826122c6565b60208901519190611315565b6117f791906122b3565b905061182d565b61180782612297565b6040860151606087015161182091906117e190826122c6565b61182a91906122c6565b90505b60e085015160c0860151611842918390611315565b9050808560c0015161185491906122b3565b95600195509350505050565b60006101528383670de0b6b3a7640000611315565b825180516020909101516000918291829161188f91610e06565b905060006118b96114ff6114f8896000015160c00151888b60000151604001516110dd91906122b3565b875160c08101516040909101516118d7916115309161152991611b8f565b885160c08101516080909101516118f69161155b916110dd90886112eb565b61190091906122c6565b61190a91906122b3565b90506000611937838960000151604001518a6000015160c00151670de0b6b3a76400006115a891906122b3565b9050600061196b896000015160c00151670de0b6b3a764000061195a91906122b3565b8a51604001516110dd908a906122b3565b90508082101561198557600080955095505050505061176d565b61199261161582846122b3565b9050885160c0015161166690610e849061165a90670de0b6b3a76400006122b3565b6000806119c5888888888888611c0b565b9092509050806119d9576119d96000611ccd565b509695505050505050565b6000806119f48888878787611b4b565b905085871015611a0857611a086000611ccd565b611a16856110dd888a6122b3565b965086811015611a2a57611a2a6000611ccd565b6000611a428486611a3b8b866122b3565b9190611315565b9050670de0b6b3a76400008110611a6f57611a68610e84670de0b6b3a764000088611b7a565b9050611a87565b611a84610e84670de0b6b3a764000088611300565b90505b611a918185611b7a565b905088811015611aa557611aa56000611ccd565b611aaf89826122b3565b9998505050505050505050565b600080611acc8787878787611be6565b90506000611af0670de0b6b3a7640000611ae68787611b7a565b61121391906122c6565b9050670de0b6b3a76400008110611b1d57611b16610e84670de0b6b3a764000088611300565b9050611b35565b611b32610e84670de0b6b3a764000088611b7a565b90505b611b3f8185611300565b9050610eb488826122b3565b6000611b578585611b8f565b611b70611b68866110dd868b611860565b859085611315565b610b4591906122c6565b600061015283670de0b6b3a764000084611315565b600081600003611ba85750670de0b6b3a7640000610140565b82600003611bb857506000610140565b816000611bc485611ce8565b9050818102611bdb670de0b6b3a764000082612319565b9050610b4581611f04565b6000611bf28585611b8f565b611b70611c03866110dd868b6112eb565b85908561133b565b6000806000611c1d8989888888611b4b565b9050611c2d866110dd898b6122c6565b975087811015611c44576000809250925050611cc2565b6000611c558587611a3b8c866122b3565b9050670de0b6b3a76400008110611c8257611c7b610e84670de0b6b3a764000089611b7a565b9050611c9a565b611c97610e84670de0b6b3a764000089611300565b90505b611ca48186611b7a565b9050808a1115611cbb57611cb8818b6122b3565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016102119190612355565b6000808213611d0a5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611f1f57506000919050565b680755bf798b4a1bf1e58212611f48576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b604051610160810167ffffffffffffffff811182821017156120c157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156120c157634e487b7160e01b600052604160045260246000fd5b6000610160828403121561210c57600080fd5b61211461208f565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b6000610160828403121561219d57600080fd5b61015283836120f9565b6000808284036102808112156121bc57600080fd5b610260808212156121cc57600080fd5b6121d46120c7565b91506121e086866120f9565b8252610160850135602083015261018085013560408301526101a085013560608301526101c085013560808301526101e085013560a083015261020085013560c083015261022085013560e0830152610240850135610100830152909593013593505050565b600080600080600060a0868803121561225e57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016122ac576122ac612281565b5060000390565b8181038181111561014057610140612281565b8082018082111561014057610140612281565b818103600083128015838313168383128216171561021a5761021a612281565b808201828112600083128015821682158216171561054d5761054d612281565b60008261233657634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235057612350612281565b500590565b602081016004831061237757634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122014c1c35ed539acf832dd458b8dbc6b81941af06a6a0cd0b9d3c9e1ab70e8c23164736f6c63430008140033";
        readonly sourceMap: "126:2473:89:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80637d840b6d1161005b5780637d840b6d146100ce578063b500f3cb146100e1578063ce2e339c1461010f578063f10824481461012257600080fd5b806337043a53146100825780635dcbd5ca146100a857806374bbc903146100bb575b600080fd5b61009561009036600461218a565b610135565b6040519081526020015b60405180910390f35b6100956100b63660046121a7565b610146565b6100956100c936600461218a565b610159565b6100956100dc3660046121a7565b610164565b6100f46100ef366004612246565b610170565b6040805193845260208401929092529082015260600161009f565b61009561011d3660046121a7565b610194565b61009561013036600461218a565b6101a0565b600061014082610221565b92915050565b60006101528383610251565b9392505050565b600061014082610555565b600061015283836105bc565b600080600061018288888888886109e7565b9250925092505b955095509592505050565b60006101528383610a9a565b60008060006101ae84610b4f565b915091508061021a5760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b600080600061022f84610d8c565b915091508061021a5760405163aeeb825d60e01b815260040160405180910390fd5b6000808360a001511261026957506080820151610140565b60008360a0015161027990612297565b90506102aa8460c001518560e00151866101000151876000015160a0015188608001516102a590612297565b6109e7565b86516040810191909152602080820192909252919091528451805191015160009161030a916102d99190610e06565b8651604081015160c0909101516102f890670de0b6b3a76400006122b3565b88516060810151608090910151610e23565b9050818110610320575050506080820151610140565b50600061032e858584610ec0565b905060005b60038110156104b0576103628660c001518760e00151886101000151896000015160a00151866102a590612297565b8851604081019190915260208082019290925291909152865180519101516000916103c2916103919190610e06565b8851604081015160c0909101516103b090670de0b6b3a76400006122b3565b8a516060810151608090910151610e23565b90506000806103d1898961106d565b91509150806103e2575050506104b0565b858311156104445784965061040e620f4240670de0b6b3a764000061040791906122c6565b87906112eb565b831161041f57505050505050610140565b6104338261042d88866122b3565b90611300565b61043d90866122c6565b945061048e565b8583101561048057600061045c8361042d868a6122b3565b905085811061046e57505050506104b0565b61047881876122b3565b95505061048e565b849650505050505050610140565b88608001518511156104a257886080015194505b836001019350505050610333565b5082811461054d576104de8560c001518660e00151876101000151886000015160a00151856102a590612297565b87516040810191909152602080820192909252919091528551805191015160009161053e9161050d9190610e06565b8751604081015160c09091015161052c90670de0b6b3a76400006122b3565b89516060810151608090910151610e23565b905082811061054b578193505b505b505092915050565b6000610584826101000151670de0b6b3a764000061057391906122b3565b606084015160e08501519190611315565b6105b2836101400151670de0b6b3a76400006105a091906122b3565b6060850151610120860151919061133b565b61014091906122d9565b600080836060015184604001516105d391906122c6565b90508360a001516000036105fd57606084015160208501516105f5918361133b565b915050610140565b6020840151606085015160009161061591908461133b565b905060008560a0015113156108575760005b6004811015610851576106568660c001518760e00151886101000151896000015160a00151866102a590612297565b88516040810191909152602081019190915252855160009061067790610221565b9050610684878286611359565b1561068f5750610851565b865180516020820151604083015160a084015160c09094015160009485946106dc94909390929091906106ca90670de0b6b3a76400006122b3565b8e5160608101516080909101516113d2565b91509150806106ed57505050610851565b6000828a60a0015111610750576107098a8a8c60a001516114b4565b925090508115806107225750670de0b6b3a76400008110155b15610737576000975050505050505050610140565b61074981670de0b6b3a76400006122b3565b9050610782565b6107598a611775565b909650915081610773576000975050505050505050610140565b85975050505050505050610140565b600061079f8b604001518c6020015161186090919063ffffffff16565b6107a9868a6112eb565b6107b391906122d9565b905060008113156107e3576107d26107cb838a611860565b8290611300565b6107dc90886122c6565b9650610841565b60008112156108375760006108046107fb848b611860565b61042d84612297565b90508781101561081f5761081881896122b3565b9750610831565b60009950505050505050505050610140565b50610841565b5050505050610851565b8560010195505050505050610627565b506109df565b60005b60048110156109dd576108898660c001518760e00151886101000151896000015160a00151866102a590612297565b8851604081019190915260208101919091525285516000906108aa90610221565b90506108b7878286611359565b156108c257506109dd565b6000806108dd89898b60a001516108d890612297565b611875565b915091508015806108f65750670de0b6b3a76400008210155b1561090a5760009650505050505050610140565b61091c82670de0b6b3a76400006122b3565b9150600061093b8a604001518b6020015161186090919063ffffffff16565b61094585896112eb565b61094f91906122d9565b90506000811315610979576109688761042d8386611300565b61097290876122c6565b95506109ce565b60008112156109c55760006109938861042d868186612297565b9050868110156109ae576109a781886122b3565b96506109bf565b600098505050505050505050610140565b506109ce565b505050506109dd565b8460010194505050505061085a565b505b949350505050565b600080600083600003610a01575086915085905084610189565b6000610a0d858a6122f9565b905085811215610a305760405163585fe6df60e11b815260040160405180910390fd5b80935060008812610a4d57610a4684898b61133b565b9250610a6d565b610a61610a5989612297565b85908b61133b565b610a6a90612297565b92505b610a8c87610a7b8b8b610e06565b610a858787610e06565b919061133b565b915050955095509592505050565b6000610ac28360c001518460e00151856101000151866000015160a00151866102a590612297565b8551604081019190915260208101919091525282516000908190610ae590610d8c565b91509150801580610afa575084602001518210155b15610b0a57600092505050610140565b600085606001518660400151610b2091906122c6565b9050610b3b8387602001518361133b9092919063ffffffff16565b610b4590826122b3565b9695505050505050565b6000806000610b718461014001518561012001516112eb90919063ffffffff16565b61010085015160e0860151610b8591611860565b610b8f91906122d9565b90506000610ba585600001518660200151610e06565b90506000821315610ca8576000829050600080610bf6886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000610be791906122b3565b8d606001518e608001516113d2565b9150915080610c0f575060009788975095505050505050565b828210610c64576000610c49858a60400151868c60c00151670de0b6b3a7640000610c3a91906122b3565b8d606001518e608001516119b4565b9050610c5481612297565b9960019950975050505050505050565b6000886020015112610c975760a0880151610c7f90856122b3565b610c8890612297565b98600198509650505050505050565b60a08801518851610c7f91906122b3565b6000821215610d7e576000610cbc83612297565b90506000610cf08388604001518960c00151670de0b6b3a7640000610ce191906122b3565b8a606001518b60800151610e23565b9050818110610d2c576000610c88848960400151858b60c00151670de0b6b3a7640000610d1d91906122b3565b8c606001518d608001516119e4565b6000610d5e8489604001518a60c00151670de0b6b3a7640000610d4f91906122b3565b8b606001518c60800151611abc565b9050610d748860600151838561042d91906122b3565b610c8890826122c6565b506000946001945092505050565b6000806000806000610d9d86610b4f565b9150915080610db457506000958695509350505050565b8560a00151610dc287610555565b8751610dcf9085906122f9565b610dd991906122f9565b610de391906122d9565b925050506000811215610dfc5750600093849350915050565b9360019350915050565b600080610e1383856122d9565b9050600081121561015257600080fd5b600080610e338787878787611b4b565b90506000610e5e670de0b6b3a7640000610e4d8787611300565b610e5791906122c6565b8390611b7a565b9050670de0b6b3a76400008110610e9257610e8b610e84670de0b6b3a764000088611b7a565b8290611b8f565b9050610eaa565b610ea7610e84670de0b6b3a764000088611300565b90505b610eb481886122b3565b98975050505050505050565b825160808101516060909101516000918291610f2f91670de0b6b3a764000091610ee991611300565b610ef391906122c6565b610100870151875160c00151610f29918891610f1790670de0b6b3a76400006122b3565b8a516060810151608090910151611b4b565b90611b7a565b9050670de0b6b3a76400008110610f7657845160c00151610f6f90610e8490610f6090670de0b6b3a76400006122b3565b670de0b6b3a764000090611b7a565b9050610fa8565b845160c00151610fa590610e8490610f9690670de0b6b3a76400006122b3565b670de0b6b3a764000090611300565b90505b610fb283826122c6565b905060008560e001511261100e57611007611000610fe18760c001518860e00151611b7a90919063ffffffff16565b610ff390670de0b6b3a76400006122b3565b610100880151908761133b565b8290611b7a565b905061103f565b61103c61100061102a8760c001518860e0015161042d90612297565b610ff390670de0b6b3a76400006122c6565b90505b8460c001518110611054576000915050610152565b808560c0015161106491906122b3565b95945050505050565b815180516020909101516000918291829161108791610e06565b855160c08101516040909101519192506000916110be916110b2916110ab91611b8f565b8790611860565b61010088015190611300565b865160c08101516080909101516110ef916110e3916110dd9087611860565b90611b8f565b88516060015190611300565b6110f991906122c6565b9050600061113883886000015160400151896000015160c00151670de0b6b3a764000061112691906122b3565b8a516060810151608090910151611be6565b9050670de0b6b3a7640000811061118f5761118861118161117a896000015160c00151670de0b6b3a764000061116e91906122b3565b8a5160c0015190611300565b8390611b8f565b83906112eb565b91506111c3565b6111c061118161117a896000015160c00151670de0b6b3a76400006111b491906122b3565b8a5160c0015190611b7a565b91505b61121a6112136111e8896000015160c00151670de0b6b3a7640000610f6091906122b3565b89516080810151606090910151670de0b6b3a7640000916112099190611b7a565b6110dd91906122c6565b8390611300565b9150600061123687896101000151611b7a90919063ffffffff16565b90508083116112505761124983826122b3565b9250611260565b60008095509550505050506112e4565b60008860e00151126112aa576112a38361128b8a60c001518b60e0015161130090919063ffffffff16565b61129d90670de0b6b3a76400006122b3565b90611860565b92506112d9565b6112d6836112c48a60c001518b60e00151610f2990612297565b61129d90670de0b6b3a76400006122c6565b92505b509093506001925050505b9250929050565b60006101528383670de0b6b3a764000061133b565b600061015283670de0b6b3a76400008461133b565b600082600019048411830215820261132c57600080fd5b50910281810615159190040190565b600082600019048411830215820261135257600080fd5b5091020490565b60008061137384866020015161130090919063ffffffff16565b9050600061138e86604001518561130090919063ffffffff16565b9050818110156113a357600092505050610152565b818110158015610b4557506113c7611181633b9aca00670de0b6b3a76400006122c6565b101595945050505050565b60008060008812156113f4576113e788612297565b6113f190876122c6565b95505b60006114008a8a610e06565b90506000611411828a898989611be6565b9050600061142e611426896110dd898d611860565b889088611315565b61143890836122b3565b9050670de0b6b3a764000081106114655761145e610e84670de0b6b3a76400008a611300565b905061147d565b61147a610e84670de0b6b3a76400008a611b7a565b90505b8981101561149457600080945094505050506114a8565b61149e8a826122b3565b6001945094505050505b97509795505050505050565b82518051602090910151600091829182916114ce91610e06565b9050600061150b6114ff6114f8896000015160c00151888b60000151604001516110dd91906122c6565b8890611860565b61010089015190611300565b875160c081015160409091015161153c916115309161152991611b8f565b89906112eb565b6101008a015190611b7a565b885160c08101516080909101516115679161155b916110dd90886112eb565b8a516060015190611b7a565b61157191906122c6565b61157b91906122b3565b905060006115ba838960000151604001518a6000015160c00151670de0b6b3a76400006115a891906122b3565b8b516060810151608090910151611b4b565b905060006115ee896000015160c00151670de0b6b3a76400006115dd91906122b3565b8a51604001516110dd908a906122c6565b90508082101561160857600080955095505050505061176d565b61162961161582846122b3565b8a5160608101516080909101519190611315565b9050670de0b6b3a7640000811061166d57885160c0015161166690610e849061165a90670de0b6b3a76400006122b3565b8b5160c0015190611b7a565b905061169c565b885160c0015161169990610e849061168d90670de0b6b3a76400006122b3565b8b5160c0015190611300565b90505b8851606001516116af9084908390611315565b925082670de0b6b3a7640000106116d9576116d283670de0b6b3a76400006122b3565b92506116ea565b60006001955095505050505061176d565b60008960e00151126117345761172d6117148a60c001518b60e00151611b7a90919063ffffffff16565b61172690670de0b6b3a76400006122b3565b84906112eb565b9250611762565b61175f61174d8a60c001518b60e0015161042d90612297565b61172690670de0b6b3a76400006122c6565b92505b509093506001925050505b935093915050565b60008060008360e001511361178f57506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906117bc90610555565b905060008082126117fe576040850151606086015183916117ed916117e190826122c6565b60208901519190611315565b6117f791906122b3565b905061182d565b61180782612297565b6040860151606087015161182091906117e190826122c6565b61182a91906122c6565b90505b60e085015160c0860151611842918390611315565b9050808560c0015161185491906122b3565b95600195509350505050565b60006101528383670de0b6b3a7640000611315565b825180516020909101516000918291829161188f91610e06565b905060006118b96114ff6114f8896000015160c00151888b60000151604001516110dd91906122b3565b875160c08101516040909101516118d7916115309161152991611b8f565b885160c08101516080909101516118f69161155b916110dd90886112eb565b61190091906122c6565b61190a91906122b3565b90506000611937838960000151604001518a6000015160c00151670de0b6b3a76400006115a891906122b3565b9050600061196b896000015160c00151670de0b6b3a764000061195a91906122b3565b8a51604001516110dd908a906122b3565b90508082101561198557600080955095505050505061176d565b61199261161582846122b3565b9050885160c0015161166690610e849061165a90670de0b6b3a76400006122b3565b6000806119c5888888888888611c0b565b9092509050806119d9576119d96000611ccd565b509695505050505050565b6000806119f48888878787611b4b565b905085871015611a0857611a086000611ccd565b611a16856110dd888a6122b3565b965086811015611a2a57611a2a6000611ccd565b6000611a428486611a3b8b866122b3565b9190611315565b9050670de0b6b3a76400008110611a6f57611a68610e84670de0b6b3a764000088611b7a565b9050611a87565b611a84610e84670de0b6b3a764000088611300565b90505b611a918185611b7a565b905088811015611aa557611aa56000611ccd565b611aaf89826122b3565b9998505050505050505050565b600080611acc8787878787611be6565b90506000611af0670de0b6b3a7640000611ae68787611b7a565b61121391906122c6565b9050670de0b6b3a76400008110611b1d57611b16610e84670de0b6b3a764000088611300565b9050611b35565b611b32610e84670de0b6b3a764000088611b7a565b90505b611b3f8185611300565b9050610eb488826122b3565b6000611b578585611b8f565b611b70611b68866110dd868b611860565b859085611315565b610b4591906122c6565b600061015283670de0b6b3a764000084611315565b600081600003611ba85750670de0b6b3a7640000610140565b82600003611bb857506000610140565b816000611bc485611ce8565b9050818102611bdb670de0b6b3a764000082612319565b9050610b4581611f04565b6000611bf28585611b8f565b611b70611c03866110dd868b6112eb565b85908561133b565b6000806000611c1d8989888888611b4b565b9050611c2d866110dd898b6122c6565b975087811015611c44576000809250925050611cc2565b6000611c558587611a3b8c866122b3565b9050670de0b6b3a76400008110611c8257611c7b610e84670de0b6b3a764000089611b7a565b9050611c9a565b611c97610e84670de0b6b3a764000089611300565b90505b611ca48186611b7a565b9050808a1115611cbb57611cb8818b6122b3565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016102119190612355565b6000808213611d0a5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611f1f57506000919050565b680755bf798b4a1bf1e58212611f48576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b604051610160810167ffffffffffffffff811182821017156120c157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156120c157634e487b7160e01b600052604160045260246000fd5b6000610160828403121561210c57600080fd5b61211461208f565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b6000610160828403121561219d57600080fd5b61015283836120f9565b6000808284036102808112156121bc57600080fd5b610260808212156121cc57600080fd5b6121d46120c7565b91506121e086866120f9565b8252610160850135602083015261018085013560408301526101a085013560608301526101c085013560808301526101e085013560a083015261020085013560c083015261022085013560e0830152610240850135610100830152909593013593505050565b600080600080600060a0868803121561225e57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016122ac576122ac612281565b5060000390565b8181038181111561014057610140612281565b8082018082111561014057610140612281565b818103600083128015838313168383128216171561021a5761021a612281565b808201828112600083128015821682158216171561054d5761054d612281565b60008261233657634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235057612350612281565b500590565b602081016004831061237757634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122014c1c35ed539acf832dd458b8dbc6b81941af06a6a0cd0b9d3c9e1ab70e8c23164736f6c63430008140033";
        readonly sourceMap: "126:2473:89:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;789:180;;;;;;:::i;:::-;;:::i;:::-;;;2082:25:184;;;2070:2;2055:18;789:180:89;;;;;;;;2251:346;;;;;;:::i;:::-;;:::i;975:179::-;;;;;;:::i;:::-;;:::i;1875:370::-;;;;;;:::i;:::-;;:::i;152:631::-;;;;;;:::i;:::-;;:::i;:::-;;;;3987:25:184;;;4043:2;4028:18;;4021:34;;;;4071:18;;;4064:34;3975:2;3960:18;152:631:89;3787:317:184;1501:368:89;;;;;;:::i;:::-;;:::i;1160:335::-;;;;;;:::i;:::-;;:::i;789:180::-;899:7;925:37;954:7;925:28;:37::i;:::-;918:44;789:180;-1:-1:-1;;789:180:89:o;2251:346::-;2427:7;2465:125;2520:7;2545:31;2465:37;:125::i;:::-;2446:144;2251:346;-1:-1:-1;;;2251:346:89:o;975:179::-;1085:6;1110:37;1139:7;1110:28;:37::i;1875:370::-;2063:7;2101:137;2168:7;2193:31;2101:49;:137::i;152:631::-;423:21;458:22;494:20;558:218;607:14;639:16;673:13;704:21;743:19;558:31;:218::i;:::-;539:237;;;;;;152:631;;;;;;;;;;:::o;1501:368::-;1688:7;1726:136;1804:7;1829:19;1726:60;:136::i;1160:335::-;1271:6;1290:20;1312:12;1328:55;1375:7;1328:46;:55::i;:::-;1289:94;;;;1401:7;1393:65;;;;-1:-1:-1;;;1393:65:89;;4311:2:184;1393:65:89;;;4293:21:184;4350:2;4330:18;;;4323:30;4389:34;4369:18;;;4362:62;-1:-1:-1;;;4440:18:184;;;4433:43;4493:19;;1393:65:89;;;;;;;;;-1:-1:-1;1475:13:89;1160:335;-1:-1:-1;;1160:335:89:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;40422:9253;40591:29;40797:1;40772:7;:21;;;:26;40768:76;;-1:-1:-1;40821:12:75;;;;40814:19;;40768:76;40853:21;40886:7;:21;;;40885:22;;;:::i;:::-;40853:55;;41431:284;41473:7;:29;;;41520:7;:31;;;41569:7;:28;;;41615:7;:26;;;:47;;;41688:7;:12;;;41680:21;;;:::i;:::-;41431:24;:284::i;:::-;41257:26;;41375:39;;;41239:476;;;;41315:42;;;;41239:476;;;;;;;;41877:26;;:40;;41939:42;;;41257:26;;41753:506;;41809:190;;41877:40;41809:46;:190::i;:::-;42017:26;;:39;;;;42080:38;;;;;42074:44;;150:4:73;42074:44:75;:::i;:::-;42136:26;;:42;;;;42196:49;;;;;41753:38;:506::i;:::-;41729:530;;42488:13;42471;:30;42467:88;;-1:-1:-1;;;42528:12:75;;;;42521:19;;42467:88;41093:1472;42638:34;42675:161;42735:7;42760:31;42809:13;42675:42;:161::i;:::-;42638:198;;42914:9;42909:5389;1188:1;42929;:43;42909:5389;;;43321:298;43363:7;:29;;;43410:7;:31;;;43459:7;:28;;;43505:7;:26;;;:47;;;43578:26;43570:35;;;:::i;43321:298::-;43147:26;;43265:39;;;43129:490;;;;43205:42;;;;43129:490;;;;;;;;43781:26;;:40;;43843:42;;;43147:26;;43657:506;;43713:190;;43781:40;43713:46;:190::i;:::-;43921:26;;:39;;;;43984:38;;;;;43978:44;;150:4:73;43978:44:75;:::i;:::-;44040:26;;:42;;;;44100:49;;;;;43657:38;:506::i;:::-;43633:530;;44351:18;44387:12;44416:137;44475:7;44504:31;44416:37;:137::i;:::-;44333:220;;;;44572:7;44567:52;;44599:5;;;;;44567:52;44809:13;44793;:29;44789:3134;;;45044:26;45020:50;;45308:113;1374:3;150:4:73;45355:44:75;;;;:::i;:::-;45308:13;;:21;:113::i;:::-;45271:13;:150;45246:263;;45462:28;;;;;;;;45246:263;46374:51;46414:10;46375:29;46391:13;46375;:29;:::i;:::-;46374:39;;:51::i;:::-;46325:100;;:26;:100;:::i;:::-;46276:149;;44789:3134;;;46634:13;46618;:29;46614:1309;;;47416:13;47432:89;47493:10;47433:29;47449:13;47433;:29;:::i;47432:89::-;47416:105;;47552:26;47543:5;:35;47539:87;;47602:5;;;;;;47539:87;47672:34;47701:5;47672:26;:34;:::i;:::-;47643:63;;46649:1072;46614:1309;;;47882:26;47875:33;;;;;;;;;;46614:1309;48097:7;:12;;;48068:26;:41;48064:121;;;48158:7;:12;;;48129:41;;48064:121;48270:3;;;;;42976:5322;;;42909:5389;;;;48416:21;48386:26;:51;48382:1248;;48645:298;48687:7;:29;;;48734:7;:31;;;48783:7;:28;;;48829:7;:26;;;:47;;;48902:26;48894:35;;;:::i;48645:298::-;48471:26;;48589:39;;;48453:490;;;;48529:42;;;;48453:490;;;;;;;;49105:26;;:40;;49167:42;;;48471:26;;48981:506;;49037:190;;49105:40;49037:46;:190::i;:::-;49245:26;;:39;;;;49308:38;;;;;49302:44;;150:4:73;49302:44:75;:::i;:::-;49364:26;;:42;;;;49424:49;;;;;48981:38;:506::i;:::-;48957:530;;49522:13;49505;:30;49501:119;;49579:26;49555:50;;49501:119;48439:1191;48382:1248;49640:28;;40422:9253;;;;:::o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;24613:10855::-;24794:7;24855:21;24921:7;:35;;;24879:7;:27;;;:77;;;;:::i;:::-;24855:101;;25033:7;:21;;;25058:1;25033:26;25029:293;;25223:35;;;;25162:28;;;;:149;;25280:13;25162:39;:149::i;:::-;25139:172;;;;;25029:293;25879:28;;;;25819:35;;;;25795:21;;25819:125;;:35;25921:13;25819:46;:125::i;:::-;25795:149;;26052:1;26028:7;:21;;;:25;26024:9407;;;26074:9;26069:5339;839:1;26089;:33;26069:5339;;;26478:309;26524:7;:29;;;26575:7;:31;;;26628:7;:28;;;26678:7;:26;;;:47;;;26755:13;26747:22;;;:::i;26478:309::-;26292:26;;26418:39;;;26270:517;;;;26354:42;;;26270:517;;;;;26871:26;;26292;;26828:87;;:21;:87::i;:::-;26805:110;;27032:183;27109:7;27142:12;27180:13;27032:51;:183::i;:::-;27007:273;;;27256:5;;;27007:273;27712:26;;:40;;27778:42;;;;27846:39;;;;27911:47;;;;27990:38;;;;;27584:21;;;;27623:570;;27712:40;;27778:42;;27846:39;;27911:47;27984:44;;150:4:73;27984:44:75;:::i;:::-;28054:26;;:42;;;;28122:49;;;;;27623:63;:570::i;:::-;27583:610;;;;28216:7;28211:60;;28247:5;;;;;28211:60;28288:18;28362:13;28336:7;:21;;;28328:47;28324:1308;;28493:212;28563:7;28596:31;28661:7;:21;;;28493:44;:212::i;:::-;28399:306;-1:-1:-1;28399:306:75;-1:-1:-1;28731:8:75;;;:29;;;150:4:73;28743:10:75;:17;;28731:29;28727:221;;;28924:1;28917:8;;;;;;;;;;;28727:221;28982:16;28988:10;150:4:73;28982:16:75;:::i;:::-;28969:29;;28324:1308;;;29234:116;29321:7;29234:61;:116::i;:::-;29137:213;;-1:-1:-1;29137:213:75;-1:-1:-1;29137:213:75;29372:200;;29548:1;29541:8;;;;;;;;;;;29372:200;29600:13;29593:20;;;;;;;;;;;28324:1308;30098:12;30211:117;30275:7;:27;;;30211:7;:28;;;:34;;:117;;;;:::i;:::-;30120:35;:12;30141:13;30120:20;:35::i;:::-;30113:237;;;;:::i;:::-;30098:252;;30380:1;30372:5;:9;30368:907;;;30561:55;30584:31;:10;30601:13;30584:16;:31::i;:::-;30569:5;;30561:22;:55::i;:::-;30521:95;;:13;:95;:::i;:::-;30481:135;;30368:907;;;30653:1;30645:5;:9;30641:634;;;30754:14;30771:102;30820:31;:10;30837:13;30820:16;:31::i;:::-;30779:6;30780:5;30779:6;:::i;30771:102::-;30754:119;;30908:13;30899:6;:22;30895:310;;;30965:22;30981:6;30965:13;:22;:::i;:::-;30949:38;;30895:310;;;31181:1;31174:8;;;;;;;;;;;;;30895:310;30656:567;30641:634;;;31251:5;;;;;;;30641:634;31372:3;;;;;26126:5282;;;;;26069:5339;;;;26024:9407;;;31496:9;31491:3930;839:1;31511;:33;31491:3930;;;31900:309;31946:7;:29;;;31997:7;:31;;;32050:7;:28;;;32100:7;:26;;;:47;;;32177:13;32169:22;;;:::i;31900:309::-;31714:26;;31840:39;;;31692:517;;;;31776:42;;;31692:517;;;;;32293:26;;31714;;32250:87;;:21;:87::i;:::-;32227:110;;32454:183;32531:7;32564:12;32602:13;32454:51;:183::i;:::-;32429:273;;;32678:5;;;32429:273;33027:18;33067:12;33100:213;33170:7;33203:31;33269:7;:21;;;33268:22;;;:::i;:::-;33100:44;:213::i;:::-;33005:308;;;;33336:7;33335:8;:29;;;;150:4:73;33347:10:75;:17;;33335:29;33331:205;;;33516:1;33509:8;;;;;;;;;;33331:205;33566:16;33572:10;150:4:73;33566:16:75;:::i;:::-;33553:29;;34049:12;34162:117;34226:7;:27;;;34162:7;:28;;;:34;;:117;;;;:::i;:::-;34071:35;:12;34092:13;34071:20;:35::i;:::-;34064:237;;;;:::i;:::-;34049:252;;34331:1;34323:5;:9;34319:969;;;34512:111;34584:13;34512:34;34520:5;34535:10;34512:22;:34::i;:111::-;34472:151;;:13;:151;:::i;:::-;34432:191;;34319:969;;;34660:1;34652:5;:9;34648:640;;;34761:14;34778:108;34872:13;34778:60;34827:10;34778:60;34787:5;34786:6;:::i;34778:108::-;34761:125;;34921:13;34912:6;:22;34908:310;;;34978:22;34994:6;34978:13;:22;:::i;:::-;34962:38;;34908:310;;;35194:1;35187:8;;;;;;;;;;;;34908:310;34663:573;34648:640;;;35264:5;;;;;;34648:640;35385:3;;;;;31548:3873;;;;31491:3930;;;;26024:9407;35448:13;24613:10855;-1:-1:-1;;;;24613:10855:75:o;2119:3268::-;2390:21;2425:22;2461:20;2616:19;2639:1;2616:24;2612:111;;-1:-1:-1;2664:14:75;;-1:-1:-1;2680:16:75;;-1:-1:-1;2698:13:75;2656:56;;2612:111;2892:21;2916:44;2941:19;2923:14;2916:44;:::i;:::-;2892:68;;2998:21;2974:14;:46;2970:118;;;3043:34;;-1:-1:-1;;;3043:34:75;;;;;;;;;;;2970:118;3121:14;3097:39;;3711:1;3691:16;:21;3687:661;;3868:134;3876:13;3931:16;3970:14;3868:33;:134::i;:::-;3826:190;;3687:661;;;4188:135;4251:17;4252:16;4251:17;:::i;:::-;4196:13;;4291:14;4188:33;:135::i;:::-;4163:174;;;:::i;:::-;4145:192;;3687:661;5064:316;5197:13;5228:138;5296:14;5332:16;5228:46;:138::i;:::-;5064:91;5124:13;5139:15;5064:59;:91::i;:::-;:115;:316;:115;:316::i;:::-;5049:331;;2496:2891;2119:3268;;;;;;;;;:::o;22132:1838::-;22312:7;22587:267;22625:7;:29;;;22668:7;:31;;;22713:7;:28;;;22755:7;:26;;;:47;;;22824:19;22816:28;;;:::i;22587:267::-;22425:26;;22535:39;;;22411:443;;;;22479:42;;;22411:443;;;;;22948:26;;22425;;;;22909:75;;:25;:75::i;:::-;22864:120;;;;23340:7;23339:8;:62;;;;23373:7;:28;;;23351:18;:50;;23339:62;23335:101;;;23424:1;23417:8;;;;;;23335:101;23685:21;23751:7;:35;;;23709:7;:27;;;:77;;;;:::i;:::-;23685:101;;23843:120;23885:18;23921:7;:28;;;23843:13;:24;;:120;;;;;:::i;:::-;23815:148;;:13;:148;:::i;:::-;23796:167;22132:1838;-1:-1:-1;;;;;;22132:1838:75:o;8492:7050::-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;15288:130::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;6998:1166::-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;13742:861:77;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;:::-;14330:8;;:12;:26::i;:::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;:::-;14577:19;13742:861;-1:-1:-1;;;;;;;;13742:861:77:o;50953:2775:75:-;51785:26;;:49;;;;51713:42;;;;;51166:7;;;;51347:525;;150:4:73;;51713:139:75;;:50;:139::i;:::-;:145;;;;:::i;:::-;51445:28;;;;51497:26;;:38;;;51347:329;;51396:31;;51491:44;;150:4:73;51491:44:75;:::i;:::-;51553:26;;:42;;;;51613:49;;;;;51347:31;:329::i;:::-;:348;;:525::i;:::-;51333:539;;150:4:73;51886:3:75;:10;51882:428;;52035:26;;:38;;;51994:94;;52019:55;;52029:44;;150:4:73;52029:44:75;:::i;:::-;150:4:73;;52019:9:75;:55::i;51994:94::-;51988:100;;51882:428;;;52246:26;;:38;;;52203:96;;52228:57;;52240:44;;150:4:73;52240:44:75;:::i;:::-;150:4:73;;52228:11:75;:57::i;52203:96::-;52197:102;;51882:428;52361:20;52367:14;52361:3;:20;:::i;:::-;52355:26;;52571:1;52536:7;:31;;;:36;52532:931;;52594:409;52696:293;52787:131;52863:7;:29;;;52795:7;:31;;;52787:46;;:131;;;;:::i;:::-;52757:161;;150:4:73;52757:161:75;:::i;:::-;52696:28;;;;;52940:31;52696:39;:293::i;:::-;52594:3;;:9;:409::i;:::-;52588:415;;52532:931;;;53040:412;53142:296;53233:134;53312:7;:29;;;53242:7;:31;;;53241:32;;;:::i;53233:134::-;53203:164;;150:4:73;53203:164:75;:::i;53040:412::-;53034:418;;52532:931;53606:7;:29;;;53599:3;:36;53595:75;;53658:1;53651:8;;;;;53595:75;53718:3;53686:7;:29;;;:35;;;;:::i;:::-;53679:42;50953:2775;-1:-1:-1;;;;;50953:2775:75:o;66411:4306::-;66891:26;;:40;;66949:42;;;;;66587:7;;;;;;66814:191;;:59;:191::i;:::-;67498:26;;:38;;;;67429:39;;;;;66781:224;;-1:-1:-1;67015:18:75;;67316:274;;67370:206;;67429:129;;:43;:129::i;:::-;67370:31;;:37;:206::i;:::-;67316:28;;;;;:36;:274::i;:::-;67252:26;;:38;;;;67100:83;;;;;67036:265;;67100:191;;:130;;67207:22;67100:106;:130::i;:::-;:151;;:191::i;:::-;67036:26;;:42;;;;:50;:265::i;:::-;:554;;;;:::i;:::-;67015:575;;67756:9;67768:296;67802:22;67838:7;:26;;;:39;;;67897:7;:26;;;:38;;;150:4:73;67891:44:75;;;;:::i;:::-;67949:26;;:42;;;;68005:49;;;;;67768:20;:296::i;:::-;67756:308;;150:4:73;68078:1:75;:8;68074:718;;68195:233;68231:183;68258:138;68336:7;:26;;;:38;;;150:4:73;68330:44:75;;;;:::i;:::-;68258:26;;:38;;;;:46;:138::i;:::-;68231:1;;:5;:183::i;:::-;68195:10;;:18;:233::i;:::-;68182:246;;68074:718;;;68550:231;68586:181;68613:136;68689:7;:26;;;:38;;;150:4:73;68683:44:75;;;;:::i;:::-;68613:26;;:38;;;;:44;:136::i;68550:231::-;68537:244;;68074:718;68976:568;69008:526;69461:55;69477:7;:26;;;:38;;;150:4:73;69471:44:75;;;;:::i;69461:55::-;69169:26;;:49;;;;69103:42;;;;;150:4:73;;69103:129:75;;:42;:48;:129::i;:::-;:135;;;;:::i;69008:526::-;68976:10;;:18;:568::i;:::-;68963:581;;69670:13;69686:89;69734:31;69686:7;:28;;;:34;;:89;;;;:::i;:::-;69670:105;;69847:5;69833:10;:19;69829:274;;69881:18;69889:10;69881:5;:18;:::i;:::-;69868:31;;69829:274;;;70083:1;70086:5;70075:17;;;;;;;;;;69829:274;70273:1;70238:7;:31;;;:36;70234:441;;70303:159;70451:10;70326:117;70396:7;:29;;;70334:7;:31;;;70326:48;;:117;;;;:::i;:::-;70304:139;;150:4:73;70304:139:75;:::i;:::-;70303:147;;:159::i;:::-;70290:172;;70234:441;;;70506:158;70653:10;70529:116;70598:7;:29;;;70538:7;:31;;;70537:32;;;:::i;70529:116::-;70507:138;;150:4:73;70507:138:75;:::i;70506:158::-;70493:171;;70234:441;-1:-1:-1;70693:10:75;;-1:-1:-1;70705:4:75;;-1:-1:-1;;;66411:4306:75;;;;;;:::o;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;823:556::-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;38963:769:75:-;39167:4;39183:26;39212:74;39262:14;39212:7;:28;;;:36;;:74;;;;:::i;:::-;39183:103;;39296:25;39324:72;39359:7;:27;;;39324:13;:21;;:72;;;;:::i;:::-;39296:100;;39430:18;39410:17;:38;39406:81;;;39471:5;39464:12;;;;;;39406:81;39536:18;39515:17;:39;;:210;;;;-1:-1:-1;39663:62:75;39690:34;1005:3;150:4:73;39690:34:75;:::i;39663:62::-;-1:-1:-1;39570:155:75;;39496:229;-1:-1:-1;;;;;38963:769:75:o;15242:1794:77:-;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:21::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;16614:28::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;54767:4623:75:-;55363:26;;:40;;55421:42;;;;;54979:7;;;;;;55286:191;;:59;:191::i;:::-;55253:224;;55487:18;56138:290;56192:222;56251:145;56336:7;:26;;;:38;;;56294:11;56252:7;:26;;;:39;;;:53;;;;:::i;56251:145::-;56192:31;;:37;:222::i;:::-;56138:28;;;;;:36;:290::i;:::-;55970:26;;:38;;;;55901:39;;;;;55788:274;;55840:208;;55901:129;;:43;:129::i;:::-;55840:31;;:39;:208::i;:::-;55788:28;;;;;:34;:274::i;:::-;55724:26;;:38;;;;55570:83;;;;;55508:265;;55570:193;;:132;;55679:22;55570:108;:132::i;:193::-;55508:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;:920;;;;:::i;:::-;55487:941;;56658:9;56670:294;56702:22;56738:7;:26;;;:39;;;56797:7;:26;;;:38;;;150:4:73;56791:44:75;;;;:::i;:::-;56849:26;;:42;;;;56905:49;;;;;56670:18;:294::i;:::-;56658:306;;56974:13;56990:118;57069:7;:26;;;:38;;;150:4:73;57063:44:75;;;;:::i;:::-;56991:26;;:39;;;:53;;57033:11;;56991:53;:::i;56990:118::-;56974:134;;57126:5;57122:1;:9;57118:201;;;57299:1;57302:5;57291:17;;;;;;;;;;57118:201;57336:147;57408:9;57412:5;57408:1;:9;:::i;:::-;57431:26;;:42;;;;57336:49;;;;;;:147;:58;:147::i;:::-;57328:155;;150:4:73;57497:5:75;:12;57493:584;;57708:26;;:38;;;57609:169;;57636:128;;57702:44;;150:4:73;57702:44:75;:::i;:::-;57636:26;;:38;;;;:44;:128::i;57609:169::-;57601:177;;57493:584;;;57996:26;;:38;;;57895:171;;57922:130;;57990:44;;150:4:73;57990:44:75;:::i;:::-;57922:26;;:38;;;;:46;:130::i;57895:171::-;57887:179;;57493:584;58229:26;;:42;;;58177:104;;:10;;58210:5;;58177:19;:104::i;:::-;58164:117;;58342:10;150:4:73;58335:17:75;58331:357;;58381:16;58387:10;150:4:73;58381:16:75;:::i;:::-;58368:29;;58331:357;;;58669:1;58672:4;58661:16;;;;;;;;;;58331:357;58862:1;58827:7;:31;;;:36;58823:525;;58892:199;58954:123;59026:7;:29;;;58962:7;:31;;;58954:46;;:123;;;;:::i;:::-;58928:149;;150:4:73;58928:149:75;:::i;:::-;58892:10;;:18;:199::i;:::-;58879:212;;58823:525;;;59135:202;59197:126;59272:7;:29;;;59206:7;:31;;;59205:32;;;:::i;59197:126::-;59171:152;;150:4:73;59171:152:75;:::i;59135:202::-;59122:215;;58823:525;-1:-1:-1;59366:10:75;;-1:-1:-1;59378:4:75;;-1:-1:-1;;;54767:4623:75;;;;;;;:::o;36150:2095::-;36301:7;36310:4;36592:1;36557:7;:31;;;:36;36553:84;;-1:-1:-1;36617:1:75;;;;-1:-1:-1;36150:2095:75;-1:-1:-1;36150:2095:75:o;36553:84::-;36759:42;;;;36716:26;;:85;36856:44;;;;36811:26;;:42;;:89;36952:28;;;;36910:26;;:39;;:70;37034:26;;36716;;37012:49;;:21;:49::i;:::-;36990:71;;37204:11;37245:1;37229:12;:17;37225:634;;37343:27;;;;37446:35;;;;37526:12;;37284:215;;37392:89;;37343:27;37392:89;:::i;:::-;37284:28;;;;;:215;:37;:215::i;:::-;:255;;;;:::i;:::-;37262:277;;37225:634;;;37834:13;37835:12;37834:13;:::i;:::-;37651:27;;;;37754:35;;;;37592:215;;37651:27;37700:89;;37651:27;37700:89;:::i;37592:215::-;:256;;;;:::i;:::-;37570:278;;37225:634;38099:31;;;;38022:29;;;;:119;;38074:3;;38022:38;:119::i;:::-;38016:125;;38228:3;38196:7;:29;;;:35;;;;:::i;:::-;38188:50;38233:4;;-1:-1:-1;36150:2095:75;-1:-1:-1;;;;36150:2095:75:o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;60429:4993:75:-;61025:26;;:40;;61083:42;;;;;60641:7;;;;;;60948:191;;:59;:191::i;:::-;60915:224;;61149:18;61803:290;61857:222;61916:145;62001:7;:26;;;:38;;;61959:11;61917:7;:26;;;:39;;;:53;;;;:::i;61803:290::-;61632:26;;:38;;;;61563:39;;;;;61450:274;;61502:208;;61563:129;;:43;:129::i;61450:274::-;61386:26;;:38;;;;61232:83;;;;;61170:265;;61232:193;;:132;;61341:22;61232:108;:132::i;61170:265::-;:554;;;;:::i;:::-;:923;;;;:::i;:::-;61149:944;;62323:9;62335:294;62367:22;62403:7;:26;;;:39;;;62462:7;:26;;;:38;;;150:4:73;62456:44:75;;;;:::i;62335:294::-;62323:306;;62639:13;62655:118;62734:7;:26;;;:38;;;150:4:73;62728:44:75;;;;:::i;:::-;62656:26;;:39;;;:53;;62698:11;;62656:53;:::i;62655:118::-;62639:134;;62791:5;62787:1;:9;62783:201;;;62964:1;62967:5;62956:17;;;;;;;;;;62783:201;63001:147;63073:9;63077:5;63073:1;:9;:::i;63001:147::-;62993:155;-1:-1:-1;63371:26:75;;:38;;;63272:169;;63299:128;;63365:44;;150:4:73;63365:44:75;:::i;9013:583:77:-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;:::-;9219:377;9013:583;;;;;;;;:::o;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;:::-;6020:14;4244:1797;-1:-1:-1;;;;;;;;;4244:1797:77:o;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;17543:343::-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;:::-;:46;;;;:::i;3390:115:73:-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;18399:352:77:-;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;10285:1320::-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;8896:34;-1:-1:-1;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;14:351:184:-;85:2;79:9;127:6;115:19;;164:18;149:34;;185:22;;;146:62;143:185;;;250:10;245:3;241:20;238:1;231:31;285:4;282:1;275:15;313:4;310:1;303:15;143:185;344:2;337:22;14:351;:::o;370:347::-;437:2;431:9;479:6;467:19;;516:18;501:34;;537:22;;;498:62;495:185;;;602:10;597:3;593:20;590:1;583:31;637:4;634:1;627:15;665:4;662:1;655:15;722:953;787:5;835:6;823:9;818:3;814:19;810:32;807:52;;;855:1;852;845:12;807:52;877:21;;:::i;:::-;868:30;;934:9;921:23;914:5;907:38;1005:2;994:9;990:18;977:32;972:2;965:5;961:14;954:56;1070:2;1059:9;1055:18;1042:32;1037:2;1030:5;1026:14;1019:56;1135:2;1124:9;1120:18;1107:32;1102:2;1095:5;1091:14;1084:56;1201:3;1190:9;1186:19;1173:33;1167:3;1160:5;1156:15;1149:58;1268:3;1257:9;1253:19;1240:33;1234:3;1227:5;1223:15;1216:58;1335:3;1324:9;1320:19;1307:33;1301:3;1294:5;1290:15;1283:58;1402:3;1391:9;1387:19;1374:33;1368:3;1361:5;1357:15;1350:58;1427:3;1490:2;1479:9;1475:18;1462:32;1457:2;1450:5;1446:14;1439:56;;1514:3;1577:2;1566:9;1562:18;1549:32;1544:2;1537:5;1533:14;1526:56;;1601:3;1664:2;1653:9;1649:18;1636:32;1631:2;1624:5;1620:14;1613:56;;722:953;;;;:::o;1680:251::-;1776:6;1829:3;1817:9;1808:7;1804:23;1800:33;1797:53;;;1846:1;1843;1836:12;1797:53;1869:56;1917:7;1906:9;1869:56;:::i;2118:1027::-;2231:6;2239;2283:9;2274:7;2270:23;2313:3;2309:2;2305:12;2302:32;;;2330:1;2327;2320:12;2302:32;2353:6;2379:2;2375;2371:11;2368:31;;;2395:1;2392;2385:12;2368:31;2421:17;;:::i;:::-;2408:30;;2461:56;2509:7;2498:9;2461:56;:::i;:::-;2447:71;;2580:3;2565:19;;2552:33;2545:4;2534:16;;2527:59;2648:3;2633:19;;2620:33;2613:4;2602:16;;2595:59;2716:3;2701:19;;2688:33;2681:4;2670:16;;2663:59;2784:3;2769:19;;2756:33;2749:4;2738:16;;2731:59;2852:3;2837:19;;2824:33;2817:4;2806:16;;2799:59;2920:3;2905:19;;2892:33;2885:4;2874:16;;2867:59;2988:3;2973:19;;2960:33;2953:4;2942:16;;2935:59;3058:3;3043:19;;3030:33;3021:6;3010:18;;3003:61;2454:5;;3120:18;;3107:32;;-1:-1:-1;;;2118:1027:184:o;3330:452::-;3423:6;3431;3439;3447;3455;3508:3;3496:9;3487:7;3483:23;3479:33;3476:53;;;3525:1;3522;3515:12;3476:53;-1:-1:-1;;3548:23:184;;;3618:2;3603:18;;3590:32;;-1:-1:-1;3669:2:184;3654:18;;3641:32;;3720:2;3705:18;;3692:32;;-1:-1:-1;3771:3:184;3756:19;3743:33;;-1:-1:-1;3330:452:184;-1:-1:-1;3330:452:184:o;4523:127::-;4584:10;4579:3;4575:20;4572:1;4565:31;4615:4;4612:1;4605:15;4639:4;4636:1;4629:15;4655:136;4690:3;-1:-1:-1;;;4711:22:184;;4708:48;;4736:18;;:::i;:::-;-1:-1:-1;4776:1:184;4772:13;;4655:136::o;4796:128::-;4863:9;;;4884:11;;;4881:37;;;4898:18;;:::i;4929:125::-;4994:9;;;5015:10;;;5012:36;;;5028:18;;:::i;5059:200::-;5125:9;;;5098:4;5153:9;;5181:10;;5193:12;;;5177:29;5216:12;;;5208:21;;5174:56;5171:82;;;5233:18;;:::i;5264:216::-;5328:9;;;5356:11;;;5303:3;5386:9;;5414:10;;5410:19;;5439:10;;5431:19;;5407:44;5404:70;;;5454:18;;:::i;5617:290::-;5656:1;5682;5672:132;;5726:10;5721:3;5717:20;5714:1;5707:31;5761:4;5758:1;5751:15;5789:4;5786:1;5779:15;5672:132;-1:-1:-1;;;5820:18:184;;-1:-1:-1;;5840:13:184;;5816:38;5813:64;;;5857:18;;:::i;:::-;-1:-1:-1;5891:10:184;;5617:290::o;5912:360::-;6076:2;6061:18;;6109:1;6098:13;;6088:144;;6154:10;6149:3;6145:20;6142:1;6135:31;6189:4;6186:1;6179:15;6217:4;6214:1;6207:15;6088:144;6241:25;;;5912:360;:::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "7d840b6d";
        readonly "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "ce2e339c";
        readonly "calculateMaxShareReservesDelta(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "5dcbd5ca";
        readonly "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "f1082448";
        readonly "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "74bbc903";
        readonly "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "37043a53";
        readonly "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleShareProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"calculateDistributeExcessIdleWithdrawalSharesRedeemed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"presentValueParams\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"startingPresentValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"activeLpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"idle\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"netCurveTrade\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"originalShareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"originalBondReserves\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.DistributeExcessIdleParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_originalEffectiveShareReserves\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShareReservesDelta\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetCurveTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculateNetFlatTrade\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct LPMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"calculateUpdateLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLPMath.sol\":\"MockLPMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"contracts/test/MockLPMath.sol\":{\"keccak256\":\"0x9a57ebeaa173f362b3b24f693beef70cad31c939b151ce8ae247005b466f850f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://498f99524a2969ba1a4e269dc93153955ab49ca0165255a2ded5b9f28fd3b613\",\"dweb:/ipfs/QmUEBKJmDvg7bSoLnYBMEAPeHenAXMFXwvdcyUrrWivvs7\"]}},\"version\":1}";
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
                readonly name: "InvalidShareReserves";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "NegativePresentValue";
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
                readonly name: "calculateMaxShareReservesDelta";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                readonly keccak256: "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3";
                readonly urls: readonly ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16";
                readonly urls: readonly ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97";
                readonly urls: readonly ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a";
                readonly urls: readonly ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002";
                readonly urls: readonly ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191";
                readonly urls: readonly ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868";
                readonly urls: readonly ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf";
                readonly urls: readonly ["bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d", "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744";
                readonly urls: readonly ["bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a", "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266";
                readonly urls: readonly ["bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244", "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b";
                readonly urls: readonly ["bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1", "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346";
                readonly urls: readonly ["bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6", "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockLPMath.sol": {
                readonly keccak256: "0x9a57ebeaa173f362b3b24f693beef70cad31c939b151ce8ae247005b466f850f";
                readonly urls: readonly ["bzz-raw://498f99524a2969ba1a4e269dc93153955ab49ca0165255a2ded5b9f28fd3b613", "dweb:/ipfs/QmUEBKJmDvg7bSoLnYBMEAPeHenAXMFXwvdcyUrrWivvs7"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockLPMath.sol";
        readonly id: 21665;
        readonly exportedSymbols: {
            readonly LPMath: readonly [17602];
            readonly MockLPMath: readonly [21664];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2561:89";
        readonly nodes: readonly [{
            readonly id: 21528;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:89";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 21530;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:89";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "contracts/src/libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 21665;
            readonly sourceUnit: 17603;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21529;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17602;
                    readonly src: "73:6:89";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21664;
            readonly nodeType: "ContractDefinition";
            readonly src: "126:2473:89";
            readonly nodes: readonly [{
                readonly id: 21559;
                readonly nodeType: "FunctionDefinition";
                readonly src: "152:631:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21558;
                    readonly nodeType: "Block";
                    readonly src: "529:254:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21551;
                                readonly name: "_shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21532;
                                readonly src: "607:14:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21552;
                                readonly name: "_shareAdjustment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21534;
                                readonly src: "639:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 21553;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21536;
                                readonly src: "673:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21554;
                                readonly name: "_minimumShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21538;
                                readonly src: "704:21:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21555;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21540;
                                readonly src: "743:19:89";
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
                                    readonly id: 21549;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "558:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21550;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "565:24:89";
                                readonly memberName: "calculateUpdateLiquidity";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15174;
                                readonly src: "558:31:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256)";
                                };
                            };
                            readonly id: 21556;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "558:218:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21548;
                        readonly id: 21557;
                        readonly nodeType: "Return";
                        readonly src: "539:237:89";
                    }];
                };
                readonly functionSelector: "b500f3cb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateUpdateLiquidity";
                readonly nameLocation: "161:24:89";
                readonly parameters: {
                    readonly id: 21541;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21532;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "203:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "195:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21531;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "195:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21534;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "234:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "227:23:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21533;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "227:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21536;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "268:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "260:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21535;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "260:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21538;
                        readonly mutability: "mutable";
                        readonly name: "_minimumShareReserves";
                        readonly nameLocation: "299:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "291:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21537;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "291:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21540;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "337:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "330:26:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21539;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "330:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "185:177:89";
                };
                readonly returnParameters: {
                    readonly id: 21548;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21543;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "431:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "423:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21542;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "423:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21545;
                        readonly mutability: "mutable";
                        readonly name: "shareAdjustment";
                        readonly nameLocation: "465:15:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "458:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21544;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "458:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21547;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "502:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21559;
                        readonly src: "494:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21546;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "494:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "409:115:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21573;
                readonly nodeType: "FunctionDefinition";
                readonly src: "789:180:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21572;
                    readonly nodeType: "Block";
                    readonly src: "908:61:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21569;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21562;
                                readonly src: "954:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 21567;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "925:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21568;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "932:21:89";
                                readonly memberName: "calculatePresentValue";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15226;
                                readonly src: "925:28:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$15197_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256)";
                                };
                            };
                            readonly id: 21570;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "925:37:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21566;
                        readonly id: 21571;
                        readonly nodeType: "Return";
                        readonly src: "918:44:89";
                    }];
                };
                readonly functionSelector: "37043a53";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculatePresentValue";
                readonly nameLocation: "798:21:89";
                readonly parameters: {
                    readonly id: 21563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21562;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "862:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21573;
                        readonly src: "829:40:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 21561;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21560;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["829:6:89", "836:18:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15197;
                                readonly src: "829:25:89";
                            };
                            readonly referencedDeclaration: 15197;
                            readonly src: "829:25:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "819:56:89";
                };
                readonly returnParameters: {
                    readonly id: 21566;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21565;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21573;
                        readonly src: "899:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21564;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "899:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "898:9:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21587;
                readonly nodeType: "FunctionDefinition";
                readonly src: "975:179:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21586;
                    readonly nodeType: "Block";
                    readonly src: "1093:61:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21583;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21576;
                                readonly src: "1139:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 21581;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "1110:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21582;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1117:21:89";
                                readonly memberName: "calculateNetFlatTrade";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15580;
                                readonly src: "1110:28:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$15197_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256)";
                                };
                            };
                            readonly id: 21584;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1110:37:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 21580;
                        readonly id: 21585;
                        readonly nodeType: "Return";
                        readonly src: "1103:44:89";
                    }];
                };
                readonly functionSelector: "74bbc903";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetFlatTrade";
                readonly nameLocation: "984:21:89";
                readonly parameters: {
                    readonly id: 21577;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21576;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1048:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21587;
                        readonly src: "1015:40:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 21575;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21574;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1015:6:89", "1022:18:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15197;
                                readonly src: "1015:25:89";
                            };
                            readonly referencedDeclaration: 15197;
                            readonly src: "1015:25:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1005:56:89";
                };
                readonly returnParameters: {
                    readonly id: 21580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21579;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21587;
                        readonly src: "1085:6:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21578;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1085:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1084:8:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21612;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1160:335:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21611;
                    readonly nodeType: "Block";
                    readonly src: "1279:216:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21596, 21598];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21596;
                            readonly mutability: "mutable";
                            readonly name: "netCurveTrade";
                            readonly nameLocation: "1297:13:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21611;
                            readonly src: "1290:20:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 21595;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1290:6:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21598;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1317:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21611;
                            readonly src: "1312:12:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 21597;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1312:4:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21603;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21601;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21590;
                                readonly src: "1375:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 21599;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "1328:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21600;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1348:26:89";
                                readonly memberName: "calculateNetCurveTradeSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15542;
                                readonly src: "1328:46:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$15197_memory_ptr_$returns$_t_int256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (int256,bool)";
                                };
                            };
                            readonly id: 21602;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1328:55:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_int256_$_t_bool_$";
                                readonly typeString: "tuple(int256,bool)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1289:94:89";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21605;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21598;
                                readonly src: "1401:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b4c504d6174683a2063616c63756c6174654e65744375727665547261646553616665206661696c6564";
                                readonly id: 21606;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1410:47:89";
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
                                readonly id: 21604;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1393:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 21607;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1393:65:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 21608;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1393:65:89";
                    }, {
                        readonly expression: {
                            readonly id: 21609;
                            readonly name: "netCurveTrade";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21596;
                            readonly src: "1475:13:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 21594;
                        readonly id: 21610;
                        readonly nodeType: "Return";
                        readonly src: "1468:20:89";
                    }];
                };
                readonly functionSelector: "f1082448";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNetCurveTrade";
                readonly nameLocation: "1169:22:89";
                readonly parameters: {
                    readonly id: 21591;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21590;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1234:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21612;
                        readonly src: "1201:40:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 21589;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21588;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["1201:6:89", "1208:18:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15197;
                                readonly src: "1201:25:89";
                            };
                            readonly referencedDeclaration: 15197;
                            readonly src: "1201:25:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15197_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1191:56:89";
                };
                readonly returnParameters: {
                    readonly id: 21594;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21593;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21612;
                        readonly src: "1271:6:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21592;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:8:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21629;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1501:368:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21628;
                    readonly nodeType: "Block";
                    readonly src: "1697:172:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21624;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21615;
                                readonly src: "1804:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 21625;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21617;
                                readonly src: "1829:19:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21622;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "1726:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21623;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1733:53:89";
                                readonly memberName: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15760;
                                readonly src: "1726:60:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$15600_memory_ptr_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21626;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1726:136:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21621;
                        readonly id: 21627;
                        readonly nodeType: "Return";
                        readonly src: "1707:155:89";
                    }];
                };
                readonly functionSelector: "ce2e339c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleWithdrawalSharesRedeemed";
                readonly nameLocation: "1510:53:89";
                readonly parameters: {
                    readonly id: 21618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21615;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1614:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21629;
                        readonly src: "1573:48:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 21614;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21613;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["1573:6:89", "1580:26:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15600;
                                readonly src: "1573:33:89";
                            };
                            readonly referencedDeclaration: 15600;
                            readonly src: "1573:33:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21617;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "1639:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21629;
                        readonly src: "1631:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21616;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1563:101:89";
                };
                readonly returnParameters: {
                    readonly id: 21621;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21620;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21629;
                        readonly src: "1688:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21619;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1688:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1687:9:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21646;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:370:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21645;
                    readonly nodeType: "Block";
                    readonly src: "2072:173:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21641;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21632;
                                readonly src: "2168:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 21642;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21634;
                                readonly src: "2193:31:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21639;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "2101:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21640;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2108:42:89";
                                readonly memberName: "calculateDistributeExcessIdleShareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 16205;
                                readonly src: "2101:49:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$15600_memory_ptr_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21643;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2101:137:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21638;
                        readonly id: 21644;
                        readonly nodeType: "Return";
                        readonly src: "2082:156:89";
                    }];
                };
                readonly functionSelector: "7d840b6d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateDistributeExcessIdleShareProceeds";
                readonly nameLocation: "1884:42:89";
                readonly parameters: {
                    readonly id: 21635;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21632;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "1977:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "1936:48:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 21631;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21630;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["1936:6:89", "1943:26:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15600;
                                readonly src: "1936:33:89";
                            };
                            readonly referencedDeclaration: 15600;
                            readonly src: "1936:33:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21634;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2002:31:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "1994:39:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21633;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1994:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1926:113:89";
                };
                readonly returnParameters: {
                    readonly id: 21638;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21637;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21646;
                        readonly src: "2063:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21636;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2063:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2062:9:89";
                };
                readonly scope: 21664;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21663;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2251:346:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21662;
                    readonly nodeType: "Block";
                    readonly src: "2436:161:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21658;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21649;
                                readonly src: "2520:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            }, {
                                readonly id: 21659;
                                readonly name: "_originalEffectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21651;
                                readonly src: "2545:31:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21656;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17602;
                                    readonly src: "2465:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17602_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 21657;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2472:30:89";
                                readonly memberName: "calculateMaxShareReservesDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 16721;
                                readonly src: "2465:37:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$15600_memory_ptr_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct LPMath.DistributeExcessIdleParams memory,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21660;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2465:125:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21655;
                        readonly id: 21661;
                        readonly nodeType: "Return";
                        readonly src: "2446:144:89";
                    }];
                };
                readonly functionSelector: "5dcbd5ca";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShareReservesDelta";
                readonly nameLocation: "2260:30:89";
                readonly parameters: {
                    readonly id: 21652;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21649;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "2341:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21663;
                        readonly src: "2300:48:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 21648;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21647;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["2300:6:89", "2307:26:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15600;
                                readonly src: "2300:33:89";
                            };
                            readonly referencedDeclaration: 15600;
                            readonly src: "2300:33:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$15600_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21651;
                        readonly mutability: "mutable";
                        readonly name: "_originalEffectiveShareReserves";
                        readonly nameLocation: "2366:31:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21663;
                        readonly src: "2358:39:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21650;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2358:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2290:113:89";
                };
                readonly returnParameters: {
                    readonly id: 21655;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21654;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21663;
                        readonly src: "2427:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21653;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2427:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2426:9:89";
                };
                readonly scope: 21664;
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
            readonly linearizedBaseContracts: readonly [21664];
            readonly name: "MockLPMath";
            readonly nameLocation: "135:10:89";
            readonly scope: 21665;
            readonly usedErrors: readonly [7286, 7298, 7319, 7328, 7337];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 89;
};
//# sourceMappingURL=MockLPMath.d.ts.map