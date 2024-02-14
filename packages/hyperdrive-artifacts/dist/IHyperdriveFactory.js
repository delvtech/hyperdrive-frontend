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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Thrown when governance attempts to add a deployer coordinator         that has already been added.\"}],\"DeployerCoordinatorIndexMismatch()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         but specifies the wrong index within the list of deployer         coordinators.\"}],\"DeployerCoordinatorNotAdded()\":[{\"notice\":\"Thrown when governance attempts to remove a deployer coordinator         that was never added.\"}],\"EndIndexTooLarge()\":[{\"notice\":\"Thrown when the ending index of a range is larger than the         underlying list.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration supplied to `deployTarget`         or `deployAndInitialize` isn't a multiple of the checkpoint         duration resolution or isn't within the range specified by the         minimum and maximum checkpoint durations.\"}],\"InvalidCheckpointDurationResolution()\":[{\"notice\":\"Thrown when governance attempts to set the checkpoint duration         resolution to a value that doesn't evenly divide the minimum         checkpoint duration, maximum checkpoint duration, minimum         position duration, or maximum position duration.\"}],\"InvalidDeployConfig()\":[{\"notice\":\"Thrown when the deploy configuration passed to         `deployAndInitialize` has fields set that will be overridden by         governance.\"}],\"InvalidDeployerCoordinator()\":[{\"notice\":\"Thrown when the deployer coordinator passed to         `deployAndInitialize` hasn't been added to the factory.\"}],\"InvalidFees()\":[{\"notice\":\"Thrown when the fee parameters passed to `deployAndInitialize`         aren't within the range specified by the minimum and maximum         fees.\"}],\"InvalidFixedAPR()\":[{\"notice\":\"Thrown when the fixed APR passed to `deployAndInitialize` isn't         within the range specified by the minimum and maximum fixed         APRs.\"}],\"InvalidIndexes()\":[{\"notice\":\"Thrown when the starting index of a range is larger than the         ending index.\"}],\"InvalidMaxCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum checkpoint         duration.\"}],\"InvalidMaxFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the maximum fee         parameters to a smaller value than the corresponding minimum fee         parameter.\"}],\"InvalidMaxFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum fixed APR to         a value that is smaller than the minimum fixed APR.\"}],\"InvalidMaxPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the maximum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is smaller than the minimum position         duration.\"}],\"InvalidMaxTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the maximum time stretch         APR to a value that is smaller than the minimum time stretch         APR.\"}],\"InvalidMinCheckpointDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum checkpoint         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum checkpoint         duration.\"}],\"InvalidMinFees()\":[{\"notice\":\"Thrown when governance attempts to set one of the minimum fee         parameters to a larger value than the corresponding maximum fee         parameter.\"}],\"InvalidMinFixedAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum fixed APR to         a value that is larger than the maximum fixed APR.\"}],\"InvalidMinPositionDuration()\":[{\"notice\":\"Thrown when governance attempts to set the minimum position         duration to a value that isn't a multiple of the checkpoint         duration resolution or is larger than the maximum position         duration.\"}],\"InvalidMinTimeStretchAPR()\":[{\"notice\":\"Thrown when governance attempts to set the minimum time stretch         APR to a value that is larger than the maximum time stretch         APR.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration passed to `deployAndInitialize`         doesn't fall within the range specified by the minimum and         maximum position durations.\"}],\"InvalidTimeStretchAPR()\":[{\"notice\":\"Thrown when a time stretch APR is passed to `deployAndInitialize`         that isn't within the range specified by the minimum and maximum         time stretch APRs or doesn't satisfy the lower and upper safe         bounds implied by the fixed APR.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized caller attempts to update one of the         governance administered parameters.\"}]},\"events\":{\"CheckpointDurationResolutionUpdated(uint256)\":{\"notice\":\"Emitted when the checkpoint duration resolution is updated.\"},\"DefaultPausersUpdated(address[])\":{\"notice\":\"Emitted when the list of default pausers is updated.\"},\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Emitted when a Hyperdrive pool is deployed.\"},\"DeployerCoordinatorAdded(address)\":{\"notice\":\"Emitted when a deployer coordinator is added.\"},\"DeployerCoordinatorRemoved(address)\":{\"notice\":\"Emitted when a deployer coordinator is removed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector used in new deployments is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the factory's governance is updated.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address used in new deployments is         updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash used in new deployments is         updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory used in new deployments is         updated.\"},\"MaxCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum checkpoint duration is updated.\"},\"MaxFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the maximum fees are updated.\"},\"MaxFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum fixed APR is updated.\"},\"MaxPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the maximum position duration is updated.\"},\"MaxTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the maximum time stretch APR is updated.\"},\"MinCheckpointDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum checkpoint duration is updated.\"},\"MinFeesUpdated((uint256,uint256,uint256,uint256))\":{\"notice\":\"Emitted when the minimum fees are updated.\"},\"MinFixedAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum fixed APR is updated.\"},\"MinPositionDurationUpdated(uint256)\":{\"notice\":\"Emitted when the minimum position duration is updated.\"},\"MinTimeStretchAPRUpdated(uint256)\":{\"notice\":\"Emitted when the minimum time stretch APR is updated.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x2567a7b30ae94d08992c9ab75f7bf4785225220bf6b05993f181dc713b6cca7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77c3153b4480e2eefb63be73e3d58d73d678bdd73972224d7cd9034e78ac968f\",\"dweb:/ipfs/QmXpaCgZ6Nk5mrHuJTKVGWLNqV24G8ToygmesLyGSJ9qBP\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]}},\"version\":1}",
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
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveFactory.sol": {
                "keccak256": "0x2567a7b30ae94d08992c9ab75f7bf4785225220bf6b05993f181dc713b6cca7e",
                "urls": [
                    "bzz-raw://77c3153b4480e2eefb63be73e3d58d73d678bdd73972224d7cd9034e78ac968f",
                    "dweb:/ipfs/QmXpaCgZ6Nk5mrHuJTKVGWLNqV24G8ToygmesLyGSJ9qBP"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveFactory.sol",
        "id": 8115,
        "exportedSymbols": {
            "IHyperdrive": [
                7480
            ],
            "IHyperdriveFactory": [
                8114
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:8603:49",
        "nodes": [
            {
                "id": 7926,
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
                "id": 7928,
                "nodeType": "ImportDirective",
                "src": "64:48:49",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8115,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7927,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "73:11:49",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8114,
                "nodeType": "ContractDefinition",
                "src": "114:8527:49",
                "nodes": [
                    {
                        "id": 7940,
                        "nodeType": "EventDefinition",
                        "src": "229:164:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7929,
                            "nodeType": "StructuredDocumentation",
                            "src": "169:55:49",
                            "text": "@notice Emitted when a Hyperdrive pool is deployed."
                        },
                        "eventSelector": "2b2f18d6a5803b503bcb3d887ccd7a77aa7e1e644a4c99effef843bf3e307157",
                        "name": "Deployed",
                        "nameLocation": "235:8:49",
                        "parameters": {
                            "id": 7939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7931,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "269:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7940,
                                    "src": "253:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7930,
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
                                    "id": 7933,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "hyperdrive",
                                    "nameLocation": "306:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7940,
                                    "src": "298:18:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7932,
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
                                    "id": 7936,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "config",
                                    "nameLocation": "355:6:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7940,
                                    "src": "326:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 7935,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7934,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "326:11:49",
                                                "338:16:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7241,
                                            "src": "326:28:49"
                                        },
                                        "referencedDeclaration": 7241,
                                        "src": "326:28:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7938,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "extraData",
                                    "nameLocation": "377:9:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7940,
                                    "src": "371:15:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 7937,
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
                        "id": 7945,
                        "nodeType": "EventDefinition",
                        "src": "461:68:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7941,
                            "nodeType": "StructuredDocumentation",
                            "src": "399:57:49",
                            "text": "@notice Emitted when a deployer coordinator is added."
                        },
                        "eventSelector": "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3",
                        "name": "DeployerCoordinatorAdded",
                        "nameLocation": "467:24:49",
                        "parameters": {
                            "id": 7944,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7943,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "508:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7945,
                                    "src": "492:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7942,
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
                        "id": 7950,
                        "nodeType": "EventDefinition",
                        "src": "599:70:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7946,
                            "nodeType": "StructuredDocumentation",
                            "src": "535:59:49",
                            "text": "@notice Emitted when a deployer coordinator is removed."
                        },
                        "eventSelector": "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0",
                        "name": "DeployerCoordinatorRemoved",
                        "nameLocation": "605:26:49",
                        "parameters": {
                            "id": 7949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7948,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "deployerCoordinator",
                                    "nameLocation": "648:19:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7950,
                                    "src": "632:35:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7947,
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
                        "id": 7956,
                        "nodeType": "EventDefinition",
                        "src": "744:57:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7951,
                            "nodeType": "StructuredDocumentation",
                            "src": "675:64:49",
                            "text": "@notice Emitted when the list of default pausers is updated."
                        },
                        "eventSelector": "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38",
                        "name": "DefaultPausersUpdated",
                        "nameLocation": "750:21:49",
                        "parameters": {
                            "id": 7955,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7954,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newDefaultPausers",
                                    "nameLocation": "782:17:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7956,
                                    "src": "772:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 7952,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "772:7:49",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 7953,
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
                        "id": 7961,
                        "nodeType": "EventDefinition",
                        "src": "890:59:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7957,
                            "nodeType": "StructuredDocumentation",
                            "src": "807:78:49",
                            "text": "@notice Emitted when the fee collector used in new deployments is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "896:19:49",
                        "parameters": {
                            "id": 7960,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7959,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "932:15:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7961,
                                    "src": "916:31:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7958,
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
                        "id": 7966,
                        "nodeType": "EventDefinition",
                        "src": "1021:52:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7962,
                            "nodeType": "StructuredDocumentation",
                            "src": "955:61:49",
                            "text": "@notice Emitted when the factory's governance is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "1027:17:49",
                        "parameters": {
                            "id": 7965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7964,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "governance",
                                    "nameLocation": "1061:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7966,
                                    "src": "1045:26:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7963,
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
                        "id": 7971,
                        "nodeType": "EventDefinition",
                        "src": "1183:72:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7967,
                            "nodeType": "StructuredDocumentation",
                            "src": "1079:99:49",
                            "text": "@notice Emitted when the governance address used in new deployments is\n         updated."
                        },
                        "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
                        "name": "HyperdriveGovernanceUpdated",
                        "nameLocation": "1189:27:49",
                        "parameters": {
                            "id": 7970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7969,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "hyperdriveGovernance",
                                    "nameLocation": "1233:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7971,
                                    "src": "1217:36:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7968,
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
                        "id": 7976,
                        "nodeType": "EventDefinition",
                        "src": "1361:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7972,
                            "nodeType": "StructuredDocumentation",
                            "src": "1261:95:49",
                            "text": "@notice Emitted when the linker factory used in new deployments is\n         updated."
                        },
                        "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
                        "name": "LinkerFactoryUpdated",
                        "nameLocation": "1367:20:49",
                        "parameters": {
                            "id": 7975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7974,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerFactory",
                                    "nameLocation": "1404:16:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7976,
                                    "src": "1388:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7973,
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
                        "id": 7981,
                        "nodeType": "EventDefinition",
                        "src": "1530:63:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7977,
                            "nodeType": "StructuredDocumentation",
                            "src": "1428:97:49",
                            "text": "@notice Emitted when the linker code hash used in new deployments is\n         updated."
                        },
                        "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
                        "name": "LinkerCodeHashUpdated",
                        "nameLocation": "1536:21:49",
                        "parameters": {
                            "id": 7980,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7979,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newLinkerCodeHash",
                                    "nameLocation": "1574:17:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7981,
                                    "src": "1558:33:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 7978,
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
                        "id": 7986,
                        "nodeType": "EventDefinition",
                        "src": "1675:97:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7982,
                            "nodeType": "StructuredDocumentation",
                            "src": "1599:71:49",
                            "text": "@notice Emitted when the checkpoint duration resolution is updated."
                        },
                        "eventSelector": "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a",
                        "name": "CheckpointDurationResolutionUpdated",
                        "nameLocation": "1681:35:49",
                        "parameters": {
                            "id": 7985,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7984,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newCheckpointDurationResolution",
                                    "nameLocation": "1734:31:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7986,
                                    "src": "1726:39:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7983,
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
                        "id": 7991,
                        "nodeType": "EventDefinition",
                        "src": "1851:69:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7987,
                            "nodeType": "StructuredDocumentation",
                            "src": "1778:68:49",
                            "text": "@notice Emitted when the maximum checkpoint duration is updated."
                        },
                        "eventSelector": "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2",
                        "name": "MaxCheckpointDurationUpdated",
                        "nameLocation": "1857:28:49",
                        "parameters": {
                            "id": 7990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7989,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxCheckpointDuration",
                                    "nameLocation": "1894:24:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7991,
                                    "src": "1886:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7988,
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
                        "id": 7996,
                        "nodeType": "EventDefinition",
                        "src": "1999:69:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7992,
                            "nodeType": "StructuredDocumentation",
                            "src": "1926:68:49",
                            "text": "@notice Emitted when the minimum checkpoint duration is updated."
                        },
                        "eventSelector": "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631",
                        "name": "MinCheckpointDurationUpdated",
                        "nameLocation": "2005:28:49",
                        "parameters": {
                            "id": 7995,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7994,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinCheckpointDuration",
                                    "nameLocation": "2042:24:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7996,
                                    "src": "2034:32:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7993,
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
                        "id": 8001,
                        "nodeType": "EventDefinition",
                        "src": "2145:65:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7997,
                            "nodeType": "StructuredDocumentation",
                            "src": "2074:66:49",
                            "text": "@notice Emitted when the maximum position duration is updated."
                        },
                        "eventSelector": "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b",
                        "name": "MaxPositionDurationUpdated",
                        "nameLocation": "2151:26:49",
                        "parameters": {
                            "id": 8000,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7999,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxPositionDuration",
                                    "nameLocation": "2186:22:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8001,
                                    "src": "2178:30:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7998,
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
                        "id": 8006,
                        "nodeType": "EventDefinition",
                        "src": "2287:65:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8002,
                            "nodeType": "StructuredDocumentation",
                            "src": "2216:66:49",
                            "text": "@notice Emitted when the minimum position duration is updated."
                        },
                        "eventSelector": "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178",
                        "name": "MinPositionDurationUpdated",
                        "nameLocation": "2293:26:49",
                        "parameters": {
                            "id": 8005,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8004,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinPositionDuration",
                                    "nameLocation": "2328:22:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8006,
                                    "src": "2320:30:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8003,
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
                        "id": 8011,
                        "nodeType": "EventDefinition",
                        "src": "2421:49:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8007,
                            "nodeType": "StructuredDocumentation",
                            "src": "2358:58:49",
                            "text": "@notice Emitted when the maximum fixed APR is updated."
                        },
                        "eventSelector": "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978",
                        "name": "MaxFixedAPRUpdated",
                        "nameLocation": "2427:18:49",
                        "parameters": {
                            "id": 8010,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8009,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFixedAPR",
                                    "nameLocation": "2454:14:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8011,
                                    "src": "2446:22:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8008,
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
                        "id": 8016,
                        "nodeType": "EventDefinition",
                        "src": "2539:49:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8012,
                            "nodeType": "StructuredDocumentation",
                            "src": "2476:58:49",
                            "text": "@notice Emitted when the minimum fixed APR is updated."
                        },
                        "eventSelector": "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191",
                        "name": "MinFixedAPRUpdated",
                        "nameLocation": "2545:18:49",
                        "parameters": {
                            "id": 8015,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8014,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFixedAPR",
                                    "nameLocation": "2572:14:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8016,
                                    "src": "2564:22:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8013,
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
                        "id": 8021,
                        "nodeType": "EventDefinition",
                        "src": "2664:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8017,
                            "nodeType": "StructuredDocumentation",
                            "src": "2594:65:49",
                            "text": "@notice Emitted when the maximum time stretch APR is updated."
                        },
                        "eventSelector": "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e",
                        "name": "MaxTimeStretchAPRUpdated",
                        "nameLocation": "2670:24:49",
                        "parameters": {
                            "id": 8020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8019,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxTimeStretchAPR",
                                    "nameLocation": "2703:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8021,
                                    "src": "2695:28:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8018,
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
                        "id": 8026,
                        "nodeType": "EventDefinition",
                        "src": "2801:61:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8022,
                            "nodeType": "StructuredDocumentation",
                            "src": "2731:65:49",
                            "text": "@notice Emitted when the minimum time stretch APR is updated."
                        },
                        "eventSelector": "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46",
                        "name": "MinTimeStretchAPRUpdated",
                        "nameLocation": "2807:24:49",
                        "parameters": {
                            "id": 8025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8024,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinTimeStretchAPR",
                                    "nameLocation": "2840:20:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8026,
                                    "src": "2832:28:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8023,
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
                        "id": 8032,
                        "nodeType": "EventDefinition",
                        "src": "2927:50:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8027,
                            "nodeType": "StructuredDocumentation",
                            "src": "2868:54:49",
                            "text": "@notice Emitted when the maximum fees are updated."
                        },
                        "eventSelector": "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7",
                        "name": "MaxFeesUpdated",
                        "nameLocation": "2933:14:49",
                        "parameters": {
                            "id": 8031,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8030,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMaxFees",
                                    "nameLocation": "2965:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8032,
                                    "src": "2948:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 8029,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8028,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "2948:11:49",
                                                "2960:4:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7205,
                                            "src": "2948:16:49"
                                        },
                                        "referencedDeclaration": 7205,
                                        "src": "2948:16:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7205_storage_ptr",
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
                        "id": 8038,
                        "nodeType": "EventDefinition",
                        "src": "3042:50:49",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 8033,
                            "nodeType": "StructuredDocumentation",
                            "src": "2983:54:49",
                            "text": "@notice Emitted when the minimum fees are updated."
                        },
                        "eventSelector": "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421",
                        "name": "MinFeesUpdated",
                        "nameLocation": "3048:14:49",
                        "parameters": {
                            "id": 8037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8036,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "newMinFees",
                                    "nameLocation": "3080:10:49",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8038,
                                    "src": "3063:27:49",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                        "typeString": "struct IHyperdrive.Fees"
                                    },
                                    "typeName": {
                                        "id": 8035,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8034,
                                            "name": "IHyperdrive.Fees",
                                            "nameLocations": [
                                                "3063:11:49",
                                                "3075:4:49"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7205,
                                            "src": "3063:16:49"
                                        },
                                        "referencedDeclaration": 7205,
                                        "src": "3063:16:49",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7205_storage_ptr",
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
                        "id": 8041,
                        "nodeType": "ErrorDefinition",
                        "src": "3241:40:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8039,
                            "nodeType": "StructuredDocumentation",
                            "src": "3118:118:49",
                            "text": "@notice Thrown when governance attempts to add a deployer coordinator\n         that has already been added."
                        },
                        "errorSelector": "bd34634f",
                        "name": "DeployerCoordinatorAlreadyAdded",
                        "nameLocation": "3247:31:49",
                        "parameters": {
                            "id": 8040,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3278:2:49"
                        }
                    },
                    {
                        "id": 8044,
                        "nodeType": "ErrorDefinition",
                        "src": "3406:36:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8042,
                            "nodeType": "StructuredDocumentation",
                            "src": "3287:114:49",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         that was never added."
                        },
                        "errorSelector": "4bf121ab",
                        "name": "DeployerCoordinatorNotAdded",
                        "nameLocation": "3412:27:49",
                        "parameters": {
                            "id": 8043,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3439:2:49"
                        }
                    },
                    {
                        "id": 8047,
                        "nodeType": "ErrorDefinition",
                        "src": "3633:41:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8045,
                            "nodeType": "StructuredDocumentation",
                            "src": "3448:180:49",
                            "text": "@notice Thrown when governance attempts to remove a deployer coordinator\n         but specifies the wrong index within the list of deployer\n         coordinators."
                        },
                        "errorSelector": "3c9c032c",
                        "name": "DeployerCoordinatorIndexMismatch",
                        "nameLocation": "3639:32:49",
                        "parameters": {
                            "id": 8046,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3671:2:49"
                        }
                    },
                    {
                        "id": 8050,
                        "nodeType": "ErrorDefinition",
                        "src": "3788:25:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8048,
                            "nodeType": "StructuredDocumentation",
                            "src": "3680:103:49",
                            "text": "@notice Thrown when the ending index of a range is larger than the\n         underlying list."
                        },
                        "errorSelector": "e0f7becb",
                        "name": "EndIndexTooLarge",
                        "nameLocation": "3794:16:49",
                        "parameters": {
                            "id": 8049,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3810:2:49"
                        }
                    },
                    {
                        "id": 8053,
                        "nodeType": "ErrorDefinition",
                        "src": "4111:34:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8051,
                            "nodeType": "StructuredDocumentation",
                            "src": "3819:287:49",
                            "text": "@notice Thrown when the checkpoint duration supplied to `deployTarget`\n         or `deployAndInitialize` isn't a multiple of the checkpoint\n         duration resolution or isn't within the range specified by the\n         minimum and maximum checkpoint durations."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "4117:25:49",
                        "parameters": {
                            "id": 8052,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4142:2:49"
                        }
                    },
                    {
                        "id": 8056,
                        "nodeType": "ErrorDefinition",
                        "src": "4446:44:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8054,
                            "nodeType": "StructuredDocumentation",
                            "src": "4151:290:49",
                            "text": "@notice Thrown when governance attempts to set the checkpoint duration\n         resolution to a value that doesn't evenly divide the minimum\n         checkpoint duration, maximum checkpoint duration, minimum\n         position duration, or maximum position duration."
                        },
                        "errorSelector": "8dbae0a8",
                        "name": "InvalidCheckpointDurationResolution",
                        "nameLocation": "4452:35:49",
                        "parameters": {
                            "id": 8055,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4487:2:49"
                        }
                    },
                    {
                        "id": 8059,
                        "nodeType": "ErrorDefinition",
                        "src": "4667:28:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8057,
                            "nodeType": "StructuredDocumentation",
                            "src": "4496:166:49",
                            "text": "@notice Thrown when the deploy configuration passed to\n         `deployAndInitialize` has fields set that will be overridden by\n         governance."
                        },
                        "errorSelector": "e8c02dd7",
                        "name": "InvalidDeployConfig",
                        "nameLocation": "4673:19:49",
                        "parameters": {
                            "id": 8058,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4692:2:49"
                        }
                    },
                    {
                        "id": 8062,
                        "nodeType": "ErrorDefinition",
                        "src": "4836:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8060,
                            "nodeType": "StructuredDocumentation",
                            "src": "4701:130:49",
                            "text": "@notice Thrown when the deployer coordinator passed to\n         `deployAndInitialize` hasn't been added to the factory."
                        },
                        "errorSelector": "6e623f0f",
                        "name": "InvalidDeployerCoordinator",
                        "nameLocation": "4842:26:49",
                        "parameters": {
                            "id": 8061,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4868:2:49"
                        }
                    },
                    {
                        "id": 8065,
                        "nodeType": "ErrorDefinition",
                        "src": "5055:20:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8063,
                            "nodeType": "StructuredDocumentation",
                            "src": "4877:173:49",
                            "text": "@notice Thrown when the fee parameters passed to `deployAndInitialize`\n         aren't within the range specified by the minimum and maximum\n         fees."
                        },
                        "errorSelector": "2d8768f9",
                        "name": "InvalidFees",
                        "nameLocation": "5061:11:49",
                        "parameters": {
                            "id": 8064,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5072:2:49"
                        }
                    },
                    {
                        "id": 8068,
                        "nodeType": "ErrorDefinition",
                        "src": "5188:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8066,
                            "nodeType": "StructuredDocumentation",
                            "src": "5081:102:49",
                            "text": "@notice Thrown when the starting index of a range is larger than the\n         ending index."
                        },
                        "errorSelector": "764e6b56",
                        "name": "InvalidIndexes",
                        "nameLocation": "5194:14:49",
                        "parameters": {
                            "id": 8067,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5208:2:49"
                        }
                    },
                    {
                        "id": 8071,
                        "nodeType": "ErrorDefinition",
                        "src": "5403:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8069,
                            "nodeType": "StructuredDocumentation",
                            "src": "5217:181:49",
                            "text": "@notice Thrown when governance attempts to set one of the maximum fee\n         parameters to a smaller value than the corresponding minimum fee\n         parameter."
                        },
                        "errorSelector": "2c20e3f6",
                        "name": "InvalidMaxFees",
                        "nameLocation": "5409:14:49",
                        "parameters": {
                            "id": 8070,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5423:2:49"
                        }
                    },
                    {
                        "id": 8074,
                        "nodeType": "ErrorDefinition",
                        "src": "5617:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8072,
                            "nodeType": "StructuredDocumentation",
                            "src": "5432:180:49",
                            "text": "@notice Thrown when governance attempts to set one of the minimum fee\n         parameters to a larger value than the corresponding maximum fee\n         parameter."
                        },
                        "errorSelector": "15b05a8f",
                        "name": "InvalidMinFees",
                        "nameLocation": "5623:14:49",
                        "parameters": {
                            "id": 8073,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5637:2:49"
                        }
                    },
                    {
                        "id": 8077,
                        "nodeType": "ErrorDefinition",
                        "src": "5904:37:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8075,
                            "nodeType": "StructuredDocumentation",
                            "src": "5646:253:49",
                            "text": "@notice Thrown when governance attempts to set the maximum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum checkpoint\n         duration."
                        },
                        "errorSelector": "f9c0959d",
                        "name": "InvalidMaxCheckpointDuration",
                        "nameLocation": "5910:28:49",
                        "parameters": {
                            "id": 8076,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5938:2:49"
                        }
                    },
                    {
                        "id": 8080,
                        "nodeType": "ErrorDefinition",
                        "src": "6204:37:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8078,
                            "nodeType": "StructuredDocumentation",
                            "src": "5947:252:49",
                            "text": "@notice Thrown when governance attempts to set the minimum checkpoint\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum checkpoint\n         duration."
                        },
                        "errorSelector": "0433acc6",
                        "name": "InvalidMinCheckpointDuration",
                        "nameLocation": "6210:28:49",
                        "parameters": {
                            "id": 8079,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6238:2:49"
                        }
                    },
                    {
                        "id": 8083,
                        "nodeType": "ErrorDefinition",
                        "src": "6501:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8081,
                            "nodeType": "StructuredDocumentation",
                            "src": "6247:249:49",
                            "text": "@notice Thrown when governance attempts to set the maximum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is smaller than the minimum position\n         duration."
                        },
                        "errorSelector": "cfb699cb",
                        "name": "InvalidMaxPositionDuration",
                        "nameLocation": "6507:26:49",
                        "parameters": {
                            "id": 8082,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6533:2:49"
                        }
                    },
                    {
                        "id": 8086,
                        "nodeType": "ErrorDefinition",
                        "src": "6795:35:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8084,
                            "nodeType": "StructuredDocumentation",
                            "src": "6542:248:49",
                            "text": "@notice Thrown when governance attempts to set the minimum position\n         duration to a value that isn't a multiple of the checkpoint\n         duration resolution or is larger than the maximum position\n         duration."
                        },
                        "errorSelector": "600f5a02",
                        "name": "InvalidMinPositionDuration",
                        "nameLocation": "6801:26:49",
                        "parameters": {
                            "id": 8085,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6827:2:49"
                        }
                    },
                    {
                        "id": 8089,
                        "nodeType": "ErrorDefinition",
                        "src": "7037:32:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8087,
                            "nodeType": "StructuredDocumentation",
                            "src": "6836:196:49",
                            "text": "@notice Thrown when the position duration passed to `deployAndInitialize`\n         doesn't fall within the range specified by the minimum and\n         maximum position durations."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "7043:23:49",
                        "parameters": {
                            "id": 8088,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7066:2:49"
                        }
                    },
                    {
                        "id": 8092,
                        "nodeType": "ErrorDefinition",
                        "src": "7223:27:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8090,
                            "nodeType": "StructuredDocumentation",
                            "src": "7075:143:49",
                            "text": "@notice Thrown when governance attempts to set the maximum fixed APR to\n         a value that is smaller than the minimum fixed APR."
                        },
                        "errorSelector": "673edec0",
                        "name": "InvalidMaxFixedAPR",
                        "nameLocation": "7229:18:49",
                        "parameters": {
                            "id": 8091,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7247:2:49"
                        }
                    },
                    {
                        "id": 8095,
                        "nodeType": "ErrorDefinition",
                        "src": "7403:27:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8093,
                            "nodeType": "StructuredDocumentation",
                            "src": "7256:142:49",
                            "text": "@notice Thrown when governance attempts to set the minimum fixed APR to\n         a value that is larger than the maximum fixed APR."
                        },
                        "errorSelector": "1670f797",
                        "name": "InvalidMinFixedAPR",
                        "nameLocation": "7409:18:49",
                        "parameters": {
                            "id": 8094,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7427:2:49"
                        }
                    },
                    {
                        "id": 8098,
                        "nodeType": "ErrorDefinition",
                        "src": "7614:24:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8096,
                            "nodeType": "StructuredDocumentation",
                            "src": "7436:173:49",
                            "text": "@notice Thrown when the fixed APR passed to `deployAndInitialize` isn't\n         within the range specified by the minimum and maximum fixed\n         APRs."
                        },
                        "errorSelector": "30554de1",
                        "name": "InvalidFixedAPR",
                        "nameLocation": "7620:15:49",
                        "parameters": {
                            "id": 8097,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7635:2:49"
                        }
                    },
                    {
                        "id": 8101,
                        "nodeType": "ErrorDefinition",
                        "src": "7822:33:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8099,
                            "nodeType": "StructuredDocumentation",
                            "src": "7644:173:49",
                            "text": "@notice Thrown when governance attempts to set the maximum time stretch\n         APR to a value that is smaller than the minimum time stretch\n         APR."
                        },
                        "errorSelector": "a35539d0",
                        "name": "InvalidMaxTimeStretchAPR",
                        "nameLocation": "7828:24:49",
                        "parameters": {
                            "id": 8100,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7852:2:49"
                        }
                    },
                    {
                        "id": 8104,
                        "nodeType": "ErrorDefinition",
                        "src": "8038:33:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8102,
                            "nodeType": "StructuredDocumentation",
                            "src": "7861:172:49",
                            "text": "@notice Thrown when governance attempts to set the minimum time stretch\n         APR to a value that is larger than the maximum time stretch\n         APR."
                        },
                        "errorSelector": "5a8f6557",
                        "name": "InvalidMinTimeStretchAPR",
                        "nameLocation": "8044:24:49",
                        "parameters": {
                            "id": 8103,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8068:2:49"
                        }
                    },
                    {
                        "id": 8107,
                        "nodeType": "ErrorDefinition",
                        "src": "8367:30:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8105,
                            "nodeType": "StructuredDocumentation",
                            "src": "8077:285:49",
                            "text": "@notice Thrown when a time stretch APR is passed to `deployAndInitialize`\n         that isn't within the range specified by the minimum and maximum\n         time stretch APRs or doesn't satisfy the lower and upper safe\n         bounds implied by the fixed APR."
                        },
                        "errorSelector": "83ebdfb7",
                        "name": "InvalidTimeStretchAPR",
                        "nameLocation": "8373:21:49",
                        "parameters": {
                            "id": 8106,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8394:2:49"
                        }
                    },
                    {
                        "id": 8110,
                        "nodeType": "ErrorDefinition",
                        "src": "8456:23:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8108,
                            "nodeType": "StructuredDocumentation",
                            "src": "8403:48:49",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "8462:14:49",
                        "parameters": {
                            "id": 8109,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8476:2:49"
                        }
                    },
                    {
                        "id": 8113,
                        "nodeType": "ErrorDefinition",
                        "src": "8618:21:49",
                        "nodes": [],
                        "documentation": {
                            "id": 8111,
                            "nodeType": "StructuredDocumentation",
                            "src": "8485:128:49",
                            "text": "@notice Thrown when an unauthorized caller attempts to update one of the\n         governance administered parameters."
                        },
                        "errorSelector": "82b42900",
                        "name": "Unauthorized",
                        "nameLocation": "8624:12:49",
                        "parameters": {
                            "id": 8112,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8636:2:49"
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
                    8114
                ],
                "name": "IHyperdriveFactory",
                "nameLocation": "124:18:49",
                "scope": 8115,
                "usedErrors": [
                    8041,
                    8044,
                    8047,
                    8050,
                    8053,
                    8056,
                    8059,
                    8062,
                    8065,
                    8068,
                    8071,
                    8074,
                    8077,
                    8080,
                    8083,
                    8086,
                    8089,
                    8092,
                    8095,
                    8098,
                    8101,
                    8104,
                    8107,
                    8110,
                    8113
                ],
                "usedEvents": [
                    7940,
                    7945,
                    7950,
                    7956,
                    7961,
                    7966,
                    7971,
                    7976,
                    7981,
                    7986,
                    7991,
                    7996,
                    8001,
                    8006,
                    8011,
                    8016,
                    8021,
                    8026,
                    8032,
                    8038
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 49
};
