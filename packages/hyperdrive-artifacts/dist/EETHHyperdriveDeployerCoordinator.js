export const EETHHyperdriveDeployerCoordinator = {
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
                    "name": "_liquidityPool",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
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
            "name": "liquidityPool",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILiquidityPool"
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
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6101806040523480156200001257600080fd5b50604051620028f2380380620028f28339810160408190526200003591620000c9565b888888888888888860006200004b8982620002c5565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205281166101405291909116610160525062000391975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000c457600080fd5b919050565b60008060008060008060008060006101208a8c031215620000e957600080fd5b89516001600160401b03808211156200010157600080fd5b818c0191508c601f8301126200011657600080fd5b8151818111156200012b576200012b62000096565b604051601f8201601f19908116603f0116810190838211818310171562000156576200015662000096565b81604052828152602093508f848487010111156200017357600080fd5b600091505b8282101562000197578482018401518183018501529083019062000178565b6000848483010152809d50505050620001b2818d01620000ac565b99505050620001c460408b01620000ac565b9650620001d460608b01620000ac565b9550620001e460808b01620000ac565b9450620001f460a08b01620000ac565b93506200020460c08b01620000ac565b92506200021460e08b01620000ac565b9150620002256101008b01620000ac565b90509295985092959850929598565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c0576000816000526020600020601f850160051c810160208610156200029b5750805b601f850160051c820191505b81811015620002bc57828155600101620002a7565b5050505b505050565b81516001600160401b03811115620002e157620002e162000096565b620002f981620002f2845462000234565b8462000270565b602080601f831160018114620003315760008415620003185750858301515b600019600386901b1c1916600185901b178555620002bc565b600085815260208120601f198616915b82811015620003625788860151825594840194600190910190840162000341565b5085821015620003815787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516101605161247d62000475600039600081816102f00152818161073101528181610767015261163901526000818161033c0152610e260152600081816103a40152610cf001526000818161040c0152610bba0152600081816103700152610a840152600081816103d80152610876015260008181610494015261117e015260008181610460015281816105a10152818161079a015281816108a601528181610ab401528181610bea01528181610d2001528181610e5601528181610f4d01526111af015261247d6000f3fe6080604052600436106101095760003560e01c8063a085fa3011610095578063c151061811610064578063c15106181461042e578063c45a01551461044e578063c83e1f5114610482578063e990eba8146104b6578063e99be396146104d657600080fd5b8063a085fa301461035e578063aa8cd6c414610392578063ab71905f146103c6578063b6cb1118146103fa57600080fd5b806337404017116100dc578063374040171461018f5780633e5541f11461028e57806354fd4d50146102ae578063665a11ca146102de578063966ecd1c1461032a57600080fd5b806304baa00b1461010e57806306fdde031461013957806316abfc701461014e578063251f6c421461016f575b600080fd5b34801561011a57600080fd5b506101236104ea565b6040516101309190611ab6565b60405180910390f35b34801561014557600080fd5b50610123610506565b61016161015c366004611bf8565b610594565b604051908152602001610130565b34801561017b57600080fd5b5061016161018a366004611cbd565b61072a565b34801561019b57600080fd5b506102816101aa366004611ce9565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101309190611d02565b34801561029a57600080fd5b506101616102a9366004611cbd565b610760565b3480156102ba57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610123565b3480156102ea57600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610130565b34801561033657600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b34801561036a57600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b34801561039e57600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d257600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b34801561040657600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b34801561043a57600080fd5b50610312610449366004611eda565b61078d565b34801561045a57600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b34801561048e57600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b3480156104c257600080fd5b506103126104d1366004611f48565b610f40565b3480156104e257600080fd5b506005610161565b6040518060600160405280602181526020016124276021913981565b6000805461051390611fe9565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90611fe9565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105df57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260409020600301546001600160a01b0316806106185760405163952b05cb60e01b815260040160405180910390fd5b6000610626828888876112bd565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161065993929190612023565b60206040518083038185885af1158015610677573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061069c9190612073565b925060006106aa823461208c565b9050801561071d57604051600090339083908381818185875af1925050503d80600081146106f4576040519150601f19603f3d011682016040523d82523d6000602084013e6106f9565b606091505b505090508061071b576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006107577f00000000000000000000000000000000000000000000000000000000000000008484611482565b90505b92915050565b60006107577f00000000000000000000000000000000000000000000000000000000000000008484611573565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107d857604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109905780541561080e57604051633be1b34d60e11b815260040160405180910390fd5b610818868661162d565b60006108248787611770565b905060008760405160200161083991906120ad565b60405160208183030381529060405280519060200120905060008780519060200120905060006108688a611788565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016108e2929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161091794939291906122e0565b6020604051808303816000875af1158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a9190612326565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610721565b600087815260016020526040902054806109bd5760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109cf91906120ad565b6040516020818303038152906040528051906020012014610a035760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a2d57604051631a3272d160e31b815260040160405180910390fd5b610a37878761162d565b6000610a4288611788565b6002840154608082015290506001869003610b855760058301546001600160a01b031615610a825760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ae993929190612343565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b1e94939291906122e0565b6020604051808303816000875af1158015610b3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b619190612326565b6005840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600203610cbb5760068301546001600160a01b031615610bb85760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c1f93929190612343565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c5494939291906122e0565b6020604051808303816000875af1158015610c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c979190612326565b6006840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600303610df15760078301546001600160a01b031615610cee5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d5593929190612343565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d8a94939291906122e0565b6020604051808303816000875af1158015610da9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcd9190612326565b6007840180546001600160a01b0319166001600160a01b038316179055935061071d565b85600403610f275760088301546001600160a01b031615610e245760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e8b93929190612343565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ec094939291906122e0565b6020604051808303816000875af1158015610edf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f039190612326565b6008840180546001600160a01b0319166001600160a01b038316179055935061071d565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f8b57604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561103457604051632c95caeb60e01b815260040160405180910390fd5b80516110535760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611078575060a08101516001600160a01b0316155b8061108e575060c08101516001600160a01b0316155b806110a4575060e08101516001600160a01b0316155b806110bb57506101008101516001600160a01b0316155b156110d95760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110ec9087906020016120ad565b60405160208183030381529060405280519060200120146111205760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461114b57604051631a3272d160e31b815260040160405180910390fd5b611155858561162d565b600061116086611788565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611205929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016112409a99989796959493929190612364565b6020604051808303816000875af115801561125f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112839190612326565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b60008160200151156112f157823410156112ea5760405163044044a560e21b815260040160405180910390fd5b508161147a565b6000856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611331573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113559190612326565b90506000611363828661072a565b6040516323b872dd60e01b81526001600160a01b038881166004830152306024830152604482018390529192506000918416906323b872dd906064016020604051808303816000875af11580156113be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e291906123e7565b905080611402576040516312171d8360e31b815260040160405180910390fd5b60405163095ea7b360e01b81526001600160a01b0389811660048301526024820184905284169063095ea7b3906044016020604051808303816000875af1158015611451573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147591906123e7565b505050505b949350505050565b600080836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e79190612073565b9050806000036114fb57600091505061156c565b611568856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115609190612073565b849083611856565b9150505b9392505050565b600080846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d89190612073565b9050806000036115ec57600091505061156c565b611568846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153c573d6000803e3d6000fd5b6116378282611874565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630de371e26040518163ffffffff1660e01b8152600401602060405180830381865afa158015611695573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b99190612326565b6001600160a01b031682602001516001600160a01b0316146116ee5760405163073f739d60e51b815260040160405180910390fd5b81516001600160a01b031661171657604051630722152560e11b815260040160405180910390fd5b816080015166038d7ea4c6800014611741576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c680001461176c576040516318c9522360e11b815260040160405180910390fd5b5050565b60006107578360200151670de0b6b3a764000061072a565b611790611989565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b600082600019048411830215820261186d57600080fd5b5091020490565b6103e88260800151101561189b576040516349db44f560e01b815260040160405180910390fd5b8161010001516000036118c157604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806118eb57508161010001518260e001516118e89190612404565b15155b156119095760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806119355750670de0b6b3a7640000826101c0015160200151115b806119505750670de0b6b3a7640000826101c0015160400151115b8061196b5750670de0b6b3a7640000826101c0015160600151115b1561176c576040516322f72cc360e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a6b6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6000815180845260005b81811015611a9657602081850181015186830182015201611a7a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006107576020830184611a70565b6001600160a01b0381168114611ade57600080fd5b50565b8035611aec81611ac9565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611b2a57611b2a611af1565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611b2a57611b2a611af1565b8015158114611ade57600080fd5b600067ffffffffffffffff80841115611b7d57611b7d611af1565b604051601f8501601f19908116603f01168101908282118183101715611ba557611ba5611af1565b81604052809350858152868686011115611bbe57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611be957600080fd5b61075783833560208501611b62565b600080600080600060a08688031215611c1057600080fd5b853594506020860135611c2281611ac9565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611c4d57600080fd5b908701906060828a031215611c6157600080fd5b611c69611b07565b8235611c7481611ac9565b81526020830135611c8481611b54565b6020820152604083013582811115611c9b57600080fd5b611ca78b828601611bd8565b6040830152508093505050509295509295909350565b60008060408385031215611cd057600080fd5b8235611cdb81611ac9565b946020939093013593505050565b600060208284031215611cfb57600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611d9157600080fd5b6040516080810181811067ffffffffffffffff82111715611db457611db4611af1565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611df857600080fd5b611e00611b30565b9050611e0b82611ae1565b8152611e1960208301611ae1565b6020820152611e2a60408301611ae1565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611e87818401611ae1565b90820152610160611e99838201611ae1565b90820152610180611eab838201611ae1565b908201526101a0611ebd838201611ae1565b908201526101c0611ed084848301611d7f565b9082015292915050565b60008060008060006102c08688031215611ef357600080fd5b85359450611f048760208801611de5565b935061026086013567ffffffffffffffff811115611f2157600080fd5b611f2d88828901611bd8565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611f6157600080fd5b85359450602086013567ffffffffffffffff80821115611f8057600080fd5b818801915088601f830112611f9457600080fd5b611fa389833560208501611b62565b9550611fb28960408a01611de5565b9450610280880135915080821115611fc957600080fd5b50611fd688828901611bd8565b959894975092956102a001359392505050565b600181811c90821680611ffd57607f821691505b60208210810361201d57634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261206960c0840182611a70565b9695505050505050565b60006020828403121561208557600080fd5b5051919050565b8181038181111561075a57634e487b7160e01b600052601160045260246000fd5b81516001600160a01b03168152610240810160208301516120d960208401826001600160a01b03169052565b5060408301516120f460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161215a828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611d77565b80516001600160a01b0316825260208101516121ea60208401826001600160a01b03169052565b50604081015161220560408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612277828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b60006102c06122ef83886121c3565b6001600160a01b038616610260840152610280830181905261231381840186611a70565b915050826102a083015295945050505050565b60006020828403121561233857600080fd5b815161156c81611ac9565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103808083526123788184018e611a70565b9050612387602084018d6121c3565b6001600160a01b038b81166102808501528382036102a08501526123ab828c611a70565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b6000602082840312156123f957600080fd5b815161156c81611b54565b60008261242157634e487b7160e01b600052601260045260246000fd5b50069056fe45455448487970657264726976654465706c6f796572436f6f7264696e61746f72a264697066735822122043d86cbfa71549e6e04e56367df72c1870a1e01cb5a6463fc8f6295170a2d8f564736f6c63430008160033',
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
        "liquidityPool()": "665a11ca",
        "name()": "06fdde03",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
