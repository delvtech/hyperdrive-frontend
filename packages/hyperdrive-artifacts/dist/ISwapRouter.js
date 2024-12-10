export const ISwapRouter = {
    abi: [
        {
            "type": "function",
            "name": "exactInput",
            "inputs": [
                {
                    "name": "params",
                    "type": "tuple",
                    "internalType": "struct ISwapRouter.ExactInputParams",
                    "components": [
                        {
                            "name": "path",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "recipient",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountIn",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountOutMinimum",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "amountOut",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "exactInputSingle",
            "inputs": [
                {
                    "name": "params",
                    "type": "tuple",
                    "internalType": "struct ISwapRouter.ExactInputSingleParams",
                    "components": [
                        {
                            "name": "tokenIn",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "tokenOut",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fee",
                            "type": "uint24",
                            "internalType": "uint24"
                        },
                        {
                            "name": "recipient",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountIn",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountOutMinimum",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "sqrtPriceLimitX96",
                            "type": "uint160",
                            "internalType": "uint160"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "amountOut",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "exactOutput",
            "inputs": [
                {
                    "name": "params",
                    "type": "tuple",
                    "internalType": "struct ISwapRouter.ExactOutputParams",
                    "components": [
                        {
                            "name": "path",
                            "type": "bytes",
                            "internalType": "bytes"
                        },
                        {
                            "name": "recipient",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountOut",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInMaximum",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "exactOutputSingle",
            "inputs": [
                {
                    "name": "params",
                    "type": "tuple",
                    "internalType": "struct ISwapRouter.ExactOutputSingleParams",
                    "components": [
                        {
                            "name": "tokenIn",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "tokenOut",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fee",
                            "type": "uint24",
                            "internalType": "uint24"
                        },
                        {
                            "name": "recipient",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountOut",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "amountInMaximum",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "sqrtPriceLimitX96",
                            "type": "uint160",
                            "internalType": "uint160"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "exactInput((bytes,address,uint256,uint256,uint256))": "c04b8d59",
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": "414bf389",
        "exactOutput((bytes,address,uint256,uint256,uint256))": "f28c0498",
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": "db3e2198"
    }
};
