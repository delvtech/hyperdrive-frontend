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
    bytecode: '0x608060405260026000553480156200001657600080fd5b50604051620036e4380380620036e48339810160408190526200003991620005e9565b8060a001518160c0015110806200006457508060a001518160c0015162000061919062000759565b15155b156200008357604051630219d66360e11b815260040160405180910390fd5b60c0810151600881905560e08201511080620000b357508060a001518160e00151620000b0919062000759565b15155b15620000d25760405163f9c0959d60e01b815260040160405180910390fd5b60e0810151600981905561010082015110806200010457508060a0015181610100015162000101919062000759565b15155b156200012357604051633007ad0160e11b815260040160405180910390fd5b610100810151600a81905561012082015110806200015657508060a0015181610120015162000153919062000759565b15155b15620001755760405163cfb699cb60e01b815260040160405180910390fd5b610120810151600b556101608101516101408201511115620001aa576040516330554de160e01b815260040160405180910390fd5b610140810151600c55610160810151600d556101a08101516101808201511115620001e8576040516383ebdfb760e01b815260040160405180910390fd5b610180810151600e556101a0810151600f556101e081015151670de0b6b3a76400001080620002275750670de0b6b3a7640000816101e0015160200151115b80620002435750670de0b6b3a7640000816101e0015160400151115b806200025f5750670de0b6b3a7640000816101e0015160600151115b156200027e5760405163161071fb60e11b815260040160405180910390fd5b6101e081015180516014819055602082015160155560408201516016556060909101516017556101c0820151511180620002c95750806101e0015160200151816101c0015160200151115b80620002e65750806101e0015160400151816101c0015160400151115b80620003035750806101e0015160600151816101c0015160600151115b1562000322576040516315b05a8f60e01b815260040160405180910390fd5b6101c081015180516010556020808201516011556040808301516012556060928301516013558351600180546001600160a01b03199081166001600160a01b03938416179091558386015160028054831691841691909117905593850151600580548616918316919091179055608085015160068054909516911617909255908201518051620003b7926018920190620003f3565b50610200810151600380546001600160a01b0319166001600160a01b0390921691909117905561022081015160045560a001516007556200077c565b8280548282559060005260206000209081019282156200044b579160200282015b828111156200044b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000414565b50620004599291506200045d565b5090565b5b808211156200045957600081556001016200045e565b634e487b7160e01b600052604160045260246000fd5b60405161024081016001600160401b0381118282101715620004b057620004b062000474565b60405290565b80516001600160a01b0381168114620004ce57600080fd5b919050565b600082601f830112620004e557600080fd5b815160206001600160401b038083111562000504576200050462000474565b8260051b604051601f19603f830116810181811084821117156200052c576200052c62000474565b6040529384528581018301938381019250878511156200054b57600080fd5b83870191505b8482101562000575576200056582620004b6565b8352918301919083019062000551565b979650505050505050565b6000608082840312156200059357600080fd5b604051608081016001600160401b0381118282101715620005b857620005b862000474565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060208284031215620005fc57600080fd5b81516001600160401b03808211156200061457600080fd5b9083019061030082860312156200062a57600080fd5b620006346200048a565b6200063f83620004b6565b81526200064f60208401620004b6565b60208201526040830151828111156200066757600080fd5b6200067587828601620004d3565b6040830152506200068960608401620004b6565b60608201526200069c60808401620004b6565b608082015260a0838101519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c09150620007148683850162000580565b828201526200072886610240850162000580565b6101e08201526200073d6102c08401620004b6565b6102008201526102e09290920151610220830152509392505050565b6000826200077757634e487b7160e01b600052601260045260246000fd5b500690565b612f58806200078c6000396000f3fe6080604052600436106102b25760003560e01c806399623bb111610175578063d6f50169116100dc578063e333155511610095578063eb71f66c1161006f578063eb71f66c14610854578063ec895f1114610874578063f8c09e5914610894578063fe3d5aeb146108c457600080fd5b8063e3331555146107ff578063e71f34b31461081f578063e83e34b11461083f57600080fd5b8063d6f5016914610768578063daac24da1461077e578063daf012e61461079e578063dd2b8fbb146107b4578063e0e2daaa146107d4578063e1b39c80146107ea57600080fd5b8063c17225631161012e578063c1722563146106c4578063c415b95c146106e6578063c905a4b514610706578063d0f96b921461071c578063d23d7ea314610732578063d2c35ce81461074857600080fd5b806399623bb11461060c5780639af252621461062c578063a64c90bf1461064c578063b25612631461066e578063bc30e7a11461068e578063bf9bd5cd146106ae57600080fd5b80635aa6e6751161021957806383b361e8116101d257806383b361e81461055657806385229785146105765780638627a4f0146105965780638e127cf5146105b65780638efc0986146105d657806397b0e8ce146105ec57600080fd5b80635aa6e6751461046b578063628027a31461048b5780636b44e6be146104ab5780636c8cc865146104eb5780636e95d67c146105215780636f6d5c4a1461053657600080fd5b80632facc5191161026b5780632facc519146103b1578063411c3035146103d1578063421caba8146103f157806348800760146104115780634fbfee77146104355780635720c9d51461045557600080fd5b806306902494146102e157806310780f731461031157806310d1dc3e1461033157806311e77bfe146103515780631978ebcf146103715780632885e3ac1461039157600080fd5b366102dc576002600054036102da57604051630aac75b560e31b815260040160405180910390fd5b005b600080fd5b6102f46102ef366004612841565b6108e4565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561031d57600080fd5b506006546102f4906001600160a01b031681565b34801561033d57600080fd5b506102da61034c366004612970565b610cd4565b34801561035d57600080fd5b506102da61036c366004612982565b610ded565b34801561037d57600080fd5b506102da61038c366004612982565b610ec6565b34801561039d57600080fd5b506102da6103ac366004612970565b610f48565b3480156103bd57600080fd5b506102f46103cc36600461299b565b6110ae565b3480156103dd57600080fd5b506102da6103ec366004612a2f565b6111a0565b3480156103fd57600080fd5b506102da61040c366004612a5b565b611358565b34801561041d57600080fd5b50610427600f5481565b604051908152602001610308565b34801561044157600080fd5b506102da610450366004612982565b611448565b34801561046157600080fd5b5061042760085481565b34801561047757600080fd5b506001546102f4906001600160a01b031681565b34801561049757600080fd5b506102da6104a6366004612982565b6114a5565b3480156104b757600080fd5b506104db6104c6366004612a5b565b601d6020526000908152604090205460ff1681565b6040519015158152602001610308565b3480156104f757600080fd5b506102f4610506366004612a5b565b601b602052600090815260409020546001600160a01b031681565b34801561052d57600080fd5b50601c54610427565b34801561054257600080fd5b506102da610551366004612982565b611527565b34801561056257600080fd5b506102da610571366004612982565b6115cb565b34801561058257600080fd5b506102da610591366004612a5b565b61164d565b3480156105a257600080fd5b506102da6105b1366004612a5b565b6116c1565b3480156105c257600080fd5b506102da6105d1366004612982565b611735565b3480156105e257600080fd5b50610427600b5481565b3480156105f857600080fd5b506102da610607366004612982565b6117d9565b34801561061857600080fd5b506003546102f4906001600160a01b031681565b34801561063857600080fd5b506102da610647366004612a7f565b61185b565b34801561065857600080fd5b506106616118c3565b6040516103089190612af4565b34801561067a57600080fd5b506102da610689366004612a5b565b611925565b34801561069a57600080fd5b506106616106a9366004612b41565b611999565b3480156106ba57600080fd5b50610427600d5481565b3480156106d057600080fd5b506106d9611ab6565b6040516103089190612b63565b3480156106f257600080fd5b506005546102f4906001600160a01b031681565b34801561071257600080fd5b5061042760045481565b34801561072857600080fd5b5061042760075481565b34801561073e57600080fd5b50610427600c5481565b34801561075457600080fd5b506102da610763366004612a5b565b611b0e565b34801561077457600080fd5b50610427600e5481565b34801561078a57600080fd5b506102f4610799366004612982565b611b82565b3480156107aa57600080fd5b50610427600a5481565b3480156107c057600080fd5b506102da6107cf366004612a5b565b611bb2565b3480156107e057600080fd5b5061042760095481565b3480156107f657600080fd5b50601954610427565b34801561080b57600080fd5b506002546102f4906001600160a01b031681565b34801561082b57600080fd5b506102da61083a366004612982565b611c26565b34801561084b57600080fd5b506106d9611cca565b34801561086057600080fd5b506102da61086f366004612982565b611d22565b34801561088057600080fd5b5061066161088f366004612b41565b611dba565b3480156108a057600080fd5b506104db6108af366004612a5b565b601a6020526000908152604090205460ff1681565b3480156108d057600080fd5b506102f46108df366004612982565b611ed0565b6001600160a01b0388166000908152601a602052604081205460ff1661091d57604051636e623f0f60e01b815260040160405180910390fd5b610928888686611ee5565b60408051336020808301919091528183018d905282518083038401815260608301938490528051910120631ae6f51560e01b9092526000916001600160a01b038c1691631ae6f51591610983918d908d908990606401612ccc565b6020604051808303816000875af11580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c69190612d07565b6001600160a01b038181166000908152601b60205260409081902080546001600160a01b0319168e84169081179091556002549092166101208d015251919250907fd371ed88cc563fd25b2a95ce8bb8d0adbf9bb4d8725c94996d2cae1d0ddf2a7290610a389084908d908d90612d24565b60405180910390a2601c805460018082019092557f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a2110180546001600160a01b0319166001600160a01b038481169182179092556000908152601d60209081526040808320805460ff19168617905593909155825133918101919091529182018d90528b16906316abfc7090349060600160405160208183030381529060405280519060200120338b8b8a6040518763ffffffff1660e01b8152600401610b02959493929190612d5f565b60206040518083038185885af1158015610b20573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610b459190612dc2565b50600260009081555b601854811015610bf157816001600160a01b0316637180c8ca60188381548110610b7a57610b7a612ddb565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b158015610bce57600080fd5b505af1158015610be2573d6000803e3d6000fd5b50505050806001019050610b4e565b5060025460405163ab033ea960e01b81526001600160a01b0391821660048201529082169063ab033ea990602401600060405180830381600087803b158015610c3957600080fd5b505af1158015610c4d573d6000803e3d6000fd5b504792505081159050610cc557604051600090339083908381818185875af1925050503d8060008114610c9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ca1565b606091505b5050905080610cc3576040516312171d8360e31b815260040160405180910390fd5b505b509a9950505050505050505050565b6001546001600160a01b03163314610cfe576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260145480825260155460208301526016549282019290925260175460608201529082351180610d3e575080602001518260200135115b80610d50575080604001518260400135115b80610d62575080606001518260600135115b15610d80576040516315b05a8f60e01b815260040160405180910390fd5b81356010819055602080840135601181905560408086013560128190556060808801356013819055835196875294860193909352908401528201527fe1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421906080015b60405180910390a15050565b6001546001600160a01b03163314610e17576040516282b42960e81b815260040160405180910390fd5b80600854610e259190612df1565b151580610e3e575080600954610e3b9190612df1565b15155b80610e55575080600a54610e529190612df1565b15155b80610e6c575080600b54610e699190612df1565b15155b15610e8a576040516311b75c1560e31b815260040160405180910390fd5b60078190556040518181527f04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a906020015b60405180910390a150565b6001546001600160a01b03163314610ef0576040516282b42960e81b815260040160405180910390fd5b600d54811115610f1357604051631670f79760e01b815260040160405180910390fd5b600c8190556040518181527faab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f0219190602001610ebb565b6001546001600160a01b03163314610f72576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260105481526011546020820152601254918101919091526013546060820152670de0b6b3a764000082351180610fbd5750670de0b6b3a76400008260200135115b80610fd35750670de0b6b3a76400008260400135115b80610fe95750670de0b6b3a76400008260600135115b80610ff5575080518235105b80611007575080602001518260200135105b80611019575080604001518260400135105b8061102b575080606001518260600135105b156110495760405163161071fb60e11b815260040160405180910390fd5b81356014819055602080840135601581905560408086013560168190556060808801356017819055835196875294860193909352908401528201527f8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a790608001610de1565b6001600160a01b0387166000908152601a602052604081205460ff166110e757604051636e623f0f60e01b815260040160405180910390fd5b6110f2878686611ee5565b60408051336020808301919091528183018c90528251808303840181526060830193849052805191012063059e27c360e11b9092526000916001600160a01b038b1691630b3c4f869161114f918c908c908a908a90606401612e13565b6020604051808303816000875af115801561116e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111929190612d07565b9a9950505050505050505050565b6001546001600160a01b031633146111ca576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000908152601a602052604090205460ff1661120357604051634bf121ab60e01b815260040160405180910390fd5b816001600160a01b03166019828154811061122057611220612ddb565b6000918252602090912001546001600160a01b03161461125357604051630f2700cb60e21b815260040160405180910390fd5b6001600160a01b0382166000908152601a60205260409020805460ff191690556019805461128390600190612e68565b8154811061129357611293612ddb565b600091825260209091200154601980546001600160a01b0390921691839081106112bf576112bf612ddb565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060198054806112fe576112fe612e7b565b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038416917f709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe091a25050565b6001546001600160a01b03163314611382576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff16156113bc5760405163bd34634f60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601a6020526040808220805460ff1916600190811790915560198054918201815583527f944998273e477b495144fb8794c914197f3ccb46be2900f4698fd0ef743c96950180546001600160a01b03191684179055517f16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e39190a250565b6001546001600160a01b03163314611472576040516282b42960e81b815260040160405180910390fd5b600481905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad090600090a250565b6001546001600160a01b031633146114cf576040516282b42960e81b815260040160405180910390fd5b600e548110156114f257604051630a35539d60e41b815260040160405180910390fd5b600f8190556040518181527fa9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e90602001610ebb565b6001546001600160a01b03163314611551576040516282b42960e81b815260040160405180910390fd5b60085481108061156c57506007546115699082612df1565b15155b806115785750600a5481115b156115965760405163f9c0959d60e01b815260040160405180910390fd5b60098190556040518181527f31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f290602001610ebb565b6001546001600160a01b031633146115f5576040516282b42960e81b815260040160405180910390fd5b600f5481111561161857604051635a8f655760e01b815260040160405180910390fd5b600e8190556040518181527f490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a4690602001610ebb565b6001546001600160a01b03163314611677576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d941890600090a250565b6001546001600160a01b031633146116eb576040516282b42960e81b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b6001546001600160a01b0316331461175f576040516282b42960e81b815260040160405180910390fd5b60075481108061177a57506007546117779082612df1565b15155b80611786575060095481115b156117a457604051630219d66360e11b815260040160405180910390fd5b60088190556040518181527f6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b763190602001610ebb565b6001546001600160a01b03163314611803576040516282b42960e81b815260040160405180910390fd5b600c548110156118265760405163019cfb7b60e61b815260040160405180910390fd5b600d8190556040518181527f4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c78297890602001610ebb565b6001546001600160a01b03163314611885576040516282b42960e81b815260040160405180910390fd5b611891601883836125a0565b507f2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc388282604051610de1929190612e91565b6060601880548060200260200160405190810160405280929190818152602001828054801561191b57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116118fd575b5050505050905090565b6001546001600160a01b0316331461194f576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6060818311156119bc57604051633b2735ab60e11b815260040160405180910390fd5b601c5482106119de5760405163e0f7becb60e01b815260040160405180910390fd5b6119e88383612e68565b6119f3906001612edf565b67ffffffffffffffff811115611a0b57611a0b612637565b604051908082528060200260200182016040528015611a34578160200160208202803683370190505b509050825b828111611aaf57601c8181548110611a5357611a53612ddb565b9060005260206000200160009054906101000a90046001600160a01b03168285830381518110611a8557611a85612ddb565b6001600160a01b039092166020928302919091019091015280611aa781612ef2565b915050611a39565b5092915050565b611ae16040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526010548152601154602082015260125491810191909152601354606082015290565b6001546001600160a01b03163314611b38576040516282b42960e81b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6000601c8281548110611b9757611b97612ddb565b6000918252602090912001546001600160a01b031692915050565b6001546001600160a01b03163314611bdc576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d890600090a250565b6001546001600160a01b03163314611c50576040516282b42960e81b815260040160405180910390fd5b600954811080611c6b5750600754611c689082612df1565b15155b80611c775750600b5481115b15611c9557604051633007ad0160e11b815260040160405180910390fd5b600a8190556040518181527fe9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f17890602001610ebb565b611cf56040518060800160405280600081526020016000815260200160008152602001600081525090565b50604080516080810182526014548152601554602082015260165491810191909152601754606082015290565b6001546001600160a01b03163314611d4c576040516282b42960e81b815260040160405180910390fd5b600a54811080611d675750600754611d649082612df1565b15155b15611d855760405163cfb699cb60e01b815260040160405180910390fd5b600b8190556040518181527f866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b90602001610ebb565b606081831115611ddd57604051633b2735ab60e11b815260040160405180910390fd5b6019548210611dff5760405163e0f7becb60e01b815260040160405180910390fd5b611e098383612e68565b611e14906001612edf565b67ffffffffffffffff811115611e2c57611e2c612637565b604051908082528060200260200182016040528015611e55578160200160208202803683370190505b509050825b828111611aaf5760198181548110611e7457611e74612ddb565b9060005260206000200160009054906101000a90046001600160a01b03168285830381518110611ea657611ea6612ddb565b6001600160a01b039092166020928302919091019091015280611ec881612ef2565b915050611e5a565b600060198281548110611b9757611b97612ddb565b6008548360e001511080611efe57506009548360e00151115b80611f1957506007548360e00151611f169190612df1565b15155b15611f3757604051635428734d60e01b815260040160405180910390fd5b600a548360c001511080611f505750600b548360c00151115b80611f6d57508260e001518360c00151611f6a9190612df1565b15155b15611f8b5760405163253fffcf60e11b815260040160405180910390fd5b601454610180840151511180611fbf575060155460c084015161018085015160200151611fbd916301e13380906121fc565b115b80611fd4575060165461018084015160400151115b80611fe9575060175461018084015160600151115b80611ffb575060105461018084015151105b80612024575060115460c084015161018085015160200151612022916301e1338090612222565b105b80612039575060125461018084015160400151105b8061204e575060135461018084015160600151105b1561206c57604051632d8768f960e01b815260040160405180910390fd5b600c5482108061207d5750600d5482115b1561209b576040516330554de160e01b815260040160405180910390fd5b60006120c06611c37937e080006120ba85671bc16d674ec80000612240565b9061225e565b600e549091506120d0908261225e565b82108061210357506121006120f7671bc16d674ec800006120f1868561225e565b90612274565b600f5490612289565b82115b15612121576040516383ebdfb760e01b815260040160405180910390fd5b6000612131838660c0015161229e565b60035460408701519192506001600160a01b03918216911614158061215c5750600454856060015114155b8061217b57506005546101408601516001600160a01b03908116911614155b8061219a57506006546101608601516001600160a01b03908116911614155b806121b957506002546101208601516001600160a01b03908116911614155b806121c8575061010085015115155b156121e65760405163e8c02dd760e01b815260040160405180910390fd5b3061012086015261010090940193909352505050565b600082600019048411830215820261221357600080fd5b50910281810615159190040190565b600082600019048411830215820261223957600080fd5b5091020490565b600061225583670de0b6b3a764000084612222565b90505b92915050565b600081831161226d5781612255565b5090919050565b60006122558383670de0b6b3a7640000612222565b60008183116122985782612255565b50919050565b6000806122cf6122c06122b2866064612f0b565b66a5bbed86c5a00090612274565b6748cd4072281e000090612240565b90506122e3670de0b6b3a764000082612240565b905061233b816120f161230e61230961230489670de0b6b3a7640000612edf565b612343565b612371565b6123356123096123238a8a6301e13380612222565b61230490670de0b6b3a7640000612edf565b90612240565b949350505050565b60006001600160ff1b0382111561236d5760405163396ea70160e11b815260040160405180910390fd5b5090565b60008082136123935760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061241f9084901c612343565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b8280548282559060005260206000209081019282156125f3579160200282015b828111156125f35781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906125c0565b5061236d9291505b8082111561236d57600081556001016125fb565b6001600160a01b038116811461262457600080fd5b50565b80356126328161260f565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171561267157612671612637565b60405290565b60006080828403121561268957600080fd5b6040516080810181811067ffffffffffffffff821117156126ac576126ac612637565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600061020082840312156126f057600080fd5b6126f861264d565b905061270382612627565b815261271160208301612627565b602082015261272260408301612627565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120612773818401612627565b90820152610140612785838201612627565b90820152610160612797838201612627565b908201526101806127aa84848301612677565b9082015292915050565b600082601f8301126127c557600080fd5b813567ffffffffffffffff808211156127e0576127e0612637565b604051601f8301601f19908116603f0116810190828211818310171561280857612808612637565b8160405283815286602085880101111561282157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060008060006103008a8c03121561286057600080fd5b8935985060208a01356128728161260f565b97506128818b60408c016126dd565b96506102408a013567ffffffffffffffff8082111561289f57600080fd5b6128ab8d838e016127b4565b97506102608c013596506102808c013595506102a08c013594506102c08c01359150808211156128da57600080fd5b908b01906060828e0312156128ee57600080fd5b60405160608101818110838211171561290957612909612637565b60405282356129178161260f565b81526020830135801515811461292c57600080fd5b602082015260408301358281111561294357600080fd5b61294f8f8286016127b4565b6040830152508094505050506102e08a013590509295985092959850929598565b60006080828403121561229857600080fd5b60006020828403121561299457600080fd5b5035919050565b6000806000806000806000806102e0898b0312156129b857600080fd5b8835975060208901356129ca8161260f565b96506129d98a60408b016126dd565b955061024089013567ffffffffffffffff8111156129f657600080fd5b612a028b828c016127b4565b989b979a5095986102608101359761028082013597506102a082013596506102c090910135945092505050565b60008060408385031215612a4257600080fd5b8235612a4d8161260f565b946020939093013593505050565b600060208284031215612a6d57600080fd5b8135612a788161260f565b9392505050565b60008060208385031215612a9257600080fd5b823567ffffffffffffffff80821115612aaa57600080fd5b818501915085601f830112612abe57600080fd5b813581811115612acd57600080fd5b8660208260051b8501011115612ae257600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612b355783516001600160a01b031683529284019291840191600101612b10565b50909695505050505050565b60008060408385031215612b5457600080fd5b50508035926020909101359150565b8151815260208083015190820152604080830151908201526060808301519082015260808101612258565b80516001600160a01b031682526020810151612bb560208401826001600160a01b03169052565b506040810151612bd060408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151612c2a828501826001600160a01b03169052565b5050610140818101516001600160a01b039081169184019190915261016080830151909116908301526101809081015180519183019190915260208101516101a083015260408101516101c0830152606001516101e090910152565b6000815180845260005b81811015612cac57602081850181015186830182015201612c90565b506000602082860101526020601f19601f83011685010191505092915050565b6000610260868352612ce16020840187612b8e565b80610220840152612cf481840186612c86565b9150508261024083015295945050505050565b600060208284031215612d1957600080fd5b8151612a788161260f565b6001600160a01b03841681526000610240612d426020840186612b8e565b80610220840152612d5581840185612c86565b9695505050505050565b858152600060018060a01b03808716602084015285604084015284606084015260a060808401528084511660a0840152506020830151151560c08301526040830151606060e0840152612db6610100840182612c86565b98975050505050505050565b600060208284031215612dd457600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600082612e0e57634e487b7160e01b600052601260045260246000fd5b500690565b6000610280878352612e286020840188612b8e565b80610220840152612e3b81840187612c86565b610240840195909552505061026001529392505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561225857612258612e52565b634e487b7160e01b600052603160045260246000fd5b60208082528181018390526000908460408401835b86811015612ed4578235612eb98161260f565b6001600160a01b031682529183019190830190600101612ea6565b509695505050505050565b8082018082111561225857612258612e52565b600060018201612f0457612f04612e52565b5060010190565b808202811582820484141761225857612258612e5256fea2646970667358221220d50b53f8b921c6f449fa46c5629f3661f9d3dacbb2394d8130c00500035a60e064736f6c63430008140033',
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
        "updateSweepCollector(address)": "8627a4f0"
    }
};
