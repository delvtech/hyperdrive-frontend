export const IHyperdriveFactory = {
  name: 'IHyperdriveFactory' as const,
  abi: [
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
        "name": "_deployerCoordinator",
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
        "name": "_instance",
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
    "stateMutability": "pure"
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
    "stateMutability": "pure"
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
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
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
