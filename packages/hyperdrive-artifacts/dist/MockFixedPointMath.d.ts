export declare const MockFixedPointMath: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
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
            readonly internalType: "int256";
            readonly name: "a";
            readonly type: "int256";
        }];
        readonly name: "abs";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "divDown";
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
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "divUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "exp";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "r";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "ln";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "d";
            readonly type: "uint256";
        }];
        readonly name: "mulDivDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "z";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "d";
            readonly type: "uint256";
        }];
        readonly name: "mulDivUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "z";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "mulDown";
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
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "mulUp";
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
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }];
        readonly name: "pow";
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
            readonly name: "_average";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalWeight";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_delta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_deltaWeight";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isAdding";
            readonly type: "bool";
        }];
        readonly name: "updateWeightedAverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "average";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "abs(int256)": "1b5ac4b5";
        readonly "divDown(uint256,uint256)": "9ba5f52e";
        readonly "divUp(uint256,uint256)": "cbe8623f";
        readonly "exp(int256)": "e46751e3";
        readonly "ln(int256)": "8e6f2353";
        readonly "mulDivDown(uint256,uint256,uint256)": "b67bee04";
        readonly "mulDivUp(uint256,uint256,uint256)": "12bd6ac0";
        readonly "mulDown(uint256,uint256)": "0c9b9881";
        readonly "mulUp(uint256,uint256)": "f3e4f87c";
        readonly "pow(uint256,uint256)": "2e4c697f";
        readonly "updateWeightedAverage(uint256,uint256,uint256,uint256,bool)": "81e5f7c9";
    };
};
//# sourceMappingURL=MockFixedPointMath.d.ts.map