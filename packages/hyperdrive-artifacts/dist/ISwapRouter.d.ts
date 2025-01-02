export declare const ISwapRouter: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "exactInput";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct ISwapRouter.ExactInputParams";
            readonly components: readonly [{
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountIn";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "exactInputSingle";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct ISwapRouter.ExactInputSingleParams";
            readonly components: readonly [{
                readonly name: "tokenIn";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountIn";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sqrtPriceLimitX96";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "exactOutput";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct ISwapRouter.ExactOutputParams";
            readonly components: readonly [{
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountInMaximum";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "exactOutputSingle";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct ISwapRouter.ExactOutputSingleParams";
            readonly components: readonly [{
                readonly name: "tokenIn";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountInMaximum";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sqrtPriceLimitX96";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "exactInput((bytes,address,uint256,uint256,uint256))": "c04b8d59";
        readonly "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": "414bf389";
        readonly "exactOutput((bytes,address,uint256,uint256,uint256))": "f28c0498";
        readonly "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": "db3e2198";
    };
};
//# sourceMappingURL=ISwapRouter.d.ts.map