export declare const LPMath: {
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
        readonly name: "calculatePresentValueSafe";
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
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateUpdateLiquiditySafe";
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
        }, {
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
        readonly "calculateDistributeExcessIdle(LPMath.DistributeExcessIdleParams,uint256)": "2c03ef68";
        readonly "calculateInitialReserves(uint256,uint256,uint256,uint256,uint256,uint256)": "b29e1d1e";
        readonly "calculatePresentValue(LPMath.PresentValueParams)": "bf3aa156";
        readonly "calculatePresentValueSafe(LPMath.PresentValueParams)": "5a1b419e";
        readonly "calculateUpdateLiquiditySafe(uint256,int256,uint256,uint256,int256)": "d0b457ce";
    };
};
//# sourceMappingURL=LPMath.d.ts.map