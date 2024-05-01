export declare const IRenzoOracle: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateMintAmount";
        readonly inputs: readonly [{
            readonly name: "_currentValueInProtocol";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_newValueAdded";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_existingEzETHSupply";
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
        readonly name: "calculateRedeemAmount";
        readonly inputs: readonly [{
            readonly name: "_ezETHBeingBurned";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_existingEzETHSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_currentValueInProtocol";
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
        readonly name: "lookupTokenAmountFromValue";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lookupTokenValue";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "_balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lookupTokenValues";
        readonly inputs: readonly [{
            readonly name: "_tokens";
            readonly type: "address[]";
            readonly internalType: "contract IERC20[]";
        }, {
            readonly name: "_balances";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a";
        readonly "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0";
        readonly "lookupTokenAmountFromValue(address,uint256)": "37933625";
        readonly "lookupTokenValue(address,uint256)": "0052e3fd";
        readonly "lookupTokenValues(address[],uint256[])": "ba28a571";
    };
};
//# sourceMappingURL=IRenzoOracle.d.ts.map