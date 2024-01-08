export const HyperdriveFactory = 
{
  "abi": [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "governance",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "hyperdriveGovernance",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "defaultPausers",
              "type": "address[]"
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
              "name": "maxFees",
              "type": "tuple"
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
            }
          ],
          "internalType": "struct HyperdriveFactory.FactoryConfig",
          "name": "_factoryConfig",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EndIndexTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerAlreadyAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerIndexMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerNotAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDeployer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidIndexes",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxFeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NonPayableInitialization",
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
          "indexed": true,
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
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
          "internalType": "address",
          "name": "newDeployer",
          "type": "address"
        }
      ],
      "name": "ImplementationUpdated",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveDeployer",
          "type": "address"
        }
      ],
      "name": "addHyperdriveDeployer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveDeployer",
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
          "internalType": "struct IHyperdrive.PoolDeployConfig",
          "name": "_deployConfig",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_extraData",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_initializeExtraData",
          "type": "bytes"
        }
      ],
      "name": "deployAndInitialize",
      "outputs": [
        {
          "internalType": "contract IHyperdrive",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeCollector",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fees",
      "outputs": [
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDefaultPausers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getHyperdriveDeployerAtIndex",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endIndex",
          "type": "uint256"
        }
      ],
      "name": "getHyperdriveDeployersInRange",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "range",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getInstanceAtIndex",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endIndex",
          "type": "uint256"
        }
      ],
      "name": "getInstancesInRange",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "range",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNumberOfHyperdriveDeployers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNumberOfInstances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "governance",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hyperdriveGovernance",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isHyperdriveDeployer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isInstance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instance",
          "type": "address"
        }
      ],
      "name": "isOfficial",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkerCodeHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkerFactory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveDeployer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "removeHyperdriveDeployer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_defaultPausers_",
          "type": "address[]"
        }
      ],
      "name": "updateDefaultPausers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_feeCollector",
          "type": "address"
        }
      ],
      "name": "updateFeeCollector",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
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
          "internalType": "struct IHyperdrive.Fees",
          "name": "_fees",
          "type": "tuple"
        }
      ],
      "name": "updateFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_governance",
          "type": "address"
        }
      ],
      "name": "updateGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveGovernance",
          "type": "address"
        }
      ],
      "name": "updateHyperdriveGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash",
          "type": "bytes32"
        }
      ],
      "name": "updateLinkerCodeHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_linkerFactory",
          "type": "address"
        }
      ],
      "name": "updateLinkerFactory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "versionCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x610100604052600180553480156200001657600080fd5b5060405162001ef938038062001ef98339810160408190526200003991620003d8565b60a0808201805151608081905281516020015190925280516040015160c052516060015160e052670de0b6b3a764000010806200007f5750670de0b6b3a764000060a051115b80620000945750670de0b6b3a764000060c051115b80620000a95750670de0b6b3a764000060e051115b15620000c85760405163a3932d2d60e01b815260040160405180910390fd5b6080805190820151511180620000e7575060a051816080015160200151115b80620000fc575060c051816080015160400151115b8062000111575060e051816080015160600151115b15620001305760405163cd4e616760e01b815260040160405180910390fd5b608081015180516006556020808201516007556040808301516008556060928301516009558351600080546001600160a01b03199081166001600160a01b03938416179091558386015160038054831691841691909117905593850151600a8054909516911617909255908201518051620001b092600b920190620001e2565b5060c0810151600480546001600160a01b0319166001600160a01b0390921691909117905560e00151600555620004cf565b8280548282559060005260206000209081019282156200023a579160200282015b828111156200023a57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000203565b50620002489291506200024c565b5090565b5b808211156200024857600081556001016200024d565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b03811182821017156200029f576200029f62000263565b60405290565b80516001600160a01b0381168114620002bd57600080fd5b919050565b600082601f830112620002d457600080fd5b815160206001600160401b0380831115620002f357620002f362000263565b8260051b604051601f19603f830116810181811084821117156200031b576200031b62000263565b6040529384528581018301938381019250878511156200033a57600080fd5b83870191505b8482101562000364576200035482620002a5565b8352918301919083019062000340565b979650505050505050565b6000608082840312156200038257600080fd5b604051608081016001600160401b0381118282101715620003a757620003a762000263565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060208284031215620003eb57600080fd5b81516001600160401b03808211156200040357600080fd5b908301906101c082860312156200041957600080fd5b6200042362000279565b6200042e83620002a5565b81526200043e60208401620002a5565b60208201526040830151828111156200045657600080fd5b6200046487828601620002c2565b6040830152506200047860608401620002a5565b60608201526200048c86608085016200036f565b6080820152620004a18661010085016200036f565b60a0820152620004b56101808401620002a5565b60c08201526101a0929092015160e0830152509392505050565b60805160a05160c05160e0516119f0620005096000396000610ab701526000610a8901526000610a5b01526000610a3101526119f06000f3fe60806040526004361061019c5760003560e01c80639af1d35a116100ec578063cd2cdf581161008a578063dd2b8fbb11610064578063dd2b8fbb146104df578063dd6d30c1146104ff578063e333155514610515578063f1e1b6601461053557600080fd5b8063cd2cdf581461048c578063d2c35ce81461049f578063daac24da146104bf57600080fd5b8063b2561263116100c6578063b256126314610416578063bc30e7a114610436578063c415b95c14610456578063c905a4b51461047657600080fd5b80639af1d35a1461039e5780639af25262146103e1578063a1ac11f51461040157600080fd5b80636e95d67c1161015957806380a6b8641161013357806380a6b8641461030e578063852297851461033e57806398a9c92b1461035e57806399623bb11461037e57600080fd5b80636e95d67c146102ad57806377b81aac146102cc5780637f7c5a7d146102f957600080fd5b806302fd2de9146101a15780634fbfee77146101c3578063503cf156146101e35780635aa6e675146102035780635f5a4e88146102405780636b44e6be1461026d575b600080fd5b3480156101ad57600080fd5b506101c16101bc366004611345565b610555565b005b3480156101cf57600080fd5b506101c16101de366004611369565b61061f565b3480156101ef57600080fd5b506101c16101fe366004611382565b61067c565b34801561020f57600080fd5b50600054610223906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024c57600080fd5b5061026061025b3660046113ae565b610800565b60405161023791906113d0565b34801561027957600080fd5b5061029d610288366004611345565b600f6020526000908152604090205460ff1681565b6040519015158152602001610237565b3480156102b957600080fd5b50600e545b604051908152602001610237565b3480156102d857600080fd5b506102be6102e7366004611345565b60026020526000908152604090205481565b34801561030557600080fd5b5061026061091c565b34801561031a57600080fd5b5061029d610329366004611345565b600d6020526000908152604090205460ff1681565b34801561034a57600080fd5b506101c1610359366004611345565b61097e565b34801561036a57600080fd5b506101c161037936600461141d565b610a05565b34801561038a57600080fd5b50600454610223906001600160a01b031681565b3480156103aa57600080fd5b506006546007546008546009546103c19392919084565b604080519485526020850193909352918301526060820152608001610237565b3480156103ed57600080fd5b506101c16103fc366004611435565b610b1e565b34801561040d57600080fd5b50600c546102be565b34801561042257600080fd5b506101c1610431366004611345565b610b54565b34801561044257600080fd5b506102606104513660046113ae565b610bc6565b34801561046257600080fd5b50600a54610223906001600160a01b031681565b34801561048257600080fd5b506102be60055481565b61022361049a3660046115dd565b610cdb565b3480156104ab57600080fd5b506101c16104ba366004611345565b611178565b3480156104cb57600080fd5b506102236104da366004611369565b6111ec565b3480156104eb57600080fd5b506101c16104fa366004611345565b61121c565b34801561050b57600080fd5b506102be60015481565b34801561052157600080fd5b50600354610223906001600160a01b031681565b34801561054157600080fd5b50610223610550366004611369565b611290565b6000546001600160a01b0316331461057f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000908152600d602052604090205460ff16156105b95760405163322026b560e21b815260040160405180910390fd5b6001600160a01b03166000818152600d60205260408120805460ff19166001908117909155600c805491820181559091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180546001600160a01b0319169091179055565b6000546001600160a01b03163314610649576040516282b42960e81b815260040160405180910390fd5b600581905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad090600090a250565b6000546001600160a01b031633146106a6576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000908152600d602052604090205460ff166106df57604051634793420960e11b815260040160405180910390fd5b816001600160a01b0316600c82815481106106fc576106fc611721565b6000918252602090912001546001600160a01b03161461072f5760405163e1a1578d60e01b815260040160405180910390fd5b6001600160a01b0382166000908152600d60205260409020805460ff19169055600c805461075f9060019061174d565b8154811061076f5761076f611721565b600091825260209091200154600c80546001600160a01b03909216918390811061079b5761079b611721565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600c8054806107da576107da611766565b600082815260209020810160001990810180546001600160a01b03191690550190555050565b60608183111561082357604051633b2735ab60e11b815260040160405180910390fd5b600c548211156108465760405163e0f7becb60e01b815260040160405180910390fd5b610850838361174d565b61085b90600161177c565b67ffffffffffffffff811115610873576108736114aa565b60405190808252806020026020018201604052801561089c578160200160208202803683370190505b509050825b82811161091557600c81815481106108bb576108bb611721565b6000918252602090912001546001600160a01b0316826108db868461174d565b815181106108eb576108eb611721565b6001600160a01b03909216602092830291909101909101528061090d8161178f565b9150506108a1565b5092915050565b6060600b80548060200260200160405190810160405280929190818152602001828054801561097457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610956575b5050505050905090565b6000546001600160a01b031633146109a8576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166109bb57600080fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d941890600090a250565b6000546001600160a01b03163314610a2f576040516282b42960e81b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081351180610a8157507f00000000000000000000000000000000000000000000000000000000000000008160200135115b80610aaf57507f00000000000000000000000000000000000000000000000000000000000000008160400135115b80610add57507f00000000000000000000000000000000000000000000000000000000000000008160600135115b15610afb5760405163cd4e616760e01b815260040160405180910390fd5b80356006556020810135600755604081013560085560600135600955565b505050565b6000546001600160a01b03163314610b48576040516282b42960e81b815260040160405180910390fd5b610b19600b83836112a5565b6000546001600160a01b03163314610b7e576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b606081831115610be957604051633b2735ab60e11b815260040160405180910390fd5b600e54821115610c0c5760405163e0f7becb60e01b815260040160405180910390fd5b610c16838361174d565b610c2190600161177c565b67ffffffffffffffff811115610c3957610c396114aa565b604051908082528060200260200182016040528015610c62578160200160208202803683370190505b509050825b82811161091557600e8181548110610c8157610c81611721565b6000918252602090912001546001600160a01b031682610ca1868461174d565b81518110610cb157610cb1611721565b6001600160a01b039092166020928302919091019091015280610cd38161178f565b915050610c67565b60003415610cfc57604051638fbc3bd960e01b815260040160405180910390fd5b6001600160a01b0387166000908152600d602052604090205460ff16610d355760405163043c669f60e01b815260040160405180910390fd5b600480546001600160a01b039081166020808a01919091526005546040808b0191909152600a5483166101208b0152306101008b015280516080810182526006548152600754928101929092526008548282015260095460608301526101408a019190915251630c46909760e11b8152600092918a169163188d212e91610dc0918b918b91016118b6565b6020604051808303816000875af1158015610ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0391906118e1565b6001546001600160a01b03808316600090815260026020526040908190208390556003549091166101008b015251919250907f9409438224258854b5587daf29ca81c2676ed86cd439240ca7aaa0c6e17cfa7690610e669084908b908b906118fe565b60405180910390a2600e805460018082019092557fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0180546001600160a01b0319166001600160a01b038481169182179092556000908152600f602052604090819020805460ff1916909317909255885191516323b872dd60e01b8152336004820152306024820152604481018890529116906323b872dd906064016020604051808303816000875af1158015610f21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f459190611939565b50865160405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af1158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd9190611939565b610fda576040516340b27c2160e11b815260040160405180910390fd5b60408051606081018252338152600160208201528082018590529051631df417fd60e21b81526001600160a01b038316916377d05ff49161102291899189919060040161195b565b6020604051808303816000875af1158015611041573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106591906119a1565b5060005b600b5481101561110c57816001600160a01b0316637180c8ca600b838154811061109557611095611721565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b1580156110e957600080fd5b505af11580156110fd573d6000803e3d6000fd5b50505050806001019050611069565b5060035460405163ab033ea960e01b81526001600160a01b0391821660048201529082169063ab033ea990602401600060405180830381600087803b15801561115457600080fd5b505af1158015611168573d6000803e3d6000fd5b50929a9950505050505050505050565b6000546001600160a01b031633146111a2576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6000600e828154811061120157611201611721565b6000918252602090912001546001600160a01b031692915050565b6000546001600160a01b03163314611246576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d890600090a250565b6000600c828154811061120157611201611721565b8280548282559060005260206000209081019282156112f8579160200282015b828111156112f85781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906112c5565b50611304929150611308565b5090565b5b808211156113045760008155600101611309565b6001600160a01b038116811461133257600080fd5b50565b80356113408161131d565b919050565b60006020828403121561135757600080fd5b81356113628161131d565b9392505050565b60006020828403121561137b57600080fd5b5035919050565b6000806040838503121561139557600080fd5b82356113a08161131d565b946020939093013593505050565b600080604083850312156113c157600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b818110156114115783516001600160a01b0316835292840192918401916001016113ec565b50909695505050505050565b60006080828403121561142f57600080fd5b50919050565b6000806020838503121561144857600080fd5b823567ffffffffffffffff8082111561146057600080fd5b818501915085601f83011261147457600080fd5b81358181111561148357600080fd5b8660208260051b850101111561149857600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156114e4576114e46114aa565b60405290565b6000608082840312156114fc57600080fd5b6040516080810181811067ffffffffffffffff8211171561151f5761151f6114aa565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261156157600080fd5b813567ffffffffffffffff8082111561157c5761157c6114aa565b604051601f8301601f19908116603f011681019082821181831017156115a4576115a46114aa565b816040528381528660208588010111156115bd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806000808688036102608112156115f857600080fd5b87356116038161131d565b96506101c0601f198201121561161857600080fd5b506116216114c0565b61162d60208901611335565b815261163b60408901611335565b6020820152606088013560408201526080880135606082015260a0880135608082015260c088013560a082015260e088013560c08201526101008089013560e083015261012061168c818b01611335565b8284015261014091506116a0828b01611335565b908301526116b28a6101608b016114ea565b9082015294506101e087013567ffffffffffffffff808211156116d457600080fd5b6116e08a838b01611550565b95506102008901359450610220890135935061024089013591508082111561170757600080fd5b5061171489828a01611550565b9150509295509295509295565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561176057611760611737565b92915050565b634e487b7160e01b600052603160045260246000fd5b8082018082111561176057611760611737565b6000600182016117a1576117a1611737565b5060010190565b80516001600160a01b0316825260208101516117cf60208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151611827828501826001600160a01b03169052565b5050610120818101516001600160a01b0316908301526101409081015180519183019190915260208101516101608301526040810151610180830152606001516101a090910152565b6000815180845260005b818110156118965760208185018101518683018201520161187a565b506000602082860101526020601f19601f83011685010191505092915050565b60006101e06118c583866117a8565b806101c08401526118d881840185611870565b95945050505050565b6000602082840312156118f357600080fd5b81516113628161131d565b6001600160a01b0384168152600061020061191c60208401866117a8565b806101e084015261192f81840185611870565b9695505050505050565b60006020828403121561194b57600080fd5b8151801515811461136257600080fd5b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261192f60c0840182611870565b6000602082840312156119b357600080fd5b505191905056fea2646970667358221220fa0f28308599d5aed280718e836a07a610f028099f0de294829e004700554b6064736f6c63430008130033",
    "sourceMap": "682:16972:5:-:0;;;1992:1;1960:33;;4901:1449;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5149:22;;;;;;:28;5135:42;;;;5200:22;;-1:-1:-1;5200:27:5;;5187:40;;;5258:22;;:35;;;5237:56;;5328:22;:39;;;5303:64;;150:4:51;-1:-1:-1;5394:17:5;:49;;;150:4:51;5427:10:5;;:16;5394:49;:89;;;;150:4:51;5459:18:5;;:24;5394:89;:133;;;;150:4:51;5499:22:5;;:28;5394:133;5377:220;;;5559:27;;-1:-1:-1;;;5559:27:5;;;;;;;;;;;5377:220;5651:11;;;5623:19;;;;:25;:39;;:92;;;5705:10;;5678:14;:19;;;:24;;;:37;5623:92;:161;;;;5766:18;;5731:14;:19;;;:32;;;:53;5623:161;:238;;;;5839:22;;5800:14;:19;;;:36;;;:61;5623:238;5606:322;;;5893:24;;-1:-1:-1;;;5893:24:5;;;;;;;;;;;5606:322;5944:19;;;;5937:26;;:4;:26;;;;;;;;;;;;;;;;;;;;;;6031:25;;-1:-1:-1;6018:38:5;;-1:-1:-1;;;;;;6018:38:5;;;-1:-1:-1;;;;;6018:38:5;;;;;;;6089:35;;;;5937:26;6066:58;;;;;;;;;;;;;6149:27;;;;6134:12;:42;;;;;;;;;;;6204:29;;;;6186:47;;;;:15;;:47;;;:::i;:::-;-1:-1:-1;6259:28:5;;;;6243:13;:44;;-1:-1:-1;;;;;;6243:44:5;-1:-1:-1;;;;;6243:44:5;;;;;;;;;6314:29;;;6297:14;:46;682:16972;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;682:16972:5;-1:-1:-1;;;;;682:16972:5;;;;;;;;;;;-1:-1:-1;682:16972:5;;;;;;;-1:-1:-1;682:16972:5;;;-1:-1:-1;682:16972:5;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:127:161;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:161;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:177::-;480:13;;-1:-1:-1;;;;;522:31:161;;512:42;;502:70;;568:1;565;558:12;502:70;401:177;;;:::o;583:923::-;648:5;701:3;694:4;686:6;682:17;678:27;668:55;;719:1;716;709:12;668:55;742:13;;774:4;-1:-1:-1;;;;;827:10:161;;;824:36;;;840:18;;:::i;:::-;886:2;883:1;879:10;918:2;912:9;981:2;977:7;972:2;968;964:11;960:25;952:6;948:38;1036:6;1024:10;1021:22;1016:2;1004:10;1001:18;998:46;995:72;;;1047:18;;:::i;:::-;1083:2;1076:22;1133:18;;;1209:15;;;1205:24;;;1167:15;;;;-1:-1:-1;1241:15:161;;;1238:35;;;1269:1;1266;1259:12;1238:35;1305:2;1297:6;1293:15;1282:26;;1317:159;1333:6;1328:3;1325:15;1317:159;;;1399:34;1429:3;1399:34;:::i;:::-;1387:47;;1454:12;;;;1350;;;;1317:159;;;1494:6;583:923;-1:-1:-1;;;;;;;583:923:161:o;1511:584::-;1573:5;1621:4;1609:9;1604:3;1600:19;1596:30;1593:50;;;1639:1;1636;1629:12;1593:50;1672:2;1666:9;1714:4;1702:17;;-1:-1:-1;;;;;1734:34:161;;1770:22;;;1731:62;1728:88;;;1796:18;;:::i;:::-;1836:10;1832:2;1825:22;;1865:6;1856:15;;1901:9;1895:16;1887:6;1880:32;1966:2;1955:9;1951:18;1945:25;1940:2;1932:6;1928:15;1921:50;2025:2;2014:9;2010:18;2004:25;1999:2;1991:6;1987:15;1980:50;2084:2;2073:9;2069:18;2063:25;2058:2;2050:6;2046:15;2039:50;;1511:584;;;;:::o;2100:1172::-;2201:6;2254:2;2242:9;2233:7;2229:23;2225:32;2222:52;;;2270:1;2267;2260:12;2222:52;2297:16;;-1:-1:-1;;;;;2362:14:161;;;2359:34;;;2389:1;2386;2379:12;2359:34;2412:22;;;;2468:6;2450:16;;;2446:29;2443:49;;;2488:1;2485;2478:12;2443:49;2514:17;;:::i;:::-;2554:33;2584:2;2554:33;:::i;:::-;2547:5;2540:48;2620:42;2658:2;2654;2650:11;2620:42;:::i;:::-;2615:2;2608:5;2604:14;2597:66;2702:2;2698;2694:11;2688:18;2731:2;2721:8;2718:16;2715:36;;;2747:1;2744;2737:12;2715:36;2783:67;2842:7;2831:8;2827:2;2823:17;2783:67;:::i;:::-;2778:2;2771:5;2767:14;2760:91;;2883:42;2921:2;2917;2913:11;2883:42;:::i;:::-;2878:2;2871:5;2867:14;2860:66;2959:56;3007:7;3001:3;2997:2;2993:12;2959:56;:::i;:::-;2953:3;2946:5;2942:15;2935:81;3050:59;3101:7;3092:6;3088:2;3084:15;3050:59;:::i;:::-;3043:4;3036:5;3032:16;3025:85;3144:43;3182:3;3178:2;3174:12;3144:43;:::i;:::-;3137:4;3126:16;;3119:69;3236:3;3228:12;;;;3222:19;3215:4;3204:16;;3197:45;-1:-1:-1;3130:5:161;2100:1172;-1:-1:-1;;;2100:1172:161:o;:::-;682:16972:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061019c5760003560e01c80639af1d35a116100ec578063cd2cdf581161008a578063dd2b8fbb11610064578063dd2b8fbb146104df578063dd6d30c1146104ff578063e333155514610515578063f1e1b6601461053557600080fd5b8063cd2cdf581461048c578063d2c35ce81461049f578063daac24da146104bf57600080fd5b8063b2561263116100c6578063b256126314610416578063bc30e7a114610436578063c415b95c14610456578063c905a4b51461047657600080fd5b80639af1d35a1461039e5780639af25262146103e1578063a1ac11f51461040157600080fd5b80636e95d67c1161015957806380a6b8641161013357806380a6b8641461030e578063852297851461033e57806398a9c92b1461035e57806399623bb11461037e57600080fd5b80636e95d67c146102ad57806377b81aac146102cc5780637f7c5a7d146102f957600080fd5b806302fd2de9146101a15780634fbfee77146101c3578063503cf156146101e35780635aa6e675146102035780635f5a4e88146102405780636b44e6be1461026d575b600080fd5b3480156101ad57600080fd5b506101c16101bc366004611345565b610555565b005b3480156101cf57600080fd5b506101c16101de366004611369565b61061f565b3480156101ef57600080fd5b506101c16101fe366004611382565b61067c565b34801561020f57600080fd5b50600054610223906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024c57600080fd5b5061026061025b3660046113ae565b610800565b60405161023791906113d0565b34801561027957600080fd5b5061029d610288366004611345565b600f6020526000908152604090205460ff1681565b6040519015158152602001610237565b3480156102b957600080fd5b50600e545b604051908152602001610237565b3480156102d857600080fd5b506102be6102e7366004611345565b60026020526000908152604090205481565b34801561030557600080fd5b5061026061091c565b34801561031a57600080fd5b5061029d610329366004611345565b600d6020526000908152604090205460ff1681565b34801561034a57600080fd5b506101c1610359366004611345565b61097e565b34801561036a57600080fd5b506101c161037936600461141d565b610a05565b34801561038a57600080fd5b50600454610223906001600160a01b031681565b3480156103aa57600080fd5b506006546007546008546009546103c19392919084565b604080519485526020850193909352918301526060820152608001610237565b3480156103ed57600080fd5b506101c16103fc366004611435565b610b1e565b34801561040d57600080fd5b50600c546102be565b34801561042257600080fd5b506101c1610431366004611345565b610b54565b34801561044257600080fd5b506102606104513660046113ae565b610bc6565b34801561046257600080fd5b50600a54610223906001600160a01b031681565b34801561048257600080fd5b506102be60055481565b61022361049a3660046115dd565b610cdb565b3480156104ab57600080fd5b506101c16104ba366004611345565b611178565b3480156104cb57600080fd5b506102236104da366004611369565b6111ec565b3480156104eb57600080fd5b506101c16104fa366004611345565b61121c565b34801561050b57600080fd5b506102be60015481565b34801561052157600080fd5b50600354610223906001600160a01b031681565b34801561054157600080fd5b50610223610550366004611369565b611290565b6000546001600160a01b0316331461057f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000908152600d602052604090205460ff16156105b95760405163322026b560e21b815260040160405180910390fd5b6001600160a01b03166000818152600d60205260408120805460ff19166001908117909155600c805491820181559091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180546001600160a01b0319169091179055565b6000546001600160a01b03163314610649576040516282b42960e81b815260040160405180910390fd5b600581905560405181907f395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad090600090a250565b6000546001600160a01b031633146106a6576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000908152600d602052604090205460ff166106df57604051634793420960e11b815260040160405180910390fd5b816001600160a01b0316600c82815481106106fc576106fc611721565b6000918252602090912001546001600160a01b03161461072f5760405163e1a1578d60e01b815260040160405180910390fd5b6001600160a01b0382166000908152600d60205260409020805460ff19169055600c805461075f9060019061174d565b8154811061076f5761076f611721565b600091825260209091200154600c80546001600160a01b03909216918390811061079b5761079b611721565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600c8054806107da576107da611766565b600082815260209020810160001990810180546001600160a01b03191690550190555050565b60608183111561082357604051633b2735ab60e11b815260040160405180910390fd5b600c548211156108465760405163e0f7becb60e01b815260040160405180910390fd5b610850838361174d565b61085b90600161177c565b67ffffffffffffffff811115610873576108736114aa565b60405190808252806020026020018201604052801561089c578160200160208202803683370190505b509050825b82811161091557600c81815481106108bb576108bb611721565b6000918252602090912001546001600160a01b0316826108db868461174d565b815181106108eb576108eb611721565b6001600160a01b03909216602092830291909101909101528061090d8161178f565b9150506108a1565b5092915050565b6060600b80548060200260200160405190810160405280929190818152602001828054801561097457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610956575b5050505050905090565b6000546001600160a01b031633146109a8576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166109bb57600080fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517f03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d941890600090a250565b6000546001600160a01b03163314610a2f576040516282b42960e81b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081351180610a8157507f00000000000000000000000000000000000000000000000000000000000000008160200135115b80610aaf57507f00000000000000000000000000000000000000000000000000000000000000008160400135115b80610add57507f00000000000000000000000000000000000000000000000000000000000000008160600135115b15610afb5760405163cd4e616760e01b815260040160405180910390fd5b80356006556020810135600755604081013560085560600135600955565b505050565b6000546001600160a01b03163314610b48576040516282b42960e81b815260040160405180910390fd5b610b19600b83836112a5565b6000546001600160a01b03163314610b7e576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b606081831115610be957604051633b2735ab60e11b815260040160405180910390fd5b600e54821115610c0c5760405163e0f7becb60e01b815260040160405180910390fd5b610c16838361174d565b610c2190600161177c565b67ffffffffffffffff811115610c3957610c396114aa565b604051908082528060200260200182016040528015610c62578160200160208202803683370190505b509050825b82811161091557600e8181548110610c8157610c81611721565b6000918252602090912001546001600160a01b031682610ca1868461174d565b81518110610cb157610cb1611721565b6001600160a01b039092166020928302919091019091015280610cd38161178f565b915050610c67565b60003415610cfc57604051638fbc3bd960e01b815260040160405180910390fd5b6001600160a01b0387166000908152600d602052604090205460ff16610d355760405163043c669f60e01b815260040160405180910390fd5b600480546001600160a01b039081166020808a01919091526005546040808b0191909152600a5483166101208b0152306101008b015280516080810182526006548152600754928101929092526008548282015260095460608301526101408a019190915251630c46909760e11b8152600092918a169163188d212e91610dc0918b918b91016118b6565b6020604051808303816000875af1158015610ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0391906118e1565b6001546001600160a01b03808316600090815260026020526040908190208390556003549091166101008b015251919250907f9409438224258854b5587daf29ca81c2676ed86cd439240ca7aaa0c6e17cfa7690610e669084908b908b906118fe565b60405180910390a2600e805460018082019092557fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0180546001600160a01b0319166001600160a01b038481169182179092556000908152600f602052604090819020805460ff1916909317909255885191516323b872dd60e01b8152336004820152306024820152604481018890529116906323b872dd906064016020604051808303816000875af1158015610f21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f459190611939565b50865160405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af1158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd9190611939565b610fda576040516340b27c2160e11b815260040160405180910390fd5b60408051606081018252338152600160208201528082018590529051631df417fd60e21b81526001600160a01b038316916377d05ff49161102291899189919060040161195b565b6020604051808303816000875af1158015611041573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106591906119a1565b5060005b600b5481101561110c57816001600160a01b0316637180c8ca600b838154811061109557611095611721565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b1580156110e957600080fd5b505af11580156110fd573d6000803e3d6000fd5b50505050806001019050611069565b5060035460405163ab033ea960e01b81526001600160a01b0391821660048201529082169063ab033ea990602401600060405180830381600087803b15801561115457600080fd5b505af1158015611168573d6000803e3d6000fd5b50929a9950505050505050505050565b6000546001600160a01b031633146111a2576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b6000600e828154811061120157611201611721565b6000918252602090912001546001600160a01b031692915050565b6000546001600160a01b03163314611246576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517ff3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d890600090a250565b6000600c828154811061120157611201611721565b8280548282559060005260206000209081019282156112f8579160200282015b828111156112f85781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906112c5565b50611304929150611308565b5090565b5b808211156113045760008155600101611309565b6001600160a01b038116811461133257600080fd5b50565b80356113408161131d565b919050565b60006020828403121561135757600080fd5b81356113628161131d565b9392505050565b60006020828403121561137b57600080fd5b5035919050565b6000806040838503121561139557600080fd5b82356113a08161131d565b946020939093013593505050565b600080604083850312156113c157600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b818110156114115783516001600160a01b0316835292840192918401916001016113ec565b50909695505050505050565b60006080828403121561142f57600080fd5b50919050565b6000806020838503121561144857600080fd5b823567ffffffffffffffff8082111561146057600080fd5b818501915085601f83011261147457600080fd5b81358181111561148357600080fd5b8660208260051b850101111561149857600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156114e4576114e46114aa565b60405290565b6000608082840312156114fc57600080fd5b6040516080810181811067ffffffffffffffff8211171561151f5761151f6114aa565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261156157600080fd5b813567ffffffffffffffff8082111561157c5761157c6114aa565b604051601f8301601f19908116603f011681019082821181831017156115a4576115a46114aa565b816040528381528660208588010111156115bd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806000808688036102608112156115f857600080fd5b87356116038161131d565b96506101c0601f198201121561161857600080fd5b506116216114c0565b61162d60208901611335565b815261163b60408901611335565b6020820152606088013560408201526080880135606082015260a0880135608082015260c088013560a082015260e088013560c08201526101008089013560e083015261012061168c818b01611335565b8284015261014091506116a0828b01611335565b908301526116b28a6101608b016114ea565b9082015294506101e087013567ffffffffffffffff808211156116d457600080fd5b6116e08a838b01611550565b95506102008901359450610220890135935061024089013591508082111561170757600080fd5b5061171489828a01611550565b9150509295509295509295565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561176057611760611737565b92915050565b634e487b7160e01b600052603160045260246000fd5b8082018082111561176057611760611737565b6000600182016117a1576117a1611737565b5060010190565b80516001600160a01b0316825260208101516117cf60208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151611827828501826001600160a01b03169052565b5050610120818101516001600160a01b0316908301526101409081015180519183019190915260208101516101608301526040810151610180830152606001516101a090910152565b6000815180845260005b818110156118965760208185018101518683018201520161187a565b506000602082860101526020601f19601f83011685010191505092915050565b60006101e06118c583866117a8565b806101c08401526118d881840185611870565b95945050505050565b6000602082840312156118f357600080fd5b81516113628161131d565b6001600160a01b0384168152600061020061191c60208401866117a8565b806101e084015261192f81840185611870565b9695505050505050565b60006020828403121561194b57600080fd5b8151801515811461136257600080fd5b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261192f60c0840182611870565b6000602082840312156119b357600080fd5b505191905056fea2646970667358221220fa0f28308599d5aed280718e836a07a610f028099f0de294829e004700554b6064736f6c63430008130033",
    "sourceMap": "682:16972:5:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9356:351;;;;;;;;;;-1:-1:-1;9356:351:5;;;;;:::i;:::-;;:::i;:::-;;7792:195;;;;;;;;;;-1:-1:-1;7792:195:5;;;;;:::i;:::-;;:::i;9930:615::-;;;;;;;;;;-1:-1:-1;9930:615:5;;;;;:::i;:::-;;:::i;1851:25::-;;;;;;;;;;-1:-1:-1;1851:25:5;;;;-1:-1:-1;;;;;1851:25:5;;;;;;-1:-1:-1;;;;;1319:32:161;;;1301:51;;1289:2;1274:18;1851:25:5;;;;;;;;17008:644;;;;;;;;;;-1:-1:-1;17008:644:5;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;4740:42::-;;;;;;;;;;-1:-1:-1;4740:42:5;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2444:14:161;;2437:22;2419:41;;2407:2;2392:18;4740:42:5;2279:187:161;14757:105:5;;;;;;;;;;-1:-1:-1;14838:10:5;:17;14757:105;;;2617:25:161;;;2605:2;2590:18;14757:105:5;2471:177:161;2128:62:5;;;;;;;;;;-1:-1:-1;2128:62:5;;;;;:::i;:::-;;;;;;;;;;;;;;14505:109;;;;;;;;;;;;;:::i;4423:52::-;;;;;;;;;;-1:-1:-1;4423:52:5;;;;;:::i;:::-;;;;;;;;;;;;;;;;7336:236;;;;;;;;;;-1:-1:-1;7336:236:5;;;;;:::i;:::-;;:::i;8484:395::-;;;;;;;;;;-1:-1:-1;8484:395:5;;;;;:::i;:::-;;:::i;2389:28::-;;;;;;;;;;-1:-1:-1;2389:28:5;;;;-1:-1:-1;;;;;2389:28:5;;;2608;;;;;;;;;;-1:-1:-1;2608:28:5;;;;;;;;;;;;;;;;;;;3080:25:161;;;3136:2;3121:18;;3114:34;;;;3164:18;;;3157:34;3222:2;3207:18;;3200:34;3067:3;3052:19;2608:28:5;2849:391:161;9015:203:5;;;;;;;;;;-1:-1:-1;9015:203:5;;;;;:::i;:::-;;:::i;16224:125::-;;;;;;;;;;-1:-1:-1;16315:20:5;:27;16224:125;;6664:157;;;;;;;;;;-1:-1:-1;6664:157:5;;;;;:::i;:::-;;:::i;15445:614::-;;;;;;;;;;-1:-1:-1;15445:614:5;;;;;:::i;:::-;;:::i;2715:27::-;;;;;;;;;;-1:-1:-1;2715:27:5;;;;-1:-1:-1;;;;;2715:27:5;;;2499:29;;;;;;;;;;;;;;;;11290:3130;;;;;;:::i;:::-;;:::i;8124:169::-;;;;;;;;;;-1:-1:-1;8124:169:5;;;;;:::i;:::-;;:::i;15034:116::-;;;;;;;;;;-1:-1:-1;15034:116:5;;;;;:::i;:::-;;:::i;6981:231::-;;;;;;;;;;-1:-1:-1;6981:231:5;;;;;:::i;:::-;;:::i;1960:33::-;;;;;;;;;;;;;;;;2274:35;;;;;;;;;;-1:-1:-1;2274:35:5;;;;-1:-1:-1;;;;;2274:35:5;;;16521:150;;;;;;;;;;-1:-1:-1;16521:150:5;;;;;:::i;:::-;;:::i;9356:351::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;-1:-1:-1;;;;;9468:41:5;::::1;;::::0;;;:20:::1;:41;::::0;;;;;::::1;;9464:123;;;9532:44;;-1:-1:-1::0;;;9532:44:5::1;;;;;;;;;;;9464:123;-1:-1:-1::0;;;;;9596:41:5::1;;::::0;;;:20:::1;:41;::::0;;;;:48;;-1:-1:-1;;9596:48:5::1;9640:4;9596:48:::0;;::::1;::::0;;;9654:20:::1;:46:::0;;;;::::1;::::0;;;;;;::::1;::::0;;-1:-1:-1;;;;;;9654:46:5::1;::::0;;::::1;::::0;;9356:351::o;7792:195::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;7895:14:::1;:32:::0;;;7942:38:::1;::::0;7912:15;;7942:38:::1;::::0;;;::::1;7792:195:::0;:::o;9930:615::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;-1:-1:-1;;;;;10070:41:5;::::1;;::::0;;;:20:::1;:41;::::0;;;;;::::1;;10065:120;;10134:40;;-1:-1:-1::0;;;10134:40:5::1;;;;;;;;;;;10065:120;10230:19;-1:-1:-1::0;;;;;10198:51:5::1;:20;10219:6;10198:28;;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;::::1;::::0;-1:-1:-1;;;;;10198:28:5::1;:51;10194:134;;10272:45;;-1:-1:-1::0;;;10272:45:5::1;;;;;;;;;;;10194:134;-1:-1:-1::0;;;;;10337:41:5;::::1;10381:5;10337:41:::0;;;:20:::1;:41;::::0;;;;:49;;-1:-1:-1;;10337:49:5::1;::::0;;10427:20:::1;10461:27:::0;;:31:::1;::::0;10337:49;;10461:31:::1;:::i;:::-;10427:75;;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;::::1;::::0;10396:20:::1;:28:::0;;-1:-1:-1;;;;;10427:75:5;;::::1;::::0;10417:6;;10396:28;::::1;;;;;:::i;:::-;;;;;;;;;:106;;;;;-1:-1:-1::0;;;;;10396:106:5::1;;;;;-1:-1:-1::0;;;;;10396:106:5::1;;;;;;10512:20;:26;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;;-1:-1:-1;;10512:26:5;;;;;-1:-1:-1;;;;;;10512:26:5::1;::::0;;;;;-1:-1:-1;;9930:615:5:o;17008:644::-;17130:22;17230:8;17217:10;:21;17213:87;;;17261:28;;-1:-1:-1;;;17261:28:5;;;;;;;;;;;17213:87;17324:20;:27;17313:38;;17309:106;;;17374:30;;-1:-1:-1;;;17374:30:5;;;;;;;;;;;17309:106;17489:21;17500:10;17489:8;:21;:::i;:::-;:25;;17513:1;17489:25;:::i;:::-;17475:40;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;17475:40:5;-1:-1:-1;17467:48:5;-1:-1:-1;17542:10:5;17525:121;17559:8;17554:1;:13;17525:121;;17612:20;17633:1;17612:23;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;;;;17612:23:5;17588:5;17594:14;17598:10;17594:1;:14;:::i;:::-;17588:21;;;;;;;;:::i;:::-;-1:-1:-1;;;;;17588:47:5;;;:21;;;;;;;;;;;:47;17569:3;;;;:::i;:::-;;;;17525:121;;;;17008:644;;;;:::o;14505:109::-;14557:16;14592:15;14585:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14585:22:5;;;;;;;;;;;;;;;;;;;;;;;14505:109;:::o;7336:236::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;-1:-1:-1;;;;;7445:28:5;::::1;7437:37;;;::::0;::::1;;7484:13;:30:::0;;-1:-1:-1;;;;;;7484:30:5::1;-1:-1:-1::0;;;;;7484:30:5;::::1;::::0;;::::1;::::0;;;7529:36:::1;::::0;::::1;::::0;-1:-1:-1;;7529:36:5::1;7336:236:::0;:::o;8484:395::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;8616:11:::1;8602::::0;::::1;:25;::::0;:64:::1;;;8656:10;8643:5;:10;;;:23;8602:64;:119;;;;8703:18;8682:5;:18;;;:39;8602:119;:182;;;;8762:22;8737:5;:22;;;:47;8602:182;8585:266;;;8816:24;;-1:-1:-1::0;;;8816:24:5::1;;;;;;;;;;;8585:266;8985:19:161::0;;8860:4:5::1;8972:33:161::0;9059:2;9048:14;;9035:28;9021:12;9014:50;9118:2;9107:14;;9094:28;9080:12;9073:50;9177:2;9166:14;9153:28;9139:12;9132:50;8484:395:5:o;8860:12::-:1;-1:-1:-1::0;;;8484:395:5:o;9015:203::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;9177:34:::1;:15;9195:16:::0;;9177:34:::1;:::i;6664:157::-:0;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;6745:10:::1;:24:::0;;-1:-1:-1;;;;;;6745:24:5::1;-1:-1:-1::0;;;;;6745:24:5;::::1;::::0;;::::1;::::0;;6784:30:::1;::::0;6745:24;;6784:30:::1;::::0;::::1;6664:157:::0;:::o;15445:614::-;15557:22;15657:8;15644:10;:21;15640:87;;;15688:28;;-1:-1:-1;;;15688:28:5;;;;;;;;;;;15640:87;15751:10;:17;15740:28;;15736:96;;;15791:30;;-1:-1:-1;;;15791:30:5;;;;;;;;;;;15736:96;15906:21;15917:10;15906:8;:21;:::i;:::-;:25;;15930:1;15906:25;:::i;:::-;15892:40;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15892:40:5;-1:-1:-1;15884:48:5;-1:-1:-1;15959:10:5;15942:111;15976:8;15971:1;:13;15942:111;;16029:10;16040:1;16029:13;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;;;;16029:13:5;16005:5;16011:14;16015:10;16011:1;:14;:::i;:::-;16005:21;;;;;;;;:::i;:::-;-1:-1:-1;;;;;16005:37:5;;;:21;;;;;;;;;;;:37;15986:3;;;;:::i;:::-;;;;15942:111;;11290:3130;11582:11;11609:9;:13;11605:89;;11645:38;;-1:-1:-1;;;11645:38:5;;;;;;;;;;;11605:89;-1:-1:-1;;;;;11977:41:5;;;;;;:20;:41;;;;;;;;11972:109;;12041:29;;-1:-1:-1;;;12041:29:5;;;;;;;;;;;11972:109;12548:13;;;-1:-1:-1;;;;;12548:13:5;;;12518:27;;;;:43;;;;12602:14;;12571:28;;;;:45;;;;12655:12;;;;12626:26;;;:41;12712:4;12548:13;12677:24;;:40;12727:25;;;;;;;12748:4;12727:25;;;;;;;;;;;;;;;;;;;;;;;;:18;;;:25;;;;12812:120;-1:-1:-1;;;12812:120:5;;12548:13;;12812:47;;;;;;:120;;12518:13;;12908:10;;12812:120;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12986:14;;-1:-1:-1;;;;;12952:31:5;;;;;;;:10;:31;;;;;;;:48;;;13037:20;;;;;;13010:24;;:47;13072:130;12762:180;;-1:-1:-1;12986:14:5;13072:130;;;;12762:180;;13010:13;;13182:10;;13072:130;:::i;:::-;;;;;;;;13284:10;:36;;;;;;;;;;;;;-1:-1:-1;;;;;;13284:36:5;-1:-1:-1;;;;;13284:36:5;;;;;;;;;-1:-1:-1;13330:31:5;;;:10;13284:36;13330:31;;;;;;:38;;-1:-1:-1;;13330:38:5;;;;;;;13426:23;;:124;;-1:-1:-1;;;13426:124:5;;13476:10;13426:124;;;12268:34:161;13508:4:5;12318:18:161;;;12311:43;12370:18;;;12363:34;;;13426:36:5;;;;;12203:18:161;;13426:124:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;13578:23:5;;:117;;-1:-1:-1;;;13578:117:5;;-1:-1:-1;;;;;12882:32:161;;;13578:117:5;;;12864:51:161;-1:-1:-1;;12931:18:161;;;12924:34;13578:31:5;;;;;;12837:18:161;;13578:117:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;13560:206;;13727:28;;-1:-1:-1;;;13727:28:5;;;;;;;;;;;13560:206;13855:155;;;;;;;;13906:10;13855:155;;13942:4;13855:155;;;;;;;;;;13775:245;;-1:-1:-1;;;13775:245:5;;-1:-1:-1;;;;;13775:21:5;;;;;:245;;13810:13;;13837:4;;13855:155;13775:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14155:9;14150:180;14174:15;:22;14170:26;;14150:180;;;14214:10;-1:-1:-1;;;;;14214:20:5;;14235:15;14251:1;14235:18;;;;;;;;:::i;:::-;;;;;;;;;;;14214:46;;;;;;-1:-1:-1;;;;;;14214:46:5;;;-1:-1:-1;;;;;14235:18:5;;;14214:46;;;13972:51:161;14235:18:5;14039::161;;;14032:50;13945:18;;14214:46:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14302:3;;;;;14150:180;;;-1:-1:-1;14364:20:5;;14339:46;;-1:-1:-1;;;14339:46:5;;-1:-1:-1;;;;;14364:20:5;;;14339:46;;;1301:51:161;14339:24:5;;;;;;1274:18:161;;14339:46:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;14403:10:5;;11290:3130;-1:-1:-1;;;;;;;;;;11290:3130:5:o;8124:169::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;8209:12:::1;:28:::0;;-1:-1:-1;;;;;;8209:28:5::1;-1:-1:-1::0;;;;;8209:28:5;::::1;::::0;;::::1;::::0;;;8252:34:::1;::::0;::::1;::::0;-1:-1:-1;;8252:34:5::1;8124:169:::0;:::o;15034:116::-;15100:7;15126:10;15137:5;15126:17;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;;;;15126:17:5;;15034:116;-1:-1:-1;;15034:116:5:o;6981:231::-;6473:10;;-1:-1:-1;;;;;6473:10:5;6459;:24;6455:63;;6492:26;;-1:-1:-1;;;6492:26:5;;;;;;;;;;;6455:63;7096:20:::1;:44:::0;;-1:-1:-1;;;;;;7096:44:5::1;-1:-1:-1::0;;;;;7096:44:5;::::1;::::0;;::::1;::::0;;;7155:50:::1;::::0;::::1;::::0;-1:-1:-1;;7155:50:5::1;6981:231:::0;:::o;16521:150::-;16611:7;16637:20;16658:5;16637:27;;;;;;;;:::i;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:131:161;-1:-1:-1;;;;;89:31:161;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:134::-;218:20;;247:31;218:20;247:31;:::i;:::-;150:134;;;:::o;289:247::-;348:6;401:2;389:9;380:7;376:23;372:32;369:52;;;417:1;414;407:12;369:52;456:9;443:23;475:31;500:5;475:31;:::i;:::-;525:5;289:247;-1:-1:-1;;;289:247:161:o;541:180::-;600:6;653:2;641:9;632:7;628:23;624:32;621:52;;;669:1;666;659:12;621:52;-1:-1:-1;692:23:161;;541:180;-1:-1:-1;541:180:161:o;726:315::-;794:6;802;855:2;843:9;834:7;830:23;826:32;823:52;;;871:1;868;861:12;823:52;910:9;897:23;929:31;954:5;929:31;:::i;:::-;979:5;1031:2;1016:18;;;;1003:32;;-1:-1:-1;;;726:315:161:o;1363:248::-;1431:6;1439;1492:2;1480:9;1471:7;1467:23;1463:32;1460:52;;;1508:1;1505;1498:12;1460:52;-1:-1:-1;;1531:23:161;;;1601:2;1586:18;;;1573:32;;-1:-1:-1;1363:248:161:o;1616:658::-;1787:2;1839:21;;;1909:13;;1812:18;;;1931:22;;;1758:4;;1787:2;2010:15;;;;1984:2;1969:18;;;1758:4;2053:195;2067:6;2064:1;2061:13;2053:195;;;2132:13;;-1:-1:-1;;;;;2128:39:161;2116:52;;2223:15;;;;2188:12;;;;2164:1;2082:9;2053:195;;;-1:-1:-1;2265:3:161;;1616:658;-1:-1:-1;;;;;;1616:658:161:o;2653:191::-;2736:6;2789:3;2777:9;2768:7;2764:23;2760:33;2757:53;;;2806:1;2803;2796:12;2757:53;-1:-1:-1;2829:9:161;2653:191;-1:-1:-1;2653:191:161:o;3245:615::-;3331:6;3339;3392:2;3380:9;3371:7;3367:23;3363:32;3360:52;;;3408:1;3405;3398:12;3360:52;3448:9;3435:23;3477:18;3518:2;3510:6;3507:14;3504:34;;;3534:1;3531;3524:12;3504:34;3572:6;3561:9;3557:22;3547:32;;3617:7;3610:4;3606:2;3602:13;3598:27;3588:55;;3639:1;3636;3629:12;3588:55;3679:2;3666:16;3705:2;3697:6;3694:14;3691:34;;;3721:1;3718;3711:12;3691:34;3774:7;3769:2;3759:6;3756:1;3752:14;3748:2;3744:23;3740:32;3737:45;3734:65;;;3795:1;3792;3785:12;3734:65;3826:2;3818:11;;;;;3848:6;;-1:-1:-1;3245:615:161;;-1:-1:-1;;;;3245:615:161:o;4047:127::-;4108:10;4103:3;4099:20;4096:1;4089:31;4139:4;4136:1;4129:15;4163:4;4160:1;4153:15;4179:250;4246:2;4240:9;4288:6;4276:19;;4325:18;4310:34;;4346:22;;;4307:62;4304:88;;;4372:18;;:::i;:::-;4408:2;4401:22;4179:250;:::o;4434:601::-;4485:5;4533:4;4521:9;4516:3;4512:19;4508:30;4505:50;;;4551:1;4548;4541:12;4505:50;4584:2;4578:9;4626:4;4618:6;4614:17;4697:6;4685:10;4682:22;4661:18;4649:10;4646:34;4643:62;4640:88;;;4708:18;;:::i;:::-;4748:10;4744:2;4737:22;;4777:6;4768:15;;4820:9;4807:23;4799:6;4792:39;4892:2;4881:9;4877:18;4864:32;4859:2;4851:6;4847:15;4840:57;4958:2;4947:9;4943:18;4930:32;4925:2;4917:6;4913:15;4906:57;5024:2;5013:9;5009:18;4996:32;4991:2;4983:6;4979:15;4972:57;;4434:601;;;;:::o;5040:718::-;5082:5;5135:3;5128:4;5120:6;5116:17;5112:27;5102:55;;5153:1;5150;5143:12;5102:55;5189:6;5176:20;5215:18;5252:2;5248;5245:10;5242:36;;;5258:18;;:::i;:::-;5333:2;5327:9;5301:2;5387:13;;-1:-1:-1;;5383:22:161;;;5407:2;5379:31;5375:40;5363:53;;;5431:18;;;5451:22;;;5428:46;5425:72;;;5477:18;;:::i;:::-;5517:10;5513:2;5506:22;5552:2;5544:6;5537:18;5598:3;5591:4;5586:2;5578:6;5574:15;5570:26;5567:35;5564:55;;;5615:1;5612;5605:12;5564:55;5679:2;5672:4;5664:6;5660:17;5653:4;5645:6;5641:17;5628:54;5726:1;5719:4;5714:2;5706:6;5702:15;5698:26;5691:37;5746:6;5737:15;;;;;;5040:718;;;;:::o;5763:1861::-;5919:6;5927;5935;5943;5951;5959;6003:9;5994:7;5990:23;6033:3;6029:2;6025:12;6022:32;;;6050:1;6047;6040:12;6022:32;6089:9;6076:23;6108:31;6133:5;6108:31;:::i;:::-;6158:5;-1:-1:-1;6197:6:161;-1:-1:-1;;6179:16:161;;6175:29;6172:49;;;6217:1;6214;6207:12;6172:49;;6245:17;;:::i;:::-;6287:38;6321:2;6310:9;6306:18;6287:38;:::i;:::-;6278:7;6271:55;6360:38;6394:2;6383:9;6379:18;6360:38;:::i;:::-;6355:2;6346:7;6342:16;6335:64;6461:2;6450:9;6446:18;6433:32;6428:2;6419:7;6415:16;6408:58;6528:3;6517:9;6513:19;6500:33;6495:2;6486:7;6482:16;6475:59;6597:3;6586:9;6582:19;6569:33;6563:3;6554:7;6550:17;6543:60;6666:3;6655:9;6651:19;6638:33;6632:3;6623:7;6619:17;6612:60;6735:3;6724:9;6720:19;6707:33;6701:3;6692:7;6688:17;6681:60;6760:3;6826:2;6815:9;6811:18;6798:32;6792:3;6783:7;6779:17;6772:59;6850:3;6887:38;6921:2;6910:9;6906:18;6887:38;:::i;:::-;6882:2;6873:7;6869:16;6862:64;6945:3;6935:13;;6982:38;7016:2;7005:9;7001:18;6982:38;:::i;:::-;6964:16;;;6957:64;7055:55;7102:7;7093:6;7078:22;;7055:55;:::i;:::-;7037:16;;;7030:81;7041:7;-1:-1:-1;7188:3:161;7173:19;;7160:33;7212:18;7242:14;;;7239:34;;;7269:1;7266;7259:12;7239:34;7292:49;7333:7;7324:6;7313:9;7309:22;7292:49;:::i;:::-;7282:59;;7388:3;7377:9;7373:19;7360:33;7350:43;;7440:3;7429:9;7425:19;7412:33;7402:43;;7498:3;7487:9;7483:19;7470:33;7454:49;;7528:2;7518:8;7515:16;7512:36;;;7544:1;7541;7534:12;7512:36;;7567:51;7610:7;7599:8;7588:9;7584:24;7567:51;:::i;:::-;7557:61;;;5763:1861;;;;;;;;:::o;8042:127::-;8103:10;8098:3;8094:20;8091:1;8084:31;8134:4;8131:1;8124:15;8158:4;8155:1;8148:15;8174:127;8235:10;8230:3;8226:20;8223:1;8216:31;8266:4;8263:1;8256:15;8290:4;8287:1;8280:15;8306:128;8373:9;;;8394:11;;;8391:37;;;8408:18;;:::i;:::-;8306:128;;;;:::o;8439:127::-;8500:10;8495:3;8491:20;8488:1;8481:31;8531:4;8528:1;8521:15;8555:4;8552:1;8545:15;8571:125;8636:9;;;8657:10;;;8654:36;;;8670:18;;:::i;8701:135::-;8740:3;8761:17;;;8758:43;;8781:18;;:::i;:::-;-1:-1:-1;8828:1:161;8817:13;;8701:135::o;9455:964::-;9544:12;;-1:-1:-1;;;;;1112:31:161;1100:44;;9608:4;9601:5;9597:16;9591:23;9623:48;9665:4;9660:3;9656:14;9642:12;-1:-1:-1;;;;;1112:31:161;1100:44;;1046:104;9623:48;;9720:4;9713:5;9709:16;9703:23;9696:4;9691:3;9687:14;9680:47;9776:4;9769:5;9765:16;9759:23;9752:4;9747:3;9743:14;9736:47;9832:4;9825:5;9821:16;9815:23;9808:4;9803:3;9799:14;9792:47;9888:4;9881:5;9877:16;9871:23;9864:4;9859:3;9855:14;9848:47;9944:4;9937:5;9933:16;9927:23;9920:4;9915:3;9911:14;9904:47;10000:4;9993:5;9989:16;9983:23;9976:4;9971:3;9967:14;9960:47;10026:6;10080:2;10073:5;10069:14;10063:21;10093:48;10137:2;10132:3;10128:12;10112:14;-1:-1:-1;;;;;1112:31:161;1100:44;;1046:104;10093:48;-1:-1:-1;;10160:6:161;10203:14;;;10197:21;-1:-1:-1;;;;;1112:31:161;10262:12;;;1100:44;10294:6;10337:14;;;10331:21;9263:12;;10400;;;9251:25;;;;9325:4;9314:16;;9308:23;9292:14;;;9285:47;9381:4;9370:16;;9364:23;9348:14;;;9341:47;9437:4;9426:16;9420:23;9404:14;;;;9397:47;9455:964::o;10424:422::-;10465:3;10503:5;10497:12;10530:6;10525:3;10518:19;10555:1;10565:162;10579:6;10576:1;10573:13;10565:162;;;10641:4;10697:13;;;10693:22;;10687:29;10669:11;;;10665:20;;10658:59;10594:12;10565:162;;;10569:3;10772:1;10765:4;10756:6;10751:3;10747:16;10743:27;10736:38;10835:4;10828:2;10824:7;10819:2;10811:6;10807:15;10803:29;10798:3;10794:39;10790:50;10783:57;;;10424:422;;;;:::o;10851:407::-;11057:4;11086:3;11098:53;11141:9;11133:6;11098:53;:::i;:::-;11188:2;11182:3;11171:9;11167:19;11160:31;11208:44;11248:2;11237:9;11233:18;11225:6;11208:44;:::i;:::-;11200:52;10851:407;-1:-1:-1;;;;;10851:407:161:o;11263:251::-;11333:6;11386:2;11374:9;11365:7;11361:23;11357:32;11354:52;;;11402:1;11399;11392:12;11354:52;11434:9;11428:16;11453:31;11478:5;11453:31;:::i;11519:504::-;-1:-1:-1;;;;;11812:32:161;;11794:51;;11753:4;11782:3;11854:62;11912:2;11897:18;;11889:6;11854:62;:::i;:::-;11953:2;11947:3;11936:9;11932:19;11925:31;11973:44;12013:2;12002:9;11998:18;11990:6;11973:44;:::i;:::-;11965:52;11519:504;-1:-1:-1;;;;;;11519:504:161:o;12408:277::-;12475:6;12528:2;12516:9;12507:7;12503:23;12499:32;12496:52;;;12544:1;12541;12534:12;12496:52;12576:9;12570:16;12629:5;12622:13;12615:21;12608:5;12605:32;12595:60;;12651:1;12648;12641:12;12969:641;13204:6;13193:9;13186:25;13247:6;13242:2;13231:9;13227:18;13220:34;13290:2;13285;13274:9;13270:18;13263:30;13365:1;13361;13356:3;13352:11;13348:19;13339:6;13333:13;13329:39;13324:2;13313:9;13309:18;13302:67;13438:2;13430:6;13426:15;13420:22;13413:30;13406:38;13400:3;13389:9;13385:19;13378:67;13167:4;13492:2;13484:6;13480:15;13474:22;13533:2;13527:3;13516:9;13512:19;13505:31;13553:51;13599:3;13588:9;13584:19;13570:12;13553:51;:::i;13615:184::-;13685:6;13738:2;13726:9;13717:7;13713:23;13709:32;13706:52;;;13754:1;13751;13744:12;13706:52;-1:-1:-1;13777:16:161;;13615:184;-1:-1:-1;13615:184:161:o",
    "linkReferences": {},
    "immutableReferences": {
      "1699": [
        {
          "start": 2609,
          "length": 32
        }
      ],
      "1702": [
        {
          "start": 2651,
          "length": 32
        }
      ],
      "1705": [
        {
          "start": 2697,
          "length": 32
        }
      ],
      "1708": [
        {
          "start": 2743,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "addHyperdriveDeployer(address)": "02fd2de9",
    "deployAndInitialize(address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,bytes)": "cd2cdf58",
    "feeCollector()": "c415b95c",
    "fees()": "9af1d35a",
    "getDefaultPausers()": "7f7c5a7d",
    "getHyperdriveDeployerAtIndex(uint256)": "f1e1b660",
    "getHyperdriveDeployersInRange(uint256,uint256)": "5f5a4e88",
    "getInstanceAtIndex(uint256)": "daac24da",
    "getInstancesInRange(uint256,uint256)": "bc30e7a1",
    "getNumberOfHyperdriveDeployers()": "a1ac11f5",
    "getNumberOfInstances()": "6e95d67c",
    "governance()": "5aa6e675",
    "hyperdriveGovernance()": "e3331555",
    "isHyperdriveDeployer(address)": "80a6b864",
    "isInstance(address)": "6b44e6be",
    "isOfficial(address)": "77b81aac",
    "linkerCodeHash()": "c905a4b5",
    "linkerFactory()": "99623bb1",
    "removeHyperdriveDeployer(address,uint256)": "503cf156",
    "updateDefaultPausers(address[])": "9af25262",
    "updateFeeCollector(address)": "d2c35ce8",
    "updateFees((uint256,uint256,uint256,uint256))": "98a9c92b",
    "updateGovernance(address)": "b2561263",
    "updateHyperdriveGovernance(address)": "dd2b8fbb",
    "updateLinkerCodeHash(bytes32)": "4fbfee77",
    "updateLinkerFactory(address)": "85229785",
    "versionCounter()": "dd6d30c1"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"defaultPausers\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"maxFees\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct HyperdriveFactory.FactoryConfig\",\"name\":\"_factoryConfig\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployer\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxFeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NonPayableInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"ImplementationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveDeployer\",\"type\":\"address\"}],\"name\":\"addHyperdriveDeployer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveDeployer\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_initializeExtraData\",\"type\":\"bytes\"}],\"name\":\"deployAndInitialize\",\"outputs\":[{\"internalType\":\"contract IHyperdrive\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeCollector\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDefaultPausers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getHyperdriveDeployerAtIndex\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"startIndex\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endIndex\",\"type\":\"uint256\"}],\"name\":\"getHyperdriveDeployersInRange\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"range\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getInstanceAtIndex\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"startIndex\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endIndex\",\"type\":\"uint256\"}],\"name\":\"getInstancesInRange\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"range\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getNumberOfHyperdriveDeployers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getNumberOfInstances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hyperdriveGovernance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isHyperdriveDeployer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isInstance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"instance\",\"type\":\"address\"}],\"name\":\"isOfficial\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerFactory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveDeployer\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"removeHyperdriveDeployer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_defaultPausers_\",\"type\":\"address[]\"}],\"name\":\"updateDefaultPausers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeCollector\",\"type\":\"address\"}],\"name\":\"updateFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"_fees\",\"type\":\"tuple\"}],\"name\":\"updateFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"updateHyperdriveGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"updateLinkerCodeHash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"name\":\"updateLinkerFactory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"versionCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addHyperdriveDeployer(address)\":{\"params\":{\"_hyperdriveDeployer\":\"The new hyperdrive deployer.\"}},\"constructor\":{\"params\":{\"_factoryConfig\":\"Configuration of the Hyperdrive Factory.\"}},\"deployAndInitialize(address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,bytes)\":{\"details\":\"This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.\",\"params\":{\"_apr\":\"The apr to call init with\",\"_contribution\":\"Base token to call init with\",\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_extraData\":\"The extra data that contains data necessary for the specific deployer.\",\"_hyperdriveDeployer\":\"Address of the hyperdrive deployer.\",\"_initializeExtraData\":\"The extra data for the `initialize` call.\"},\"returns\":{\"_0\":\"The hyperdrive address deployed.\"}},\"getDefaultPausers()\":{\"returns\":{\"_0\":\"The default pausers.\"}},\"getHyperdriveDeployerAtIndex(uint256)\":{\"params\":{\"index\":\"The index of the instance to get.\"},\"returns\":{\"_0\":\"The instance at the specified index.\"}},\"getHyperdriveDeployersInRange(uint256,uint256)\":{\"params\":{\"endIndex\":\"The ending index of the hyperdrive deployers to get.\",\"startIndex\":\"The starting index of the hyperdrive deployers to get.\"},\"returns\":{\"range\":\"The resulting custom portion of the hyperdrive deployers array.\"}},\"getInstanceAtIndex(uint256)\":{\"params\":{\"index\":\"The index of the instance to get.\"},\"returns\":{\"_0\":\"The instance at the specified index.\"}},\"getInstancesInRange(uint256,uint256)\":{\"params\":{\"endIndex\":\"The ending index of the instances to get.\",\"startIndex\":\"The starting index of the instances to get.\"},\"returns\":{\"range\":\"The resulting custom portion of the _instances array.\"}},\"getNumberOfHyperdriveDeployers()\":{\"returns\":{\"_0\":\"The number of hyperdrive deployers deployed by this factory.\"}},\"getNumberOfInstances()\":{\"returns\":{\"_0\":\"The number of instances deployed by this factory.\"}},\"removeHyperdriveDeployer(address,uint256)\":{\"params\":{\"_hyperdriveDeployer\":\"The hyperdrive deployer to remove.\",\"_index\":\"The index of the hyperdrive deployer to remove.\"}},\"updateDefaultPausers(address[])\":{\"params\":{\"_defaultPausers_\":\"The new list of default pausers.\"}},\"updateFeeCollector(address)\":{\"params\":{\"_feeCollector\":\"The new fee collector address.\"}},\"updateFees((uint256,uint256,uint256,uint256))\":{\"params\":{\"_fees\":\"The new defaults for the fee parameters.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}},\"updateHyperdriveGovernance(address)\":{\"params\":{\"_hyperdriveGovernance\":\"The new hyperdrive governance address.\"}},\"updateLinkerCodeHash(bytes32)\":{\"params\":{\"_linkerCodeHash\":\"The new linker code hash.\"}},\"updateLinkerFactory(address)\":{\"params\":{\"_linkerFactory\":\"The new linker factory.\"}}},\"stateVariables\":{\"_defaultPausers\":{\"details\":\"The defaultPausers used when new instances are deployed.\"},\"_hyperdriveDeployers\":{\"details\":\"List of all hyperdrive deployers onboarded by governance.\"},\"_instances\":{\"details\":\"Array of all instances deployed by this factory.Can be manually updated by governance to add previous instances deployed.\"},\"isInstance\":{\"details\":\"Mapping to check if an instance is in the _instances array.\"},\"maxCurveFee\":{\"details\":\"The maximum curve fee that can be used as a factory default.\"},\"maxFlatFee\":{\"details\":\"The maximum flat fee that can be used as a factory default.\"},\"maxGovernanceLPFee\":{\"details\":\"The maximum governance LP fee that can be used as a factory default.\"},\"maxGovernanceZombieFee\":{\"details\":\"The maximum governance zombie fee that can be used as a factory default.\"}},\"title\":\"HyperdriveFactory\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"Deployed(uint256,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"The event that is emitted when new instances are deployed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive governance address is updated.\"},\"ImplementationUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive implementation is updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash is updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory is updated.\"}},\"kind\":\"user\",\"methods\":{\"addHyperdriveDeployer(address)\":{\"notice\":\"Allows governance to add a new hyperdrive deployer.\"},\"constructor\":{\"notice\":\"Initializes the factory.\"},\"deployAndInitialize(address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,bytes)\":{\"notice\":\"Deploys a Hyperdrive instance with the factory's configuration.\"},\"feeCollector()\":{\"notice\":\"The fee collector used when new instances are deployed.\"},\"fees()\":{\"notice\":\"The fee parameters used when new instances are deployed.\"},\"getDefaultPausers()\":{\"notice\":\"Gets the default pausers.\"},\"getHyperdriveDeployerAtIndex(uint256)\":{\"notice\":\"Gets the instance at the specified index.\"},\"getHyperdriveDeployersInRange(uint256,uint256)\":{\"notice\":\"Returns the hyperdrive deployers array according to specified indices.\"},\"getInstanceAtIndex(uint256)\":{\"notice\":\"Gets the instance at the specified index.\"},\"getInstancesInRange(uint256,uint256)\":{\"notice\":\"Returns the _instances array according to specified indices.\"},\"getNumberOfHyperdriveDeployers()\":{\"notice\":\"Gets the number of hyperdrive deployers deployed by this factory.\"},\"getNumberOfInstances()\":{\"notice\":\"Gets the number of instances deployed by this factory.\"},\"governance()\":{\"notice\":\"The governance address that updates the factory's configuration.\"},\"hyperdriveGovernance()\":{\"notice\":\"The governance address used when new instances are deployed.\"},\"isHyperdriveDeployer(address)\":{\"notice\":\"Mapping to check if an hyperdriveDeployer is in the _hyperdriveDeployers array.\"},\"isOfficial(address)\":{\"notice\":\"A mapping from deployed Hyperdrive instances to the version         of the deployer that deployed them.\"},\"linkerCodeHash()\":{\"notice\":\"The linker code hash used when new instances are deployed.\"},\"linkerFactory()\":{\"notice\":\"The linker factory used when new instances are deployed.\"},\"removeHyperdriveDeployer(address,uint256)\":{\"notice\":\"Allows governance to remove an existing hyperdrive deployer.\"},\"updateDefaultPausers(address[])\":{\"notice\":\"Allows governance to change the default pausers.\"},\"updateFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector address.\"},\"updateFees((uint256,uint256,uint256,uint256))\":{\"notice\":\"Allows governance to update the default fee schedule that will         be used in new deployments.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"updateHyperdriveGovernance(address)\":{\"notice\":\"Allows governance to change the hyperdrive governance address\"},\"updateLinkerCodeHash(bytes32)\":{\"notice\":\"Allows governance to change the linker code hash. This allows         governance to update the implementation of the ERC20Forwarder.\"},\"updateLinkerFactory(address)\":{\"notice\":\"Allows governance to change the linker factory.\"},\"versionCounter()\":{\"notice\":\"The number of times the factory's deployer has been updated.\"}},\"notice\":\"Deploys hyperdrive instances and initializes them. It also holds a         registry of all deployed hyperdrive instances.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveFactory.sol\":\"HyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0xdfceea9b8ce2535924a1f6947e9731bcdabbe68d3be47a26c9e23ac72662033f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://861ae6ddd950ae454c0d6e96abebaef8eb6405eecef976c34de2a9419d8c63d9\",\"dweb:/ipfs/QmTQ4rxJQv7iD7ta3o3P5WHfvzgd5F94x3xL3PE8Zd6J1v\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7fbded8a1645451ed6b1624202258d8856c5042cc95910a149f0ba9136848e8a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://69d28c1822cd417e0691b1c955f23e5e36d3dac2d7d0ba14e40db5d8f5df139d\",\"dweb:/ipfs/QmU71eY32cGzjxbpdAxGZApRiW1WieGA8W5oUzWPX8pJFW\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "struct HyperdriveFactory.FactoryConfig",
              "name": "_factoryConfig",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "governance",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "hyperdriveGovernance",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "defaultPausers",
                  "type": "address[]"
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
                },
                {
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "maxFees",
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
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ApprovalFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "EndIndexTooLarge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FeeTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerAlreadyAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerIndexMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerNotAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidDeployer"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidIndexes"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MaxFeeTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NonPayableInitialization"
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
              "name": "version",
              "type": "uint256",
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
              "internalType": "address",
              "name": "newDeployer",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "ImplementationUpdated",
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
              "internalType": "address",
              "name": "_hyperdriveDeployer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "addHyperdriveDeployer"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveDeployer",
              "type": "address"
            },
            {
              "internalType": "struct IHyperdrive.PoolDeployConfig",
              "name": "_deployConfig",
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
              ]
            },
            {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "_initializeExtraData",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "deployAndInitialize",
          "outputs": [
            {
              "internalType": "contract IHyperdrive",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "feeCollector",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "fees",
          "outputs": [
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
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getDefaultPausers",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getHyperdriveDeployerAtIndex",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "startIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endIndex",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getHyperdriveDeployersInRange",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "range",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getInstanceAtIndex",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "startIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endIndex",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getInstancesInRange",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "range",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getNumberOfHyperdriveDeployers",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getNumberOfInstances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "governance",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "hyperdriveGovernance",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isHyperdriveDeployer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isInstance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "instance",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOfficial",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerFactory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveDeployer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeHyperdriveDeployer"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_defaultPausers_",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateDefaultPausers"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeCollector",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateFeeCollector"
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Fees",
              "name": "_fees",
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
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateFees"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_governance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveGovernance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateHyperdriveGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_linkerCodeHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLinkerCodeHash"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_linkerFactory",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLinkerFactory"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "versionCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "addHyperdriveDeployer(address)": {
            "params": {
              "_hyperdriveDeployer": "The new hyperdrive deployer."
            }
          },
          "constructor": {
            "params": {
              "_factoryConfig": "Configuration of the Hyperdrive Factory."
            }
          },
          "deployAndInitialize(address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,bytes)": {
            "details": "This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.",
            "params": {
              "_apr": "The apr to call init with",
              "_contribution": "Base token to call init with",
              "_deployConfig": "The deploy configuration of the Hyperdrive pool.",
              "_extraData": "The extra data that contains data necessary for the specific deployer.",
              "_hyperdriveDeployer": "Address of the hyperdrive deployer.",
              "_initializeExtraData": "The extra data for the `initialize` call."
            },
            "returns": {
              "_0": "The hyperdrive address deployed."
            }
          },
          "getDefaultPausers()": {
            "returns": {
              "_0": "The default pausers."
            }
          },
          "getHyperdriveDeployerAtIndex(uint256)": {
            "params": {
              "index": "The index of the instance to get."
            },
            "returns": {
              "_0": "The instance at the specified index."
            }
          },
          "getHyperdriveDeployersInRange(uint256,uint256)": {
            "params": {
              "endIndex": "The ending index of the hyperdrive deployers to get.",
              "startIndex": "The starting index of the hyperdrive deployers to get."
            },
            "returns": {
              "range": "The resulting custom portion of the hyperdrive deployers array."
            }
          },
          "getInstanceAtIndex(uint256)": {
            "params": {
              "index": "The index of the instance to get."
            },
            "returns": {
              "_0": "The instance at the specified index."
            }
          },
          "getInstancesInRange(uint256,uint256)": {
            "params": {
              "endIndex": "The ending index of the instances to get.",
              "startIndex": "The starting index of the instances to get."
            },
            "returns": {
              "range": "The resulting custom portion of the _instances array."
            }
          },
          "getNumberOfHyperdriveDeployers()": {
            "returns": {
              "_0": "The number of hyperdrive deployers deployed by this factory."
            }
          },
          "getNumberOfInstances()": {
            "returns": {
              "_0": "The number of instances deployed by this factory."
            }
          },
          "removeHyperdriveDeployer(address,uint256)": {
            "params": {
              "_hyperdriveDeployer": "The hyperdrive deployer to remove.",
              "_index": "The index of the hyperdrive deployer to remove."
            }
          },
          "updateDefaultPausers(address[])": {
            "params": {
              "_defaultPausers_": "The new list of default pausers."
            }
          },
          "updateFeeCollector(address)": {
            "params": {
              "_feeCollector": "The new fee collector address."
            }
          },
          "updateFees((uint256,uint256,uint256,uint256))": {
            "params": {
              "_fees": "The new defaults for the fee parameters."
            }
          },
          "updateGovernance(address)": {
            "params": {
              "_governance": "The new governance address."
            }
          },
          "updateHyperdriveGovernance(address)": {
            "params": {
              "_hyperdriveGovernance": "The new hyperdrive governance address."
            }
          },
          "updateLinkerCodeHash(bytes32)": {
            "params": {
              "_linkerCodeHash": "The new linker code hash."
            }
          },
          "updateLinkerFactory(address)": {
            "params": {
              "_linkerFactory": "The new linker factory."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "addHyperdriveDeployer(address)": {
            "notice": "Allows governance to add a new hyperdrive deployer."
          },
          "constructor": {
            "notice": "Initializes the factory."
          },
          "deployAndInitialize(address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,bytes)": {
            "notice": "Deploys a Hyperdrive instance with the factory's configuration."
          },
          "feeCollector()": {
            "notice": "The fee collector used when new instances are deployed."
          },
          "fees()": {
            "notice": "The fee parameters used when new instances are deployed."
          },
          "getDefaultPausers()": {
            "notice": "Gets the default pausers."
          },
          "getHyperdriveDeployerAtIndex(uint256)": {
            "notice": "Gets the instance at the specified index."
          },
          "getHyperdriveDeployersInRange(uint256,uint256)": {
            "notice": "Returns the hyperdrive deployers array according to specified indices."
          },
          "getInstanceAtIndex(uint256)": {
            "notice": "Gets the instance at the specified index."
          },
          "getInstancesInRange(uint256,uint256)": {
            "notice": "Returns the _instances array according to specified indices."
          },
          "getNumberOfHyperdriveDeployers()": {
            "notice": "Gets the number of hyperdrive deployers deployed by this factory."
          },
          "getNumberOfInstances()": {
            "notice": "Gets the number of instances deployed by this factory."
          },
          "governance()": {
            "notice": "The governance address that updates the factory's configuration."
          },
          "hyperdriveGovernance()": {
            "notice": "The governance address used when new instances are deployed."
          },
          "isHyperdriveDeployer(address)": {
            "notice": "Mapping to check if an hyperdriveDeployer is in the _hyperdriveDeployers array."
          },
          "isOfficial(address)": {
            "notice": "A mapping from deployed Hyperdrive instances to the version         of the deployer that deployed them."
          },
          "linkerCodeHash()": {
            "notice": "The linker code hash used when new instances are deployed."
          },
          "linkerFactory()": {
            "notice": "The linker factory used when new instances are deployed."
          },
          "removeHyperdriveDeployer(address,uint256)": {
            "notice": "Allows governance to remove an existing hyperdrive deployer."
          },
          "updateDefaultPausers(address[])": {
            "notice": "Allows governance to change the default pausers."
          },
          "updateFeeCollector(address)": {
            "notice": "Allows governance to change the fee collector address."
          },
          "updateFees((uint256,uint256,uint256,uint256))": {
            "notice": "Allows governance to update the default fee schedule that will         be used in new deployments."
          },
          "updateGovernance(address)": {
            "notice": "Allows governance to transfer the governance role."
          },
          "updateHyperdriveGovernance(address)": {
            "notice": "Allows governance to change the hyperdrive governance address"
          },
          "updateLinkerCodeHash(bytes32)": {
            "notice": "Allows governance to change the linker code hash. This allows         governance to update the implementation of the ERC20Forwarder."
          },
          "updateLinkerFactory(address)": {
            "notice": "Allows governance to change the linker factory."
          },
          "versionCounter()": {
            "notice": "The number of times the factory's deployer has been updated."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/factory/HyperdriveFactory.sol": "HyperdriveFactory"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/factory/HyperdriveFactory.sol": {
        "keccak256": "0xdfceea9b8ce2535924a1f6947e9731bcdabbe68d3be47a26c9e23ac72662033f",
        "urls": [
          "bzz-raw://861ae6ddd950ae454c0d6e96abebaef8eb6405eecef976c34de2a9419d8c63d9",
          "dweb:/ipfs/QmTQ4rxJQv7iD7ta3o3P5WHfvzgd5F94x3xL3PE8Zd6J1v"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveDeployer.sol": {
        "keccak256": "0x7fbded8a1645451ed6b1624202258d8856c5042cc95910a149f0ba9136848e8a",
        "urls": [
          "bzz-raw://69d28c1822cd417e0691b1c955f23e5e36d3dac2d7d0ba14e40db5d8f5df139d",
          "dweb:/ipfs/QmU71eY32cGzjxbpdAxGZApRiW1WieGA8W5oUzWPX8pJFW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/factory/HyperdriveFactory.sol",
    "id": 2531,
    "exportedSymbols": {
      "FixedPointMath": [
        11134
      ],
      "HyperdriveFactory": [
        2530
      ],
      "IHyperdrive": [
        4675
      ],
      "IHyperdriveDeployer": [
        4848
      ],
      "ONE": [
        10389
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:17616:5",
    "nodes": [
      {
        "id": 1615,
        "nodeType": "PragmaDirective",
        "src": "39:23:5",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 1617,
        "nodeType": "ImportDirective",
        "src": "64:60:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2531,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1616,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "73:11:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1619,
        "nodeType": "ImportDirective",
        "src": "125:76:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveDeployer.sol",
        "file": "../interfaces/IHyperdriveDeployer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2531,
        "sourceUnit": 4849,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1618,
              "name": "IHyperdriveDeployer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4848,
              "src": "134:19:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1622,
        "nodeType": "ImportDirective",
        "src": "202:70:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2531,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1620,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "211:14:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 1621,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10389,
              "src": "227:3:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2530,
        "nodeType": "ContractDefinition",
        "src": "682:16972:5",
        "nodes": [
          {
            "id": 1626,
            "nodeType": "UsingForDirective",
            "src": "715:33:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 1624,
              "name": "FixedPointMath",
              "nameLocations": [
                "721:14:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "721:14:5"
            },
            "typeName": {
              "id": 1625,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "740:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 1631,
            "nodeType": "EventDefinition",
            "src": "810:52:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1627,
              "nodeType": "StructuredDocumentation",
              "src": "754:51:5",
              "text": "@notice Emitted when governance is transferred."
            },
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "816:17:5",
            "parameters": {
              "id": 1630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1629,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "850:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1631,
                  "src": "834:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "833:28:5"
            }
          },
          {
            "id": 1636,
            "nodeType": "EventDefinition",
            "src": "939:57:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1632,
              "nodeType": "StructuredDocumentation",
              "src": "868:66:5",
              "text": "@notice Emitted when the Hyperdrive implementation is updated."
            },
            "eventSelector": "310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03",
            "name": "ImplementationUpdated",
            "nameLocation": "945:21:5",
            "parameters": {
              "id": 1635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1634,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "983:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1636,
                  "src": "967:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1633,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "966:29:5"
            }
          },
          {
            "id": 1641,
            "nodeType": "EventDefinition",
            "src": "1077:72:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1637,
              "nodeType": "StructuredDocumentation",
              "src": "1002:70:5",
              "text": "@notice Emitted when the Hyperdrive governance address is updated."
            },
            "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
            "name": "HyperdriveGovernanceUpdated",
            "nameLocation": "1083:27:5",
            "parameters": {
              "id": 1640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1639,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdriveGovernance",
                  "nameLocation": "1127:20:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1641,
                  "src": "1111:36:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1638,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1111:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1110:38:5"
            }
          },
          {
            "id": 1646,
            "nodeType": "EventDefinition",
            "src": "1214:59:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1642,
              "nodeType": "StructuredDocumentation",
              "src": "1155:54:5",
              "text": "@notice Emitted when the fee collector is updated."
            },
            "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
            "name": "FeeCollectorUpdated",
            "nameLocation": "1220:19:5",
            "parameters": {
              "id": 1645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1644,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newFeeCollector",
                  "nameLocation": "1256:15:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1646,
                  "src": "1240:31:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1240:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1239:33:5"
            }
          },
          {
            "id": 1651,
            "nodeType": "EventDefinition",
            "src": "1339:61:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1647,
              "nodeType": "StructuredDocumentation",
              "src": "1279:55:5",
              "text": "@notice Emitted when the linker factory is updated."
            },
            "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
            "name": "LinkerFactoryUpdated",
            "nameLocation": "1345:20:5",
            "parameters": {
              "id": 1650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1649,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerFactory",
                  "nameLocation": "1382:16:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1651,
                  "src": "1366:32:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1365:34:5"
            }
          },
          {
            "id": 1656,
            "nodeType": "EventDefinition",
            "src": "1468:63:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1652,
              "nodeType": "StructuredDocumentation",
              "src": "1406:57:5",
              "text": "@notice Emitted when the linker code hash is updated."
            },
            "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
            "name": "LinkerCodeHashUpdated",
            "nameLocation": "1474:21:5",
            "parameters": {
              "id": 1655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1654,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerCodeHash",
                  "nameLocation": "1512:17:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1656,
                  "src": "1496:33:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1496:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1495:35:5"
            }
          },
          {
            "id": 1668,
            "nodeType": "EventDefinition",
            "src": "1612:152:5",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 1657,
              "nodeType": "StructuredDocumentation",
              "src": "1537:70:5",
              "text": "@notice The event that is emitted when new instances are deployed."
            },
            "eventSelector": "9409438224258854b5587daf29ca81c2676ed86cd439240ca7aaa0c6e17cfa76",
            "name": "Deployed",
            "nameLocation": "1618:8:5",
            "parameters": {
              "id": 1667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1659,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "1652:7:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "1636:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1636:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1661,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "1677:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "1669:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1660,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1669:7:5",
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
                  "id": 1664,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "config",
                  "nameLocation": "1726:6:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "1697:35:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 1663,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1662,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "1697:11:5",
                        "1709:16:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4420,
                      "src": "1697:28:5"
                    },
                    "referencedDeclaration": 4420,
                    "src": "1697:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1666,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "extraData",
                  "nameLocation": "1748:9:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "1742:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1665,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1742:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1626:137:5"
            }
          },
          {
            "id": 1671,
            "nodeType": "VariableDeclaration",
            "src": "1851:25:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1669,
              "nodeType": "StructuredDocumentation",
              "src": "1770:76:5",
              "text": "@notice The governance address that updates the factory's configuration."
            },
            "functionSelector": "5aa6e675",
            "mutability": "mutable",
            "name": "governance",
            "nameLocation": "1866:10:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1670,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1851:7:5",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1675,
            "nodeType": "VariableDeclaration",
            "src": "1960:33:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1672,
              "nodeType": "StructuredDocumentation",
              "src": "1883:72:5",
              "text": "@notice The number of times the factory's deployer has been updated."
            },
            "functionSelector": "dd6d30c1",
            "mutability": "mutable",
            "name": "versionCounter",
            "nameLocation": "1975:14:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1673,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1960:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 1674,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1992:1:5",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "id": 1680,
            "nodeType": "VariableDeclaration",
            "src": "2128:62:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1676,
              "nodeType": "StructuredDocumentation",
              "src": "2000:123:5",
              "text": "@notice A mapping from deployed Hyperdrive instances to the version\n         of the deployer that deployed them."
            },
            "functionSelector": "77b81aac",
            "mutability": "mutable",
            "name": "isOfficial",
            "nameLocation": "2180:10:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 1679,
              "keyName": "instance",
              "keyNameLocation": "2144:8:5",
              "keyType": {
                "id": 1677,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2136:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2128:44:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "version",
              "valueNameLocation": "2164:7:5",
              "valueType": {
                "id": 1678,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2156:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 1683,
            "nodeType": "VariableDeclaration",
            "src": "2274:35:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1681,
              "nodeType": "StructuredDocumentation",
              "src": "2197:72:5",
              "text": "@notice The governance address used when new instances are deployed."
            },
            "functionSelector": "e3331555",
            "mutability": "mutable",
            "name": "hyperdriveGovernance",
            "nameLocation": "2289:20:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1682,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2274:7:5",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1686,
            "nodeType": "VariableDeclaration",
            "src": "2389:28:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1684,
              "nodeType": "StructuredDocumentation",
              "src": "2316:68:5",
              "text": "@notice The linker factory used when new instances are deployed."
            },
            "functionSelector": "99623bb1",
            "mutability": "mutable",
            "name": "linkerFactory",
            "nameLocation": "2404:13:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1685,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2389:7:5",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1689,
            "nodeType": "VariableDeclaration",
            "src": "2499:29:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1687,
              "nodeType": "StructuredDocumentation",
              "src": "2424:70:5",
              "text": "@notice The linker code hash used when new instances are deployed."
            },
            "functionSelector": "c905a4b5",
            "mutability": "mutable",
            "name": "linkerCodeHash",
            "nameLocation": "2514:14:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 1688,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2499:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1693,
            "nodeType": "VariableDeclaration",
            "src": "2608:28:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1690,
              "nodeType": "StructuredDocumentation",
              "src": "2535:68:5",
              "text": "@notice The fee parameters used when new instances are deployed."
            },
            "functionSelector": "9af1d35a",
            "mutability": "mutable",
            "name": "fees",
            "nameLocation": "2632:4:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Fees_$4384_storage",
              "typeString": "struct IHyperdrive.Fees"
            },
            "typeName": {
              "id": 1692,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 1691,
                "name": "IHyperdrive.Fees",
                "nameLocations": [
                  "2608:11:5",
                  "2620:4:5"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4384,
                "src": "2608:16:5"
              },
              "referencedDeclaration": 4384,
              "src": "2608:16:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                "typeString": "struct IHyperdrive.Fees"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1696,
            "nodeType": "VariableDeclaration",
            "src": "2715:27:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1694,
              "nodeType": "StructuredDocumentation",
              "src": "2643:67:5",
              "text": "@notice The fee collector used when new instances are deployed."
            },
            "functionSelector": "c415b95c",
            "mutability": "mutable",
            "name": "feeCollector",
            "nameLocation": "2730:12:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1695,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2715:7:5",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1699,
            "nodeType": "VariableDeclaration",
            "src": "2823:38:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1697,
              "nodeType": "StructuredDocumentation",
              "src": "2749:69:5",
              "text": "@dev The maximum curve fee that can be used as a factory default."
            },
            "mutability": "immutable",
            "name": "maxCurveFee",
            "nameLocation": "2850:11:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1698,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2823:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1702,
            "nodeType": "VariableDeclaration",
            "src": "2941:37:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1700,
              "nodeType": "StructuredDocumentation",
              "src": "2868:68:5",
              "text": "@dev The maximum flat fee that can be used as a factory default."
            },
            "mutability": "immutable",
            "name": "maxFlatFee",
            "nameLocation": "2968:10:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1701,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2941:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1705,
            "nodeType": "VariableDeclaration",
            "src": "3067:45:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1703,
              "nodeType": "StructuredDocumentation",
              "src": "2985:77:5",
              "text": "@dev The maximum governance LP fee that can be used as a factory default."
            },
            "mutability": "immutable",
            "name": "maxGovernanceLPFee",
            "nameLocation": "3094:18:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1704,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3067:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1708,
            "nodeType": "VariableDeclaration",
            "src": "3205:49:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1706,
              "nodeType": "StructuredDocumentation",
              "src": "3119:81:5",
              "text": "@dev The maximum governance zombie fee that can be used as a factory default."
            },
            "mutability": "immutable",
            "name": "maxGovernanceZombieFee",
            "nameLocation": "3232:22:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1707,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3205:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1712,
            "nodeType": "VariableDeclaration",
            "src": "3331:34:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1709,
              "nodeType": "StructuredDocumentation",
              "src": "3261:65:5",
              "text": "@dev The defaultPausers used when new instances are deployed."
            },
            "mutability": "mutable",
            "name": "_defaultPausers",
            "nameLocation": "3350:15:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 1710,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3331:7:5",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 1711,
              "nodeType": "ArrayTypeName",
              "src": "3331:9:5",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1740,
            "nodeType": "StructDefinition",
            "src": "3372:832:5",
            "nodes": [],
            "canonicalName": "HyperdriveFactory.FactoryConfig",
            "members": [
              {
                "constant": false,
                "id": 1715,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "3468:10:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3460:18:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1714,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3460:7:5",
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
                "id": 1718,
                "mutability": "mutable",
                "name": "hyperdriveGovernance",
                "nameLocation": "3569:20:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3561:28:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1717,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3561:7:5",
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
                "id": 1722,
                "mutability": "mutable",
                "name": "defaultPausers",
                "nameLocation": "3691:14:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3681:24:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 1720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3681:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1721,
                  "nodeType": "ArrayTypeName",
                  "src": "3681:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1725,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "3795:12:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3787:20:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1724,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3787:7:5",
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
                "id": 1729,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "3894:4:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3877:21:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 1728,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 1727,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3877:11:5",
                      "3889:4:5"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4384,
                    "src": "3877:16:5"
                  },
                  "referencedDeclaration": 4384,
                  "src": "3877:16:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1733,
                "mutability": "mutable",
                "name": "maxFees",
                "nameLocation": "4006:7:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "3989:24:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 1732,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 1731,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3989:11:5",
                      "4001:4:5"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4384,
                    "src": "3989:16:5"
                  },
                  "referencedDeclaration": 4384,
                  "src": "3989:16:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1736,
                "mutability": "mutable",
                "name": "linkerFactory",
                "nameLocation": "4083:13:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "4075:21:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1735,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4075:7:5",
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
                "id": 1739,
                "mutability": "mutable",
                "name": "linkerCodeHash",
                "nameLocation": "4183:14:5",
                "nodeType": "VariableDeclaration",
                "scope": 1740,
                "src": "4175:22:5",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 1738,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "4175:7:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FactoryConfig",
            "nameLocation": "3379:13:5",
            "scope": 2530,
            "visibility": "public"
          },
          {
            "id": 1744,
            "nodeType": "VariableDeclaration",
            "src": "4281:39:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1741,
              "nodeType": "StructuredDocumentation",
              "src": "4210:66:5",
              "text": "@dev List of all hyperdrive deployers onboarded by governance."
            },
            "mutability": "mutable",
            "name": "_hyperdriveDeployers",
            "nameLocation": "4300:20:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 1742,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4281:7:5",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 1743,
              "nodeType": "ArrayTypeName",
              "src": "4281:9:5",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1749,
            "nodeType": "VariableDeclaration",
            "src": "4423:52:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1745,
              "nodeType": "StructuredDocumentation",
              "src": "4327:91:5",
              "text": "@notice Mapping to check if an hyperdriveDeployer is in the _hyperdriveDeployers array."
            },
            "functionSelector": "80a6b864",
            "mutability": "mutable",
            "name": "isHyperdriveDeployer",
            "nameLocation": "4455:20:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 1748,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 1746,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4431:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4423:24:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 1747,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "4442:4:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 1753,
            "nodeType": "VariableDeclaration",
            "src": "4631:29:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1750,
              "nodeType": "StructuredDocumentation",
              "src": "4482:144:5",
              "text": "@dev Array of all instances deployed by this factory.\n @dev Can be manually updated by governance to add previous instances deployed."
            },
            "mutability": "mutable",
            "name": "_instances",
            "nameLocation": "4650:10:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 1751,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4631:7:5",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 1752,
              "nodeType": "ArrayTypeName",
              "src": "4631:9:5",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 1758,
            "nodeType": "VariableDeclaration",
            "src": "4740:42:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1754,
              "nodeType": "StructuredDocumentation",
              "src": "4667:68:5",
              "text": "@dev Mapping to check if an instance is in the _instances array."
            },
            "functionSelector": "6b44e6be",
            "mutability": "mutable",
            "name": "isInstance",
            "nameLocation": "4772:10:5",
            "scope": 2530,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 1757,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 1755,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4748:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4740:24:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 1756,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "4759:4:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 1877,
            "nodeType": "FunctionDefinition",
            "src": "4901:1449:5",
            "nodes": [],
            "body": {
              "id": 1876,
              "nodeType": "Block",
              "src": "4950:1400:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1769,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1765,
                      "name": "maxCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1699,
                      "src": "5135:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 1766,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "5149:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 1767,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5164:7:5",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1733,
                        "src": "5149:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 1768,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5172:5:5",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4374,
                      "src": "5149:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5135:42:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1770,
                  "nodeType": "ExpressionStatement",
                  "src": "5135:42:5"
                },
                {
                  "expression": {
                    "id": 1775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1771,
                      "name": "maxFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1702,
                      "src": "5187:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 1772,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "5200:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 1773,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5215:7:5",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1733,
                        "src": "5200:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 1774,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5223:4:5",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4377,
                      "src": "5200:27:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5187:40:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1776,
                  "nodeType": "ExpressionStatement",
                  "src": "5187:40:5"
                },
                {
                  "expression": {
                    "id": 1781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1777,
                      "name": "maxGovernanceLPFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1705,
                      "src": "5237:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 1778,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "5258:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 1779,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5273:7:5",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1733,
                        "src": "5258:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 1780,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5281:12:5",
                      "memberName": "governanceLP",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4380,
                      "src": "5258:35:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5237:56:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1782,
                  "nodeType": "ExpressionStatement",
                  "src": "5237:56:5"
                },
                {
                  "expression": {
                    "id": 1787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1783,
                      "name": "maxGovernanceZombieFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1708,
                      "src": "5303:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 1784,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1762,
                          "src": "5328:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 1785,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5343:7:5",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1733,
                        "src": "5328:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 1786,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5351:16:5",
                      "memberName": "governanceZombie",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4383,
                      "src": "5328:39:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5303:64:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1788,
                  "nodeType": "ExpressionStatement",
                  "src": "5303:64:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 1799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1791,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1789,
                            "name": "maxCurveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1699,
                            "src": "5394:11:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 1790,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "5408:3:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5394:17:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1794,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1792,
                            "name": "maxFlatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1702,
                            "src": "5427:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 1793,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "5440:3:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5427:16:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5394:49:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1798,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1796,
                          "name": "maxGovernanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1705,
                          "src": "5459:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 1797,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10389,
                          "src": "5480:3:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5459:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5394:89:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1800,
                        "name": "maxGovernanceZombieFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1708,
                        "src": "5499:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 1801,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10389,
                        "src": "5524:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5499:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5394:133:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1810,
                  "nodeType": "IfStatement",
                  "src": "5377:220:5",
                  "trueBody": {
                    "id": 1809,
                    "nodeType": "Block",
                    "src": "5538:59:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 1804,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "5559:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 1806,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5571:13:5",
                            "memberName": "MaxFeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4602,
                            "src": "5559:25:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 1807,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5559:27:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1808,
                        "nodeType": "RevertStatement",
                        "src": "5552:34:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 1827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1815,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 1811,
                                "name": "_factoryConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1762,
                                "src": "5623:14:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                                  "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                                }
                              },
                              "id": 1812,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5638:4:5",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1729,
                              "src": "5623:19:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 1813,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5643:5:5",
                            "memberName": "curve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4374,
                            "src": "5623:25:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 1814,
                            "name": "maxCurveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1699,
                            "src": "5651:11:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5623:39:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1820,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 1816,
                                "name": "_factoryConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1762,
                                "src": "5678:14:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                                  "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                                }
                              },
                              "id": 1817,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5693:4:5",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1729,
                              "src": "5678:19:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 1818,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5698:4:5",
                            "memberName": "flat",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4377,
                            "src": "5678:24:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 1819,
                            "name": "maxFlatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1702,
                            "src": "5705:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5678:37:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5623:92:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 1822,
                              "name": "_factoryConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1762,
                              "src": "5731:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                                "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                              }
                            },
                            "id": 1823,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5746:4:5",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1729,
                            "src": "5731:19:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 1824,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5751:12:5",
                          "memberName": "governanceLP",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4380,
                          "src": "5731:32:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 1825,
                          "name": "maxGovernanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1705,
                          "src": "5766:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5731:53:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5623:161:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1832,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 1828,
                            "name": "_factoryConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1762,
                            "src": "5800:14:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                              "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                            }
                          },
                          "id": 1829,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5815:4:5",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1729,
                          "src": "5800:19:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 1830,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5820:16:5",
                        "memberName": "governanceZombie",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4383,
                        "src": "5800:36:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 1831,
                        "name": "maxGovernanceZombieFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1708,
                        "src": "5839:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5800:61:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5623:238:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1840,
                  "nodeType": "IfStatement",
                  "src": "5606:322:5",
                  "trueBody": {
                    "id": 1839,
                    "nodeType": "Block",
                    "src": "5872:56:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 1834,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "5893:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 1836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5905:10:5",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4604,
                            "src": "5893:22:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 1837,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5893:24:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1838,
                        "nodeType": "RevertStatement",
                        "src": "5886:31:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 1844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1841,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1693,
                      "src": "5937:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1842,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "5944:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1843,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5959:4:5",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1729,
                      "src": "5944:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "src": "5937:26:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$4384_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 1845,
                  "nodeType": "ExpressionStatement",
                  "src": "5937:26:5"
                },
                {
                  "expression": {
                    "id": 1849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1846,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1671,
                      "src": "6018:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1847,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6031:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1848,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6046:10:5",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1715,
                      "src": "6031:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6018:38:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1850,
                  "nodeType": "ExpressionStatement",
                  "src": "6018:38:5"
                },
                {
                  "expression": {
                    "id": 1854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1851,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1683,
                      "src": "6066:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1852,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6089:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1853,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6104:20:5",
                      "memberName": "hyperdriveGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1718,
                      "src": "6089:35:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6066:58:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1855,
                  "nodeType": "ExpressionStatement",
                  "src": "6066:58:5"
                },
                {
                  "expression": {
                    "id": 1859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1856,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1696,
                      "src": "6134:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1857,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6149:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1858,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6164:12:5",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1725,
                      "src": "6149:27:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6134:42:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1860,
                  "nodeType": "ExpressionStatement",
                  "src": "6134:42:5"
                },
                {
                  "expression": {
                    "id": 1864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1861,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1712,
                      "src": "6186:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1862,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6204:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1863,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6219:14:5",
                      "memberName": "defaultPausers",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1722,
                      "src": "6204:29:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "6186:47:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 1865,
                  "nodeType": "ExpressionStatement",
                  "src": "6186:47:5"
                },
                {
                  "expression": {
                    "id": 1869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1866,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1686,
                      "src": "6243:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1867,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6259:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1868,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6274:13:5",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1736,
                      "src": "6259:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6243:44:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1870,
                  "nodeType": "ExpressionStatement",
                  "src": "6243:44:5"
                },
                {
                  "expression": {
                    "id": 1874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1871,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1689,
                      "src": "6297:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 1872,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1762,
                        "src": "6314:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 1873,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6329:14:5",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1739,
                      "src": "6314:29:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6297:46:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 1875,
                  "nodeType": "ExpressionStatement",
                  "src": "6297:46:5"
                }
              ]
            },
            "documentation": {
              "id": 1759,
              "nodeType": "StructuredDocumentation",
              "src": "4789:107:5",
              "text": "@notice Initializes the factory.\n @param _factoryConfig Configuration of the Hyperdrive Factory."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1762,
                  "mutability": "mutable",
                  "name": "_factoryConfig",
                  "nameLocation": "4934:14:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1877,
                  "src": "4913:35:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FactoryConfig_$1740_memory_ptr",
                    "typeString": "struct HyperdriveFactory.FactoryConfig"
                  },
                  "typeName": {
                    "id": 1761,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1760,
                      "name": "FactoryConfig",
                      "nameLocations": [
                        "4913:13:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1740,
                      "src": "4913:13:5"
                    },
                    "referencedDeclaration": 1740,
                    "src": "4913:13:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FactoryConfig_$1740_storage_ptr",
                      "typeString": "struct HyperdriveFactory.FactoryConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4912:37:5"
            },
            "returnParameters": {
              "id": 1764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4950:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 1892,
            "nodeType": "ModifierDefinition",
            "src": "6419:117:5",
            "nodes": [],
            "body": {
              "id": 1891,
              "nodeType": "Block",
              "src": "6445:91:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 1883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 1880,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6459:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6463:6:5",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "6459:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 1882,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1671,
                      "src": "6473:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6459:24:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1889,
                  "nodeType": "IfStatement",
                  "src": "6455:63:5",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 1884,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4675,
                          "src": "6492:11:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 1886,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6504:12:5",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4596,
                        "src": "6492:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 1887,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6492:26:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1888,
                    "nodeType": "RevertStatement",
                    "src": "6485:33:5"
                  }
                },
                {
                  "id": 1890,
                  "nodeType": "PlaceholderStatement",
                  "src": "6528:1:5"
                }
              ]
            },
            "documentation": {
              "id": 1878,
              "nodeType": "StructuredDocumentation",
              "src": "6356:58:5",
              "text": "@dev Ensure that the sender is the governance address."
            },
            "name": "onlyGovernance",
            "nameLocation": "6428:14:5",
            "parameters": {
              "id": 1879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6442:2:5"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1909,
            "nodeType": "FunctionDefinition",
            "src": "6664:157:5",
            "nodes": [],
            "body": {
              "id": 1908,
              "nodeType": "Block",
              "src": "6735:86:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1900,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1671,
                      "src": "6745:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1901,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1895,
                      "src": "6758:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6745:24:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1903,
                  "nodeType": "ExpressionStatement",
                  "src": "6745:24:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1905,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1895,
                        "src": "6802:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1904,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1631,
                      "src": "6784:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6784:30:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1907,
                  "nodeType": "EmitStatement",
                  "src": "6779:35:5"
                }
              ]
            },
            "documentation": {
              "id": 1893,
              "nodeType": "StructuredDocumentation",
              "src": "6542:117:5",
              "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
            },
            "functionSelector": "b2561263",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1898,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1897,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "6720:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "6720:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "6720:14:5"
              }
            ],
            "name": "updateGovernance",
            "nameLocation": "6673:16:5",
            "parameters": {
              "id": 1896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1895,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "6698:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1909,
                  "src": "6690:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1894,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6690:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6689:21:5"
            },
            "returnParameters": {
              "id": 1899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6735:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1926,
            "nodeType": "FunctionDefinition",
            "src": "6981:231:5",
            "nodes": [],
            "body": {
              "id": 1925,
              "nodeType": "Block",
              "src": "7086:126:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1919,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1917,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1683,
                      "src": "7096:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1918,
                      "name": "_hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1912,
                      "src": "7119:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7096:44:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1920,
                  "nodeType": "ExpressionStatement",
                  "src": "7096:44:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1922,
                        "name": "_hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1912,
                        "src": "7183:21:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1921,
                      "name": "HyperdriveGovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1641,
                      "src": "7155:27:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7155:50:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1924,
                  "nodeType": "EmitStatement",
                  "src": "7150:55:5"
                }
              ]
            },
            "documentation": {
              "id": 1910,
              "nodeType": "StructuredDocumentation",
              "src": "6827:149:5",
              "text": "@notice Allows governance to change the hyperdrive governance address\n @param _hyperdriveGovernance The new hyperdrive governance address."
            },
            "functionSelector": "dd2b8fbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1915,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1914,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7071:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "7071:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "7071:14:5"
              }
            ],
            "name": "updateHyperdriveGovernance",
            "nameLocation": "6990:26:5",
            "parameters": {
              "id": 1913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1912,
                  "mutability": "mutable",
                  "name": "_hyperdriveGovernance",
                  "nameLocation": "7034:21:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1926,
                  "src": "7026:29:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1911,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7026:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7016:45:5"
            },
            "returnParameters": {
              "id": 1916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7086:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1952,
            "nodeType": "FunctionDefinition",
            "src": "7336:236:5",
            "nodes": [],
            "body": {
              "id": 1951,
              "nodeType": "Block",
              "src": "7427:145:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1940,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1935,
                          "name": "_linkerFactory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1929,
                          "src": "7445:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 1938,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7471:1:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1937,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7463:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 1936,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7463:7:5",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1939,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7463:10:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "7445:28:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1934,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7437:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7437:37:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1942,
                  "nodeType": "ExpressionStatement",
                  "src": "7437:37:5"
                },
                {
                  "expression": {
                    "id": 1945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1943,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1686,
                      "src": "7484:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1944,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1929,
                      "src": "7500:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7484:30:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1946,
                  "nodeType": "ExpressionStatement",
                  "src": "7484:30:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1948,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1929,
                        "src": "7550:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1947,
                      "name": "LinkerFactoryUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1651,
                      "src": "7529:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7529:36:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1950,
                  "nodeType": "EmitStatement",
                  "src": "7524:41:5"
                }
              ]
            },
            "documentation": {
              "id": 1927,
              "nodeType": "StructuredDocumentation",
              "src": "7218:113:5",
              "text": "@notice Allows governance to change the linker factory.\n @param _linkerFactory The new linker factory."
            },
            "functionSelector": "85229785",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1932,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1931,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7412:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "7412:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "7412:14:5"
              }
            ],
            "name": "updateLinkerFactory",
            "nameLocation": "7345:19:5",
            "parameters": {
              "id": 1930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1929,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "7382:14:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1952,
                  "src": "7374:22:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1928,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7374:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7364:38:5"
            },
            "returnParameters": {
              "id": 1933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7427:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1969,
            "nodeType": "FunctionDefinition",
            "src": "7792:195:5",
            "nodes": [],
            "body": {
              "id": 1968,
              "nodeType": "Block",
              "src": "7885:102:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1960,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1689,
                      "src": "7895:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1961,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1955,
                      "src": "7912:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7895:32:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 1963,
                  "nodeType": "ExpressionStatement",
                  "src": "7895:32:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1965,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1955,
                        "src": "7964:15:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 1964,
                      "name": "LinkerCodeHashUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1656,
                      "src": "7942:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 1966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7942:38:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1967,
                  "nodeType": "EmitStatement",
                  "src": "7937:43:5"
                }
              ]
            },
            "documentation": {
              "id": 1953,
              "nodeType": "StructuredDocumentation",
              "src": "7578:209:5",
              "text": "@notice Allows governance to change the linker code hash. This allows\n         governance to update the implementation of the ERC20Forwarder.\n @param _linkerCodeHash The new linker code hash."
            },
            "functionSelector": "4fbfee77",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1958,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1957,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7870:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "7870:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "7870:14:5"
              }
            ],
            "name": "updateLinkerCodeHash",
            "nameLocation": "7801:20:5",
            "parameters": {
              "id": 1956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1955,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "7839:15:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1969,
                  "src": "7831:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1954,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7831:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7821:39:5"
            },
            "returnParameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7885:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1986,
            "nodeType": "FunctionDefinition",
            "src": "8124:169:5",
            "nodes": [],
            "body": {
              "id": 1985,
              "nodeType": "Block",
              "src": "8199:94:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1977,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1696,
                      "src": "8209:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1978,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1972,
                      "src": "8224:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8209:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1980,
                  "nodeType": "ExpressionStatement",
                  "src": "8209:28:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1982,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1972,
                        "src": "8272:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1981,
                      "name": "FeeCollectorUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1646,
                      "src": "8252:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8252:34:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1984,
                  "nodeType": "EmitStatement",
                  "src": "8247:39:5"
                }
              ]
            },
            "documentation": {
              "id": 1970,
              "nodeType": "StructuredDocumentation",
              "src": "7993:126:5",
              "text": "@notice Allows governance to change the fee collector address.\n @param _feeCollector The new fee collector address."
            },
            "functionSelector": "d2c35ce8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1975,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1974,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8184:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "8184:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "8184:14:5"
              }
            ],
            "name": "updateFeeCollector",
            "nameLocation": "8133:18:5",
            "parameters": {
              "id": 1973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1972,
                  "mutability": "mutable",
                  "name": "_feeCollector",
                  "nameLocation": "8160:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 1986,
                  "src": "8152:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1971,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8152:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8151:23:5"
            },
            "returnParameters": {
              "id": 1976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8199:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2026,
            "nodeType": "FunctionDefinition",
            "src": "8484:395:5",
            "nodes": [],
            "body": {
              "id": 2025,
              "nodeType": "Block",
              "src": "8575:304:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 2013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 2008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 2003,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1995,
                              "name": "_fees",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1990,
                              "src": "8602:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                                "typeString": "struct IHyperdrive.Fees calldata"
                              }
                            },
                            "id": 1996,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8608:5:5",
                            "memberName": "curve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4374,
                            "src": "8602:11:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 1997,
                            "name": "maxCurveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1699,
                            "src": "8616:11:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8602:25:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1999,
                              "name": "_fees",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1990,
                              "src": "8643:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                                "typeString": "struct IHyperdrive.Fees calldata"
                              }
                            },
                            "id": 2000,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8649:4:5",
                            "memberName": "flat",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4377,
                            "src": "8643:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 2001,
                            "name": "maxFlatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1702,
                            "src": "8656:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8643:23:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8602:64:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 2004,
                            "name": "_fees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1990,
                            "src": "8682:5:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                              "typeString": "struct IHyperdrive.Fees calldata"
                            }
                          },
                          "id": 2005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8688:12:5",
                          "memberName": "governanceLP",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4380,
                          "src": "8682:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 2006,
                          "name": "maxGovernanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1705,
                          "src": "8703:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8682:39:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "8602:119:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 2012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 2009,
                          "name": "_fees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1990,
                          "src": "8737:5:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                            "typeString": "struct IHyperdrive.Fees calldata"
                          }
                        },
                        "id": 2010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8743:16:5",
                        "memberName": "governanceZombie",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4383,
                        "src": "8737:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 2011,
                        "name": "maxGovernanceZombieFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1708,
                        "src": "8762:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8737:47:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8602:182:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2020,
                  "nodeType": "IfStatement",
                  "src": "8585:266:5",
                  "trueBody": {
                    "id": 2019,
                    "nodeType": "Block",
                    "src": "8795:56:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2014,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "8816:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8828:10:5",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4604,
                            "src": "8816:22:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8816:24:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2018,
                        "nodeType": "RevertStatement",
                        "src": "8809:31:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2021,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1693,
                      "src": "8860:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2022,
                      "name": "_fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1990,
                      "src": "8867:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                        "typeString": "struct IHyperdrive.Fees calldata"
                      }
                    },
                    "src": "8860:12:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$4384_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 2024,
                  "nodeType": "ExpressionStatement",
                  "src": "8860:12:5"
                }
              ]
            },
            "documentation": {
              "id": 1987,
              "nodeType": "StructuredDocumentation",
              "src": "8299:180:5",
              "text": "@notice Allows governance to update the default fee schedule that will\n         be used in new deployments.\n @param _fees The new defaults for the fee parameters."
            },
            "functionSelector": "98a9c92b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1993,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1992,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8560:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "8560:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "8560:14:5"
              }
            ],
            "name": "updateFees",
            "nameLocation": "8493:10:5",
            "parameters": {
              "id": 1991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1990,
                  "mutability": "mutable",
                  "name": "_fees",
                  "nameLocation": "8539:5:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2026,
                  "src": "8513:31:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$4384_calldata_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  },
                  "typeName": {
                    "id": 1989,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1988,
                      "name": "IHyperdrive.Fees",
                      "nameLocations": [
                        "8513:11:5",
                        "8525:4:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4384,
                      "src": "8513:16:5"
                    },
                    "referencedDeclaration": 4384,
                    "src": "8513:16:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                      "typeString": "struct IHyperdrive.Fees"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8503:47:5"
            },
            "returnParameters": {
              "id": 1994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8575:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2040,
            "nodeType": "FunctionDefinition",
            "src": "9015:203:5",
            "nodes": [],
            "body": {
              "id": 2039,
              "nodeType": "Block",
              "src": "9120:98:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2035,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1712,
                      "src": "9177:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2036,
                      "name": "_defaultPausers_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2030,
                      "src": "9195:16:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                        "typeString": "address[] calldata"
                      }
                    },
                    "src": "9177:34:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 2038,
                  "nodeType": "ExpressionStatement",
                  "src": "9177:34:5"
                }
              ]
            },
            "documentation": {
              "id": 2027,
              "nodeType": "StructuredDocumentation",
              "src": "8885:125:5",
              "text": "@notice Allows governance to change the default pausers.\n @param _defaultPausers_ The new list of default pausers."
            },
            "functionSelector": "9af25262",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2033,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2032,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "9105:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "9105:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "9105:14:5"
              }
            ],
            "name": "updateDefaultPausers",
            "nameLocation": "9024:20:5",
            "parameters": {
              "id": 2031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2030,
                  "mutability": "mutable",
                  "name": "_defaultPausers_",
                  "nameLocation": "9073:16:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2040,
                  "src": "9054:35:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2028,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9054:7:5",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2029,
                    "nodeType": "ArrayTypeName",
                    "src": "9054:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9044:51:5"
            },
            "returnParameters": {
              "id": 2034,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9120:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2071,
            "nodeType": "FunctionDefinition",
            "src": "9356:351:5",
            "nodes": [],
            "body": {
              "id": 2070,
              "nodeType": "Block",
              "src": "9454:253:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "baseExpression": {
                      "id": 2048,
                      "name": "isHyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1749,
                      "src": "9468:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 2050,
                    "indexExpression": {
                      "id": 2049,
                      "name": "_hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2043,
                      "src": "9489:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9468:41:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2057,
                  "nodeType": "IfStatement",
                  "src": "9464:123:5",
                  "trueBody": {
                    "id": 2056,
                    "nodeType": "Block",
                    "src": "9511:76:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2051,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "9532:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2053,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9544:30:5",
                            "memberName": "HyperdriveDeployerAlreadyAdded",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4608,
                            "src": "9532:42:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9532:44:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2055,
                        "nodeType": "RevertStatement",
                        "src": "9525:51:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2058,
                        "name": "isHyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1749,
                        "src": "9596:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2060,
                      "indexExpression": {
                        "id": 2059,
                        "name": "_hyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2043,
                        "src": "9617:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9596:41:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 2061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9640:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "9596:48:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2063,
                  "nodeType": "ExpressionStatement",
                  "src": "9596:48:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2067,
                        "name": "_hyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2043,
                        "src": "9680:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 2064,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "9654:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9675:4:5",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "9654:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 2068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9654:46:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2069,
                  "nodeType": "ExpressionStatement",
                  "src": "9654:46:5"
                }
              ]
            },
            "documentation": {
              "id": 2041,
              "nodeType": "StructuredDocumentation",
              "src": "9224:127:5",
              "text": "@notice Allows governance to add a new hyperdrive deployer.\n @param _hyperdriveDeployer The new hyperdrive deployer."
            },
            "functionSelector": "02fd2de9",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2046,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2045,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "9439:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "9439:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "9439:14:5"
              }
            ],
            "name": "addHyperdriveDeployer",
            "nameLocation": "9365:21:5",
            "parameters": {
              "id": 2044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2043,
                  "mutability": "mutable",
                  "name": "_hyperdriveDeployer",
                  "nameLocation": "9404:19:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2071,
                  "src": "9396:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9396:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9386:43:5"
            },
            "returnParameters": {
              "id": 2047,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9454:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2127,
            "nodeType": "FunctionDefinition",
            "src": "9930:615:5",
            "nodes": [],
            "body": {
              "id": 2126,
              "nodeType": "Block",
              "src": "10055:490:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 2084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "10069:42:5",
                    "subExpression": {
                      "baseExpression": {
                        "id": 2081,
                        "name": "isHyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1749,
                        "src": "10070:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2083,
                      "indexExpression": {
                        "id": 2082,
                        "name": "_hyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2074,
                        "src": "10091:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "10070:41:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2091,
                  "nodeType": "IfStatement",
                  "src": "10065:120:5",
                  "trueBody": {
                    "id": 2090,
                    "nodeType": "Block",
                    "src": "10113:72:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2085,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "10134:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2087,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10146:26:5",
                            "memberName": "HyperdriveDeployerNotAdded",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4610,
                            "src": "10134:38:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2088,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10134:40:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2089,
                        "nodeType": "RevertStatement",
                        "src": "10127:47:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 2092,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "10198:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2094,
                      "indexExpression": {
                        "id": 2093,
                        "name": "_index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2076,
                        "src": "10219:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "10198:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 2095,
                      "name": "_hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2074,
                      "src": "10230:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10198:51:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2103,
                  "nodeType": "IfStatement",
                  "src": "10194:134:5",
                  "trueBody": {
                    "id": 2102,
                    "nodeType": "Block",
                    "src": "10251:77:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2097,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "10272:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10284:31:5",
                            "memberName": "HyperdriveDeployerIndexMismatch",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4612,
                            "src": "10272:43:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10272:45:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2101,
                        "nodeType": "RevertStatement",
                        "src": "10265:52:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2104,
                        "name": "isHyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1749,
                        "src": "10337:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2106,
                      "indexExpression": {
                        "id": 2105,
                        "name": "_hyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2074,
                        "src": "10358:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10337:41:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 2107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10381:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "10337:49:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2109,
                  "nodeType": "ExpressionStatement",
                  "src": "10337:49:5"
                },
                {
                  "expression": {
                    "id": 2119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2110,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "10396:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2112,
                      "indexExpression": {
                        "id": 2111,
                        "name": "_index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2076,
                        "src": "10417:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10396:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 2113,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "10427:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2118,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 2114,
                            "name": "_hyperdriveDeployers",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1744,
                            "src": "10461:20:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 2115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10482:6:5",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "10461:27:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 2116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10491:1:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "10461:31:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "10427:75:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10396:106:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2120,
                  "nodeType": "ExpressionStatement",
                  "src": "10396:106:5"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2121,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "10512:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10533:3:5",
                      "memberName": "pop",
                      "nodeType": "MemberAccess",
                      "src": "10512:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer)"
                      }
                    },
                    "id": 2124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10512:26:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2125,
                  "nodeType": "ExpressionStatement",
                  "src": "10512:26:5"
                }
              ]
            },
            "documentation": {
              "id": 2072,
              "nodeType": "StructuredDocumentation",
              "src": "9713:212:5",
              "text": "@notice Allows governance to remove an existing hyperdrive deployer.\n @param _hyperdriveDeployer The hyperdrive deployer to remove.\n @param _index The index of the hyperdrive deployer to remove."
            },
            "functionSelector": "503cf156",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2079,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2078,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "10040:14:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1892,
                  "src": "10040:14:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "10040:14:5"
              }
            ],
            "name": "removeHyperdriveDeployer",
            "nameLocation": "9939:24:5",
            "parameters": {
              "id": 2077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2074,
                  "mutability": "mutable",
                  "name": "_hyperdriveDeployer",
                  "nameLocation": "9981:19:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9973:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2073,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9973:7:5",
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
                  "id": 2076,
                  "mutability": "mutable",
                  "name": "_index",
                  "nameLocation": "10018:6:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "10010:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10010:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9963:67:5"
            },
            "returnParameters": {
              "id": 2080,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10055:0:5"
            },
            "scope": 2530,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2339,
            "nodeType": "FunctionDefinition",
            "src": "11290:3130:5",
            "nodes": [],
            "body": {
              "id": 2338,
              "nodeType": "Block",
              "src": "11595:2825:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2147,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "11609:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11613:5:5",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "11609:9:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11621:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11609:13:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2157,
                  "nodeType": "IfStatement",
                  "src": "11605:89:5",
                  "trueBody": {
                    "id": 2156,
                    "nodeType": "Block",
                    "src": "11624:70:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2151,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "11645:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2153,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11657:24:5",
                            "memberName": "NonPayableInitialization",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4606,
                            "src": "11645:36:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11645:38:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2155,
                        "nodeType": "RevertStatement",
                        "src": "11638:45:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 2161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11976:42:5",
                    "subExpression": {
                      "baseExpression": {
                        "id": 2158,
                        "name": "isHyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1749,
                        "src": "11977:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2160,
                      "indexExpression": {
                        "id": 2159,
                        "name": "_hyperdriveDeployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2130,
                        "src": "11998:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "11977:41:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2168,
                  "nodeType": "IfStatement",
                  "src": "11972:109:5",
                  "trueBody": {
                    "id": 2167,
                    "nodeType": "Block",
                    "src": "12020:61:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2162,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "12041:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12053:15:5",
                            "memberName": "InvalidDeployer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4579,
                            "src": "12041:27:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12041:29:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2166,
                        "nodeType": "RevertStatement",
                        "src": "12034:36:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2169,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "12518:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2171,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12532:13:5",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4391,
                      "src": "12518:27:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2172,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1686,
                      "src": "12548:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12518:43:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2174,
                  "nodeType": "ExpressionStatement",
                  "src": "12518:43:5"
                },
                {
                  "expression": {
                    "id": 2179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2175,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "12571:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2177,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12585:14:5",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4394,
                      "src": "12571:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2178,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1689,
                      "src": "12602:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "12571:45:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 2180,
                  "nodeType": "ExpressionStatement",
                  "src": "12571:45:5"
                },
                {
                  "expression": {
                    "id": 2185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2181,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "12626:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2183,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12640:12:5",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4415,
                      "src": "12626:26:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2184,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1696,
                      "src": "12655:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12626:41:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2186,
                  "nodeType": "ExpressionStatement",
                  "src": "12626:41:5"
                },
                {
                  "expression": {
                    "id": 2194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2187,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "12677:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2189,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12691:10:5",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4412,
                      "src": "12677:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 2192,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "12712:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$2530",
                            "typeString": "contract HyperdriveFactory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$2530",
                            "typeString": "contract HyperdriveFactory"
                          }
                        ],
                        "id": 2191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12704:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 2190,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12704:7:5",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 2193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12704:13:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12677:40:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2195,
                  "nodeType": "ExpressionStatement",
                  "src": "12677:40:5"
                },
                {
                  "expression": {
                    "id": 2200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2196,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "12727:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2198,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12741:4:5",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4419,
                      "src": "12727:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2199,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1693,
                      "src": "12748:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$4384_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "src": "12727:25:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                      "typeString": "struct IHyperdrive.Fees memory"
                    }
                  },
                  "id": 2201,
                  "nodeType": "ExpressionStatement",
                  "src": "12727:25:5"
                },
                {
                  "assignments": [
                    2204
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2204,
                      "mutability": "mutable",
                      "name": "hyperdrive",
                      "nameLocation": "12774:10:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 2338,
                      "src": "12762:22:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                        "typeString": "contract IHyperdrive"
                      },
                      "typeName": {
                        "id": 2203,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 2202,
                          "name": "IHyperdrive",
                          "nameLocations": [
                            "12762:11:5"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 4675,
                          "src": "12762:11:5"
                        },
                        "referencedDeclaration": 4675,
                        "src": "12762:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2214,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 2210,
                            "name": "_deployConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2133,
                            "src": "12877:13:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            }
                          },
                          {
                            "id": 2211,
                            "name": "_extraData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2135,
                            "src": "12908:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "arguments": [
                              {
                                "id": 2207,
                                "name": "_hyperdriveDeployer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2130,
                                "src": "12832:19:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 2206,
                              "name": "IHyperdriveDeployer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4848,
                              "src": "12812:19:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployer_$4848_$",
                                "typeString": "type(contract IHyperdriveDeployer)"
                              }
                            },
                            "id": 2208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12812:40:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$4848",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          },
                          "id": 2209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12853:6:5",
                          "memberName": "deploy",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4847,
                          "src": "12812:47:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolDeployConfig_$4420_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_address_$",
                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory,bytes memory) external returns (address)"
                          }
                        },
                        "id": 2212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12812:120:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2205,
                      "name": "IHyperdrive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4675,
                      "src": "12787:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                        "typeString": "type(contract IHyperdrive)"
                      }
                    },
                    "id": 2213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12787:155:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12762:180:5"
                },
                {
                  "expression": {
                    "id": 2222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2215,
                        "name": "isOfficial",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1680,
                        "src": "12952:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 2220,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 2218,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2204,
                            "src": "12971:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 2217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12963:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2216,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12963:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12963:19:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "12952:31:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2221,
                      "name": "versionCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1675,
                      "src": "12986:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12952:48:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2223,
                  "nodeType": "ExpressionStatement",
                  "src": "12952:48:5"
                },
                {
                  "expression": {
                    "id": 2228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 2224,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "13010:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 2226,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "13024:10:5",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4412,
                      "src": "13010:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2227,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1683,
                      "src": "13037:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13010:47:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2229,
                  "nodeType": "ExpressionStatement",
                  "src": "13010:47:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 2231,
                        "name": "versionCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1675,
                        "src": "13094:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 2234,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2204,
                            "src": "13130:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 2233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13122:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2232,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13122:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13122:19:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2236,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2133,
                        "src": "13155:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      {
                        "id": 2237,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2135,
                        "src": "13182:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 2230,
                      "name": "Deployed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1668,
                      "src": "13072:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_struct$_PoolDeployConfig_$4420_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,address,struct IHyperdrive.PoolDeployConfig memory,bytes memory)"
                      }
                    },
                    "id": 2238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13072:130:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2239,
                  "nodeType": "EmitStatement",
                  "src": "13067:135:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 2245,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2204,
                            "src": "13308:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 2244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13300:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2243,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13300:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13300:19:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 2240,
                        "name": "_instances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1753,
                        "src": "13284:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13295:4:5",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "13284:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 2247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13284:36:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2248,
                  "nodeType": "ExpressionStatement",
                  "src": "13284:36:5"
                },
                {
                  "expression": {
                    "id": 2256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 2249,
                        "name": "isInstance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1758,
                        "src": "13330:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2254,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 2252,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2204,
                            "src": "13349:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 2251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13341:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2250,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13341:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2253,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13341:19:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "13330:31:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 2255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "13364:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "13330:38:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2257,
                  "nodeType": "ExpressionStatement",
                  "src": "13330:38:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2263,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "13476:3:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13480:6:5",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "13476:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 2267,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "13508:4:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$2530",
                              "typeString": "contract HyperdriveFactory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$2530",
                              "typeString": "contract HyperdriveFactory"
                            }
                          ],
                          "id": 2266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13500:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2265,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13500:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2268,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13500:13:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2269,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2137,
                        "src": "13527:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "id": 2258,
                          "name": "_deployConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2133,
                          "src": "13426:13:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                          }
                        },
                        "id": 2261,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13440:9:5",
                        "memberName": "baseToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4388,
                        "src": "13426:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$3872",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13450:12:5",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3871,
                      "src": "13426:36:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13426:124:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2271,
                  "nodeType": "ExpressionStatement",
                  "src": "13426:124:5"
                },
                {
                  "condition": {
                    "id": 2285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "13577:118:5",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 2277,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2204,
                              "src": "13635:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                                "typeString": "contract IHyperdrive"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                                "typeString": "contract IHyperdrive"
                              }
                            ],
                            "id": 2276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13627:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 2275,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "13627:7:5",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 2278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13627:19:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 2281,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13669:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 2280,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13669:7:5",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              ],
                              "id": 2279,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "13664:4:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 2282,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13664:13:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 2283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "13678:3:5",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "13664:17:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "expression": {
                            "id": 2272,
                            "name": "_deployConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2133,
                            "src": "13578:13:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            }
                          },
                          "id": 2273,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "13592:9:5",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4388,
                          "src": "13578:23:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3872",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 2274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13602:7:5",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3860,
                        "src": "13578:31:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 2284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13578:117:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2292,
                  "nodeType": "IfStatement",
                  "src": "13560:206:5",
                  "trueBody": {
                    "id": 2291,
                    "nodeType": "Block",
                    "src": "13706:60:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2286,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "13727:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2288,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13739:14:5",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4515,
                            "src": "13727:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2289,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13727:28:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2290,
                        "nodeType": "RevertStatement",
                        "src": "13720:35:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2296,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2137,
                        "src": "13810:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 2297,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2139,
                        "src": "13837:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 2300,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "13906:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13910:6:5",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "13906:10:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "hexValue": "74727565",
                            "id": 2302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13942:4:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "id": 2303,
                            "name": "_initializeExtraData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2141,
                            "src": "13975:20:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 2298,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4675,
                            "src": "13855:11:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                              "typeString": "type(contract IHyperdrive)"
                            }
                          },
                          "id": 2299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "13867:7:5",
                          "memberName": "Options",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4512,
                          "src": "13855:19:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Options_$4512_storage_ptr_$",
                            "typeString": "type(struct IHyperdrive.Options storage pointer)"
                          }
                        },
                        "id": 2304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "13893:11:5",
                          "13934:6:5",
                          "13964:9:5"
                        ],
                        "names": [
                          "destination",
                          "asBase",
                          "extraData"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "13855:155:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_memory_ptr",
                          "typeString": "struct IHyperdrive.Options memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$4512_memory_ptr",
                          "typeString": "struct IHyperdrive.Options memory"
                        }
                      ],
                      "expression": {
                        "id": 2293,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2204,
                        "src": "13775:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 2295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13786:10:5",
                      "memberName": "initialize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4758,
                      "src": "13775:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$4512_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)"
                      }
                    },
                    "id": 2305,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13775:245:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2306,
                  "nodeType": "ExpressionStatement",
                  "src": "13775:245:5"
                },
                {
                  "body": {
                    "id": 2328,
                    "nodeType": "Block",
                    "src": "14200:130:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 2318,
                                "name": "_defaultPausers",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1712,
                                "src": "14235:15:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 2320,
                              "indexExpression": {
                                "id": 2319,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2308,
                                "src": "14251:1:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "14235:18:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 2321,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "14255:4:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "expression": {
                              "id": 2315,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2204,
                              "src": "14214:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                                "typeString": "contract IHyperdrive"
                              }
                            },
                            "id": 2317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14225:9:5",
                            "memberName": "setPauser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4832,
                            "src": "14214:20:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,bool) external"
                            }
                          },
                          "id": 2322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14214:46:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2323,
                        "nodeType": "ExpressionStatement",
                        "src": "14214:46:5"
                      },
                      {
                        "id": 2327,
                        "nodeType": "UncheckedBlock",
                        "src": "14274:46:5",
                        "statements": [
                          {
                            "expression": {
                              "id": 2325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "14302:3:5",
                              "subExpression": {
                                "id": 2324,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2308,
                                "src": "14304:1:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 2326,
                            "nodeType": "ExpressionStatement",
                            "src": "14302:3:5"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2311,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2308,
                      "src": "14170:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 2312,
                        "name": "_defaultPausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1712,
                        "src": "14174:15:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14190:6:5",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "14174:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14170:26:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2329,
                  "initializationExpression": {
                    "assignments": [
                      2308
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2308,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "14163:1:5",
                        "nodeType": "VariableDeclaration",
                        "scope": 2329,
                        "src": "14155:9:5",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2307,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "14155:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2310,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 2309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "14167:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "14155:13:5"
                  },
                  "nodeType": "ForStatement",
                  "src": "14150:180:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2333,
                        "name": "hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1683,
                        "src": "14364:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 2330,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2204,
                        "src": "14339:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 2332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14350:13:5",
                      "memberName": "setGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4825,
                      "src": "14339:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 2334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14339:46:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2335,
                  "nodeType": "ExpressionStatement",
                  "src": "14339:46:5"
                },
                {
                  "expression": {
                    "id": 2336,
                    "name": "hyperdrive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2204,
                    "src": "14403:10:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "functionReturnParameters": 2146,
                  "id": 2337,
                  "nodeType": "Return",
                  "src": "14396:17:5"
                }
              ]
            },
            "documentation": {
              "id": 2128,
              "nodeType": "StructuredDocumentation",
              "src": "10551:734:5",
              "text": "@notice Deploys a Hyperdrive instance with the factory's configuration.\n @dev This function is declared as payable to allow payable overrides\n      to accept ether on initialization, but payability is not supported\n      by default.\n @param _hyperdriveDeployer Address of the hyperdrive deployer.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains data necessary for the specific deployer.\n @param _contribution Base token to call init with\n @param _apr The apr to call init with\n @param _initializeExtraData The extra data for the `initialize` call.\n @return The hyperdrive address deployed."
            },
            "functionSelector": "cd2cdf58",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployAndInitialize",
            "nameLocation": "11299:19:5",
            "parameters": {
              "id": 2142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2130,
                  "mutability": "mutable",
                  "name": "_hyperdriveDeployer",
                  "nameLocation": "11336:19:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11328:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2129,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11328:7:5",
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
                  "id": 2133,
                  "mutability": "mutable",
                  "name": "_deployConfig",
                  "nameLocation": "11401:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11365:49:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 2132,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2131,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "11365:11:5",
                        "11377:16:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4420,
                      "src": "11365:28:5"
                    },
                    "referencedDeclaration": 4420,
                    "src": "11365:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$4420_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2135,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "11437:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11424:23:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2134,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11424:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2137,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "11465:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11457:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11457:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2139,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "11496:4:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11488:12:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2138,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11488:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2141,
                  "mutability": "mutable",
                  "name": "_initializeExtraData",
                  "nameLocation": "11523:20:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11510:33:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2140,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11510:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11318:231:5"
            },
            "returnParameters": {
              "id": 2146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2145,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2339,
                  "src": "11582:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 2144,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2143,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "11582:11:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4675,
                      "src": "11582:11:5"
                    },
                    "referencedDeclaration": 4675,
                    "src": "11582:11:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$4675",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11581:13:5"
            },
            "scope": 2530,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 2349,
            "nodeType": "FunctionDefinition",
            "src": "14505:109:5",
            "nodes": [],
            "body": {
              "id": 2348,
              "nodeType": "Block",
              "src": "14575:39:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2346,
                    "name": "_defaultPausers",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1712,
                    "src": "14592:15:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 2345,
                  "id": 2347,
                  "nodeType": "Return",
                  "src": "14585:22:5"
                }
              ]
            },
            "documentation": {
              "id": 2340,
              "nodeType": "StructuredDocumentation",
              "src": "14426:74:5",
              "text": "@notice Gets the default pausers.\n @return The default pausers."
            },
            "functionSelector": "7f7c5a7d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDefaultPausers",
            "nameLocation": "14514:17:5",
            "parameters": {
              "id": 2341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14531:2:5"
            },
            "returnParameters": {
              "id": 2345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2344,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2349,
                  "src": "14557:16:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2342,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "14557:7:5",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2343,
                    "nodeType": "ArrayTypeName",
                    "src": "14557:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14556:18:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2359,
            "nodeType": "FunctionDefinition",
            "src": "14757:105:5",
            "nodes": [],
            "body": {
              "id": 2358,
              "nodeType": "Block",
              "src": "14821:41:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 2355,
                      "name": "_instances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1753,
                      "src": "14838:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 2356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "14849:6:5",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "14838:17:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2354,
                  "id": 2357,
                  "nodeType": "Return",
                  "src": "14831:24:5"
                }
              ]
            },
            "documentation": {
              "id": 2350,
              "nodeType": "StructuredDocumentation",
              "src": "14620:132:5",
              "text": "@notice Gets the number of instances deployed by this factory.\n @return The number of instances deployed by this factory."
            },
            "functionSelector": "6e95d67c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getNumberOfInstances",
            "nameLocation": "14766:20:5",
            "parameters": {
              "id": 2351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14786:2:5"
            },
            "returnParameters": {
              "id": 2354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2353,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2359,
                  "src": "14812:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14812:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14811:9:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2372,
            "nodeType": "FunctionDefinition",
            "src": "15034:116:5",
            "nodes": [],
            "body": {
              "id": 2371,
              "nodeType": "Block",
              "src": "15109:41:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 2367,
                      "name": "_instances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1753,
                      "src": "15126:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 2369,
                    "indexExpression": {
                      "id": 2368,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2362,
                      "src": "15137:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "15126:17:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2366,
                  "id": 2370,
                  "nodeType": "Return",
                  "src": "15119:24:5"
                }
              ]
            },
            "documentation": {
              "id": 2360,
              "nodeType": "StructuredDocumentation",
              "src": "14868:161:5",
              "text": "@notice Gets the instance at the specified index.\n @param index The index of the instance to get.\n @return The instance at the specified index."
            },
            "functionSelector": "daac24da",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getInstanceAtIndex",
            "nameLocation": "15043:18:5",
            "parameters": {
              "id": 2363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2362,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "15070:5:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2372,
                  "src": "15062:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2361,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15062:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15061:15:5"
            },
            "returnParameters": {
              "id": 2366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2365,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2372,
                  "src": "15100:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2364,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15100:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15099:9:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2439,
            "nodeType": "FunctionDefinition",
            "src": "15445:614:5",
            "nodes": [],
            "body": {
              "id": 2438,
              "nodeType": "Block",
              "src": "15581:478:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2383,
                      "name": "startIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2375,
                      "src": "15644:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 2384,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2377,
                      "src": "15657:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15644:21:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2392,
                  "nodeType": "IfStatement",
                  "src": "15640:87:5",
                  "trueBody": {
                    "id": 2391,
                    "nodeType": "Block",
                    "src": "15667:60:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2386,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "15688:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2388,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15700:14:5",
                            "memberName": "InvalidIndexes",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4575,
                            "src": "15688:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15688:28:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2390,
                        "nodeType": "RevertStatement",
                        "src": "15681:35:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2393,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2377,
                      "src": "15740:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "id": 2394,
                        "name": "_instances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1753,
                        "src": "15751:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15762:6:5",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "15751:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15740:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2403,
                  "nodeType": "IfStatement",
                  "src": "15736:96:5",
                  "trueBody": {
                    "id": 2402,
                    "nodeType": "Block",
                    "src": "15770:62:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2397,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "15791:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2399,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15803:16:5",
                            "memberName": "EndIndexTooLarge",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4577,
                            "src": "15791:28:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15791:30:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2401,
                        "nodeType": "RevertStatement",
                        "src": "15784:37:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2404,
                      "name": "range",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2381,
                      "src": "15884:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 2410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2408,
                              "name": "endIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2377,
                              "src": "15906:8:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 2409,
                              "name": "startIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2375,
                              "src": "15917:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "15906:21:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 2411,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15930:1:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "15906:25:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "15892:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (address[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 2405,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "15896:7:5",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 2406,
                          "nodeType": "ArrayTypeName",
                          "src": "15896:9:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                            "typeString": "address[]"
                          }
                        }
                      },
                      "id": 2413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "15892:40:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "15884:48:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 2415,
                  "nodeType": "ExpressionStatement",
                  "src": "15884:48:5"
                },
                {
                  "body": {
                    "id": 2436,
                    "nodeType": "Block",
                    "src": "15991:62:5",
                    "statements": [
                      {
                        "expression": {
                          "id": 2434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2426,
                              "name": "range",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2381,
                              "src": "16005:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 2430,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 2429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 2427,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2417,
                                "src": "16011:1:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 2428,
                                "name": "startIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2375,
                                "src": "16015:10:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "16011:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "16005:21:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 2431,
                              "name": "_instances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1753,
                              "src": "16029:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 2433,
                            "indexExpression": {
                              "id": 2432,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2417,
                              "src": "16040:1:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "16029:13:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "16005:37:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 2435,
                        "nodeType": "ExpressionStatement",
                        "src": "16005:37:5"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2420,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2417,
                      "src": "15971:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 2421,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2377,
                      "src": "15976:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15971:13:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2437,
                  "initializationExpression": {
                    "assignments": [
                      2417
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2417,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "15955:1:5",
                        "nodeType": "VariableDeclaration",
                        "scope": 2437,
                        "src": "15947:9:5",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2416,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "15947:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2419,
                    "initialValue": {
                      "id": 2418,
                      "name": "startIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2375,
                      "src": "15959:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "15947:22:5"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "15986:3:5",
                      "subExpression": {
                        "id": 2423,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2417,
                        "src": "15986:1:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2425,
                    "nodeType": "ExpressionStatement",
                    "src": "15986:3:5"
                  },
                  "nodeType": "ForStatement",
                  "src": "15942:111:5"
                }
              ]
            },
            "documentation": {
              "id": 2373,
              "nodeType": "StructuredDocumentation",
              "src": "15156:284:5",
              "text": "@notice Returns the _instances array according to specified indices.\n @param startIndex The starting index of the instances to get.\n @param endIndex The ending index of the instances to get.\n @return range The resulting custom portion of the _instances array."
            },
            "functionSelector": "bc30e7a1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getInstancesInRange",
            "nameLocation": "15454:19:5",
            "parameters": {
              "id": 2378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2375,
                  "mutability": "mutable",
                  "name": "startIndex",
                  "nameLocation": "15491:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2439,
                  "src": "15483:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15483:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2377,
                  "mutability": "mutable",
                  "name": "endIndex",
                  "nameLocation": "15519:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2439,
                  "src": "15511:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2376,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15511:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15473:60:5"
            },
            "returnParameters": {
              "id": 2382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2381,
                  "mutability": "mutable",
                  "name": "range",
                  "nameLocation": "15574:5:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2439,
                  "src": "15557:22:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2379,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "15557:7:5",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2380,
                    "nodeType": "ArrayTypeName",
                    "src": "15557:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15556:24:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2449,
            "nodeType": "FunctionDefinition",
            "src": "16224:125:5",
            "nodes": [],
            "body": {
              "id": 2448,
              "nodeType": "Block",
              "src": "16298:51:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 2445,
                      "name": "_hyperdriveDeployers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1744,
                      "src": "16315:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 2446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "16336:6:5",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "16315:27:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2444,
                  "id": 2447,
                  "nodeType": "Return",
                  "src": "16308:34:5"
                }
              ]
            },
            "documentation": {
              "id": 2440,
              "nodeType": "StructuredDocumentation",
              "src": "16065:154:5",
              "text": "@notice Gets the number of hyperdrive deployers deployed by this factory.\n @return The number of hyperdrive deployers deployed by this factory."
            },
            "functionSelector": "a1ac11f5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getNumberOfHyperdriveDeployers",
            "nameLocation": "16233:30:5",
            "parameters": {
              "id": 2441,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16263:2:5"
            },
            "returnParameters": {
              "id": 2444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2443,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2449,
                  "src": "16289:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16289:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16288:9:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2462,
            "nodeType": "FunctionDefinition",
            "src": "16521:150:5",
            "nodes": [],
            "body": {
              "id": 2461,
              "nodeType": "Block",
              "src": "16620:51:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 2457,
                      "name": "_hyperdriveDeployers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1744,
                      "src": "16637:20:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 2459,
                    "indexExpression": {
                      "id": 2458,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2452,
                      "src": "16658:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "16637:27:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2456,
                  "id": 2460,
                  "nodeType": "Return",
                  "src": "16630:34:5"
                }
              ]
            },
            "documentation": {
              "id": 2450,
              "nodeType": "StructuredDocumentation",
              "src": "16355:161:5",
              "text": "@notice Gets the instance at the specified index.\n @param index The index of the instance to get.\n @return The instance at the specified index."
            },
            "functionSelector": "f1e1b660",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHyperdriveDeployerAtIndex",
            "nameLocation": "16530:28:5",
            "parameters": {
              "id": 2453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2452,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "16576:5:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2462,
                  "src": "16568:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2451,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16568:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16558:29:5"
            },
            "returnParameters": {
              "id": 2456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2455,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2462,
                  "src": "16611:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2454,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16611:7:5",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16610:9:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2529,
            "nodeType": "FunctionDefinition",
            "src": "17008:644:5",
            "nodes": [],
            "body": {
              "id": 2528,
              "nodeType": "Block",
              "src": "17154:498:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2473,
                      "name": "startIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2465,
                      "src": "17217:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 2474,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2467,
                      "src": "17230:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17217:21:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2482,
                  "nodeType": "IfStatement",
                  "src": "17213:87:5",
                  "trueBody": {
                    "id": 2481,
                    "nodeType": "Block",
                    "src": "17240:60:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2476,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "17261:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2478,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "17273:14:5",
                            "memberName": "InvalidIndexes",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4575,
                            "src": "17261:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2479,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17261:28:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2480,
                        "nodeType": "RevertStatement",
                        "src": "17254:35:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2483,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2467,
                      "src": "17313:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "id": 2484,
                        "name": "_hyperdriveDeployers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "17324:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 2485,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17345:6:5",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "17324:27:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17313:38:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2493,
                  "nodeType": "IfStatement",
                  "src": "17309:106:5",
                  "trueBody": {
                    "id": 2492,
                    "nodeType": "Block",
                    "src": "17353:62:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2487,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "17374:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2489,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "17386:16:5",
                            "memberName": "EndIndexTooLarge",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4577,
                            "src": "17374:28:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2490,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17374:30:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2491,
                        "nodeType": "RevertStatement",
                        "src": "17367:37:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2494,
                      "name": "range",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2471,
                      "src": "17467:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 2500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2498,
                              "name": "endIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2467,
                              "src": "17489:8:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 2499,
                              "name": "startIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2465,
                              "src": "17500:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "17489:21:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 2501,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "17513:1:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "17489:25:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "17475:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (address[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 2495,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "17479:7:5",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 2496,
                          "nodeType": "ArrayTypeName",
                          "src": "17479:9:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                            "typeString": "address[]"
                          }
                        }
                      },
                      "id": 2503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17475:40:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "17467:48:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 2505,
                  "nodeType": "ExpressionStatement",
                  "src": "17467:48:5"
                },
                {
                  "body": {
                    "id": 2526,
                    "nodeType": "Block",
                    "src": "17574:72:5",
                    "statements": [
                      {
                        "expression": {
                          "id": 2524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2516,
                              "name": "range",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2471,
                              "src": "17588:5:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 2520,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 2519,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 2517,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2507,
                                "src": "17594:1:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 2518,
                                "name": "startIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2465,
                                "src": "17598:10:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "17594:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "17588:21:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 2521,
                              "name": "_hyperdriveDeployers",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1744,
                              "src": "17612:20:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 2523,
                            "indexExpression": {
                              "id": 2522,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2507,
                              "src": "17633:1:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "17612:23:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "17588:47:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 2525,
                        "nodeType": "ExpressionStatement",
                        "src": "17588:47:5"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2510,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2507,
                      "src": "17554:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 2511,
                      "name": "endIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2467,
                      "src": "17559:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17554:13:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2527,
                  "initializationExpression": {
                    "assignments": [
                      2507
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2507,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "17538:1:5",
                        "nodeType": "VariableDeclaration",
                        "scope": 2527,
                        "src": "17530:9:5",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2506,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "17530:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2509,
                    "initialValue": {
                      "id": 2508,
                      "name": "startIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2465,
                      "src": "17542:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "17530:22:5"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2514,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "17569:3:5",
                      "subExpression": {
                        "id": 2513,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2507,
                        "src": "17569:1:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2515,
                    "nodeType": "ExpressionStatement",
                    "src": "17569:3:5"
                  },
                  "nodeType": "ForStatement",
                  "src": "17525:121:5"
                }
              ]
            },
            "documentation": {
              "id": 2463,
              "nodeType": "StructuredDocumentation",
              "src": "16677:326:5",
              "text": "@notice Returns the hyperdrive deployers array according to specified indices.\n @param startIndex The starting index of the hyperdrive deployers to get.\n @param endIndex The ending index of the hyperdrive deployers to get.\n @return range The resulting custom portion of the hyperdrive deployers array."
            },
            "functionSelector": "5f5a4e88",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getHyperdriveDeployersInRange",
            "nameLocation": "17017:29:5",
            "parameters": {
              "id": 2468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2465,
                  "mutability": "mutable",
                  "name": "startIndex",
                  "nameLocation": "17064:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2529,
                  "src": "17056:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2464,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17056:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2467,
                  "mutability": "mutable",
                  "name": "endIndex",
                  "nameLocation": "17092:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2529,
                  "src": "17084:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17084:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17046:60:5"
            },
            "returnParameters": {
              "id": 2472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2471,
                  "mutability": "mutable",
                  "name": "range",
                  "nameLocation": "17147:5:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2529,
                  "src": "17130:22:5",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2469,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "17130:7:5",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2470,
                    "nodeType": "ArrayTypeName",
                    "src": "17130:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17129:24:5"
            },
            "scope": 2530,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "HyperdriveFactory",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1623,
          "nodeType": "StructuredDocumentation",
          "src": "274:408:5",
          "text": "@author DELV\n @title HyperdriveFactory\n @notice Deploys hyperdrive instances and initializes them. It also holds a\n         registry of all deployed hyperdrive instances.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          2530
        ],
        "name": "HyperdriveFactory",
        "nameLocation": "691:17:5",
        "scope": 2531,
        "usedErrors": [
          4515,
          4575,
          4577,
          4579,
          4596,
          4602,
          4604,
          4606,
          4608,
          4610,
          4612
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 5
} as const;
