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
                    "name": "index",
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
            "name": "getDeployerCoordinatorsInRange",
            "inputs": [
                {
                    "name": "startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "endIndex",
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
                    "name": "index",
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
                    "name": "startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "endIndex",
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
            "name": "instancesToDeployerCoordinators",
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
    bytecode: '0x608060405260026001553480156200001657600080fd5b5060405162003a7738038062003a7783398101604081905262000039916200069d565b6000620000478282620008c2565b508160a001518260c0015110806200007357508160a001518260c001516200007091906200098e565b15155b156200009257604051630219d66360e11b815260040160405180910390fd5b60c0820151600981905560e08301511080620000c257508160a001518260e00151620000bf91906200098e565b15155b15620000e15760405163f9c0959d60e01b815260040160405180910390fd5b60e0820151600a81905561010083015110806200011357508160a001518261010001516200011091906200098e565b15155b156200013257604051633007ad0160e11b815260040160405180910390fd5b610100820151600b81905561012083015110806200016557508160a001518261012001516200016291906200098e565b15155b15620001845760405163cfb699cb60e01b815260040160405180910390fd5b610120820151600c556101608201516101408301511115620001b9576040516330554de160e01b815260040160405180910390fd5b610140820151600d55610160820151600e556101a08201516101808301511115620001f7576040516383ebdfb760e01b815260040160405180910390fd5b610180820151600f556101a08201516010556101e082015151670de0b6b3a76400001080620002365750670de0b6b3a7640000826101e0015160200151115b80620002525750670de0b6b3a7640000826101e0015160400151115b806200026e5750670de0b6b3a7640000826101e0015160600151115b156200028d5760405163161071fb60e11b815260040160405180910390fd5b6101e082015180516015819055602082015160165560408201516017556060909101516018556101c0830151511180620002d85750816101e0015160200151826101c0015160200151115b80620002f55750816101e0015160400151826101c0015160400151115b80620003125750816101e0015160600151826101c0015160600151115b1562000331576040516315b05a8f60e01b815260040160405180910390fd5b6101c082015180516011556020808201516012556040808301516013556060928301516014558451600280546001600160a01b03199081166001600160a01b03938416179091558387015160038054831691841691909117905593860151600680548616918316919091179055608086015160078054909516911617909255908301518051620003c692601992019062000403565b5050610200810151600480546001600160a01b0319166001600160a01b0390921691909117905561022081015160055560a00151600855620009b1565b8280548282559060005260206000209081019282156200045b579160200282015b828111156200045b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000424565b50620004699291506200046d565b5090565b5b808211156200046957600081556001016200046e565b634e487b7160e01b600052604160045260246000fd5b60405161024081016001600160401b0381118282101715620004c057620004c062000484565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004f157620004f162000484565b604052919050565b80516001600160a01b03811681146200051157600080fd5b919050565b600082601f8301126200052857600080fd5b815160206001600160401b0382111562000546576200054662000484565b8160051b62000557828201620004c6565b92835284810182019282810190878511156200057257600080fd5b83870192505b848310156200059c576200058c83620004f9565b8252918301919083019062000578565b979650505050505050565b600060808284031215620005ba57600080fd5b604051608081016001600160401b0381118282101715620005df57620005df62000484565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600082601f8301126200062257600080fd5b81516001600160401b038111156200063e576200063e62000484565b602062000654601f8301601f19168201620004c6565b82815285828487010111156200066957600080fd5b60005b83811015620006895785810183015182820184015282016200066c565b506000928101909101919091529392505050565b60008060408385031215620006b157600080fd5b82516001600160401b0380821115620006c957600080fd5b908401906103008287031215620006df57600080fd5b620006e96200049a565b620006f483620004f9565b81526200070460208401620004f9565b60208201526040830151828111156200071c57600080fd5b6200072a8882860162000516565b6040830152506200073e60608401620004f9565b60608201526200075160808401620004f9565b608082015260a0838101519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c0620007c788828601620005a7565b90820152620007db876102408501620005a7565b6101e0820152620007f06102c08401620004f9565b6102008201526102e092909201516102208301526020850151919350808211156200081a57600080fd5b50620008298582860162000610565b9150509250929050565b600181811c908216806200084857607f821691505b6020821081036200086957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620008bd57600081815260208120601f850160051c81016020861015620008985750805b601f850160051c820191505b81811015620008b957828155600101620008a4565b5050505b505050565b81516001600160401b03811115620008de57620008de62000484565b620008f681620008ef845462000833565b846200086f565b602080601f8311600181146200092e5760008415620009155750858301515b600019600386901b1c1916600185901b178555620008b9565b600085815260208120601f198616915b828110156200095f578886015182559484019460019091019084016200093e565b50858210156200097e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082620009ac57634e487b7160e01b600052601260045260246000fd5b500690565b6130b680620009c16000396000f3fe6080604052600436106102e85760003560e01c806397b0e8ce11610190578063d6f50169116100dc578063e333155511610095578063eb71f66c1161006f578063eb71f66c146108de578063ec895f11146108fe578063f8c09e591461091e578063fe3d5aeb1461094e57600080fd5b8063e333155514610889578063e71f34b3146108a9578063e83e34b1146108c957600080fd5b8063d6f50169146107f2578063daac24da14610808578063daf012e614610828578063dd2b8fbb1461083e578063e0e2daaa1461085e578063e1b39c801461087457600080fd5b8063bf9bd5cd11610149578063c905a4b511610123578063c905a4b514610790578063d0f96b92146107a6578063d23d7ea3146107bc578063d2c35ce8146107d257600080fd5b8063bf9bd5cd14610738578063c17225631461074e578063c415b95c1461077057600080fd5b806397b0e8ce1461067657806399623bb1146106965780639af25262146106b6578063a64c90bf146106d6578063b2561263146106f8578063bc30e7a11461071857600080fd5b806354fd4d501161024f5780636e95d67c1161020857806385229785116101e257806385229785146106005780638627a4f0146106205780638e127cf5146106405780638efc09861461066057600080fd5b80636e95d67c146105ab5780636f6d5c4a146105c057806383b361e8146105e057600080fd5b806354fd4d50146104ad5780635720c9d5146104df5780635aa6e675146104f5578063628027a3146105155780636b44e6be146105355780636c8cc8651461057557600080fd5b80632885e3ac116102a15780632885e3ac146103e95780632facc51914610409578063411c303514610429578063421caba81461044957806348800760146104695780634fbfee771461048d57600080fd5b8063069024941461031757806306fdde031461034757806310780f731461036957806310d1dc3e1461038957806311e77bfe146103a95780631978ebcf146103c957600080fd5b366103125760026001540361031057604051630aac75b560e31b815260040160405180910390fd5b005b600080fd5b61032a610325366004612958565b61096e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561035357600080fd5b5061035c610d5d565b60405161033e9190612acd565b34801561037557600080fd5b5060075461032a906001600160a01b031681565b34801561039557600080fd5b506103106103a4366004612ae0565b610deb565b3480156103b557600080fd5b506103106103c4366004612af2565b610f04565b3480156103d557600080fd5b506103106103e4366004612af2565b610fdd565b3480156103f557600080fd5b50610310610404366004612ae0565b61105f565b34801561041557600080fd5b5061032a610424366004612b0b565b6111c5565b34801561043557600080fd5b50610310610444366004612b9f565b6112b7565b34801561045557600080fd5b50610310610464366004612bcb565b61146f565b34801561047557600080fd5b5061047f60105481565b60405190815260200161033e565b34801561049957600080fd5b506103106104a8366004612af2565b61155f565b3480156104b957600080fd5b5061035c604051806040016040528060068152602001653b189718171960d11b81525081565b3480156104eb57600080fd5b5061047f60095481565b34801561050157600080fd5b5060025461032a906001600160a01b031681565b34801561052157600080fd5b50610310610530366004612af2565b6115bc565b34801561054157600080fd5b50610565610550366004612bcb565b601e6020526000908152604090205460ff1681565b604051901515815260200161033e565b34801561058157600080fd5b5061032a610590366004612bcb565b601c602052600090815260409020546001600160a01b031681565b3480156105b757600080fd5b50601d5461047f565b3480156105cc57600080fd5b506103106105db366004612af2565b61163e565b3480156105ec57600080fd5b506103106105fb366004612af2565b6116e2565b34801561060c57600080fd5b5061031061061b366004612bcb565b611764565b34801561062c57600080fd5b5061031061063b366004612bcb565b6117d8565b34801561064c57600080fd5b5061031061065b366004612af2565b61184c565b34801561066c57600080fd5b5061047f600c5481565b34801561068257600080fd5b50610310610691366004612af2565b6118f0565b3480156106a257600080fd5b5060045461032a906001600160a01b031681565b3480156106c257600080fd5b506103106106d1366004612bef565b611972565b3480156106e257600080fd5b506106eb6119da565b60405161033e9190612c64565b34801561070457600080fd5b50610310610713366004612bcb565b611a3c565b34801561072457600080fd5b506106eb610733366004612cb1565b611ab0565b34801561074457600080fd5b5061047f600e5481565b34801561075a57600080fd5b50610763611bcd565b60405161033e9190612cd3565b34801561077c57600080fd5b5060065461032a906001600160a01b031681565b34801561079c57600080fd5b5061047f60055481565b3480156107b257600080fd5b5061047f60085481565b3480156107c857600080fd5b5061047f600d5481565b3480156107de57600080fd5b506103106107ed366004612bcb565b611c25565b3480156107fe57600080fd5b5061047f600f5481565b34801561081457600080fd5b5061032a610823366004612af2565b611c99565b34801561083457600080fd5b5061047f600b5481565b34801561084a57600080fd5b50610310610859366004612bcb565b611cc9565b34801561086a57600080fd5b5061047f600a5481565b34801561088057600080fd5b50601a5461047f565b34801561089557600080fd5b5060035461032a906001600160a01b031681565b3480156108b557600080fd5b506103106108c4366004612af2565b611d3d565b3480156108d557600080fd5b50610763611de1565b3480156108ea57600080fd5b506103106108f9366004612af2565b611e39565b34801561090a57600080fd5b506106eb610919366004612cb1565b611ed1565b34801561092a57600080fd5b50610565610939366004612bcb565b601b6020526000908152604090205460ff1681565b34801561095a57600080fd5b5061032a610969366004612af2565b611fe7565b6001600160a01b0388166000908152601b602052604081205460ff166109a757604051636e623f0f60e01b815260040160405180910390fd5b6109b2888686611ffc565b60408051336020808301919091528183018d905282518083038401815260608301938490528051910120631ae6f51560e01b9092526000916001600160a01b038c1691631ae6f51591610a0d918d908d908990606401612df6565b6020604051808303816000875af1158015610a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a509190612e31565b6001600160a01b038181166000908152601c60205260409081902080546001600160a01b0319168e84169081179091556003549092166101208d015251919250907fd371ed88cc563fd25b2a95ce8bb8d0adbf9bb4d8725c94996d2cae1d0ddf2a7290610ac29084908d908d90612e4e565b60405180910390a2601d805460018082019092557f6d4407e7be21f808e6509aa9fa9143369579dd7d760fe20a2c09680fc146134f0180546001600160a01b0319166001600160a01b038481169182179092556000908152601e6020908152604091829020805460ff1916851790559280558051339381019390935282018d90528b16906316abfc7090349060600160405160208183030381529060405280519060200120338b8b8a6040518763ffffffff1660e01b8152600401610b8b959493929190612e89565b60206040518083038185885af1158015610ba9573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bce9190612eec565b50600260015560005b601954811015610c7a57816001600160a01b0316637180c8ca60198381548110610c0357610c03612f05565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b158015610c5757600080fd5b505af1158015610c6b573d6000803e3d6000fd5b50505050806001019050610bd7565b5060035460405163ab033ea960e01b81526001600160a01b0391821660048201529082169063ab033ea990602401600060405180830381600087803b158015610cc257600080fd5b505af1158015610cd6573d6000803e3d6000fd5b504792505081159050610d4e57604051600090339083908381818185875af1925050503d8060008114610d25576040519150601f19603f3d011682016040523d82523d6000602084013e610d2a565b606091505b5050905080610d4c576040516312171d8360e31b815260040160405180910390fd5b505b509a9950505050505050505050565b60008054610d6a90612f1b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9690612f1b565b8015610de35780601f10610db857610100808354040283529160200191610de3565b820191906000526020600020905b815481529060010190602001808311610dc657829003601f168201915b505050505081565b6002546001600160a01b03163314610e15576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260155480825260165460208301526017549282019290925260185460608201529082351180610e55575080602001518260200135115b80610e67575080604001518260400135115b80610e79575080606001518260600135115b15610e97576040516315b05a8f60e01b815260040160405180910390fd5b81356011819055602080840135601281905560408086013560138190556060808801356014819055835196875294860193909352908401528201527fe1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421906080015b60405180910390a15050565b6002546001600160a01b03163314610f2e576040516282b42960e81b815260040160405180910390fd5b80600954610f3c9190612f4f565b151580610f55575080600a54610f529190612f4f565b15155b80610f6c575080600b54610f699190612f4f565b15155b80610f83575080600c54610f809190612f4f565b15155b15610fa1576040516311b75c1560e31b815260040160405180910390fd5b60088190556040518181527f04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a906020015b60405180910390a150565b6002546001600160a01b03163314611007576040516282b42960e81b815260040160405180910390fd5b600e5481111561102a57604051631670f79760e01b815260040160405180910390fd5b600d8190556040518181527faab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f0219190602001610fd2565b6002546001600160a01b03163314611089576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260115481526012546020820152601354918101919091526014546060820152670de0b6b3a7640000823511806110d45750670de0b6b3a76400008260200135115b806110ea5750670de0b6b3a76400008260400135115b806111005750670de0b6b3a76400008260600135115b8061110c575080518235105b8061111e575080602001518260200135105b80611130575080604001518260400135105b80611142575080606001518260600135105b156111605760405163161071fb60e11b815260040160405180910390fd5b81356015819055602080840135601681905560408086013560178190556060808801356018819055835196875294860193909352908401528201527f8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a790608001610ef8565b6001600160a01b0387166000908152601b602052604081205460ff166111fe57604051636e623f0f60e01b815260040160405180910390fd5b611209878686611ffc565b60408051336020808301919091528183018c90528251808303840181526060830193849052805191012063059e27c360e11b9092526000916001600160a01b038b1691630b3c4f8691611266918c908c908a908a90606401612f71565b6020604051808303816000875af1158015611285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a99190612e31565b9a9950505050505050505050565b6002546001600160a01b031633146112e1576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000908152601b602052604090205460ff1661131a57604051634bf121ab60e01b815260040160405180910390fd5b816001600160a01b0316601a828154811061133757611337612f05565b6000918252602090912001546001600160a01b03161461136a57604051630f2700cb60e21b815260040160405180910390fd5b6001600160a01b0382166000908152601b60205260409020805460ff19169055601a805461139a90600190612fc6565b815481106113aa576113aa612f05565b600091825260209091200154601a80546001600160a01b0390921691839081106113d6576113d6612f05565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550601a80548061141557611415612fd9565b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038416917f709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe091a25050565b6002546001600160a01b03163314611499576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090205460ff16156114d35760405163bd34634f60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020526040808220805460ff19166001908117909155601a8054918201815583527f057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff63e0180546001600160a01b03191684179055517f16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e39190a250565b6002546001600160a01b03163314611589576040516282b42960e81b815260040160405180910390fd5b600581905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad090600090a250565b6002546001600160a01b031633146115e6576040516282b42960e81b815260040160405180910390fd5b600f5481101561160957604051630a35539d60e41b815260040160405180910390fd5b60108190556040518181527fa9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e90602001610fd2565b6002546001600160a01b03163314611668576040516282b42960e81b815260040160405180910390fd5b60095481108061168357506008546116809082612f4f565b15155b8061168f5750600b5481115b156116ad5760405163f9c0959d60e01b815260040160405180910390fd5b600a8190556040518181527f31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f290602001610fd2565b6002546001600160a01b0316331461170c576040516282b42960e81b815260040160405180910390fd5b60105481111561172f57604051635a8f655760e01b815260040160405180910390fd5b600f8190556040518181527f490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a4690602001610fd2565b6002546001600160a01b0316331461178e576040516282b42960e81b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d941890600090a250565b6002546001600160a01b03163314611802576040516282b42960e81b815260040160405180910390fd5b600780546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b6002546001600160a01b03163314611876576040516282b42960e81b815260040160405180910390fd5b600854811080611891575060085461188e9082612f4f565b15155b8061189d5750600a5481115b156118bb57604051630219d66360e11b815260040160405180910390fd5b60098190556040518181527f6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b763190602001610fd2565b6002546001600160a01b0316331461191a576040516282b42960e81b815260040160405180910390fd5b600d5481101561193d5760405163019cfb7b60e61b815260040160405180910390fd5b600e8190556040518181527f4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c78297890602001610fd2565b6002546001600160a01b0316331461199c576040516282b42960e81b815260040160405180910390fd5b6119a8601983836126b7565b507f2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc388282604051610ef8929190612fef565b60606019805480602002602001604051908101604052809291908181526020018280548015611a3257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611a14575b5050505050905090565b6002546001600160a01b03163314611a66576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b606081831115611ad357604051633b2735ab60e11b815260040160405180910390fd5b601d548210611af55760405163e0f7becb60e01b815260040160405180910390fd5b611aff8383612fc6565b611b0a90600161303d565b67ffffffffffffffff811115611b2257611b2261274e565b604051908082528060200260200182016040528015611b4b578160200160208202803683370190505b509050825b828111611bc657601d8181548110611b6a57611b6a612f05565b9060005260206000200160009054906101000a90046001600160a01b03168285830381518110611b9c57611b9c612f05565b6001600160a01b039092166020928302919091019091015280611bbe81613050565b915050611b50565b5092915050565b611bf86040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526011548152601254602082015260135491810191909152601454606082015290565b6002546001600160a01b03163314611c4f576040516282b42960e81b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6000601d8281548110611cae57611cae612f05565b6000918252602090912001546001600160a01b031692915050565b6002546001600160a01b03163314611cf3576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d890600090a250565b6002546001600160a01b03163314611d67576040516282b42960e81b815260040160405180910390fd5b600a54811080611d825750600854611d7f9082612f4f565b15155b80611d8e5750600c5481115b15611dac57604051633007ad0160e11b815260040160405180910390fd5b600b8190556040518181527fe9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f17890602001610fd2565b611e0c6040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526015548152601654602082015260175491810191909152601854606082015290565b6002546001600160a01b03163314611e63576040516282b42960e81b815260040160405180910390fd5b600b54811080611e7e5750600854611e7b9082612f4f565b15155b15611e9c5760405163cfb699cb60e01b815260040160405180910390fd5b600c8190556040518181527f866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b90602001610fd2565b606081831115611ef457604051633b2735ab60e11b815260040160405180910390fd5b601a548210611f165760405163e0f7becb60e01b815260040160405180910390fd5b611f208383612fc6565b611f2b90600161303d565b67ffffffffffffffff811115611f4357611f4361274e565b604051908082528060200260200182016040528015611f6c578160200160208202803683370190505b509050825b828111611bc657601a8181548110611f8b57611f8b612f05565b9060005260206000200160009054906101000a90046001600160a01b03168285830381518110611fbd57611fbd612f05565b6001600160a01b039092166020928302919091019091015280611fdf81613050565b915050611f71565b6000601a8281548110611cae57611cae612f05565b6009548360e0015110806120155750600a548360e00151115b8061203057506008548360e0015161202d9190612f4f565b15155b1561204e57604051635428734d60e01b815260040160405180910390fd5b600b548360c0015110806120675750600c548360c00151115b8061208457508260e001518360c001516120819190612f4f565b15155b156120a25760405163253fffcf60e11b815260040160405180910390fd5b6015546101808401515111806120d6575060165460c0840151610180850151602001516120d4916301e1338090612313565b115b806120eb575060175461018084015160400151115b80612100575060185461018084015160600151115b80612112575060115461018084015151105b8061213b575060125460c084015161018085015160200151612139916301e1338090612339565b105b80612150575060135461018084015160400151105b80612165575060145461018084015160600151105b1561218357604051632d8768f960e01b815260040160405180910390fd5b600d548210806121945750600e5482115b156121b2576040516330554de160e01b815260040160405180910390fd5b60006121d76611c37937e080006121d185671bc16d674ec80000612357565b90612375565b600f549091506121e79082612375565b82108061221a575061221761220e671bc16d674ec800006122088685612375565b9061238b565b601054906123a0565b82115b15612238576040516383ebdfb760e01b815260040160405180910390fd5b6000612248838660c001516123b5565b60045460408701519192506001600160a01b0391821691161415806122735750600554856060015114155b8061229257506006546101408601516001600160a01b03908116911614155b806122b157506007546101608601516001600160a01b03908116911614155b806122d057506003546101208601516001600160a01b03908116911614155b806122df575061010085015115155b156122fd5760405163e8c02dd760e01b815260040160405180910390fd5b3061012086015261010090940193909352505050565b600082600019048411830215820261232a57600080fd5b50910281810615159190040190565b600082600019048411830215820261235057600080fd5b5091020490565b600061236c83670de0b6b3a764000084612339565b90505b92915050565b6000818311612384578161236c565b5090919050565b600061236c8383670de0b6b3a7640000612339565b60008183116123af578261236c565b50919050565b6000806123e66123d76123c9866064613069565b66a5bbed86c5a0009061238b565b6748cd4072281e000090612357565b90506123fa670de0b6b3a764000082612357565b90506124528161220861242561242061241b89670de0b6b3a764000061303d565b61245a565b612488565b61244c61242061243a8a8a6301e13380612339565b61241b90670de0b6b3a764000061303d565b90612357565b949350505050565b60006001600160ff1b038211156124845760405163396ea70160e11b815260040160405180910390fd5b5090565b60008082136124aa5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125369084901c61245a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b82805482825590600052602060002090810192821561270a579160200282015b8281111561270a5781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906126d7565b506124849291505b808211156124845760008155600101612712565b6001600160a01b038116811461273b57600080fd5b50565b803561274981612726565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff811182821017156127885761278861274e565b60405290565b6000608082840312156127a057600080fd5b6040516080810181811067ffffffffffffffff821117156127c3576127c361274e565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610200828403121561280757600080fd5b61280f612764565b905061281a8261273e565b81526128286020830161273e565b60208201526128396040830161273e565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012061288a81840161273e565b9082015261014061289c83820161273e565b908201526101606128ae83820161273e565b908201526101806128c18484830161278e565b9082015292915050565b600082601f8301126128dc57600080fd5b813567ffffffffffffffff808211156128f7576128f761274e565b604051601f8301601f19908116603f0116810190828211818310171561291f5761291f61274e565b8160405283815286602085880101111561293857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060008060006103008a8c03121561297757600080fd5b8935985060208a013561298981612726565b97506129988b60408c016127f4565b96506102408a013567ffffffffffffffff808211156129b657600080fd5b6129c28d838e016128cb565b97506102608c013596506102808c013595506102a08c013594506102c08c01359150808211156129f157600080fd5b908b01906060828e031215612a0557600080fd5b604051606081018181108382111715612a2057612a2061274e565b6040528235612a2e81612726565b815260208301358015158114612a4357600080fd5b6020820152604083013582811115612a5a57600080fd5b612a668f8286016128cb565b6040830152508094505050506102e08a013590509295985092959850929598565b6000815180845260005b81811015612aad57602081850181015186830182015201612a91565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061236c6020830184612a87565b6000608082840312156123af57600080fd5b600060208284031215612b0457600080fd5b5035919050565b6000806000806000806000806102e0898b031215612b2857600080fd5b883597506020890135612b3a81612726565b9650612b498a60408b016127f4565b955061024089013567ffffffffffffffff811115612b6657600080fd5b612b728b828c016128cb565b989b979a5095986102608101359761028082013597506102a082013596506102c090910135945092505050565b60008060408385031215612bb257600080fd5b8235612bbd81612726565b946020939093013593505050565b600060208284031215612bdd57600080fd5b8135612be881612726565b9392505050565b60008060208385031215612c0257600080fd5b823567ffffffffffffffff80821115612c1a57600080fd5b818501915085601f830112612c2e57600080fd5b813581811115612c3d57600080fd5b8660208260051b8501011115612c5257600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612ca55783516001600160a01b031683529284019291840191600101612c80565b50909695505050505050565b60008060408385031215612cc457600080fd5b50508035926020909101359150565b815181526020808301519082015260408083015190820152606080830151908201526080810161236f565b80516001600160a01b031682526020810151612d2560208401826001600160a01b03169052565b506040810151612d4060408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151612d9a828501826001600160a01b03169052565b5050610140818101516001600160a01b039081169184019190915261016080830151909116908301526101809081015180519183019190915260208101516101a083015260408101516101c0830152606001516101e090910152565b6000610260868352612e0b6020840187612cfe565b80610220840152612e1e81840186612a87565b9150508261024083015295945050505050565b600060208284031215612e4357600080fd5b8151612be881612726565b6001600160a01b03841681526000610240612e6c6020840186612cfe565b80610220840152612e7f81840185612a87565b9695505050505050565b858152600060018060a01b03808716602084015285604084015284606084015260a060808401528084511660a0840152506020830151151560c08301526040830151606060e0840152612ee0610100840182612a87565b98975050505050505050565b600060208284031215612efe57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680612f2f57607f821691505b6020821081036123af57634e487b7160e01b600052602260045260246000fd5b600082612f6c57634e487b7160e01b600052601260045260246000fd5b500690565b6000610280878352612f866020840188612cfe565b80610220840152612f9981840187612a87565b610240840195909552505061026001529392505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561236f5761236f612fb0565b634e487b7160e01b600052603160045260246000fd5b60208082528181018390526000908460408401835b8681101561303257823561301781612726565b6001600160a01b031682529183019190830190600101613004565b509695505050505050565b8082018082111561236f5761236f612fb0565b60006001820161306257613062612fb0565b5060010190565b808202811582820484141761236f5761236f612fb056fea2646970667358221220bd3b18f943dd42f13c022635587e0fe0e573886aa6d8ae13a7e1e4bf0765016f64736f6c63430008140033',
    methodIdentifiers: {
        "addDeployerCoordinator(address)": "421caba8",
        "checkpointDurationResolution()": "d0f96b92",
        "defaultPausers()": "a64c90bf",
        "deployAndInitialize(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "06902494",
        "deployTarget(bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "2facc519",
        "feeCollector()": "c415b95c",
        "getDeployerCoordinatorAtIndex(uint256)": "fe3d5aeb",
        "getDeployerCoordinatorsInRange(uint256,uint256)": "ec895f11",
        "getInstanceAtIndex(uint256)": "daac24da",
        "getInstancesInRange(uint256,uint256)": "bc30e7a1",
        "getNumberOfDeployerCoordinators()": "e1b39c80",
        "getNumberOfInstances()": "6e95d67c",
        "governance()": "5aa6e675",
        "hyperdriveGovernance()": "e3331555",
        "instancesToDeployerCoordinators(address)": "6c8cc865",
        "isDeployerCoordinator(address)": "f8c09e59",
        "isInstance(address)": "6b44e6be",
        "linkerCodeHash()": "c905a4b5",
        "linkerFactory()": "99623bb1",
        "maxCheckpointDuration()": "e0e2daaa",
        "maxFees()": "e83e34b1",
        "maxFixedAPR()": "bf9bd5cd",
        "maxPositionDuration()": "8efc0986",
        "maxTimeStretchAPR()": "48800760",
        "minCheckpointDuration()": "5720c9d5",
        "minFees()": "c1722563",
        "minFixedAPR()": "d23d7ea3",
        "minPositionDuration()": "daf012e6",
        "minTimeStretchAPR()": "d6f50169",
        "name()": "06fdde03",
        "removeDeployerCoordinator(address,uint256)": "411c3035",
        "sweepCollector()": "10780f73",
        "updateCheckpointDurationResolution(uint256)": "11e77bfe",
        "updateDefaultPausers(address[])": "9af25262",
        "updateFeeCollector(address)": "d2c35ce8",
        "updateGovernance(address)": "b2561263",
        "updateHyperdriveGovernance(address)": "dd2b8fbb",
        "updateLinkerCodeHash(bytes32)": "4fbfee77",
        "updateLinkerFactory(address)": "85229785",
        "updateMaxCheckpointDuration(uint256)": "6f6d5c4a",
        "updateMaxFees((uint256,uint256,uint256,uint256))": "2885e3ac",
        "updateMaxFixedAPR(uint256)": "97b0e8ce",
        "updateMaxPositionDuration(uint256)": "eb71f66c",
        "updateMaxTimeStretchAPR(uint256)": "628027a3",
        "updateMinCheckpointDuration(uint256)": "8e127cf5",
        "updateMinFees((uint256,uint256,uint256,uint256))": "10d1dc3e",
        "updateMinFixedAPR(uint256)": "1978ebcf",
        "updateMinPositionDuration(uint256)": "e71f34b3",
        "updateMinTimeStretchAPR(uint256)": "83b361e8",
        "updateSweepCollector(address)": "8627a4f0",
        "version()": "54fd4d50"
    }
};
