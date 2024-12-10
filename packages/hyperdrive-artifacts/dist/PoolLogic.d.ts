export declare const PoolLogic: {
    abi: readonly [{
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "executeDropReserve(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,address)": "9cf57023";
        readonly "executeGetUserAccountData(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.CalculateUserAccountDataParams)": "26ec273f";
        readonly "executeInitReserve(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,DataTypes.InitReserveParams)": "69fc1bdf";
        readonly "executeMintToTreasury(mapping(address => DataTypes.ReserveData) storage,address[])": "48c2ca8c";
        readonly "executeRescueTokens(address,address,uint256)": "87b322b2";
        readonly "executeResetIsolationModeTotalDebt(mapping(address => DataTypes.ReserveData) storage,address)": "1e3b4145";
        readonly "executeSetLiquidationGracePeriod(mapping(address => DataTypes.ReserveData) storage,address,uint40)": "6ae43813";
    };
};
//# sourceMappingURL=PoolLogic.d.ts.map