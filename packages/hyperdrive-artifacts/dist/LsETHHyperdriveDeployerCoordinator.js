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
    bytecode: '0x6101806040523480156200001257600080fd5b506040516200292d3803806200292d8339810160408190526200003591620000c9565b888888888888888860006200004b8982620002c5565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205281166101405291909116610160525062000391975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000c457600080fd5b919050565b60008060008060008060008060006101208a8c031215620000e957600080fd5b89516001600160401b03808211156200010157600080fd5b818c0191508c601f8301126200011657600080fd5b8151818111156200012b576200012b62000096565b604051601f8201601f19908116603f0116810190838211818310171562000156576200015662000096565b81604052828152602093508f848487010111156200017357600080fd5b600091505b8282101562000197578482018401518183018501529083019062000178565b6000848483010152809d50505050620001b2818d01620000ac565b99505050620001c460408b01620000ac565b9650620001d460608b01620000ac565b9550620001e460808b01620000ac565b9450620001f460a08b01620000ac565b93506200020460c08b01620000ac565b92506200021460e08b01620000ac565b9150620002256101008b01620000ac565b90509295985092959850929598565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c0576000816000526020600020601f850160051c810160208610156200029b5750805b601f850160051c820191505b81811015620002bc57828155600101620002a7565b5050505b505050565b81516001600160401b03811115620002e157620002e162000096565b620002f981620002f2845462000234565b8462000270565b602080601f831160018114620003315760008415620003185750858301515b600019600386901b1c1916600185901b178555620002bc565b600085815260208120601f198616915b82811015620003625788860151825594840194600190910190840162000341565b5085821015620003815787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e051610100516101205161014051610160516124bf6200046e60003960008181611297015281816112cc01526113e50152600081816102e50152610dad0152600081816103650152610c770152600081816103cd0152610b410152600081816103310152610a0b01526000818161039901526107fd015260008181610455015261110501526000818161042101528181610562015281816107210152818161082d01528181610a3b01528181610b7101528181610ca701528181610ddd01528181610ed4015261113601526124bf6000f3fe6080604052600436106100fe5760003560e01c8063a085fa3011610095578063c151061811610064578063c1510618146103ef578063c45a01551461040f578063c83e1f5114610443578063e990eba814610477578063e99be3961461049757600080fd5b8063a085fa301461031f578063aa8cd6c414610353578063ab71905f14610387578063b6cb1118146103bb57600080fd5b806337404017116100d157806337404017146101845780633e5541f11461028357806354fd4d50146102a3578063966ecd1c146102d357600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc7014610143578063251f6c4214610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611ade565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611c1d565b610555565b604051908152602001610125565b34801561017057600080fd5b5061015661017f366004611ce2565b6106f3565b34801561019057600080fd5b5061027661019f366004611d0e565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611d27565b34801561028f57600080fd5b5061015661029e366004611ce2565b610708565b3480156102af57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610118565b3480156102df57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561032b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561035f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561039357600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c757600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103fb57600080fd5b5061030761040a366004611eff565b610714565b34801561041b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561044f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561048357600080fd5b50610307610492366004611f6d565b610ec7565b3480156104a357600080fd5b506005610156565b6040518060600160405280602281526020016124686022913981565b600080546104d49061200e565b80601f01602080910402602001604051908101604052809291908181526020018280546105009061200e565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a8611244565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef82888887611265565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161062293929190612048565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106659190612098565b9250600061067382346120b1565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006106ff83836112fe565b90505b92915050565b60006106ff838361136b565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109175780541561079557604051633be1b34d60e11b815260040160405180910390fd5b61079f868661139b565b60006107ab8787611493565b90506000876040516020016107c091906120d2565b60405160208183030381529060405280519060200120905060008780519060200120905060006107ef8a6114ab565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610869929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161089e9493929190612305565b6020604051808303816000875af11580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e1919061234b565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109445760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161095691906120d2565b604051602081830303815290604052805190602001201461098a5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109b457604051631a3272d160e31b815260040160405180910390fd5b6109be878761139b565b60006109c9886114ab565b6002840154608082015290506001869003610b0c5760058301546001600160a01b031615610a095760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a7093929190612368565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610aa59493929190612305565b6020604051808303816000875af1158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae8919061234b565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610c425760068301546001600160a01b031615610b3f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ba693929190612368565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610bdb9493929190612305565b6020604051808303816000875af1158015610bfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1e919061234b565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610d785760078301546001600160a01b031615610c755760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610cdc93929190612368565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d119493929190612305565b6020604051808303816000875af1158015610d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d54919061234b565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610eae5760088301546001600160a01b031615610dab5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e1293929190612368565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e479493929190612305565b6020604051808303816000875af1158015610e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8a919061234b565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f1257604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fbb57604051632c95caeb60e01b815260040160405180910390fd5b8051610fda5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610fff575060a08101516001600160a01b0316155b80611015575060c08101516001600160a01b0316155b8061102b575060e08101516001600160a01b0316155b8061104257506101008101516001600160a01b0316155b156110605760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110739087906020016120d2565b60405160208183030381529060405280519060200120146110a75760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110d257604051631a3272d160e31b815260040160405180910390fd5b6110dc858561139b565b60006110e7866114ab565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161118c929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111c79a99989796959493929190612389565b6020604051808303816000875af11580156111e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120a919061234b565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561126357604051631574f9f360e01b815260040160405180910390fd5b565b600081602001511561128a5760405163350b944160e11b815260040160405180910390fd5b6112bf6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016853086611579565b6112f36001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686856115e6565b506000949350505050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa158015611347573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190612098565b604051631e66865560e21b8152600481018290526000906001600160a01b0384169063799a19549060240161132a565b6113a58282611676565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146113e357604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b0316146114395760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c6800014611464576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c680001461148f576040516318c9522360e11b815260040160405180910390fd5b5050565b60006106ff8360200151670de0b6b3a76400006106f3565b6114b36119a7565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526115e09186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061178b565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261163784826117f8565b6115e0576040516001600160a01b0384811660248301526000604483015261166c91869182169063095ea7b3906064016115ae565b6115e0848261178b565b6103e88260800151101561169d576040516349db44f560e01b815260040160405180910390fd5b8161010001516000036116c357604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806116ed57508161010001518260e001516116ea919061240c565b15155b1561170b5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806117375750670de0b6b3a7640000826101c0015160200151115b806117525750670de0b6b3a7640000826101c0015160400151115b8061176d5750670de0b6b3a7640000826101c0015160600151115b1561148f576040516322f72cc360e11b815260040160405180910390fd5b60006117a06001600160a01b0384168361189b565b905080516000141580156117c55750808060200190518101906117c3919061242e565b155b156117f357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b031684604051611815919061244b565b6000604051808303816000865af19150503d8060008114611852576040519150601f19603f3d011682016040523d82523d6000602084013e611857565b606091505b5091509150818015611881575080511580611881575080806020019051810190611881919061242e565b80156106ea5750505050506001600160a01b03163b151590565b60606106ff8383600084600080856001600160a01b031684866040516118c1919061244b565b60006040518083038185875af1925050503d80600081146118fe576040519150601f19603f3d011682016040523d82523d6000602084013e611903565b606091505b509150915061191386838361191f565b925050505b9392505050565b6060826119345761192f8261197b565b611918565b815115801561194b57506001600160a01b0384163b155b1561197457604051639996b31560e01b81526001600160a01b03851660048201526024016117ea565b5080611918565b80511561198b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a896040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611aa9578181015183820152602001611a91565b50506000910152565b60008151808452611aca816020860160208601611a8e565b601f01601f19169290920160200192915050565b6020815260006106ff6020830184611ab2565b6001600160a01b03811681146119a457600080fd5b8035611b1181611af1565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611b4f57611b4f611b16565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611b4f57611b4f611b16565b80151581146119a457600080fd5b600067ffffffffffffffff80841115611ba257611ba2611b16565b604051601f8501601f19908116603f01168101908282118183101715611bca57611bca611b16565b81604052809350858152868686011115611be357600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611c0e57600080fd5b6106ff83833560208501611b87565b600080600080600060a08688031215611c3557600080fd5b853594506020860135611c4781611af1565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611c7257600080fd5b908701906060828a031215611c8657600080fd5b611c8e611b2c565b8235611c9981611af1565b81526020830135611ca981611b79565b6020820152604083013582811115611cc057600080fd5b611ccc8b828601611bfd565b6040830152508093505050509295509295909350565b60008060408385031215611cf557600080fd5b8235611d0081611af1565b946020939093013593505050565b600060208284031215611d2057600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611db657600080fd5b6040516080810181811067ffffffffffffffff82111715611dd957611dd9611b16565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611e1d57600080fd5b611e25611b55565b9050611e3082611b06565b8152611e3e60208301611b06565b6020820152611e4f60408301611b06565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611eac818401611b06565b90820152610160611ebe838201611b06565b90820152610180611ed0838201611b06565b908201526101a0611ee2838201611b06565b908201526101c0611ef584848301611da4565b9082015292915050565b60008060008060006102c08688031215611f1857600080fd5b85359450611f298760208801611e0a565b935061026086013567ffffffffffffffff811115611f4657600080fd5b611f5288828901611bfd565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611f8657600080fd5b85359450602086013567ffffffffffffffff80821115611fa557600080fd5b818801915088601f830112611fb957600080fd5b611fc889833560208501611b87565b9550611fd78960408a01611e0a565b9450610280880135915080821115611fee57600080fd5b50611ffb88828901611bfd565b959894975092956102a001359392505050565b600181811c9082168061202257607f821691505b60208210810361204257634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261208e60c0840182611ab2565b9695505050505050565b6000602082840312156120aa57600080fd5b5051919050565b8181038181111561070257634e487b7160e01b600052601160045260246000fd5b81516001600160a01b03168152610240810160208301516120fe60208401826001600160a01b03169052565b50604083015161211960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161217f828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611d9c565b80516001600160a01b03168252602081015161220f60208401826001600160a01b03169052565b50604081015161222a60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161229c828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526115e0565b60006102c061231483886121e8565b6001600160a01b038616610260840152610280830181905261233881840186611ab2565b915050826102a083015295945050505050565b60006020828403121561235d57600080fd5b815161191881611af1565b6001600160a01b039390931683526020830191909152604082015260600190565b600061038080835261239d8184018e611ab2565b90506123ac602084018d6121e8565b6001600160a01b038b81166102808501528382036102a08501526123d0828c611ab2565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b60008261242957634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561244057600080fd5b815161191881611b79565b6000825161245d818460208701611a8e565b919091019291505056fe4c73455448487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220ecf49375618f621d4f6173e8864b4c949b7429d656eb40d64063e976db580fe764736f6c63430008160033',
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
