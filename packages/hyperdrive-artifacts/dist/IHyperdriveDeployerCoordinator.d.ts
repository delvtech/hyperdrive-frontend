export declare const IHyperdriveDeployerCoordinator: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "deploy";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployConfig";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "vaultSharesToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sweepCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployTarget";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployConfig";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "vaultSharesToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sweepCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_targetIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_lp";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_apr";
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
        }];
        readonly outputs: readonly [{
            readonly name: "lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly name: "DeploymentAlreadyExists";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeploymentDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "HyperdriveAlreadyDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "HyperdriveIsNotDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IncompleteDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidBaseToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeAmounts";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinimumShareReserves";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinimumTransactionAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTargetIndex";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidVaultSharesToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedExtraData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SenderIsNotFactory";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TargetAlreadyDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515";
        readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86";
        readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70";
    };
};
//# sourceMappingURL=IHyperdriveDeployerCoordinator.d.ts.map