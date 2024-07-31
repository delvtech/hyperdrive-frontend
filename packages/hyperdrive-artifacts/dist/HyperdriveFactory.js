export const HyperdriveFactory = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_factoryConfig",
                    "type": "tuple",
                    "internalType": "struct HyperdriveFactory.FactoryConfig",
                    "components": [
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "deployerCoordinatorManager",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "hyperdriveGovernance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "defaultPausers",
                            "type": "address[]",
                            "internalType": "address[]"
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
                            "name": "checkpointRewarder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "checkpointDurationResolution",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minCheckpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "maxCheckpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minPositionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "maxPositionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minCircuitBreakerDelta",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "maxCircuitBreakerDelta",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minFixedAPR",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "maxFixedAPR",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minTimeStretchAPR",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "maxTimeStretchAPR",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minFees",
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
                        },
                        {
                            "name": "maxFees",
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
                        }
                    ]
                },
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "receive",
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "_instancesToDeployerCoordinators",
            "inputs": [
                {
                    "name": "instance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "deployCoordinator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "addDeployerCoordinator",
            "inputs": [
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "checkpointDurationResolution",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "checkpointRewarder",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "defaultPausers",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "deployAndInitialize",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "__name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_config",
                    "type": "tuple",
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
                    "name": "_extraData",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_fixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IHyperdrive"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployTarget",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_config",
                    "type": "tuple",
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
                    "name": "_extraData",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_fixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_targetIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deployerCoordinatorManager",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "feeCollector",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDeployerCoordinatorAtIndex",
            "inputs": [
                {
                    "name": "_index",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDeployerCoordinatorByInstances",
            "inputs": [
                {
                    "name": "__instances",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "coordinators",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDeployerCoordinatorsInRange",
            "inputs": [
                {
                    "name": "_startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_endIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "range",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstanceAtIndex",
            "inputs": [
                {
                    "name": "_index",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstancesInRange",
            "inputs": [
                {
                    "name": "_startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_endIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "range",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNumberOfDeployerCoordinators",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNumberOfInstances",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "governance",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "hyperdriveGovernance",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isDeployerCoordinator",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isInstance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "kind",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "linkerCodeHash",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "linkerFactory",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxCheckpointDuration",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxCircuitBreakerDelta",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxFees",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
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
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxFixedAPR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxPositionDuration",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxTimeStretchAPR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minCheckpointDuration",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minCircuitBreakerDelta",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minFees",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
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
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minFixedAPR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minPositionDuration",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minTimeStretchAPR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "removeDeployerCoordinator",
            "inputs": [
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_index",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sweepCollector",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "updateCheckpointDurationResolution",
            "inputs": [
                {
                    "name": "_checkpointDurationResolution",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateCheckpointRewarder",
            "inputs": [
                {
                    "name": "_checkpointRewarder",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateDefaultPausers",
            "inputs": [
                {
                    "name": "_defaultPausers_",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateDeployerCoordinatorManager",
            "inputs": [
                {
                    "name": "_deployerCoordinatorManager",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateFeeCollector",
            "inputs": [
                {
                    "name": "_feeCollector",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateGovernance",
            "inputs": [
                {
                    "name": "_governance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateHyperdriveGovernance",
            "inputs": [
                {
                    "name": "_hyperdriveGovernance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateLinkerCodeHash",
            "inputs": [
                {
                    "name": "_linkerCodeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateLinkerFactory",
            "inputs": [
                {
                    "name": "_linkerFactory",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxCheckpointDuration",
            "inputs": [
                {
                    "name": "_maxCheckpointDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxCircuitBreakerDelta",
            "inputs": [
                {
                    "name": "_maxCircuitBreakerDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxFees",
            "inputs": [
                {
                    "name": "__maxFees",
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
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxFixedAPR",
            "inputs": [
                {
                    "name": "_maxFixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxPositionDuration",
            "inputs": [
                {
                    "name": "_maxPositionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMaxTimeStretchAPR",
            "inputs": [
                {
                    "name": "_maxTimeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinCheckpointDuration",
            "inputs": [
                {
                    "name": "_minCheckpointDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinCircuitBreakerDelta",
            "inputs": [
                {
                    "name": "_minCircuitBreakerDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinFees",
            "inputs": [
                {
                    "name": "__minFees",
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
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinFixedAPR",
            "inputs": [
                {
                    "name": "_minFixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinPositionDuration",
            "inputs": [
                {
                    "name": "_minPositionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateMinTimeStretchAPR",
            "inputs": [
                {
                    "name": "_minTimeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateSweepCollector",
            "inputs": [
                {
                    "name": "_sweepCollector",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "version",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
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
            "name": "CheckpointRewarderUpdated",
            "inputs": [
                {
                    "name": "newCheckpointRewarder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
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
                    "name": "name",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
            "name": "DeployerCoordinatorManagerUpdated",
            "inputs": [
                {
                    "name": "deployerCoordinatorManager",
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
            "name": "MaxCircuitBreakerDeltaUpdated",
            "inputs": [
                {
                    "name": "newMaxCircuitBreakerDelta",
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
            "name": "MinCircuitBreakerDeltaUpdated",
            "inputs": [
                {
                    "name": "newMinCircuitBreakerDelta",
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
            "name": "InvalidCircuitBreakerDelta",
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
            "name": "InvalidMaxCircuitBreakerDelta",
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
            "name": "InvalidMinCircuitBreakerDelta",
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
            "name": "LnInvalidInput",
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
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405260026001553480156200001657600080fd5b506040516200416038038062004160833981016040819052620000399162000708565b60006200004782826200096b565b508160e0015182610100015110806200007557508160e0015182610100015162000072919062000a37565b15155b156200009457604051630219d66360e11b815260040160405180910390fd5b610100820151600b8190556101208301511080620000c757508160e00151826101200151620000c4919062000a37565b15155b15620000e65760405163f9c0959d60e01b815260040160405180910390fd5b610120820151600c81905561014083015110806200011957508160e0015182610140015162000116919062000a37565b15155b156200013857604051633007ad0160e11b815260040160405180910390fd5b610140820151600d81905561016083015110806200016b57508160e0015182610160015162000168919062000a37565b15155b156200018a5760405163cfb699cb60e01b815260040160405180910390fd5b610160820151600e556101a08201516101808301511115620001bf5760405163ef9bc65f60e01b815260040160405180910390fd5b610180820151600f556101a08201516010556101e08201516101c08301511115620001fd576040516330554de160e01b815260040160405180910390fd5b6101c08201516011556101e082015160125561022082015161020083015111156200023b576040516383ebdfb760e01b815260040160405180910390fd5b61020082015160135561022082015160145561026082015151670de0b6b3a764000010806200027a5750670de0b6b3a764000082610260015160200151115b80620002965750670de0b6b3a764000082610260015160400151115b80620002b25750670de0b6b3a764000082610260015160600151115b15620002d15760405163161071fb60e11b815260040160405180910390fd5b610260820151805160198190556020820151601a556040820151601b55606090910151601c556102408301515111806200031c57508161026001516020015182610240015160200151115b806200033957508161026001516040015182610240015160400151115b806200035657508161026001516060015182610240015160600151115b1562000375576040516315b05a8f60e01b815260040160405180910390fd5b61024082015180516015556020808201516016556040808301516017556060928301516018558451600280546001600160a01b03199081166001600160a01b03938416179091558387015160038054831691841691909117905591860151600480548416918316919091179055608086015160078054841691831691909117905560a086015160088054841691831691909117905560c08601516009805490931691161790559083015180516200043192601d9201906200046e565b5050610280810151600580546001600160a01b0319166001600160a01b039092169190911790556102a081015160065560e00151600a5562000a5a565b828054828255906000526020600020908101928215620004c6579160200282015b82811115620004c657825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200048f565b50620004d4929150620004d8565b5090565b5b80821115620004d45760008155600101620004d9565b634e487b7160e01b600052604160045260246000fd5b6040516102c081016001600160401b03811182821017156200052b576200052b620004ef565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200055c576200055c620004ef565b604052919050565b80516001600160a01b03811681146200057c57600080fd5b919050565b600082601f8301126200059357600080fd5b815160206001600160401b03821115620005b157620005b1620004ef565b8160051b620005c282820162000531565b9283528481018201928281019087851115620005dd57600080fd5b83870192505b848310156200060757620005f78362000564565b82529183019190830190620005e3565b979650505050505050565b6000608082840312156200062557600080fd5b604051608081016001600160401b03811182821017156200064a576200064a620004ef565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600082601f8301126200068d57600080fd5b81516001600160401b03811115620006a957620006a9620004ef565b6020620006bf601f8301601f1916820162000531565b8281528582848701011115620006d457600080fd5b60005b83811015620006f4578581018301518282018401528201620006d7565b506000928101909101919091529392505050565b600080604083850312156200071c57600080fd5b82516001600160401b03808211156200073457600080fd5b9084019061038082870312156200074a57600080fd5b6200075462000505565b6200075f8362000564565b81526200076f6020840162000564565b6020820152620007826040840162000564565b60408201526060830151828111156200079a57600080fd5b620007a88882860162000581565b606083015250620007bc6080840162000564565b6080820152620007cf60a0840162000564565b60a0820152620007e260c0840162000564565b60c082015260e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0808401519082015261020080840151908201526102208084015190820152610240620008708882860162000612565b9082015262000884876102c0850162000612565b61026082015262000899610340840162000564565b61028082015261036092909201516102a0830152602085015191935080821115620008c357600080fd5b50620008d2858286016200067b565b9150509250929050565b600181811c90821680620008f157607f821691505b6020821081036200091257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200096657600081815260208120601f850160051c81016020861015620009415750805b601f850160051c820191505b8181101562000962578281556001016200094d565b5050505b505050565b81516001600160401b03811115620009875762000987620004ef565b6200099f81620009988454620008dc565b8462000918565b602080601f831160018114620009d75760008415620009be5750858301515b600019600386901b1c1916600185901b17855562000962565b600085815260208120601f198616915b8281101562000a0857888601518255948401946001909101908401620009e7565b508582101562000a275787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008262000a5557634e487b7160e01b600052601260045260246000fd5b500690565b6136f68062000a6a6000396000f3fe6080604052600436106103a65760003560e01c80638e127cf5116101e7578063d2c35ce81161010d578063e4e7148f116100a0578063ec895f111161006f578063ec895f1114610ae9578063f259645814610b09578063f8c09e5914610b29578063fe3d5aeb14610b5957600080fd5b8063e4e7148f14610a74578063e71f34b314610a94578063e83e34b114610ab4578063eb71f66c14610ac957600080fd5b8063dd2b8fbb116100dc578063dd2b8fbb14610a09578063e0e2daaa14610a29578063e1b39c8014610a3f578063e333155514610a5457600080fd5b8063d2c35ce81461099d578063d6f50169146109bd578063daac24da146109d3578063daf012e6146109f357600080fd5b8063b256126311610185578063c415b95c11610154578063c415b95c1461093b578063c905a4b51461095b578063d0f96b9214610971578063d23d7ea31461098757600080fd5b8063b2561263146108c3578063bc30e7a1146108e3578063bf9bd5cd14610903578063c17225631461091957600080fd5b806399623bb1116101c157806399623bb11461084e5780639af252621461086e578063a64c90bf1461088e578063a98a46db146108a357600080fd5b80638e127cf5146107f85780638efc09861461081857806397b0e8ce1461082e57600080fd5b80634554f9a9116102cc578063628027a31161026a57806383b361e81161023957806383b361e81461077857806384c19aab1461079857806385229785146107b85780638627a4f0146107d857600080fd5b8063628027a3146106e35780636b44e6be146107035780636e95d67c146107435780636f6d5c4a1461075857600080fd5b80634fbfee77116102a65780634fbfee771461065a57806354fd4d501461067a5780635720c9d5146106ad5780635aa6e675146106c357600080fd5b80634554f9a91461060e578063488007601461062457806349f13de71461063a57600080fd5b80631ecda0fe116103445780632e7cd971116103135780632e7cd9711461059b5780633e2d2014146105ae578063411c3035146105ce578063421caba8146105ee57600080fd5b80631ecda0fe146105025780632885e3ac146105265780632907d3dd146105465780632b58f4181461056657600080fd5b806310d1dc3e1161038057806310d1dc3e1461047557806311e77bfe146104955780631978ebcf146104b55780631b59be0c146104d557600080fd5b806304baa00b146103d557806306fdde031461042857806310780f731461043d57600080fd5b366103d0576002600154036103ce57604051630aac75b560e31b815260040160405180910390fd5b005b600080fd5b3480156103e157600080fd5b506104126040518060400160405280601181526020017048797065726472697665466163746f727960781b81525081565b60405161041f9190612d09565b60405180910390f35b34801561043457600080fd5b50610412610b79565b34801561044957600080fd5b5060085461045d906001600160a01b031681565b6040516001600160a01b03909116815260200161041f565b34801561048157600080fd5b506103ce610490366004612d1c565b610c07565b3480156104a157600080fd5b506103ce6104b0366004612d2e565b610d20565b3480156104c157600080fd5b506103ce6104d0366004612d2e565b610df9565b3480156104e157600080fd5b506104f56104f0366004612d47565b610e7b565b60405161041f9190612dbc565b34801561050e57600080fd5b50610518600f5481565b60405190815260200161041f565b34801561053257600080fd5b506103ce610541366004612d1c565b610f60565b34801561055257600080fd5b506103ce610561366004612d2e565b6110c6565b34801561057257600080fd5b5061045d610581366004612e31565b60208052600090815260409020546001600160a01b031681565b61045d6105a936600461310b565b611148565b3480156105ba57600080fd5b506103ce6105c9366004612e31565b611589565b3480156105da57600080fd5b506103ce6105e93660046131ec565b6115fd565b3480156105fa57600080fd5b506103ce610609366004612e31565b6117ce565b34801561061a57600080fd5b5061051860105481565b34801561063057600080fd5b5061051860145481565b34801561064657600080fd5b5061045d610655366004613218565b6118d7565b34801561066657600080fd5b506103ce610675366004612d2e565b6119c9565b34801561068657600080fd5b50610412604051806040016040528060078152602001663b18971817189b60c91b81525081565b3480156106b957600080fd5b50610518600b5481565b3480156106cf57600080fd5b5060025461045d906001600160a01b031681565b3480156106ef57600080fd5b506103ce6106fe366004612d2e565b611a26565b34801561070f57600080fd5b5061073361071e366004612e31565b60226020526000908152604090205460ff1681565b604051901515815260200161041f565b34801561074f57600080fd5b50602154610518565b34801561076457600080fd5b506103ce610773366004612d2e565b611aa8565b34801561078457600080fd5b506103ce610793366004612d2e565b611b4c565b3480156107a457600080fd5b506103ce6107b3366004612d2e565b611bce565b3480156107c457600080fd5b506103ce6107d3366004612e31565b611c50565b3480156107e457600080fd5b506103ce6107f3366004612e31565b611cc4565b34801561080457600080fd5b506103ce610813366004612d2e565b611d38565b34801561082457600080fd5b50610518600e5481565b34801561083a57600080fd5b506103ce610849366004612d2e565b611ddc565b34801561085a57600080fd5b5060055461045d906001600160a01b031681565b34801561087a57600080fd5b506103ce610889366004612d47565b611e5e565b34801561089a57600080fd5b506104f5611ec6565b3480156108af57600080fd5b506103ce6108be366004612e31565b611f28565b3480156108cf57600080fd5b506103ce6108de366004612e31565b611f9c565b3480156108ef57600080fd5b506104f56108fe3660046132ac565b612010565b34801561090f57600080fd5b5061051860125481565b34801561092557600080fd5b5061092e61211c565b60405161041f91906132ce565b34801561094757600080fd5b5060075461045d906001600160a01b031681565b34801561096757600080fd5b5061051860065481565b34801561097d57600080fd5b50610518600a5481565b34801561099357600080fd5b5061051860115481565b3480156109a957600080fd5b506103ce6109b8366004612e31565b612174565b3480156109c957600080fd5b5061051860135481565b3480156109df57600080fd5b5061045d6109ee366004612d2e565b6121e8565b3480156109ff57600080fd5b50610518600d5481565b348015610a1557600080fd5b506103ce610a24366004612e31565b612218565b348015610a3557600080fd5b50610518600c5481565b348015610a4b57600080fd5b50601e54610518565b348015610a6057600080fd5b5060045461045d906001600160a01b031681565b348015610a8057600080fd5b5060035461045d906001600160a01b031681565b348015610aa057600080fd5b506103ce610aaf366004612d2e565b61228c565b348015610ac057600080fd5b5061092e612330565b348015610ad557600080fd5b506103ce610ae4366004612d2e565b612388565b348015610af557600080fd5b506104f5610b043660046132ac565b612420565b348015610b1557600080fd5b5060095461045d906001600160a01b031681565b348015610b3557600080fd5b50610733610b44366004612e31565b601f6020526000908152604090205460ff1681565b348015610b6557600080fd5b5061045d610b74366004612d2e565b61252c565b60008054610b86906132f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb2906132f9565b8015610bff5780601f10610bd457610100808354040283529160200191610bff565b820191906000526020600020905b815481529060010190602001808311610be257829003601f168201915b505050505081565b6002546001600160a01b03163314610c31576040516282b42960e81b815260040160405180910390fd5b60408051608081018252601954808252601a546020830152601b5492820192909252601c5460608201529082351180610c71575080602001518260200135115b80610c83575080604001518260400135115b80610c95575080606001518260600135115b15610cb3576040516315b05a8f60e01b815260040160405180910390fd5b81356015819055602080840135601681905560408086013560178190556060808801356018819055835196875294860193909352908401528201527fe1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421906080015b60405180910390a15050565b6002546001600160a01b03163314610d4a576040516282b42960e81b815260040160405180910390fd5b80600b54610d58919061332d565b151580610d71575080600c54610d6e919061332d565b15155b80610d88575080600d54610d85919061332d565b15155b80610d9f575080600e54610d9c919061332d565b15155b15610dbd576040516311b75c1560e31b815260040160405180910390fd5b600a8190556040518181527f04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a906020015b60405180910390a150565b6002546001600160a01b03163314610e23576040516282b42960e81b815260040160405180910390fd5b601254811115610e4657604051631670f79760e01b815260040160405180910390fd5b60118190556040518181527faab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f0219190602001610dee565b60215460609067ffffffffffffffff811115610e9957610e99612e4e565b604051908082528060200260200182016040528015610ec2578160200160208202803683370190505b50905060005b82811015610f585760206000858584818110610ee657610ee661334f565b9050602002016020810190610efb9190612e31565b6001600160a01b0390811682526020820192909252604001600020548351911690839083908110610f2e57610f2e61334f565b6001600160a01b039092166020928302919091019091015280610f508161337b565b915050610ec8565b505b92915050565b6002546001600160a01b03163314610f8a576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260155481526016546020820152601754918101919091526018546060820152670de0b6b3a764000082351180610fd55750670de0b6b3a76400008260200135115b80610feb5750670de0b6b3a76400008260400135115b806110015750670de0b6b3a76400008260600135115b8061100d575080518235105b8061101f575080602001518260200135105b80611031575080604001518260400135105b80611043575080606001518260600135105b156110615760405163161071fb60e11b815260040160405180910390fd5b81356019819055602080840135601a819055604080860135601b819055606080880135601c819055835196875294860193909352908401528201527f8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a790608001610d14565b6002546001600160a01b031633146110f0576040516282b42960e81b815260040160405180910390fd5b601054811115611113576040516328a2d9a960e01b815260040160405180910390fd5b600f8190556040518181527f41f729b931ad8e33d697fff6bc6736a1ac6ee09e8265efae2794ac1635c217a690602001610dee565b6001600160a01b0389166000908152601f602052604081205460ff1661118157604051636e623f0f60e01b815260040160405180910390fd5b61118c888686612541565b60408051336020808301919091528183018e905282518083038401815260608301938490528051910120631d321d7560e31b9092526000916001600160a01b038d169163e990eba8916111e9918e908e908e908a906064016134a5565b6020604051808303816000875af1158015611208573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122c91906134f5565b90508a60206000836001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600460009054906101000a90046001600160a01b03168961014001906001600160a01b031690816001600160a01b0316815250508a6001600160a01b03167fb25b0f0f93209be08152122f1321f6b0ef559a93a67695fff5fea3e5ed234465828c8c8c6040516112eb9493929190613512565b60405180910390a26021805460018082019092557f3a6357012c1a3ae0a17d304c9920310382d968ebcc4b1771f41c6b304205b5700180546001600160a01b0319166001600160a01b03848116918217909255600090815260226020908152604091829020805460ff1916851790559280558051339381019390935282018e90528c16906316abfc7090349060600160405160208183030381529060405280519060200120338b8b8a6040518763ffffffff1660e01b81526004016113b4959493929190613564565b60206040518083038185885af11580156113d2573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906113f791906135c7565b50600260015560005b601d548110156114a357816001600160a01b0316637180c8ca601d838154811061142c5761142c61334f565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b15801561148057600080fd5b505af1158015611494573d6000803e3d6000fd5b50505050806001019050611400565b506004805460405163ab033ea960e01b81526001600160a01b039182169281019290925282169063ab033ea990602401600060405180830381600087803b1580156114ed57600080fd5b505af1158015611501573d6000803e3d6000fd5b50479250508115905061157957604051600090339083908381818185875af1925050503d8060008114611550576040519150601f19603f3d011682016040523d82523d6000602084013e611555565b606091505b5050905080611577576040516312171d8360e31b815260040160405180910390fd5b505b509b9a5050505050505050505050565b6002546001600160a01b031633146115b3576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fae062fb82c932c653cd44617343ecda1d13e375e0d6f20d969c944fbda1963d390600090a250565b6002546001600160a01b0316331480159061162357506003546001600160a01b03163314155b15611640576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000908152601f602052604090205460ff1661167957604051634bf121ab60e01b815260040160405180910390fd5b816001600160a01b0316601e82815481106116965761169661334f565b6000918252602090912001546001600160a01b0316146116c957604051630f2700cb60e21b815260040160405180910390fd5b6001600160a01b0382166000908152601f60205260409020805460ff19169055601e80546116f9906001906135e0565b815481106117095761170961334f565b600091825260209091200154601e80546001600160a01b0390921691839081106117355761173561334f565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550601e805480611774576117746135f3565b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038416917f709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe091a25050565b6002546001600160a01b031633148015906117f457506003546001600160a01b03163314155b15611811576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000908152601f602052604090205460ff161561184b5760405163bd34634f60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601f6020526040808220805460ff19166001908117909155601e8054918201815583527f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e3500180546001600160a01b03191684179055517f16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e39190a250565b6001600160a01b0387166000908152601f602052604081205460ff1661191057604051636e623f0f60e01b815260040160405180910390fd5b61191b878686612541565b60408051336020808301919091528183018c90528251808303840181526060830193849052805191012063182a20c360e31b9092526000916001600160a01b038b169163c151061891611978918c908c908a908a90606401613609565b6020604051808303816000875af1158015611997573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119bb91906134f5565b9a9950505050505050505050565b6002546001600160a01b031633146119f3576040516282b42960e81b815260040160405180910390fd5b600681905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad090600090a250565b6002546001600160a01b03163314611a50576040516282b42960e81b815260040160405180910390fd5b601354811015611a7357604051630a35539d60e41b815260040160405180910390fd5b60148190556040518181527fa9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e90602001610dee565b6002546001600160a01b03163314611ad2576040516282b42960e81b815260040160405180910390fd5b600b54811080611aed5750600a54611aea908261332d565b15155b80611af95750600d5481115b15611b175760405163f9c0959d60e01b815260040160405180910390fd5b600c8190556040518181527f31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f290602001610dee565b6002546001600160a01b03163314611b76576040516282b42960e81b815260040160405180910390fd5b601454811115611b9957604051635a8f655760e01b815260040160405180910390fd5b60138190556040518181527f490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a4690602001610dee565b6002546001600160a01b03163314611bf8576040516282b42960e81b815260040160405180910390fd5b600f54811015611c1b57604051637edc061360e11b815260040160405180910390fd5b60108190556040518181527f0e56d83f54e6f5b08716a54b3abdb59b3025bf12c1875c87ab98ab081d6f838190602001610dee565b6002546001600160a01b03163314611c7a576040516282b42960e81b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d941890600090a250565b6002546001600160a01b03163314611cee576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b6002546001600160a01b03163314611d62576040516282b42960e81b815260040160405180910390fd5b600a54811080611d7d5750600a54611d7a908261332d565b15155b80611d895750600c5481115b15611da757604051630219d66360e11b815260040160405180910390fd5b600b8190556040518181527f6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b763190602001610dee565b6002546001600160a01b03163314611e06576040516282b42960e81b815260040160405180910390fd5b601154811015611e295760405163019cfb7b60e61b815260040160405180910390fd5b60128190556040518181527f4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c78297890602001610dee565b6002546001600160a01b03163314611e88576040516282b42960e81b815260040160405180910390fd5b611e94601d8383612c54565b507f2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc388282604051610d14929190613648565b6060601d805480602002602001604051908101604052809291908181526020018280548015611f1e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611f00575b5050505050905090565b6002546001600160a01b03163314611f52576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517f6f717fb0ab51206dea4064a35c94c2784f8714b012fbde820e0ddee36265eb6a90600090a250565b6002546001600160a01b03163314611fc6576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b606081831061203257604051633b2735ab60e11b815260040160405180910390fd5b6021548211156120555760405163e0f7becb60e01b815260040160405180910390fd5b61205f83836135e0565b67ffffffffffffffff81111561207757612077612e4e565b6040519080825280602002602001820160405280156120a0578160200160208202803683370190505b509050825b82811015610f5857602181815481106120c0576120c061334f565b9060005260206000200160009054906101000a90046001600160a01b031682858303815181106120f2576120f261334f565b6001600160a01b0390921660209283029190910190910152806121148161337b565b9150506120a5565b6121476040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526015548152601654602082015260175491810191909152601854606082015290565b6002546001600160a01b0316331461219e576040516282b42960e81b815260040160405180910390fd5b600780546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6000602182815481106121fd576121fd61334f565b6000918252602090912001546001600160a01b031692915050565b6002546001600160a01b03163314612242576040516282b42960e81b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d890600090a250565b6002546001600160a01b031633146122b6576040516282b42960e81b815260040160405180910390fd5b600c548110806122d15750600a546122ce908261332d565b15155b806122dd5750600e5481115b156122fb57604051633007ad0160e11b815260040160405180910390fd5b600d8190556040518181527fe9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f17890602001610dee565b61235b6040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526019548152601a546020820152601b5491810191909152601c54606082015290565b6002546001600160a01b031633146123b2576040516282b42960e81b815260040160405180910390fd5b600d548110806123cd5750600a546123ca908261332d565b15155b156123eb5760405163cfb699cb60e01b815260040160405180910390fd5b600e8190556040518181527f866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b90602001610dee565b606081831061244257604051633b2735ab60e11b815260040160405180910390fd5b601e548211156124655760405163e0f7becb60e01b815260040160405180910390fd5b61246f83836135e0565b67ffffffffffffffff81111561248757612487612e4e565b6040519080825280602002602001820160405280156124b0578160200160208202803683370190505b509050825b82811015610f5857601e81815481106124d0576124d061334f565b9060005260206000200160009054906101000a90046001600160a01b031682858303815181106125025761250261334f565b6001600160a01b0390921660209283029190910190910152806125248161337b565b9150506124b5565b6000601e82815481106121fd576121fd61334f565b600b54836101000151108061255c5750600c54836101000151115b806125785750600a54836101000151612575919061332d565b15155b1561259657604051635428734d60e01b815260040160405180910390fd5b600d548360e0015110806125af5750600e548360e00151115b806125cd57508261010001518360e001516125ca919061332d565b15155b156125eb5760405163253fffcf60e11b815260040160405180910390fd5b600f548360c00151108061260457506010548360c00151115b156126225760405163ef9bc65f60e01b815260040160405180910390fd5b6019546101c08401515111806126565750601a5460e08401516101c085015160200151612654916301e13380906128b2565b115b8061266b5750601b546101c084015160400151115b806126805750601c546101c084015160600151115b8061269257506015546101c084015151105b806126bb575060165460e08401516101c0850151602001516126b9916301e13380906128d8565b105b806126d057506017546101c084015160400151105b806126e557506018546101c084015160600151105b1561270357604051632d8768f960e01b815260040160405180910390fd5b601154821080612714575060125482115b15612732576040516330554de160e01b815260040160405180910390fd5b60006127576611c37937e0800061275185671bc16d674ec800006128f6565b90612912565b6013549091506127679082612912565b82108061279a575061279761278e671bc16d674ec800006127888685612912565b90612928565b6014549061293d565b82115b156127b8576040516383ebdfb760e01b815260040160405180910390fd5b60006127c8838660e00151612952565b60055460408701519192506001600160a01b0391821691161415806127f35750600654856060015114155b8061281257506007546101608601516001600160a01b03908116911614155b8061283157506008546101808601516001600160a01b03908116911614155b8061285057506009546101a08601516001600160a01b03908116911614155b8061286f57506004546101408601516001600160a01b03908116911614155b8061287e575061012085015115155b1561289c5760405163e8c02dd760e01b815260040160405180910390fd5b3061014086015261012090940193909352505050565b60008260001904841183021582026128c957600080fd5b50910281810615159190040190565b60008260001904841183021582026128ef57600080fd5b5091020490565b600061290b83670de0b6b3a7640000846128d8565b9392505050565b6000818311612921578161290b565b5090919050565b600061290b8383670de0b6b3a76400006128d8565b600081831161294c578261290b565b50919050565b600080612983612974612966866064613696565b66a5bbed86c5a00090612928565b6748cd4072281e0000906128f6565b9050612997670de0b6b3a7640000826128f6565b90506129ef816127886129c26129bd6129b889670de0b6b3a76400006136ad565b6129f7565b612a25565b6129e96129bd6129d78a8a6301e133806128d8565b6129b890670de0b6b3a76400006136ad565b906128f6565b949350505050565b60006001600160ff1b03821115612a215760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213612a475760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ad39084901c6129f7565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b828054828255906000526020600020908101928215612ca7579160200282015b82811115612ca75781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190612c74565b50612a219291505b80821115612a215760008155600101612caf565b6000815180845260005b81811015612ce957602081850181015186830182015201612ccd565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061290b6020830184612cc3565b60006080828403121561294c57600080fd5b600060208284031215612d4057600080fd5b5035919050565b60008060208385031215612d5a57600080fd5b823567ffffffffffffffff80821115612d7257600080fd5b818501915085601f830112612d8657600080fd5b813581811115612d9557600080fd5b8660208260051b8501011115612daa57600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612dfd5783516001600160a01b031683529284019291840191600101612dd8565b50909695505050505050565b6001600160a01b0381168114612e1e57600080fd5b50565b8035612e2c81612e09565b919050565b600060208284031215612e4357600080fd5b813561290b81612e09565b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715612e8857612e88612e4e565b60405290565b600082601f830112612e9f57600080fd5b813567ffffffffffffffff80821115612eba57612eba612e4e565b604051601f8301601f19908116603f01168101908282118183101715612ee257612ee2612e4e565b81604052838152866020858801011115612efb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060808284031215612f2d57600080fd5b6040516080810181811067ffffffffffffffff82111715612f5057612f50612e4e565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215612f9457600080fd5b612f9c612e64565b9050612fa782612e21565b8152612fb560208301612e21565b6020820152612fc660408301612e21565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140613023818401612e21565b90820152610160613035838201612e21565b90820152610180613047838201612e21565b908201526101a0613059838201612e21565b908201526101c061306c84848301612f1b565b9082015292915050565b60006060828403121561308857600080fd5b6040516060810167ffffffffffffffff82821081831117156130ac576130ac612e4e565b81604052829350843591506130c082612e09565b90825260208401359081151582146130d757600080fd5b81602084015260408501359150808211156130f157600080fd5b506130fe85828601612e8e565b6040830152505092915050565b6000806000806000806000806000806103608b8d03121561312b57600080fd5b8a35995061313b60208c01612e21565b985060408b013567ffffffffffffffff8082111561315857600080fd5b6131648e838f01612e8e565b99506131738e60608f01612f81565b98506102a08d013591508082111561318a57600080fd5b6131968e838f01612e8e565b97506102c08d013596506102e08d013595506103008d013594506103208d01359150808211156131c557600080fd5b506131d28d828e01613076565b9250506103408b013590509295989b9194979a5092959850565b600080604083850312156131ff57600080fd5b823561320a81612e09565b946020939093013593505050565b600080600080600080600080610320898b03121561323557600080fd5b88359750602089013561324781612e09565b96506132568a60408b01612f81565b955061028089013567ffffffffffffffff81111561327357600080fd5b61327f8b828c01612e8e565b989b979a5095986102a0810135976102c082013597506102e0820135965061030090910135945092505050565b600080604083850312156132bf57600080fd5b50508035926020909101359150565b8151815260208083015190820152604080830151908201526060808301519082015260808101610f5a565b600181811c9082168061330d57607f821691505b60208210810361294c57634e487b7160e01b600052602260045260246000fd5b60008261334a57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161338d5761338d613365565b5060010190565b80516001600160a01b0316825260208101516133bb60208401826001600160a01b03169052565b5060408101516133d660408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015161343c828501826001600160a01b03169052565b5050610160818101516001600160a01b0390811691840191909152610180808301518216908401526101a080830151909116908301526101c09081015180519183019190915260208101516101e083015260408101516102008301526060015161022090910152565b60006102c08783528060208401526134bf81840188612cc3565b90506134ce6040840187613394565b8281036102808401526134e18186612cc3565b915050826102a08301529695505050505050565b60006020828403121561350757600080fd5b815161290b81612e09565b6001600160a01b03851681526102a06020820181905260009061353783820187612cc3565b90506135466040840186613394565b8281036102808401526135598185612cc3565b979650505050505050565b858152600060018060a01b03808716602084015285604084015284606084015260a060808401528084511660a0840152506020830151151560c08301526040830151606060e08401526135bb610100840182612cc3565b98975050505050505050565b6000602082840312156135d957600080fd5b5051919050565b81810381811115610f5a57610f5a613365565b634e487b7160e01b600052603160045260246000fd5b60006102c087835261361e6020840188613394565b8061026084015261363181840187612cc3565b61028084019590955250506102a001529392505050565b60208082528181018390526000908460408401835b8681101561368b57823561367081612e09565b6001600160a01b03168252918301919083019060010161365d565b509695505050505050565b8082028115828204841417610f5a57610f5a613365565b80820180821115610f5a57610f5a61336556fea26469706673582212209a4e0fbfa48ec6505166a04e467c4a3264b5ad7f72672691376eddbba20f425064736f6c63430008140033',
    methodIdentifiers: {
        "_instancesToDeployerCoordinators(address)": "2b58f418",
        "addDeployerCoordinator(address)": "421caba8",
        "checkpointDurationResolution()": "d0f96b92",
        "checkpointRewarder()": "f2596458",
        "defaultPausers()": "a64c90bf",
        "deployAndInitialize(bytes32,address,string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "2e7cd971",
        "deployTarget(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "49f13de7",
        "deployerCoordinatorManager()": "e4e7148f",
        "feeCollector()": "c415b95c",
        "getDeployerCoordinatorAtIndex(uint256)": "fe3d5aeb",
        "getDeployerCoordinatorByInstances(address[])": "1b59be0c",
        "getDeployerCoordinatorsInRange(uint256,uint256)": "ec895f11",
        "getInstanceAtIndex(uint256)": "daac24da",
        "getInstancesInRange(uint256,uint256)": "bc30e7a1",
        "getNumberOfDeployerCoordinators()": "e1b39c80",
        "getNumberOfInstances()": "6e95d67c",
        "governance()": "5aa6e675",
        "hyperdriveGovernance()": "e3331555",
        "isDeployerCoordinator(address)": "f8c09e59",
        "isInstance(address)": "6b44e6be",
        "kind()": "04baa00b",
        "linkerCodeHash()": "c905a4b5",
        "linkerFactory()": "99623bb1",
        "maxCheckpointDuration()": "e0e2daaa",
        "maxCircuitBreakerDelta()": "4554f9a9",
        "maxFees()": "e83e34b1",
        "maxFixedAPR()": "bf9bd5cd",
        "maxPositionDuration()": "8efc0986",
        "maxTimeStretchAPR()": "48800760",
        "minCheckpointDuration()": "5720c9d5",
        "minCircuitBreakerDelta()": "1ecda0fe",
        "minFees()": "c1722563",
        "minFixedAPR()": "d23d7ea3",
        "minPositionDuration()": "daf012e6",
        "minTimeStretchAPR()": "d6f50169",
        "name()": "06fdde03",
        "removeDeployerCoordinator(address,uint256)": "411c3035",
        "sweepCollector()": "10780f73",
        "updateCheckpointDurationResolution(uint256)": "11e77bfe",
        "updateCheckpointRewarder(address)": "3e2d2014",
        "updateDefaultPausers(address[])": "9af25262",
        "updateDeployerCoordinatorManager(address)": "a98a46db",
        "updateFeeCollector(address)": "d2c35ce8",
        "updateGovernance(address)": "b2561263",
        "updateHyperdriveGovernance(address)": "dd2b8fbb",
        "updateLinkerCodeHash(bytes32)": "4fbfee77",
        "updateLinkerFactory(address)": "85229785",
        "updateMaxCheckpointDuration(uint256)": "6f6d5c4a",
        "updateMaxCircuitBreakerDelta(uint256)": "84c19aab",
        "updateMaxFees((uint256,uint256,uint256,uint256))": "2885e3ac",
        "updateMaxFixedAPR(uint256)": "97b0e8ce",
        "updateMaxPositionDuration(uint256)": "eb71f66c",
        "updateMaxTimeStretchAPR(uint256)": "628027a3",
        "updateMinCheckpointDuration(uint256)": "8e127cf5",
        "updateMinCircuitBreakerDelta(uint256)": "2907d3dd",
        "updateMinFees((uint256,uint256,uint256,uint256))": "10d1dc3e",
        "updateMinFixedAPR(uint256)": "1978ebcf",
        "updateMinPositionDuration(uint256)": "e71f34b3",
        "updateMinTimeStretchAPR(uint256)": "83b361e8",
        "updateSweepCollector(address)": "8627a4f0",
        "version()": "54fd4d50"
    }
};
