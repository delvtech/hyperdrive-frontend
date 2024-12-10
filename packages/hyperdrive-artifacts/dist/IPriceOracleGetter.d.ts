export declare const IPriceOracleGetter: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "BASE_CURRENCY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "BASE_CURRENCY_UNIT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAssetPrice";
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "BASE_CURRENCY()": "e19f4700";
        readonly "BASE_CURRENCY_UNIT()": "8c89b64f";
        readonly "getAssetPrice(address)": "b3596f07";
    };
};
//# sourceMappingURL=IPriceOracleGetter.d.ts.map