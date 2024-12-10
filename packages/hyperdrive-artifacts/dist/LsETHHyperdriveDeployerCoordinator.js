export const LsETHHyperdriveDeployerCoordinator = {
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
                },
                {
                    "name": "_river",
                    "type": "address",
                    "internalType": "contract IRiverV1"
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
    bytecode: '0x61018060405234801562000011575f80fd5b5060405162002864380380620028648339810160408190526200003491620000c4565b88888888888888885f620000498982620002ae565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120528116610140529190911661016052506200037a975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000bf575f80fd5b919050565b5f805f805f805f805f6101208a8c031215620000de575f80fd5b89516001600160401b0380821115620000f5575f80fd5b818c0191508c601f83011262000109575f80fd5b8151818111156200011e576200011e62000094565b604051601f8201601f19908116603f0116810190838211818310171562000149576200014962000094565b81604052828152602093508f8484870101111562000165575f80fd5b5f91505b8282101562000188578482018401518183018501529083019062000169565b5f848483010152809d50505050620001a2818d01620000a8565b99505050620001b460408b01620000a8565b9650620001c460608b01620000a8565b9550620001d460808b01620000a8565b9450620001e460a08b01620000a8565b9350620001f460c08b01620000a8565b92506200020460e08b01620000a8565b9150620002156101008b01620000a8565b90509295985092959850929598565b600181811c908216806200023957607f821691505b6020821081036200025857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002a957805f5260205f20601f840160051c81016020851015620002855750805b601f840160051c820191505b81811015620002a6575f815560010162000291565b50505b505050565b81516001600160401b03811115620002ca57620002ca62000094565b620002e281620002db845462000224565b846200025e565b602080601f83116001811462000318575f8415620003005750858301515b5f19600386901b1c1916600185901b17855562000372565b5f85815260208120601f198616915b82811015620003485788860151825594840194600190910190840162000327565b50858210156200036657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e051610100516101205161014051610160516124176200044d5f395f818161125001528181611285015261139901525f81816102d70152610d7401525f81816103550152610c4101525f81816103bb0152610b0e01525f818161032201526109db01525f818161038801526107d201525f818161044001526110c301525f818161040d01528181610547015281816106fb0152818161080201528181610a0b01528181610b3e01528181610c7101528181610da401528181610e9701526110f401526124175ff3fe6080604052600436106100fa575f3560e01c8063a085fa3011610092578063c151061811610062578063c1510618146103dd578063c45a0155146103fc578063c83e1f511461042f578063e990eba814610462578063e99be39614610481575f80fd5b8063a085fa3014610311578063aa8cd6c414610344578063ab71905f14610377578063b6cb1118146103aa575f80fd5b806337404017116100cd578063374040171461017c5780633e5541f11461027857806354fd4d5014610297578063966ecd1c146102c6575f80fd5b806304baa00b146100fe57806306fdde031461012857806316abfc701461013c578063251f6c421461015d575b5f80fd5b348015610109575f80fd5b50610112610494565b60405161011f9190611a6c565b60405180910390f35b348015610133575f80fd5b506101126104b0565b61014f61014a366004611ba1565b61053b565b60405190815260200161011f565b348015610168575f80fd5b5061014f610177366004611c5f565b6106d0565b348015610187575f80fd5b5061026b610196366004611c89565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611ca0565b348015610283575f80fd5b5061014f610292366004611c5f565b6106e4565b3480156102a2575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b3480156102d1575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b34801561031c575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561034f575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b348015610382575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b5575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e8575f80fd5b506102f96103f7366004611e74565b6106ef565b348015610407575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561043a575f80fd5b506102f97f000000000000000000000000000000000000000000000000000000000000000081565b34801561046d575f80fd5b506102f961047c366004611edd565b610e8b565b34801561048c575f80fd5b50600561014f565b6040518060600160405280602281526020016123c06022913981565b5f80546104bc90611f77565b80601f01602080910402602001604051908101604052809291908181526020018280546104e890611f77565b80156105335780601f1061050a57610100808354040283529160200191610533565b820191905f5260205f20905b81548152906001019060200180831161051657829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461058557604051634084351160e01b815260040160405180910390fd5b61058d6111fe565b5f868152600160205260409020600301546001600160a01b0316806105c55760405163952b05cb60e01b815260040160405180910390fd5b5f6105d28288888761121f565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161060593929190611faf565b60206040518083038185885af1158015610621573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106469190611ffe565b92505f6106538234612015565b905080156106c3576040515f90339083908381818185875af1925050503d805f811461069a576040519150601f19603f3d011682016040523d82523d5f602084013e61069f565b606091505b50509050806106c1576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f6106db83836112b6565b90505b92915050565b5f6106db8383611320565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461073957604051634084351160e01b815260040160405180910390fd5b5f868152600160205260408120908490036108e95780541561076e57604051633be1b34d60e11b815260040160405180910390fd5b610778868661134f565b5f6107838787611447565b90505f876040516020016107979190612034565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107c48a61145e565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c60405160200161083e929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108739493929190612267565b6020604051808303815f875af115801561088f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108b391906122ac565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106c7565b5f87815260016020526040902054806109155760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109279190612034565b604051602081830303815290604052805190602001201461095b5760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461098557604051631a3272d160e31b815260040160405180910390fd5b61098f878761134f565b5f6109998861145e565b6002840154608082015290506001869003610ad95760058301546001600160a01b0316156109d95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a40939291906122c7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a759493929190612267565b6020604051808303815f875af1158015610a91573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab591906122ac565b6005840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600203610c0c5760068301546001600160a01b031615610b0c5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b73939291906122c7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ba89493929190612267565b6020604051808303815f875af1158015610bc4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610be891906122ac565b6006840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600303610d3f5760078301546001600160a01b031615610c3f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ca6939291906122c7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610cdb9493929190612267565b6020604051808303815f875af1158015610cf7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d1b91906122ac565b6007840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600403610e725760088301546001600160a01b031615610d725760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610dd9939291906122c7565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e0e9493929190612267565b6020604051808303815f875af1158015610e2a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e4e91906122ac565b6008840180546001600160a01b0319166001600160a01b03831617905593506106c3565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ed557604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f7d57604051632c95caeb60e01b815260040160405180910390fd5b8051610f9c5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610fc1575060a08101516001600160a01b0316155b80610fd7575060c08101516001600160a01b0316155b80610fed575060e08101516001600160a01b0316155b8061100457506101008101516001600160a01b0316155b156110225760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051611035908790602001612034565b60405160208183030381529060405280519060200120146110695760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461109457604051631a3272d160e31b815260040160405180910390fd5b61109e858561134f565b5f6110a88661145e565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161114a929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111859a999897969594939291906122e8565b6020604051808303815f875af11580156111a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c591906122ac565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561121d57604051631574f9f360e01b815260040160405180910390fd5b565b5f8160200151156112435760405163350b944160e11b815260040160405180910390fd5b6112786001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685308661152c565b6112ac6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168685611599565b505f949350505050565b604051637bce1f8160e11b8152600481018290525f906001600160a01b0384169063f79c3f02906024015b602060405180830381865afa1580156112fc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106db9190611ffe565b604051631e66865560e21b8152600481018290525f906001600160a01b0384169063799a1954906024016112e1565b6113598282611628565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461139757604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b0316146113ed5760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c6800014611418576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c6800014611443576040516318c9522360e11b815260040160405180910390fd5b5050565b5f6106db8360200151670de0b6b3a76400006106d0565b61146661194b565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526115939186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061173c565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526115ea84826117a7565b611593576040516001600160a01b0384811660248301525f604483015261161e91869182169063095ea7b390606401611561565b611593848261173c565b6103e88260800151101561164f576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361167457604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061169e57508161010001518260e0015161169b919061236a565b15155b156116bc5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806116e85750670de0b6b3a7640000826101c0015160200151115b806117035750670de0b6b3a7640000826101c0015160400151115b8061171e5750670de0b6b3a7640000826101c0015160600151115b15611443576040516322f72cc360e11b815260040160405180910390fd5b5f6117506001600160a01b03841683611844565b905080515f141580156117745750808060200190518101906117729190612389565b155b156117a257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516117c291906123a4565b5f604051808303815f865af19150503d805f81146117fb576040519150601f19603f3d011682016040523d82523d5f602084013e611800565b606091505b509150915081801561182a57508051158061182a57508080602001905181019061182a9190612389565b80156106c75750505050506001600160a01b03163b151590565b60606106db83835f845f80856001600160a01b0316848660405161186891906123a4565b5f6040518083038185875af1925050503d805f81146118a2576040519150601f19603f3d011682016040523d82523d5f602084013e6118a7565b606091505b50915091506118b78683836118c3565b925050505b9392505050565b6060826118d8576118d38261191f565b6118bc565b81511580156118ef57506001600160a01b0384163b155b1561191857604051639996b31560e01b81526001600160a01b0385166004820152602401611799565b50806118bc565b80511561192f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611a1a60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611a39578181015183820152602001611a21565b50505f910152565b5f8151808452611a58816020860160208601611a1f565b601f01601f19169290920160200192915050565b602081525f6106db6020830184611a41565b6001600160a01b0381168114611948575f80fd5b8035611a9d81611a7e565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611ad957611ad9611aa2565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611ad957611ad9611aa2565b8015158114611948575f80fd5b5f67ffffffffffffffff80841115611b2a57611b2a611aa2565b604051601f8501601f19908116603f01168101908282118183101715611b5257611b52611aa2565b81604052809350858152868686011115611b6a575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611b92575f80fd5b6106db83833560208501611b10565b5f805f805f60a08688031215611bb5575f80fd5b853594506020860135611bc781611a7e565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611bf1575f80fd5b908701906060828a031215611c04575f80fd5b611c0c611ab6565b8235611c1781611a7e565b81526020830135611c2781611b03565b6020820152604083013582811115611c3d575f80fd5b611c498b828601611b83565b6040830152508093505050509295509295909350565b5f8060408385031215611c70575f80fd5b8235611c7b81611a7e565b946020939093013593505050565b5f60208284031215611c99575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611d2d575f80fd5b6040516080810181811067ffffffffffffffff82111715611d5057611d50611aa2565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611d92575f80fd5b611d9a611adf565b9050611da582611a92565b8152611db360208301611a92565b6020820152611dc460408301611a92565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611e21818401611a92565b90820152610160611e33838201611a92565b90820152610180611e45838201611a92565b908201526101a0611e57838201611a92565b908201526101c0611e6a84848301611d1d565b9082015292915050565b5f805f805f6102c08688031215611e89575f80fd5b85359450611e9a8760208801611d81565b935061026086013567ffffffffffffffff811115611eb6575f80fd5b611ec288828901611b83565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611ef2575f80fd5b85359450602086013567ffffffffffffffff80821115611f10575f80fd5b818801915088601f830112611f23575f80fd5b611f3289833560208501611b10565b9550611f418960408a01611d81565b9450610280880135915080821115611f57575f80fd5b50611f6488828901611b83565b959894975092956102a001359392505050565b600181811c90821680611f8b57607f821691505b602082108103611fa957634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a0840152611ff460c0840182611a41565b9695505050505050565b5f6020828403121561200e575f80fd5b5051919050565b818103818111156106de57634e487b7160e01b5f52601160045260245ffd5b81516001600160a01b031681526102408101602083015161206060208401826001600160a01b03169052565b50604083015161207b60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516120e1828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611d15565b80516001600160a01b03168252602081015161217160208401826001600160a01b03169052565b50604081015161218c60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516121fe828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611593565b5f6102c0612275838861214a565b6001600160a01b038616610260840152610280830181905261229981840186611a41565b915050826102a083015295945050505050565b5f602082840312156122bc575f80fd5b81516118bc81611a7e565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526122fb8184018e611a41565b905061230a602084018d61214a565b6001600160a01b038b81166102808501528382036102a085015261232e828c611a41565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f8261238457634e487b7160e01b5f52601260045260245ffd5b500690565b5f60208284031215612399575f80fd5b81516118bc81611b03565b5f82516123b5818460208701611a1f565b919091019291505056fe4c73455448487970657264726976654465706c6f796572436f6f7264696e61746f72a264697066735822122029f18a60d511243849abcb02a0025cd8a3816cf62af1871c536db183bf219d1c64736f6c63430008160033',
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
