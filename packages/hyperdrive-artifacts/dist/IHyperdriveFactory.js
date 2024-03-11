export const IHyperdriveFactory = {
    "abi": [
        {
            "inputs": [],
            "name": "DeployerCoordinatorAlreadyAdded",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DeployerCoordinatorIndexMismatch",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DeployerCoordinatorNotAdded",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EndIndexTooLarge",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidCheckpointDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidCheckpointDurationResolution",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidDeployConfig",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidDeployerCoordinator",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidFees",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidFixedAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidIndexes",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMaxCheckpointDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMaxFees",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMaxFixedAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMaxPositionDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMaxTimeStretchAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMinCheckpointDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMinFees",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMinFixedAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMinPositionDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidMinTimeStretchAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPositionDuration",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimeStretchAPR",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newCheckpointDurationResolution",
                    "type": "uint256"
                }
            ],
            "name": "CheckpointDurationResolutionUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "newDefaultPausers",
                    "type": "address[]"
                }
            ],
            "name": "DefaultPausersUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "deployerCoordinator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "hyperdrive",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct IHyperdrive.PoolDeployConfig",
                    "name": "config",
                    "type": "tuple"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "extraData",
                    "type": "bytes"
                }
            ],
            "name": "Deployed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "deployerCoordinator",
                    "type": "address"
                }
            ],
            "name": "DeployerCoordinatorAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "deployerCoordinator",
                    "type": "address"
                }
            ],
            "name": "DeployerCoordinatorRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "governance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "hyperdriveGovernance",
                    "type": "address"
                }
            ],
            "name": "HyperdriveGovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newLinkerCodeHash",
                    "type": "bytes32"
                }
            ],
            "name": "LinkerCodeHashUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newLinkerFactory",
                    "type": "address"
                }
            ],
            "name": "LinkerFactoryUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMaxCheckpointDuration",
                    "type": "uint256"
                }
            ],
            "name": "MaxCheckpointDurationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "curve",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "flat",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "governanceLP",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "governanceZombie",
                            "type": "uint256"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct IHyperdrive.Fees",
                    "name": "newMaxFees",
                    "type": "tuple"
                }
            ],
            "name": "MaxFeesUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMaxFixedAPR",
                    "type": "uint256"
                }
            ],
            "name": "MaxFixedAPRUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMaxPositionDuration",
                    "type": "uint256"
                }
            ],
            "name": "MaxPositionDurationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMaxTimeStretchAPR",
                    "type": "uint256"
                }
            ],
            "name": "MaxTimeStretchAPRUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMinCheckpointDuration",
                    "type": "uint256"
                }
            ],
            "name": "MinCheckpointDurationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "curve",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "flat",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "governanceLP",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "governanceZombie",
                            "type": "uint256"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct IHyperdrive.Fees",
                    "name": "newMinFees",
                    "type": "tuple"
                }
            ],
            "name": "MinFeesUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMinFixedAPR",
                    "type": "uint256"
                }
            ],
            "name": "MinFixedAPRUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMinPositionDuration",
                    "type": "uint256"
                }
            ],
            "name": "MinPositionDurationUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newMinTimeStretchAPR",
                    "type": "uint256"
                }
            ],
            "name": "MinTimeStretchAPRUpdated",
            "type": "event"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0xa006f6e749f15c87b4538e589d11120c154453fc98036c1cda20074f2d4e52af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e35b0883b33f30d703176bd264a0353cbe20f3d6cfd1d9cde0f6e056aab00768\",\"dweb:/ipfs/QmcJCQLyyk3uQosUjYQtDGAsYeso8zuC2fLnraC9sDQyp7\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DeployerCoordinatorAlreadyAdded"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DeployerCoordinatorIndexMismatch"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DeployerCoordinatorNotAdded"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "EndIndexTooLarge"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidCheckpointDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidCheckpointDurationResolution"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidDeployConfig"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidDeployerCoordinator"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidFees"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidFixedAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidIndexes"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMaxCheckpointDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMaxFees"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMaxFixedAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMaxPositionDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMaxTimeStretchAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMinCheckpointDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMinFees"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMinFixedAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMinPositionDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidMinTimeStretchAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPositionDuration"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTimeStretchAPR"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "TransferFailed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newCheckpointDurationResolution",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CheckpointDurationResolutionUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address[]",
                            "name": "newDefaultPausers",
                            "type": "address[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "DefaultPausersUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "deployerCoordinator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "hyperdrive",
                            "type": "address",
                            "indexed": false
                        },
                        {
                            "internalType": "struct IHyperdrive.PoolDeployConfig",
                            "name": "config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ],
                            "indexed": false
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Deployed",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "deployerCoordinator",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "DeployerCoordinatorAdded",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "deployerCoordinator",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "DeployerCoordinatorRemoved",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "hyperdriveGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "HyperdriveGovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "newLinkerCodeHash",
                            "type": "bytes32",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "LinkerCodeHashUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newLinkerFactory",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "LinkerFactoryUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMaxCheckpointDuration",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MaxCheckpointDurationUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "newMaxFees",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MaxFeesUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMaxFixedAPR",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MaxFixedAPRUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMaxPositionDuration",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MaxPositionDurationUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMaxTimeStretchAPR",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MaxTimeStretchAPRUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMinCheckpointDuration",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MinCheckpointDurationUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "newMinFees",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MinFeesUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMinFixedAPR",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MinFixedAPRUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMinPositionDuration",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MinPositionDurationUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "newMinTimeStretchAPR",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "MinTimeStretchAPRUpdated",
                    "anonymous": false
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/interfaces/IHyperdriveFactory.sol": "IHyperdriveFactory"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveFactory.sol": {
                "keccak256": "0xa006f6e749f15c87b4538e589d11120c154453fc98036c1cda20074f2d4e52af",
                "urls": [
                    "bzz-raw://e35b0883b33f30d703176bd264a0353cbe20f3d6cfd1d9cde0f6e056aab00768",
                    "dweb:/ipfs/QmcJCQLyyk3uQosUjYQtDGAsYeso8zuC2fLnraC9sDQyp7"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveFactory.sol",
        "id": 8256,
        "exportedSymbols": {
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveFactory": [
                8255
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8775:49",
        "nodes": [
            {
                "id": 8064,
                "nodeType": "PragmaDirective",
                "src": "39:23:49",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8066,
                "nodeType": "ImportDirective",
                "src": "64:48:49",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8256,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8065,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8255,
                "nodeType": "ContractDefinition",
                "src": "114:8699:49",
                "nodes": [
                    {
                        "id": 8078,
                        "nodeType": "EventDefinition",
                        "src": "229:164:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8067,
                            "nodeType": "StructuredDocumentation",
                            "src": "169:55:49",
                            "text": "@notice Emitted when a Hyperdrive pool is deployed."
                        },
                        "eventSelector": "2b2f18d6a5803b503bcb3d887ccd7a77aa7e1e644a4c99effef843bf3e307157",
                        "name": "Deployed",
                        "nameLocation": "235:8:49",
                        "parameters": {
                            "id": 8077,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8069,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "269:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8078,
                                    "src": "253:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8068,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "253:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8071,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "hyperdrive",
                                    "nameLocation": "306:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8078,
                                    "src": "298:18:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8070,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "298:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8074,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "config",
                                    "nameLocation": "355:6:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8078,
                                    "src": "326:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 8073,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8072,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "326:11:49",
                                                "338:16:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7368,
                                            "src": "326:28:49"
                                        },
                                        "referencedDeclaration": 7368,
                                        "src": "326:28:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8076,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "extraData",
                                    "nameLocation": "377:9:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8078,
                                    "src": "371:15:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 8075,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "371:5:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "243:149:49"
                        }
                    },
                    {
                        "id": 8083,
                        "nodeType": "EventDefinition",
                        "src": "461:68:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8079,
                            "nodeType": "StructuredDocumentation",
                            "src": "399:57:49",
                            "text": "@notice Emitted when a deployer coordinator is added."
                        },
                        "eventSelector": "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3",
                        "name": "DeployerCoordinatorAdded",
                        "nameLocation": "467:24:49",
                        "parameters": {
                            "id": 8082,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8081,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "508:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8083,
                                    "src": "492:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8080,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "492:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "491:37:49"
                        }
                    },
                    {
                        "id": 8088,
                        "nodeType": "EventDefinition",
                        "src": "599:70:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8084,
                            "nodeType": "StructuredDocumentation",
                            "src": "535:59:49",
                            "text": "@notice Emitted when a deployer coordinator is removed."
                        },
                        "eventSelector": "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0",
                        "name": "DeployerCoordinatorRemoved",
                        "nameLocation": "605:26:49",
                        "parameters": {
                            "id": 8087,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8086,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "648:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8088,
                                    "src": "632:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8085,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "632:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "631:37:49"
                        }
                    },
                    {
                        "id": 8094,
                        "nodeType": "EventDefinition",
                        "src": "744:57:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8089,
                            "nodeType": "StructuredDocumentation",
                            "src": "675:64:49",
                            "text": "@notice Emitted when the list of default pausers is updated."
                        },
                        "eventSelector": "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38",
                        "name": "DefaultPausersUpdated",
                        "nameLocation": "750:21:49",
                        "parameters": {
                            "id": 8093,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8092,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newDefaultPausers",
                                    "nameLocation": "782:17:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8094,
                                    "src": "772:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 8090,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "772:7:49",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 8091,
                                        "nodeType": "ArrayTypeName",
                                        "src": "772:9:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "771:29:49"
                        }
                    },
                    {
                        "id": 8099,
                        "nodeType": "EventDefinition",
                        "src": "890:59:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8095,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:78:49",
                            "text": "@notice Emitted when the fee collector used in new deployments is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "896:19:49",
                        "parameters": {
                            "id": 8098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8097,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "932:15:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8099,
                                    "src": "916:31:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8096,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "916:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "915:33:49"
                        }
                    },
                    {
                        "id": 8104,
                        "nodeType": "EventDefinition",
                        "src": "1021:52:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8100,
                            "nodeType": "StructuredDocumentation",
                            "src": "955:61:49",
                            "text": "@notice Emitted when the factory's governance is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "1027:17:49",
                        "parameters": {
                            "id": 8103,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8102,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "governance",
                                    "nameLocation": "1061:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8104,
                                    "src": "1045:26:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8101,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1045:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1044:28:49"
                        }
                    },
                    {
                        "id": 8109,
                        "nodeType": "EventDefinition",
                        "src": "1183:72:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8105,
                            "nodeType": "StructuredDocumentation",
                            "src": "1079:99:49",
                            "text": "@notice Emitted when the governance address used in new deployments is\n         updated."
                        },
                        "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
                        "name": "HyperdriveGovernanceUpdated",
                        "nameLocation": "1189:27:49",
                        "parameters": {
                            "id": 8108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8107,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "hyperdriveGovernance",
                                    "nameLocation": "1233:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8109,
                                    "src": "1217:36:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8106,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1217:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1216:38:49"
                        }
                    },
                    {
                        "id": 8114,
                        "nodeType": "EventDefinition",
                        "src": "1361:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8110,
                            "nodeType": "StructuredDocumentation",
                            "src": "1261:95:49",
                            "text": "@notice Emitted when the linker factory used in new deployments is\n         updated."
                        },
                        "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
                        "name": "LinkerFactoryUpdated",
                        "nameLocation": "1367:20:49",
                        "parameters": {
                            "id": 8113,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8112,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerFactory",
                                    "nameLocation": "1404:16:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8114,
                                    "src": "1388:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8111,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1388:7:49",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1387:34:49"
                        }
                    },
                    {
                        "id": 8119,
                        "nodeType": "EventDefinition",
                        "src": "1530:63:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8115,
                            "nodeType": "StructuredDocumentation",
                            "src": "1428:97:49",
                            "text": "@notice Emitted when the linker code hash used in new deployments is\n         updated."
                        },
                        "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
                        "name": "LinkerCodeHashUpdated",
                        "nameLocation": "1536:21:49",
                        "parameters": {
                            "id": 8118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8117,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerCodeHash",
                                    "nameLocation": "1574:17:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8119,
                                    "src": "1558:33:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 8116,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1558:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1557:35:49"
                        }
                    },
                    {
                        "id": 8124,
                        "nodeType": "EventDefinition",
                        "src": "1675:97:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8120,
                            "nodeType": "StructuredDocumentation",
                            "src": "1599:71:49",
                            "text": "@notice Emitted when the checkpoint duration resolution is updated."
                        },
                        "eventSelector": "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a",
                        "name": "CheckpointDurationResolutionUpdated",
                        "nameLocation": "1681:35:49",
                        "parameters": {
                            "id": 8123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8122,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newCheckpointDurationResolution",
                                    "nameLocation": "1734:31:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8124,
                                    "src": "1726:39:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8121,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1726:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1716:55:49"
                        }
                    },
                    {
                        "id": 8129,
                        "nodeType": "EventDefinition",
                        "src": "1851:69:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8125,
                            "nodeType": "StructuredDocumentation",
                            "src": "1778:68:49",
                            "text": "@notice Emitted when the maximum checkpoint duration is updated."
                        },
                        "eventSelector": "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2",
                        "name": "MaxCheckpointDurationUpdated",
                        "nameLocation": "1857:28:49",
                        "parameters": {
                            "id": 8128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8127,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxCheckpointDuration",
                                    "nameLocation": "1894:24:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8129,
                                    "src": "1886:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8126,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1886:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1885:34:49"
                        }
                    },
                    {
                        "id": 8134,
                        "nodeType": "EventDefinition",
                        "src": "1999:69:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8130,
                            "nodeType": "StructuredDocumentation",
                            "src": "1926:68:49",
                            "text": "@notice Emitted when the minimum checkpoint duration is updated."
                        },
                        "eventSelector": "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631",
                        "name": "MinCheckpointDurationUpdated",
                        "nameLocation": "2005:28:49",
                        "parameters": {
                            "id": 8133,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8132,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinCheckpointDuration",
                                    "nameLocation": "2042:24:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8134,
                                    "src": "2034:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8131,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2034:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2033:34:49"
                        }
                    },
                    {
                        "id": 8139,
                        "nodeType": "EventDefinition",
                        "src": "2145:65:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8135,
                            "nodeType": "StructuredDocumentation",
                            "src": "2074:66:49",
                            "text": "@notice Emitted when the maximum position duration is updated."
                        },
                        "eventSelector": "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b",
                        "name": "MaxPositionDurationUpdated",
                        "nameLocation": "2151:26:49",
                        "parameters": {
                            "id": 8138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8137,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxPositionDuration",
                                    "nameLocation": "2186:22:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8139,
                                    "src": "2178:30:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8136,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2178:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2177:32:49"
                        }
                    },
                    {
                        "id": 8144,
                        "nodeType": "EventDefinition",
                        "src": "2287:65:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8140,
                            "nodeType": "StructuredDocumentation",
                            "src": "2216:66:49",
                            "text": "@notice Emitted when the minimum position duration is updated."
                        },
                        "eventSelector": "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178",
                        "name": "MinPositionDurationUpdated",
                        "nameLocation": "2293:26:49",
                        "parameters": {
                            "id": 8143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8142,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinPositionDuration",
                                    "nameLocation": "2328:22:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8144,
                                    "src": "2320:30:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8141,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2320:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2319:32:49"
                        }
                    },
                    {
                        "id": 8149,
                        "nodeType": "EventDefinition",
                        "src": "2421:49:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8145,
                            "nodeType": "StructuredDocumentation",
                            "src": "2358:58:49",
                            "text": "@notice Emitted when the maximum fixed APR is updated."
                        },
                        "eventSelector": "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978",
                        "name": "MaxFixedAPRUpdated",
                        "nameLocation": "2427:18:49",
                        "parameters": {
                            "id": 8148,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8147,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFixedAPR",
                                    "nameLocation": "2454:14:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8149,
                                    "src": "2446:22:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8146,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2446:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2445:24:49"
                        }
                    },
                    {
                        "id": 8154,
                        "nodeType": "EventDefinition",
                        "src": "2539:49:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8150,
                            "nodeType": "StructuredDocumentation",
                            "src": "2476:58:49",
                            "text": "@notice Emitted when the minimum fixed APR is updated."
                        },
                        "eventSelector": "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191",
                        "name": "MinFixedAPRUpdated",
                        "nameLocation": "2545:18:49",
                        "parameters": {
                            "id": 8153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8152,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFixedAPR",
                                    "nameLocation": "2572:14:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8154,
                                    "src": "2564:22:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8151,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2564:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2563:24:49"
                        }
                    },
                    {
                        "id": 8159,
                        "nodeType": "EventDefinition",
                        "src": "2664:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8155,
                            "nodeType": "StructuredDocumentation",
                            "src": "2594:65:49",
                            "text": "@notice Emitted when the maximum time stretch APR is updated."
                        },
                        "eventSelector": "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e",
                        "name": "MaxTimeStretchAPRUpdated",
                        "nameLocation": "2670:24:49",
                        "parameters": {
                            "id": 8158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8157,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxTimeStretchAPR",
                                    "nameLocation": "2703:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8159,
                                    "src": "2695:28:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2695:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2694:30:49"
                        }
                    },
                    {
                        "id": 8164,
                        "nodeType": "EventDefinition",
                        "src": "2801:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8160,
                            "nodeType": "StructuredDocumentation",
                            "src": "2731:65:49",
                            "text": "@notice Emitted when the minimum time stretch APR is updated."
                        },
                        "eventSelector": "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46",
                        "name": "MinTimeStretchAPRUpdated",
                        "nameLocation": "2807:24:49",
                        "parameters": {
                            "id": 8163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8162,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinTimeStretchAPR",
                                    "nameLocation": "2840:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8164,
                                    "src": "2832:28:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8161,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2832:7:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2831:30:49"
                        }
                    },
                    {
                        "id": 8170,
                        "nodeType": "EventDefinition",
                        "src": "2927:50:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8165,
                            "nodeType": "StructuredDocumentation",
                            "src": "2868:54:49",
                            "text": "@notice Emitted when the maximum fees are updated."
                        },
                        "eventSelector": "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7",
                        "name": "MaxFeesUpdated",
                        "nameLocation": "2933:14:49",
                        "parameters": {
                            "id": 8169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8168,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFees",
                                    "nameLocation": "2965:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8170,
                                    "src": "2948:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 8167,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8166,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "2948:11:49",
                                                "2960:4:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7332,
                                            "src": "2948:16:49"
                                        },
                                        "referencedDeclaration": 7332,
                                        "src": "2948:16:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7332_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2947:29:49"
                        }
                    },
                    {
                        "id": 8176,
                        "nodeType": "EventDefinition",
                        "src": "3042:50:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8171,
                            "nodeType": "StructuredDocumentation",
                            "src": "2983:54:49",
                            "text": "@notice Emitted when the minimum fees are updated."
                        },
                        "eventSelector": "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421",
                        "name": "MinFeesUpdated",
                        "nameLocation": "3048:14:49",
                        "parameters": {
                            "id": 8175,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8174,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFees",
                                    "nameLocation": "3080:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8176,
                                    "src": "3063:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 8173,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8172,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3063:11:49",
                                                "3075:4:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7332,
                                            "src": "3063:16:49"
                                        },
                                        "referencedDeclaration": 7332,
                                        "src": "3063:16:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7332_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3062:29:49"
                        }
                    },
                    {
                        "id": 8179,
                        "nodeType": "ErrorDefinition",
                        "src": "3241:40:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8177,
                            "nodeType": "StructuredDocumentation",
                            "src": "3118:118:49",
                            "text": "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added."
                        },
                        "errorSelector": "bd34634f",
                        "name": "DeployerCoordinatorAlreadyAdded",
                        "nameLocation": "3247:31:49",
                        "parameters": {
                            "id": 8178,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3278:2:49"
                        }
                    },
                    {
                        "id": 8182,
                        "nodeType": "ErrorDefinition",
                        "src": "3406:36:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8180,
                            "nodeType": "StructuredDocumentation",
                            "src": "3287:114:49",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added."
                        },
                        "errorSelector": "4bf121ab",
                        "name": "DeployerCoordinatorNotAdded",
                        "nameLocation": "3412:27:49",
                        "parameters": {
                            "id": 8181,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3439:2:49"
                        }
                    },
                    {
                        "id": 8185,
                        "nodeType": "ErrorDefinition",
                        "src": "3633:41:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8183,
                            "nodeType": "StructuredDocumentation",
                            "src": "3448:180:49",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators."
                        },
                        "errorSelector": "3c9c032c",
                        "name": "DeployerCoordinatorIndexMismatch",
                        "nameLocation": "3639:32:49",
                        "parameters": {
                            "id": 8184,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3671:2:49"
                        }
                    },
                    {
                        "id": 8188,
                        "nodeType": "ErrorDefinition",
                        "src": "3788:25:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8186,
                            "nodeType": "StructuredDocumentation",
                            "src": "3680:103:49",
                            "text": "@notice Thrown when the ending index of a range is larger than the\n         underlying list."
                        },
                        "errorSelector": "e0f7becb",
                        "name": "EndIndexTooLarge",
                        "nameLocation": "3794:16:49",
                        "parameters": {
                            "id": 8187,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3810:2:49"
                        }
                    },
                    {
                        "id": 8191,
                        "nodeType": "ErrorDefinition",
                        "src": "3959:26:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8189,
                            "nodeType": "StructuredDocumentation",
                            "src": "3819:135:49",
                            "text": "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance."
                        },
                        "errorSelector": "11011294",
                        "name": "InsufficientValue",
                        "nameLocation": "3965:17:49",
                        "parameters": {
                            "id": 8190,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3982:2:49"
                        }
                    },
                    {
                        "id": 8194,
                        "nodeType": "ErrorDefinition",
                        "src": "4283:34:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8192,
                            "nodeType": "StructuredDocumentation",
                            "src": "3991:287:49",
                            "text": "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "4289:25:49",
                        "parameters": {
                            "id": 8193,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4314:2:49"
                        }
                    },
                    {
                        "id": 8197,
                        "nodeType": "ErrorDefinition",
                        "src": "4618:44:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8195,
                            "nodeType": "StructuredDocumentation",
                            "src": "4323:290:49",
                            "text": "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration."
                        },
                        "errorSelector": "8dbae0a8",
                        "name": "InvalidCheckpointDurationResolution",
                        "nameLocation": "4624:35:49",
                        "parameters": {
                            "id": 8196,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4659:2:49"
                        }
                    },
                    {
                        "id": 8200,
                        "nodeType": "ErrorDefinition",
                        "src": "4839:28:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8198,
                            "nodeType": "StructuredDocumentation",
                            "src": "4668:166:49",
                            "text": "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance."
                        },
                        "errorSelector": "e8c02dd7",
                        "name": "InvalidDeployConfig",
                        "nameLocation": "4845:19:49",
                        "parameters": {
                            "id": 8199,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4864:2:49"
                        }
                    },
                    {
                        "id": 8203,
                        "nodeType": "ErrorDefinition",
                        "src": "5008:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8201,
                            "nodeType": "StructuredDocumentation",
                            "src": "4873:130:49",
                            "text": "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory."
                        },
                        "errorSelector": "6e623f0f",
                        "name": "InvalidDeployerCoordinator",
                        "nameLocation": "5014:26:49",
                        "parameters": {
                            "id": 8202,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5040:2:49"
                        }
                    },
                    {
                        "id": 8206,
                        "nodeType": "ErrorDefinition",
                        "src": "5227:20:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8204,
                            "nodeType": "StructuredDocumentation",
                            "src": "5049:173:49",
                            "text": "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees."
                        },
                        "errorSelector": "2d8768f9",
                        "name": "InvalidFees",
                        "nameLocation": "5233:11:49",
                        "parameters": {
                            "id": 8205,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5244:2:49"
                        }
                    },
                    {
                        "id": 8209,
                        "nodeType": "ErrorDefinition",
                        "src": "5360:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8207,
                            "nodeType": "StructuredDocumentation",
                            "src": "5253:102:49",
                            "text": "@notice Thrown when the starting index of a range is larger than the\n         ending index."
                        },
                        "errorSelector": "764e6b56",
                        "name": "InvalidIndexes",
                        "nameLocation": "5366:14:49",
                        "parameters": {
                            "id": 8208,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5380:2:49"
                        }
                    },
                    {
                        "id": 8212,
                        "nodeType": "ErrorDefinition",
                        "src": "5575:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8210,
                            "nodeType": "StructuredDocumentation",
                            "src": "5389:181:49",
                            "text": "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter."
                        },
                        "errorSelector": "2c20e3f6",
                        "name": "InvalidMaxFees",
                        "nameLocation": "5581:14:49",
                        "parameters": {
                            "id": 8211,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5595:2:49"
                        }
                    },
                    {
                        "id": 8215,
                        "nodeType": "ErrorDefinition",
                        "src": "5789:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8213,
                            "nodeType": "StructuredDocumentation",
                            "src": "5604:180:49",
                            "text": "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter."
                        },
                        "errorSelector": "15b05a8f",
                        "name": "InvalidMinFees",
                        "nameLocation": "5795:14:49",
                        "parameters": {
                            "id": 8214,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5809:2:49"
                        }
                    },
                    {
                        "id": 8218,
                        "nodeType": "ErrorDefinition",
                        "src": "6076:37:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8216,
                            "nodeType": "StructuredDocumentation",
                            "src": "5818:253:49",
                            "text": "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration."
                        },
                        "errorSelector": "f9c0959d",
                        "name": "InvalidMaxCheckpointDuration",
                        "nameLocation": "6082:28:49",
                        "parameters": {
                            "id": 8217,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6110:2:49"
                        }
                    },
                    {
                        "id": 8221,
                        "nodeType": "ErrorDefinition",
                        "src": "6376:37:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8219,
                            "nodeType": "StructuredDocumentation",
                            "src": "6119:252:49",
                            "text": "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration."
                        },
                        "errorSelector": "0433acc6",
                        "name": "InvalidMinCheckpointDuration",
                        "nameLocation": "6382:28:49",
                        "parameters": {
                            "id": 8220,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6410:2:49"
                        }
                    },
                    {
                        "id": 8224,
                        "nodeType": "ErrorDefinition",
                        "src": "6673:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8222,
                            "nodeType": "StructuredDocumentation",
                            "src": "6419:249:49",
                            "text": "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration."
                        },
                        "errorSelector": "cfb699cb",
                        "name": "InvalidMaxPositionDuration",
                        "nameLocation": "6679:26:49",
                        "parameters": {
                            "id": 8223,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6705:2:49"
                        }
                    },
                    {
                        "id": 8227,
                        "nodeType": "ErrorDefinition",
                        "src": "6967:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8225,
                            "nodeType": "StructuredDocumentation",
                            "src": "6714:248:49",
                            "text": "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration."
                        },
                        "errorSelector": "600f5a02",
                        "name": "InvalidMinPositionDuration",
                        "nameLocation": "6973:26:49",
                        "parameters": {
                            "id": 8226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6999:2:49"
                        }
                    },
                    {
                        "id": 8230,
                        "nodeType": "ErrorDefinition",
                        "src": "7209:32:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8228,
                            "nodeType": "StructuredDocumentation",
                            "src": "7008:196:49",
                            "text": "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "7215:23:49",
                        "parameters": {
                            "id": 8229,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7238:2:49"
                        }
                    },
                    {
                        "id": 8233,
                        "nodeType": "ErrorDefinition",
                        "src": "7395:27:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8231,
                            "nodeType": "StructuredDocumentation",
                            "src": "7247:143:49",
                            "text": "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR."
                        },
                        "errorSelector": "673edec0",
                        "name": "InvalidMaxFixedAPR",
                        "nameLocation": "7401:18:49",
                        "parameters": {
                            "id": 8232,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7419:2:49"
                        }
                    },
                    {
                        "id": 8236,
                        "nodeType": "ErrorDefinition",
                        "src": "7575:27:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8234,
                            "nodeType": "StructuredDocumentation",
                            "src": "7428:142:49",
                            "text": "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR."
                        },
                        "errorSelector": "1670f797",
                        "name": "InvalidMinFixedAPR",
                        "nameLocation": "7581:18:49",
                        "parameters": {
                            "id": 8235,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7599:2:49"
                        }
                    },
                    {
                        "id": 8239,
                        "nodeType": "ErrorDefinition",
                        "src": "7786:24:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8237,
                            "nodeType": "StructuredDocumentation",
                            "src": "7608:173:49",
                            "text": "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs."
                        },
                        "errorSelector": "30554de1",
                        "name": "InvalidFixedAPR",
                        "nameLocation": "7792:15:49",
                        "parameters": {
                            "id": 8238,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7807:2:49"
                        }
                    },
                    {
                        "id": 8242,
                        "nodeType": "ErrorDefinition",
                        "src": "7994:33:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8240,
                            "nodeType": "StructuredDocumentation",
                            "src": "7816:173:49",
                            "text": "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR."
                        },
                        "errorSelector": "a35539d0",
                        "name": "InvalidMaxTimeStretchAPR",
                        "nameLocation": "8000:24:49",
                        "parameters": {
                            "id": 8241,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8024:2:49"
                        }
                    },
                    {
                        "id": 8245,
                        "nodeType": "ErrorDefinition",
                        "src": "8210:33:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8243,
                            "nodeType": "StructuredDocumentation",
                            "src": "8033:172:49",
                            "text": "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR."
                        },
                        "errorSelector": "5a8f6557",
                        "name": "InvalidMinTimeStretchAPR",
                        "nameLocation": "8216:24:49",
                        "parameters": {
                            "id": 8244,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8240:2:49"
                        }
                    },
                    {
                        "id": 8248,
                        "nodeType": "ErrorDefinition",
                        "src": "8539:30:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8246,
                            "nodeType": "StructuredDocumentation",
                            "src": "8249:285:49",
                            "text": "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR."
                        },
                        "errorSelector": "83ebdfb7",
                        "name": "InvalidTimeStretchAPR",
                        "nameLocation": "8545:21:49",
                        "parameters": {
                            "id": 8247,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8566:2:49"
                        }
                    },
                    {
                        "id": 8251,
                        "nodeType": "ErrorDefinition",
                        "src": "8628:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8249,
                            "nodeType": "StructuredDocumentation",
                            "src": "8575:48:49",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "8634:14:49",
                        "parameters": {
                            "id": 8250,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8648:2:49"
                        }
                    },
                    {
                        "id": 8254,
                        "nodeType": "ErrorDefinition",
                        "src": "8790:21:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8252,
                            "nodeType": "StructuredDocumentation",
                            "src": "8657:128:49",
                            "text": "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters."
                        },
                        "errorSelector": "82b42900",
                        "name": "Unauthorized",
                        "nameLocation": "8796:12:49",
                        "parameters": {
                            "id": 8253,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8808:2:49"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IHyperdriveFactory",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    8255
                ],
                "name": "IHyperdriveFactory",
                "nameLocation": "124:18:49",
                "scope": 8256,
                "usedErrors": [
                    8179,
                    8182,
                    8185,
                    8188,
                    8191,
                    8194,
                    8197,
                    8200,
                    8203,
                    8206,
                    8209,
                    8212,
                    8215,
                    8218,
                    8221,
                    8224,
                    8227,
                    8230,
                    8233,
                    8236,
                    8239,
                    8242,
                    8245,
                    8248,
                    8251,
                    8254
                ],
                "usedEvents": [
                    8078,
                    8083,
                    8088,
                    8094,
                    8099,
                    8104,
                    8109,
                    8114,
                    8119,
                    8124,
                    8129,
                    8134,
                    8139,
                    8144,
                    8149,
                    8154,
                    8159,
                    8164,
                    8170,
                    8176
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 49
};
