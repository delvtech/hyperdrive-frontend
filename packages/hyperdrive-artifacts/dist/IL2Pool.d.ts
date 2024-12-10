export declare const IL2Pool: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "borrow";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "liquidationCall";
        readonly inputs: readonly [{
            readonly name: "args1";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "args2";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rebalanceStableBorrowRate";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repay";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayWithATokens";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayWithPermit";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUserUseReserveAsCollateral";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supply";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supplyWithPermit";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapBorrowRateMode";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "args";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "borrow(bytes32)": "d5eed868";
        readonly "liquidationCall(bytes32,bytes32)": "fd21ecff";
        readonly "rebalanceStableBorrowRate(bytes32)": "427da177";
        readonly "repay(bytes32)": "563dd613";
        readonly "repayWithATokens(bytes32)": "dc7c0bff";
        readonly "repayWithPermit(bytes32,bytes32,bytes32)": "94b576de";
        readonly "setUserUseReserveAsCollateral(bytes32)": "4d013f03";
        readonly "supply(bytes32)": "f7a73840";
        readonly "supplyWithPermit(bytes32,bytes32,bytes32)": "680dd47c";
        readonly "swapBorrowRateMode(bytes32)": "1fe3c6f3";
        readonly "withdraw(bytes32)": "8e19899e";
    };
};
//# sourceMappingURL=IL2Pool.d.ts.map