export declare const CornConversions: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "convertToBase";
        readonly inputs: readonly [{
            readonly name: "_shareAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "_baseAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "convertToBase(uint256)": "b88fed9f";
        readonly "convertToShares(uint256)": "c6e6f592";
    };
};
//# sourceMappingURL=CornConversions.d.ts.map