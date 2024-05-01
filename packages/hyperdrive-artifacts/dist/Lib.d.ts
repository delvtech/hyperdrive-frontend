export declare const Lib: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "eq";
        readonly inputs: readonly [{
            readonly name: "b1";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "b2";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "neq";
        readonly inputs: readonly [{
            readonly name: "b1";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "b2";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "eq(bytes,bytes)": "cdb16840";
        readonly "neq(bytes,bytes)": "d37a20ba";
    };
};
//# sourceMappingURL=Lib.d.ts.map