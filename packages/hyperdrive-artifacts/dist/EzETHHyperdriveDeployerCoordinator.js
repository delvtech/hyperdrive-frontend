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
    bytecode: '0x6101c06040523480156200001257600080fd5b5060405162002de238038062002de28339810160408190526200003591620001ca565b888888888888888860006200004b8982620003c4565b506001600160a01b0396871660805294861660a05292851660c05290841660e052831661010052821661012052811661014052821661016081905260408051630274e78f60e31b815290519192506313a73c789160048083019260209291908290030181865afa158015620000c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ea919062000490565b6001600160a01b03166101a0816001600160a01b031681525050610160516001600160a01b031663892866a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000146573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016c919062000490565b6001600160a01b03166101805250620004b7975050505050505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620001b557600080fd5b50565b8051620001c5816200019f565b919050565b60008060008060008060008060006101208a8c031215620001ea57600080fd5b89516001600160401b03808211156200020257600080fd5b818c0191508c601f8301126200021757600080fd5b8151818111156200022c576200022c62000189565b604051601f8201601f19908116603f0116810190838211818310171562000257576200025762000189565b81604052828152602093508f848487010111156200027457600080fd5b600091505b8282101562000298578482018401518183018501529083019062000279565b6000848483010152809d50505050620002b3818d01620001b8565b99505050620002c560408b01620001b8565b9650620002d560608b01620001b8565b9550620002e560808b01620001b8565b9450620002f560a08b01620001b8565b93506200030560c08b01620001b8565b92506200031560e08b01620001b8565b9150620003266101008b01620001b8565b90509295985092959850929598565b600181811c908216806200034a57607f821691505b6020821081036200036b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003bf57600081815260208120601f850160051c810160208610156200039a5750805b601f850160051c820191505b81811015620003bb57828155600101620003a6565b5050505b505050565b81516001600160401b03811115620003e057620003e062000189565b620003f881620003f1845462000335565b8462000371565b602080601f831160018114620004305760008415620004175750858301515b600019600386901b1c1916600185901b178555620003bb565b600085815260208120601f198616915b82811015620004615788860151825594840194600190910190840162000440565b5085821015620004805787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620004a357600080fd5b8151620004b0816200019f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a05161284d62000595600039600081816101a4015281816113df01528181611414015261159e015260008181610352015261165201526000818161054601526116730152600081816103860152610de30152600081816103ee0152610ccf0152600081816104560152610bbb0152600081816103ba0152610aa701526000818161042201526108bc0152600081816104de01526111180152600081816104aa01528181610636015281816107e10152610ee8015261284d6000f3fe60806040526004361061011f5760003560e01c8063a085fa30116100a0578063c45a015511610064578063c45a015514610498578063c83e1f51146104cc578063e990eba814610500578063e99be39614610520578063ff0996b51461053457600080fd5b8063a085fa30146103a8578063aa8cd6c4146103dc578063ab71905f14610410578063b6cb111814610444578063c15106181461047857600080fd5b806337404017116100e757806337404017146101f15780635111bea2146102f057806354fd4d5014610310578063892866a414610340578063966ecd1c1461037457600080fd5b806304baa00b1461012457806306fdde031461014f578063079554e71461016457806313a73c781461019257806316abfc70146101de575b600080fd5b34801561013057600080fd5b50610139610568565b6040516101469190611cde565b60405180910390f35b34801561015b57600080fd5b50610139610584565b34801561017057600080fd5b5061018461017f366004611d16565b610612565b604051908152602001610146565b34801561019e57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610146565b6101846101ec366004611e81565b610629565b3480156101fd57600080fd5b506102e361020c366004611f46565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101469190611f5f565b3480156102fc57600080fd5b5061018461030b366004611d16565b6107c6565b34801561031c57600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610139565b34801561034c57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561038057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b457600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e857600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561041c57600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561045057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561048457600080fd5b506101c6610493366004612137565b6107d4565b3480156104a457600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d857600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b34801561050c57600080fd5b506101c661051b3660046121a5565b610edb565b34801561052c57600080fd5b506005610184565b34801561054057600080fd5b506101c67f000000000000000000000000000000000000000000000000000000000000000081565b6040518060600160405280602281526020016127f66022913981565b6000805461059190612246565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd90612246565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b505050505081565b600061062085858585611235565b95945050505050565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461067457604051634084351160e01b815260040160405180910390fd5b61067c61138c565b6000868152600160205260409020600301546001600160a01b0316806106b55760405163952b05cb60e01b815260040160405180910390fd5b60006106c3828888876113ad565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106f693929190612280565b60206040518083038185885af1158015610714573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061073991906122d0565b9250600061074782346122e9565b905080156107ba57604051600090339083908381818185875af1925050503d8060008114610791576040519150601f19603f3d011682016040523d82523d6000602084013e610796565b606091505b50509050806107b8576040516312171d8360e31b815260040160405180910390fd5b505b50505095945050505050565b600061062085858585611446565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461081f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109b45780541561085557604051633be1b34d60e11b815260040160405180910390fd5b61085e86611555565b600061086a878761164b565b905060008760405160200161087f919061230a565b60405160208183030381529060405280519060200120905060008780519060200120905060006108ae8a6116ae565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b604051602001610907929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161093b9392919061253d565b6020604051808303816000875af115801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e9190612571565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610620565b600087815260016020526040902054806109e15760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109f3919061230a565b6040516020818303038152906040528051906020012014610a275760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a5157604051631a3272d160e31b815260040160405180910390fd5b610a5a87611555565b6000610a65886116ae565b6002840154608082015290506001869003610b865760058301546001600160a01b031615610aa55760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610aeb9392919061258e565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610b1f9392919061253d565b6020604051808303816000875af1158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b629190612571565b6005840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600203610c9a5760068301546001600160a01b031615610bb95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610bff9392919061258e565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610c339392919061253d565b6020604051808303816000875af1158015610c52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c769190612571565b6006840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600303610dae5760078301546001600160a01b031615610ccd5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610d139392919061258e565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610d479392919061253d565b6020604051808303816000875af1158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a9190612571565b6007840180546001600160a01b0319166001600160a01b03831617905593506107ba565b85600403610ec25760088301546001600160a01b031615610de15760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610e279392919061258e565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610e5b9392919061253d565b6020604051808303816000875af1158015610e7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9e9190612571565b6008840180546001600160a01b0319166001600160a01b03831617905593506107ba565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f2657604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fcf57604051632c95caeb60e01b815260040160405180910390fd5b8051610fee5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611013575060a08101516001600160a01b0316155b80611029575060c08101516001600160a01b0316155b8061103f575060e08101516001600160a01b0316155b8061105657506101008101516001600160a01b0316155b156110745760405163e97cc2bf60e01b815260040160405180910390fd5b805160405161108790879060200161230a565b60405160208183030381529060405280519060200120146110bb5760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110e657604051631a3272d160e31b815260040160405180910390fd5b6110ef85611555565b60006110fa866116ae565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c60405160200161117e929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b81526004016111b8999897969594939291906125af565b6020604051808303816000875af11580156111d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111fb9190612571565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611276573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261129e91908101906126ba565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130691906122d0565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064015b602060405180830381865afa15801561135d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138191906122d0565b979650505050505050565b34156113ab57604051631574f9f360e01b815260040160405180910390fd5b565b60008160200151156113d25760405163350b944160e11b815260040160405180910390fd5b6114076001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685308661177c565b61143b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686856117e9565b506000949350505050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611487573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114af91908101906126ba565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151791906122d0565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401611340565b61155e81611879565b80516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461159c57604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b0316146115f25760405163073f739d60e51b815260040160405180910390fd5b806080015166038d7ea4c680001461161d576040516349db44f560e01b815260040160405180910390fd5b8060a0015166038d7ea4c6800014611648576040516318c9522360e11b815260040160405180910390fd5b50565b60006116a57f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008560200151670de0b6b3a76400006107c6565b90505b92915050565b6116b6611ba7565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526117e39186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061198e565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261183a84826119fb565b6117e3576040516001600160a01b0384811660248301526000604483015261186f91869182169063095ea7b3906064016117b1565b6117e3848261198e565b6103e8816080015110156118a0576040516349db44f560e01b815260040160405180910390fd5b8061010001516000036118c657604051635428734d60e01b815260040160405180910390fd5b8061010001518160e0015110806118f057508061010001518160e001516118ed919061279a565b15155b1561190e5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a7640000108061193a5750670de0b6b3a7640000816101c0015160200151115b806119555750670de0b6b3a7640000816101c0015160400151115b806119705750670de0b6b3a7640000816101c0015160600151115b15611648576040516322f72cc360e11b815260040160405180910390fd5b60006119a36001600160a01b03841683611a9e565b905080516000141580156119c85750808060200190518101906119c691906127bc565b155b156119f657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b031684604051611a1891906127d9565b6000604051808303816000865af19150503d8060008114611a55576040519150601f19603f3d011682016040523d82523d6000602084013e611a5a565b606091505b5091509150818015611a84575080511580611a84575080806020019051810190611a8491906127bc565b80156106205750505050506001600160a01b03163b151590565b60606116a58383600084600080856001600160a01b03168486604051611ac491906127d9565b60006040518083038185875af1925050503d8060008114611b01576040519150601f19603f3d011682016040523d82523d6000602084013e611b06565b606091505b5091509150611b16868383611b22565b925050505b9392505050565b606082611b3757611b3282611b7e565b611b1b565b8151158015611b4e57506001600160a01b0384163b155b15611b7757604051639996b31560e01b81526001600160a01b03851660048201526024016119ed565b5080611b1b565b805115611b8e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611c896040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611ca9578181015183820152602001611c91565b50506000910152565b60008151808452611cca816020860160208601611c8e565b601f01601f19169290920160200192915050565b6020815260006116a56020830184611cb2565b6001600160a01b038116811461164857600080fd5b8035611d1181611cf1565b919050565b60008060008060808587031215611d2c57600080fd5b8435611d3781611cf1565b93506020850135611d4781611cf1565b92506040850135611d5781611cf1565b9396929550929360600135925050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611da057611da0611d67565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611da057611da0611d67565b604051601f8201601f1916810167ffffffffffffffff81118282101715611df357611df3611d67565b604052919050565b801515811461164857600080fd5b600067ffffffffffffffff831115611e2357611e23611d67565b611e36601f8401601f1916602001611dca565b9050828152838383011115611e4a57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611e7257600080fd5b6116a583833560208501611e09565b600080600080600060a08688031215611e9957600080fd5b853594506020860135611eab81611cf1565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611ed657600080fd5b908701906060828a031215611eea57600080fd5b611ef2611d7d565b8235611efd81611cf1565b81526020830135611f0d81611dfb565b6020820152604083013582811115611f2457600080fd5b611f308b828601611e61565b6040830152508093505050509295509295909350565b600060208284031215611f5857600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611fee57600080fd5b6040516080810181811067ffffffffffffffff8211171561201157612011611d67565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610240828403121561205557600080fd5b61205d611da6565b905061206882611d06565b815261207660208301611d06565b602082015261208760408301611d06565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101406120e4818401611d06565b908201526101606120f6838201611d06565b90820152610180612108838201611d06565b908201526101a061211a838201611d06565b908201526101c061212d84848301611fdc565b9082015292915050565b60008060008060006102c0868803121561215057600080fd5b853594506121618760208801612042565b935061026086013567ffffffffffffffff81111561217e57600080fd5b61218a88828901611e61565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c086880312156121be57600080fd5b85359450602086013567ffffffffffffffff808211156121dd57600080fd5b818801915088601f8301126121f157600080fd5b61220089833560208501611e09565b955061220f8960408a01612042565b945061028088013591508082111561222657600080fd5b5061223388828901611e61565b959894975092956102a001359392505050565b600181811c9082168061225a57607f821691505b60208210810361227a57634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a08401526122c660c0840182611cb2565b9695505050505050565b6000602082840312156122e257600080fd5b5051919050565b818103818111156116a857634e487b7160e01b600052601160045260246000fd5b81516001600160a01b031681526102408101602083015161233660208401826001600160a01b03169052565b50604083015161235160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516123b7828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611fd4565b80516001600160a01b03168252602081015161244760208401826001600160a01b03169052565b50604081015161246260408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516124d4828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526117e3565b60006102a061254c8387612420565b8061026084015261255f81840186611cb2565b91505082610280830152949350505050565b60006020828403121561258357600080fd5b8151611b1b81611cf1565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526125c38184018d611cb2565b90506125d2602084018c612420565b8281036102808401526125e5818b611cb2565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b600067ffffffffffffffff82111561264557612645611d67565b5060051b60200190565b600082601f83011261266057600080fd5b815160206126756126708361262b565b611dca565b82815260059290921b8401810191818101908684111561269457600080fd5b8286015b848110156126af5780518352918301918301612698565b509695505050505050565b6000806000606084860312156126cf57600080fd5b835167ffffffffffffffff808211156126e757600080fd5b818601915086601f8301126126fb57600080fd5b8151602061270b6126708361262b565b82815260059290921b8401810191818101908a84111561272a57600080fd5b8286015b84811015612762578051868111156127465760008081fd5b6127548d86838b010161264f565b84525091830191830161272e565b509189015191975090935050508082111561277c57600080fd5b506127898682870161264f565b925050604084015190509250925092565b6000826127b757634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156127ce57600080fd5b8151611b1b81611dfb565b600082516127eb818460208701611c8e565b919091019291505056fe457a455448487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220a30d23c330d6a458bfd14da4ca1a031dc1fffe648132196994e161019c0f493564736f6c63430008140033',
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
