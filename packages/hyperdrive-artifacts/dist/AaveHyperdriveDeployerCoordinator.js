export const AaveHyperdriveDeployerCoordinator = {
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
                    "name": "_baseToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_vault",
                    "type": "address",
                    "internalType": "contract IPool"
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
                    "name": "_baseToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_vault",
                    "type": "address",
                    "internalType": "contract IPool"
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
    bytecode: '0x61016060405234801562000011575f80fd5b5060405162002c0138038062002c018339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516127e76200041a5f395f81816102b80152610d6b01525f81816103360152610c3801525f818161039c0152610b0501525f818161030301526109d201525f818161036901526107c901525f818161042101526110c601525f81816103ee0152818161055d015281816106f2015281816107f901528181610a0201528181610b3501528181610c6801528181610d9b01528181610e9a01526110f701526127e75ff3fe6080604052600436106100fa575f3560e01c8063aa8cd6c411610092578063c45a015511610062578063c45a0155146103dd578063c83e1f5114610410578063ce34a8c314610443578063e990eba814610462578063e99be39614610481575f80fd5b8063aa8cd6c414610325578063ab71905f14610358578063b6cb11181461038b578063c1510618146103be575f80fd5b806337404017116100cd578063374040171461017c57806354fd4d5014610278578063966ecd1c146102a7578063a085fa30146102f2575f80fd5b806304baa00b146100fe5780630550e6e41461012857806306fdde031461015557806316abfc7014610169575b5f80fd5b348015610109575f80fd5b50610112610494565b60405161011f9190611d04565b60405180910390f35b348015610133575f80fd5b50610147610142366004611d3a565b6104b0565b60405190815260200161011f565b348015610160575f80fd5b506101126104c6565b610147610177366004611e77565b610551565b348015610187575f80fd5b5061026b610196366004611f35565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611f4c565b348015610283575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b3480156102b2575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b3480156102fd575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610330575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610363575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610396575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c9575f80fd5b506102da6103d8366004612120565b6106e6565b3480156103e8575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561041b575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561044e575f80fd5b5061014761045d366004611d3a565b610e82565b34801561046d575f80fd5b506102da61047c366004612189565b610e8e565b34801561048c575f80fd5b506005610147565b6040518060600160405280602181526020016127916021913981565b5f6104bc848484611201565b90505b9392505050565b5f80546104d290612223565b80601f01602080910402602001604051908101604052809291908181526020018280546104fe90612223565b80156105495780601f1061052057610100808354040283529160200191610549565b820191905f5260205f20905b81548152906001019060200180831161052c57829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461059b57604051634084351160e01b815260040160405180910390fd5b6105a3611224565b5f868152600160205260409020600301546001600160a01b0316806105db5760405163952b05cb60e01b815260040160405180910390fd5b5f6105e882888887611245565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161061b9392919061225b565b60206040518083038185885af1158015610637573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061065c91906122a0565b92505f61066982346122cb565b905080156106d9576040515f90339083908381818185875af1925050503d805f81146106b0576040519150601f19603f3d011682016040523d82523d5f602084013e6106b5565b606091505b50509050806106d7576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461073057604051634084351160e01b815260040160405180910390fd5b5f868152600160205260408120908490036108e05780541561076557604051633be1b34d60e11b815260040160405180910390fd5b61076f86866113c0565b5f61077a87876115cd565b90505f8760405160200161078e91906122de565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107bb8a611650565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610835929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161086a9493929190612511565b6020604051808303815f875af1158015610886573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108aa9190612556565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106dd565b5f878152600160205260409020548061090c5760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161091e91906122de565b60405160208183030381529060405280519060200120146109525760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461097c57604051631a3272d160e31b815260040160405180910390fd5b61098687876113c0565b5f61099088611650565b6002840154608082015290506001869003610ad05760058301546001600160a01b0316156109d05760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a3793929190612571565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a6c9493929190612511565b6020604051808303815f875af1158015610a88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aac9190612556565b6005840180546001600160a01b0319166001600160a01b03831617905593506106d9565b85600203610c035760068301546001600160a01b031615610b035760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b6a93929190612571565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b9f9493929190612511565b6020604051808303815f875af1158015610bbb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bdf9190612556565b6006840180546001600160a01b0319166001600160a01b03831617905593506106d9565b85600303610d365760078301546001600160a01b031615610c365760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c9d93929190612571565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610cd29493929190612511565b6020604051808303815f875af1158015610cee573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d129190612556565b6007840180546001600160a01b0319166001600160a01b03831617905593506106d9565b85600403610e695760088301546001600160a01b031615610d695760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610dd093929190612571565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e059493929190612511565b6020604051808303815f875af1158015610e21573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e459190612556565b6008840180546001600160a01b0319166001600160a01b03831617905593506106d9565b604051631d9f815960e11b815260040160405180910390fd5b5f6104bc84848461171e565b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ed857604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f8057604051632c95caeb60e01b815260040160405180910390fd5b8051610f9f5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610fc4575060a08101516001600160a01b0316155b80610fda575060c08101516001600160a01b0316155b80610ff0575060e08101516001600160a01b0316155b8061100757506101008101516001600160a01b0316155b156110255760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110389087906020016122de565b604051602081830303815290604052805190602001201461106c5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461109757604051631a3272d160e31b815260040160405180910390fd5b6110a185856113c0565b5f6110ab86611650565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161114d929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111889a99989796959493929190612592565b6020604051808303815f875af11580156111a4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c89190612556565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b5f6104bc6b033b2e3c9fd0803ce800000061121c8686611740565b8491906117ab565b341561124357604051631574f9f360e01b815260040160405180910390fd5b565b5f805f866001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611284573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112a89190612556565b90508360200151156112bc5780915061138b565b866001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112f8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131c9190612556565b915061138881836001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa15801561135e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113829190612556565b87610e82565b94505b6113a06001600160a01b0383168730886117c6565b6113b46001600160a01b0383168887611833565b505f9695505050505050565b6113ca82826118c2565b60208201516001600160a01b03166113f55760405163073f739d60e51b815260040160405180910390fd5b81602001516001600160a01b031663b16a19de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611435573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114599190612556565b6001600160a01b0316825f01516001600160a01b03161461148d57604051630722152560e11b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114ce573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114f29190612614565b6114fc9190612634565b61150790600a61272d565b8260800151101561152b576040516349db44f560e01b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561156c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115909190612614565b61159a9190612634565b6115a590600a61272d565b8260a0015110156115c9576040516318c9522360e11b815260040160405180910390fd5b5050565b5f611647835f015184602001516001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa158015611615573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116399190612556565b670de0b6b3a7640000610e82565b90505b92915050565b611658611be3565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b5f6104bc61172c8585611740565b83906b033b2e3c9fd0803ce80000006117ab565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa158015611787573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061164791906122a0565b5f825f1904841183021582026117bf575f80fd5b5091020490565b6040516001600160a01b03848116602483015283811660448301526064820183905261182d9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506119d6565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526118848482611a41565b61182d576040516001600160a01b0384811660248301525f60448301526118b891869182169063095ea7b3906064016117fb565b61182d84826119d6565b6103e8826080015110156118e9576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361190e57604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061193857508161010001518260e00151611935919061273b565b15155b156119565760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806119825750670de0b6b3a7640000826101c0015160200151115b8061199d5750670de0b6b3a7640000826101c0015160400151115b806119b85750670de0b6b3a7640000826101c0015160600151115b156115c9576040516322f72cc360e11b815260040160405180910390fd5b5f6119ea6001600160a01b03841683611ade565b905080515f14158015611a0e575080806020019051810190611a0c919061275a565b155b15611a3c57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b031684604051611a5c9190612775565b5f604051808303815f865af19150503d805f8114611a95576040519150601f19603f3d011682016040523d82523d5f602084013e611a9a565b606091505b5091509150818015611ac4575080511580611ac4575080806020019051810190611ac4919061275a565b80156106dd5750505050506001600160a01b03163b151590565b606061164783835f845f80856001600160a01b03168486604051611b029190612775565b5f6040518083038185875af1925050503d805f8114611b3c576040519150601f19603f3d011682016040523d82523d5f602084013e611b41565b606091505b5091509150611b51868383611b5b565b9695505050505050565b606082611b7057611b6b82611bb7565b6104bf565b8151158015611b8757506001600160a01b0384163b155b15611bb057604051639996b31560e01b81526001600160a01b0385166004820152602401611a33565b50806104bf565b805115611bc75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611cb260405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611cd1578181015183820152602001611cb9565b50505f910152565b5f8151808452611cf0816020860160208601611cb7565b601f01601f19169290920160200192915050565b602081525f6116476020830184611cd9565b6001600160a01b0381168114611be0575f80fd5b8035611d3581611d16565b919050565b5f805f60608486031215611d4c575f80fd5b8335611d5781611d16565b92506020840135611d6781611d16565b929592945050506040919091013590565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611daf57611daf611d78565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611daf57611daf611d78565b8015158114611be0575f80fd5b5f67ffffffffffffffff80841115611e0057611e00611d78565b604051601f8501601f19908116603f01168101908282118183101715611e2857611e28611d78565b81604052809350858152868686011115611e40575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611e68575f80fd5b61164783833560208501611de6565b5f805f805f60a08688031215611e8b575f80fd5b853594506020860135611e9d81611d16565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611ec7575f80fd5b908701906060828a031215611eda575f80fd5b611ee2611d8c565b8235611eed81611d16565b81526020830135611efd81611dd9565b6020820152604083013582811115611f13575f80fd5b611f1f8b828601611e59565b6040830152508093505050509295509295909350565b5f60208284031215611f45575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611fd9575f80fd5b6040516080810181811067ffffffffffffffff82111715611ffc57611ffc611d78565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f610240828403121561203e575f80fd5b612046611db5565b905061205182611d2a565b815261205f60208301611d2a565b602082015261207060408301611d2a565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101406120cd818401611d2a565b908201526101606120df838201611d2a565b908201526101806120f1838201611d2a565b908201526101a0612103838201611d2a565b908201526101c061211684848301611fc9565b9082015292915050565b5f805f805f6102c08688031215612135575f80fd5b85359450612146876020880161202d565b935061026086013567ffffffffffffffff811115612162575f80fd5b61216e88828901611e59565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c0868803121561219e575f80fd5b85359450602086013567ffffffffffffffff808211156121bc575f80fd5b818801915088601f8301126121cf575f80fd5b6121de89833560208501611de6565b95506121ed8960408a0161202d565b9450610280880135915080821115612203575f80fd5b5061221088828901611e59565b959894975092956102a001359392505050565b600181811c9082168061223757607f821691505b60208210810361225557634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a0840152611b5160c0840182611cd9565b5f602082840312156122b0575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561164a5761164a6122b7565b81516001600160a01b031681526102408101602083015161230a60208401826001600160a01b03169052565b50604083015161232560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161238b828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611fc1565b80516001600160a01b03168252602081015161241b60208401826001600160a01b03169052565b50604081015161243660408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516124a8828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e08082015180518285015260208101516102008501526040810151610220850152606081015161024085015261182d565b5f6102c061251f83886123f4565b6001600160a01b038616610260840152610280830181905261254381840186611cd9565b915050826102a083015295945050505050565b5f60208284031215612566575f80fd5b81516104bf81611d16565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526125a58184018e611cd9565b90506125b4602084018d6123f4565b6001600160a01b038b81166102808501528382036102a08501526125d8828c611cd9565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f60208284031215612624575f80fd5b815160ff811681146104bf575f80fd5b60ff828116828216039081111561164a5761164a6122b7565b600181815b8085111561268757815f190482111561266d5761266d6122b7565b8085161561267a57918102915b93841c9390800290612652565b509250929050565b5f8261269d5750600161164a565b816126a957505f61164a565b81600181146126bf57600281146126c9576126e5565b600191505061164a565b60ff8411156126da576126da6122b7565b50506001821b61164a565b5060208310610133831016604e8410600b8410161715612708575081810a61164a565b612712838361264d565b805f1904821115612725576127256122b7565b029392505050565b5f61164760ff84168361268f565b5f8261275557634e487b7160e01b5f52601260045260245ffd5b500690565b5f6020828403121561276a575f80fd5b81516104bf81611dd9565b5f8251612786818460208701611cb7565b919091019291505056fe41617665487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220d16610b0b5f25fff945da68c69ab3d4887ae2d8fa0c55d5d4e1719982413fbe464736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(address,address,uint256)": "ce34a8c3",
        "convertToShares(address,address,uint256)": "0550e6e4",
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
