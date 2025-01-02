export const EzETHLineaHyperdriveDeployerCoordinator = {
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
                    "name": "_xRenzoDeposit",
                    "type": "address",
                    "internalType": "contract IXRenzoDeposit"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
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
            "type": "function",
            "name": "xRenzoDeposit",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IXRenzoDeposit"
                }
            ],
            "stateMutability": "view"
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
    bytecode: '0x61018060405234801562000011575f80fd5b5060405162002709380380620027098339810160408190526200003491620000c4565b88888888888888885f620000498982620002ae565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120528116610140529190911661016052506200037a975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000bf575f80fd5b919050565b5f805f805f805f805f6101208a8c031215620000de575f80fd5b89516001600160401b0380821115620000f5575f80fd5b818c0191508c601f83011262000109575f80fd5b8151818111156200011e576200011e62000094565b604051601f8201601f19908116603f0116810190838211818310171562000149576200014962000094565b81604052828152602093508f8484870101111562000165575f80fd5b5f91505b8282101562000188578482018401518183018501529083019062000169565b5f848483010152809d50505050620001a2818d01620000a8565b99505050620001b460408b01620000a8565b9650620001c460608b01620000a8565b9550620001d460808b01620000a8565b9450620001e460a08b01620000a8565b9350620001f460c08b01620000a8565b92506200020460e08b01620000a8565b9150620002156101008b01620000a8565b90509295985092959850929598565b600181811c908216806200023957607f821691505b6020821081036200025857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002a957805f5260205f20601f840160051c81016020851015620002855750805b601f840160051c820191505b81811015620002a6575f815560010162000291565b50505b505050565b81516001600160401b03811115620002ca57620002ca62000094565b620002e281620002db845462000224565b846200025e565b602080601f83116001811462000318575f8415620003005750858301515b5f19600386901b1c1916600185901b17855562000372565b5f85815260208120601f198616915b82811015620003485788860151825594840194600190910190840162000327565b50858210156200036657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e051610100516101205161014051610160516122bc6200044d5f395f8181610158015281816106f5015261143701525f81816102ef0152610da501525f81816103550152610c7201525f81816103bb0152610b3f01525f81816103220152610a0c01525f8181610388015261080301525f818161045f01526110f401525f818161042c015281816105660152818161072c0152818161083301528181610a3c01528181610b6f01528181610ca201528181610dd501528181610ec8015261112501526122bc5ff3fe608060405260043610610105575f3560e01c8063ab71905f11610092578063c45a015511610062578063c45a01551461041b578063c6e6f592146103dd578063c83e1f511461044e578063e990eba814610481578063e99be396146104a0575f80fd5b8063ab71905f14610377578063b6cb1118146103aa578063b88fed9f146103dd578063c1510618146103fc575f80fd5b806337404017116100d857806337404017146101b357806354fd4d50146102af578063966ecd1c146102de578063a085fa3014610311578063aa8cd6c414610344575f80fd5b806304baa00b1461010957806306fdde031461013357806312ae5e671461014757806316abfc7014610192575b5f80fd5b348015610114575f80fd5b5061011d6104b3565b60405161012a919061192c565b60405180910390f35b34801561013e575f80fd5b5061011d6104cf565b348015610152575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161012a565b6101a56101a0366004611a64565b61055a565b60405190815260200161012a565b3480156101be575f80fd5b506102a26101cd366004611b22565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161012a9190611b39565b3480156102ba575f80fd5b50604080518082019091526007815266076312e302e32360cc1b602082015261011d565b3480156102e9575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561031c575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561034f575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b348015610382575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b5575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e8575f80fd5b506101a56103f7366004611b22565b6106ef565b348015610407575f80fd5b5061017a610416366004611d0d565b610720565b348015610426575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b348015610459575f80fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048c575f80fd5b5061017a61049b366004611d76565b610ebc565b3480156104ab575f80fd5b5060056101a5565b6040518060600160405280602781526020016122606027913981565b5f80546104db90611e10565b80601f016020809104026020016040519081016040528092919081815260200182805461050790611e10565b80156105525780601f1061052957610100808354040283529160200191610552565b820191905f5260205f20905b81548152906001019060200180831161053557829003601f168201915b505050505081565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a457604051634084351160e01b815260040160405180910390fd5b6105ac61122f565b5f868152600160205260409020600301546001600160a01b0316806105e45760405163952b05cb60e01b815260040160405180910390fd5b5f6105f182888887611250565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161062493929190611e48565b60206040518083038185885af1158015610640573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106659190611e97565b92505f6106728234611eae565b905080156106e2576040515f90339083908381818185875af1925050503d805f81146106b9576040519150601f19603f3d011682016040523d82523d5f602084013e6106be565b606091505b50509050806106e0576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f61071a7f00000000000000000000000000000000000000000000000000000000000000008361140c565b92915050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461076a57604051634084351160e01b815260040160405180910390fd5b5f8681526001602052604081209084900361091a5780541561079f57604051633be1b34d60e11b815260040160405180910390fd5b6107a9868661142b565b5f6107b48787611582565b90505f876040516020016107c89190611ecd565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107f58a61159b565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c60405160200161086f929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108a49493929190612100565b6020604051808303815f875af11580156108c0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108e49190612145565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106e6565b5f87815260016020526040902054806109465760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109589190611ecd565b604051602081830303815290604052805190602001201461098c5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109b657604051631a3272d160e31b815260040160405180910390fd5b6109c0878761142b565b5f6109ca8861159b565b6002840154608082015290506001869003610b0a5760058301546001600160a01b031615610a0a5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a7193929190612160565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610aa69493929190612100565b6020604051808303815f875af1158015610ac2573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ae69190612145565b6005840180546001600160a01b0319166001600160a01b03831617905593506106e2565b85600203610c3d5760068301546001600160a01b031615610b3d5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610ba493929190612160565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610bd99493929190612100565b6020604051808303815f875af1158015610bf5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c199190612145565b6006840180546001600160a01b0319166001600160a01b03831617905593506106e2565b85600303610d705760078301546001600160a01b031615610c705760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610cd793929190612160565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d0c9493929190612100565b6020604051808303815f875af1158015610d28573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4c9190612145565b6007840180546001600160a01b0319166001600160a01b03831617905593506106e2565b85600403610ea35760088301546001600160a01b031615610da35760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e0a93929190612160565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e3f9493929190612100565b6020604051808303815f875af1158015610e5b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e7f9190612145565b6008840180546001600160a01b0319166001600160a01b03831617905593506106e2565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f0657604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610fae57604051632c95caeb60e01b815260040160405180910390fd5b8051610fcd5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610ff2575060a08101516001600160a01b0316155b80611008575060c08101516001600160a01b0316155b8061101e575060e08101516001600160a01b0316155b8061103557506101008101516001600160a01b0316155b156110535760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051611066908790602001611ecd565b604051602081830303815290604052805190602001201461109a5760405163332ee11f60e01b815260040160405180910390fd5b80602001518480519060200120146110c557604051631a3272d160e31b815260040160405180910390fd5b6110cf858561142b565b5f6110d98661159b565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d60405160200161117b929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111b69a99989796959493929190612181565b6020604051808303815f875af11580156111d2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111f69190612145565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b341561124e57604051631574f9f360e01b815260040160405180910390fd5b565b5f8160200151156112745760405163350b944160e11b815260040160405180910390fd5b5f856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112d59190612145565b6040516323b872dd60e01b81526001600160a01b038781166004830152306024830152604482018790529192505f918316906323b872dd906064016020604051808303815f875af115801561132c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113509190612203565b905080611370576040516312171d8360e31b815260040160405180910390fd5b60405163095ea7b360e01b81526001600160a01b0388811660048301526024820187905283169063095ea7b3906044016020604051808303815f875af11580156113bc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113e09190612203565b905080611400576040516340b27c2160e11b815260040160405180910390fd5b505f9695505050505050565b5f8061141784611669565b905061142383826116d2565b949350505050565b61143582826116e6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663152b2c4f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611491573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114b59190612145565b6001600160a01b031682602001516001600160a01b0316146114ea5760405163073f739d60e51b815260040160405180910390fd5b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461152857604051630722152560e11b815260040160405180910390fd5b816080015166038d7ea4c6800014611553576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c680001461157e576040516318c9522360e11b815260040160405180910390fd5b5050565b5f611594670de0b6b3a76400006106ef565b9392505050565b6115a3611815565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b5f80826001600160a01b03166396f0bd616040518163ffffffff1660e01b81526004016040805180830381865afa1580156116a6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116ca919061221e565b509392505050565b5f6115948383670de0b6b3a76400006117fa565b6103e88260800151101561170d576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361173257604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061175c57508161010001518260e001516117599190612240565b15155b1561177a5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806117a65750670de0b6b3a7640000826101c0015160200151115b806117c15750670de0b6b3a7640000826101c0015160400151115b806117dc5750670de0b6b3a7640000826101c0015160600151115b1561157e576040516322f72cc360e11b815260040160405180910390fd5b5f825f19048411830215820261180e575f80fd5b5091020490565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020016118e460405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f81518084525f5b8181101561190d576020818501810151868301820152016118f1565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f61159460208301846118e9565b6001600160a01b0381168114611952575f80fd5b50565b80356119608161193e565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff8111828210171561199c5761199c611965565b60405290565b6040516101e0810167ffffffffffffffff8111828210171561199c5761199c611965565b8015158114611952575f80fd5b5f67ffffffffffffffff808411156119ed576119ed611965565b604051601f8501601f19908116603f01168101908282118183101715611a1557611a15611965565b81604052809350858152868686011115611a2d575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611a55575f80fd5b611594838335602085016119d3565b5f805f805f60a08688031215611a78575f80fd5b853594506020860135611a8a8161193e565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611ab4575f80fd5b908701906060828a031215611ac7575f80fd5b611acf611979565b8235611ada8161193e565b81526020830135611aea816119c6565b6020820152604083013582811115611b00575f80fd5b611b0c8b828601611a46565b6040830152508093505050509295509295909350565b5f60208284031215611b32575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611bc6575f80fd5b6040516080810181811067ffffffffffffffff82111715611be957611be9611965565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611c2b575f80fd5b611c336119a2565b9050611c3e82611955565b8152611c4c60208301611955565b6020820152611c5d60408301611955565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611cba818401611955565b90820152610160611ccc838201611955565b90820152610180611cde838201611955565b908201526101a0611cf0838201611955565b908201526101c0611d0384848301611bb6565b9082015292915050565b5f805f805f6102c08688031215611d22575f80fd5b85359450611d338760208801611c1a565b935061026086013567ffffffffffffffff811115611d4f575f80fd5b611d5b88828901611a46565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611d8b575f80fd5b85359450602086013567ffffffffffffffff80821115611da9575f80fd5b818801915088601f830112611dbc575f80fd5b611dcb898335602085016119d3565b9550611dda8960408a01611c1a565b9450610280880135915080821115611df0575f80fd5b50611dfd88828901611a46565b959894975092956102a001359392505050565b600181811c90821680611e2457607f821691505b602082108103611e4257634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a0840152611e8d60c08401826118e9565b9695505050505050565b5f60208284031215611ea7575f80fd5b5051919050565b8181038181111561071a57634e487b7160e01b5f52601160045260245ffd5b81516001600160a01b0316815261024081016020830151611ef960208401826001600160a01b03169052565b506040830151611f1460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151611f7a828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611bae565b80516001600160a01b03168252602081015161200a60208401826001600160a01b03169052565b50604081015161202560408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612097828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6102c061210e8388611fe3565b6001600160a01b0386166102608401526102808301819052612132818401866118e9565b915050826102a083015295945050505050565b5f60208284031215612155575f80fd5b81516115948161193e565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526121948184018e6118e9565b90506121a3602084018d611fe3565b6001600160a01b038b81166102808501528382036102a08501526121c7828c6118e9565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f60208284031215612213575f80fd5b8151611594816119c6565b5f806040838503121561222f575f80fd5b505080516020909101519092909150565b5f8261225a57634e487b7160e01b5f52601260045260245ffd5b50069056fe457a4554484c696e6561487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212201eec5f311729a0457d96043dddf7c08546a2553822f7700393a7fb716a3861d564736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(uint256)": "b88fed9f",
        "convertToShares(uint256)": "c6e6f592",
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
        "version()": "54fd4d50",
        "xRenzoDeposit()": "12ae5e67"
    }
};
