export const ERC4626HyperdriveDeployerCoordinator = {
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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002aad38038062002aad8339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a7565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000373975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a257600081815260208120601f850160051c810160208610156200027d5750805b601f850160051c820191505b818110156200029e5782815560010162000289565b5050505b505050565b81516001600160401b03811115620002c357620002c36200008d565b620002db81620002d4845462000218565b8462000254565b602080601f831160018114620003135760008415620002fa5750858301515b600019600386901b1c1916600185901b1785556200029e565b600085815260208120601f198616915b82811015620003445788860151825594840194600190910190840162000323565b5085821015620003635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516126a06200040d600039600081816102e50152610d230152600081816103650152610c0f0152600081816103cd0152610afb01526000818161033101526109e701526000818161039901526107fc015260008181610455015261105801526000818161042101528181610562015281816107210152610e2801526126a06000f3fe6080604052600436106100fe5760003560e01c8063a085fa3011610095578063c151061811610064578063c1510618146103ef578063c45a01551461040f578063c83e1f5114610443578063e990eba814610477578063e99be3961461049757600080fd5b8063a085fa301461031f578063aa8cd6c414610353578063ab71905f14610387578063b6cb1118146103bb57600080fd5b806337404017116100d157806337404017146101845780633e5541f11461028357806354fd4d50146102a3578063966ecd1c146102d357600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc7014610143578063251f6c4214610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611b9f565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611cde565b610555565b604051908152602001610125565b34801561017057600080fd5b5061015661017f366004611da3565b6106f3565b34801561019057600080fd5b5061027661019f366004611dcf565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611de8565b34801561028f57600080fd5b5061015661029e366004611da3565b610708565b3480156102af57600080fd5b506040805180820190915260078152663b18971817189b60c91b6020820152610118565b3480156102df57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561032b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561035f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561039357600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c757600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103fb57600080fd5b5061030761040a366004611fc0565b610714565b34801561041b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561044f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561048357600080fd5b5061030761049236600461202e565b610e1b565b3480156104a357600080fd5b506005610156565b6040518060600160405280602481526020016126476024913981565b600080546104d4906120cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610500906120cf565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a8611175565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef82888887611196565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161062293929190612109565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106659190612159565b925060006106738234612188565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006106ff83836112a6565b90505b92915050565b60006106ff8383611313565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036108f45780541561079557604051633be1b34d60e11b815260040160405180910390fd5b61079e86611343565b60006107aa8787611557565b90506000876040516020016107bf919061219b565b60405160208183030381529060405280519060200120905060008780519060200120905060006107ee8a61156f565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b604051602001610847929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161087b939291906123ce565b6020604051808303816000875af115801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be9190612402565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109215760405163398b1c0960e21b815260040160405180910390fd5b8087604051602001610933919061219b565b60405160208183030381529060405280519060200120146109675760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461099157604051631a3272d160e31b815260040160405180910390fd5b61099a87611343565b60006109a58861156f565b6002840154608082015290506001869003610ac65760058301546001600160a01b0316156109e55760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610a2b9392919061241f565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610a5f939291906123ce565b6020604051808303816000875af1158015610a7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa29190612402565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610bda5760068301546001600160a01b031615610af95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610b3f9392919061241f565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610b73939291906123ce565b6020604051808303816000875af1158015610b92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb69190612402565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610cee5760078301546001600160a01b031615610c0d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610c539392919061241f565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610c87939291906123ce565b6020604051808303816000875af1158015610ca6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cca9190612402565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610e025760088301546001600160a01b031615610d215760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b3237078289338d8a604051602001610d679392919061241f565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610d9b939291906123ce565b6020604051808303816000875af1158015610dba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dde9190612402565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6657604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f0f57604051632c95caeb60e01b815260040160405180910390fd5b8051610f2e5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f53575060a08101516001600160a01b0316155b80610f69575060c08101516001600160a01b0316155b80610f7f575060e08101516001600160a01b0316155b80610f9657506101008101516001600160a01b0316155b15610fb45760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610fc790879060200161219b565b6040516020818303038152906040528051906020012014610ffb5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461102657604051631a3272d160e31b815260040160405180910390fd5b61102f85611343565b600061103a8661156f565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663285fd4018b868b89608001518a60a001518b60c001518c60e001518d61010001518c8c6040516020016110be929190918252602082015260400190565b604051602081830303815290604052805190602001206040518a63ffffffff1660e01b81526004016110f899989796959493929190612440565b6020604051808303816000875af1158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b9190612402565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561119457604051631574f9f360e01b815260040160405180910390fd5b565b60008082602001511561120c57856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112059190612402565b9050611271565b856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa15801561124a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126e9190612402565b90505b6112866001600160a01b03821686308761163d565b61129a6001600160a01b03821687866116aa565b50600095945050505050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024015b602060405180830381865afa1580156112ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190612159565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f592906024016112d2565b61134c8161173a565b60208101516001600160a01b03166113775760405163073f739d60e51b815260040160405180910390fd5b80602001516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113dd9190612402565b6001600160a01b031681600001516001600160a01b03161461141257604051630722152560e11b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611456573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147a91906124bc565b61148491906124df565b61148f90600a6125dc565b816080015110156114b3576040516349db44f560e01b815260040160405180910390fd5b600381600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151b91906124bc565b61152591906124df565b61153090600a6125dc565b8160a001511015611554576040516318c9522360e11b815260040160405180910390fd5b50565b60006106ff8360200151670de0b6b3a76400006106f3565b611577611a68565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526116a49186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061184f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526116fb84826118bc565b6116a4576040516001600160a01b0384811660248301526000604483015261173091869182169063095ea7b390606401611672565b6116a4848261184f565b6103e881608001511015611761576040516349db44f560e01b815260040160405180910390fd5b80610100015160000361178757604051635428734d60e01b815260040160405180910390fd5b8061010001518160e0015110806117b157508061010001518160e001516117ae91906125eb565b15155b156117cf5760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a764000010806117fb5750670de0b6b3a7640000816101c0015160200151115b806118165750670de0b6b3a7640000816101c0015160400151115b806118315750670de0b6b3a7640000816101c0015160600151115b15611554576040516322f72cc360e11b815260040160405180910390fd5b60006118646001600160a01b0384168361195f565b90508051600014158015611889575080806020019051810190611887919061260d565b155b156118b757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516118d9919061262a565b6000604051808303816000865af19150503d8060008114611916576040519150601f19603f3d011682016040523d82523d6000602084013e61191b565b606091505b5091509150818015611945575080511580611945575080806020019051810190611945919061260d565b80156106ea5750505050506001600160a01b03163b151590565b60606106ff8383600084600080856001600160a01b03168486604051611985919061262a565b60006040518083038185875af1925050503d80600081146119c2576040519150601f19603f3d011682016040523d82523d6000602084013e6119c7565b606091505b50915091506119d78683836119e3565b925050505b9392505050565b6060826119f8576119f382611a3f565b6119dc565b8151158015611a0f57506001600160a01b0384163b155b15611a3857604051639996b31560e01b81526001600160a01b03851660048201526024016118ae565b50806119dc565b805115611a4f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611b4a6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611b6a578181015183820152602001611b52565b50506000910152565b60008151808452611b8b816020860160208601611b4f565b601f01601f19169290920160200192915050565b6020815260006106ff6020830184611b73565b6001600160a01b038116811461155457600080fd5b8035611bd281611bb2565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611c1057611c10611bd7565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611c1057611c10611bd7565b801515811461155457600080fd5b600067ffffffffffffffff80841115611c6357611c63611bd7565b604051601f8501601f19908116603f01168101908282118183101715611c8b57611c8b611bd7565b81604052809350858152868686011115611ca457600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611ccf57600080fd5b6106ff83833560208501611c48565b600080600080600060a08688031215611cf657600080fd5b853594506020860135611d0881611bb2565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611d3357600080fd5b908701906060828a031215611d4757600080fd5b611d4f611bed565b8235611d5a81611bb2565b81526020830135611d6a81611c3a565b6020820152604083013582811115611d8157600080fd5b611d8d8b828601611cbe565b6040830152508093505050509295509295909350565b60008060408385031215611db657600080fd5b8235611dc181611bb2565b946020939093013593505050565b600060208284031215611de157600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611e7757600080fd5b6040516080810181811067ffffffffffffffff82111715611e9a57611e9a611bd7565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611ede57600080fd5b611ee6611c16565b9050611ef182611bc7565b8152611eff60208301611bc7565b6020820152611f1060408301611bc7565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611f6d818401611bc7565b90820152610160611f7f838201611bc7565b90820152610180611f91838201611bc7565b908201526101a0611fa3838201611bc7565b908201526101c0611fb684848301611e65565b9082015292915050565b60008060008060006102c08688031215611fd957600080fd5b85359450611fea8760208801611ecb565b935061026086013567ffffffffffffffff81111561200757600080fd5b61201388828901611cbe565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561204757600080fd5b85359450602086013567ffffffffffffffff8082111561206657600080fd5b818801915088601f83011261207a57600080fd5b61208989833560208501611c48565b95506120988960408a01611ecb565b94506102808801359150808211156120af57600080fd5b506120bc88828901611cbe565b959894975092956102a001359392505050565b600181811c908216806120e357607f821691505b60208210810361210357634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261214f60c0840182611b73565b9695505050505050565b60006020828403121561216b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561070257610702612172565b81516001600160a01b03168152610240810160208301516121c760208401826001600160a01b03169052565b5060408301516121e260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612248828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611e5d565b80516001600160a01b0316825260208101516122d860208401826001600160a01b03169052565b5060408101516122f360408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612365828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526116a4565b60006102a06123dd83876122b1565b806102608401526123f081840186611b73565b91505082610280830152949350505050565b60006020828403121561241457600080fd5b81516119dc81611bb2565b6001600160a01b039390931683526020830191909152604082015260600190565b60006103608083526124548184018d611b73565b9050612463602084018c6122b1565b828103610280840152612476818b611b73565b6001600160a01b03998a166102a08501529789166102c084015250509386166102e085015291851661030084015290931661032082015261034001919091529392505050565b6000602082840312156124ce57600080fd5b815160ff811681146119dc57600080fd5b60ff828116828216039081111561070257610702612172565b600181815b8085111561253357816000190482111561251957612519612172565b8085161561252657918102915b93841c93908002906124fd565b509250929050565b60008261254a57506001610702565b8161255757506000610702565b816001811461256d576002811461257757612593565b6001915050610702565b60ff84111561258857612588612172565b50506001821b610702565b5060208310610133831016604e8410600b84101617156125b6575081810a610702565b6125c083836124f8565b80600019048211156125d4576125d4612172565b029392505050565b60006106ff60ff84168361253b565b60008261260857634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561261f57600080fd5b81516119dc81611c3a565b6000825161263c818460208701611b4f565b919091019291505056fe45524334363236487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220a7cd00d2314e24ac7a77549466749994abd390b65edaf47fa66b377c3ff7df1e64736f6c63430008140033',
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
        "name()": "06fdde03",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
