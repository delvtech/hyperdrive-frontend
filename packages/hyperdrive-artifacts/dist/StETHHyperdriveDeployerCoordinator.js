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
    bytecode: '0x6101806040523480156200001257600080fd5b50604051620025d8380380620025d88339810160408190526200003591620000c9565b888888888888888860006200004b8982620002c3565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120528116610140529190911661016052506200038f975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000c457600080fd5b919050565b60008060008060008060008060006101208a8c031215620000e957600080fd5b89516001600160401b03808211156200010157600080fd5b818c0191508c601f8301126200011657600080fd5b8151818111156200012b576200012b62000096565b604051601f8201601f19908116603f0116810190838211818310171562000156576200015662000096565b81604052828152602093508f848487010111156200017357600080fd5b600091505b8282101562000197578482018401518183018501529083019062000178565b6000848483010152809d50505050620001b2818d01620000ac565b99505050620001c460408b01620000ac565b9650620001d460608b01620000ac565b9550620001e460808b01620000ac565b9450620001f460a08b01620000ac565b93506200020460c08b01620000ac565b92506200021460e08b01620000ac565b9150620002256101008b01620000ac565b90509295985092959850929598565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002be57600081815260208120601f850160051c81016020861015620002995750805b601f850160051c820191505b81811015620002ba57828155600101620002a5565b5050505b505050565b81516001600160401b03811115620002df57620002df62000096565b620002f781620002f0845462000234565b8462000270565b602080601f8311600181146200032f5760008415620003165750858301515b600019600386901b1c1916600185901b178555620002ba565b600085815260208120601f198616915b8281101562000360578886015182559484019460019091019084016200033f565b50858210156200037f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516101605161218f62000449600039600081816101810152818161120f015281816112a7015261140701526000818161033c0152610d5a0152600081816103a40152610c4601526000818161040c0152610b320152600081816103700152610a1e0152600081816103d80152610833015260008181610494015261108f015260008181610460015281816105a1015281816107580152610e5f015261218f6000f3fe6080604052600436106101095760003560e01c8063a085fa3011610095578063c151061811610064578063c15106181461042e578063c45a01551461044e578063c83e1f5114610482578063e990eba8146104b6578063e99be396146104d657600080fd5b8063a085fa301461035e578063aa8cd6c414610392578063ab71905f146103c6578063b6cb1118146103fa57600080fd5b8063251f6c42116100dc578063251f6c42146101bb57806337404017146101db5780633e5541f1146102da57806354fd4d50146102fa578063966ecd1c1461032a57600080fd5b806304baa00b1461010e57806306fdde031461013957806316abfc701461014e57806323509a2d1461016f575b600080fd5b34801561011a57600080fd5b506101236104ea565b60405161013091906117dc565b60405180910390f35b34801561014557600080fd5b50610123610506565b61016161015c36600461191b565b610594565b604051908152602001610130565b34801561017b57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610130565b3480156101c757600080fd5b506101616101d63660046119e0565b61072a565b3480156101e757600080fd5b506102cd6101f6366004611a0c565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101309190611a25565b3480156102e657600080fd5b506101616102f53660046119e0565b61073f565b34801561030657600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610123565b34801561033657600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561036a57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561039e57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d257600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561040657600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561043a57600080fd5b506101a3610449366004611bfd565b61074b565b34801561045a57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b34801561048e57600080fd5b506101a37f000000000000000000000000000000000000000000000000000000000000000081565b3480156104c257600080fd5b506101a36104d1366004611c6b565b610e52565b3480156104e257600080fd5b506005610161565b6040518060600160405280602281526020016121386022913981565b6000805461051390611d0c565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90611d0c565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105df57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260409020600301546001600160a01b0316806106185760405163952b05cb60e01b815260040160405180910390fd5b6000610626828888876111ac565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161065993929190611d46565b60206040518083038185885af1158015610677573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061069c9190611d96565b925060006106aa8234611daf565b9050801561071d57604051600090339083908381818185875af1925050503d80600081146106f4576040519150601f19603f3d011682016040523d82523d6000602084013e6106f9565b606091505b505090508061071b576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006107368383611321565b90505b92915050565b6000610736838361138e565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461079657604051634084351160e01b815260040160405180910390fd5b60008681526001602052604081209084900361092b578054156107cc57604051633be1b34d60e11b815260040160405180910390fd5b6107d5866113be565b60006107e187876114b4565b90506000876040516020016107f69190611dd0565b60405160208183030381529060405280519060200120905060008780519060200120905060006108258a6114cc565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b60405160200161087e929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b81526004016108b293929190612003565b6020604051808303816000875af11580156108d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f59190612037565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610721565b600087815260016020526040902054806109585760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161096a9190611dd0565b604051602081830303815290604052805190602001201461099e5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109c857604051631a3272d160e31b815260040160405180910390fd5b6109d1876113be565b60006109dc886114cc565b6002840154608082015290506001869003610afd5760058301546001600160a01b031615610a1c5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610a629392919061205b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610a9693929190612003565b6020604051808303816000875af1158015610ab5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad99190612037565b6005840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600203610c115760068301546001600160a01b031615610b305760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610b769392919061205b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610baa93929190612003565b6020604051808303816000875af1158015610bc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bed9190612037565b6006840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600303610d255760078301546001600160a01b031615610c445760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610c8a9392919061205b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610cbe93929190612003565b6020604051808303816000875af1158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d019190612037565b6007840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600403610e395760088301546001600160a01b031615610d585760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610d9e9392919061205b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610dd293929190612003565b6020604051808303816000875af1158015610df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e159190612037565b6008840180546001600160a01b0319166001600160a01b038316179055935061071d565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e9d57604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f4657604051632c95caeb60e01b815260040160405180910390fd5b8051610f655760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f8a575060a08101516001600160a01b0316155b80610fa0575060c08101516001600160a01b0316155b80610fb6575060e08101516001600160a01b0316155b80610fcd57506101008101516001600160a01b0316155b15610feb5760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610ffe908790602001611dd0565b60405160208183030381529060405280519060200120146110325760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461105d57604051631a3272d160e31b815260040160405180910390fd5b611066856113be565b6000611071866114cc565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c6040516020016110f5929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b815260040161112f9998979695949392919061207c565b6020604051808303816000875af115801561114e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111729190612037565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b60008160200151156111e057823410156111d95760405163044044a560e21b815260040160405180910390fd5b5081611319565b604051636d78045960e01b81526001600160a01b038581166004830152306024830152604482018590526000917f000000000000000000000000000000000000000000000000000000000000000090911690636d780459906064016020604051808303816000875af115801561125a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127e9190611d96565b60405163095ea7b360e01b81526001600160a01b038881166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af11580156112f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131691906120f8565b50505b949350505050565b604051630f451f7160e31b8152600481018290526000906001600160a01b03841690637a28fb88906024015b602060405180830381865afa15801561136a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107369190611d96565b604051631920845160e01b8152600481018290526000906001600160a01b0384169063192084519060240161134d565b6113c78161159a565b80516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461140557604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b03161461145b5760405163073f739d60e51b815260040160405180910390fd5b806080015166038d7ea4c6800014611486576040516349db44f560e01b815260040160405180910390fd5b8060a0015166038d7ea4c68000146114b1576040516318c9522360e11b815260040160405180910390fd5b50565b60006107368360200151670de0b6b3a764000061072a565b6114d46116af565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6103e8816080015110156115c1576040516349db44f560e01b815260040160405180910390fd5b8061010001516000036115e757604051635428734d60e01b815260040160405180910390fd5b8061010001518160e00151108061161157508061010001518160e0015161160e9190612115565b15155b1561162f5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a7640000108061165b5750670de0b6b3a7640000816101c0015160200151115b806116765750670de0b6b3a7640000816101c0015160400151115b806116915750670de0b6b3a7640000816101c0015160600151115b156114b1576040516322f72cc360e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016117916040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000815180845260005b818110156117bc576020818501810151868301820152016117a0565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107366020830184611796565b6001600160a01b03811681146114b157600080fd5b803561180f816117ef565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561184d5761184d611814565b60405290565b6040516101e0810167ffffffffffffffff8111828210171561184d5761184d611814565b80151581146114b157600080fd5b600067ffffffffffffffff808411156118a0576118a0611814565b604051601f8501601f19908116603f011681019082821181831017156118c8576118c8611814565b816040528093508581528686860111156118e157600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261190c57600080fd5b61073683833560208501611885565b600080600080600060a0868803121561193357600080fd5b853594506020860135611945816117ef565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561197057600080fd5b908701906060828a03121561198457600080fd5b61198c61182a565b8235611997816117ef565b815260208301356119a781611877565b60208201526040830135828111156119be57600080fd5b6119ca8b8286016118fb565b6040830152508093505050509295509295909350565b600080604083850312156119f357600080fd5b82356119fe816117ef565b946020939093013593505050565b600060208284031215611a1e57600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611ab457600080fd5b6040516080810181811067ffffffffffffffff82111715611ad757611ad7611814565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611b1b57600080fd5b611b23611853565b9050611b2e82611804565b8152611b3c60208301611804565b6020820152611b4d60408301611804565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611baa818401611804565b90820152610160611bbc838201611804565b90820152610180611bce838201611804565b908201526101a0611be0838201611804565b908201526101c0611bf384848301611aa2565b9082015292915050565b60008060008060006102c08688031215611c1657600080fd5b85359450611c278760208801611b08565b935061026086013567ffffffffffffffff811115611c4457600080fd5b611c50888289016118fb565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611c8457600080fd5b85359450602086013567ffffffffffffffff80821115611ca357600080fd5b818801915088601f830112611cb757600080fd5b611cc689833560208501611885565b9550611cd58960408a01611b08565b9450610280880135915080821115611cec57600080fd5b50611cf9888289016118fb565b959894975092956102a001359392505050565b600181811c90821680611d2057607f821691505b602082108103611d4057634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611d8c60c0840182611796565b9695505050505050565b600060208284031215611da857600080fd5b5051919050565b8181038181111561073957634e487b7160e01b600052601160045260246000fd5b81516001600160a01b0316815261024081016020830151611dfc60208401826001600160a01b03169052565b506040830151611e1760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151611e7d828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611a9a565b80516001600160a01b031682526020810151611f0d60208401826001600160a01b03169052565b506040810151611f2860408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151611f9a828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b60006102a06120128387611ee6565b8061026084015261202581840186611796565b91505082610280830152949350505050565b60006020828403121561204957600080fd5b8151612054816117ef565b9392505050565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526120908184018d611796565b905061209f602084018c611ee6565b8281036102808401526120b2818b611796565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b60006020828403121561210a57600080fd5b815161205481611877565b60008261213257634e487b7160e01b600052601260045260246000fd5b50069056fe5374455448487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212208464b9f488fe373a9c210bcf415b02f3af496ef55b762783fec3e471aa63bfea64736f6c63430008140033',
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
