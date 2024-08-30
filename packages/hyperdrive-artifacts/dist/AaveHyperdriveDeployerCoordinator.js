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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002ce838038062002ce88339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a9565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000375975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a4576000816000526020600020601f850160051c810160208610156200027f5750805b601f850160051c820191505b81811015620002a0578281556001016200028b565b5050505b505050565b81516001600160401b03811115620002c557620002c56200008d565b620002dd81620002d6845462000218565b8462000254565b602080601f831160018114620003155760008415620002fc5750858301515b600019600386901b1c1916600185901b178555620002a0565b600085815260208120601f198616915b82811015620003465788860151825594840194600190910190840162000325565b5085821015620003655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516128af62000439600039600081816102c50152610da30152600081816103450152610c6d0152600081816103ad0152610b370152600081816103110152610a0101526000818161037901526107f3015260008181610435015261110801526000818161040101528181610579015281816107170152818161082301528181610a3101528181610b6701528181610c9d01528181610dd301528181610ed7015261113901526128af6000f3fe6080604052600436106100fe5760003560e01c8063aa8cd6c411610095578063c45a015511610064578063c45a0155146103ef578063c83e1f5114610423578063ce34a8c314610457578063e990eba814610477578063e99be3961461049757600080fd5b8063aa8cd6c414610333578063ab71905f14610367578063b6cb11181461039b578063c1510618146103cf57600080fd5b806337404017116100d1578063374040171461018457806354fd4d5014610283578063966ecd1c146102b3578063a085fa30146102ff57600080fd5b806304baa00b146101035780630550e6e41461012e57806306fdde031461015c57806316abfc7014610171575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611d8d565b60405180910390f35b34801561013a57600080fd5b5061014e610149366004611dc5565b6104c7565b604051908152602001610125565b34801561016857600080fd5b506101186104de565b61014e61017f366004611f0d565b61056c565b34801561019057600080fd5b5061027661019f366004611fd2565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611feb565b34801561028f57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610118565b3480156102bf57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561030b57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561033f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561037357600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a757600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b506102e76103ea3660046121c3565b61070a565b3480156103fb57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561046357600080fd5b5061014e610472366004611dc5565b610ebd565b34801561048357600080fd5b506102e7610492366004612231565b610eca565b3480156104a357600080fd5b50600561014e565b6040518060600160405280602181526020016128596021913981565b60006104d4848484611247565b90505b9392505050565b600080546104eb906122d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610517906122d2565b80156105645780601f1061053957610100808354040283529160200191610564565b820191906000526020600020905b81548152906001019060200180831161054757829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105b757604051634084351160e01b815260040160405180910390fd5b6105bf61126b565b6000868152600160205260409020600301546001600160a01b0316806105f85760405163952b05cb60e01b815260040160405180910390fd5b60006106068288888761128c565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106399392919061230c565b60206040518083038185885af1158015610657573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061067c9190612352565b9250600061068a8234612381565b905080156106fd57604051600090339083908381818185875af1925050503d80600081146106d4576040519150601f19603f3d011682016040523d82523d6000602084013e6106d9565b606091505b50509050806106fb576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075557604051634084351160e01b815260040160405180910390fd5b60008681526001602052604081209084900361090d5780541561078b57604051633be1b34d60e11b815260040160405180910390fd5b6107958686611410565b60006107a18787611626565b90506000876040516020016107b69190612394565b60405160208183030381529060405280519060200120905060008780519060200120905060006107e58a6116ad565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c60405160200161085f929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161089494939291906125c7565b6020604051808303816000875af11580156108b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d7919061260d565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610701565b6000878152600160205260409020548061093a5760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161094c9190612394565b60405160208183030381529060405280519060200120146109805760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109aa57604051631a3272d160e31b815260040160405180910390fd5b6109b48787611410565b60006109bf886116ad565b6002840154608082015290506001869003610b025760058301546001600160a01b0316156109ff5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a669392919061262a565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a9b94939291906125c7565b6020604051808303816000875af1158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade919061260d565b6005840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600203610c385760068301546001600160a01b031615610b355760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b9c9392919061262a565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610bd194939291906125c7565b6020604051808303816000875af1158015610bf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c14919061260d565b6006840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600303610d6e5760078301546001600160a01b031615610c6b5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610cd29392919061262a565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d0794939291906125c7565b6020604051808303816000875af1158015610d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4a919061260d565b6007840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600403610ea45760088301546001600160a01b031615610da15760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e089392919061262a565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e3d94939291906125c7565b6020604051808303816000875af1158015610e5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e80919061260d565b6008840180546001600160a01b0319166001600160a01b03831617905593506106fd565b604051631d9f815960e11b815260040160405180910390fd5b60006104d484848461177b565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f1557604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fbe57604051632c95caeb60e01b815260040160405180910390fd5b8051610fdd5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611002575060a08101516001600160a01b0316155b80611018575060c08101516001600160a01b0316155b8061102e575060e08101516001600160a01b0316155b8061104557506101008101516001600160a01b0316155b156110635760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051611076908790602001612394565b60405160208183030381529060405280519060200120146110aa5760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110d557604051631a3272d160e31b815260040160405180910390fd5b6110df8585611410565b60006110ea866116ad565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161118f929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111ca9a9998979695949392919061264b565b6020604051808303816000875af11580156111e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120d919061260d565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b60006104d46b033b2e3c9fd0803ce8000000611263868661179e565b84919061180c565b341561128a57604051631574f9f360e01b815260040160405180910390fd5b565b6000806000866001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f3919061260d565b9050836020015115611307578091506113da565b866001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611345573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611369919061260d565b91506113d781836001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d1919061260d565b87610ebd565b94505b6113ef6001600160a01b03831687308861182a565b6114036001600160a01b0383168887611897565b5060009695505050505050565b61141a8282611927565b60208201516001600160a01b03166114455760405163073f739d60e51b815260040160405180910390fd5b81602001516001600160a01b031663b16a19de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ab919061260d565b6001600160a01b031682600001516001600160a01b0316146114e057604051630722152560e11b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611524573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154891906126ce565b61155291906126f1565b61155d90600a6127ee565b82608001511015611581576040516349db44f560e01b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e991906126ce565b6115f391906126f1565b6115fe90600a6127ee565b8260a001511015611622576040516318c9522360e11b815260040160405180910390fd5b5050565b60006116a4836000015184602001516001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa158015611672573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611696919061260d565b670de0b6b3a7640000610ebd565b90505b92915050565b6116b5611c56565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b60006104d461178a858561179e565b83906b033b2e3c9fd0803ce800000061180c565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa1580156117e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a49190612352565b600082600019048411830215820261182357600080fd5b5091020490565b6040516001600160a01b0384811660248301528381166044830152606482018390526118919186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611a3c565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526118e88482611aa9565b611891576040516001600160a01b0384811660248301526000604483015261191d91869182169063095ea7b39060640161185f565b6118918482611a3c565b6103e88260800151101561194e576040516349db44f560e01b815260040160405180910390fd5b81610100015160000361197457604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061199e57508161010001518260e0015161199b91906127fd565b15155b156119bc5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806119e85750670de0b6b3a7640000826101c0015160200151115b80611a035750670de0b6b3a7640000826101c0015160400151115b80611a1e5750670de0b6b3a7640000826101c0015160600151115b15611622576040516322f72cc360e11b815260040160405180910390fd5b6000611a516001600160a01b03841683611b4c565b90508051600014158015611a76575080806020019051810190611a74919061281f565b155b15611aa457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b031684604051611ac6919061283c565b6000604051808303816000865af19150503d8060008114611b03576040519150601f19603f3d011682016040523d82523d6000602084013e611b08565b606091505b5091509150818015611b32575080511580611b32575080806020019051810190611b32919061281f565b80156107015750505050506001600160a01b03163b151590565b60606116a48383600084600080856001600160a01b03168486604051611b72919061283c565b60006040518083038185875af1925050503d8060008114611baf576040519150601f19603f3d011682016040523d82523d6000602084013e611bb4565b606091505b5091509150611bc4868383611bce565b9695505050505050565b606082611be357611bde82611c2a565b6104d7565b8151158015611bfa57506001600160a01b0384163b155b15611c2357604051639996b31560e01b81526001600160a01b0385166004820152602401611a9b565b50806104d7565b805115611c3a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611d386040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611d58578181015183820152602001611d40565b50506000910152565b60008151808452611d79816020860160208601611d3d565b601f01601f19169290920160200192915050565b6020815260006116a46020830184611d61565b6001600160a01b0381168114611c5357600080fd5b8035611dc081611da0565b919050565b600080600060608486031215611dda57600080fd5b8335611de581611da0565b92506020840135611df581611da0565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611e3f57611e3f611e06565b8015158114611c5357600080fd5b600067ffffffffffffffff80841115611e9257611e92611e06565b604051601f8501601f19908116603f01168101908282118183101715611eba57611eba611e06565b81604052809350858152868686011115611ed357600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611efe57600080fd5b6116a483833560208501611e77565b600080600080600060a08688031215611f2557600080fd5b853594506020860135611f3781611da0565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611f6257600080fd5b908701906060828a031215611f7657600080fd5b611f7e611e1c565b8235611f8981611da0565b81526020830135611f9981611e69565b6020820152604083013582811115611fb057600080fd5b611fbc8b828601611eed565b6040830152508093505050509295509295909350565b600060208284031215611fe457600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b60006080828403121561207a57600080fd5b6040516080810181811067ffffffffffffffff8211171561209d5761209d611e06565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600061024082840312156120e157600080fd5b6120e9611e45565b90506120f482611db5565b815261210260208301611db5565b602082015261211360408301611db5565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140612170818401611db5565b90820152610160612182838201611db5565b90820152610180612194838201611db5565b908201526101a06121a6838201611db5565b908201526101c06121b984848301612068565b9082015292915050565b60008060008060006102c086880312156121dc57600080fd5b853594506121ed87602088016120ce565b935061026086013567ffffffffffffffff81111561220a57600080fd5b61221688828901611eed565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561224a57600080fd5b85359450602086013567ffffffffffffffff8082111561226957600080fd5b818801915088601f83011261227d57600080fd5b61228c89833560208501611e77565b955061229b8960408a016120ce565b94506102808801359150808211156122b257600080fd5b506122bf88828901611eed565b959894975092956102a001359392505050565b600181811c908216806122e657607f821691505b60208210810361230657634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611bc460c0840182611d61565b60006020828403121561236457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156116a7576116a761236b565b81516001600160a01b03168152610240810160208301516123c060208401826001600160a01b03169052565b5060408301516123db60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612441828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152612060565b80516001600160a01b0316825260208101516124d160208401826001600160a01b03169052565b5060408101516124ec60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161255e828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611891565b60006102c06125d683886124aa565b6001600160a01b03861661026084015261028083018190526125fa81840186611d61565b915050826102a083015295945050505050565b60006020828403121561261f57600080fd5b81516104d781611da0565b6001600160a01b039390931683526020830191909152604082015260600190565b600061038080835261265f8184018e611d61565b905061266e602084018d6124aa565b6001600160a01b038b81166102808501528382036102a0850152612692828c611d61565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b6000602082840312156126e057600080fd5b815160ff811681146104d757600080fd5b60ff82811682821603908111156116a7576116a761236b565b600181815b8085111561274557816000190482111561272b5761272b61236b565b8085161561273857918102915b93841c939080029061270f565b509250929050565b60008261275c575060016116a7565b81612769575060006116a7565b816001811461277f5760028114612789576127a5565b60019150506116a7565b60ff84111561279a5761279a61236b565b50506001821b6116a7565b5060208310610133831016604e8410600b84101617156127c8575081810a6116a7565b6127d2838361270a565b80600019048211156127e6576127e661236b565b029392505050565b60006116a460ff84168361274d565b60008261281a57634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561283157600080fd5b81516104d781611e69565b6000825161284e818460208701611d3d565b919091019291505056fe41617665487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220eacd68de4dd83fa1bee8ce7818f6831464d9968f119ee4918a094bf8a80bd0bf64736f6c63430008160033',
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
