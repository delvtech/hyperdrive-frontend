export const MorphoBlueHyperdriveDeployerCoordinator = {
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
                    "name": "_vault",
                    "type": "address",
                    "internalType": "contract IMorpho"
                },
                {
                    "name": "_baseToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_collateralToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_oracle",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_irm",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_lltv",
                    "type": "uint256",
                    "internalType": "uint256"
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
                    "name": "_vault",
                    "type": "address",
                    "internalType": "contract IMorpho"
                },
                {
                    "name": "_baseToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_collateralToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_oracle",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_irm",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_lltv",
                    "type": "uint256",
                    "internalType": "uint256"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x61016060405234801562000011575f80fd5b5060405162002bcb38038062002bcb8339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516127b16200041a5f395f81816102b80152610de501525f81816103360152610cb201525f818161039c0152610b7f01525f81816103030152610a4c01525f8181610369015261084301525f8181610421015261117901525f81816103ee015281816105470152818161076c0152818161087301528181610a7c01528181610baf01528181610ce201528181610e1501528181610f4d01526111aa01526127b15ff3fe6080604052600436106100fa575f3560e01c8063aa8cd6c411610092578063c45a015511610062578063c45a0155146103dd578063c83e1f5114610410578063e71c2aa114610443578063e990eba814610462578063e99be39614610481575f80fd5b8063aa8cd6c414610325578063ab71905f14610358578063b6cb11181461038b578063c1510618146103be575f80fd5b806343dd8fef116100cd57806343dd8fef1461025957806354fd4d5014610278578063966ecd1c146102a7578063a085fa30146102f2575f80fd5b806304baa00b146100fe57806306fdde031461012857806316abfc701461013c578063374040171461015d575b5f80fd5b348015610109575f80fd5b50610112610494565b60405161011f9190611bb6565b60405180910390f35b348015610133575f80fd5b506101126104b0565b61014f61014a366004611ceb565b61053b565b60405190815260200161011f565b348015610168575f80fd5b5061024c610177366004611da9565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611dc0565b348015610264575f80fd5b5061014f610273366004611e3d565b6106d0565b348015610283575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b3480156102b2575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b3480156102fd575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610330575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610363575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b348015610396575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c9575f80fd5b506102da6103d8366004612012565b610760565b3480156103e8575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561041b575f80fd5b506102da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561044e575f80fd5b5061014f61045d366004611e3d565b610efc565b34801561046d575f80fd5b506102da61047c36600461207b565b610f41565b34801561048c575f80fd5b50600561014f565b6040518060600160405280602781526020016127556027913981565b5f80546104bc90612115565b80601f01602080910402602001604051908101604052809291908181526020018280546104e890612115565b80156105335780601f1061050a57610100808354040283529160200191610533565b820191905f5260205f20905b81548152906001019060200180831161051657829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461058557604051634084351160e01b815260040160405180910390fd5b61058d6112b4565b5f868152600160205260409020600301546001600160a01b0316806105c55760405163952b05cb60e01b815260040160405180910390fd5b5f6105d2828888876112d5565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106059392919061214d565b60206040518083038185885af1158015610621573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106469190612192565b92505f61065382346121bd565b905080156106c3576040515f90339083908381818185875af1925050503d805f811461069a576040519150601f19603f3d011682016040523d82523d5f602084013e61069f565b606091505b50509050806106c1576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6040516303c2063f60e41b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090610715908b908b908b908b908b908b908b906004016121d0565b602060405180830381865af4158015610730573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107549190612192565b98975050505050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107aa57604051634084351160e01b815260040160405180910390fd5b5f8681526001602052604081209084900361095a578054156107df57604051633be1b34d60e11b815260040160405180910390fd5b6107e9868661138f565b5f6107f4878761152d565b90505f876040516020016108089190612213565b6040516020818303038152906040528051906020012090505f878051906020012090505f6108358a61157a565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016108af929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108e49493929190612446565b6020604051808303815f875af1158015610900573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610924919061248b565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106c7565b5f87815260016020526040902054806109865760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109989190612213565b60405160208183030381529060405280519060200120146109cc5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109f657604051631a3272d160e31b815260040160405180910390fd5b610a00878761138f565b5f610a0a8861157a565b6002840154608082015290506001869003610b4a5760058301546001600160a01b031615610a4a5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ab1939291906124a6565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ae69493929190612446565b6020604051808303815f875af1158015610b02573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b26919061248b565b6005840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600203610c7d5760068301546001600160a01b031615610b7d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610be4939291906124a6565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c199493929190612446565b6020604051808303815f875af1158015610c35573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c59919061248b565b6006840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600303610db05760078301546001600160a01b031615610cb05760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d17939291906124a6565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d4c9493929190612446565b6020604051808303815f875af1158015610d68573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d8c919061248b565b6007840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600403610ee35760088301546001600160a01b031615610de35760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e4a939291906124a6565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e7f9493929190612446565b6020604051808303815f875af1158015610e9b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ebf919061248b565b6008840180546001600160a01b0319166001600160a01b03831617905593506106c3565b604051631d9f815960e11b815260040160405180910390fd5b6040516349124ca360e01b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390610715908b908b908b908b908b908b908b906004016121d0565b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f8b57604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561103357604051632c95caeb60e01b815260040160405180910390fd5b80516110525760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611077575060a08101516001600160a01b0316155b8061108d575060c08101516001600160a01b0316155b806110a3575060e08101516001600160a01b0316155b806110ba57506101008101516001600160a01b0316155b156110d85760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110eb908790602001612213565b604051602081830303815290604052805190602001201461111f5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461114a57604051631a3272d160e31b815260040160405180910390fd5b611154858561138f565b5f61115e8661157a565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611200929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b815260040161123b9a999897969594939291906124c7565b6020604051808303815f875af1158015611257573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061127b919061248b565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b34156112d357604051631574f9f360e01b815260040160405180910390fd5b565b5f81602001516112f85760405163350b944160e11b815260040160405180910390fd5b5f856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611335573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611359919061248b565b90506113706001600160a01b038216863087611648565b6113846001600160a01b03821687866116b5565b505f95945050505050565b6113998282611744565b60208201516001600160a01b0316156113c55760405163073f739d60e51b815260040160405180910390fd5b81516001600160a01b03166113ed57604051630722152560e11b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561142e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114529190612549565b61145c9190612569565b61146790600a612662565b8260800151101561148b576040516349db44f560e01b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114cc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114f09190612549565b6114fa9190612569565b61150590600a612662565b8260a001511015611529576040516318c9522360e11b815260040160405180910390fd5b5050565b5f80828060200190518101906115439190612670565b80518551602083015160408401516060850151608086015195965061157095670de0b6b3a76400006106d0565b9150505b92915050565b611582611a95565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526116af9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611858565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261170684826118c3565b6116af576040516001600160a01b0384811660248301525f604483015261173a91869182169063095ea7b39060640161167d565b6116af8482611858565b6103e88260800151101561176b576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361179057604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806117ba57508161010001518260e001516117b791906126ff565b15155b156117d85760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806118045750670de0b6b3a7640000826101c0015160200151115b8061181f5750670de0b6b3a7640000826101c0015160400151115b8061183a5750670de0b6b3a7640000826101c0015160600151115b15611529576040516322f72cc360e11b815260040160405180910390fd5b5f61186c6001600160a01b03841683611960565b905080515f1415801561189057508080602001905181019061188e919061271e565b155b156118be57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516118de9190612739565b5f604051808303815f865af19150503d805f8114611917576040519150601f19603f3d011682016040523d82523d5f602084013e61191c565b606091505b5091509150818015611946575080511580611946575080806020019051810190611946919061271e565b80156106c75750505050506001600160a01b03163b151590565b606061196d83835f611974565b9392505050565b6060814710156119995760405163cd78605960e01b81523060048201526024016118b5565b5f80856001600160a01b031684866040516119b49190612739565b5f6040518083038185875af1925050503d805f81146119ee576040519150601f19603f3d011682016040523d82523d5f602084013e6119f3565b606091505b5091509150611a03868383611a0d565b9695505050505050565b606082611a2257611a1d82611a69565b61196d565b8151158015611a3957506001600160a01b0384163b155b15611a6257604051639996b31560e01b81526001600160a01b03851660048201526024016118b5565b508061196d565b805115611a795780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611b6460405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611b83578181015183820152602001611b6b565b50505f910152565b5f8151808452611ba2816020860160208601611b69565b601f01601f19169290920160200192915050565b602081525f61196d6020830184611b8b565b6001600160a01b0381168114611a92575f80fd5b8035611be781611bc8565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611c2357611c23611bec565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611c2357611c23611bec565b8015158114611a92575f80fd5b5f67ffffffffffffffff80841115611c7457611c74611bec565b604051601f8501601f19908116603f01168101908282118183101715611c9c57611c9c611bec565b81604052809350858152868686011115611cb4575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611cdc575f80fd5b61196d83833560208501611c5a565b5f805f805f60a08688031215611cff575f80fd5b853594506020860135611d1181611bc8565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611d3b575f80fd5b908701906060828a031215611d4e575f80fd5b611d56611c00565b8235611d6181611bc8565b81526020830135611d7181611c4d565b6020820152604083013582811115611d87575f80fd5b611d938b828601611ccd565b6040830152508093505050509295509295909350565b5f60208284031215611db9575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f805f805f805f60e0888a031215611e53575f80fd5b8735611e5e81611bc8565b96506020880135611e6e81611bc8565b95506040880135611e7e81611bc8565b94506060880135611e8e81611bc8565b93506080880135611e9e81611bc8565b9699959850939692959460a0840135945060c09093013592915050565b5f60808284031215611ecb575f80fd5b6040516080810181811067ffffffffffffffff82111715611eee57611eee611bec565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611f30575f80fd5b611f38611c29565b9050611f4382611bdc565b8152611f5160208301611bdc565b6020820152611f6260408301611bdc565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611fbf818401611bdc565b90820152610160611fd1838201611bdc565b90820152610180611fe3838201611bdc565b908201526101a0611ff5838201611bdc565b908201526101c061200884848301611ebb565b9082015292915050565b5f805f805f6102c08688031215612027575f80fd5b853594506120388760208801611f1f565b935061026086013567ffffffffffffffff811115612054575f80fd5b61206088828901611ccd565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215612090575f80fd5b85359450602086013567ffffffffffffffff808211156120ae575f80fd5b818801915088601f8301126120c1575f80fd5b6120d089833560208501611c5a565b95506120df8960408a01611f1f565b94506102808801359150808211156120f5575f80fd5b5061210288828901611ccd565b959894975092956102a001359392505050565b600181811c9082168061212957607f821691505b60208210810361214757634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a0840152611a0360c0840182611b8b565b5f602082840312156121a2575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b81810381811115611574576115746121a9565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b81516001600160a01b031681526102408101602083015161223f60208401826001600160a01b03169052565b50604083015161225a60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516122c0828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611e35565b80516001600160a01b03168252602081015161235060208401826001600160a01b03169052565b50604081015161236b60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516123dd828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526116af565b5f6102c06124548388612329565b6001600160a01b038616610260840152610280830181905261247881840186611b8b565b915050826102a083015295945050505050565b5f6020828403121561249b575f80fd5b815161196d81611bc8565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526124da8184018e611b8b565b90506124e9602084018d612329565b6001600160a01b038b81166102808501528382036102a085015261250d828c611b8b565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f60208284031215612559575f80fd5b815160ff8116811461196d575f80fd5b60ff8281168282160390811115611574576115746121a9565b600181815b808511156125bc57815f19048211156125a2576125a26121a9565b808516156125af57918102915b93841c9390800290612587565b509250929050565b5f826125d257506001611574565b816125de57505f611574565b81600181146125f457600281146125fe5761261a565b6001915050611574565b60ff84111561260f5761260f6121a9565b50506001821b611574565b5060208310610133831016604e8410600b841016171561263d575081810a611574565b6126478383612582565b805f190482111561265a5761265a6121a9565b029392505050565b5f61196d60ff8416836125c4565b5f60a08284031215612680575f80fd5b60405160a0810181811067ffffffffffffffff821117156126a3576126a3611bec565b60405282516126b181611bc8565b815260208301516126c181611bc8565b602082015260408301516126d481611bc8565b604082015260608301516126e781611bc8565b60608201526080928301519281019290925250919050565b5f8261271957634e487b7160e01b5f52601260045260245ffd5b500690565b5f6020828403121561272e575f80fd5b815161196d81611c4d565b5f825161274a818460208701611b69565b919091019291505056fe4d6f7270686f426c7565487970657264726976654465706c6f796572436f6f7264696e61746f72a264697066735822122088f5dc35393f002df524f63936fa93aa619fb65868e078cd28d496dc269cebe764736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(address,address,address,address,address,uint256,uint256)": "43dd8fef",
        "convertToShares(address,address,address,address,address,uint256,uint256)": "e71c2aa1",
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
