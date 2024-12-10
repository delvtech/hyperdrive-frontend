export declare const SupplyLogic: {
    abi: readonly [{
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
        readonly "executeFinalizeTransfer(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,mapping(address => DataTypes.UserConfigurationMap) storage,DataTypes.FinalizeTransferParams)": "8a5dadd1";
        readonly "executeSupply(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,DataTypes.UserConfigurationMap storage,DataTypes.ExecuteSupplyParams)": "1913f161";
        readonly "executeUseReserveAsCollateral(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.UserConfigurationMap storage,address,bool,uint256,address,uint8)": "bf697a26";
        readonly "executeWithdraw(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.UserConfigurationMap storage,DataTypes.ExecuteWithdrawParams)": "186dea44";
    };
};
//# sourceMappingURL=SupplyLogic.d.ts.map