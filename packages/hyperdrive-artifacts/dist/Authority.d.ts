export declare const Authority: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "canCall";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "canCall(address,address,bytes4)": "b7009613";
    };
};
//# sourceMappingURL=Authority.d.ts.map