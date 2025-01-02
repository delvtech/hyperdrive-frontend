export const IUniV3Zap = {
    abi: [
        {
            "type": "function",
            "name": "addLiquidityZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_hyperdriveOptions",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_zapInOptions",
                    "type": "tuple",
                    "internalType": "struct IUniV3Zap.ZapInOptions",
                    "components": [
                        {
                            "name": "swapParams",
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
                        },
                        {
                            "name": "sourceAsset",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sourceAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shouldWrap",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isRebasing",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "closeLongZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_swapParams",
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
                },
                {
                    "name": "_shouldWrap",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShortZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_swapParams",
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
                },
                {
                    "name": "_shouldWrap",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "kind",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "openLongZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_hyperdriveOptions",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_zapInOptions",
                    "type": "tuple",
                    "internalType": "struct IUniV3Zap.ZapInOptions",
                    "components": [
                        {
                            "name": "swapParams",
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
                        },
                        {
                            "name": "sourceAsset",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sourceAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shouldWrap",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isRebasing",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "longAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "openShortZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_hyperdriveOptions",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_zapInOptions",
                    "type": "tuple",
                    "internalType": "struct IUniV3Zap.ZapInOptions",
                    "components": [
                        {
                            "name": "swapParams",
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
                        },
                        {
                            "name": "sourceAsset",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sourceAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shouldWrap",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isRebasing",
                            "type": "bool",
                            "internalType": "bool"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deposit",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "redeemWithdrawalSharesZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_swapParams",
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
                },
                {
                    "name": "_shouldWrap",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "withdrawalSharesRedeemed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeLiquidityZap",
            "inputs": [
                {
                    "name": "_hyperdrive",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                },
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_swapParams",
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
                },
                {
                    "name": "_shouldWrap",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "proceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "swapRouter",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ISwapRouter"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "version",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "error",
            "name": "InvalidInputToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidOutputToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidRecipient",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSourceAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSourceAsset",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSwap",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTransfer",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ShouldWrapAssets",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "addLiquidityZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "1fd5fcd6",
        "closeLongZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "d4951838",
        "closeShortZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "ba77fd3d",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "openLongZap(address,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "4b22d586",
        "openShortZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "5bf84046",
        "redeemWithdrawalSharesZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "dcda7d3d",
        "removeLiquidityZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "23003ba5",
        "swapRouter()": "c31c9c07",
        "version()": "54fd4d50"
    }
};
