export declare const ReserveLogic: {
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
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=ReserveLogic.d.ts.map