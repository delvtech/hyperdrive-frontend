export declare const MockAssetId: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "assetIdToName";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assetIdToSymbol";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decodeAssetId";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum AssetId.AssetIdPrefix";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encodeAssetId";
        readonly inputs: readonly [{
            readonly name: "_prefix";
            readonly type: "uint8";
            readonly internalType: "enum AssetId.AssetIdPrefix";
        }, {
            readonly name: "_timestamp";
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
        readonly type: "error";
        readonly name: "InvalidTimestamp";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "assetIdToName(uint256)": "3c8c28ad";
        readonly "assetIdToSymbol(uint256)": "957462ac";
        readonly "decodeAssetId(uint256)": "6322c751";
        readonly "encodeAssetId(uint8,uint256)": "8a227c39";
    };
};
//# sourceMappingURL=MockAssetId.d.ts.map