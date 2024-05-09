export declare const EtchingVault: {
    abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_baseToken_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "asset";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "convertToAssets";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "asset()": "38d52e0f";
        readonly "convertToAssets(uint256)": "07a2d13a";
    };
};
//# sourceMappingURL=EtchingVault.d.ts.map