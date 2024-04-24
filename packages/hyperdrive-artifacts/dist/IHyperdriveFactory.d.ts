export declare const IHyperdriveFactory: {
    abi: readonly [{
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
    methodIdentifiers: {};
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map