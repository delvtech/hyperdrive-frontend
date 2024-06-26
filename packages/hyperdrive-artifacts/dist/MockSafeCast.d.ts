export declare const MockSafeCast: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "toInt128";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "y";
            readonly type: "int128";
            readonly internalType: "int128";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toInt128";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "y";
            readonly type: "int128";
            readonly internalType: "int128";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toInt256";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toUint112";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "y";
            readonly type: "uint112";
            readonly internalType: "uint112";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toUint128";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "y";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt128";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint112";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint128";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "toInt128(int256)": "dd2a0316";
        readonly "toInt128(uint256)": "0f2422d1";
        readonly "toInt256(uint256)": "dfbe873b";
        readonly "toUint112(uint256)": "41d2aa64";
        readonly "toUint128(uint256)": "809fdd33";
    };
};
//# sourceMappingURL=MockSafeCast.d.ts.map