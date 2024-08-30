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
    bytecode: '0x6101606040523480156200001257600080fd5b5060405162002bc638038062002bc68339810160408190526200003591620000c0565b878787878787878760006200004b8982620002a9565b506001600160a01b0396871660805294861660a05292851660c05290841660e05283166101005282166101205216610140525062000375975050505050505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000bb57600080fd5b919050565b600080600080600080600080610100898b031215620000de57600080fd5b88516001600160401b0380821115620000f657600080fd5b818b0191508b601f8301126200010b57600080fd5b8151818111156200012057620001206200008d565b604051601f8201601f19908116603f011681019083821181831017156200014b576200014b6200008d565b81604052828152602093508e848487010111156200016857600080fd5b600091505b828210156200018c57848201840151818301850152908301906200016d565b6000848483010152809c50505050620001a7818c01620000a3565b98505050620001b960408a01620000a3565b9550620001c960608a01620000a3565b9450620001d960808a01620000a3565b9350620001e960a08a01620000a3565b9250620001f960c08a01620000a3565b91506200020960e08a01620000a3565b90509295985092959890939650565b600181811c908216806200022d57607f821691505b6020821081036200024e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a4576000816000526020600020601f850160051c810160208610156200027f5750805b601f850160051c820191505b81811015620002a0578281556001016200028b565b5050505b505050565b81516001600160401b03811115620002c557620002c56200008d565b620002dd81620002d6845462000218565b8462000254565b602080601f831160018114620003155760008415620002fc5750858301515b600019600386901b1c1916600185901b178555620002a0565b600085815260208120601f198616915b82811015620003465788860151825594840194600190910190840162000325565b5085821015620003655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161278d62000439600039600081816102e50152610dad0152600081816103650152610c770152600081816103cd0152610b410152600081816103310152610a0b01526000818161039901526107fd015260008181610455015261110501526000818161042101528181610562015281816107210152818161082d01528181610a3b01528181610b7101528181610ca701528181610ddd01528181610ed40152611136015261278d6000f3fe6080604052600436106100fe5760003560e01c8063a085fa3011610095578063c151061811610064578063c1510618146103ef578063c45a01551461040f578063c83e1f5114610443578063e990eba814610477578063e99be3961461049757600080fd5b8063a085fa301461031f578063aa8cd6c414610353578063ab71905f14610387578063b6cb1118146103bb57600080fd5b806337404017116100d157806337404017146101845780633e5541f11461028357806354fd4d50146102a3578063966ecd1c146102d357600080fd5b806304baa00b1461010357806306fdde031461012e57806316abfc7014610143578063251f6c4214610164575b600080fd5b34801561010f57600080fd5b506101186104ab565b6040516101259190611c73565b60405180910390f35b34801561013a57600080fd5b506101186104c7565b610156610151366004611db2565b610555565b604051908152602001610125565b34801561017057600080fd5b5061015661017f366004611e77565b6106f3565b34801561019057600080fd5b5061027661019f366004611ea3565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091525060009081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101259190611ebc565b34801561028f57600080fd5b5061015661029e366004611e77565b610708565b3480156102af57600080fd5b506040805180820190915260078152660ec625c605c62760cb1b6020820152610118565b3480156102df57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b34801561032b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561035f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561039357600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c757600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b3480156103fb57600080fd5b5061030761040a366004612094565b610714565b34801561041b57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561044f57600080fd5b506103077f000000000000000000000000000000000000000000000000000000000000000081565b34801561048357600080fd5b50610307610492366004612102565b610ec7565b3480156104a357600080fd5b506005610156565b6040518060600160405280602481526020016127346024913981565b600080546104d4906121a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610500906121a3565b801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a057604051634084351160e01b815260040160405180910390fd5b6105a8611244565b6000868152600160205260409020600301546001600160a01b0316806105e15760405163952b05cb60e01b815260040160405180910390fd5b60006105ef82888887611265565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b8152600401610622939291906121dd565b60206040518083038185885af1158015610640573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610665919061222d565b92506000610673823461225c565b905080156106e657604051600090339083908381818185875af1925050503d80600081146106bd576040519150601f19603f3d011682016040523d82523d6000602084013e6106c2565b606091505b50509050806106e4576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60006106ff8383611375565b90505b92915050565b60006106ff83836113e2565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075f57604051634084351160e01b815260040160405180910390fd5b6000868152600160205260408120908490036109175780541561079557604051633be1b34d60e11b815260040160405180910390fd5b61079f8686611412565b60006107ab8787611628565b90506000876040516020016107c0919061226f565b60405160208183030381529060405280519060200120905060008780519060200120905060006107ef8a611640565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c604051602001610869929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161089e94939291906124a2565b6020604051808303816000875af11580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e191906124e8565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106ea565b600087815260016020526040902054806109445760405163398b1c0960e21b815260040160405180910390fd5b8087604051602001610956919061226f565b604051602081830303815290604052805190602001201461098a5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109b457604051631a3272d160e31b815260040160405180910390fd5b6109be8787611412565b60006109c988611640565b6002840154608082015290506001869003610b0c5760058301546001600160a01b031615610a095760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a7093929190612505565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610aa594939291906124a2565b6020604051808303816000875af1158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae891906124e8565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600203610c425760068301546001600160a01b031615610b3f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ba693929190612505565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610bdb94939291906124a2565b6020604051808303816000875af1158015610bfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1e91906124e8565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600303610d785760078301546001600160a01b031615610c755760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610cdc93929190612505565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d1194939291906124a2565b6020604051808303816000875af1158015610d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5491906124e8565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e6565b85600403610eae5760088301546001600160a01b031615610dab5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e1293929190612505565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e4794939291906124a2565b6020604051808303816000875af1158015610e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8a91906124e8565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e6565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f1257604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fbb57604051632c95caeb60e01b815260040160405180910390fd5b8051610fda5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610fff575060a08101516001600160a01b0316155b80611015575060c08101516001600160a01b0316155b8061102b575060e08101516001600160a01b0316155b8061104257506101008101516001600160a01b0316155b156110605760405163e97cc2bf60e01b815260040160405180910390fd5b805160405161107390879060200161226f565b60405160208183030381529060405280519060200120146110a75760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110d257604051631a3272d160e31b815260040160405180910390fd5b6110dc8585611412565b60006110e786611640565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161118c929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111c79a99989796959493929190612526565b6020604051808303816000875af11580156111e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120a91906124e8565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561126357604051631574f9f360e01b815260040160405180910390fd5b565b6000808260200151156112db57856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d491906124e8565b9050611340565b856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133d91906124e8565b90505b6113556001600160a01b03821686308761170e565b6113696001600160a01b038216878661177b565b50600095945050505050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024015b602060405180830381865afa1580156113be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff919061222d565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f592906024016113a1565b61141c828261180b565b60208201516001600160a01b03166114475760405163073f739d60e51b815260040160405180910390fd5b81602001516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611489573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ad91906124e8565b6001600160a01b031682600001516001600160a01b0316146114e257604051630722152560e11b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611526573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154a91906125a9565b61155491906125cc565b61155f90600a6126c9565b82608001511015611583576040516349db44f560e01b815260040160405180910390fd5b600382600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115eb91906125a9565b6115f591906125cc565b61160090600a6126c9565b8260a001511015611624576040516318c9522360e11b815260040160405180910390fd5b5050565b60006106ff8360200151670de0b6b3a76400006106f3565b611648611b3c565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526117759186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611920565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526117cc848261198d565b611775576040516001600160a01b0384811660248301526000604483015261180191869182169063095ea7b390606401611743565b6117758482611920565b6103e882608001511015611832576040516349db44f560e01b815260040160405180910390fd5b81610100015160000361185857604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061188257508161010001518260e0015161187f91906126d8565b15155b156118a05760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806118cc5750670de0b6b3a7640000826101c0015160200151115b806118e75750670de0b6b3a7640000826101c0015160400151115b806119025750670de0b6b3a7640000826101c0015160600151115b15611624576040516322f72cc360e11b815260040160405180910390fd5b60006119356001600160a01b03841683611a30565b9050805160001415801561195a57508080602001905181019061195891906126fa565b155b1561198857604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516119aa9190612717565b6000604051808303816000865af19150503d80600081146119e7576040519150601f19603f3d011682016040523d82523d6000602084013e6119ec565b606091505b5091509150818015611a16575080511580611a16575080806020019051810190611a1691906126fa565b80156106ea5750505050506001600160a01b03163b151590565b60606106ff8383600084600080856001600160a01b03168486604051611a569190612717565b60006040518083038185875af1925050503d8060008114611a93576040519150601f19603f3d011682016040523d82523d6000602084013e611a98565b606091505b5091509150611aa8868383611ab4565b925050505b9392505050565b606082611ac957611ac482611b10565b611aad565b8151158015611ae057506001600160a01b0384163b155b15611b0957604051639996b31560e01b81526001600160a01b038516600482015260240161197f565b5080611aad565b805115611b205780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611c1e6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611c3e578181015183820152602001611c26565b50506000910152565b60008151808452611c5f816020860160208601611c23565b601f01601f19169290920160200192915050565b6020815260006106ff6020830184611c47565b6001600160a01b0381168114611b3957600080fd5b8035611ca681611c86565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611ce457611ce4611cab565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611ce457611ce4611cab565b8015158114611b3957600080fd5b600067ffffffffffffffff80841115611d3757611d37611cab565b604051601f8501601f19908116603f01168101908282118183101715611d5f57611d5f611cab565b81604052809350858152868686011115611d7857600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611da357600080fd5b6106ff83833560208501611d1c565b600080600080600060a08688031215611dca57600080fd5b853594506020860135611ddc81611c86565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611e0757600080fd5b908701906060828a031215611e1b57600080fd5b611e23611cc1565b8235611e2e81611c86565b81526020830135611e3e81611d0e565b6020820152604083013582811115611e5557600080fd5b611e618b828601611d92565b6040830152508093505050509295509295909350565b60008060408385031215611e8a57600080fd5b8235611e9581611c86565b946020939093013593505050565b600060208284031215611eb557600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b600060808284031215611f4b57600080fd5b6040516080810181811067ffffffffffffffff82111715611f6e57611f6e611cab565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611fb257600080fd5b611fba611cea565b9050611fc582611c9b565b8152611fd360208301611c9b565b6020820152611fe460408301611c9b565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140612041818401611c9b565b90820152610160612053838201611c9b565b90820152610180612065838201611c9b565b908201526101a0612077838201611c9b565b908201526101c061208a84848301611f39565b9082015292915050565b60008060008060006102c086880312156120ad57600080fd5b853594506120be8760208801611f9f565b935061026086013567ffffffffffffffff8111156120db57600080fd5b6120e788828901611d92565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c0868803121561211b57600080fd5b85359450602086013567ffffffffffffffff8082111561213a57600080fd5b818801915088601f83011261214e57600080fd5b61215d89833560208501611d1c565b955061216c8960408a01611f9f565b945061028088013591508082111561218357600080fd5b5061219088828901611d92565b959894975092956102a001359392505050565b600181811c908216806121b757607f821691505b6020821081036121d757634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a084015261222360c0840182611c47565b9695505050505050565b60006020828403121561223f57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561070257610702612246565b81516001600160a01b031681526102408101602083015161229b60208401826001600160a01b03169052565b5060408301516122b660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161231c828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611f31565b80516001600160a01b0316825260208101516123ac60208401826001600160a01b03169052565b5060408101516123c760408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612439828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611775565b60006102c06124b18388612385565b6001600160a01b03861661026084015261028083018190526124d581840186611c47565b915050826102a083015295945050505050565b6000602082840312156124fa57600080fd5b8151611aad81611c86565b6001600160a01b039390931683526020830191909152604082015260600190565b600061038080835261253a8184018e611c47565b9050612549602084018d612385565b6001600160a01b038b81166102808501528382036102a085015261256d828c611c47565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b6000602082840312156125bb57600080fd5b815160ff81168114611aad57600080fd5b60ff828116828216039081111561070257610702612246565b600181815b8085111561262057816000190482111561260657612606612246565b8085161561261357918102915b93841c93908002906125ea565b509250929050565b60008261263757506001610702565b8161264457506000610702565b816001811461265a576002811461266457612680565b6001915050610702565b60ff84111561267557612675612246565b50506001821b610702565b5060208310610133831016604e8410600b84101617156126a3575081810a610702565b6126ad83836125e5565b80600019048211156126c1576126c1612246565b029392505050565b60006106ff60ff841683612628565b6000826126f557634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561270c57600080fd5b8151611aad81611d0e565b60008251612729818460208701611c23565b919091019291505056fe45524334363236487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212203a807c12b7878a47d5833fd43cbbdf308ac3aa3bf68f539bf68116af406b72ad64736f6c63430008160033',
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
