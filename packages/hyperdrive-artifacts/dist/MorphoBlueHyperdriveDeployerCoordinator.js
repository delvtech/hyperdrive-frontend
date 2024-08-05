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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002b8d38038062002b8d8339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a7565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000373975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a257600081815260208120601f850160051c810160208610156200027d5750805b601f850160051c820191505b818110156200029e5782815560010162000289565b5050505b505050565b81516001600160401b03811115620002c357620002c36200008d565b620002db81620002d4845462000218565b8462000254565b602080601f831160018114620003135760008415620002fa5750858301515b600019600386901b1c1916600185901b1785556200029e565b600085815260208120601f198616915b82811015620003445788860151825594840194600190910190840162000323565b5085821015620003635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516127806200040d600039600081816102c50152610d950152600081816103450152610c810152600081816103ad0152610b6d0152600081816103110152610a59015260008181610379015261086e015260008181610435015261111001526000818161040101528181610562015281816107930152610ee001526127806000f3fe6080604052600436106100fe5760003560e01c8063aa8cd6c411610095578063c45a015511610064578063c45a0155146103ef578063c83e1f5114610423578063e71c2aa114610457578063e990eba814610477578063e99be3961461049757600080fd5b8063aa8cd6c414610333578063ab71905f14610367578063b6cb11181461039b578063c1510618146103cf57600080fd5b806343dd8fef116100d157806343dd8fef1461026357806354fd4d5014610283578063966ecd1c146102b3578063a085fa30146102ff57600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc70146101435780633740401714610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611b5b565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611c9a565b610555565b604051908152602001610125565b34801561017057600080fd5b5061025661017f366004611d5f565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611d78565b34801561026f57600080fd5b5061015661027e366004611df5565b6106f3565b34801561028f57600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610118565b3480156102bf57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561030b57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561033f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561037357600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a757600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b506102e76103ea366004611fd3565b610786565b3480156103fb57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561046357600080fd5b50610156610472366004611df5565b610e8d565b34801561048357600080fd5b506102e7610492366004612041565b610ed3565b3480156104a357600080fd5b506005610156565b6040518060600160405280602781526020016127246027913981565b600080546104d4906120e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610500906120e2565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a861122d565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef8288888761124e565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106229392919061211c565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106659190612162565b925060006106738234612191565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090610739908b908b908b908b908b908b908b906004016121a4565b602060405180830381865af4158015610756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a9190612162565b98975050505050505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107d157604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109665780541561080757604051633be1b34d60e11b815260040160405180910390fd5b6108108661130d565b600061081c87876114af565b905060008760405160200161083191906121e7565b60405160208183030381529060405280519060200120905060008780519060200120905060006108608a6114fd565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b6040516020016108b9929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b81526004016108ed9392919061241a565b6020604051808303816000875af115801561090c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610930919061244e565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109935760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109a591906121e7565b60405160208183030381529060405280519060200120146109d95760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a0357604051631a3272d160e31b815260040160405180910390fd5b610a0c8761130d565b6000610a17886114fd565b6002840154608082015290506001869003610b385760058301546001600160a01b031615610a575760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610a9d9392919061246b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610ad19392919061241a565b6020604051808303816000875af1158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b14919061244e565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610c4c5760068301546001600160a01b031615610b6b5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610bb19392919061246b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610be59392919061241a565b6020604051808303816000875af1158015610c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c28919061244e565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610d605760078301546001600160a01b031615610c7f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610cc59392919061246b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610cf99392919061241a565b6020604051808303816000875af1158015610d18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3c919061244e565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610e745760088301546001600160a01b031615610d935760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610dd99392919061246b565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610e0d9392919061241a565b6020604051808303816000875af1158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e50919061244e565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390610739908b908b908b908b908b908b908b906004016121a4565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f1e57604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fc757604051632c95caeb60e01b815260040160405180910390fd5b8051610fe65760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b0316158061100b575060a08101516001600160a01b0316155b80611021575060c08101516001600160a01b0316155b80611037575060e08101516001600160a01b0316155b8061104e57506101008101516001600160a01b0316155b1561106c5760405163e97cc2bf60e01b815260040160405180910390fd5b805160405161107f9087906020016121e7565b60405160208183030381529060405280519060200120146110b35760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110de57604051631a3272d160e31b815260040160405180910390fd5b6110e78561130d565b60006110f2866114fd565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c604051602001611176929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b81526004016111b09998979695949392919061248c565b6020604051808303816000875af11580156111cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f3919061244e565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561124c57604051631574f9f360e01b815260040160405180910390fd5b565b600081602001516112725760405163350b944160e11b815260040160405180910390fd5b6000856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d6919061244e565b90506112ed6001600160a01b0382168630876115cb565b6113016001600160a01b0382168786611638565b50600095945050505050565b611316816116c8565b60208101516001600160a01b0316156113425760405163073f739d60e51b815260040160405180910390fd5b80516001600160a01b031661136a57604051630722152560e11b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d29190612508565b6113dc919061252b565b6113e790600a612628565b8160800151101561140b576040516349db44f560e01b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561144f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114739190612508565b61147d919061252b565b61148890600a612628565b8160a0015110156114ac576040516318c9522360e11b815260040160405180910390fd5b50565b600080828060200190518101906114c69190612637565b8051855160208301516040840151606085015160808601519596506114f395670de0b6b3a76400006106f3565b9150505b92915050565b611505611a24565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526116329186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506117dd565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611689848261184a565b611632576040516001600160a01b038481166024830152600060448301526116be91869182169063095ea7b390606401611600565b61163284826117dd565b6103e8816080015110156116ef576040516349db44f560e01b815260040160405180910390fd5b80610100015160000361171557604051635428734d60e01b815260040160405180910390fd5b8061010001518160e00151108061173f57508061010001518160e0015161173c91906126c8565b15155b1561175d5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a764000010806117895750670de0b6b3a7640000816101c0015160200151115b806117a45750670de0b6b3a7640000816101c0015160400151115b806117bf5750670de0b6b3a7640000816101c0015160600151115b156114ac576040516322f72cc360e11b815260040160405180910390fd5b60006117f26001600160a01b038416836118ed565b9050805160001415801561181757508080602001905181019061181591906126ea565b155b1561184557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516118679190612707565b6000604051808303816000865af19150503d80600081146118a4576040519150601f19603f3d011682016040523d82523d6000602084013e6118a9565b606091505b50915091508180156118d35750805115806118d35750808060200190518101906118d391906126ea565b80156106ea5750505050506001600160a01b03163b151590565b60606118fb83836000611902565b9392505050565b6060814710156119275760405163cd78605960e01b815230600482015260240161183c565b600080856001600160a01b031684866040516119439190612707565b60006040518083038185875af1925050503d8060008114611980576040519150601f19603f3d011682016040523d82523d6000602084013e611985565b606091505b509150915061199586838361199f565b9695505050505050565b6060826119b4576119af826119fb565b6118fb565b81511580156119cb57506001600160a01b0384163b155b156119f457604051639996b31560e01b81526001600160a01b038516600482015260240161183c565b50806118fb565b805115611a0b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611b066040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611b26578181015183820152602001611b0e565b50506000910152565b60008151808452611b47816020860160208601611b0b565b601f01601f19169290920160200192915050565b6020815260006118fb6020830184611b2f565b6001600160a01b03811681146114ac57600080fd5b8035611b8e81611b6e565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611bcc57611bcc611b93565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611bcc57611bcc611b93565b80151581146114ac57600080fd5b600067ffffffffffffffff80841115611c1f57611c1f611b93565b604051601f8501601f19908116603f01168101908282118183101715611c4757611c47611b93565b81604052809350858152868686011115611c6057600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611c8b57600080fd5b6118fb83833560208501611c04565b600080600080600060a08688031215611cb257600080fd5b853594506020860135611cc481611b6e565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611cef57600080fd5b908701906060828a031215611d0357600080fd5b611d0b611ba9565b8235611d1681611b6e565b81526020830135611d2681611bf6565b6020820152604083013582811115611d3d57600080fd5b611d498b828601611c7a565b6040830152508093505050509295509295909350565b600060208284031215611d7157600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600080600080600080600060e0888a031215611e1057600080fd5b8735611e1b81611b6e565b96506020880135611e2b81611b6e565b95506040880135611e3b81611b6e565b94506060880135611e4b81611b6e565b93506080880135611e5b81611b6e565b9699959850939692959460a0840135945060c09093013592915050565b600060808284031215611e8a57600080fd5b6040516080810181811067ffffffffffffffff82111715611ead57611ead611b93565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611ef157600080fd5b611ef9611bd2565b9050611f0482611b83565b8152611f1260208301611b83565b6020820152611f2360408301611b83565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611f80818401611b83565b90820152610160611f92838201611b83565b90820152610180611fa4838201611b83565b908201526101a0611fb6838201611b83565b908201526101c0611fc984848301611e78565b9082015292915050565b60008060008060006102c08688031215611fec57600080fd5b85359450611ffd8760208801611ede565b935061026086013567ffffffffffffffff81111561201a57600080fd5b61202688828901611c7a565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561205a57600080fd5b85359450602086013567ffffffffffffffff8082111561207957600080fd5b818801915088601f83011261208d57600080fd5b61209c89833560208501611c04565b95506120ab8960408a01611ede565b94506102808801359150808211156120c257600080fd5b506120cf88828901611c7a565b959894975092956102a001359392505050565b600181811c908216806120f657607f821691505b60208210810361211657634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261199560c0840182611b2f565b60006020828403121561217457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156114f7576114f761217b565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b81516001600160a01b031681526102408101602083015161221360208401826001600160a01b03169052565b50604083015161222e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612294828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611ded565b80516001600160a01b03168252602081015161232460208401826001600160a01b03169052565b50604081015161233f60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516123b1828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611632565b60006102a061242983876122fd565b8061026084015261243c81840186611b2f565b91505082610280830152949350505050565b60006020828403121561246057600080fd5b81516118fb81611b6e565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526124a08184018d611b2f565b90506124af602084018c6122fd565b8281036102808401526124c2818b611b2f565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b60006020828403121561251a57600080fd5b815160ff811681146118fb57600080fd5b60ff82811682821603908111156114f7576114f761217b565b600181815b8085111561257f5781600019048211156125655761256561217b565b8085161561257257918102915b93841c9390800290612549565b509250929050565b600082612596575060016114f7565b816125a3575060006114f7565b81600181146125b957600281146125c3576125df565b60019150506114f7565b60ff8411156125d4576125d461217b565b50506001821b6114f7565b5060208310610133831016604e8410600b8410161715612602575081810a6114f7565b61260c8383612544565b80600019048211156126205761262061217b565b029392505050565b60006118fb60ff841683612587565b600060a0828403121561264957600080fd5b60405160a0810181811067ffffffffffffffff8211171561266c5761266c611b93565b604052825161267a81611b6e565b8152602083015161268a81611b6e565b6020820152604083015161269d81611b6e565b604082015260608301516126b081611b6e565b60608201526080928301519281019290925250919050565b6000826126e557634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156126fc57600080fd5b81516118fb81611bf6565b60008251612719818460208701611b0b565b919091019291505056fe4d6f7270686f426c7565487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212204e4e986c2d82517f95af8d7f3a49237d2db7b237b1c8b6ffbb5b86fec6d2f53064736f6c63430008140033',
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
