export declare const IIrm: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "borrowRate";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "market";
            readonly type: "tuple";
            readonly internalType: "struct Market";
            readonly components: readonly [{
                readonly name: "totalSupplyAssets";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalSupplyShares";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalBorrowAssets";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalBorrowShares";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "lastUpdate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "fee";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrowRateView";
        readonly inputs: readonly [{
            readonly name: "marketParams";
            readonly type: "tuple";
            readonly internalType: "struct MarketParams";
            readonly components: readonly [{
                readonly name: "loanToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "collateralToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "oracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lltv";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "market";
            readonly type: "tuple";
            readonly internalType: "struct Market";
            readonly components: readonly [{
                readonly name: "totalSupplyAssets";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalSupplyShares";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalBorrowAssets";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "totalBorrowShares";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "lastUpdate";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "fee";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
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
        readonly "borrowRate((address,address,address,address,uint256),(uint128,uint128,uint128,uint128,uint128,uint128))": "9451fed4";
        readonly "borrowRateView((address,address,address,address,uint256),(uint128,uint128,uint128,uint128,uint128,uint128))": "8c00bf6b";
    };
};
//# sourceMappingURL=IIrm.d.ts.map