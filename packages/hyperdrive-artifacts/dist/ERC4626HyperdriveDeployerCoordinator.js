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
    bytecode: '0x61016060405234801562000011575f80fd5b5060405162002aea38038062002aea8339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516126d06200041a5f395f81816102d70152610d7401525f81816103550152610c4101525f81816103bb0152610b0e01525f818161032201526109db01525f818161038801526107d201525f818161044001526110c301525f818161040d01528181610547015281816106fb0152818161080201528181610a0b01528181610b3e01528181610c7101528181610da401528181610e9701526110f401526126d05ff3fe6080604052600436106100fa575f3560e01c8063a085fa3011610092578063c151061811610062578063c1510618146103dd578063c45a0155146103fc578063c83e1f511461042f578063e990eba814610462578063e99be39614610481575f80fd5b8063a085fa3014610311578063aa8cd6c414610344578063ab71905f14610377578063b6cb1118146103aa575f80fd5b806337404017116100cd578063374040171461017c5780633e5541f11461027857806354fd4d5014610297578063966ecd1c146102c6575f80fd5b806304baa00b146100fe57806306fdde031461012857806316abfc701461013c578063251f6c421461015d575b5f80fd5b348015610109575f80fd5b50610112610494565b60405161011f9190611bf4565b60405180910390f35b348015610133575f80fd5b506101126104b0565b61014f61014a366004611d29565b61053b565b60405190815260200161011f565b348015610168575f80fd5b5061014f610177366004611de7565b6106d0565b348015610187575f80fd5b5061026b610196366004611e11565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611e28565b348015610283575f80fd5b5061014f610292366004611de7565b6106e4565b3480156102a2575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b3480156102d1575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b34801561031c575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561034f575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b348015610382575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b5575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e8575f80fd5b506102f96103f7366004611ffc565b6106ef565b348015610407575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561043a575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561046d575f80fd5b506102f961047c366004612065565b610e8b565b34801561048c575f80fd5b50600561014f565b6040518060600160405280602481526020016126776024913981565b5f80546104bc906120ff565b80601f01602080910402602001604051908101604052809291908181526020018280546104e8906120ff565b80156105335780601f1061050a57610100808354040283529160200191610533565b820191905f5260205f20905b81548152906001019060200180831161051657829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461058557604051634084351160e01b815260040160405180910390fd5b61058d6111fe565b5f868152600160205260409020600301546001600160a01b0316806105c55760405163952b05cb60e01b815260040160405180910390fd5b5f6105d28288888761121f565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161060593929190612137565b60206040518083038185885af1158015610621573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106469190612186565b92505f61065382346121b1565b905080156106c3576040515f90339083908381818185875af1925050503d805f811461069a576040519150601f19603f3d011682016040523d82523d5f602084013e61069f565b606091505b50509050806106c1576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f6106db8383611329565b90505b92915050565b5f6106db8383611393565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461073957604051634084351160e01b815260040160405180910390fd5b5f868152600160205260408120908490036108e95780541561076e57604051633be1b34d60e11b815260040160405180910390fd5b61077886866113c2565b5f61078387876115cf565b90505f8760405160200161079791906121c4565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107c48a6115e6565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c60405160200161083e929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b815260040161087394939291906123f7565b6020604051808303815f875af115801561088f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108b3919061243c565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106c7565b5f87815260016020526040902054806109155760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161092791906121c4565b604051602081830303815290604052805190602001201461095b5760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461098557604051631a3272d160e31b815260040160405180910390fd5b61098f87876113c2565b5f610999886115e6565b6002840154608082015290506001869003610ad95760058301546001600160a01b0316156109d95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a4093929190612457565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a7594939291906123f7565b6020604051808303815f875af1158015610a91573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab5919061243c565b6005840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600203610c0c5760068301546001600160a01b031615610b0c5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b7393929190612457565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ba894939291906123f7565b6020604051808303815f875af1158015610bc4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610be8919061243c565b6006840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600303610d3f5760078301546001600160a01b031615610c3f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ca693929190612457565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610cdb94939291906123f7565b6020604051808303815f875af1158015610cf7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d1b919061243c565b6007840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600403610e725760088301546001600160a01b031615610d725760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610dd993929190612457565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e0e94939291906123f7565b6020604051808303815f875af1158015610e2a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e4e919061243c565b6008840180546001600160a01b0319166001600160a01b03831617905593506106c3565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ed557604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f7d57604051632c95caeb60e01b815260040160405180910390fd5b8051610f9c5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610fc1575060a08101516001600160a01b0316155b80610fd7575060c08101516001600160a01b0316155b80610fed575060e08101516001600160a01b0316155b8061100457506101008101516001600160a01b0316155b156110225760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110359087906020016121c4565b60405160208183030381529060405280519060200120146110695760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461109457604051631a3272d160e31b815260040160405180910390fd5b61109e85856113c2565b5f6110a8866115e6565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161114a929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111859a99989796959493929190612478565b6020604051808303815f875af11580156111a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c5919061243c565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561121d57604051631574f9f360e01b815260040160405180910390fd5b565b5f8082602001511561129257856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611267573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061128b919061243c565b90506112f5565b856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112ce573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112f2919061243c565b90505b61130a6001600160a01b0382168630876116b4565b61131e6001600160a01b0382168786611721565b505f95945050505050565b6040516303d1689d60e11b8152600481018290525f906001600160a01b038416906307a2d13a906024015b602060405180830381865afa15801561136f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106db9190612186565b6040516363737ac960e11b8152600481018290525f906001600160a01b0384169063c6e6f59290602401611354565b6113cc82826117b0565b60208201516001600160a01b03166113f75760405163073f739d60e51b815260040160405180910390fd5b81602001516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611437573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061145b919061243c565b6001600160a01b0316825f01516001600160a01b03161461148f57604051630722152560e11b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114d0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114f491906124fa565b6114fe919061251a565b61150990600a612613565b8260800151101561152d576040516349db44f560e01b815260040160405180910390fd5b6003825f01516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561156e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061159291906124fa565b61159c919061251a565b6115a790600a612613565b8260a0015110156115cb576040516318c9522360e11b815260040160405180910390fd5b5050565b5f6106db8360200151670de0b6b3a76400006106d0565b6115ee611ad3565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b03848116602483015283811660448301526064820183905261171b9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506118c4565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611772848261192f565b61171b576040516001600160a01b0384811660248301525f60448301526117a691869182169063095ea7b3906064016116e9565b61171b84826118c4565b6103e8826080015110156117d7576040516349db44f560e01b815260040160405180910390fd5b8161010001515f036117fc57604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061182657508161010001518260e001516118239190612621565b15155b156118445760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806118705750670de0b6b3a7640000826101c0015160200151115b8061188b5750670de0b6b3a7640000826101c0015160400151115b806118a65750670de0b6b3a7640000826101c0015160600151115b156115cb576040516322f72cc360e11b815260040160405180910390fd5b5f6118d86001600160a01b038416836119cc565b905080515f141580156118fc5750808060200190518101906118fa9190612640565b155b1561192a57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b03168460405161194a919061265b565b5f604051808303815f865af19150503d805f8114611983576040519150601f19603f3d011682016040523d82523d5f602084013e611988565b606091505b50915091508180156119b25750805115806119b25750808060200190518101906119b29190612640565b80156106c75750505050506001600160a01b03163b151590565b60606106db83835f845f80856001600160a01b031684866040516119f0919061265b565b5f6040518083038185875af1925050503d805f8114611a2a576040519150601f19603f3d011682016040523d82523d5f602084013e611a2f565b606091505b5091509150611a3f868383611a4b565b925050505b9392505050565b606082611a6057611a5b82611aa7565b611a44565b8151158015611a7757506001600160a01b0384163b155b15611aa057604051639996b31560e01b81526001600160a01b0385166004820152602401611921565b5080611a44565b805115611ab75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611ba260405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611bc1578181015183820152602001611ba9565b50505f910152565b5f8151808452611be0816020860160208601611ba7565b601f01601f19169290920160200192915050565b602081525f6106db6020830184611bc9565b6001600160a01b0381168114611ad0575f80fd5b8035611c2581611c06565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611c6157611c61611c2a565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611c6157611c61611c2a565b8015158114611ad0575f80fd5b5f67ffffffffffffffff80841115611cb257611cb2611c2a565b604051601f8501601f19908116603f01168101908282118183101715611cda57611cda611c2a565b81604052809350858152868686011115611cf2575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611d1a575f80fd5b6106db83833560208501611c98565b5f805f805f60a08688031215611d3d575f80fd5b853594506020860135611d4f81611c06565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611d79575f80fd5b908701906060828a031215611d8c575f80fd5b611d94611c3e565b8235611d9f81611c06565b81526020830135611daf81611c8b565b6020820152604083013582811115611dc5575f80fd5b611dd18b828601611d0b565b6040830152508093505050509295509295909350565b5f8060408385031215611df8575f80fd5b8235611e0381611c06565b946020939093013593505050565b5f60208284031215611e21575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611eb5575f80fd5b6040516080810181811067ffffffffffffffff82111715611ed857611ed8611c2a565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611f1a575f80fd5b611f22611c67565b9050611f2d82611c1a565b8152611f3b60208301611c1a565b6020820152611f4c60408301611c1a565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611fa9818401611c1a565b90820152610160611fbb838201611c1a565b90820152610180611fcd838201611c1a565b908201526101a0611fdf838201611c1a565b908201526101c0611ff284848301611ea5565b9082015292915050565b5f805f805f6102c08688031215612011575f80fd5b853594506120228760208801611f09565b935061026086013567ffffffffffffffff81111561203e575f80fd5b61204a88828901611d0b565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c0868803121561207a575f80fd5b85359450602086013567ffffffffffffffff80821115612098575f80fd5b818801915088601f8301126120ab575f80fd5b6120ba89833560208501611c98565b95506120c98960408a01611f09565b94506102808801359150808211156120df575f80fd5b506120ec88828901611d0b565b959894975092956102a001359392505050565b600181811c9082168061211357607f821691505b60208210810361213157634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a084015261217c60c0840182611bc9565b9695505050505050565b5f60208284031215612196575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156106de576106de61219d565b81516001600160a01b03168152610240810160208301516121f060208401826001600160a01b03169052565b50604083015161220b60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612271828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611e9d565b80516001600160a01b03168252602081015161230160208401826001600160a01b03169052565b50604081015161231c60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015161238e828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e08082015180518285015260208101516102008501526040810151610220850152606081015161024085015261171b565b5f6102c061240583886122da565b6001600160a01b038616610260840152610280830181905261242981840186611bc9565b915050826102a083015295945050505050565b5f6020828403121561244c575f80fd5b8151611a4481611c06565b6001600160a01b039390931683526020830191909152604082015260600190565b5f61038080835261248b8184018e611bc9565b905061249a602084018d6122da565b6001600160a01b038b81166102808501528382036102a08501526124be828c611bc9565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f6020828403121561250a575f80fd5b815160ff81168114611a44575f80fd5b60ff82811682821603908111156106de576106de61219d565b600181815b8085111561256d57815f19048211156125535761255361219d565b8085161561256057918102915b93841c9390800290612538565b509250929050565b5f82612583575060016106de565b8161258f57505f6106de565b81600181146125a557600281146125af576125cb565b60019150506106de565b60ff8411156125c0576125c061219d565b50506001821b6106de565b5060208310610133831016604e8410600b84101617156125ee575081810a6106de565b6125f88383612533565b805f190482111561260b5761260b61219d565b029392505050565b5f6106db60ff841683612575565b5f8261263b57634e487b7160e01b5f52601260045260245ffd5b500690565b5f60208284031215612650575f80fd5b8151611a4481611c8b565b5f825161266c818460208701611ba7565b919091019291505056fe45524334363236487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220eb20e2025c59cf03e179f60d33edda05b6e9118b0ab6a9f06e08bed958790ecc64736f6c63430008160033',
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
