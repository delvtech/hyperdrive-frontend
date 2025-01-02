export declare const IUniV3Zap: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "addLiquidityZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_minLpSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minApr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxApr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_hyperdriveOptions";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_zapInOptions";
            readonly type: "tuple";
            readonly internalType: "struct IUniV3Zap.ZapInOptions";
            readonly components: readonly [{
                readonly name: "swapParams";
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
            }, {
                readonly name: "sourceAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sourceAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shouldWrap";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isRebasing";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "closeLongZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_swapParams";
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
        }, {
            readonly name: "_shouldWrap";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeShortZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_swapParams";
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
        }, {
            readonly name: "_shouldWrap";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "kind";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "openLongZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_hyperdriveOptions";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_zapInOptions";
            readonly type: "tuple";
            readonly internalType: "struct IUniV3Zap.ZapInOptions";
            readonly components: readonly [{
                readonly name: "swapParams";
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
            }, {
                readonly name: "sourceAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sourceAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shouldWrap";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isRebasing";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "longAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "openShortZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxDeposit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_hyperdriveOptions";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_zapInOptions";
            readonly type: "tuple";
            readonly internalType: "struct IUniV3Zap.ZapInOptions";
            readonly components: readonly [{
                readonly name: "swapParams";
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
            }, {
                readonly name: "sourceAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sourceAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shouldWrap";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isRebasing";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deposit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "redeemWithdrawalSharesZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_withdrawalShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutputPerShare";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_swapParams";
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
        }, {
            readonly name: "_shouldWrap";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "withdrawalSharesRedeemed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityZap";
        readonly inputs: readonly [{
            readonly name: "_hyperdrive";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }, {
            readonly name: "_lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutputPerShare";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_swapParams";
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
        }, {
            readonly name: "_shouldWrap";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "withdrawalShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISwapRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "InvalidInputToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidOutputToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidRecipient";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSourceAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSourceAsset";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSwap";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ShouldWrapAssets";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addLiquidityZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "1fd5fcd6";
        readonly "closeLongZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "d4951838";
        readonly "closeShortZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "ba77fd3d";
        readonly "kind()": "04baa00b";
        readonly "name()": "06fdde03";
        readonly "openLongZap(address,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "4b22d586";
        readonly "openShortZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "5bf84046";
        readonly "redeemWithdrawalSharesZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "dcda7d3d";
        readonly "removeLiquidityZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "23003ba5";
        readonly "swapRouter()": "c31c9c07";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=IUniV3Zap.d.ts.map