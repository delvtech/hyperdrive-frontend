export const IHyperdriveFactory = {
    abi: [
        {
            "type": "event",
            "name": "CheckpointDurationResolutionUpdated",
            "inputs": [
                {
                    "name": "newCheckpointDurationResolution",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DefaultPausersUpdated",
            "inputs": [
                {
                    "name": "newDefaultPausers",
                    "type": "address[]",
                    "indexed": false,
                    "internalType": "address[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Deployed",
            "inputs": [
                {
                    "name": "deployerCoordinator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "hyperdrive",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "config",
                    "type": "tuple",
                    "indexed": false,
                    "internalType": "struct IHyperdrive.PoolDeployConfig",
                    "components": [
                        {
                            "name": "baseToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "vaultSharesToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "linkerFactory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "linkerCodeHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumTransactionAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "positionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "checkpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sweepCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fees",
                            "type": "tuple",
                            "internalType": "struct IHyperdrive.Fees",
                            "components": [
                                {
                                    "name": "curve",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "flat",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceLP",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceZombie",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DeployerCoordinatorAdded",
            "inputs": [
                {
                    "name": "deployerCoordinator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DeployerCoordinatorRemoved",
            "inputs": [
                {
                    "name": "deployerCoordinator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "governance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "HyperdriveGovernanceUpdated",
            "inputs": [
                {
                    "name": "hyperdriveGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "LinkerCodeHashUpdated",
            "inputs": [
                {
                    "name": "newLinkerCodeHash",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "LinkerFactoryUpdated",
            "inputs": [
                {
                    "name": "newLinkerFactory",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxCheckpointDurationUpdated",
            "inputs": [
                {
                    "name": "newMaxCheckpointDuration",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxFeesUpdated",
            "inputs": [
                {
                    "name": "newMaxFees",
                    "type": "tuple",
                    "indexed": false,
                    "internalType": "struct IHyperdrive.Fees",
                    "components": [
                        {
                            "name": "curve",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flat",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLP",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceZombie",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxFixedAPRUpdated",
            "inputs": [
                {
                    "name": "newMaxFixedAPR",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxPositionDurationUpdated",
            "inputs": [
                {
                    "name": "newMaxPositionDuration",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxTimeStretchAPRUpdated",
            "inputs": [
                {
                    "name": "newMaxTimeStretchAPR",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinCheckpointDurationUpdated",
            "inputs": [
                {
                    "name": "newMinCheckpointDuration",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinFeesUpdated",
            "inputs": [
                {
                    "name": "newMinFees",
                    "type": "tuple",
                    "indexed": false,
                    "internalType": "struct IHyperdrive.Fees",
                    "components": [
                        {
                            "name": "curve",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flat",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLP",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceZombie",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinFixedAPRUpdated",
            "inputs": [
                {
                    "name": "newMinFixedAPR",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinPositionDurationUpdated",
            "inputs": [
                {
                    "name": "newMinPositionDuration",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinTimeStretchAPRUpdated",
            "inputs": [
                {
                    "name": "newMinTimeStretchAPR",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "DeployerCoordinatorAlreadyAdded",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DeployerCoordinatorIndexMismatch",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DeployerCoordinatorNotAdded",
            "inputs": []
        },
        {
            "type": "error",
            "name": "EndIndexTooLarge",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidCheckpointDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidCheckpointDurationResolution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidDeployConfig",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidDeployerCoordinator",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFees",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFixedAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidIndexes",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMaxCheckpointDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMaxFees",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMaxFixedAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMaxPositionDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMaxTimeStretchAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinCheckpointDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinFees",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinFixedAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinPositionDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinTimeStretchAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPositionDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTimeStretchAPR",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReceiveLocked",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {}
};
