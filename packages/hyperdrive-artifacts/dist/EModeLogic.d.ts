export declare const EModeLogic: {
    abi: readonly [{
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "executeSetUserEMode(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,mapping(address => uint8) storage,DataTypes.UserConfigurationMap storage,DataTypes.ExecuteSetUserEModeParams)": "5d5dc313";
    };
};
//# sourceMappingURL=EModeLogic.d.ts.map