export declare const MockYieldSpaceMath: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dz";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateBondsOutGivenSharesInDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxBuyBondsOutSafe";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxBuySharesInSafe";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "z";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "zeta";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxSellBondsInSafe";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dy";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateSharesInGivenBondsOutDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dy";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateSharesInGivenBondsOutUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dy";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateSharesOutGivenBondsInDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dy";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "calculateSharesOutGivenBondsInDownSafe";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "kDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "ze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "t";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "c";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mu";
            readonly type: "uint256";
        }];
        readonly name: "kUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
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