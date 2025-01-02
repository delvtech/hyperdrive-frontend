export const StkWellHyperdriveDeployerCoordinator = {
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
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "convertToShares",
            "inputs": [
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
            "stateMutability": "pure"
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
        }
    ],
    bytecode: '0x61016060405234801562000011575f80fd5b50604051620029e6380380620029e68339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516125cc6200041a5f395f81816102990152610d3f01525f81816103170152610c0c01525f818161037d0152610ad901525f81816102e401526109a601525f818161034a015261079d01525f8181610421015261108e01525f81816103ee01528181610528015281816106c6015281816107cd015281816109d601528181610b0901528181610c3c01528181610d6f01528181610e6201526110bf01526125cc5ff3fe6080604052600436106100fa575f3560e01c8063ab71905f11610092578063c45a015511610062578063c45a0155146103dd578063c6e6f5921461039f578063c83e1f5114610410578063e990eba814610443578063e99be39614610462575f80fd5b8063ab71905f14610339578063b6cb11181461036c578063b88fed9f1461039f578063c1510618146103be575f80fd5b806354fd4d50116100cd57806354fd4d5014610259578063966ecd1c14610288578063a085fa30146102d3578063aa8cd6c414610306575f80fd5b806304baa00b146100fe57806306fdde031461012857806316abfc701461013c578063374040171461015d575b5f80fd5b348015610109575f80fd5b50610112610475565b60405161011f9190611b24565b60405180910390f35b348015610133575f80fd5b50610112610491565b61014f61014a366004611c59565b61051c565b60405190815260200161011f565b348015610168575f80fd5b5061024c610177366004611d17565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611d2e565b348015610264575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b348015610293575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b3480156102de575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610311575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610344575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610377575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103aa575f80fd5b5061014f6103b9366004611d17565b6106b1565b3480156103c9575f80fd5b506102bb6103d8366004611f02565b6106ba565b3480156103e8575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561041b575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561044e575f80fd5b506102bb61045d366004611f6b565b610e56565b34801561046d575f80fd5b50600561014f565b6040518060600160405280602481526020016125736024913981565b5f805461049d90612005565b80601f01602080910402602001604051908101604052809291908181526020018280546104c990612005565b80156105145780601f106104eb57610100808354040283529160200191610514565b820191905f5260205f20905b8154815290600101906020018083116104f757829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461056657604051634084351160e01b815260040160405180910390fd5b61056e6111c9565b5f868152600160205260409020600301546001600160a01b0316806105a65760405163952b05cb60e01b815260040160405180910390fd5b5f6105b3828888876111ea565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016105e69392919061203d565b60206040518083038185885af1158015610602573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106279190612082565b92505f61063482346120ad565b905080156106a4576040515f90339083908381818185875af1925050503d805f811461067b576040519150601f19603f3d011682016040523d82523d5f602084013e610680565b606091505b50509050806106a2576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f815b92915050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461070457604051634084351160e01b815260040160405180910390fd5b5f868152600160205260408120908490036108b45780541561073957604051633be1b34d60e11b815260040160405180910390fd5b61074386866112f2565b5f61074e87876114ff565b90505f8760405160200161076291906120c0565b6040516020818303038152906040528051906020012090505f878051906020012090505f61078f8a611518565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610809929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161083e94939291906122f3565b6020604051808303815f875af115801561085a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061087e9190612338565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106a8565b5f87815260016020526040902054806108e05760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016108f291906120c0565b60405160208183030381529060405280519060200120146109265760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461095057604051631a3272d160e31b815260040160405180910390fd5b61095a87876112f2565b5f61096488611518565b6002840154608082015290506001869003610aa45760058301546001600160a01b0316156109a45760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a0b93929190612353565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a4094939291906122f3565b6020604051808303815f875af1158015610a5c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a809190612338565b6005840180546001600160a01b0319166001600160a01b03831617905593506106a4565b85600203610bd75760068301546001600160a01b031615610ad75760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b3e93929190612353565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b7394939291906122f3565b6020604051808303815f875af1158015610b8f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb39190612338565b6006840180546001600160a01b0319166001600160a01b03831617905593506106a4565b85600303610d0a5760078301546001600160a01b031615610c0a5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c7193929190612353565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ca694939291906122f3565b6020604051808303815f875af1158015610cc2573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ce69190612338565b6007840180546001600160a01b0319166001600160a01b03831617905593506106a4565b85600403610e3d5760088301546001600160a01b031615610d3d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610da493929190612353565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610dd994939291906122f3565b6020604051808303815f875af1158015610df5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e199190612338565b6008840180546001600160a01b0319166001600160a01b03831617905593506106a4565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ea057604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f4857604051632c95caeb60e01b815260040160405180910390fd5b8051610f675760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f8c575060a08101516001600160a01b0316155b80610fa2575060c08101516001600160a01b0316155b80610fb8575060e08101516001600160a01b0316155b80610fcf57506101008101516001600160a01b0316155b15610fed5760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110009087906020016120c0565b60405160208183030381529060405280519060200120146110345760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461105f57604051631a3272d160e31b815260040160405180910390fd5b61106985856112f2565b5f61107386611518565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611115929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111509a99989796959493929190612374565b6020604051808303815f875af115801561116c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111909190612338565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b34156111e857604051631574f9f360e01b815260040160405180910390fd5b565b5f8082602001511561125d57856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611232573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112569190612338565b90506112c0565b856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611299573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112bd9190612338565b90505b6112d56001600160a01b0382168630876115e6565b6112e96001600160a01b0382168786611653565b50949350505050565b6112fc82826116e2565b60208201516001600160a01b03166113275760405163073f739d60e51b815260040160405180910390fd5b815f01516001600160a01b031682602001516001600160a01b031663312f6b836040518163ffffffff1660e01b8152600401602060405180830381865afa158015611374573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113989190612338565b6001600160a01b0316146113bf57604051630722152560e11b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611400573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061142491906123f6565b61142e9190612416565b61143990600a61250f565b8260800151101561145d576040516349db44f560e01b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561149e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114c291906123f6565b6114cc9190612416565b6114d790600a61250f565b8260a0015110156114fb576040516318c9522360e11b815260040160405180910390fd5b5050565b5f611511670de0b6b3a76400006106b1565b9392505050565b611520611a03565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b03848116602483015283811660448301526064820183905261164d9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506117f6565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526116a48482611861565b61164d576040516001600160a01b0384811660248301525f60448301526116d891869182169063095ea7b39060640161161b565b61164d84826117f6565b6103e882608001511015611709576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361172e57604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061175857508161010001518260e00151611755919061251d565b15155b156117765760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806117a25750670de0b6b3a7640000826101c0015160200151115b806117bd5750670de0b6b3a7640000826101c0015160400151115b806117d85750670de0b6b3a7640000826101c0015160600151115b156114fb576040516322f72cc360e11b815260040160405180910390fd5b5f61180a6001600160a01b038416836118fe565b905080515f1415801561182e57508080602001905181019061182c919061253c565b155b1561185c57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b03168460405161187c9190612557565b5f604051808303815f865af19150503d805f81146118b5576040519150601f19603f3d011682016040523d82523d5f602084013e6118ba565b606091505b50915091508180156118e45750805115806118e45750808060200190518101906118e4919061253c565b80156106a85750505050506001600160a01b03163b151590565b606061151183835f845f80856001600160a01b031684866040516119229190612557565b5f6040518083038185875af1925050503d805f811461195c576040519150601f19603f3d011682016040523d82523d5f602084013e611961565b606091505b509150915061197186838361197b565b9695505050505050565b6060826119905761198b826119d7565b611511565b81511580156119a757506001600160a01b0384163b155b156119d057604051639996b31560e01b81526001600160a01b0385166004820152602401611853565b5080611511565b8051156119e75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611ad260405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611af1578181015183820152602001611ad9565b50505f910152565b5f8151808452611b10816020860160208601611ad7565b601f01601f19169290920160200192915050565b602081525f6115116020830184611af9565b6001600160a01b0381168114611a00575f80fd5b8035611b5581611b36565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611b9157611b91611b5a565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611b9157611b91611b5a565b8015158114611a00575f80fd5b5f67ffffffffffffffff80841115611be257611be2611b5a565b604051601f8501601f19908116603f01168101908282118183101715611c0a57611c0a611b5a565b81604052809350858152868686011115611c22575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611c4a575f80fd5b61151183833560208501611bc8565b5f805f805f60a08688031215611c6d575f80fd5b853594506020860135611c7f81611b36565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611ca9575f80fd5b908701906060828a031215611cbc575f80fd5b611cc4611b6e565b8235611ccf81611b36565b81526020830135611cdf81611bbb565b6020820152604083013582811115611cf5575f80fd5b611d018b828601611c3b565b6040830152508093505050509295509295909350565b5f60208284031215611d27575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611dbb575f80fd5b6040516080810181811067ffffffffffffffff82111715611dde57611dde611b5a565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611e20575f80fd5b611e28611b97565b9050611e3382611b4a565b8152611e4160208301611b4a565b6020820152611e5260408301611b4a565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611eaf818401611b4a565b90820152610160611ec1838201611b4a565b90820152610180611ed3838201611b4a565b908201526101a0611ee5838201611b4a565b908201526101c0611ef884848301611dab565b9082015292915050565b5f805f805f6102c08688031215611f17575f80fd5b85359450611f288760208801611e0f565b935061026086013567ffffffffffffffff811115611f44575f80fd5b611f5088828901611c3b565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611f80575f80fd5b85359450602086013567ffffffffffffffff80821115611f9e575f80fd5b818801915088601f830112611fb1575f80fd5b611fc089833560208501611bc8565b9550611fcf8960408a01611e0f565b9450610280880135915080821115611fe5575f80fd5b50611ff288828901611c3b565b959894975092956102a001359392505050565b600181811c9082168061201957607f821691505b60208210810361203757634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a084015261197160c0840182611af9565b5f60208284031215612092575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156106b4576106b4612099565b81516001600160a01b03168152610240810160208301516120ec60208401826001600160a01b03169052565b50604083015161210760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161216d828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611da3565b80516001600160a01b0316825260208101516121fd60208401826001600160a01b03169052565b50604081015161221860408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161228a828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e08082015180518285015260208101516102008501526040810151610220850152606081015161024085015261164d565b5f6102c061230183886121d6565b6001600160a01b038616610260840152610280830181905261232581840186611af9565b915050826102a083015295945050505050565b5f60208284031215612348575f80fd5b815161151181611b36565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526123878184018e611af9565b9050612396602084018d6121d6565b6001600160a01b038b81166102808501528382036102a08501526123ba828c611af9565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f60208284031215612406575f80fd5b815160ff81168114611511575f80fd5b60ff82811682821603908111156106b4576106b4612099565b600181815b8085111561246957815f190482111561244f5761244f612099565b8085161561245c57918102915b93841c9390800290612434565b509250929050565b5f8261247f575060016106b4565b8161248b57505f6106b4565b81600181146124a157600281146124ab576124c7565b60019150506106b4565b60ff8411156124bc576124bc612099565b50506001821b6106b4565b5060208310610133831016604e8410600b84101617156124ea575081810a6106b4565b6124f4838361242f565b805f190482111561250757612507612099565b029392505050565b5f61151160ff841683612471565b5f8261253757634e487b7160e01b5f52601260045260245ffd5b500690565b5f6020828403121561254c575f80fd5b815161151181611bbb565b5f8251612568818460208701611ad7565b919091019291505056fe53746b57656c6c487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212205f6cbb68e0e1f27022ec484d8932c9beb503129e283c2ef602c051e19e6b92b764736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(uint256)": "b88fed9f",
        "convertToShares(uint256)": "c6e6f592",
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
