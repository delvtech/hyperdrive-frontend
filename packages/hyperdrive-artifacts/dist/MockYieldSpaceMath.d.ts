export declare const MockYieldSpaceMath: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "calculateBondsOutGivenSharesInDown";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dz";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "calculateMaxBuyBondsOutSafe";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateMaxBuySharesInSafe";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateMaxSellBondsInSafe";
        readonly inputs: readonly [{
            readonly name: "z";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zeta";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "calculateSharesInGivenBondsOutDown";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "calculateSharesInGivenBondsOutUp";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "calculateSharesOutGivenBondsInDown";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "calculateSharesOutGivenBondsInDownSafe";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "kDown";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "kUp";
        readonly inputs: readonly [{
            readonly name: "ze";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "t";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "c";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mu";
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
        readonly name: "ExpInvalidExponent";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientLiquidity";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LnInvalidInput";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "calculateBondsOutGivenSharesInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "86c85e10";
        readonly "calculateMaxBuyBondsOutSafe(uint256,uint256,uint256,uint256,uint256)": "a9afa373";
        readonly "calculateMaxBuySharesInSafe(uint256,uint256,uint256,uint256,uint256)": "5880b9fd";
        readonly "calculateMaxSellBondsInSafe(uint256,int256,uint256,uint256,uint256,uint256,uint256)": "bc50ebe6";
        readonly "calculateSharesInGivenBondsOutDown(uint256,uint256,uint256,uint256,uint256,uint256)": "a4a6f9d9";
        readonly "calculateSharesInGivenBondsOutUp(uint256,uint256,uint256,uint256,uint256,uint256)": "2e74108c";
        readonly "calculateSharesOutGivenBondsInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "27d0e265";
        readonly "calculateSharesOutGivenBondsInDownSafe(uint256,uint256,uint256,uint256,uint256,uint256)": "3ee4114a";
        readonly "kDown(uint256,uint256,uint256,uint256,uint256)": "d79d0835";
        readonly "kUp(uint256,uint256,uint256,uint256,uint256)": "0aea7563";
    };
};
//# sourceMappingURL=MockYieldSpaceMath.d.ts.map