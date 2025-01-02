export declare const LiquidationLogic: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "CLOSE_FACTOR_HF_THRESHOLD";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_LIQUIDATION_CLOSE_FACTOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "CLOSE_FACTOR_HF_THRESHOLD()": "a18964a5";
        readonly "MAX_LIQUIDATION_CLOSE_FACTOR()": "d2467544";
        readonly "executeLiquidationCall(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(address => DataTypes.UserConfigurationMap) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.ExecuteLiquidationCallParams)": "83c1087d";
    };
};
//# sourceMappingURL=LiquidationLogic.d.ts.map