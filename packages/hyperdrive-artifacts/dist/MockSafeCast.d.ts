export declare const MockSafeCast: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint112";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toInt128";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "y";
            readonly type: "int128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "toInt128";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "y";
            readonly type: "int128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toInt256";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "y";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toUint112";
        readonly outputs: readonly [{
            readonly internalType: "uint112";
            readonly name: "y";
            readonly type: "uint112";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toUint128";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "y";
            readonly type: "uint128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
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