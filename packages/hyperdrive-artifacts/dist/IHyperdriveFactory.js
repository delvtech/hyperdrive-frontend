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
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReceiveLocked\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"ReceiveLocked()\":[{\"notice\":\"Thrown when ether is sent to the factory when `receive` is         locked.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector used in new deployments is         updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x5f7850059953850a99bba38ebd44d8c6346cd151e2d7f7af250a06edec603e9f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://01c6772ed3e05ac9148c2b1cba8efb582d90fc8cd770fc14e80a2807bee93cc6\",\"dweb:/ipfs/QmThmQJSqs7qwKDyVa2NniN7sqT8Ez6zyLGdTMWr3Hfaew\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                                    "internalType": "contract IERC20",
                                    "name": "vaultSharesToken",
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
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
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
        "id": 11236,
        "exportedSymbols": {
            "IHyperdrive": [
                10506
            ],
            "IHyperdriveFactory": [
                11235
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8900:90",
        "nodes": [
            {
                "id": 11039,
                "nodeType": "PragmaDirective",
                "src": "39:23:90",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11041,
                "nodeType": "ImportDirective",
                "src": "64:48:90",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11236,
                "sourceUnit": 10507,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11040,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10506,
                            "src": "73:11:90",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11235,
                "nodeType": "ContractDefinition",
                "src": "114:8824:90",
                "nodes": [
                    {
                        "id": 11053,
                        "nodeType": "EventDefinition",
                        "src": "229:164:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11042,
                            "nodeType": "StructuredDocumentation",
                            "src": "169:55:90",
                            "text": "@notice Emitted when a Hyperdrive pool is deployed."
                        },
                        "eventSelector": "d371ed88cc563fd25b2a95ce8bb8d0adbf9bb4d8725c94996d2cae1d0ddf2a72",
                        "name": "Deployed",
                        "nameLocation": "235:8:90",
                        "parameters": {
                            "id": 11052,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11044,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "269:19:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11053,
                                    "src": "253:35:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11043,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "253:7:90",
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
                                    "id": 11046,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "hyperdrive",
                                    "nameLocation": "306:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11053,
                                    "src": "298:18:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11045,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "298:7:90",
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
                                    "id": 11049,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "config",
                                    "nameLocation": "355:6:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11053,
                                    "src": "326:35:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10254_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 11048,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11047,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "326:11:90",
                                                "338:16:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10254,
                                            "src": "326:28:90"
                                        },
                                        "referencedDeclaration": 10254,
                                        "src": "326:28:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10254_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11051,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "extraData",
                                    "nameLocation": "377:9:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11053,
                                    "src": "371:15:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 11050,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "371:5:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "243:149:90"
                        }
                    },
                    {
                        "id": 11058,
                        "nodeType": "EventDefinition",
                        "src": "461:68:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11054,
                            "nodeType": "StructuredDocumentation",
                            "src": "399:57:90",
                            "text": "@notice Emitted when a deployer coordinator is added."
                        },
                        "eventSelector": "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3",
                        "name": "DeployerCoordinatorAdded",
                        "nameLocation": "467:24:90",
                        "parameters": {
                            "id": 11057,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11056,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "508:19:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11058,
                                    "src": "492:35:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11055,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "492:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "491:37:90"
                        }
                    },
                    {
                        "id": 11063,
                        "nodeType": "EventDefinition",
                        "src": "599:70:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11059,
                            "nodeType": "StructuredDocumentation",
                            "src": "535:59:90",
                            "text": "@notice Emitted when a deployer coordinator is removed."
                        },
                        "eventSelector": "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0",
                        "name": "DeployerCoordinatorRemoved",
                        "nameLocation": "605:26:90",
                        "parameters": {
                            "id": 11062,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11061,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "648:19:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11063,
                                    "src": "632:35:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11060,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "632:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "631:37:90"
                        }
                    },
                    {
                        "id": 11069,
                        "nodeType": "EventDefinition",
                        "src": "744:57:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11064,
                            "nodeType": "StructuredDocumentation",
                            "src": "675:64:90",
                            "text": "@notice Emitted when the list of default pausers is updated."
                        },
                        "eventSelector": "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38",
                        "name": "DefaultPausersUpdated",
                        "nameLocation": "750:21:90",
                        "parameters": {
                            "id": 11068,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11067,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newDefaultPausers",
                                    "nameLocation": "782:17:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11069,
                                    "src": "772:27:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11065,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "772:7:90",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 11066,
                                        "nodeType": "ArrayTypeName",
                                        "src": "772:9:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "771:29:90"
                        }
                    },
                    {
                        "id": 11074,
                        "nodeType": "EventDefinition",
                        "src": "890:59:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11070,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:78:90",
                            "text": "@notice Emitted when the fee collector used in new deployments is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "896:19:90",
                        "parameters": {
                            "id": 11073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11072,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "932:15:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "916:31:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11071,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "916:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "915:33:90"
                        }
                    },
                    {
                        "id": 11079,
                        "nodeType": "EventDefinition",
                        "src": "1056:63:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11075,
                            "nodeType": "StructuredDocumentation",
                            "src": "955:96:90",
                            "text": "@notice Emitted when the sweep collector used in new deployments is\n         updated."
                        },
                        "eventSelector": "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2",
                        "name": "SweepCollectorUpdated",
                        "nameLocation": "1062:21:90",
                        "parameters": {
                            "id": 11078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11077,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newSweepCollector",
                                    "nameLocation": "1100:17:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11079,
                                    "src": "1084:33:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11076,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1084:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1083:35:90"
                        }
                    },
                    {
                        "id": 11084,
                        "nodeType": "EventDefinition",
                        "src": "1191:52:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11080,
                            "nodeType": "StructuredDocumentation",
                            "src": "1125:61:90",
                            "text": "@notice Emitted when the factory's governance is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "1197:17:90",
                        "parameters": {
                            "id": 11083,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11082,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "governance",
                                    "nameLocation": "1231:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11084,
                                    "src": "1215:26:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11081,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1215:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1214:28:90"
                        }
                    },
                    {
                        "id": 11089,
                        "nodeType": "EventDefinition",
                        "src": "1353:72:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11085,
                            "nodeType": "StructuredDocumentation",
                            "src": "1249:99:90",
                            "text": "@notice Emitted when the governance address used in new deployments is\n         updated."
                        },
                        "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
                        "name": "HyperdriveGovernanceUpdated",
                        "nameLocation": "1359:27:90",
                        "parameters": {
                            "id": 11088,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11087,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "hyperdriveGovernance",
                                    "nameLocation": "1403:20:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11089,
                                    "src": "1387:36:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11086,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1387:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1386:38:90"
                        }
                    },
                    {
                        "id": 11094,
                        "nodeType": "EventDefinition",
                        "src": "1531:61:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11090,
                            "nodeType": "StructuredDocumentation",
                            "src": "1431:95:90",
                            "text": "@notice Emitted when the linker factory used in new deployments is\n         updated."
                        },
                        "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
                        "name": "LinkerFactoryUpdated",
                        "nameLocation": "1537:20:90",
                        "parameters": {
                            "id": 11093,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11092,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerFactory",
                                    "nameLocation": "1574:16:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11094,
                                    "src": "1558:32:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11091,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1558:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1557:34:90"
                        }
                    },
                    {
                        "id": 11099,
                        "nodeType": "EventDefinition",
                        "src": "1700:63:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11095,
                            "nodeType": "StructuredDocumentation",
                            "src": "1598:97:90",
                            "text": "@notice Emitted when the linker code hash used in new deployments is\n         updated."
                        },
                        "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
                        "name": "LinkerCodeHashUpdated",
                        "nameLocation": "1706:21:90",
                        "parameters": {
                            "id": 11098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11097,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerCodeHash",
                                    "nameLocation": "1744:17:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11099,
                                    "src": "1728:33:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11096,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1728:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1727:35:90"
                        }
                    },
                    {
                        "id": 11104,
                        "nodeType": "EventDefinition",
                        "src": "1845:97:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11100,
                            "nodeType": "StructuredDocumentation",
                            "src": "1769:71:90",
                            "text": "@notice Emitted when the checkpoint duration resolution is updated."
                        },
                        "eventSelector": "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a",
                        "name": "CheckpointDurationResolutionUpdated",
                        "nameLocation": "1851:35:90",
                        "parameters": {
                            "id": 11103,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11102,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newCheckpointDurationResolution",
                                    "nameLocation": "1904:31:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11104,
                                    "src": "1896:39:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11101,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1896:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1886:55:90"
                        }
                    },
                    {
                        "id": 11109,
                        "nodeType": "EventDefinition",
                        "src": "2021:69:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11105,
                            "nodeType": "StructuredDocumentation",
                            "src": "1948:68:90",
                            "text": "@notice Emitted when the maximum checkpoint duration is updated."
                        },
                        "eventSelector": "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2",
                        "name": "MaxCheckpointDurationUpdated",
                        "nameLocation": "2027:28:90",
                        "parameters": {
                            "id": 11108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11107,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxCheckpointDuration",
                                    "nameLocation": "2064:24:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11109,
                                    "src": "2056:32:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11106,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2056:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2055:34:90"
                        }
                    },
                    {
                        "id": 11114,
                        "nodeType": "EventDefinition",
                        "src": "2169:69:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11110,
                            "nodeType": "StructuredDocumentation",
                            "src": "2096:68:90",
                            "text": "@notice Emitted when the minimum checkpoint duration is updated."
                        },
                        "eventSelector": "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631",
                        "name": "MinCheckpointDurationUpdated",
                        "nameLocation": "2175:28:90",
                        "parameters": {
                            "id": 11113,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11112,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinCheckpointDuration",
                                    "nameLocation": "2212:24:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11114,
                                    "src": "2204:32:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11111,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2204:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2203:34:90"
                        }
                    },
                    {
                        "id": 11119,
                        "nodeType": "EventDefinition",
                        "src": "2315:65:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11115,
                            "nodeType": "StructuredDocumentation",
                            "src": "2244:66:90",
                            "text": "@notice Emitted when the maximum position duration is updated."
                        },
                        "eventSelector": "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b",
                        "name": "MaxPositionDurationUpdated",
                        "nameLocation": "2321:26:90",
                        "parameters": {
                            "id": 11118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11117,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxPositionDuration",
                                    "nameLocation": "2356:22:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11119,
                                    "src": "2348:30:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11116,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2348:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2347:32:90"
                        }
                    },
                    {
                        "id": 11124,
                        "nodeType": "EventDefinition",
                        "src": "2457:65:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11120,
                            "nodeType": "StructuredDocumentation",
                            "src": "2386:66:90",
                            "text": "@notice Emitted when the minimum position duration is updated."
                        },
                        "eventSelector": "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178",
                        "name": "MinPositionDurationUpdated",
                        "nameLocation": "2463:26:90",
                        "parameters": {
                            "id": 11123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11122,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinPositionDuration",
                                    "nameLocation": "2498:22:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11124,
                                    "src": "2490:30:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11121,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2490:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2489:32:90"
                        }
                    },
                    {
                        "id": 11129,
                        "nodeType": "EventDefinition",
                        "src": "2591:49:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11125,
                            "nodeType": "StructuredDocumentation",
                            "src": "2528:58:90",
                            "text": "@notice Emitted when the maximum fixed APR is updated."
                        },
                        "eventSelector": "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978",
                        "name": "MaxFixedAPRUpdated",
                        "nameLocation": "2597:18:90",
                        "parameters": {
                            "id": 11128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11127,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFixedAPR",
                                    "nameLocation": "2624:14:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2616:22:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11126,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2616:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2615:24:90"
                        }
                    },
                    {
                        "id": 11134,
                        "nodeType": "EventDefinition",
                        "src": "2709:49:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11130,
                            "nodeType": "StructuredDocumentation",
                            "src": "2646:58:90",
                            "text": "@notice Emitted when the minimum fixed APR is updated."
                        },
                        "eventSelector": "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191",
                        "name": "MinFixedAPRUpdated",
                        "nameLocation": "2715:18:90",
                        "parameters": {
                            "id": 11133,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11132,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFixedAPR",
                                    "nameLocation": "2742:14:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11134,
                                    "src": "2734:22:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11131,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2734:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2733:24:90"
                        }
                    },
                    {
                        "id": 11139,
                        "nodeType": "EventDefinition",
                        "src": "2834:61:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11135,
                            "nodeType": "StructuredDocumentation",
                            "src": "2764:65:90",
                            "text": "@notice Emitted when the maximum time stretch APR is updated."
                        },
                        "eventSelector": "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e",
                        "name": "MaxTimeStretchAPRUpdated",
                        "nameLocation": "2840:24:90",
                        "parameters": {
                            "id": 11138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11137,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxTimeStretchAPR",
                                    "nameLocation": "2873:20:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11139,
                                    "src": "2865:28:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11136,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2865:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2864:30:90"
                        }
                    },
                    {
                        "id": 11144,
                        "nodeType": "EventDefinition",
                        "src": "2971:61:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11140,
                            "nodeType": "StructuredDocumentation",
                            "src": "2901:65:90",
                            "text": "@notice Emitted when the minimum time stretch APR is updated."
                        },
                        "eventSelector": "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46",
                        "name": "MinTimeStretchAPRUpdated",
                        "nameLocation": "2977:24:90",
                        "parameters": {
                            "id": 11143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11142,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinTimeStretchAPR",
                                    "nameLocation": "3010:20:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11144,
                                    "src": "3002:28:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11141,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3002:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3001:30:90"
                        }
                    },
                    {
                        "id": 11150,
                        "nodeType": "EventDefinition",
                        "src": "3097:50:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11145,
                            "nodeType": "StructuredDocumentation",
                            "src": "3038:54:90",
                            "text": "@notice Emitted when the maximum fees are updated."
                        },
                        "eventSelector": "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7",
                        "name": "MaxFeesUpdated",
                        "nameLocation": "3103:14:90",
                        "parameters": {
                            "id": 11149,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11148,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFees",
                                    "nameLocation": "3135:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "3118:27:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$10211_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 11147,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11146,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3118:11:90",
                                                "3130:4:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10211,
                                            "src": "3118:16:90"
                                        },
                                        "referencedDeclaration": 10211,
                                        "src": "3118:16:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10211_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3117:29:90"
                        }
                    },
                    {
                        "id": 11156,
                        "nodeType": "EventDefinition",
                        "src": "3212:50:90",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11151,
                            "nodeType": "StructuredDocumentation",
                            "src": "3153:54:90",
                            "text": "@notice Emitted when the minimum fees are updated."
                        },
                        "eventSelector": "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421",
                        "name": "MinFeesUpdated",
                        "nameLocation": "3218:14:90",
                        "parameters": {
                            "id": 11155,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11154,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFees",
                                    "nameLocation": "3250:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11156,
                                    "src": "3233:27:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$10211_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 11153,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11152,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3233:11:90",
                                                "3245:4:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10211,
                                            "src": "3233:16:90"
                                        },
                                        "referencedDeclaration": 10211,
                                        "src": "3233:16:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10211_storage_ptr",
                                            "typeString": "struct IHyperdrive.Fees"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3232:29:90"
                        }
                    },
                    {
                        "id": 11159,
                        "nodeType": "ErrorDefinition",
                        "src": "3411:40:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11157,
                            "nodeType": "StructuredDocumentation",
                            "src": "3288:118:90",
                            "text": "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added."
                        },
                        "errorSelector": "bd34634f",
                        "name": "DeployerCoordinatorAlreadyAdded",
                        "nameLocation": "3417:31:90",
                        "parameters": {
                            "id": 11158,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3448:2:90"
                        }
                    },
                    {
                        "id": 11162,
                        "nodeType": "ErrorDefinition",
                        "src": "3576:36:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11160,
                            "nodeType": "StructuredDocumentation",
                            "src": "3457:114:90",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added."
                        },
                        "errorSelector": "4bf121ab",
                        "name": "DeployerCoordinatorNotAdded",
                        "nameLocation": "3582:27:90",
                        "parameters": {
                            "id": 11161,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3609:2:90"
                        }
                    },
                    {
                        "id": 11165,
                        "nodeType": "ErrorDefinition",
                        "src": "3803:41:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11163,
                            "nodeType": "StructuredDocumentation",
                            "src": "3618:180:90",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators."
                        },
                        "errorSelector": "3c9c032c",
                        "name": "DeployerCoordinatorIndexMismatch",
                        "nameLocation": "3809:32:90",
                        "parameters": {
                            "id": 11164,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3841:2:90"
                        }
                    },
                    {
                        "id": 11168,
                        "nodeType": "ErrorDefinition",
                        "src": "3958:25:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11166,
                            "nodeType": "StructuredDocumentation",
                            "src": "3850:103:90",
                            "text": "@notice Thrown when the ending index of a range is larger than the\n         underlying list."
                        },
                        "errorSelector": "e0f7becb",
                        "name": "EndIndexTooLarge",
                        "nameLocation": "3964:16:90",
                        "parameters": {
                            "id": 11167,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3980:2:90"
                        }
                    },
                    {
                        "id": 11171,
                        "nodeType": "ErrorDefinition",
                        "src": "4281:34:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11169,
                            "nodeType": "StructuredDocumentation",
                            "src": "3989:287:90",
                            "text": "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "4287:25:90",
                        "parameters": {
                            "id": 11170,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4312:2:90"
                        }
                    },
                    {
                        "id": 11174,
                        "nodeType": "ErrorDefinition",
                        "src": "4616:44:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11172,
                            "nodeType": "StructuredDocumentation",
                            "src": "4321:290:90",
                            "text": "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration."
                        },
                        "errorSelector": "8dbae0a8",
                        "name": "InvalidCheckpointDurationResolution",
                        "nameLocation": "4622:35:90",
                        "parameters": {
                            "id": 11173,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4657:2:90"
                        }
                    },
                    {
                        "id": 11177,
                        "nodeType": "ErrorDefinition",
                        "src": "4837:28:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11175,
                            "nodeType": "StructuredDocumentation",
                            "src": "4666:166:90",
                            "text": "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance."
                        },
                        "errorSelector": "e8c02dd7",
                        "name": "InvalidDeployConfig",
                        "nameLocation": "4843:19:90",
                        "parameters": {
                            "id": 11176,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4862:2:90"
                        }
                    },
                    {
                        "id": 11180,
                        "nodeType": "ErrorDefinition",
                        "src": "5006:35:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11178,
                            "nodeType": "StructuredDocumentation",
                            "src": "4871:130:90",
                            "text": "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory."
                        },
                        "errorSelector": "6e623f0f",
                        "name": "InvalidDeployerCoordinator",
                        "nameLocation": "5012:26:90",
                        "parameters": {
                            "id": 11179,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5038:2:90"
                        }
                    },
                    {
                        "id": 11183,
                        "nodeType": "ErrorDefinition",
                        "src": "5225:20:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11181,
                            "nodeType": "StructuredDocumentation",
                            "src": "5047:173:90",
                            "text": "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees."
                        },
                        "errorSelector": "2d8768f9",
                        "name": "InvalidFees",
                        "nameLocation": "5231:11:90",
                        "parameters": {
                            "id": 11182,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5242:2:90"
                        }
                    },
                    {
                        "id": 11186,
                        "nodeType": "ErrorDefinition",
                        "src": "5358:23:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11184,
                            "nodeType": "StructuredDocumentation",
                            "src": "5251:102:90",
                            "text": "@notice Thrown when the starting index of a range is larger than the\n         ending index."
                        },
                        "errorSelector": "764e6b56",
                        "name": "InvalidIndexes",
                        "nameLocation": "5364:14:90",
                        "parameters": {
                            "id": 11185,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5378:2:90"
                        }
                    },
                    {
                        "id": 11189,
                        "nodeType": "ErrorDefinition",
                        "src": "5573:23:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11187,
                            "nodeType": "StructuredDocumentation",
                            "src": "5387:181:90",
                            "text": "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter."
                        },
                        "errorSelector": "2c20e3f6",
                        "name": "InvalidMaxFees",
                        "nameLocation": "5579:14:90",
                        "parameters": {
                            "id": 11188,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5593:2:90"
                        }
                    },
                    {
                        "id": 11192,
                        "nodeType": "ErrorDefinition",
                        "src": "5787:23:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11190,
                            "nodeType": "StructuredDocumentation",
                            "src": "5602:180:90",
                            "text": "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter."
                        },
                        "errorSelector": "15b05a8f",
                        "name": "InvalidMinFees",
                        "nameLocation": "5793:14:90",
                        "parameters": {
                            "id": 11191,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5807:2:90"
                        }
                    },
                    {
                        "id": 11195,
                        "nodeType": "ErrorDefinition",
                        "src": "6074:37:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11193,
                            "nodeType": "StructuredDocumentation",
                            "src": "5816:253:90",
                            "text": "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration."
                        },
                        "errorSelector": "f9c0959d",
                        "name": "InvalidMaxCheckpointDuration",
                        "nameLocation": "6080:28:90",
                        "parameters": {
                            "id": 11194,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6108:2:90"
                        }
                    },
                    {
                        "id": 11198,
                        "nodeType": "ErrorDefinition",
                        "src": "6374:37:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11196,
                            "nodeType": "StructuredDocumentation",
                            "src": "6117:252:90",
                            "text": "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration."
                        },
                        "errorSelector": "0433acc6",
                        "name": "InvalidMinCheckpointDuration",
                        "nameLocation": "6380:28:90",
                        "parameters": {
                            "id": 11197,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6408:2:90"
                        }
                    },
                    {
                        "id": 11201,
                        "nodeType": "ErrorDefinition",
                        "src": "6671:35:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11199,
                            "nodeType": "StructuredDocumentation",
                            "src": "6417:249:90",
                            "text": "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration."
                        },
                        "errorSelector": "cfb699cb",
                        "name": "InvalidMaxPositionDuration",
                        "nameLocation": "6677:26:90",
                        "parameters": {
                            "id": 11200,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6703:2:90"
                        }
                    },
                    {
                        "id": 11204,
                        "nodeType": "ErrorDefinition",
                        "src": "6965:35:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11202,
                            "nodeType": "StructuredDocumentation",
                            "src": "6712:248:90",
                            "text": "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration."
                        },
                        "errorSelector": "600f5a02",
                        "name": "InvalidMinPositionDuration",
                        "nameLocation": "6971:26:90",
                        "parameters": {
                            "id": 11203,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6997:2:90"
                        }
                    },
                    {
                        "id": 11207,
                        "nodeType": "ErrorDefinition",
                        "src": "7207:32:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11205,
                            "nodeType": "StructuredDocumentation",
                            "src": "7006:196:90",
                            "text": "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "7213:23:90",
                        "parameters": {
                            "id": 11206,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7236:2:90"
                        }
                    },
                    {
                        "id": 11210,
                        "nodeType": "ErrorDefinition",
                        "src": "7393:27:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11208,
                            "nodeType": "StructuredDocumentation",
                            "src": "7245:143:90",
                            "text": "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR."
                        },
                        "errorSelector": "673edec0",
                        "name": "InvalidMaxFixedAPR",
                        "nameLocation": "7399:18:90",
                        "parameters": {
                            "id": 11209,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7417:2:90"
                        }
                    },
                    {
                        "id": 11213,
                        "nodeType": "ErrorDefinition",
                        "src": "7573:27:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11211,
                            "nodeType": "StructuredDocumentation",
                            "src": "7426:142:90",
                            "text": "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR."
                        },
                        "errorSelector": "1670f797",
                        "name": "InvalidMinFixedAPR",
                        "nameLocation": "7579:18:90",
                        "parameters": {
                            "id": 11212,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7597:2:90"
                        }
                    },
                    {
                        "id": 11216,
                        "nodeType": "ErrorDefinition",
                        "src": "7784:24:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11214,
                            "nodeType": "StructuredDocumentation",
                            "src": "7606:173:90",
                            "text": "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs."
                        },
                        "errorSelector": "30554de1",
                        "name": "InvalidFixedAPR",
                        "nameLocation": "7790:15:90",
                        "parameters": {
                            "id": 11215,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7805:2:90"
                        }
                    },
                    {
                        "id": 11219,
                        "nodeType": "ErrorDefinition",
                        "src": "7992:33:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11217,
                            "nodeType": "StructuredDocumentation",
                            "src": "7814:173:90",
                            "text": "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR."
                        },
                        "errorSelector": "a35539d0",
                        "name": "InvalidMaxTimeStretchAPR",
                        "nameLocation": "7998:24:90",
                        "parameters": {
                            "id": 11218,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8022:2:90"
                        }
                    },
                    {
                        "id": 11222,
                        "nodeType": "ErrorDefinition",
                        "src": "8208:33:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11220,
                            "nodeType": "StructuredDocumentation",
                            "src": "8031:172:90",
                            "text": "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR."
                        },
                        "errorSelector": "5a8f6557",
                        "name": "InvalidMinTimeStretchAPR",
                        "nameLocation": "8214:24:90",
                        "parameters": {
                            "id": 11221,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8238:2:90"
                        }
                    },
                    {
                        "id": 11225,
                        "nodeType": "ErrorDefinition",
                        "src": "8537:30:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11223,
                            "nodeType": "StructuredDocumentation",
                            "src": "8247:285:90",
                            "text": "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR."
                        },
                        "errorSelector": "83ebdfb7",
                        "name": "InvalidTimeStretchAPR",
                        "nameLocation": "8543:21:90",
                        "parameters": {
                            "id": 11224,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8564:2:90"
                        }
                    },
                    {
                        "id": 11228,
                        "nodeType": "ErrorDefinition",
                        "src": "8672:22:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11226,
                            "nodeType": "StructuredDocumentation",
                            "src": "8573:94:90",
                            "text": "@notice Thrown when ether is sent to the factory when `receive` is\n         locked."
                        },
                        "errorSelector": "5563ada8",
                        "name": "ReceiveLocked",
                        "nameLocation": "8678:13:90",
                        "parameters": {
                            "id": 11227,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8691:2:90"
                        }
                    },
                    {
                        "id": 11231,
                        "nodeType": "ErrorDefinition",
                        "src": "8753:23:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11229,
                            "nodeType": "StructuredDocumentation",
                            "src": "8700:48:90",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "8759:14:90",
                        "parameters": {
                            "id": 11230,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8773:2:90"
                        }
                    },
                    {
                        "id": 11234,
                        "nodeType": "ErrorDefinition",
                        "src": "8915:21:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11232,
                            "nodeType": "StructuredDocumentation",
                            "src": "8782:128:90",
                            "text": "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters."
                        },
                        "errorSelector": "82b42900",
                        "name": "Unauthorized",
                        "nameLocation": "8921:12:90",
                        "parameters": {
                            "id": 11233,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8933:2:90"
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
                    11235
                ],
                "name": "IHyperdriveFactory",
                "nameLocation": "124:18:90",
                "scope": 11236,
                "usedErrors": [
                    11159,
                    11162,
                    11165,
                    11168,
                    11171,
                    11174,
                    11177,
                    11180,
                    11183,
                    11186,
                    11189,
                    11192,
                    11195,
                    11198,
                    11201,
                    11204,
                    11207,
                    11210,
                    11213,
                    11216,
                    11219,
                    11222,
                    11225,
                    11228,
                    11231,
                    11234
                ],
                "usedEvents": [
                    11053,
                    11058,
                    11063,
                    11069,
                    11074,
                    11079,
                    11084,
                    11089,
                    11094,
                    11099,
                    11104,
                    11109,
                    11114,
                    11119,
                    11124,
                    11129,
                    11134,
                    11139,
                    11144,
                    11150,
                    11156
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 90
};
