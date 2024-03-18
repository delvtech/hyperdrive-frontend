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
            "name": "ReceiveLocked",
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
                            "internalType": "address",
                            "name": "sweepCollector",
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
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReceiveLocked\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"ReceiveLocked()\":[{\"notice\":\"Thrown when ether is sent to the factory when `receive` is         locked.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector used in new deployments is         updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x5f7850059953850a99bba38ebd44d8c6346cd151e2d7f7af250a06edec603e9f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://01c6772ed3e05ac9148c2b1cba8efb582d90fc8cd770fc14e80a2807bee93cc6\",\"dweb:/ipfs/QmThmQJSqs7qwKDyVa2NniN7sqT8Ez6zyLGdTMWr3Hfaew\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                    "name": "ReceiveLocked"
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
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
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveFactory.sol": {
                "keccak256": "0x5f7850059953850a99bba38ebd44d8c6346cd151e2d7f7af250a06edec603e9f",
                "urls": [
                    "bzz-raw://01c6772ed3e05ac9148c2b1cba8efb582d90fc8cd770fc14e80a2807bee93cc6",
                    "dweb:/ipfs/QmThmQJSqs7qwKDyVa2NniN7sqT8Ez6zyLGdTMWr3Hfaew"
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
        "id": 11750,
        "exportedSymbols": {
            "IHyperdrive": [
                11028
            ],
            "IHyperdriveFactory": [
                11749
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8900:92",
        "nodes": [
            {
                "id": 11553,
                "nodeType": "PragmaDirective",
                "src": "39:23:92",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11555,
                "nodeType": "ImportDirective",
                "src": "64:48:92",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11750,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11554,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "73:11:92",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11749,
                "nodeType": "ContractDefinition",
                "src": "114:8824:92",
                "nodes": [
                    {
                        "id": 11567,
                        "nodeType": "EventDefinition",
                        "src": "229:164:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11556,
                            "nodeType": "StructuredDocumentation",
                            "src": "169:55:92",
                            "text": "@notice Emitted when a Hyperdrive pool is deployed."
                        },
                        "eventSelector": "abd0a413b2318f33298ccd074a9909d411d3f249cf2e65761d2dd1002e1cb7e5",
                        "name": "Deployed",
                        "nameLocation": "235:8:92",
                        "parameters": {
                            "id": 11566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11558,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "269:19:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11567,
                                    "src": "253:35:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11557,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "253:7:92",
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
                                    "id": 11560,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "hyperdrive",
                                    "nameLocation": "306:10:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11567,
                                    "src": "298:18:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11559,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "298:7:92",
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
                                    "id": 11563,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "config",
                                    "nameLocation": "355:6:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11567,
                                    "src": "326:35:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 11562,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11561,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "326:11:92",
                                                "338:16:92"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10777,
                                            "src": "326:28:92"
                                        },
                                        "referencedDeclaration": 10777,
                                        "src": "326:28:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11565,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "extraData",
                                    "nameLocation": "377:9:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11567,
                                    "src": "371:15:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 11564,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "371:5:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "243:149:92"
                        }
                    },
                    {
                        "id": 11572,
                        "nodeType": "EventDefinition",
                        "src": "461:68:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11568,
                            "nodeType": "StructuredDocumentation",
                            "src": "399:57:92",
                            "text": "@notice Emitted when a deployer coordinator is added."
                        },
                        "eventSelector": "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3",
                        "name": "DeployerCoordinatorAdded",
                        "nameLocation": "467:24:92",
                        "parameters": {
                            "id": 11571,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11570,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "508:19:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11572,
                                    "src": "492:35:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11569,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "492:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "491:37:92"
                        }
                    },
                    {
                        "id": 11577,
                        "nodeType": "EventDefinition",
                        "src": "599:70:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11573,
                            "nodeType": "StructuredDocumentation",
                            "src": "535:59:92",
                            "text": "@notice Emitted when a deployer coordinator is removed."
                        },
                        "eventSelector": "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0",
                        "name": "DeployerCoordinatorRemoved",
                        "nameLocation": "605:26:92",
                        "parameters": {
                            "id": 11576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11575,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "648:19:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11577,
                                    "src": "632:35:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11574,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "632:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "631:37:92"
                        }
                    },
                    {
                        "id": 11583,
                        "nodeType": "EventDefinition",
                        "src": "744:57:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11578,
                            "nodeType": "StructuredDocumentation",
                            "src": "675:64:92",
                            "text": "@notice Emitted when the list of default pausers is updated."
                        },
                        "eventSelector": "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38",
                        "name": "DefaultPausersUpdated",
                        "nameLocation": "750:21:92",
                        "parameters": {
                            "id": 11582,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11581,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newDefaultPausers",
                                    "nameLocation": "782:17:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11583,
                                    "src": "772:27:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11579,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "772:7:92",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 11580,
                                        "nodeType": "ArrayTypeName",
                                        "src": "772:9:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "771:29:92"
                        }
                    },
                    {
                        "id": 11588,
                        "nodeType": "EventDefinition",
                        "src": "890:59:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11584,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:78:92",
                            "text": "@notice Emitted when the fee collector used in new deployments is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "896:19:92",
                        "parameters": {
                            "id": 11587,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11586,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "932:15:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11588,
                                    "src": "916:31:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11585,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "916:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "915:33:92"
                        }
                    },
                    {
                        "id": 11593,
                        "nodeType": "EventDefinition",
                        "src": "1056:63:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11589,
                            "nodeType": "StructuredDocumentation",
                            "src": "955:96:92",
                            "text": "@notice Emitted when the sweep collector used in new deployments is\n         updated."
                        },
                        "eventSelector": "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2",
                        "name": "SweepCollectorUpdated",
                        "nameLocation": "1062:21:92",
                        "parameters": {
                            "id": 11592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11591,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newSweepCollector",
                                    "nameLocation": "1100:17:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11593,
                                    "src": "1084:33:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11590,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1084:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1083:35:92"
                        }
                    },
                    {
                        "id": 11598,
                        "nodeType": "EventDefinition",
                        "src": "1191:52:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11594,
                            "nodeType": "StructuredDocumentation",
                            "src": "1125:61:92",
                            "text": "@notice Emitted when the factory's governance is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "1197:17:92",
                        "parameters": {
                            "id": 11597,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11596,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "governance",
                                    "nameLocation": "1231:10:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11598,
                                    "src": "1215:26:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11595,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1215:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1214:28:92"
                        }
                    },
                    {
                        "id": 11603,
                        "nodeType": "EventDefinition",
                        "src": "1353:72:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11599,
                            "nodeType": "StructuredDocumentation",
                            "src": "1249:99:92",
                            "text": "@notice Emitted when the governance address used in new deployments is\n         updated."
                        },
                        "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
                        "name": "HyperdriveGovernanceUpdated",
                        "nameLocation": "1359:27:92",
                        "parameters": {
                            "id": 11602,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11601,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "hyperdriveGovernance",
                                    "nameLocation": "1403:20:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11603,
                                    "src": "1387:36:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11600,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1387:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1386:38:92"
                        }
                    },
                    {
                        "id": 11608,
                        "nodeType": "EventDefinition",
                        "src": "1531:61:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11604,
                            "nodeType": "StructuredDocumentation",
                            "src": "1431:95:92",
                            "text": "@notice Emitted when the linker factory used in new deployments is\n         updated."
                        },
                        "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
                        "name": "LinkerFactoryUpdated",
                        "nameLocation": "1537:20:92",
                        "parameters": {
                            "id": 11607,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11606,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerFactory",
                                    "nameLocation": "1574:16:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11608,
                                    "src": "1558:32:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11605,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1558:7:92",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1557:34:92"
                        }
                    },
                    {
                        "id": 11613,
                        "nodeType": "EventDefinition",
                        "src": "1700:63:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11609,
                            "nodeType": "StructuredDocumentation",
                            "src": "1598:97:92",
                            "text": "@notice Emitted when the linker code hash used in new deployments is\n         updated."
                        },
                        "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
                        "name": "LinkerCodeHashUpdated",
                        "nameLocation": "1706:21:92",
                        "parameters": {
                            "id": 11612,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11611,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerCodeHash",
                                    "nameLocation": "1744:17:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11613,
                                    "src": "1728:33:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11610,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1728:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1727:35:92"
                        }
                    },
                    {
                        "id": 11618,
                        "nodeType": "EventDefinition",
                        "src": "1845:97:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11614,
                            "nodeType": "StructuredDocumentation",
                            "src": "1769:71:92",
                            "text": "@notice Emitted when the checkpoint duration resolution is updated."
                        },
                        "eventSelector": "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a",
                        "name": "CheckpointDurationResolutionUpdated",
                        "nameLocation": "1851:35:92",
                        "parameters": {
                            "id": 11617,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11616,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newCheckpointDurationResolution",
                                    "nameLocation": "1904:31:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11618,
                                    "src": "1896:39:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11615,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1896:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1886:55:92"
                        }
                    },
                    {
                        "id": 11623,
                        "nodeType": "EventDefinition",
                        "src": "2021:69:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11619,
                            "nodeType": "StructuredDocumentation",
                            "src": "1948:68:92",
                            "text": "@notice Emitted when the maximum checkpoint duration is updated."
                        },
                        "eventSelector": "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2",
                        "name": "MaxCheckpointDurationUpdated",
                        "nameLocation": "2027:28:92",
                        "parameters": {
                            "id": 11622,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11621,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxCheckpointDuration",
                                    "nameLocation": "2064:24:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11623,
                                    "src": "2056:32:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11620,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2056:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2055:34:92"
                        }
                    },
                    {
                        "id": 11628,
                        "nodeType": "EventDefinition",
                        "src": "2169:69:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11624,
                            "nodeType": "StructuredDocumentation",
                            "src": "2096:68:92",
                            "text": "@notice Emitted when the minimum checkpoint duration is updated."
                        },
                        "eventSelector": "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631",
                        "name": "MinCheckpointDurationUpdated",
                        "nameLocation": "2175:28:92",
                        "parameters": {
                            "id": 11627,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11626,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinCheckpointDuration",
                                    "nameLocation": "2212:24:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11628,
                                    "src": "2204:32:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11625,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2204:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2203:34:92"
                        }
                    },
                    {
                        "id": 11633,
                        "nodeType": "EventDefinition",
                        "src": "2315:65:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11629,
                            "nodeType": "StructuredDocumentation",
                            "src": "2244:66:92",
                            "text": "@notice Emitted when the maximum position duration is updated."
                        },
                        "eventSelector": "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b",
                        "name": "MaxPositionDurationUpdated",
                        "nameLocation": "2321:26:92",
                        "parameters": {
                            "id": 11632,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11631,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxPositionDuration",
                                    "nameLocation": "2356:22:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11633,
                                    "src": "2348:30:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11630,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2348:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2347:32:92"
                        }
                    },
                    {
                        "id": 11638,
                        "nodeType": "EventDefinition",
                        "src": "2457:65:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11634,
                            "nodeType": "StructuredDocumentation",
                            "src": "2386:66:92",
                            "text": "@notice Emitted when the minimum position duration is updated."
                        },
                        "eventSelector": "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178",
                        "name": "MinPositionDurationUpdated",
                        "nameLocation": "2463:26:92",
                        "parameters": {
                            "id": 11637,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11636,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinPositionDuration",
                                    "nameLocation": "2498:22:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11638,
                                    "src": "2490:30:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11635,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2490:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2489:32:92"
                        }
                    },
                    {
                        "id": 11643,
                        "nodeType": "EventDefinition",
                        "src": "2591:49:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11639,
                            "nodeType": "StructuredDocumentation",
                            "src": "2528:58:92",
                            "text": "@notice Emitted when the maximum fixed APR is updated."
                        },
                        "eventSelector": "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978",
                        "name": "MaxFixedAPRUpdated",
                        "nameLocation": "2597:18:92",
                        "parameters": {
                            "id": 11642,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11641,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFixedAPR",
                                    "nameLocation": "2624:14:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11643,
                                    "src": "2616:22:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11640,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2616:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2615:24:92"
                        }
                    },
                    {
                        "id": 11648,
                        "nodeType": "EventDefinition",
                        "src": "2709:49:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11644,
                            "nodeType": "StructuredDocumentation",
                            "src": "2646:58:92",
                            "text": "@notice Emitted when the minimum fixed APR is updated."
                        },
                        "eventSelector": "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191",
                        "name": "MinFixedAPRUpdated",
                        "nameLocation": "2715:18:92",
                        "parameters": {
                            "id": 11647,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11646,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFixedAPR",
                                    "nameLocation": "2742:14:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11648,
                                    "src": "2734:22:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11645,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2734:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2733:24:92"
                        }
                    },
                    {
                        "id": 11653,
                        "nodeType": "EventDefinition",
                        "src": "2834:61:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11649,
                            "nodeType": "StructuredDocumentation",
                            "src": "2764:65:92",
                            "text": "@notice Emitted when the maximum time stretch APR is updated."
                        },
                        "eventSelector": "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e",
                        "name": "MaxTimeStretchAPRUpdated",
                        "nameLocation": "2840:24:92",
                        "parameters": {
                            "id": 11652,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11651,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxTimeStretchAPR",
                                    "nameLocation": "2873:20:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11653,
                                    "src": "2865:28:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11650,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2865:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2864:30:92"
                        }
                    },
                    {
                        "id": 11658,
                        "nodeType": "EventDefinition",
                        "src": "2971:61:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11654,
                            "nodeType": "StructuredDocumentation",
                            "src": "2901:65:92",
                            "text": "@notice Emitted when the minimum time stretch APR is updated."
                        },
                        "eventSelector": "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46",
                        "name": "MinTimeStretchAPRUpdated",
                        "nameLocation": "2977:24:92",
                        "parameters": {
                            "id": 11657,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11656,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinTimeStretchAPR",
                                    "nameLocation": "3010:20:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11658,
                                    "src": "3002:28:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11655,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3002:7:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3001:30:92"
                        }
                    },
                    {
                        "id": 11664,
                        "nodeType": "EventDefinition",
                        "src": "3097:50:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11659,
                            "nodeType": "StructuredDocumentation",
                            "src": "3038:54:92",
                            "text": "@notice Emitted when the maximum fees are updated."
                        },
                        "eventSelector": "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7",
                        "name": "MaxFeesUpdated",
                        "nameLocation": "3103:14:92",
                        "parameters": {
                            "id": 11663,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11662,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFees",
                                    "nameLocation": "3135:10:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11664,
                                    "src": "3118:27:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 11661,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11660,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3118:11:92",
                                                "3130:4:92"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10738,
                                            "src": "3118:16:92"
                                        },
                                        "referencedDeclaration": 10738,
                                        "src": "3118:16:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10738_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3117:29:92"
                        }
                    },
                    {
                        "id": 11670,
                        "nodeType": "EventDefinition",
                        "src": "3212:50:92",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11665,
                            "nodeType": "StructuredDocumentation",
                            "src": "3153:54:92",
                            "text": "@notice Emitted when the minimum fees are updated."
                        },
                        "eventSelector": "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421",
                        "name": "MinFeesUpdated",
                        "nameLocation": "3218:14:92",
                        "parameters": {
                            "id": 11669,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11668,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFees",
                                    "nameLocation": "3250:10:92",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11670,
                                    "src": "3233:27:92",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 11667,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11666,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3233:11:92",
                                                "3245:4:92"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10738,
                                            "src": "3233:16:92"
                                        },
                                        "referencedDeclaration": 10738,
                                        "src": "3233:16:92",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10738_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3232:29:92"
                        }
                    },
                    {
                        "id": 11673,
                        "nodeType": "ErrorDefinition",
                        "src": "3411:40:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11671,
                            "nodeType": "StructuredDocumentation",
                            "src": "3288:118:92",
                            "text": "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added."
                        },
                        "errorSelector": "bd34634f",
                        "name": "DeployerCoordinatorAlreadyAdded",
                        "nameLocation": "3417:31:92",
                        "parameters": {
                            "id": 11672,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3448:2:92"
                        }
                    },
                    {
                        "id": 11676,
                        "nodeType": "ErrorDefinition",
                        "src": "3576:36:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11674,
                            "nodeType": "StructuredDocumentation",
                            "src": "3457:114:92",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added."
                        },
                        "errorSelector": "4bf121ab",
                        "name": "DeployerCoordinatorNotAdded",
                        "nameLocation": "3582:27:92",
                        "parameters": {
                            "id": 11675,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3609:2:92"
                        }
                    },
                    {
                        "id": 11679,
                        "nodeType": "ErrorDefinition",
                        "src": "3803:41:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11677,
                            "nodeType": "StructuredDocumentation",
                            "src": "3618:180:92",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators."
                        },
                        "errorSelector": "3c9c032c",
                        "name": "DeployerCoordinatorIndexMismatch",
                        "nameLocation": "3809:32:92",
                        "parameters": {
                            "id": 11678,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3841:2:92"
                        }
                    },
                    {
                        "id": 11682,
                        "nodeType": "ErrorDefinition",
                        "src": "3958:25:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11680,
                            "nodeType": "StructuredDocumentation",
                            "src": "3850:103:92",
                            "text": "@notice Thrown when the ending index of a range is larger than the\n         underlying list."
                        },
                        "errorSelector": "e0f7becb",
                        "name": "EndIndexTooLarge",
                        "nameLocation": "3964:16:92",
                        "parameters": {
                            "id": 11681,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3980:2:92"
                        }
                    },
                    {
                        "id": 11685,
                        "nodeType": "ErrorDefinition",
                        "src": "4281:34:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11683,
                            "nodeType": "StructuredDocumentation",
                            "src": "3989:287:92",
                            "text": "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "4287:25:92",
                        "parameters": {
                            "id": 11684,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4312:2:92"
                        }
                    },
                    {
                        "id": 11688,
                        "nodeType": "ErrorDefinition",
                        "src": "4616:44:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11686,
                            "nodeType": "StructuredDocumentation",
                            "src": "4321:290:92",
                            "text": "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration."
                        },
                        "errorSelector": "8dbae0a8",
                        "name": "InvalidCheckpointDurationResolution",
                        "nameLocation": "4622:35:92",
                        "parameters": {
                            "id": 11687,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4657:2:92"
                        }
                    },
                    {
                        "id": 11691,
                        "nodeType": "ErrorDefinition",
                        "src": "4837:28:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11689,
                            "nodeType": "StructuredDocumentation",
                            "src": "4666:166:92",
                            "text": "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance."
                        },
                        "errorSelector": "e8c02dd7",
                        "name": "InvalidDeployConfig",
                        "nameLocation": "4843:19:92",
                        "parameters": {
                            "id": 11690,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4862:2:92"
                        }
                    },
                    {
                        "id": 11694,
                        "nodeType": "ErrorDefinition",
                        "src": "5006:35:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11692,
                            "nodeType": "StructuredDocumentation",
                            "src": "4871:130:92",
                            "text": "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory."
                        },
                        "errorSelector": "6e623f0f",
                        "name": "InvalidDeployerCoordinator",
                        "nameLocation": "5012:26:92",
                        "parameters": {
                            "id": 11693,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5038:2:92"
                        }
                    },
                    {
                        "id": 11697,
                        "nodeType": "ErrorDefinition",
                        "src": "5225:20:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11695,
                            "nodeType": "StructuredDocumentation",
                            "src": "5047:173:92",
                            "text": "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees."
                        },
                        "errorSelector": "2d8768f9",
                        "name": "InvalidFees",
                        "nameLocation": "5231:11:92",
                        "parameters": {
                            "id": 11696,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5242:2:92"
                        }
                    },
                    {
                        "id": 11700,
                        "nodeType": "ErrorDefinition",
                        "src": "5358:23:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11698,
                            "nodeType": "StructuredDocumentation",
                            "src": "5251:102:92",
                            "text": "@notice Thrown when the starting index of a range is larger than the\n         ending index."
                        },
                        "errorSelector": "764e6b56",
                        "name": "InvalidIndexes",
                        "nameLocation": "5364:14:92",
                        "parameters": {
                            "id": 11699,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5378:2:92"
                        }
                    },
                    {
                        "id": 11703,
                        "nodeType": "ErrorDefinition",
                        "src": "5573:23:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11701,
                            "nodeType": "StructuredDocumentation",
                            "src": "5387:181:92",
                            "text": "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter."
                        },
                        "errorSelector": "2c20e3f6",
                        "name": "InvalidMaxFees",
                        "nameLocation": "5579:14:92",
                        "parameters": {
                            "id": 11702,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5593:2:92"
                        }
                    },
                    {
                        "id": 11706,
                        "nodeType": "ErrorDefinition",
                        "src": "5787:23:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11704,
                            "nodeType": "StructuredDocumentation",
                            "src": "5602:180:92",
                            "text": "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter."
                        },
                        "errorSelector": "15b05a8f",
                        "name": "InvalidMinFees",
                        "nameLocation": "5793:14:92",
                        "parameters": {
                            "id": 11705,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5807:2:92"
                        }
                    },
                    {
                        "id": 11709,
                        "nodeType": "ErrorDefinition",
                        "src": "6074:37:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11707,
                            "nodeType": "StructuredDocumentation",
                            "src": "5816:253:92",
                            "text": "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration."
                        },
                        "errorSelector": "f9c0959d",
                        "name": "InvalidMaxCheckpointDuration",
                        "nameLocation": "6080:28:92",
                        "parameters": {
                            "id": 11708,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6108:2:92"
                        }
                    },
                    {
                        "id": 11712,
                        "nodeType": "ErrorDefinition",
                        "src": "6374:37:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11710,
                            "nodeType": "StructuredDocumentation",
                            "src": "6117:252:92",
                            "text": "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration."
                        },
                        "errorSelector": "0433acc6",
                        "name": "InvalidMinCheckpointDuration",
                        "nameLocation": "6380:28:92",
                        "parameters": {
                            "id": 11711,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6408:2:92"
                        }
                    },
                    {
                        "id": 11715,
                        "nodeType": "ErrorDefinition",
                        "src": "6671:35:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11713,
                            "nodeType": "StructuredDocumentation",
                            "src": "6417:249:92",
                            "text": "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration."
                        },
                        "errorSelector": "cfb699cb",
                        "name": "InvalidMaxPositionDuration",
                        "nameLocation": "6677:26:92",
                        "parameters": {
                            "id": 11714,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6703:2:92"
                        }
                    },
                    {
                        "id": 11718,
                        "nodeType": "ErrorDefinition",
                        "src": "6965:35:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11716,
                            "nodeType": "StructuredDocumentation",
                            "src": "6712:248:92",
                            "text": "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration."
                        },
                        "errorSelector": "600f5a02",
                        "name": "InvalidMinPositionDuration",
                        "nameLocation": "6971:26:92",
                        "parameters": {
                            "id": 11717,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6997:2:92"
                        }
                    },
                    {
                        "id": 11721,
                        "nodeType": "ErrorDefinition",
                        "src": "7207:32:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11719,
                            "nodeType": "StructuredDocumentation",
                            "src": "7006:196:92",
                            "text": "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "7213:23:92",
                        "parameters": {
                            "id": 11720,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7236:2:92"
                        }
                    },
                    {
                        "id": 11724,
                        "nodeType": "ErrorDefinition",
                        "src": "7393:27:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11722,
                            "nodeType": "StructuredDocumentation",
                            "src": "7245:143:92",
                            "text": "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR."
                        },
                        "errorSelector": "673edec0",
                        "name": "InvalidMaxFixedAPR",
                        "nameLocation": "7399:18:92",
                        "parameters": {
                            "id": 11723,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7417:2:92"
                        }
                    },
                    {
                        "id": 11727,
                        "nodeType": "ErrorDefinition",
                        "src": "7573:27:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11725,
                            "nodeType": "StructuredDocumentation",
                            "src": "7426:142:92",
                            "text": "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR."
                        },
                        "errorSelector": "1670f797",
                        "name": "InvalidMinFixedAPR",
                        "nameLocation": "7579:18:92",
                        "parameters": {
                            "id": 11726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7597:2:92"
                        }
                    },
                    {
                        "id": 11730,
                        "nodeType": "ErrorDefinition",
                        "src": "7784:24:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11728,
                            "nodeType": "StructuredDocumentation",
                            "src": "7606:173:92",
                            "text": "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs."
                        },
                        "errorSelector": "30554de1",
                        "name": "InvalidFixedAPR",
                        "nameLocation": "7790:15:92",
                        "parameters": {
                            "id": 11729,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7805:2:92"
                        }
                    },
                    {
                        "id": 11733,
                        "nodeType": "ErrorDefinition",
                        "src": "7992:33:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11731,
                            "nodeType": "StructuredDocumentation",
                            "src": "7814:173:92",
                            "text": "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR."
                        },
                        "errorSelector": "a35539d0",
                        "name": "InvalidMaxTimeStretchAPR",
                        "nameLocation": "7998:24:92",
                        "parameters": {
                            "id": 11732,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8022:2:92"
                        }
                    },
                    {
                        "id": 11736,
                        "nodeType": "ErrorDefinition",
                        "src": "8208:33:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11734,
                            "nodeType": "StructuredDocumentation",
                            "src": "8031:172:92",
                            "text": "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR."
                        },
                        "errorSelector": "5a8f6557",
                        "name": "InvalidMinTimeStretchAPR",
                        "nameLocation": "8214:24:92",
                        "parameters": {
                            "id": 11735,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8238:2:92"
                        }
                    },
                    {
                        "id": 11739,
                        "nodeType": "ErrorDefinition",
                        "src": "8537:30:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11737,
                            "nodeType": "StructuredDocumentation",
                            "src": "8247:285:92",
                            "text": "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR."
                        },
                        "errorSelector": "83ebdfb7",
                        "name": "InvalidTimeStretchAPR",
                        "nameLocation": "8543:21:92",
                        "parameters": {
                            "id": 11738,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8564:2:92"
                        }
                    },
                    {
                        "id": 11742,
                        "nodeType": "ErrorDefinition",
                        "src": "8672:22:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11740,
                            "nodeType": "StructuredDocumentation",
                            "src": "8573:94:92",
                            "text": "@notice Thrown when ether is sent to the factory when `receive` is\n         locked."
                        },
                        "errorSelector": "5563ada8",
                        "name": "ReceiveLocked",
                        "nameLocation": "8678:13:92",
                        "parameters": {
                            "id": 11741,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8691:2:92"
                        }
                    },
                    {
                        "id": 11745,
                        "nodeType": "ErrorDefinition",
                        "src": "8753:23:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11743,
                            "nodeType": "StructuredDocumentation",
                            "src": "8700:48:92",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "8759:14:92",
                        "parameters": {
                            "id": 11744,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8773:2:92"
                        }
                    },
                    {
                        "id": 11748,
                        "nodeType": "ErrorDefinition",
                        "src": "8915:21:92",
                        "nodes": [],
                        "documentation": {
                            "id": 11746,
                            "nodeType": "StructuredDocumentation",
                            "src": "8782:128:92",
                            "text": "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters."
                        },
                        "errorSelector": "82b42900",
                        "name": "Unauthorized",
                        "nameLocation": "8921:12:92",
                        "parameters": {
                            "id": 11747,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8933:2:92"
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
                    11749
                ],
                "name": "IHyperdriveFactory",
                "nameLocation": "124:18:92",
                "scope": 11750,
                "usedErrors": [
                    11673,
                    11676,
                    11679,
                    11682,
                    11685,
                    11688,
                    11691,
                    11694,
                    11697,
                    11700,
                    11703,
                    11706,
                    11709,
                    11712,
                    11715,
                    11718,
                    11721,
                    11724,
                    11727,
                    11730,
                    11733,
                    11736,
                    11739,
                    11742,
                    11745,
                    11748
                ],
                "usedEvents": [
                    11567,
                    11572,
                    11577,
                    11583,
                    11588,
                    11593,
                    11598,
                    11603,
                    11608,
                    11613,
                    11618,
                    11623,
                    11628,
                    11633,
                    11638,
                    11643,
                    11648,
                    11653,
                    11658,
                    11664,
                    11670
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 92
};
