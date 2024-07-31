export const LsETHHyperdriveDeployerCoordinator = {
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
                    "name": "_river",
                    "type": "address",
                    "internalType": "contract IRiverV1"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
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
    bytecode: '0x6101806040523480156200001257600080fd5b5060405162002814380380620028148339810160408190526200003591620000c9565b888888888888888860006200004b8982620002c3565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120528116610140529190911661016052506200038f975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000c457600080fd5b919050565b60008060008060008060008060006101208a8c031215620000e957600080fd5b89516001600160401b03808211156200010157600080fd5b818c0191508c601f8301126200011657600080fd5b8151818111156200012b576200012b62000096565b604051601f8201601f19908116603f0116810190838211818310171562000156576200015662000096565b81604052828152602093508f848487010111156200017357600080fd5b600091505b8282101562000197578482018401518183018501529083019062000178565b6000848483010152809d50505050620001b2818d01620000ac565b99505050620001c460408b01620000ac565b9650620001d460608b01620000ac565b9550620001e460808b01620000ac565b9450620001f460a08b01620000ac565b93506200020460c08b01620000ac565b92506200021460e08b01620000ac565b9150620002256101008b01620000ac565b90509295985092959850929598565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002be57600081815260208120601f850160051c81016020861015620002995750805b601f850160051c820191505b81811015620002ba57828155600101620002a5565b5050505b505050565b81516001600160401b03811115620002df57620002df62000096565b620002f781620002f0845462000234565b8462000270565b602080601f8311600181146200032f5760008415620003165750858301515b600019600386901b1c1916600185901b178555620002ba565b600085815260208120601f198616915b8281101562000360578886015182559484019460019091019084016200033f565b50858210156200037f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e051610100516101205161014051610160516123d262000442600039600081816111c8015281816111fd01526113150152600081816102e50152610d230152600081816103650152610c0f0152600081816103cd0152610afb01526000818161033101526109e701526000818161039901526107fc015260008181610455015261105801526000818161042101528181610562015281816107210152610e2801526123d26000f3fe6080604052600436106100fe5760003560e01c8063a085fa3011610095578063c151061811610064578063c1510618146103ef578063c45a01551461040f578063c83e1f5114610443578063e990eba814610477578063e99be3961461049757600080fd5b8063a085fa301461031f578063aa8cd6c414610353578063ab71905f14610387578063b6cb1118146103bb57600080fd5b806337404017116100d157806337404017146101845780633e5541f11461028357806354fd4d50146102a3578063966ecd1c146102d357600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc7014610143578063251f6c4214610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611a0a565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611b49565b610555565b604051908152602001610125565b34801561017057600080fd5b5061015661017f366004611c0e565b6106f3565b34801561019057600080fd5b5061027661019f366004611c3a565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611c53565b34801561028f57600080fd5b5061015661029e366004611c0e565b610708565b3480156102af57600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610118565b3480156102df57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561032b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561035f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561039357600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c757600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103fb57600080fd5b5061030761040a366004611e2b565b610714565b34801561041b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561044f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561048357600080fd5b50610307610492366004611e99565b610e1b565b3480156104a357600080fd5b506005610156565b60405180606001604052806022815260200161237b6022913981565b600080546104d490611f3a565b80601f016020809104026020016040519081016040528092919081815260200182805461050090611f3a565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a8611175565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef82888887611196565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161062293929190611f74565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106659190611fc4565b925060006106738234611fdd565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006106ff838361122f565b90505b92915050565b60006106ff838361129c565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036108f45780541561079557604051633be1b34d60e11b815260040160405180910390fd5b61079e866112cc565b60006107aa87876113c2565b90506000876040516020016107bf9190611ffe565b60405160208183030381529060405280519060200120905060008780519060200120905060006107ee8a6113da565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b604051602001610847929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161087b93929190612231565b6020604051808303816000875af115801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190612265565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109215760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109339190611ffe565b60405160208183030381529060405280519060200120146109675760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461099157604051631a3272d160e31b815260040160405180910390fd5b61099a876112cc565b60006109a5886113da565b6002840154608082015290506001869003610ac65760058301546001600160a01b0316156109e55760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610a2b93929190612282565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610a5f93929190612231565b6020604051808303816000875af1158015610a7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa29190612265565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610bda5760068301546001600160a01b031615610af95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610b3f93929190612282565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610b7393929190612231565b6020604051808303816000875af1158015610b92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb69190612265565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610cee5760078301546001600160a01b031615610c0d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610c5393929190612282565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610c8793929190612231565b6020604051808303816000875af1158015610ca6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cca9190612265565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610e025760088301546001600160a01b031615610d215760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610d6793929190612282565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610d9b93929190612231565b6020604051808303816000875af1158015610dba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dde9190612265565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6657604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f0f57604051632c95caeb60e01b815260040160405180910390fd5b8051610f2e5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f53575060a08101516001600160a01b0316155b80610f69575060c08101516001600160a01b0316155b80610f7f575060e08101516001600160a01b0316155b80610f9657506101008101516001600160a01b0316155b15610fb45760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610fc7908790602001611ffe565b6040516020818303038152906040528051906020012014610ffb5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461102657604051631a3272d160e31b815260040160405180910390fd5b61102f856112cc565b600061103a866113da565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c6040516020016110be929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b81526004016110f8999897969594939291906122a3565b6020604051808303816000875af1158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b9190612265565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561119457604051631574f9f360e01b815260040160405180910390fd5b565b60008160200151156111bb5760405163350b944160e11b815260040160405180910390fd5b6111f06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168530866114a8565b6112246001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168685611515565b506000949350505050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa158015611278573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190611fc4565b604051631e66865560e21b8152600481018290526000906001600160a01b0384169063799a19549060240161125b565b6112d5816115a5565b80516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461131357604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b0316146113695760405163073f739d60e51b815260040160405180910390fd5b806080015166038d7ea4c6800014611394576040516349db44f560e01b815260040160405180910390fd5b8060a0015166038d7ea4c68000146113bf576040516318c9522360e11b815260040160405180910390fd5b50565b60006106ff8360200151670de0b6b3a76400006106f3565b6113e26118d3565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b03848116602483015283811660448301526064820183905261150f9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506116ba565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526115668482611727565b61150f576040516001600160a01b0384811660248301526000604483015261159b91869182169063095ea7b3906064016114dd565b61150f84826116ba565b6103e8816080015110156115cc576040516349db44f560e01b815260040160405180910390fd5b8061010001516000036115f257604051635428734d60e01b815260040160405180910390fd5b8061010001518160e00151108061161c57508061010001518160e00151611619919061231f565b15155b1561163a5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a764000010806116665750670de0b6b3a7640000816101c0015160200151115b806116815750670de0b6b3a7640000816101c0015160400151115b8061169c5750670de0b6b3a7640000816101c0015160600151115b156113bf576040516322f72cc360e11b815260040160405180910390fd5b60006116cf6001600160a01b038416836117ca565b905080516000141580156116f45750808060200190518101906116f29190612341565b155b1561172257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b031684604051611744919061235e565b6000604051808303816000865af19150503d8060008114611781576040519150601f19603f3d011682016040523d82523d6000602084013e611786565b606091505b50915091508180156117b05750805115806117b05750808060200190518101906117b09190612341565b80156106ea5750505050506001600160a01b03163b151590565b60606106ff8383600084600080856001600160a01b031684866040516117f0919061235e565b60006040518083038185875af1925050503d806000811461182d576040519150601f19603f3d011682016040523d82523d6000602084013e611832565b606091505b509150915061184286838361184e565b925050505b9392505050565b6060826118635761185e826118aa565b611847565b815115801561187a57506001600160a01b0384163b155b156118a357604051639996b31560e01b81526001600160a01b0385166004820152602401611719565b5080611847565b8051156118ba5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016119b56040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b838110156119d55781810151838201526020016119bd565b50506000910152565b600081518084526119f68160208601602086016119ba565b601f01601f19169290920160200192915050565b6020815260006106ff60208301846119de565b6001600160a01b03811681146113bf57600080fd5b8035611a3d81611a1d565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611a7b57611a7b611a42565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611a7b57611a7b611a42565b80151581146113bf57600080fd5b600067ffffffffffffffff80841115611ace57611ace611a42565b604051601f8501601f19908116603f01168101908282118183101715611af657611af6611a42565b81604052809350858152868686011115611b0f57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611b3a57600080fd5b6106ff83833560208501611ab3565b600080600080600060a08688031215611b6157600080fd5b853594506020860135611b7381611a1d565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611b9e57600080fd5b908701906060828a031215611bb257600080fd5b611bba611a58565b8235611bc581611a1d565b81526020830135611bd581611aa5565b6020820152604083013582811115611bec57600080fd5b611bf88b828601611b29565b6040830152508093505050509295509295909350565b60008060408385031215611c2157600080fd5b8235611c2c81611a1d565b946020939093013593505050565b600060208284031215611c4c57600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611ce257600080fd5b6040516080810181811067ffffffffffffffff82111715611d0557611d05611a42565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611d4957600080fd5b611d51611a81565b9050611d5c82611a32565b8152611d6a60208301611a32565b6020820152611d7b60408301611a32565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611dd8818401611a32565b90820152610160611dea838201611a32565b90820152610180611dfc838201611a32565b908201526101a0611e0e838201611a32565b908201526101c0611e2184848301611cd0565b9082015292915050565b60008060008060006102c08688031215611e4457600080fd5b85359450611e558760208801611d36565b935061026086013567ffffffffffffffff811115611e7257600080fd5b611e7e88828901611b29565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611eb257600080fd5b85359450602086013567ffffffffffffffff80821115611ed157600080fd5b818801915088601f830112611ee557600080fd5b611ef489833560208501611ab3565b9550611f038960408a01611d36565b9450610280880135915080821115611f1a57600080fd5b50611f2788828901611b29565b959894975092956102a001359392505050565b600181811c90821680611f4e57607f821691505b602082108103611f6e57634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611fba60c08401826119de565b9695505050505050565b600060208284031215611fd657600080fd5b5051919050565b8181038181111561070257634e487b7160e01b600052601160045260246000fd5b81516001600160a01b031681526102408101602083015161202a60208401826001600160a01b03169052565b50604083015161204560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516120ab828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611cc8565b80516001600160a01b03168252602081015161213b60208401826001600160a01b03169052565b50604081015161215660408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516121c8828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e08082015180518285015260208101516102008501526040810151610220850152606081015161024085015261150f565b60006102a06122408387612114565b80610260840152612253818401866119de565b91505082610280830152949350505050565b60006020828403121561227757600080fd5b815161184781611a1d565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526122b78184018d6119de565b90506122c6602084018c612114565b8281036102808401526122d9818b6119de565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b60008261233c57634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561235357600080fd5b815161184781611aa5565b600082516123708184602087016119ba565b919091019291505056fe4c73455448487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220f6f3b5c7daa11ec935c0f310640d793fa8f5ae0f8d5c56b87fbfe1cf570ec17964736f6c63430008140033',
    methodIdentifiers: {
        "convertToBase(address,uint256)": "251f6c42",
        "convertToShares(address,uint256)": "3e5541f1",
        "coreDeployer()": "c83e1f51",
        "deployHyperdrive(bytes32,string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "e990eba8",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "c1510618",
        "deployments(bytes32)": "37404017",
        "factory()": "c45a0155",
        "getNumberOfTargets()": "e99be396",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
