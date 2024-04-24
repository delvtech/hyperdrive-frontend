export declare const SafeERC20: {
    abi: readonly [{
        readonly type: "error";
        readonly name: "SafeERC20FailedDecreaseAllowance";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "currentAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "requestedDecrease";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {};
};
//# sourceMappingURL=SafeERC20.d.ts.map