export declare const IReserveInterestRateStrategy: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateInterestRates";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.CalculateInterestRatesParams";
            readonly components: readonly [{
                readonly name: "unbacked";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityAdded";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityTaken";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalStableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalVariableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "averageStableBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveFactor";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserve";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "usingVirtualBalance";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "virtualUnderlyingBalance";
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
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setInterestRateParams";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "rateData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "calculateInterestRates((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,bool,uint256))": "f6849b9e";
        readonly "setInterestRateParams(address,bytes)": "a8d9e56f";
    };
};
//# sourceMappingURL=IReserveInterestRateStrategy.d.ts.map