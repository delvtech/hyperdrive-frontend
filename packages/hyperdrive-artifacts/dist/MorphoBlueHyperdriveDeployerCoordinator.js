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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002ca638038062002ca68339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a9565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000375975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a4576000816000526020600020601f850160051c810160208610156200027f5750805b601f850160051c820191505b81811015620002a0578281556001016200028b565b5050505b505050565b81516001600160401b03811115620002c557620002c56200008d565b620002dd81620002d6845462000218565b8462000254565b602080601f831160018114620003155760008415620002fc5750858301515b600019600386901b1c1916600185901b178555620002a0565b600085815260208120601f198616915b82811015620003465788860151825594840194600190910190840162000325565b5085821015620003655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161286d62000439600039600081816102c50152610e1f0152600081816103450152610ce90152600081816103ad0152610bb30152600081816103110152610a7d015260008181610379015261086f01526000818161043501526111bd01526000818161040101528181610562015281816107930152818161089f01528181610aad01528181610be301528181610d1901528181610e4f01528181610f8c01526111ee015261286d6000f3fe6080604052600436106100fe5760003560e01c8063aa8cd6c411610095578063c45a015511610064578063c45a0155146103ef578063c83e1f5114610423578063e71c2aa114610457578063e990eba814610477578063e99be3961461049757600080fd5b8063aa8cd6c414610333578063ab71905f14610367578063b6cb11181461039b578063c1510618146103cf57600080fd5b806343dd8fef116100d157806343dd8fef1461026357806354fd4d5014610283578063966ecd1c146102b3578063a085fa30146102ff57600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc70146101435780633740401714610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611c2f565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611d6e565b610555565b604051908152602001610125565b34801561017057600080fd5b5061025661017f366004611e33565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611e4c565b34801561026f57600080fd5b5061015661027e366004611ec9565b6106f3565b34801561028f57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610118565b3480156102bf57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561030b57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561033f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561037357600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a757600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b506102e76103ea3660046120a7565b610786565b3480156103fb57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561042f57600080fd5b506102e77f000000000000000000000000000000000000000000000000000000000000000081565b34801561046357600080fd5b50610156610472366004611ec9565b610f39565b34801561048357600080fd5b506102e7610492366004612115565b610f7f565b3480156104a357600080fd5b506005610156565b6040518060600160405280602781526020016128116027913981565b600080546104d4906121b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610500906121b6565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a86112fc565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef8288888761131d565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b8152600401610622939291906121f0565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106659190612236565b925060006106738234612265565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090610739908b908b908b908b908b908b908b90600401612278565b602060405180830381865af4158015610756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a9190612236565b98975050505050505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107d157604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109895780541561080757604051633be1b34d60e11b815260040160405180910390fd5b61081186866113dc565b600061081d8787611580565b905060008760405160200161083291906122bb565b60405160208183030381529060405280519060200120905060008780519060200120905060006108618a6115ce565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016108db929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161091094939291906124ee565b6020604051808303816000875af115801561092f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109539190612534565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109b65760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109c891906122bb565b60405160208183030381529060405280519060200120146109fc5760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a2657604051631a3272d160e31b815260040160405180910390fd5b610a3087876113dc565b6000610a3b886115ce565b6002840154608082015290506001869003610b7e5760058301546001600160a01b031615610a7b5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ae293929190612551565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b1794939291906124ee565b6020604051808303816000875af1158015610b36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5a9190612534565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610cb45760068301546001600160a01b031615610bb15760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c1893929190612551565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c4d94939291906124ee565b6020604051808303816000875af1158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c909190612534565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610dea5760078301546001600160a01b031615610ce75760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d4e93929190612551565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d8394939291906124ee565b6020604051808303816000875af1158015610da2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc69190612534565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610f205760088301546001600160a01b031615610e1d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e8493929190612551565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610eb994939291906124ee565b6020604051808303816000875af1158015610ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efc9190612534565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390610739908b908b908b908b908b908b908b90600401612278565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fca57604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561107357604051632c95caeb60e01b815260040160405180910390fd5b80516110925760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b031615806110b7575060a08101516001600160a01b0316155b806110cd575060c08101516001600160a01b0316155b806110e3575060e08101516001600160a01b0316155b806110fa57506101008101516001600160a01b0316155b156111185760405163e97cc2bf60e01b815260040160405180910390fd5b805160405161112b9087906020016122bb565b604051602081830303815290604052805190602001201461115f5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461118a57604051631a3272d160e31b815260040160405180910390fd5b61119485856113dc565b600061119f866115ce565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611244929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b815260040161127f9a99989796959493929190612572565b6020604051808303816000875af115801561129e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c29190612534565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561131b57604051631574f9f360e01b815260040160405180910390fd5b565b600081602001516113415760405163350b944160e11b815260040160405180910390fd5b6000856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a59190612534565b90506113bc6001600160a01b03821686308761169c565b6113d06001600160a01b0382168786611709565b50600095945050505050565b6113e68282611799565b60208201516001600160a01b0316156114125760405163073f739d60e51b815260040160405180910390fd5b81516001600160a01b031661143a57604051630722152560e11b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561147e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a291906125f5565b6114ac9190612618565b6114b790600a612715565b826080015110156114db576040516349db44f560e01b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561151f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154391906125f5565b61154d9190612618565b61155890600a612715565b8260a00151101561157c576040516318c9522360e11b815260040160405180910390fd5b5050565b600080828060200190518101906115979190612724565b8051855160208301516040840151606085015160808601519596506115c495670de0b6b3a76400006106f3565b9150505b92915050565b6115d6611af8565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526117039186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506118ae565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261175a848261191b565b611703576040516001600160a01b0384811660248301526000604483015261178f91869182169063095ea7b3906064016116d1565b61170384826118ae565b6103e8826080015110156117c0576040516349db44f560e01b815260040160405180910390fd5b8161010001516000036117e657604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061181057508161010001518260e0015161180d91906127b5565b15155b1561182e5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a7640000108061185a5750670de0b6b3a7640000826101c0015160200151115b806118755750670de0b6b3a7640000826101c0015160400151115b806118905750670de0b6b3a7640000826101c0015160600151115b1561157c576040516322f72cc360e11b815260040160405180910390fd5b60006118c36001600160a01b038416836119be565b905080516000141580156118e85750808060200190518101906118e691906127d7565b155b1561191657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b03168460405161193891906127f4565b6000604051808303816000865af19150503d8060008114611975576040519150601f19603f3d011682016040523d82523d6000602084013e61197a565b606091505b50915091508180156119a45750805115806119a45750808060200190518101906119a491906127d7565b80156106ea5750505050506001600160a01b03163b151590565b60606119cc838360006119d3565b9392505050565b6060814710156119f85760405163cd78605960e01b815230600482015260240161190d565b600080856001600160a01b03168486604051611a1491906127f4565b60006040518083038185875af1925050503d8060008114611a51576040519150601f19603f3d011682016040523d82523d6000602084013e611a56565b606091505b5091509150611a66868383611a70565b9695505050505050565b606082611a8557611a8082611acc565b6119cc565b8151158015611a9c57506001600160a01b0384163b155b15611ac557604051639996b31560e01b81526001600160a01b038516600482015260240161190d565b50806119cc565b805115611adc5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611bda6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611bfa578181015183820152602001611be2565b50506000910152565b60008151808452611c1b816020860160208601611bdf565b601f01601f19169290920160200192915050565b6020815260006119cc6020830184611c03565b6001600160a01b0381168114611af557600080fd5b8035611c6281611c42565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611ca057611ca0611c67565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611ca057611ca0611c67565b8015158114611af557600080fd5b600067ffffffffffffffff80841115611cf357611cf3611c67565b604051601f8501601f19908116603f01168101908282118183101715611d1b57611d1b611c67565b81604052809350858152868686011115611d3457600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611d5f57600080fd5b6119cc83833560208501611cd8565b600080600080600060a08688031215611d8657600080fd5b853594506020860135611d9881611c42565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611dc357600080fd5b908701906060828a031215611dd757600080fd5b611ddf611c7d565b8235611dea81611c42565b81526020830135611dfa81611cca565b6020820152604083013582811115611e1157600080fd5b611e1d8b828601611d4e565b6040830152508093505050509295509295909350565b600060208284031215611e4557600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600080600080600080600060e0888a031215611ee457600080fd5b8735611eef81611c42565b96506020880135611eff81611c42565b95506040880135611f0f81611c42565b94506060880135611f1f81611c42565b93506080880135611f2f81611c42565b9699959850939692959460a0840135945060c09093013592915050565b600060808284031215611f5e57600080fd5b6040516080810181811067ffffffffffffffff82111715611f8157611f81611c67565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611fc557600080fd5b611fcd611ca6565b9050611fd882611c57565b8152611fe660208301611c57565b6020820152611ff760408301611c57565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140612054818401611c57565b90820152610160612066838201611c57565b90820152610180612078838201611c57565b908201526101a061208a838201611c57565b908201526101c061209d84848301611f4c565b9082015292915050565b60008060008060006102c086880312156120c057600080fd5b853594506120d18760208801611fb2565b935061026086013567ffffffffffffffff8111156120ee57600080fd5b6120fa88828901611d4e565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561212e57600080fd5b85359450602086013567ffffffffffffffff8082111561214d57600080fd5b818801915088601f83011261216157600080fd5b61217089833560208501611cd8565b955061217f8960408a01611fb2565b945061028088013591508082111561219657600080fd5b506121a388828901611d4e565b959894975092956102a001359392505050565b600181811c908216806121ca57607f821691505b6020821081036121ea57634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611a6660c0840182611c03565b60006020828403121561224857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156115c8576115c861224f565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b81516001600160a01b03168152610240810160208301516122e760208401826001600160a01b03169052565b50604083015161230260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612368828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611ec1565b80516001600160a01b0316825260208101516123f860208401826001600160a01b03169052565b50604081015161241360408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612485828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611703565b60006102c06124fd83886123d1565b6001600160a01b038616610260840152610280830181905261252181840186611c03565b915050826102a083015295945050505050565b60006020828403121561254657600080fd5b81516119cc81611c42565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103808083526125868184018e611c03565b9050612595602084018d6123d1565b6001600160a01b038b81166102808501528382036102a08501526125b9828c611c03565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b60006020828403121561260757600080fd5b815160ff811681146119cc57600080fd5b60ff82811682821603908111156115c8576115c861224f565b600181815b8085111561266c5781600019048211156126525761265261224f565b8085161561265f57918102915b93841c9390800290612636565b509250929050565b600082612683575060016115c8565b81612690575060006115c8565b81600181146126a657600281146126b0576126cc565b60019150506115c8565b60ff8411156126c1576126c161224f565b50506001821b6115c8565b5060208310610133831016604e8410600b84101617156126ef575081810a6115c8565b6126f98383612631565b806000190482111561270d5761270d61224f565b029392505050565b60006119cc60ff841683612674565b600060a0828403121561273657600080fd5b60405160a0810181811067ffffffffffffffff8211171561275957612759611c67565b604052825161276781611c42565b8152602083015161277781611c42565b6020820152604083015161278a81611c42565b6040820152606083015161279d81611c42565b60608201526080928301519281019290925250919050565b6000826127d257634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156127e957600080fd5b81516119cc81611cca565b60008251612806818460208701611bdf565b919091019291505056fe4d6f7270686f426c7565487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212201f560d6c2c3c727a126e4c8b24cfee2c86aa9404676bfc8a0d7a75b1da34514264736f6c63430008160033',
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
