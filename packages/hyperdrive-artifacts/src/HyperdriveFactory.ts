export const HyperdriveFactory = {
  name: 'HyperdriveFactory' as const,
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
] as const,
  bytecode: '0x6080604052600260015534801562000015575f80fd5b5060405162004012380380620040128339810160408190526200003891620006f6565b5f6200004582826200094e565b508160e0015182610100015110806200007357508160e0015182610100015162000070919062000a1a565b15155b156200009257604051630219d66360e11b815260040160405180910390fd5b610100820151600b8190556101208301511080620000c557508160e00151826101200151620000c2919062000a1a565b15155b15620000e45760405163f9c0959d60e01b815260040160405180910390fd5b610120820151600c81905561014083015110806200011757508160e0015182610140015162000114919062000a1a565b15155b156200013657604051633007ad0160e11b815260040160405180910390fd5b610140820151600d81905561016083015110806200016957508160e0015182610160015162000166919062000a1a565b15155b15620001885760405163cfb699cb60e01b815260040160405180910390fd5b610160820151600e556101a08201516101808301511115620001bd5760405163ef9bc65f60e01b815260040160405180910390fd5b610180820151600f556101a08201516010556101e08201516101c08301511115620001fb576040516330554de160e01b815260040160405180910390fd5b6101c08201516011556101e0820151601255610220820151610200830151111562000239576040516383ebdfb760e01b815260040160405180910390fd5b61020082015160135561022082015160145561026082015151670de0b6b3a76400001080620002785750670de0b6b3a764000082610260015160200151115b80620002945750670de0b6b3a764000082610260015160400151115b80620002b05750670de0b6b3a764000082610260015160600151115b15620002cf5760405163161071fb60e11b815260040160405180910390fd5b610260820151805160198190556020820151601a556040820151601b55606090910151601c556102408301515111806200031a57508161026001516020015182610240015160200151115b806200033757508161026001516040015182610240015160400151115b806200035457508161026001516060015182610240015160600151115b1562000373576040516315b05a8f60e01b815260040160405180910390fd5b61024082015180516015556020808201516016556040808301516017556060928301516018558451600280546001600160a01b03199081166001600160a01b03938416179091558387015160038054831691841691909117905591860151600480548416918316919091179055608086015160078054841691831691909117905560a086015160088054841691831691909117905560c08601516009805490931691161790559083015180516200042f92601d9201906200046c565b5050610280810151600580546001600160a01b0319166001600160a01b039092169190911790556102a081015160065560e00151600a5562000a3a565b828054828255905f5260205f20908101928215620004c2579160200282015b82811115620004c257825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200048b565b50620004d0929150620004d4565b5090565b5b80821115620004d0575f8155600101620004d5565b634e487b7160e01b5f52604160045260245ffd5b6040516102c081016001600160401b0381118282101715620005245762000524620004ea565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620005555762000555620004ea565b604052919050565b80516001600160a01b038116811462000574575f80fd5b919050565b5f82601f83011262000589575f80fd5b815160206001600160401b03821115620005a757620005a7620004ea565b8160051b620005b88282016200052a565b9283528481018201928281019087851115620005d2575f80fd5b83870192505b84831015620005fc57620005ec836200055d565b82529183019190830190620005d8565b979650505050505050565b5f6080828403121562000618575f80fd5b604051608081016001600160401b03811182821017156200063d576200063d620004ea565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f82601f8301126200067e575f80fd5b81516001600160401b038111156200069a576200069a620004ea565b6020620006b0601f8301601f191682016200052a565b8281528582848701011115620006c4575f80fd5b5f5b83811015620006e3578581018301518282018401528201620006c6565b505f928101909101919091529392505050565b5f806040838503121562000708575f80fd5b82516001600160401b03808211156200071f575f80fd5b90840190610380828703121562000734575f80fd5b6200073e620004fe565b62000749836200055d565b815262000759602084016200055d565b60208201526200076c604084016200055d565b604082015260608301518281111562000783575f80fd5b620007918882860162000579565b606083015250620007a5608084016200055d565b6080820152620007b860a084016200055d565b60a0820152620007cb60c084016200055d565b60c082015260e08381015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0808401519082015261020080840151908201526102208084015190820152610240620008598882860162000607565b908201526200086d876102c0850162000607565b6102608201526200088261034084016200055d565b61028082015261036092909201516102a0830152602085015191935080821115620008ab575f80fd5b50620008ba858286016200066e565b9150509250929050565b600181811c90821680620008d957607f821691505b602082108103620008f857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200094957805f5260205f20601f840160051c81016020851015620009255750805b601f840160051c820191505b8181101562000946575f815560010162000931565b50505b505050565b81516001600160401b038111156200096a576200096a620004ea565b62000982816200097b8454620008c4565b84620008fe565b602080601f831160018114620009b8575f8415620009a05750858301515b5f19600386901b1c1916600185901b17855562000a12565b5f85815260208120601f198616915b82811015620009e857888601518255948401946001909101908401620009c7565b508582101562000a0657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f8262000a3557634e487b7160e01b5f52601260045260245ffd5b500690565b6135ca8062000a485f395ff3fe608060405260043610610395575f3560e01c80638e127cf5116101de578063d2c35ce811610108578063e4e7148f1161009d578063ec895f111161006d578063ec895f1114610a9d578063f259645814610abc578063f8c09e5914610adb578063fe3d5aeb14610b09575f80fd5b8063e4e7148f14610a2c578063e71f34b314610a4b578063e83e34b114610a6a578063eb71f66c14610a7e575f80fd5b8063dd2b8fbb116100d8578063dd2b8fbb146109c5578063e0e2daaa146109e4578063e1b39c80146109f9578063e333155514610a0d575f80fd5b8063d2c35ce81461095d578063d6f501691461097c578063daac24da14610991578063daf012e6146109b0575f80fd5b8063b25612631161017e578063c415b95c1161014e578063c415b95c146108ff578063c905a4b51461091e578063d0f96b9214610933578063d23d7ea314610948575f80fd5b8063b25612631461088b578063bc30e7a1146108aa578063bf9bd5cd146108c9578063c1722563146108de575f80fd5b806399623bb1116101b957806399623bb11461081a5780639af2526214610839578063a64c90bf14610858578063a98a46db1461086c575f80fd5b80638e127cf5146107c75780638efc0986146107e657806397b0e8ce146107fb575f80fd5b80634554f9a9116102bf578063628027a31161025f57806383b361e81161022f57806383b361e81461074b57806384c19aab1461076a57806385229785146107895780638627a4f0146107a8575f80fd5b8063628027a3146106bb5780636b44e6be146106da5780636e95d67c146107185780636f6d5c4a1461072c575f80fd5b80634fbfee771161029a5780634fbfee771461063657806354fd4d50146106555780635720c9d5146106875780635aa6e6751461069c575f80fd5b80634554f9a9146105ed578063488007601461060257806349f13de714610617575f80fd5b80631ecda0fe116103355780632e7cd971116103055780632e7cd9711461057d5780633e2d201414610590578063411c3035146105af578063421caba8146105ce575f80fd5b80631ecda0fe146104e95780632885e3ac1461050c5780632907d3dd1461052b5780632b58f4181461054a575f80fd5b806310d1dc3e1161037057806310d1dc3e1461046057806311e77bfe1461047f5780631978ebcf1461049e5780631b59be0c146104bd575f80fd5b806304baa00b146103c357806306fdde031461041557806310780f7314610429575f80fd5b366103bf576002600154036103bd57604051630aac75b560e31b815260040160405180910390fd5b005b5f80fd5b3480156103ce575f80fd5b506103ff6040518060400160405280601181526020017048797065726472697665466163746f727960781b81525081565b60405161040c9190612c3a565b60405180910390f35b348015610420575f80fd5b506103ff610b28565b348015610434575f80fd5b50600854610448906001600160a01b031681565b6040516001600160a01b03909116815260200161040c565b34801561046b575f80fd5b506103bd61047a366004612c4c565b610bb3565b34801561048a575f80fd5b506103bd610499366004612c5c565b610ccc565b3480156104a9575f80fd5b506103bd6104b8366004612c5c565b610da5565b3480156104c8575f80fd5b506104dc6104d7366004612c73565b610e27565b60405161040c9190612ce2565b3480156104f4575f80fd5b506104fe600f5481565b60405190815260200161040c565b348015610517575f80fd5b506103bd610526366004612c4c565b610eff565b348015610536575f80fd5b506103bd610545366004612c5c565b611065565b348015610555575f80fd5b50610448610564366004612d55565b602080525f90815260409020546001600160a01b031681565b61044861058b36600461301f565b6110e7565b34801561059b575f80fd5b506103bd6105aa366004612d55565b61150e565b3480156105ba575f80fd5b506103bd6105c93660046130f7565b611581565b3480156105d9575f80fd5b506103bd6105e8366004612d55565b611749565b3480156105f8575f80fd5b506104fe60105481565b34801561060d575f80fd5b506104fe60145481565b348015610622575f80fd5b50610448610631366004613121565b611850565b348015610641575f80fd5b506103bd610650366004612c5c565b61193d565b348015610660575f80fd5b506103ff60405180604001604052806007815260200166076312e302e32360cc1b81525081565b348015610692575f80fd5b506104fe600b5481565b3480156106a7575f80fd5b50600254610448906001600160a01b031681565b3480156106c6575f80fd5b506103bd6106d5366004612c5c565b611999565b3480156106e5575f80fd5b506107086106f4366004612d55565b60226020525f908152604090205460ff1681565b604051901515815260200161040c565b348015610723575f80fd5b506021546104fe565b348015610737575f80fd5b506103bd610746366004612c5c565b611a1b565b348015610756575f80fd5b506103bd610765366004612c5c565b611abf565b348015610775575f80fd5b506103bd610784366004612c5c565b611b41565b348015610794575f80fd5b506103bd6107a3366004612d55565b611bc3565b3480156107b3575f80fd5b506103bd6107c2366004612d55565b611c36565b3480156107d2575f80fd5b506103bd6107e1366004612c5c565b611ca9565b3480156107f1575f80fd5b506104fe600e5481565b348015610806575f80fd5b506103bd610815366004612c5c565b611d4d565b348015610825575f80fd5b50600554610448906001600160a01b031681565b348015610844575f80fd5b506103bd610853366004612c73565b611dcf565b348015610863575f80fd5b506104dc611e37565b348015610877575f80fd5b506103bd610886366004612d55565b611e97565b348015610896575f80fd5b506103bd6108a5366004612d55565b611f0a565b3480156108b5575f80fd5b506104dc6108c43660046131af565b611f7d565b3480156108d4575f80fd5b506104fe60125481565b3480156108e9575f80fd5b506108f261207c565b60405161040c91906131cf565b34801561090a575f80fd5b50600754610448906001600160a01b031681565b348015610929575f80fd5b506104fe60065481565b34801561093e575f80fd5b506104fe600a5481565b348015610953575f80fd5b506104fe60115481565b348015610968575f80fd5b506103bd610977366004612d55565b6120d0565b348015610987575f80fd5b506104fe60135481565b34801561099c575f80fd5b506104486109ab366004612c5c565b612143565b3480156109bb575f80fd5b506104fe600d5481565b3480156109d0575f80fd5b506103bd6109df366004612d55565b612171565b3480156109ef575f80fd5b506104fe600c5481565b348015610a04575f80fd5b50601e546104fe565b348015610a18575f80fd5b50600454610448906001600160a01b031681565b348015610a37575f80fd5b50600354610448906001600160a01b031681565b348015610a56575f80fd5b506103bd610a65366004612c5c565b6121e4565b348015610a75575f80fd5b506108f2612288565b348015610a89575f80fd5b506103bd610a98366004612c5c565b6122dc565b348015610aa8575f80fd5b506104dc610ab73660046131af565b612374565b348015610ac7575f80fd5b50600954610448906001600160a01b031681565b348015610ae6575f80fd5b50610708610af5366004612d55565b601f6020525f908152604090205460ff1681565b348015610b14575f80fd5b50610448610b23366004612c5c565b612473565b5f8054610b34906131fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610b60906131fa565b8015610bab5780601f10610b8257610100808354040283529160200191610bab565b820191905f5260205f20905b815481529060010190602001808311610b8e57829003601f168201915b505050505081565b6002546001600160a01b03163314610bdd576040516282b42960e81b815260040160405180910390fd5b60408051608081018252601954808252601a546020830152601b5492820192909252601c5460608201529082351180610c1d575080602001518260200135115b80610c2f575080604001518260400135115b80610c41575080606001518260600135115b15610c5f576040516315b05a8f60e01b815260040160405180910390fd5b81356015819055602080840135601681905560408086013560178190556060808801356018819055835196875294860193909352908401528201527fe1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421906080015b60405180910390a15050565b6002546001600160a01b03163314610cf6576040516282b42960e81b815260040160405180910390fd5b80600b54610d04919061322c565b151580610d1d575080600c54610d1a919061322c565b15155b80610d34575080600d54610d31919061322c565b15155b80610d4b575080600e54610d48919061322c565b15155b15610d69576040516311b75c1560e31b815260040160405180910390fd5b600a8190556040518181527f04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a906020015b60405180910390a150565b6002546001600160a01b03163314610dcf576040516282b42960e81b815260040160405180910390fd5b601254811115610df257604051631670f79760e01b815260040160405180910390fd5b60118190556040518181527faab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f0219190602001610d9a565b60215460609067ffffffffffffffff811115610e4557610e45612d70565b604051908082528060200260200182016040528015610e6e578160200160208202803683370190505b5090505f5b82811015610ef75760205f858584818110610e9057610e9061324b565b9050602002016020810190610ea59190612d55565b6001600160a01b03908116825260208201929092526040015f20548351911690839083908110610ed757610ed761324b565b6001600160a01b0390921660209283029190910190910152600101610e73565b505b92915050565b6002546001600160a01b03163314610f29576040516282b42960e81b815260040160405180910390fd5b6040805160808101825260155481526016546020820152601754918101919091526018546060820152670de0b6b3a764000082351180610f745750670de0b6b3a76400008260200135115b80610f8a5750670de0b6b3a76400008260400135115b80610fa05750670de0b6b3a76400008260600135115b80610fac575080518235105b80610fbe575080602001518260200135105b80610fd0575080604001518260400135105b80610fe2575080606001518260600135105b156110005760405163161071fb60e11b815260040160405180910390fd5b81356019819055602080840135601a819055604080860135601b819055606080880135601c819055835196875294860193909352908401528201527f8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a790608001610cc0565b6002546001600160a01b0316331461108f576040516282b42960e81b815260040160405180910390fd5b6010548111156110b2576040516328a2d9a960e01b815260040160405180910390fd5b600f8190556040518181527f41f729b931ad8e33d697fff6bc6736a1ac6ee09e8265efae2794ac1635c217a690602001610d9a565b6001600160a01b0389165f908152601f602052604081205460ff1661111f57604051636e623f0f60e01b815260040160405180910390fd5b61112a888686612487565b60408051336020808301919091528183018e905282518083038401815260608301938490528051910120631d321d7560e31b9092525f916001600160a01b038d169163e990eba891611186918e908e908e908a90606401613370565b6020604051808303815f875af11580156111a2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c691906133bf565b90508a60205f836001600160a01b03166001600160a01b031681526020019081526020015f205f6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060045f9054906101000a90046001600160a01b03168961014001906001600160a01b031690816001600160a01b0316815250508a6001600160a01b03167fb25b0f0f93209be08152122f1321f6b0ef559a93a67695fff5fea3e5ed234465828c8c8c60405161128194939291906133da565b60405180910390a26021805460018082019092557f3a6357012c1a3ae0a17d304c9920310382d968ebcc4b1771f41c6b304205b5700180546001600160a01b0319166001600160a01b038481169182179092555f90815260226020908152604091829020805460ff1916851790559280558051339381019390935282018e90528c16906316abfc7090349060600160405160208183030381529060405280519060200120338b8b8a6040518763ffffffff1660e01b815260040161134995949392919061342b565b60206040518083038185885af1158015611365573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061138a919061348d565b5060026001555f5b601d5481101561143057816001600160a01b0316637180c8ca601d83815481106113be576113be61324b565b5f9182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b039091166004820152600160248201526044015f604051808303815f87803b15801561140e575f80fd5b505af1158015611420573d5f803e3d5ffd5b5050600190920191506113929050565b506004805460405163ab033ea960e01b81526001600160a01b039182169281019290925282169063ab033ea9906024015f604051808303815f87803b158015611477575f80fd5b505af1158015611489573d5f803e3d5ffd5b5047925050811590506114fe576040515f90339083908381818185875af1925050503d805f81146114d5576040519150601f19603f3d011682016040523d82523d5f602084013e6114da565b606091505b50509050806114fc576040516312171d8360e31b815260040160405180910390fd5b505b509b9a5050505050505050505050565b6002546001600160a01b03163314611538576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fae062fb82c932c653cd44617343ecda1d13e375e0d6f20d969c944fbda1963d3905f90a250565b6002546001600160a01b031633148015906115a757506003546001600160a01b03163314155b156115c4576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382165f908152601f602052604090205460ff166115fc57604051634bf121ab60e01b815260040160405180910390fd5b816001600160a01b0316601e82815481106116195761161961324b565b5f918252602090912001546001600160a01b03161461164b57604051630f2700cb60e21b815260040160405180910390fd5b6001600160a01b0382165f908152601f60205260409020805460ff19169055601e805461167a906001906134b8565b8154811061168a5761168a61324b565b5f91825260209091200154601e80546001600160a01b0390921691839081106116b5576116b561324b565b905f5260205f20015f6101000a8154816001600160a01b0302191690836001600160a01b03160217905550601e8054806116f1576116f16134cb565b5f8281526020812082015f1990810180546001600160a01b03191690559091019091556040516001600160a01b038416917f709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe091a25050565b6002546001600160a01b0316331480159061176f57506003546001600160a01b03163314155b1561178c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381165f908152601f602052604090205460ff16156117c55760405163bd34634f60e01b815260040160405180910390fd5b6001600160a01b0381165f818152601f6020526040808220805460ff19166001908117909155601e8054918201815583527f50bb669a95c7b50b7e8a6f09454034b2b14cf2b85c730dca9a539ca82cb6e3500180546001600160a01b03191684179055517f16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e39190a250565b6001600160a01b0387165f908152601f602052604081205460ff1661188857604051636e623f0f60e01b815260040160405180910390fd5b611893878686612487565b60408051336020808301919091528183018c90528251808303840181526060830193849052805191012063182a20c360e31b9092525f916001600160a01b038b169163c1510618916118ef918c908c908a908a906064016134df565b6020604051808303815f875af115801561190b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061192f91906133bf565b9a9950505050505050505050565b6002546001600160a01b03163314611967576040516282b42960e81b815260040160405180910390fd5b600681905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0905f90a250565b6002546001600160a01b031633146119c3576040516282b42960e81b815260040160405180910390fd5b6013548110156119e657604051630a35539d60e41b815260040160405180910390fd5b60148190556040518181527fa9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e90602001610d9a565b6002546001600160a01b03163314611a45576040516282b42960e81b815260040160405180910390fd5b600b54811080611a605750600a54611a5d908261322c565b15155b80611a6c5750600d5481115b15611a8a5760405163f9c0959d60e01b815260040160405180910390fd5b600c8190556040518181527f31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f290602001610d9a565b6002546001600160a01b03163314611ae9576040516282b42960e81b815260040160405180910390fd5b601454811115611b0c57604051635a8f655760e01b815260040160405180910390fd5b60138190556040518181527f490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a4690602001610d9a565b6002546001600160a01b03163314611b6b576040516282b42960e81b815260040160405180910390fd5b600f54811015611b8e57604051637edc061360e11b815260040160405180910390fd5b60108190556040518181527f0e56d83f54e6f5b08716a54b3abdb59b3025bf12c1875c87ab98ab081d6f838190602001610d9a565b6002546001600160a01b03163314611bed576040516282b42960e81b815260040160405180910390fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418905f90a250565b6002546001600160a01b03163314611c60576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2905f90a250565b6002546001600160a01b03163314611cd3576040516282b42960e81b815260040160405180910390fd5b600a54811080611cee5750600a54611ceb908261322c565b15155b80611cfa5750600c5481115b15611d1857604051630219d66360e11b815260040160405180910390fd5b600b8190556040518181527f6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b763190602001610d9a565b6002546001600160a01b03163314611d77576040516282b42960e81b815260040160405180910390fd5b601154811015611d9a5760405163019cfb7b60e61b815260040160405180910390fd5b60128190556040518181527f4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c78297890602001610d9a565b6002546001600160a01b03163314611df9576040516282b42960e81b815260040160405180910390fd5b611e05601d8383612b8b565b507f2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc388282604051610cc092919061351d565b6060601d805480602002602001604051908101604052809291908181526020018280548015611e8d57602002820191905f5260205f20905b81546001600160a01b03168152600190910190602001808311611e6f575b5050505050905090565b6002546001600160a01b03163314611ec1576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517f6f717fb0ab51206dea4064a35c94c2784f8714b012fbde820e0ddee36265eb6a905f90a250565b6002546001600160a01b03163314611f34576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab905f90a250565b6060818310611f9f57604051633b2735ab60e11b815260040160405180910390fd5b602154821115611fc25760405163e0f7becb60e01b815260040160405180910390fd5b611fcc83836134b8565b67ffffffffffffffff811115611fe457611fe4612d70565b60405190808252806020026020018201604052801561200d578160200160208202803683370190505b509050825b82811015610ef7576021818154811061202d5761202d61324b565b905f5260205f20015f9054906101000a90046001600160a01b0316828583038151811061205c5761205c61324b565b6001600160a01b0390921660209283029190910190910152600101612012565b6120a360405180608001604052805f81526020015f81526020015f81526020015f81525090565b50604080516080810182526015548152601654602082015260175491810191909152601854606082015290565b6002546001600160a01b031633146120fa576040516282b42960e81b815260040160405180910390fd5b600780546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f905f90a250565b5f602182815481106121575761215761324b565b5f918252602090912001546001600160a01b031692915050565b6002546001600160a01b0316331461219b576040516282b42960e81b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8905f90a250565b6002546001600160a01b0316331461220e576040516282b42960e81b815260040160405180910390fd5b600c548110806122295750600a54612226908261322c565b15155b806122355750600e5481115b1561225357604051633007ad0160e11b815260040160405180910390fd5b600d8190556040518181527fe9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f17890602001610d9a565b6122af60405180608001604052805f81526020015f81526020015f81526020015f81525090565b50604080516080810182526019548152601a546020820152601b5491810191909152601c54606082015290565b6002546001600160a01b03163314612306576040516282b42960e81b815260040160405180910390fd5b600d548110806123215750600a5461231e908261322c565b15155b1561233f5760405163cfb699cb60e01b815260040160405180910390fd5b600e8190556040518181527f866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b90602001610d9a565b606081831061239657604051633b2735ab60e11b815260040160405180910390fd5b601e548211156123b95760405163e0f7becb60e01b815260040160405180910390fd5b6123c383836134b8565b67ffffffffffffffff8111156123db576123db612d70565b604051908082528060200260200182016040528015612404578160200160208202803683370190505b509050825b82811015610ef757601e81815481106124245761242461324b565b905f5260205f20015f9054906101000a90046001600160a01b031682858303815181106124535761245361324b565b6001600160a01b0390921660209283029190910190910152600101612409565b5f601e82815481106121575761215761324b565b600b5483610100015110806124a25750600c54836101000151115b806124be5750600a548361010001516124bb919061322c565b15155b156124dc57604051635428734d60e01b815260040160405180910390fd5b600d548360e0015110806124f55750600e548360e00151115b8061251357508261010001518360e00151612510919061322c565b15155b156125315760405163253fffcf60e11b815260040160405180910390fd5b600f548360c00151108061254a57506010548360c00151115b156125685760405163ef9bc65f60e01b815260040160405180910390fd5b6019546101c084015151118061259c5750601a5460e08401516101c08501516020015161259a916301e13380906127f6565b115b806125b15750601b546101c084015160400151115b806125c65750601c546101c084015160600151115b806125d857506015546101c084015151105b80612601575060165460e08401516101c0850151602001516125ff916301e1338090612819565b105b8061261657506017546101c084015160400151105b8061262b57506018546101c084015160600151105b1561264957604051632d8768f960e01b815260040160405180910390fd5b60115482108061265a575060125482115b15612678576040516330554de160e01b815260040160405180910390fd5b5f61269c6611c37937e0800061269685671bc16d674ec80000612834565b9061284f565b6013549091506126ac908261284f565b8210806126df57506126dc6126d3671bc16d674ec800006126cd868561284f565b90612864565b60145490612878565b82115b156126fd576040516383ebdfb760e01b815260040160405180910390fd5b5f61270c838660e0015161288c565b60055460408701519192506001600160a01b0391821691161415806127375750600654856060015114155b8061275657506007546101608601516001600160a01b03908116911614155b8061277557506008546101808601516001600160a01b03908116911614155b8061279457506009546101a08601516001600160a01b03908116911614155b806127b357506004546101408601516001600160a01b03908116911614155b806127c2575061012085015115155b156127e05760405163e8c02dd760e01b815260040160405180910390fd5b3061014086015261012090940193909352505050565b5f825f19048411830215820261280a575f80fd5b50910281810615159190040190565b5f825f19048411830215820261282d575f80fd5b5091020490565b5f61284883670de0b6b3a764000084612819565b9392505050565b5f81831161285d5781612848565b5090919050565b5f6128488383670de0b6b3a7640000612819565b5f8183116128865782612848565b50919050565b5f806128bc6128ad61289f86606461356a565b66a5bbed86c5a00090612864565b6748cd4072281e000090612834565b90506128d0670de0b6b3a764000082612834565b9050612928816126cd6128fb6128f66128f189670de0b6b3a7640000613581565b612930565b61295d565b6129226128f66129108a8a6301e13380612819565b6128f190670de0b6b3a7640000613581565b90612834565b949350505050565b5f6001600160ff1b038211156129595760405163396ea70160e11b815260040160405180910390fd5b5090565b5f80821361297e5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612a0a9084901c612930565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b828054828255905f5260205f20908101928215612bdc579160200282015b82811115612bdc5781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190612ba9565b506129599291505b80821115612959575f8155600101612be4565b5f81518084525f5b81811015612c1b57602081850181015186830182015201612bff565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f6128486020830184612bf7565b5f60808284031215612886575f80fd5b5f60208284031215612c6c575f80fd5b5035919050565b5f8060208385031215612c84575f80fd5b823567ffffffffffffffff80821115612c9b575f80fd5b818501915085601f830112612cae575f80fd5b813581811115612cbc575f80fd5b8660208260051b8501011115612cd0575f80fd5b60209290920196919550909350505050565b602080825282518282018190525f9190848201906040850190845b81811015612d225783516001600160a01b031683529284019291840191600101612cfd565b50909695505050505050565b6001600160a01b0381168114612d42575f80fd5b50565b8035612d5081612d2e565b919050565b5f60208284031215612d65575f80fd5b813561284881612d2e565b634e487b7160e01b5f52604160045260245ffd5b6040516101e0810167ffffffffffffffff81118282101715612da857612da8612d70565b60405290565b5f82601f830112612dbd575f80fd5b813567ffffffffffffffff80821115612dd857612dd8612d70565b604051601f8301601f19908116603f01168101908282118183101715612e0057612e00612d70565b81604052838152866020858801011115612e18575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f60808284031215612e47575f80fd5b6040516080810181811067ffffffffffffffff82111715612e6a57612e6a612d70565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215612eac575f80fd5b612eb4612d84565b9050612ebf82612d45565b8152612ecd60208301612d45565b6020820152612ede60408301612d45565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140612f3b818401612d45565b90820152610160612f4d838201612d45565b90820152610180612f5f838201612d45565b908201526101a0612f71838201612d45565b908201526101c0612f8484848301612e37565b9082015292915050565b5f60608284031215612f9e575f80fd5b6040516060810167ffffffffffffffff8282108183111715612fc257612fc2612d70565b8160405282935084359150612fd682612d2e565b9082526020840135908115158214612fec575f80fd5b8160208401526040850135915080821115613005575f80fd5b5061301285828601612dae565b6040830152505092915050565b5f805f805f805f805f806103608b8d031215613039575f80fd5b8a35995061304960208c01612d45565b985060408b013567ffffffffffffffff80821115613065575f80fd5b6130718e838f01612dae565b99506130808e60608f01612e9b565b98506102a08d0135915080821115613096575f80fd5b6130a28e838f01612dae565b97506102c08d013596506102e08d013595506103008d013594506103208d01359150808211156130d0575f80fd5b506130dd8d828e01612f8e565b9250506103408b013590509295989b9194979a5092959850565b5f8060408385031215613108575f80fd5b823561311381612d2e565b946020939093013593505050565b5f805f805f805f80610320898b031215613139575f80fd5b88359750602089013561314b81612d2e565b965061315a8a60408b01612e9b565b955061028089013567ffffffffffffffff811115613176575f80fd5b6131828b828c01612dae565b989b979a5095986102a0810135976102c082013597506102e0820135965061030090910135945092505050565b5f80604083850312156131c0575f80fd5b50508035926020909101359150565b8151815260208083015190820152604080830151908201526060808301519082015260808101610ef9565b600181811c9082168061320e57607f821691505b60208210810361288657634e487b7160e01b5f52602260045260245ffd5b5f8261324657634e487b7160e01b5f52601260045260245ffd5b500690565b634e487b7160e01b5f52603260045260245ffd5b80516001600160a01b03168252602081015161328660208401826001600160a01b03169052565b5060408101516132a160408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151613307828501826001600160a01b03169052565b5050610160818101516001600160a01b0390811691840191909152610180808301518216908401526101a080830151909116908301526101c09081015180519183019190915260208101516101e083015260408101516102008301526060015161022090910152565b5f6102c087835280602084015261338981840188612bf7565b9050613398604084018761325f565b8281036102808401526133ab8186612bf7565b915050826102a08301529695505050505050565b5f602082840312156133cf575f80fd5b815161284881612d2e565b6001600160a01b03851681526102a0602082018190525f906133fe83820187612bf7565b905061340d604084018661325f565b8281036102808401526134208185612bf7565b979650505050505050565b8581525f60018060a01b03808716602084015285604084015284606084015260a060808401528084511660a0840152506020830151151560c08301526040830151606060e0840152613481610100840182612bf7565b98975050505050505050565b5f6020828403121561349d575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610ef957610ef96134a4565b634e487b7160e01b5f52603160045260245ffd5b5f6102c08783526134f3602084018861325f565b8061026084015261350681840187612bf7565b61028084019590955250506102a001529392505050565b60208082528181018390525f908460408401835b8681101561355f57823561354481612d2e565b6001600160a01b031682529183019190830190600101613531565b509695505050505050565b8082028115828204841417610ef957610ef96134a4565b80820180821115610ef957610ef96134a456fea2646970667358221220a1e514bf85e79a36a06a6b5cba470da19dd8126fb4e92a14dbe5b9d89c3e2ddf64736f6c63430008160033' as `0x${string}`,
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
} as const
};
