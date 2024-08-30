export const StETHHyperdriveDeployerCoordinator = {
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
                    "name": "_lido",
                    "type": "address",
                    "internalType": "contract ILido"
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
            "name": "lido",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILido"
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
        }
    ],
    bytecode: '0x6101806040523480156200001257600080fd5b50604051620026f1380380620026f18339810160408190526200003591620000c9565b888888888888888860006200004b8982620002c5565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205281166101405291909116610160525062000391975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000c457600080fd5b919050565b60008060008060008060008060006101208a8c031215620000e957600080fd5b89516001600160401b03808211156200010157600080fd5b818c0191508c601f8301126200011657600080fd5b8151818111156200012b576200012b62000096565b604051601f8201601f19908116603f0116810190838211818310171562000156576200015662000096565b81604052828152602093508f848487010111156200017357600080fd5b600091505b8282101562000197578482018401518183018501529083019062000178565b6000848483010152809d50505050620001b2818d01620000ac565b99505050620001c460408b01620000ac565b9650620001d460608b01620000ac565b9550620001e460808b01620000ac565b9450620001f460a08b01620000ac565b93506200020460c08b01620000ac565b92506200021460e08b01620000ac565b9150620002256101008b01620000ac565b90509295985092959850929598565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c0576000816000526020600020601f850160051c810160208610156200029b5750805b601f850160051c820191505b81811015620002bc57828155600101620002a7565b5050505b505050565b81516001600160401b03811115620002e157620002e162000096565b620002f981620002f2845462000234565b8462000270565b602080601f831160018114620003315760008415620003185750858301515b600019600386901b1c1916600185901b178555620002bc565b600085815260208120601f198616915b82811015620003625788860151825594840194600190910190840162000341565b5085821015620003815787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516101605161227c6200047560003960008181610181015281816112de0152818161137601526114d701526000818161033c0152610de40152600081816103a40152610cae01526000818161040c0152610b780152600081816103700152610a420152600081816103d80152610834015260008181610494015261113c015260008181610460015281816105a1015281816107580152818161086401528181610a7201528181610ba801528181610cde01528181610e1401528181610f0b015261116d015261227c6000f3fe6080604052600436106101095760003560e01c8063a085fa3011610095578063c151061811610064578063c15106181461042e578063c45a01551461044e578063c83e1f5114610482578063e990eba8146104b6578063e99be396146104d657600080fd5b8063a085fa301461035e578063aa8cd6c414610392578063ab71905f146103c6578063b6cb1118146103fa57600080fd5b8063251f6c42116100dc578063251f6c42146101bb57806337404017146101db5780633e5541f1146102da57806354fd4d50146102fa578063966ecd1c1461032a57600080fd5b806304baa00b1461010e57806306fdde031461013957806316abfc701461014e57806323509a2d1461016f575b600080fd5b34801561011a57600080fd5b506101236104ea565b60405161013091906118ad565b60405180910390f35b34801561014557600080fd5b50610123610506565b61016161015c3660046119ef565b610594565b604051908152602001610130565b34801561017b57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610130565b3480156101c757600080fd5b506101616101d6366004611ab4565b61072a565b3480156101e757600080fd5b506102cd6101f6366004611ae0565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101309190611af9565b3480156102e657600080fd5b506101616102f5366004611ab4565b61073f565b34801561030657600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610123565b34801561033657600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561036a57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561039e57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d257600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561040657600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561043a57600080fd5b506101a3610449366004611cd1565b61074b565b34801561045a57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561048e57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b3480156104c257600080fd5b506101a36104d1366004611d3f565b610efe565b3480156104e257600080fd5b506005610161565b6040518060600160405280602281526020016122256022913981565b6000805461051390611de0565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90611de0565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105df57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260409020600301546001600160a01b0316806106185760405163952b05cb60e01b815260040160405180910390fd5b60006106268288888761127b565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161065993929190611e1a565b60206040518083038185885af1158015610677573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061069c9190611e6a565b925060006106aa8234611e83565b9050801561071d57604051600090339083908381818185875af1925050503d80600081146106f4576040519150601f19603f3d011682016040523d82523d6000602084013e6106f9565b606091505b505090508061071b576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b600061073683836113f0565b90505b92915050565b6000610736838361145d565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461079657604051634084351160e01b815260040160405180910390fd5b60008681526001602052604081209084900361094e578054156107cc57604051633be1b34d60e11b815260040160405180910390fd5b6107d6868661148d565b60006107e28787611585565b90506000876040516020016107f79190611ea4565b60405160208183030381529060405280519060200120905060008780519060200120905060006108268a61159d565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016108a0929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108d594939291906120d7565b6020604051808303816000875af11580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610918919061211d565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610721565b6000878152600160205260409020548061097b5760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161098d9190611ea4565b60405160208183030381529060405280519060200120146109c15760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109eb57604051631a3272d160e31b815260040160405180910390fd5b6109f5878761148d565b6000610a008861159d565b6002840154608082015290506001869003610b435760058301546001600160a01b031615610a405760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610aa793929190612141565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610adc94939291906120d7565b6020604051808303816000875af1158015610afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1f919061211d565b6005840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600203610c795760068301546001600160a01b031615610b765760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610bdd93929190612141565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c1294939291906120d7565b6020604051808303816000875af1158015610c31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c55919061211d565b6006840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600303610daf5760078301546001600160a01b031615610cac5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d1393929190612141565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d4894939291906120d7565b6020604051808303816000875af1158015610d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8b919061211d565b6007840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600403610ee55760088301546001600160a01b031615610de25760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e4993929190612141565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e7e94939291906120d7565b6020604051808303816000875af1158015610e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec1919061211d565b6008840180546001600160a01b0319166001600160a01b038316179055935061071d565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f4957604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610ff257604051632c95caeb60e01b815260040160405180910390fd5b80516110115760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611036575060a08101516001600160a01b0316155b8061104c575060c08101516001600160a01b0316155b80611062575060e08101516001600160a01b0316155b8061107957506101008101516001600160a01b0316155b156110975760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110aa908790602001611ea4565b60405160208183030381529060405280519060200120146110de5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461110957604051631a3272d160e31b815260040160405180910390fd5b611113858561148d565b600061111e8661159d565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d6040516020016111c3929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111fe9a99989796959493929190612162565b6020604051808303816000875af115801561121d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611241919061211d565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b60008160200151156112af57823410156112a85760405163044044a560e21b815260040160405180910390fd5b50816113e8565b604051636d78045960e01b81526001600160a01b038581166004830152306024830152604482018590526000917f000000000000000000000000000000000000000000000000000000000000000090911690636d780459906064016020604051808303816000875af1158015611329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134d9190611e6a565b60405163095ea7b360e01b81526001600160a01b038881166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af11580156113c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e591906121e5565b50505b949350505050565b604051630f451f7160e31b8152600481018290526000906001600160a01b03841690637a28fb88906024015b602060405180830381865afa158015611439573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190611e6a565b604051631920845160e01b8152600481018290526000906001600160a01b0384169063192084519060240161141c565b611497828261166b565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146114d557604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b03161461152b5760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c6800014611556576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c6800014611581576040516318c9522360e11b815260040160405180910390fd5b5050565b60006107368360200151670de0b6b3a764000061072a565b6115a5611780565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6103e882608001511015611692576040516349db44f560e01b815260040160405180910390fd5b8161010001516000036116b857604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806116e257508161010001518260e001516116df9190612202565b15155b156117005760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a7640000108061172c5750670de0b6b3a7640000826101c0015160200151115b806117475750670de0b6b3a7640000826101c0015160400151115b806117625750670de0b6b3a7640000826101c0015160600151115b15611581576040516322f72cc360e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016118626040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000815180845260005b8181101561188d57602081850181015186830182015201611871565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107366020830184611867565b6001600160a01b03811681146118d557600080fd5b50565b80356118e3816118c0565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611921576119216118e8565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611921576119216118e8565b80151581146118d557600080fd5b600067ffffffffffffffff80841115611974576119746118e8565b604051601f8501601f19908116603f0116810190828211818310171561199c5761199c6118e8565b816040528093508581528686860111156119b557600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126119e057600080fd5b61073683833560208501611959565b600080600080600060a08688031215611a0757600080fd5b853594506020860135611a19816118c0565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611a4457600080fd5b908701906060828a031215611a5857600080fd5b611a606118fe565b8235611a6b816118c0565b81526020830135611a7b8161194b565b6020820152604083013582811115611a9257600080fd5b611a9e8b8286016119cf565b6040830152508093505050509295509295909350565b60008060408385031215611ac757600080fd5b8235611ad2816118c0565b946020939093013593505050565b600060208284031215611af257600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611b8857600080fd5b6040516080810181811067ffffffffffffffff82111715611bab57611bab6118e8565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611bef57600080fd5b611bf7611927565b9050611c02826118d8565b8152611c10602083016118d8565b6020820152611c21604083016118d8565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611c7e8184016118d8565b90820152610160611c908382016118d8565b90820152610180611ca28382016118d8565b908201526101a0611cb48382016118d8565b908201526101c0611cc784848301611b76565b9082015292915050565b60008060008060006102c08688031215611cea57600080fd5b85359450611cfb8760208801611bdc565b935061026086013567ffffffffffffffff811115611d1857600080fd5b611d24888289016119cf565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611d5857600080fd5b85359450602086013567ffffffffffffffff80821115611d7757600080fd5b818801915088601f830112611d8b57600080fd5b611d9a89833560208501611959565b9550611da98960408a01611bdc565b9450610280880135915080821115611dc057600080fd5b50611dcd888289016119cf565b959894975092956102a001359392505050565b600181811c90821680611df457607f821691505b602082108103611e1457634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611e6060c0840182611867565b9695505050505050565b600060208284031215611e7c57600080fd5b5051919050565b8181038181111561073957634e487b7160e01b600052601160045260246000fd5b81516001600160a01b0316815261024081016020830151611ed060208401826001600160a01b03169052565b506040830151611eeb60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151611f51828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611b6e565b80516001600160a01b031682526020810151611fe160208401826001600160a01b03169052565b506040810151611ffc60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161206e828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b60006102c06120e68388611fba565b6001600160a01b038616610260840152610280830181905261210a81840186611867565b915050826102a083015295945050505050565b60006020828403121561212f57600080fd5b815161213a816118c0565b9392505050565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103808083526121768184018e611867565b9050612185602084018d611fba565b6001600160a01b038b81166102808501528382036102a08501526121a9828c611867565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b6000602082840312156121f757600080fd5b815161213a8161194b565b60008261221f57634e487b7160e01b600052601260045260246000fd5b50069056fe5374455448487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220a19d1019c49fcd1dbd143e5c12d719a41a1f7283e0842ad48f35da8b0e10a68664736f6c63430008160033',
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
        "lido()": "23509a2d",
        "name()": "06fdde03",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
