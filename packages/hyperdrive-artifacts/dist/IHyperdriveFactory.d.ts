export declare const IHyperdriveFactory: {
    readonly abi: readonly [{
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
        readonly name: "InsufficientValue";
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
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0xa006f6e749f15c87b4538e589d11120c154453fc98036c1cda20074f2d4e52af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e35b0883b33f30d703176bd264a0353cbe20f3d6cfd1d9cde0f6e056aab00768\",\"dweb:/ipfs/QmcJCQLyyk3uQosUjYQtDGAsYeso8zuC2fLnraC9sDQyp7\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorAlreadyAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorIndexMismatch";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorNotAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "EndIndexTooLarge";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientValue";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDurationResolution";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployConfig";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployerCoordinator";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidIndexes";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newCheckpointDurationResolution";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "newDefaultPausers";
                    readonly type: "address[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "DefaultPausersUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "hyperdrive";
                    readonly type: "address";
                    readonly indexed: false;
                }, {
                    readonly internalType: "struct IHyperdrive.PoolDeployConfig";
                    readonly name: "config";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
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
                        readonly internalType: "struct IHyperdrive.Fees";
                        readonly name: "fees";
                        readonly type: "tuple";
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
                    }];
                    readonly indexed: false;
                }, {
                    readonly internalType: "bytes";
                    readonly name: "extraData";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deployed";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorAdded";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorRemoved";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newFeeCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "FeeCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "governance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "hyperdriveGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "newLinkerCodeHash";
                    readonly type: "bytes32";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerCodeHashUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newLinkerFactory";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerFactoryUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMaxFees";
                    readonly type: "tuple";
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
                }];
                readonly type: "event";
                readonly name: "MaxFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMinFees";
                    readonly type: "tuple";
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
                }];
                readonly type: "event";
                readonly name: "MinFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinTimeStretchAPRUpdated";
                readonly anonymous: false;
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/interfaces/IHyperdriveFactory.sol": "IHyperdriveFactory";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317";
                readonly urls: readonly ["bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213", "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76";
                readonly urls: readonly ["bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb", "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56";
                readonly urls: readonly ["bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8", "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveFactory.sol": {
                readonly keccak256: "0xa006f6e749f15c87b4538e589d11120c154453fc98036c1cda20074f2d4e52af";
                readonly urls: readonly ["bzz-raw://e35b0883b33f30d703176bd264a0353cbe20f3d6cfd1d9cde0f6e056aab00768", "dweb:/ipfs/QmcJCQLyyk3uQosUjYQtDGAsYeso8zuC2fLnraC9sDQyp7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveFactory.sol";
        readonly id: 8256;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [7616];
            readonly IHyperdriveFactory: readonly [8255];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8775:49";
        readonly nodes: readonly [{
            readonly id: 8064;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:49";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 8066;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:49";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8256;
            readonly sourceUnit: 7617;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8065;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7616;
                    readonly src: "73:11:49";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8255;
            readonly nodeType: "ContractDefinition";
            readonly src: "114:8699:49";
            readonly nodes: readonly [{
                readonly id: 8078;
                readonly nodeType: "EventDefinition";
                readonly src: "229:164:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8067;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "169:55:49";
                    readonly text: "@notice Emitted when a Hyperdrive pool is deployed.";
                };
                readonly eventSelector: "2b2f18d6a5803b503bcb3d887ccd7a77aa7e1e644a4c99effef843bf3e307157";
                readonly name: "Deployed";
                readonly nameLocation: "235:8:49";
                readonly parameters: {
                    readonly id: 8077;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8069;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "269:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8078;
                        readonly src: "253:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8068;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "253:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8071;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "306:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8078;
                        readonly src: "298:18:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8070;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "298:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8074;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "config";
                        readonly nameLocation: "355:6:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8078;
                        readonly src: "326:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 8073;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8072;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["326:11:49", "338:16:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7368;
                                readonly src: "326:28:49";
                            };
                            readonly referencedDeclaration: 7368;
                            readonly src: "326:28:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8076;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "extraData";
                        readonly nameLocation: "377:9:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8078;
                        readonly src: "371:15:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 8075;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "371:5:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "243:149:49";
                };
            }, {
                readonly id: 8083;
                readonly nodeType: "EventDefinition";
                readonly src: "461:68:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8079;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "399:57:49";
                    readonly text: "@notice Emitted when a deployer coordinator is added.";
                };
                readonly eventSelector: "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3";
                readonly name: "DeployerCoordinatorAdded";
                readonly nameLocation: "467:24:49";
                readonly parameters: {
                    readonly id: 8082;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8081;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "508:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8083;
                        readonly src: "492:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8080;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "492:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "491:37:49";
                };
            }, {
                readonly id: 8088;
                readonly nodeType: "EventDefinition";
                readonly src: "599:70:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8084;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "535:59:49";
                    readonly text: "@notice Emitted when a deployer coordinator is removed.";
                };
                readonly eventSelector: "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0";
                readonly name: "DeployerCoordinatorRemoved";
                readonly nameLocation: "605:26:49";
                readonly parameters: {
                    readonly id: 8087;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8086;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "648:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8088;
                        readonly src: "632:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8085;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "632:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "631:37:49";
                };
            }, {
                readonly id: 8094;
                readonly nodeType: "EventDefinition";
                readonly src: "744:57:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8089;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "675:64:49";
                    readonly text: "@notice Emitted when the list of default pausers is updated.";
                };
                readonly eventSelector: "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38";
                readonly name: "DefaultPausersUpdated";
                readonly nameLocation: "750:21:49";
                readonly parameters: {
                    readonly id: 8093;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8092;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newDefaultPausers";
                        readonly nameLocation: "782:17:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8094;
                        readonly src: "772:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 8090;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "772:7:49";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 8091;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "772:9:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "771:29:49";
                };
            }, {
                readonly id: 8099;
                readonly nodeType: "EventDefinition";
                readonly src: "890:59:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8095;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:78:49";
                    readonly text: "@notice Emitted when the fee collector used in new deployments is updated.";
                };
                readonly eventSelector: "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f";
                readonly name: "FeeCollectorUpdated";
                readonly nameLocation: "896:19:49";
                readonly parameters: {
                    readonly id: 8098;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8097;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newFeeCollector";
                        readonly nameLocation: "932:15:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8099;
                        readonly src: "916:31:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8096;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "916:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "915:33:49";
                };
            }, {
                readonly id: 8104;
                readonly nodeType: "EventDefinition";
                readonly src: "1021:52:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8100;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "955:61:49";
                    readonly text: "@notice Emitted when the factory's governance is updated.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "1027:17:49";
                readonly parameters: {
                    readonly id: 8103;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8102;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "1061:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8104;
                        readonly src: "1045:26:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8101;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1045:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1044:28:49";
                };
            }, {
                readonly id: 8109;
                readonly nodeType: "EventDefinition";
                readonly src: "1183:72:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8105;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1079:99:49";
                    readonly text: "@notice Emitted when the governance address used in new deployments is\n         updated.";
                };
                readonly eventSelector: "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly nameLocation: "1189:27:49";
                readonly parameters: {
                    readonly id: 8108;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8107;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdriveGovernance";
                        readonly nameLocation: "1233:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8109;
                        readonly src: "1217:36:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8106;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1217:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1216:38:49";
                };
            }, {
                readonly id: 8114;
                readonly nodeType: "EventDefinition";
                readonly src: "1361:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8110;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1261:95:49";
                    readonly text: "@notice Emitted when the linker factory used in new deployments is\n         updated.";
                };
                readonly eventSelector: "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418";
                readonly name: "LinkerFactoryUpdated";
                readonly nameLocation: "1367:20:49";
                readonly parameters: {
                    readonly id: 8113;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8112;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerFactory";
                        readonly nameLocation: "1404:16:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8114;
                        readonly src: "1388:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8111;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1388:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1387:34:49";
                };
            }, {
                readonly id: 8119;
                readonly nodeType: "EventDefinition";
                readonly src: "1530:63:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8115;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1428:97:49";
                    readonly text: "@notice Emitted when the linker code hash used in new deployments is\n         updated.";
                };
                readonly eventSelector: "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0";
                readonly name: "LinkerCodeHashUpdated";
                readonly nameLocation: "1536:21:49";
                readonly parameters: {
                    readonly id: 8118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8117;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerCodeHash";
                        readonly nameLocation: "1574:17:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8119;
                        readonly src: "1558:33:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 8116;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1558:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1557:35:49";
                };
            }, {
                readonly id: 8124;
                readonly nodeType: "EventDefinition";
                readonly src: "1675:97:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8120;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1599:71:49";
                    readonly text: "@notice Emitted when the checkpoint duration resolution is updated.";
                };
                readonly eventSelector: "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly nameLocation: "1681:35:49";
                readonly parameters: {
                    readonly id: 8123;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8122;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newCheckpointDurationResolution";
                        readonly nameLocation: "1734:31:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8124;
                        readonly src: "1726:39:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8121;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1726:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1716:55:49";
                };
            }, {
                readonly id: 8129;
                readonly nodeType: "EventDefinition";
                readonly src: "1851:69:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8125;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1778:68:49";
                    readonly text: "@notice Emitted when the maximum checkpoint duration is updated.";
                };
                readonly eventSelector: "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly nameLocation: "1857:28:49";
                readonly parameters: {
                    readonly id: 8128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8127;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxCheckpointDuration";
                        readonly nameLocation: "1894:24:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8129;
                        readonly src: "1886:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8126;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1886:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1885:34:49";
                };
            }, {
                readonly id: 8134;
                readonly nodeType: "EventDefinition";
                readonly src: "1999:69:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8130;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1926:68:49";
                    readonly text: "@notice Emitted when the minimum checkpoint duration is updated.";
                };
                readonly eventSelector: "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631";
                readonly name: "MinCheckpointDurationUpdated";
                readonly nameLocation: "2005:28:49";
                readonly parameters: {
                    readonly id: 8133;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8132;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinCheckpointDuration";
                        readonly nameLocation: "2042:24:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8134;
                        readonly src: "2034:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8131;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2034:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2033:34:49";
                };
            }, {
                readonly id: 8139;
                readonly nodeType: "EventDefinition";
                readonly src: "2145:65:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8135;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2074:66:49";
                    readonly text: "@notice Emitted when the maximum position duration is updated.";
                };
                readonly eventSelector: "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b";
                readonly name: "MaxPositionDurationUpdated";
                readonly nameLocation: "2151:26:49";
                readonly parameters: {
                    readonly id: 8138;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8137;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxPositionDuration";
                        readonly nameLocation: "2186:22:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8139;
                        readonly src: "2178:30:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8136;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2178:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2177:32:49";
                };
            }, {
                readonly id: 8144;
                readonly nodeType: "EventDefinition";
                readonly src: "2287:65:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8140;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2216:66:49";
                    readonly text: "@notice Emitted when the minimum position duration is updated.";
                };
                readonly eventSelector: "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178";
                readonly name: "MinPositionDurationUpdated";
                readonly nameLocation: "2293:26:49";
                readonly parameters: {
                    readonly id: 8143;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8142;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinPositionDuration";
                        readonly nameLocation: "2328:22:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8144;
                        readonly src: "2320:30:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8141;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2320:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2319:32:49";
                };
            }, {
                readonly id: 8149;
                readonly nodeType: "EventDefinition";
                readonly src: "2421:49:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8145;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2358:58:49";
                    readonly text: "@notice Emitted when the maximum fixed APR is updated.";
                };
                readonly eventSelector: "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978";
                readonly name: "MaxFixedAPRUpdated";
                readonly nameLocation: "2427:18:49";
                readonly parameters: {
                    readonly id: 8148;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8147;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFixedAPR";
                        readonly nameLocation: "2454:14:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8149;
                        readonly src: "2446:22:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8146;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2446:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2445:24:49";
                };
            }, {
                readonly id: 8154;
                readonly nodeType: "EventDefinition";
                readonly src: "2539:49:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8150;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2476:58:49";
                    readonly text: "@notice Emitted when the minimum fixed APR is updated.";
                };
                readonly eventSelector: "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191";
                readonly name: "MinFixedAPRUpdated";
                readonly nameLocation: "2545:18:49";
                readonly parameters: {
                    readonly id: 8153;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8152;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFixedAPR";
                        readonly nameLocation: "2572:14:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8154;
                        readonly src: "2564:22:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8151;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2564:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2563:24:49";
                };
            }, {
                readonly id: 8159;
                readonly nodeType: "EventDefinition";
                readonly src: "2664:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8155;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2594:65:49";
                    readonly text: "@notice Emitted when the maximum time stretch APR is updated.";
                };
                readonly eventSelector: "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly nameLocation: "2670:24:49";
                readonly parameters: {
                    readonly id: 8158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8157;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxTimeStretchAPR";
                        readonly nameLocation: "2703:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8159;
                        readonly src: "2695:28:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8156;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2695:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2694:30:49";
                };
            }, {
                readonly id: 8164;
                readonly nodeType: "EventDefinition";
                readonly src: "2801:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8160;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2731:65:49";
                    readonly text: "@notice Emitted when the minimum time stretch APR is updated.";
                };
                readonly eventSelector: "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46";
                readonly name: "MinTimeStretchAPRUpdated";
                readonly nameLocation: "2807:24:49";
                readonly parameters: {
                    readonly id: 8163;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8162;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinTimeStretchAPR";
                        readonly nameLocation: "2840:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8164;
                        readonly src: "2832:28:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8161;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2832:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2831:30:49";
                };
            }, {
                readonly id: 8170;
                readonly nodeType: "EventDefinition";
                readonly src: "2927:50:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8165;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2868:54:49";
                    readonly text: "@notice Emitted when the maximum fees are updated.";
                };
                readonly eventSelector: "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7";
                readonly name: "MaxFeesUpdated";
                readonly nameLocation: "2933:14:49";
                readonly parameters: {
                    readonly id: 8169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8168;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFees";
                        readonly nameLocation: "2965:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8170;
                        readonly src: "2948:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 8167;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8166;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["2948:11:49", "2960:4:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7332;
                                readonly src: "2948:16:49";
                            };
                            readonly referencedDeclaration: 7332;
                            readonly src: "2948:16:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7332_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2947:29:49";
                };
            }, {
                readonly id: 8176;
                readonly nodeType: "EventDefinition";
                readonly src: "3042:50:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8171;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:54:49";
                    readonly text: "@notice Emitted when the minimum fees are updated.";
                };
                readonly eventSelector: "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421";
                readonly name: "MinFeesUpdated";
                readonly nameLocation: "3048:14:49";
                readonly parameters: {
                    readonly id: 8175;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8174;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFees";
                        readonly nameLocation: "3080:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8176;
                        readonly src: "3063:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 8173;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8172;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["3063:11:49", "3075:4:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7332;
                                readonly src: "3063:16:49";
                            };
                            readonly referencedDeclaration: 7332;
                            readonly src: "3063:16:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7332_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3062:29:49";
                };
            }, {
                readonly id: 8179;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3241:40:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8177;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3118:118:49";
                    readonly text: "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added.";
                };
                readonly errorSelector: "bd34634f";
                readonly name: "DeployerCoordinatorAlreadyAdded";
                readonly nameLocation: "3247:31:49";
                readonly parameters: {
                    readonly id: 8178;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3278:2:49";
                };
            }, {
                readonly id: 8182;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3406:36:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8180;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3287:114:49";
                    readonly text: "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added.";
                };
                readonly errorSelector: "4bf121ab";
                readonly name: "DeployerCoordinatorNotAdded";
                readonly nameLocation: "3412:27:49";
                readonly parameters: {
                    readonly id: 8181;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3439:2:49";
                };
            }, {
                readonly id: 8185;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3633:41:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8183;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3448:180:49";
                    readonly text: "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators.";
                };
                readonly errorSelector: "3c9c032c";
                readonly name: "DeployerCoordinatorIndexMismatch";
                readonly nameLocation: "3639:32:49";
                readonly parameters: {
                    readonly id: 8184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3671:2:49";
                };
            }, {
                readonly id: 8188;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3788:25:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8186;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3680:103:49";
                    readonly text: "@notice Thrown when the ending index of a range is larger than the\n         underlying list.";
                };
                readonly errorSelector: "e0f7becb";
                readonly name: "EndIndexTooLarge";
                readonly nameLocation: "3794:16:49";
                readonly parameters: {
                    readonly id: 8187;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3810:2:49";
                };
            }, {
                readonly id: 8191;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3959:26:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8189;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3819:135:49";
                    readonly text: "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance.";
                };
                readonly errorSelector: "11011294";
                readonly name: "InsufficientValue";
                readonly nameLocation: "3965:17:49";
                readonly parameters: {
                    readonly id: 8190;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3982:2:49";
                };
            }, {
                readonly id: 8194;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4283:34:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8192;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3991:287:49";
                    readonly text: "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations.";
                };
                readonly errorSelector: "5428734d";
                readonly name: "InvalidCheckpointDuration";
                readonly nameLocation: "4289:25:49";
                readonly parameters: {
                    readonly id: 8193;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4314:2:49";
                };
            }, {
                readonly id: 8197;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4618:44:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8195;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4323:290:49";
                    readonly text: "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration.";
                };
                readonly errorSelector: "8dbae0a8";
                readonly name: "InvalidCheckpointDurationResolution";
                readonly nameLocation: "4624:35:49";
                readonly parameters: {
                    readonly id: 8196;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4659:2:49";
                };
            }, {
                readonly id: 8200;
                readonly nodeType: "ErrorDefinition";
                readonly src: "4839:28:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8198;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4668:166:49";
                    readonly text: "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance.";
                };
                readonly errorSelector: "e8c02dd7";
                readonly name: "InvalidDeployConfig";
                readonly nameLocation: "4845:19:49";
                readonly parameters: {
                    readonly id: 8199;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4864:2:49";
                };
            }, {
                readonly id: 8203;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5008:35:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8201;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4873:130:49";
                    readonly text: "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory.";
                };
                readonly errorSelector: "6e623f0f";
                readonly name: "InvalidDeployerCoordinator";
                readonly nameLocation: "5014:26:49";
                readonly parameters: {
                    readonly id: 8202;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5040:2:49";
                };
            }, {
                readonly id: 8206;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5227:20:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8204;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5049:173:49";
                    readonly text: "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees.";
                };
                readonly errorSelector: "2d8768f9";
                readonly name: "InvalidFees";
                readonly nameLocation: "5233:11:49";
                readonly parameters: {
                    readonly id: 8205;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5244:2:49";
                };
            }, {
                readonly id: 8209;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5360:23:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8207;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5253:102:49";
                    readonly text: "@notice Thrown when the starting index of a range is larger than the\n         ending index.";
                };
                readonly errorSelector: "764e6b56";
                readonly name: "InvalidIndexes";
                readonly nameLocation: "5366:14:49";
                readonly parameters: {
                    readonly id: 8208;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5380:2:49";
                };
            }, {
                readonly id: 8212;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5575:23:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8210;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5389:181:49";
                    readonly text: "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter.";
                };
                readonly errorSelector: "2c20e3f6";
                readonly name: "InvalidMaxFees";
                readonly nameLocation: "5581:14:49";
                readonly parameters: {
                    readonly id: 8211;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5595:2:49";
                };
            }, {
                readonly id: 8215;
                readonly nodeType: "ErrorDefinition";
                readonly src: "5789:23:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8213;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5604:180:49";
                    readonly text: "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter.";
                };
                readonly errorSelector: "15b05a8f";
                readonly name: "InvalidMinFees";
                readonly nameLocation: "5795:14:49";
                readonly parameters: {
                    readonly id: 8214;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5809:2:49";
                };
            }, {
                readonly id: 8218;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6076:37:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8216;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5818:253:49";
                    readonly text: "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration.";
                };
                readonly errorSelector: "f9c0959d";
                readonly name: "InvalidMaxCheckpointDuration";
                readonly nameLocation: "6082:28:49";
                readonly parameters: {
                    readonly id: 8217;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6110:2:49";
                };
            }, {
                readonly id: 8221;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6376:37:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8219;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6119:252:49";
                    readonly text: "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration.";
                };
                readonly errorSelector: "0433acc6";
                readonly name: "InvalidMinCheckpointDuration";
                readonly nameLocation: "6382:28:49";
                readonly parameters: {
                    readonly id: 8220;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6410:2:49";
                };
            }, {
                readonly id: 8224;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6673:35:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8222;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6419:249:49";
                    readonly text: "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration.";
                };
                readonly errorSelector: "cfb699cb";
                readonly name: "InvalidMaxPositionDuration";
                readonly nameLocation: "6679:26:49";
                readonly parameters: {
                    readonly id: 8223;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6705:2:49";
                };
            }, {
                readonly id: 8227;
                readonly nodeType: "ErrorDefinition";
                readonly src: "6967:35:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8225;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6714:248:49";
                    readonly text: "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration.";
                };
                readonly errorSelector: "600f5a02";
                readonly name: "InvalidMinPositionDuration";
                readonly nameLocation: "6973:26:49";
                readonly parameters: {
                    readonly id: 8226;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6999:2:49";
                };
            }, {
                readonly id: 8230;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7209:32:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8228;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7008:196:49";
                    readonly text: "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations.";
                };
                readonly errorSelector: "4a7fff9e";
                readonly name: "InvalidPositionDuration";
                readonly nameLocation: "7215:23:49";
                readonly parameters: {
                    readonly id: 8229;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7238:2:49";
                };
            }, {
                readonly id: 8233;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7395:27:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8231;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7247:143:49";
                    readonly text: "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR.";
                };
                readonly errorSelector: "673edec0";
                readonly name: "InvalidMaxFixedAPR";
                readonly nameLocation: "7401:18:49";
                readonly parameters: {
                    readonly id: 8232;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7419:2:49";
                };
            }, {
                readonly id: 8236;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7575:27:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8234;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7428:142:49";
                    readonly text: "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR.";
                };
                readonly errorSelector: "1670f797";
                readonly name: "InvalidMinFixedAPR";
                readonly nameLocation: "7581:18:49";
                readonly parameters: {
                    readonly id: 8235;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7599:2:49";
                };
            }, {
                readonly id: 8239;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7786:24:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8237;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7608:173:49";
                    readonly text: "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs.";
                };
                readonly errorSelector: "30554de1";
                readonly name: "InvalidFixedAPR";
                readonly nameLocation: "7792:15:49";
                readonly parameters: {
                    readonly id: 8238;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7807:2:49";
                };
            }, {
                readonly id: 8242;
                readonly nodeType: "ErrorDefinition";
                readonly src: "7994:33:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8240;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7816:173:49";
                    readonly text: "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR.";
                };
                readonly errorSelector: "a35539d0";
                readonly name: "InvalidMaxTimeStretchAPR";
                readonly nameLocation: "8000:24:49";
                readonly parameters: {
                    readonly id: 8241;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8024:2:49";
                };
            }, {
                readonly id: 8245;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8210:33:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8243;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8033:172:49";
                    readonly text: "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR.";
                };
                readonly errorSelector: "5a8f6557";
                readonly name: "InvalidMinTimeStretchAPR";
                readonly nameLocation: "8216:24:49";
                readonly parameters: {
                    readonly id: 8244;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8240:2:49";
                };
            }, {
                readonly id: 8248;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8539:30:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8246;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8249:285:49";
                    readonly text: "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR.";
                };
                readonly errorSelector: "83ebdfb7";
                readonly name: "InvalidTimeStretchAPR";
                readonly nameLocation: "8545:21:49";
                readonly parameters: {
                    readonly id: 8247;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8566:2:49";
                };
            }, {
                readonly id: 8251;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8628:23:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8249;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8575:48:49";
                    readonly text: "@notice Thrown when an ether transfer fails.";
                };
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "8634:14:49";
                readonly parameters: {
                    readonly id: 8250;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8648:2:49";
                };
            }, {
                readonly id: 8254;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8790:21:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8252;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8657:128:49";
                    readonly text: "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "8796:12:49";
                readonly parameters: {
                    readonly id: 8253;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8808:2:49";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IHyperdriveFactory";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [8255];
            readonly name: "IHyperdriveFactory";
            readonly nameLocation: "124:18:49";
            readonly scope: 8256;
            readonly usedErrors: readonly [8179, 8182, 8185, 8188, 8191, 8194, 8197, 8200, 8203, 8206, 8209, 8212, 8215, 8218, 8221, 8224, 8227, 8230, 8233, 8236, 8239, 8242, 8245, 8248, 8251, 8254];
            readonly usedEvents: readonly [8078, 8083, 8088, 8094, 8099, 8104, 8109, 8114, 8119, 8124, 8129, 8134, 8139, 8144, 8149, 8154, 8159, 8164, 8170, 8176];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 49;
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map