export declare const IHyperdriveFactory: {
    abi: readonly [{
        readonly type: "function";
        readonly name: "addDeployerCoordinator";
        readonly inputs: readonly [{
            readonly name: "_deployerCoordinator";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkpointDurationResolution";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "checkpointRewarder";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "defaultPausers";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deployAndInitialize";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployerCoordinator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "__name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_config";
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
                readonly name: "circuitBreakerDelta";
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
                readonly name: "checkpointRewarder";
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
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_fixedAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretchAPR";
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
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IHyperdrive";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "deployTarget";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployerCoordinator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_config";
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
                readonly name: "circuitBreakerDelta";
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
                readonly name: "checkpointRewarder";
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
            readonly name: "_fixedAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_timeStretchAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "deployerCoordinatorManager";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployerCoordinatorAtIndex";
        readonly inputs: readonly [{
            readonly name: "_index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployerCoordinatorByInstances";
        readonly inputs: readonly [{
            readonly name: "__instances";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "coordinators";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployerCoordinatorsInRange";
        readonly inputs: readonly [{
            readonly name: "_startIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_endIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "range";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstanceAtIndex";
        readonly inputs: readonly [{
            readonly name: "_index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getInstancesInRange";
        readonly inputs: readonly [{
            readonly name: "_startIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_endIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "range";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNumberOfDeployerCoordinators";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNumberOfInstances";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "governance";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hyperdriveGovernance";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isDeployerCoordinator";
        readonly inputs: readonly [{
            readonly name: "_deployerCoordinator";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isInstance";
        readonly inputs: readonly [{
            readonly name: "_instance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "kind";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "linkerCodeHash";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "linkerFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxCheckpointDuration";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxCircuitBreakerDelta";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxFees";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxFixedAPR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxPositionDuration";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxTimeStretchAPR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minCheckpointDuration";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minCircuitBreakerDelta";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minFees";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minFixedAPR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minPositionDuration";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "minTimeStretchAPR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "removeDeployerCoordinator";
        readonly inputs: readonly [{
            readonly name: "_deployerCoordinator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sweepCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateCheckpointDurationResolution";
        readonly inputs: readonly [{
            readonly name: "_checkpointDurationResolution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateCheckpointRewarder";
        readonly inputs: readonly [{
            readonly name: "_checkpointRewarder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateDefaultPausers";
        readonly inputs: readonly [{
            readonly name: "_defaultPausers_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateDeployerCoordinatorManager";
        readonly inputs: readonly [{
            readonly name: "_deployerCoordinatorManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateFeeCollector";
        readonly inputs: readonly [{
            readonly name: "_feeCollector";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateGovernance";
        readonly inputs: readonly [{
            readonly name: "_governance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateHyperdriveGovernance";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveGovernance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateLinkerCodeHash";
        readonly inputs: readonly [{
            readonly name: "_linkerCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateLinkerFactory";
        readonly inputs: readonly [{
            readonly name: "_linkerFactory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxCheckpointDuration";
        readonly inputs: readonly [{
            readonly name: "_maxCheckpointDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxCircuitBreakerDelta";
        readonly inputs: readonly [{
            readonly name: "_maxCircuitBreakerDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxFees";
        readonly inputs: readonly [{
            readonly name: "__maxFees";
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
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxFixedAPR";
        readonly inputs: readonly [{
            readonly name: "_maxFixedAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxPositionDuration";
        readonly inputs: readonly [{
            readonly name: "_maxPositionDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMaxTimeStretchAPR";
        readonly inputs: readonly [{
            readonly name: "_maxTimeStretchAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinCheckpointDuration";
        readonly inputs: readonly [{
            readonly name: "_minCheckpointDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinCircuitBreakerDelta";
        readonly inputs: readonly [{
            readonly name: "_minCircuitBreakerDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinFees";
        readonly inputs: readonly [{
            readonly name: "__minFees";
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
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinFixedAPR";
        readonly inputs: readonly [{
            readonly name: "_minFixedAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinPositionDuration";
        readonly inputs: readonly [{
            readonly name: "_minPositionDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateMinTimeStretchAPR";
        readonly inputs: readonly [{
            readonly name: "_minTimeStretchAPR";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateSweepCollector";
        readonly inputs: readonly [{
            readonly name: "_sweepCollector";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "event";
        readonly name: "CheckpointDurationResolutionUpdated";
        readonly inputs: readonly [{
            readonly name: "newCheckpointDurationResolution";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CheckpointRewarderUpdated";
        readonly inputs: readonly [{
            readonly name: "newCheckpointRewarder";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DefaultPausersUpdated";
        readonly inputs: readonly [{
            readonly name: "newDefaultPausers";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deployed";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "hyperdrive";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "name";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "config";
            readonly type: "tuple";
            readonly indexed: false;
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
                readonly name: "circuitBreakerDelta";
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
                readonly name: "checkpointRewarder";
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
            readonly name: "extraData";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeployerCoordinatorAdded";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeployerCoordinatorManagerUpdated";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinatorManager";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeployerCoordinatorRemoved";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeeCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newFeeCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "governance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HyperdriveGovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "hyperdriveGovernance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LinkerCodeHashUpdated";
        readonly inputs: readonly [{
            readonly name: "newLinkerCodeHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LinkerFactoryUpdated";
        readonly inputs: readonly [{
            readonly name: "newLinkerFactory";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxCheckpointDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxCheckpointDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxCircuitBreakerDeltaUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxCircuitBreakerDelta";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxFeesUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxFees";
            readonly type: "tuple";
            readonly indexed: false;
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
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxFixedAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxFixedAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxPositionDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxPositionDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxTimeStretchAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxTimeStretchAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinCheckpointDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinCheckpointDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinCircuitBreakerDeltaUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinCircuitBreakerDelta";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinFeesUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinFees";
            readonly type: "tuple";
            readonly indexed: false;
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
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinFixedAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinFixedAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinPositionDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinPositionDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinTimeStretchAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinTimeStretchAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SweepCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newSweepCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorAlreadyAdded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorIndexMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorNotAdded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "EndIndexTooLarge";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDurationResolution";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCircuitBreakerDelta";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDeployConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDeployerCoordinator";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidIndexes";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxCircuitBreakerDelta";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinCircuitBreakerDelta";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReceiveLocked";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    bytecode: `0x${string}`;
    methodIdentifiers: {
        readonly "addDeployerCoordinator(address)": "421caba8";
        readonly "checkpointDurationResolution()": "d0f96b92";
        readonly "checkpointRewarder()": "f2596458";
        readonly "defaultPausers()": "a64c90bf";
        readonly "deployAndInitialize(bytes32,address,string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "2e7cd971";
        readonly "deployTarget(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "49f13de7";
        readonly "deployerCoordinatorManager()": "e4e7148f";
        readonly "feeCollector()": "c415b95c";
        readonly "getDeployerCoordinatorAtIndex(uint256)": "fe3d5aeb";
        readonly "getDeployerCoordinatorByInstances(address[])": "1b59be0c";
        readonly "getDeployerCoordinatorsInRange(uint256,uint256)": "ec895f11";
        readonly "getInstanceAtIndex(uint256)": "daac24da";
        readonly "getInstancesInRange(uint256,uint256)": "bc30e7a1";
        readonly "getNumberOfDeployerCoordinators()": "e1b39c80";
        readonly "getNumberOfInstances()": "6e95d67c";
        readonly "governance()": "5aa6e675";
        readonly "hyperdriveGovernance()": "e3331555";
        readonly "isDeployerCoordinator(address)": "f8c09e59";
        readonly "isInstance(address)": "6b44e6be";
        readonly "kind()": "04baa00b";
        readonly "linkerCodeHash()": "c905a4b5";
        readonly "linkerFactory()": "99623bb1";
        readonly "maxCheckpointDuration()": "e0e2daaa";
        readonly "maxCircuitBreakerDelta()": "4554f9a9";
        readonly "maxFees()": "e83e34b1";
        readonly "maxFixedAPR()": "bf9bd5cd";
        readonly "maxPositionDuration()": "8efc0986";
        readonly "maxTimeStretchAPR()": "48800760";
        readonly "minCheckpointDuration()": "5720c9d5";
        readonly "minCircuitBreakerDelta()": "1ecda0fe";
        readonly "minFees()": "c1722563";
        readonly "minFixedAPR()": "d23d7ea3";
        readonly "minPositionDuration()": "daf012e6";
        readonly "minTimeStretchAPR()": "d6f50169";
        readonly "name()": "06fdde03";
        readonly "removeDeployerCoordinator(address,uint256)": "411c3035";
        readonly "sweepCollector()": "10780f73";
        readonly "updateCheckpointDurationResolution(uint256)": "11e77bfe";
        readonly "updateCheckpointRewarder(address)": "3e2d2014";
        readonly "updateDefaultPausers(address[])": "9af25262";
        readonly "updateDeployerCoordinatorManager(address)": "a98a46db";
        readonly "updateFeeCollector(address)": "d2c35ce8";
        readonly "updateGovernance(address)": "b2561263";
        readonly "updateHyperdriveGovernance(address)": "dd2b8fbb";
        readonly "updateLinkerCodeHash(bytes32)": "4fbfee77";
        readonly "updateLinkerFactory(address)": "85229785";
        readonly "updateMaxCheckpointDuration(uint256)": "6f6d5c4a";
        readonly "updateMaxCircuitBreakerDelta(uint256)": "84c19aab";
        readonly "updateMaxFees((uint256,uint256,uint256,uint256))": "2885e3ac";
        readonly "updateMaxFixedAPR(uint256)": "97b0e8ce";
        readonly "updateMaxPositionDuration(uint256)": "eb71f66c";
        readonly "updateMaxTimeStretchAPR(uint256)": "628027a3";
        readonly "updateMinCheckpointDuration(uint256)": "8e127cf5";
        readonly "updateMinCircuitBreakerDelta(uint256)": "2907d3dd";
        readonly "updateMinFees((uint256,uint256,uint256,uint256))": "10d1dc3e";
        readonly "updateMinFixedAPR(uint256)": "1978ebcf";
        readonly "updateMinPositionDuration(uint256)": "e71f34b3";
        readonly "updateMinTimeStretchAPR(uint256)": "83b361e8";
        readonly "updateSweepCollector(address)": "8627a4f0";
        readonly "version()": "54fd4d50";
    };
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map