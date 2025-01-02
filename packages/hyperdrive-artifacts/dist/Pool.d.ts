export declare const Pool: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "ADDRESSES_PROVIDER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPoolAddressesProvider";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "BRIDGE_PROTOCOL_FEE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "FLASHLOAN_PREMIUM_TOTAL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "FLASHLOAN_PREMIUM_TO_PROTOCOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_NUMBER_RESERVES";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "backUnbacked";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrow";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "configureEModeCategory";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "category";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.EModeCategory";
            readonly components: readonly [{
                readonly name: "ltv";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "liquidationThreshold";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "liquidationBonus";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "priceSource";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "label";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "dropReserve";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "finalizeTransfer";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balanceFromBefore";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balanceToBefore";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "flashLoan";
        readonly inputs: readonly [{
            readonly name: "receiverAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "interestRateModes";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "flashLoanSimple";
        readonly inputs: readonly [{
            readonly name: "receiverAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getBorrowLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getBridgeLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getConfiguration";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getEModeCategoryData";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.EModeCategory";
            readonly components: readonly [{
                readonly name: "ltv";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "liquidationThreshold";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "liquidationBonus";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "priceSource";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "label";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getEModeLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getFlashLoanLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getLiquidationGracePeriod";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getLiquidationLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getPoolLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getReserveAddressById";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserveData";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveDataLegacy";
            readonly components: readonly [{
                readonly name: "configuration";
                readonly type: "tuple";
                readonly internalType: "struct DataTypes.ReserveConfigurationMap";
                readonly components: readonly [{
                    readonly name: "data";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "liquidityIndex";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentLiquidityRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "variableBorrowIndex";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentVariableBorrowRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentStableBorrowRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "id";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "aTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stableDebtTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "variableDebtTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "interestRateStrategyAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "accruedToTreasury";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "unbacked";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "isolationModeTotalDebt";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserveDataExtended";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveData";
            readonly components: readonly [{
                readonly name: "configuration";
                readonly type: "tuple";
                readonly internalType: "struct DataTypes.ReserveConfigurationMap";
                readonly components: readonly [{
                    readonly name: "data";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "liquidityIndex";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentLiquidityRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "variableBorrowIndex";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentVariableBorrowRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "currentStableBorrowRate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "id";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "liquidationGracePeriodUntil";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "aTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stableDebtTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "variableDebtTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "interestRateStrategyAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "accruedToTreasury";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "unbacked";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "isolationModeTotalDebt";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "virtualUnderlyingBalance";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserveNormalizedIncome";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserveNormalizedVariableDebt";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReservesCount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReservesList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getSupplyLogic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getUserAccountData";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "totalCollateralBase";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalDebtBase";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "availableBorrowsBase";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "currentLiquidationThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "ltv";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "healthFactor";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUserConfiguration";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.UserConfigurationMap";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUserEMode";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVirtualUnderlyingBalance";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initReserve";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "aTokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stableDebtAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "variableDebtAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "interestRateStrategyAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly internalType: "contract IPoolAddressesProvider";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "liquidationCall";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "debtAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "debtToCover";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiveAToken";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mintToTreasury";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mintUnbacked";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rebalanceStableBorrowRate";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repay";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayWithATokens";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayWithPermit";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "permitV";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "permitR";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "permitS";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rescueTokens";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resetIsolationModeTotalDebt";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setConfiguration";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "configuration";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.ReserveConfigurationMap";
            readonly components: readonly [{
                readonly name: "data";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setLiquidationGracePeriod";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "until";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setReserveInterestRateStrategyAddress";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "rateStrategyAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUserEMode";
        readonly inputs: readonly [{
            readonly name: "categoryId";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUserUseReserveAsCollateral";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "useAsCollateral";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supply";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supplyWithPermit";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "permitV";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "permitR";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "permitS";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapBorrowRateMode";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapToVariable";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "syncIndexesState";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "syncRatesState";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateBridgeProtocolFee";
        readonly inputs: readonly [{
            readonly name: "protocolFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateFlashloanPremiums";
        readonly inputs: readonly [{
            readonly name: "flashLoanPremiumTotal";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "flashLoanPremiumToProtocol";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BackUnbacked";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "backer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "fee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Borrow";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "enum DataTypes.InterestRateMode";
        }, {
            readonly name: "borrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly indexed: true;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FlashLoan";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "initiator";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "enum DataTypes.InterestRateMode";
        }, {
            readonly name: "premium";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly indexed: true;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IsolationModeTotalDebtUpdated";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "totalDebt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiquidationCall";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "debtAsset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "debtToCover";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidatedCollateralAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiveAToken";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MintUnbacked";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly indexed: true;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MintedToTreasury";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amountMinted";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RebalanceStableBorrowRate";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Repay";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "repayer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "useATokens";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ReserveDataUpdated";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "liquidityRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ReserveDataUpdated";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "liquidityRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ReserveUsedAsCollateralDisabled";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ReserveUsedAsCollateralEnabled";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Supply";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "referralCode";
            readonly type: "uint16";
            readonly indexed: true;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SwapBorrowRateMode";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "interestRateMode";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "enum DataTypes.InterestRateMode";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "UserEModeSet";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "categoryId";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "ADDRESSES_PROVIDER()": "0542975c";
        readonly "BRIDGE_PROTOCOL_FEE()": "272d9072";
        readonly "FLASHLOAN_PREMIUM_TOTAL()": "074b2e43";
        readonly "FLASHLOAN_PREMIUM_TO_PROTOCOL()": "6a99c036";
        readonly "MAX_NUMBER_RESERVES()": "f8119d51";
        readonly "MAX_STABLE_RATE_BORROW_SIZE_PERCENT()": "e82fec2f";
        readonly "backUnbacked(address,uint256,uint256)": "d65dc7a1";
        readonly "borrow(address,uint256,uint256,uint16,address)": "a415bcad";
        readonly "configureEModeCategory(uint8,(uint16,uint16,uint16,address,string))": "d579ea7d";
        readonly "deposit(address,uint256,address,uint16)": "e8eda9df";
        readonly "dropReserve(address)": "63c9b860";
        readonly "finalizeTransfer(address,address,address,uint256,uint256,uint256)": "d5ed3933";
        readonly "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": "ab9c4b5d";
        readonly "flashLoanSimple(address,address,uint256,bytes,uint16)": "42b0b77c";
        readonly "getBorrowLogic()": "2be29fa7";
        readonly "getBridgeLogic()": "df374c36";
        readonly "getConfiguration(address)": "c44b11f7";
        readonly "getEModeCategoryData(uint8)": "6c6f6ae1";
        readonly "getEModeLogic()": "f32b9a73";
        readonly "getFlashLoanLogic()": "348fde0f";
        readonly "getLiquidationGracePeriod(address)": "5c9a8b18";
        readonly "getLiquidationLogic()": "911a3413";
        readonly "getPoolLogic()": "d3350155";
        readonly "getReserveAddressById(uint16)": "52751797";
        readonly "getReserveData(address)": "35ea6a75";
        readonly "getReserveDataExtended(address)": "8381995f";
        readonly "getReserveNormalizedIncome(address)": "d15e0053";
        readonly "getReserveNormalizedVariableDebt(address)": "386497fd";
        readonly "getReservesCount()": "72218d04";
        readonly "getReservesList()": "d1946dbc";
        readonly "getSupplyLogic()": "870e7744";
        readonly "getUserAccountData(address)": "bf92857c";
        readonly "getUserConfiguration(address)": "4417a583";
        readonly "getUserEMode(address)": "eddf1b79";
        readonly "getVirtualUnderlyingBalance(address)": "6fb07f96";
        readonly "initReserve(address,address,address,address,address)": "7a708e92";
        readonly "initialize(address)": "c4d66de8";
        readonly "liquidationCall(address,address,address,uint256,bool)": "00a718a9";
        readonly "mintToTreasury(address[])": "9cd19996";
        readonly "mintUnbacked(address,uint256,address,uint16)": "69a933a5";
        readonly "rebalanceStableBorrowRate(address,address)": "cd112382";
        readonly "repay(address,uint256,uint256,address)": "573ade81";
        readonly "repayWithATokens(address,uint256,uint256)": "2dad97d4";
        readonly "repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)": "ee3e210b";
        readonly "rescueTokens(address,address,uint256)": "cea9d26f";
        readonly "resetIsolationModeTotalDebt(address)": "e43e88a1";
        readonly "setConfiguration(address,(uint256))": "f51e435b";
        readonly "setLiquidationGracePeriod(address,uint40)": "b1a99e26";
        readonly "setReserveInterestRateStrategyAddress(address,address)": "1d2118f9";
        readonly "setUserEMode(uint8)": "28530a47";
        readonly "setUserUseReserveAsCollateral(address,bool)": "5a3b74b9";
        readonly "supply(address,uint256,address,uint16)": "617ba037";
        readonly "supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)": "02c205f0";
        readonly "swapBorrowRateMode(address,uint256)": "94ba89a2";
        readonly "swapToVariable(address,address)": "2520d5ee";
        readonly "syncIndexesState(address)": "ab2b51f6";
        readonly "syncRatesState(address)": "98c7da4e";
        readonly "updateBridgeProtocolFee(uint256)": "3036b439";
        readonly "updateFlashloanPremiums(uint128,uint128)": "bcb6e522";
        readonly "withdraw(address,uint256,address)": "69328dec";
    };
};
//# sourceMappingURL=Pool.d.ts.map