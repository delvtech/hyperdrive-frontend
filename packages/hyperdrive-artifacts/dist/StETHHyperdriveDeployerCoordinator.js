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
            "name": "ApprovalFailed",
            "inputs": []
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
    bytecode: '0x61018060405234801562000011575f80fd5b5060405162002630380380620026308339810160408190526200003491620000c4565b88888888888888885f620000498982620002ae565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120528116610140529190911661016052506200037a975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000bf575f80fd5b919050565b5f805f805f805f805f6101208a8c031215620000de575f80fd5b89516001600160401b0380821115620000f5575f80fd5b818c0191508c601f83011262000109575f80fd5b8151818111156200011e576200011e62000094565b604051601f8201601f19908116603f0116810190838211818310171562000149576200014962000094565b81604052828152602093508f8484870101111562000165575f80fd5b5f91505b8282101562000188578482018401518183018501529083019062000169565b5f848483010152809d50505050620001a2818d01620000a8565b99505050620001b460408b01620000a8565b9650620001c460608b01620000a8565b9550620001d460808b01620000a8565b9450620001e460a08b01620000a8565b9350620001f460c08b01620000a8565b92506200020460e08b01620000a8565b9150620002156101008b01620000a8565b90509295985092959850929598565b600181811c908216806200023957607f821691505b6020821081036200025857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002a957805f5260205f20601f840160051c81016020851015620002855750805b601f840160051c820191505b81811015620002a6575f815560010162000291565b50505b505050565b81516001600160401b03811115620002ca57620002ca62000094565b620002e281620002db845462000224565b846200025e565b602080601f83116001811462000318575f8415620003005750858301515b5f19600386901b1c1916600185901b17855562000372565b5f85815260208120601f198616915b82811015620003485788860151825594840194600190910190840162000327565b50858210156200036657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e051610100516101205161014051610160516121dc620004545f395f8181610179015281816112950152818161132a015261148401525f818161032d0152610daa01525f81816103930152610c7701525f81816103f90152610b4401525f81816103600152610a1101525f81816103c6015261080801525f818161047e01526110f901525f818161044b01528181610585015281816107310152818161083801528181610a4101528181610b7401528181610ca701528181610dda01528181610ecd015261112a01526121dc5ff3fe608060405260043610610105575f3560e01c8063a085fa3011610092578063c151061811610062578063c15106181461041b578063c45a01551461043a578063c83e1f511461046d578063e990eba8146104a0578063e99be396146104bf575f80fd5b8063a085fa301461034f578063aa8cd6c414610382578063ab71905f146103b5578063b6cb1118146103e8575f80fd5b8063251f6c42116100d8578063251f6c42146101b357806337404017146101d25780633e5541f1146102ce57806354fd4d50146102ed578063966ecd1c1461031c575f80fd5b806304baa00b1461010957806306fdde031461013357806316abfc701461014757806323509a2d14610168575b5f80fd5b348015610114575f80fd5b5061011d6104d2565b60405161012a9190611842565b60405180910390f35b34801561013e575f80fd5b5061011d6104ee565b61015a61015536600461197a565b610579565b60405190815260200161012a565b348015610173575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161012a565b3480156101be575f80fd5b5061015a6101cd366004611a38565b610706565b3480156101dd575f80fd5b506102c16101ec366004611a62565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161012a9190611a79565b3480156102d9575f80fd5b5061015a6102e8366004611a38565b61071a565b3480156102f8575f80fd5b50604080518082019091526007815266076312e302e32360cc1b602082015261011d565b348015610327575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561035a575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561038d575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c0575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103f3575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b348015610426575f80fd5b5061019b610435366004611c4d565b610725565b348015610445575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b348015610478575f80fd5b5061019b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104ab575f80fd5b5061019b6104ba366004611cb6565b610ec1565b3480156104ca575f80fd5b50600561015a565b6040518060600160405280602281526020016121856022913981565b5f80546104fa90611d50565b80601f016020809104026020016040519081016040528092919081815260200182805461052690611d50565b80156105715780601f1061054857610100808354040283529160200191610571565b820191905f5260205f20905b81548152906001019060200180831161055457829003601f168201915b505050505081565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105c357604051634084351160e01b815260040160405180910390fd5b5f868152600160205260409020600301546001600160a01b0316806105fb5760405163952b05cb60e01b815260040160405180910390fd5b5f61060882888887611234565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161063b93929190611d88565b60206040518083038185885af1158015610657573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061067c9190611dd7565b92505f6106898234611dee565b905080156106f9576040515f90339083908381818185875af1925050503d805f81146106d0576040519150601f19603f3d011682016040523d82523d5f602084013e6106d5565b606091505b50509050806106f7576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f61071183836113a1565b90505b92915050565b5f610711838361140b565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461076f57604051634084351160e01b815260040160405180910390fd5b5f8681526001602052604081209084900361091f578054156107a457604051633be1b34d60e11b815260040160405180910390fd5b6107ae868661143a565b5f6107b98787611532565b90505f876040516020016107cd9190611e0d565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107fa8a611549565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610874929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108a99493929190612040565b6020604051808303815f875af11580156108c5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108e99190612085565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106fd565b5f878152600160205260409020548061094b5760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161095d9190611e0d565b60405160208183030381529060405280519060200120146109915760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109bb57604051631a3272d160e31b815260040160405180910390fd5b6109c5878761143a565b5f6109cf88611549565b6002840154608082015290506001869003610b0f5760058301546001600160a01b031615610a0f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a76939291906120a7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610aab9493929190612040565b6020604051808303815f875af1158015610ac7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aeb9190612085565b6005840180546001600160a01b0319166001600160a01b03831617905593506106f9565b85600203610c425760068301546001600160a01b031615610b425760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ba9939291906120a7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610bde9493929190612040565b6020604051808303815f875af1158015610bfa573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c1e9190612085565b6006840180546001600160a01b0319166001600160a01b03831617905593506106f9565b85600303610d755760078301546001600160a01b031615610c755760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610cdc939291906120a7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d119493929190612040565b6020604051808303815f875af1158015610d2d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d519190612085565b6007840180546001600160a01b0319166001600160a01b03831617905593506106f9565b85600403610ea85760088301546001600160a01b031615610da85760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e0f939291906120a7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e449493929190612040565b6020604051808303815f875af1158015610e60573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e849190612085565b6008840180546001600160a01b0319166001600160a01b03831617905593506106f9565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f0b57604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fb357604051632c95caeb60e01b815260040160405180910390fd5b8051610fd25760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610ff7575060a08101516001600160a01b0316155b8061100d575060c08101516001600160a01b0316155b80611023575060e08101516001600160a01b0316155b8061103a57506101008101516001600160a01b0316155b156110585760405163e97cc2bf60e01b815260040160405180910390fd5b805160405161106b908790602001611e0d565b604051602081830303815290604052805190602001201461109f5760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110ca57604051631a3272d160e31b815260040160405180910390fd5b6110d4858561143a565b5f6110de86611549565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611180929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111bb9a999897969594939291906120c8565b6020604051808303815f875af11580156111d7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111fb9190612085565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b5f81602001511561126757823410156112605760405163044044a560e21b815260040160405180910390fd5b5081611399565b604051636d78045960e01b81526001600160a01b038581166004830152306024830152604482018590525f917f000000000000000000000000000000000000000000000000000000000000000090911690636d780459906064016020604051808303815f875af11580156112dd573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113019190611dd7565b60405163095ea7b360e01b81526001600160a01b038881166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303815f875af1158015611372573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611396919061214a565b50505b949350505050565b604051630f451f7160e31b8152600481018290525f906001600160a01b03841690637a28fb88906024015b602060405180830381865afa1580156113e7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107119190611dd7565b604051631920845160e01b8152600481018290525f906001600160a01b038416906319208451906024016113cc565b6114448282611617565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461148257604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b0316146114d85760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c6800014611503576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c680001461152e576040516318c9522360e11b815260040160405180910390fd5b5050565b5f6107118360200151670de0b6b3a7640000610706565b61155161172b565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6103e88260800151101561163e576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361166357604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061168d57508161010001518260e0015161168a9190612165565b15155b156116ab5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806116d75750670de0b6b3a7640000826101c0015160200151115b806116f25750670de0b6b3a7640000826101c0015160400151115b8061170d5750670de0b6b3a7640000826101c0015160600151115b1561152e576040516322f72cc360e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020016117fa60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f81518084525f5b8181101561182357602081850181015186830182015201611807565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f61071160208301846117ff565b6001600160a01b0381168114611868575f80fd5b50565b803561187681611854565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff811182821017156118b2576118b261187b565b60405290565b6040516101e0810167ffffffffffffffff811182821017156118b2576118b261187b565b8015158114611868575f80fd5b5f67ffffffffffffffff808411156119035761190361187b565b604051601f8501601f19908116603f0116810190828211818310171561192b5761192b61187b565b81604052809350858152868686011115611943575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f83011261196b575f80fd5b610711838335602085016118e9565b5f805f805f60a0868803121561198e575f80fd5b8535945060208601356119a081611854565b93506040860135925060608601359150608086013567ffffffffffffffff808211156119ca575f80fd5b908701906060828a0312156119dd575f80fd5b6119e561188f565b82356119f081611854565b81526020830135611a00816118dc565b6020820152604083013582811115611a16575f80fd5b611a228b82860161195c565b6040830152508093505050509295509295909350565b5f8060408385031215611a49575f80fd5b8235611a5481611854565b946020939093013593505050565b5f60208284031215611a72575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611b06575f80fd5b6040516080810181811067ffffffffffffffff82111715611b2957611b2961187b565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611b6b575f80fd5b611b736118b8565b9050611b7e8261186b565b8152611b8c6020830161186b565b6020820152611b9d6040830161186b565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611bfa81840161186b565b90820152610160611c0c83820161186b565b90820152610180611c1e83820161186b565b908201526101a0611c3083820161186b565b908201526101c0611c4384848301611af6565b9082015292915050565b5f805f805f6102c08688031215611c62575f80fd5b85359450611c738760208801611b5a565b935061026086013567ffffffffffffffff811115611c8f575f80fd5b611c9b8882890161195c565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611ccb575f80fd5b85359450602086013567ffffffffffffffff80821115611ce9575f80fd5b818801915088601f830112611cfc575f80fd5b611d0b898335602085016118e9565b9550611d1a8960408a01611b5a565b9450610280880135915080821115611d30575f80fd5b50611d3d8882890161195c565b959894975092956102a001359392505050565b600181811c90821680611d6457607f821691505b602082108103611d8257634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a0840152611dcd60c08401826117ff565b9695505050505050565b5f60208284031215611de7575f80fd5b5051919050565b8181038181111561071457634e487b7160e01b5f52601160045260245ffd5b81516001600160a01b0316815261024081016020830151611e3960208401826001600160a01b03169052565b506040830151611e5460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151611eba828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611aee565b80516001600160a01b031682526020810151611f4a60208401826001600160a01b03169052565b506040810151611f6560408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151611fd7828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6102c061204e8388611f23565b6001600160a01b0386166102608401526102808301819052612072818401866117ff565b915050826102a083015295945050505050565b5f60208284031215612095575f80fd5b81516120a081611854565b9392505050565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526120db8184018e6117ff565b90506120ea602084018d611f23565b6001600160a01b038b81166102808501528382036102a085015261210e828c6117ff565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f6020828403121561215a575f80fd5b81516120a0816118dc565b5f8261217f57634e487b7160e01b5f52601260045260245ffd5b50069056fe5374455448487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212206424e2c6a2d37f7dbd5215cc1b2da7bda2910f0a609e426fae656d20b8f0930d64736f6c63430008160033',
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
