export declare const MockFixedPointMath: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "divDown";
        readonly inputs: readonly [{
            readonly name: "a";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "b";
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
        readonly name: "divUp";
        readonly inputs: readonly [{
            readonly name: "a";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "b";
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
        readonly name: "exp";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "ln";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "mulDivDown";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "d";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "z";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "mulDivUp";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "d";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "z";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "mulDown";
        readonly inputs: readonly [{
            readonly name: "a";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "b";
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
        readonly name: "mulUp";
        readonly inputs: readonly [{
            readonly name: "a";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "b";
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
        readonly name: "pow";
        readonly inputs: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
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
        readonly name: "updateWeightedAverage";
        readonly inputs: readonly [{
            readonly name: "_average";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_totalWeight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_delta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWeight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_isAdding";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "average";
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
        readonly name: "LnInvalidInput";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
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