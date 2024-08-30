export const EzETHHyperdriveDeployerCoordinator = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_factory",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_coreDeployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target0Deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target1Deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target2Deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target3Deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target4Deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
                {
                    "name": "_renzoOracle",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                },
                {
                    "name": "_vaultSharesToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
            "name": "convertToShares",
            "inputs": [
                {
                    "name": "_renzoOracle",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                },
                {
                    "name": "_vaultSharesToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_baseAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
            "name": "coreDeployer",
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
            "name": "deployHyperdrive",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "__name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_deployConfig",
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
            "name": "deployTarget",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_deployConfig",
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
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deployments",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct HyperdriveDeployerCoordinator.Deployment",
                    "components": [
                        {
                            "name": "configHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "extraDataHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "initialSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "hyperdrive",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "target0",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "target1",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "target2",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "target3",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "target4",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ezETH",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "factory",
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
            "name": "getNumberOfTargets",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_lp",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
                }
            ],
            "outputs": [
                {
                    "name": "lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
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
            "name": "renzoOracle",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "restakeManager",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target0Deployer",
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
            "name": "target1Deployer",
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
            "name": "target2Deployer",
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
            "name": "target3Deployer",
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
            "name": "target4Deployer",
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
            "type": "error",
            "name": "AddressEmptyCode",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "AddressInsufficientBalance",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "DeploymentAlreadyExists",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DeploymentDoesNotExist",
            "inputs": []
        },
        {
            "type": "error",
            "name": "FailedInnerCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "HyperdriveAlreadyDeployed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "HyperdriveIsNotDeployed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "IncompleteDeployment",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientValue",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidBaseToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidCheckpointDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFeeAmounts",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinimumShareReserves",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidMinimumTransactionAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPositionDuration",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTargetIndex",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidVaultSharesToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MismatchedConfig",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MismatchedExtraData",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "SenderIsNotFactory",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TargetAlreadyDeployed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6101c06040523480156200001257600080fd5b5060405162002eff38038062002eff8339810160408190526200003591620001ca565b888888888888888860006200004b8982620003c6565b506001600160a01b0396871660805294861660a05292851660c05290841660e052831661010052821661012052811661014052821661016081905260408051630274e78f60e31b815290519192506313a73c789160048083019260209291908290030181865afa158015620000c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ea919062000492565b6001600160a01b03166101a0816001600160a01b031681525050610160516001600160a01b031663892866a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000146573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016c919062000492565b6001600160a01b03166101805250620004b9975050505050505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620001b557600080fd5b50565b8051620001c5816200019f565b919050565b60008060008060008060008060006101208a8c031215620001ea57600080fd5b89516001600160401b03808211156200020257600080fd5b818c0191508c601f8301126200021757600080fd5b8151818111156200022c576200022c62000189565b604051601f8201601f19908116603f0116810190838211818310171562000257576200025762000189565b81604052828152602093508f848487010111156200027457600080fd5b600091505b8282101562000298578482018401518183018501529083019062000279565b6000848483010152809d50505050620002b3818d01620001b8565b99505050620002c560408b01620001b8565b9650620002d560608b01620001b8565b9550620002e560808b01620001b8565b9450620002f560a08b01620001b8565b93506200030560c08b01620001b8565b92506200031560e08b01620001b8565b9150620003266101008b01620001b8565b90509295985092959850929598565b600181811c908216806200034a57607f821691505b6020821081036200036b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003c1576000816000526020600020601f850160051c810160208610156200039c5750805b601f850160051c820191505b81811015620003bd57828155600101620003a8565b5050505b505050565b81516001600160401b03811115620003e257620003e262000189565b620003fa81620003f3845462000335565b8462000371565b602080601f831160018114620004325760008415620004195750858301515b600019600386901b1c1916600185901b178555620003bd565b600085815260208120601f198616915b82811015620004635788860151825594840194600190910190840162000442565b5085821015620004825787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620004a557600080fd5b8151620004b2816200019f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a05161293e620005c1600039600081816101a4015281816114ae015281816114e3015261166e015260008181610352015261172301526000818161054601526117440152600081816103860152610e6d0152600081816103ee0152610d370152600081816104560152610c010152600081816103ba0152610acb01526000818161042201526108bd0152600081816104de01526111c50152600081816104aa01528181610636015281816107e1015281816108ed01528181610afb01528181610c3101528181610d6701528181610e9d01528181610f9401526111f6015261293e6000f3fe60806040526004361061011f5760003560e01c8063a085fa30116100a0578063c45a015511610064578063c45a015514610498578063c83e1f51146104cc578063e990eba814610500578063e99be39614610520578063ff0996b51461053457600080fd5b8063a085fa30146103a8578063aa8cd6c4146103dc578063ab71905f14610410578063b6cb111814610444578063c15106181461047857600080fd5b806337404017116100e757806337404017146101f15780635111bea2146102f057806354fd4d5014610310578063892866a414610340578063966ecd1c1461037457600080fd5b806304baa00b1461012457806306fdde031461014f578063079554e71461016457806313a73c781461019257806316abfc70146101de575b600080fd5b34801561013057600080fd5b50610139610568565b6040516101469190611db2565b60405180910390f35b34801561015b57600080fd5b50610139610584565b34801561017057600080fd5b5061018461017f366004611dea565b610612565b604051908152602001610146565b34801561019e57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610146565b6101846101ec366004611f55565b610629565b3480156101fd57600080fd5b506102e361020c36600461201a565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101469190612033565b3480156102fc57600080fd5b5061018461030b366004611dea565b6107c6565b34801561031c57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610139565b34801561034c57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561038057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b457600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e857600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561041c57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561045057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561048457600080fd5b506101c661049336600461220b565b6107d4565b3480156104a457600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d857600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561050c57600080fd5b506101c661051b366004612279565b610f87565b34801561052c57600080fd5b506005610184565b34801561054057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b6040518060600160405280602281526020016128e76022913981565b600080546105919061231a565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd9061231a565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b505050505081565b600061062085858585611304565b95945050505050565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461067457604051634084351160e01b815260040160405180910390fd5b61067c61145b565b6000868152600160205260409020600301546001600160a01b0316806106b55760405163952b05cb60e01b815260040160405180910390fd5b60006106c38288888761147c565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106f693929190612354565b60206040518083038185885af1158015610714573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061073991906123a4565b9250600061074782346123bd565b905080156107ba57604051600090339083908381818185875af1925050503d8060008114610791576040519150601f19603f3d011682016040523d82523d6000602084013e610796565b606091505b50509050806107b8576040516312171d8360e31b815260040160405180910390fd5b505b50505095945050505050565b600061062085858585611515565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461081f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109d75780541561085557604051633be1b34d60e11b815260040160405180910390fd5b61085f8686611624565b600061086b878761171c565b905060008760405160200161088091906123de565b60405160208183030381529060405280519060200120905060008780519060200120905060006108af8a61177f565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610929929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161095e9493929190612611565b6020604051808303816000875af115801561097d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a19190612657565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610620565b60008781526001602052604090205480610a045760405163398b1c0960e21b815260040160405180910390fd5b8087604051602001610a1691906123de565b6040516020818303038152906040528051906020012014610a4a5760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a7457604051631a3272d160e31b815260040160405180910390fd5b610a7e8787611624565b6000610a898861177f565b6002840154608082015290506001869003610bcc5760058301546001600160a01b031615610ac95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b3093929190612674565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b659493929190612611565b6020604051808303816000875af1158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba89190612657565b6005840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600203610d025760068301546001600160a01b031615610bff5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c6693929190612674565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c9b9493929190612611565b6020604051808303816000875af1158015610cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cde9190612657565b6006840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600303610e385760078301546001600160a01b031615610d355760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d9c93929190612674565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610dd19493929190612611565b6020604051808303816000875af1158015610df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e149190612657565b6007840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600403610f6e5760088301546001600160a01b031615610e6b5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ed293929190612674565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610f079493929190612611565b6020604051808303816000875af1158015610f26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4a9190612657565b6008840180546001600160a01b0319166001600160a01b03831617905593506107ba565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fd257604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561107b57604051632c95caeb60e01b815260040160405180910390fd5b805161109a5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b031615806110bf575060a08101516001600160a01b0316155b806110d5575060c08101516001600160a01b0316155b806110eb575060e08101516001600160a01b0316155b8061110257506101008101516001600160a01b0316155b156111205760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516111339087906020016123de565b60405160208183030381529060405280519060200120146111675760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461119257604051631a3272d160e31b815260040160405180910390fd5b61119c8585611624565b60006111a78661177f565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161124c929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016112879a99989796959493929190612695565b6020604051808303816000875af11580156112a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ca9190612657565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611345573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261136d91908101906127ab565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d591906123a4565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064015b602060405180830381865afa15801561142c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145091906123a4565b979650505050505050565b341561147a57604051631574f9f360e01b815260040160405180910390fd5b565b60008160200151156114a15760405163350b944160e11b815260040160405180910390fd5b6114d66001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685308661184d565b61150a6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686856118ba565b506000949350505050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611556573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261157e91908101906127ab565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e691906123a4565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb09060640161140f565b61162e828261194a565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461166c57604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b0316146116c25760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c68000146116ed576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c6800014611718576040516318c9522360e11b815260040160405180910390fd5b5050565b60006117767f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008560200151670de0b6b3a76400006107c6565b90505b92915050565b611787611c7b565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526118b49186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611a5f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261190b8482611acc565b6118b4576040516001600160a01b0384811660248301526000604483015261194091869182169063095ea7b390606401611882565b6118b48482611a5f565b6103e882608001511015611971576040516349db44f560e01b815260040160405180910390fd5b81610100015160000361199757604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806119c157508161010001518260e001516119be919061288b565b15155b156119df5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a76400001080611a0b5750670de0b6b3a7640000826101c0015160200151115b80611a265750670de0b6b3a7640000826101c0015160400151115b80611a415750670de0b6b3a7640000826101c0015160600151115b15611718576040516322f72cc360e11b815260040160405180910390fd5b6000611a746001600160a01b03841683611b6f565b90508051600014158015611a99575080806020019051810190611a9791906128ad565b155b15611ac757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b031684604051611ae991906128ca565b6000604051808303816000865af19150503d8060008114611b26576040519150601f19603f3d011682016040523d82523d6000602084013e611b2b565b606091505b5091509150818015611b55575080511580611b55575080806020019051810190611b5591906128ad565b80156106205750505050506001600160a01b03163b151590565b60606117768383600084600080856001600160a01b03168486604051611b9591906128ca565b60006040518083038185875af1925050503d8060008114611bd2576040519150601f19603f3d011682016040523d82523d6000602084013e611bd7565b606091505b5091509150611be7868383611bf3565b925050505b9392505050565b606082611c0857611c0382611c4f565b611bec565b8151158015611c1f57506001600160a01b0384163b155b15611c4857604051639996b31560e01b81526001600160a01b0385166004820152602401611abe565b5080611bec565b805115611c5f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611d5d6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611d7d578181015183820152602001611d65565b50506000910152565b60008151808452611d9e816020860160208601611d62565b601f01601f19169290920160200192915050565b6020815260006117766020830184611d86565b6001600160a01b0381168114611c7857600080fd5b8035611de581611dc5565b919050565b60008060008060808587031215611e0057600080fd5b8435611e0b81611dc5565b93506020850135611e1b81611dc5565b92506040850135611e2b81611dc5565b9396929550929360600135925050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611e7457611e74611e3b565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611e7457611e74611e3b565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ec757611ec7611e3b565b604052919050565b8015158114611c7857600080fd5b600067ffffffffffffffff831115611ef757611ef7611e3b565b611f0a601f8401601f1916602001611e9e565b9050828152838383011115611f1e57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611f4657600080fd5b61177683833560208501611edd565b600080600080600060a08688031215611f6d57600080fd5b853594506020860135611f7f81611dc5565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611faa57600080fd5b908701906060828a031215611fbe57600080fd5b611fc6611e51565b8235611fd181611dc5565b81526020830135611fe181611ecf565b6020820152604083013582811115611ff857600080fd5b6120048b828601611f35565b6040830152508093505050509295509295909350565b60006020828403121561202c57600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b6000608082840312156120c257600080fd5b6040516080810181811067ffffffffffffffff821117156120e5576120e5611e3b565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610240828403121561212957600080fd5b612131611e7a565b905061213c82611dda565b815261214a60208301611dda565b602082015261215b60408301611dda565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101406121b8818401611dda565b908201526101606121ca838201611dda565b908201526101806121dc838201611dda565b908201526101a06121ee838201611dda565b908201526101c0612201848483016120b0565b9082015292915050565b60008060008060006102c0868803121561222457600080fd5b853594506122358760208801612116565b935061026086013567ffffffffffffffff81111561225257600080fd5b61225e88828901611f35565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561229257600080fd5b85359450602086013567ffffffffffffffff808211156122b157600080fd5b818801915088601f8301126122c557600080fd5b6122d489833560208501611edd565b95506122e38960408a01612116565b94506102808801359150808211156122fa57600080fd5b5061230788828901611f35565b959894975092956102a001359392505050565b600181811c9082168061232e57607f821691505b60208210810361234e57634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261239a60c0840182611d86565b9695505050505050565b6000602082840312156123b657600080fd5b5051919050565b8181038181111561177957634e487b7160e01b600052601160045260246000fd5b81516001600160a01b031681526102408101602083015161240a60208401826001600160a01b03169052565b50604083015161242560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161248b828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e0850152604081015161020085015260608101516102208501526120a8565b80516001600160a01b03168252602081015161251b60208401826001600160a01b03169052565b50604081015161253660408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516125a8828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526118b4565b60006102c061262083886124f4565b6001600160a01b038616610260840152610280830181905261264481840186611d86565b915050826102a083015295945050505050565b60006020828403121561266957600080fd5b8151611bec81611dc5565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103808083526126a98184018e611d86565b90506126b8602084018d6124f4565b6001600160a01b038b81166102808501528382036102a08501526126dc828c611d86565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b600067ffffffffffffffff82111561273257612732611e3b565b5060051b60200190565b600082601f83011261274d57600080fd5b8151602061276261275d83612718565b611e9e565b8083825260208201915060208460051b87010193508684111561278457600080fd5b602086015b848110156127a05780518352918301918301612789565b509695505050505050565b6000806000606084860312156127c057600080fd5b835167ffffffffffffffff808211156127d857600080fd5b818601915086601f8301126127ec57600080fd5b815160206127fc61275d83612718565b82815260059290921b8401810191818101908a84111561281b57600080fd5b8286015b84811015612853578051868111156128375760008081fd5b6128458d86838b010161273c565b84525091830191830161281f565b509189015191975090935050508082111561286d57600080fd5b5061287a8682870161273c565b925050604084015190509250925092565b6000826128a857634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156128bf57600080fd5b8151611bec81611ecf565b600082516128dc818460208701611d62565b919091019291505056fe457a455448487970657264726976654465706c6f796572436f6f7264696e61746f72a264697066735822122084e9c6ab6f167db21467fd1d2ce989110de5d0dcb3802f64eee5cb37614def5564736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(address,address,address,uint256)": "5111bea2",
        "convertToShares(address,address,address,uint256)": "079554e7",
        "coreDeployer()": "c83e1f51",
        "deployHyperdrive(bytes32,string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "e990eba8",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "c1510618",
        "deployments(bytes32)": "37404017",
        "ezETH()": "13a73c78",
        "factory()": "c45a0155",
        "getNumberOfTargets()": "e99be396",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "renzoOracle()": "892866a4",
        "restakeManager()": "ff0996b5",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
