export declare const Lib: {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "b1";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "b2";
            readonly type: "string";
        }];
        readonly name: "eq";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "b1";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "b2";
            readonly type: "bytes";
        }];
        readonly name: "eq";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "b1";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "b2";
            readonly type: "bytes";
        }];
        readonly name: "neq";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "eq(bytes,bytes)": "cdb16840";
        readonly "eq(string,string)": "21a49642";
        readonly "neq(bytes,bytes)": "d37a20ba";
    };
};
//# sourceMappingURL=Lib.d.ts.map