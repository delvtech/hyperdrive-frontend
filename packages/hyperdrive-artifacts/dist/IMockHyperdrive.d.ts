export declare const IMockHyperdrive: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "accrue";
        readonly inputs: readonly [{
            readonly name: "time";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "apr";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "calculateTimeRemaining";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
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
        readonly name: "calculateTimeRemainingScaled";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
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
        readonly name: "getGovernanceFeesAccrued";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestCheckpoint";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setReserves";
        readonly inputs: readonly [{
            readonly name: "shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateLiquidity";
        readonly inputs: readonly [{
            readonly name: "shareReservesDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "accrue(uint256,int256)": "68096239";
        readonly "calculateTimeRemaining(uint256)": "68c2ecb8";
        readonly "calculateTimeRemainingScaled(uint256)": "ca6d38f7";
        readonly "getGovernanceFeesAccrued()": "8e67f87e";
        readonly "latestCheckpoint()": "907c0f92";
        readonly "setReserves(uint256,uint256)": "8392b8c0";
        readonly "updateLiquidity(uint256)": "ced09112";
    };
};
//# sourceMappingURL=IMockHyperdrive.d.ts.map