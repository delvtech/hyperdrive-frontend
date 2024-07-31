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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002bcf38038062002bcf8339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a7565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000373975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a257600081815260208120601f850160051c810160208610156200027d5750805b601f850160051c820191505b818110156200029e5782815560010162000289565b5050505b505050565b81516001600160401b03811115620002c357620002c36200008d565b620002db81620002d4845462000218565b8462000254565b602080601f831160018114620003135760008415620002fa5750858301515b600019600386901b1c1916600185901b1785556200029e565b600085815260208120601f198616915b82811015620003445788860151825594840194600190910190840162000323565b5085821015620003635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516127c26200040d600039600081816102c50152610d190152600081816103450152610c050152600081816103ad0152610af101526000818161031101526109dd01526000818161037901526107f2015260008181610435015261105b01526000818161040101528181610579015281816107170152610e2b01526127c26000f3fe6080604052600436106100fe5760003560e01c8063aa8cd6c411610095578063c45a015511610064578063c45a0155146103ef578063c83e1f5114610423578063ce34a8c314610457578063e990eba814610477578063e99be3961461049757600080fd5b8063aa8cd6c414610333578063ab71905f14610367578063b6cb11181461039b578063c1510618146103cf57600080fd5b806337404017116100d1578063374040171461018457806354fd4d5014610283578063966ecd1c146102b3578063a085fa30146102ff57600080fd5b806304baa00b146101035780630550e6e41461012e57806306fdde031461015c57806316abfc7014610171575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611cb9565b60405180910390f35b34801561013a57600080fd5b5061014e610149366004611cf1565b6104c7565b604051908152602001610125565b34801561016857600080fd5b506101186104de565b61014e61017f366004611e39565b61056c565b34801561019057600080fd5b5061027661019f366004611efe565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611f17565b34801561028f57600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610118565b3480156102bf57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561030b57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561033f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561037357600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a757600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b506102e76103ea3660046120ef565b61070a565b3480156103fb57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561046357600080fd5b5061014e610472366004611cf1565b610e11565b34801561048357600080fd5b506102e761049236600461215d565b610e1e565b3480156104a357600080fd5b50600561014e565b60405180606001604052806021815260200161276c6021913981565b60006104d4848484611178565b90505b9392505050565b600080546104eb906121fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610517906121fe565b80156105645780601f1061053957610100808354040283529160200191610564565b820191906000526020600020905b81548152906001019060200180831161054757829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105b757604051634084351160e01b815260040160405180910390fd5b6105bf61119c565b6000868152600160205260409020600301546001600160a01b0316806105f85760405163952b05cb60e01b815260040160405180910390fd5b6000610606828888876111bd565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161063993929190612238565b60206040518083038185885af1158015610657573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061067c919061227e565b9250600061068a82346122ad565b905080156106fd57604051600090339083908381818185875af1925050503d80600081146106d4576040519150601f19603f3d011682016040523d82523d6000602084013e6106d9565b606091505b50509050806106fb576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075557604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036108ea5780541561078b57604051633be1b34d60e11b815260040160405180910390fd5b61079486611341565b60006107a08787611555565b90506000876040516020016107b591906122c0565b60405160208183030381529060405280519060200120905060008780519060200120905060006107e48a6115dc565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b60405160200161083d929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610871939291906124f3565b6020604051808303816000875af1158015610890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b49190612527565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610701565b600087815260016020526040902054806109175760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161092991906122c0565b604051602081830303815290604052805190602001201461095d5760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461098757604051631a3272d160e31b815260040160405180910390fd5b61099087611341565b600061099b886115dc565b6002840154608082015290506001869003610abc5760058301546001600160a01b0316156109db5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610a2193929190612544565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610a55939291906124f3565b6020604051808303816000875af1158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a989190612527565b6005840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600203610bd05760068301546001600160a01b031615610aef5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610b3593929190612544565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610b69939291906124f3565b6020604051808303816000875af1158015610b88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bac9190612527565b6006840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600303610ce45760078301546001600160a01b031615610c035760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610c4993929190612544565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610c7d939291906124f3565b6020604051808303816000875af1158015610c9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc09190612527565b6007840180546001600160a01b0319166001600160a01b03831617905593506106fd565b85600403610df85760088301546001600160a01b031615610d175760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610d5d93929190612544565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610d91939291906124f3565b6020604051808303816000875af1158015610db0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd49190612527565b6008840180546001600160a01b0319166001600160a01b03831617905593506106fd565b604051631d9f815960e11b815260040160405180910390fd5b60006104d48484846116aa565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6957604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f1257604051632c95caeb60e01b815260040160405180910390fd5b8051610f315760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f56575060a08101516001600160a01b0316155b80610f6c575060c08101516001600160a01b0316155b80610f82575060e08101516001600160a01b0316155b80610f9957506101008101516001600160a01b0316155b15610fb75760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610fca9087906020016122c0565b6040516020818303038152906040528051906020012014610ffe5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461102957604051631a3272d160e31b815260040160405180910390fd5b61103285611341565b600061103d866115dc565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c6040516020016110c1929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b81526004016110fb99989796959493929190612565565b6020604051808303816000875af115801561111a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113e9190612527565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b60006104d46b033b2e3c9fd0803ce800000061119486866116cd565b84919061173b565b34156111bb57604051631574f9f360e01b815260040160405180910390fd5b565b6000806000866001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611200573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112249190612527565b90508360200151156112385780915061130b565b866001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129a9190612527565b915061130881836001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113029190612527565b87610e11565b94505b6113206001600160a01b038316873088611759565b6113346001600160a01b03831688876117c6565b5060009695505050505050565b61134a81611856565b60208101516001600160a01b03166113755760405163073f739d60e51b815260040160405180910390fd5b80602001516001600160a01b031663b16a19de6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113db9190612527565b6001600160a01b031681600001516001600160a01b03161461141057604051630722152560e11b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611454573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147891906125e1565b6114829190612604565b61148d90600a612701565b816080015110156114b1576040516349db44f560e01b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151991906125e1565b6115239190612604565b61152e90600a612701565b8160a001511015611552576040516318c9522360e11b815260040160405180910390fd5b50565b60006115d3836000015184602001516001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c59190612527565b670de0b6b3a7640000610e11565b90505b92915050565b6115e4611b82565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b60006104d46116b985856116cd565b83906b033b2e3c9fd0803ce800000061173b565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015611717573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d3919061227e565b600082600019048411830215820261175257600080fd5b5091020490565b6040516001600160a01b0384811660248301528381166044830152606482018390526117c09186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061196b565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261181784826119d8565b6117c0576040516001600160a01b0384811660248301526000604483015261184c91869182169063095ea7b39060640161178e565b6117c0848261196b565b6103e88160800151101561187d576040516349db44f560e01b815260040160405180910390fd5b8061010001516000036118a357604051635428734d60e01b815260040160405180910390fd5b8061010001518160e0015110806118cd57508061010001518160e001516118ca9190612710565b15155b156118eb5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a764000010806119175750670de0b6b3a7640000816101c0015160200151115b806119325750670de0b6b3a7640000816101c0015160400151115b8061194d5750670de0b6b3a7640000816101c0015160600151115b15611552576040516322f72cc360e11b815260040160405180910390fd5b60006119806001600160a01b03841683611a7b565b905080516000141580156119a55750808060200190518101906119a39190612732565b155b156119d357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516119f5919061274f565b6000604051808303816000865af19150503d8060008114611a32576040519150601f19603f3d011682016040523d82523d6000602084013e611a37565b606091505b5091509150818015611a61575080511580611a61575080806020019051810190611a619190612732565b80156107015750505050506001600160a01b03163b151590565b60606115d38383600084600080856001600160a01b03168486604051611aa1919061274f565b60006040518083038185875af1925050503d8060008114611ade576040519150601f19603f3d011682016040523d82523d6000602084013e611ae3565b606091505b5091509150611af3868383611afd565b9695505050505050565b606082611b1257611b0d82611b59565b6104d7565b8151158015611b2957506001600160a01b0384163b155b15611b5257604051639996b31560e01b81526001600160a01b03851660048201526024016119ca565b50806104d7565b805115611b695780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611c646040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611c84578181015183820152602001611c6c565b50506000910152565b60008151808452611ca5816020860160208601611c69565b601f01601f19169290920160200192915050565b6020815260006115d36020830184611c8d565b6001600160a01b038116811461155257600080fd5b8035611cec81611ccc565b919050565b600080600060608486031215611d0657600080fd5b8335611d1181611ccc565b92506020840135611d2181611ccc565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611d6b57611d6b611d32565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611d6b57611d6b611d32565b801515811461155257600080fd5b600067ffffffffffffffff80841115611dbe57611dbe611d32565b604051601f8501601f19908116603f01168101908282118183101715611de657611de6611d32565b81604052809350858152868686011115611dff57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611e2a57600080fd5b6115d383833560208501611da3565b600080600080600060a08688031215611e5157600080fd5b853594506020860135611e6381611ccc565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611e8e57600080fd5b908701906060828a031215611ea257600080fd5b611eaa611d48565b8235611eb581611ccc565b81526020830135611ec581611d95565b6020820152604083013582811115611edc57600080fd5b611ee88b828601611e19565b6040830152508093505050509295509295909350565b600060208284031215611f1057600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611fa657600080fd5b6040516080810181811067ffffffffffffffff82111715611fc957611fc9611d32565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610240828403121561200d57600080fd5b612015611d71565b905061202082611ce1565b815261202e60208301611ce1565b602082015261203f60408301611ce1565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014061209c818401611ce1565b908201526101606120ae838201611ce1565b908201526101806120c0838201611ce1565b908201526101a06120d2838201611ce1565b908201526101c06120e584848301611f94565b9082015292915050565b60008060008060006102c0868803121561210857600080fd5b853594506121198760208801611ffa565b935061026086013567ffffffffffffffff81111561213657600080fd5b61214288828901611e19565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561217657600080fd5b85359450602086013567ffffffffffffffff8082111561219557600080fd5b818801915088601f8301126121a957600080fd5b6121b889833560208501611da3565b95506121c78960408a01611ffa565b94506102808801359150808211156121de57600080fd5b506121eb88828901611e19565b959894975092956102a001359392505050565b600181811c9082168061221257607f821691505b60208210810361223257634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611af360c0840182611c8d565b60006020828403121561229057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156115d6576115d6612297565b81516001600160a01b03168152610240810160208301516122ec60208401826001600160a01b03169052565b50604083015161230760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161236d828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611f8c565b80516001600160a01b0316825260208101516123fd60208401826001600160a01b03169052565b50604081015161241860408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161248a828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526117c0565b60006102a061250283876123d6565b8061026084015261251581840186611c8d565b91505082610280830152949350505050565b60006020828403121561253957600080fd5b81516104d781611ccc565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526125798184018d611c8d565b9050612588602084018c6123d6565b82810361028084015261259b818b611c8d565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b6000602082840312156125f357600080fd5b815160ff811681146104d757600080fd5b60ff82811682821603908111156115d6576115d6612297565b600181815b8085111561265857816000190482111561263e5761263e612297565b8085161561264b57918102915b93841c9390800290612622565b509250929050565b60008261266f575060016115d6565b8161267c575060006115d6565b8160018114612692576002811461269c576126b8565b60019150506115d6565b60ff8411156126ad576126ad612297565b50506001821b6115d6565b5060208310610133831016604e8410600b84101617156126db575081810a6115d6565b6126e5838361261d565b80600019048211156126f9576126f9612297565b029392505050565b60006115d360ff841683612660565b60008261272d57634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561274457600080fd5b81516104d781611d95565b60008251612761818460208701611c69565b919091019291505056fe41617665487970657264726976654465706c6f796572436f6f7264696e61746f72a264697066735822122036a8494345e832b10359f0b3ae535a66ac550721dc61e71660db389397a3745e64736f6c63430008140033',
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
