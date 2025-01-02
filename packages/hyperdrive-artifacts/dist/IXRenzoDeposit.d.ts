export declare const IXRenzoDeposit: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "getMintRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "lastPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lastPriceTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "xezETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "getMintRate()": "96f0bd61";
        readonly "xezETH()": "152b2c4f";
    };
};
//# sourceMappingURL=IXRenzoDeposit.d.ts.map