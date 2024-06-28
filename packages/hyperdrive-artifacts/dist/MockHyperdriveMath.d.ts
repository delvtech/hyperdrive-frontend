export declare const MockHyperdriveMath: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateAbsoluteMaxLong";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
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
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longExposure";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
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
                readonly name: "curveFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "flatFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governanceLPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_spotPrice";
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
        readonly name: "calculateCloseLong";
        readonly inputs: readonly [{
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
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
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
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
        readonly name: "calculateCloseShort";
        readonly inputs: readonly [{
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
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
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
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
        readonly name: "calculateEffectiveShareReserves";
        readonly inputs: readonly [{
            readonly name: "_shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareAdjustment";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateMaxLong";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
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
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longExposure";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
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
                readonly name: "curveFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "flatFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governanceLPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_checkpointExposure";
            readonly type: "int256";
            readonly internalType: "int256";
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
        readonly name: "calculateMaxShort";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
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
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longExposure";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
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
                readonly name: "curveFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "flatFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governanceLPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_checkpointExposure";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_maxIterations";
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
        readonly name: "calculateNegativeInterestOnClose";
        readonly inputs: readonly [{
            readonly name: "_shareProceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareReservesDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareCurveDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_totalGovernanceFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_isLong";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateOpenLong";
        readonly inputs: readonly [{
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
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
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateOpenShort";
        readonly inputs: readonly [{
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
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
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateShortProceedsDown";
        readonly inputs: readonly [{
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_flatFee";
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
        readonly name: "calculateShortProceedsUp";
        readonly inputs: readonly [{
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_shareAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_flatFee";
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
        readonly name: "calculateSpotAPR";
        readonly inputs: readonly [{
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialVaultSharePrice";
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
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateSpotPrice";
        readonly inputs: readonly [{
            readonly name: "_shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretch";
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
        readonly name: "calculateTimeStretch";
        readonly inputs: readonly [{
            readonly name: "apr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "positionDuration";
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
        readonly type: "error";
        readonly name: "ExpInvalidExponent";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientLiquidity";
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
        readonly "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282";
        readonly "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49";
        readonly "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2";
        readonly "calculateEffectiveShareReserves(uint256,int256)": "bc1e1065";
        readonly "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "3f77b617";
        readonly "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "9e489b99";
        readonly "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87";
        readonly "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36";
        readonly "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d";
        readonly "calculateShortProceedsDown(uint256,uint256,uint256,uint256,uint256,uint256)": "e7acd3ad";
        readonly "calculateShortProceedsUp(uint256,uint256,uint256,uint256,uint256,uint256)": "902b1099";
        readonly "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036";
        readonly "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed";
        readonly "calculateTimeStretch(uint256,uint256)": "dbab8512";
    };
};
//# sourceMappingURL=MockHyperdriveMath.d.ts.map