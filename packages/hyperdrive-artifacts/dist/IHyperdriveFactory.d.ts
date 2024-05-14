export declare const IHyperdriveFactory: {
    abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorAlreadyAdded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorIndexMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeployerCoordinatorNotAdded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EndIndexTooLarge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointDurationResolution";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCircuitBreakerDelta";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDeployConfig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDeployerCoordinator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidIndexes";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxCircuitBreakerDelta";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMaxTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinCircuitBreakerDelta";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinFixedAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTimeStretchAPR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReceiveLocked";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newCheckpointDurationResolution";
            readonly type: "uint256";
        }];
        readonly name: "CheckpointDurationResolutionUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "newDefaultPausers";
            readonly type: "address[]";
        }];
        readonly name: "DefaultPausersUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "hyperdrive";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "circuitBreakerDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "config";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly name: "Deployed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }];
        readonly name: "DeployerCoordinatorAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinatorManager";
            readonly type: "address";
        }];
        readonly name: "DeployerCoordinatorManagerUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "deployerCoordinator";
            readonly type: "address";
        }];
        readonly name: "DeployerCoordinatorRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newFeeCollector";
            readonly type: "address";
        }];
        readonly name: "FeeCollectorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "hyperdriveGovernance";
            readonly type: "address";
        }];
        readonly name: "HyperdriveGovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newLinkerCodeHash";
            readonly type: "bytes32";
        }];
        readonly name: "LinkerCodeHashUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newLinkerFactory";
            readonly type: "address";
        }];
        readonly name: "LinkerFactoryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "MaxCheckpointDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxCircuitBreakerDelta";
            readonly type: "uint256";
        }];
        readonly name: "MaxCircuitBreakerDeltaUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "newMaxFees";
            readonly type: "tuple";
        }];
        readonly name: "MaxFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "MaxFixedAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "MaxPositionDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "MaxTimeStretchAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "MinCheckpointDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinCircuitBreakerDelta";
            readonly type: "uint256";
        }];
        readonly name: "MinCircuitBreakerDeltaUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "newMinFees";
            readonly type: "tuple";
        }];
        readonly name: "MinFeesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "MinFixedAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "MinPositionDurationUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMinTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "MinTimeStretchAPRUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSweepCollector";
            readonly type: "address";
        }];
        readonly name: "SweepCollectorUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_deployerCoordinator";
            readonly type: "address";
        }];
        readonly name: "addDeployerCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "checkpointDurationResolution";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultPausers";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_deployerCoordinator";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "circuitBreakerDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_contribution";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fixedAPR";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretchAPR";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "destination";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "asBase";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHyperdrive.Options";
            readonly name: "_options";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_salt";
            readonly type: "bytes32";
        }];
        readonly name: "deployAndInitialize";
        readonly outputs: readonly [{
            readonly internalType: "contract IHyperdrive";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_deployerCoordinator";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "circuitBreakerDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fixedAPR";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretchAPR";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_targetIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_salt";
            readonly type: "bytes32";
        }];
        readonly name: "deployTarget";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeCollector";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDeployerCoordinatorAtIndex";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "startIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endIndex";
            readonly type: "uint256";
        }];
        readonly name: "getDeployerCoordinatorsInRange";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "range";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getInstanceAtIndex";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "startIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endIndex";
            readonly type: "uint256";
        }];
        readonly name: "getInstancesInRange";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "range";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNumberOfDeployerCoordinators";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNumberOfInstances";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hyperdriveGovernance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "linkerCodeHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "linkerFactory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxCheckpointDuration";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxFixedAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxPositionDuration";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxTimeStretchAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minCheckpointDuration";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minFixedAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minPositionDuration";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minTimeStretchAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_deployerCoordinator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "removeDeployerCoordinator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sweepCollector";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_checkpointDurationResolution";
            readonly type: "uint256";
        }];
        readonly name: "updateCheckpointDurationResolution";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_defaultPausers_";
            readonly type: "address[]";
        }];
        readonly name: "updateDefaultPausers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_feeCollector";
            readonly type: "address";
        }];
        readonly name: "updateFeeCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }];
        readonly name: "updateGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hyperdriveGovernance";
            readonly type: "address";
        }];
        readonly name: "updateHyperdriveGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_linkerCodeHash";
            readonly type: "bytes32";
        }];
        readonly name: "updateLinkerCodeHash";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_linkerFactory";
            readonly type: "address";
        }];
        readonly name: "updateLinkerFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateMaxCheckpointDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "__maxFees";
            readonly type: "tuple";
        }];
        readonly name: "updateMaxFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "updateMaxFixedAPR";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateMaxPositionDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maxTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "updateMaxTimeStretchAPR";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_minCheckpointDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateMinCheckpointDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "curve";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceZombie";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IHyperdrive.Fees";
            readonly name: "__minFees";
            readonly type: "tuple";
        }];
        readonly name: "updateMinFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_minFixedAPR";
            readonly type: "uint256";
        }];
        readonly name: "updateMinFixedAPR";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_minPositionDuration";
            readonly type: "uint256";
        }];
        readonly name: "updateMinPositionDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_minTimeStretchAPR";
            readonly type: "uint256";
        }];
        readonly name: "updateMinTimeStretchAPR";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sweepCollector";
            readonly type: "address";
        }];
        readonly name: "updateSweepCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addDeployerCoordinator(address)": "421caba8";
        readonly "checkpointDurationResolution()": "d0f96b92";
        readonly "defaultPausers()": "a64c90bf";
        readonly "deployAndInitialize(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "b9fdb319";
        readonly "deployTarget(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "fec45139";
        readonly "feeCollector()": "c415b95c";
        readonly "getDeployerCoordinatorAtIndex(uint256)": "fe3d5aeb";
        readonly "getDeployerCoordinatorsInRange(uint256,uint256)": "ec895f11";
        readonly "getInstanceAtIndex(uint256)": "daac24da";
        readonly "getInstancesInRange(uint256,uint256)": "bc30e7a1";
        readonly "getNumberOfDeployerCoordinators()": "e1b39c80";
        readonly "getNumberOfInstances()": "6e95d67c";
        readonly "governance()": "5aa6e675";
        readonly "hyperdriveGovernance()": "e3331555";
        readonly "linkerCodeHash()": "c905a4b5";
        readonly "linkerFactory()": "99623bb1";
        readonly "maxCheckpointDuration()": "e0e2daaa";
        readonly "maxFees()": "e83e34b1";
        readonly "maxFixedAPR()": "bf9bd5cd";
        readonly "maxPositionDuration()": "8efc0986";
        readonly "maxTimeStretchAPR()": "48800760";
        readonly "minCheckpointDuration()": "5720c9d5";
        readonly "minFees()": "c1722563";
        readonly "minFixedAPR()": "d23d7ea3";
        readonly "minPositionDuration()": "daf012e6";
        readonly "minTimeStretchAPR()": "d6f50169";
        readonly "removeDeployerCoordinator(address,uint256)": "411c3035";
        readonly "sweepCollector()": "10780f73";
        readonly "updateCheckpointDurationResolution(uint256)": "11e77bfe";
        readonly "updateDefaultPausers(address[])": "9af25262";
        readonly "updateFeeCollector(address)": "d2c35ce8";
        readonly "updateGovernance(address)": "b2561263";
        readonly "updateHyperdriveGovernance(address)": "dd2b8fbb";
        readonly "updateLinkerCodeHash(bytes32)": "4fbfee77";
        readonly "updateLinkerFactory(address)": "85229785";
        readonly "updateMaxCheckpointDuration(uint256)": "6f6d5c4a";
        readonly "updateMaxFees((uint256,uint256,uint256,uint256))": "2885e3ac";
        readonly "updateMaxFixedAPR(uint256)": "97b0e8ce";
        readonly "updateMaxPositionDuration(uint256)": "eb71f66c";
        readonly "updateMaxTimeStretchAPR(uint256)": "628027a3";
        readonly "updateMinCheckpointDuration(uint256)": "8e127cf5";
        readonly "updateMinFees((uint256,uint256,uint256,uint256))": "10d1dc3e";
        readonly "updateMinFixedAPR(uint256)": "1978ebcf";
        readonly "updateMinPositionDuration(uint256)": "e71f34b3";
        readonly "updateMinTimeStretchAPR(uint256)": "83b361e8";
        readonly "updateSweepCollector(address)": "8627a4f0";
    };
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map