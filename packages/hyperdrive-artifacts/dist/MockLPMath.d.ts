export declare const MockLPMath: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateDistributeExcessIdle";
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
            readonly name: "_maxIterations";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
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
        readonly name: "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe";
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
        readonly name: "calculateInitialReserves";
        readonly inputs: readonly [{
            readonly name: "_shareAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_targetApr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_positionDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "calculateSharesDeltaGivenBondsDeltaDerivativeSafe";
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
            readonly name: "_bondAmount";
            readonly type: "int256";
            readonly internalType: "int256";
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
        readonly type: "function";
        readonly name: "shouldShortCircuitDistributeExcessIdleShareProceeds";
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
            readonly name: "_lpTotalSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_presentValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "ExpInvalidExponent";
        readonly inputs: readonly [];
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "calculateDistributeExcessIdle(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "865d65a2";
        readonly "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01";
        readonly "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256))": "cefef8b7";
        readonly "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c";
        readonly "calculateInitialReserves(uint256,uint256,uint256,uint256,uint256,uint256)": "b29e1d1e";
        readonly "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b";
        readonly "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81";
        readonly "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4";
        readonly "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3";
        readonly "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9";
        readonly "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb";
        readonly "shouldShortCircuitDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "8f1505fa";
    };
};
//# sourceMappingURL=MockLPMath.d.ts.map