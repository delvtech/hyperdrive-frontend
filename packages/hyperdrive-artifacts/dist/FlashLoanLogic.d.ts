export declare const FlashLoanLogic: {
    abi: readonly [{
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "executeFlashLoan(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.UserConfigurationMap storage,DataTypes.FlashloanParams)": "2e7263ea";
        readonly "executeFlashLoanSimple(DataTypes.ReserveData storage,DataTypes.FlashloanSimpleParams)": "a1fe0e8d";
    };
};
//# sourceMappingURL=FlashLoanLogic.d.ts.map