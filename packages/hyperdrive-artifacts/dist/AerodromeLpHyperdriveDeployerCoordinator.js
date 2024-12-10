export const AerodromeLpHyperdriveDeployerCoordinator = {
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
            "stateMutability": "pure"
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
            "stateMutability": "pure"
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
    bytecode: '0x61016060405234801562000011575f80fd5b50604051620028b2380380620028b28339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516124986200041a5f395f81816102990152610dd001525f81816103170152610c9d01525f818161037d0152610b6a01525f81816102e40152610a3701525f818161034a015261082e01525f8181610440015261115901525f81816103ee01528181610547015281816107570152818161085e01528181610a6701528181610b9a01528181610ccd01528181610e0001528181610f2d015261118a01526124985ff3fe6080604052600436106100fa575f3560e01c8063ab71905f11610092578063c45a015511610062578063c45a0155146103dd578063c6e6f59214610410578063c83e1f511461042f578063e990eba814610462578063e99be39614610481575f80fd5b8063ab71905f14610339578063b6cb11181461036c578063b88fed9f1461039f578063c1510618146103be575f80fd5b806354fd4d50116100cd57806354fd4d5014610259578063966ecd1c14610288578063a085fa30146102d3578063aa8cd6c414610306575f80fd5b806304baa00b146100fe57806306fdde031461012857806316abfc701461013c578063374040171461015d575b5f80fd5b348015610109575f80fd5b50610112610494565b60405161011f9190611b1b565b60405180910390f35b348015610133575f80fd5b506101126104b0565b61014f61014a366004611c50565b61053b565b60405190815260200161011f565b348015610168575f80fd5b5061024c610177366004611d0e565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b60405161011f9190611d25565b348015610264575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610112565b348015610293575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011f565b3480156102de575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610311575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610344575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b348015610377575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103aa575f80fd5b5061014f6103b9366004611d0e565b6106d0565b3480156103c9575f80fd5b506102bb6103d8366004611ef9565b61074b565b3480156103e8575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561041b575f80fd5b5061014f61042a366004611d0e565b610ee7565b34801561043a575f80fd5b506102bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561046d575f80fd5b506102bb61047c366004611f62565b610f21565b34801561048c575f80fd5b50600561014f565b60405180606001604052806028815260200161243b6028913981565b5f80546104bc90611ffc565b80601f01602080910402602001604051908101604052809291908181526020018280546104e890611ffc565b80156105335780601f1061050a57610100808354040283529160200191610533565b820191905f5260205f20905b81548152906001019060200180831161051657829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461058557604051634084351160e01b815260040160405180910390fd5b61058d611294565b5f868152600160205260409020600301546001600160a01b0316806105c55760405163952b05cb60e01b815260040160405180910390fd5b5f6105d2828888876112b5565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161060593929190612034565b60206040518083038185885af1158015610621573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106469190612079565b92505f6106538234612090565b905080156106c3576040515f90339083908381818185875af1925050503d805f811461069a576040519150601f19603f3d011682016040523d82523d5f602084013e61069f565b606091505b50509050806106c1576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b60405163b88fed9f60e01b8152600481018290525f9073__$2547229b0150c03f930e3c2db66c5de7b3$__9063b88fed9f906024015b602060405180830381865af4158015610721573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107459190612079565b92915050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461079557604051634084351160e01b815260040160405180910390fd5b5f86815260016020526040812090849003610945578054156107ca57604051633be1b34d60e11b815260040160405180910390fd5b6107d4868661136f565b5f6107df87876114fc565b90505f876040516020016107f391906120af565b6040516020818303038152906040528051906020012090505f878051906020012090505f6108208a611515565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c60405160200161089a929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016108cf94939291906122e2565b6020604051808303815f875af11580156108eb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061090f9190612327565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b03831617905590506106c7565b5f87815260016020526040902054806109715760405163398b1c0960e21b815260040160405180910390fd5b808760405160200161098391906120af565b60405160208183030381529060405280519060200120146109b75760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109e157604051631a3272d160e31b815260040160405180910390fd5b6109eb878761136f565b5f6109f588611515565b6002840154608082015290506001869003610b355760058301546001600160a01b031615610a355760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610a9c93929190612342565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ad194939291906122e2565b6020604051808303815f875af1158015610aed573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b119190612327565b6005840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600203610c685760068301546001600160a01b031615610b685760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610bcf93929190612342565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c0494939291906122e2565b6020604051808303815f875af1158015610c20573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c449190612327565b6006840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600303610d9b5760078301546001600160a01b031615610c9b5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d0293929190612342565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d3794939291906122e2565b6020604051808303815f875af1158015610d53573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d779190612327565b6007840180546001600160a01b0319166001600160a01b03831617905593506106c3565b85600403610ece5760088301546001600160a01b031615610dce5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e3593929190612342565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610e6a94939291906122e2565b6020604051808303815f875af1158015610e86573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610eaa9190612327565b6008840180546001600160a01b0319166001600160a01b03831617905593506106c3565b604051631d9f815960e11b815260040160405180910390fd5b6040516363737ac960e11b8152600481018290525f9073__$2547229b0150c03f930e3c2db66c5de7b3$__9063c6e6f59290602401610706565b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f6b57604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561101357604051632c95caeb60e01b815260040160405180910390fd5b80516110325760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580611057575060a08101516001600160a01b0316155b8061106d575060c08101516001600160a01b0316155b80611083575060e08101516001600160a01b0316155b8061109a57506101008101516001600160a01b0316155b156110b85760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110cb9087906020016120af565b60405160208183030381529060405280519060200120146110ff5760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461112a57604051631a3272d160e31b815260040160405180910390fd5b611134858561136f565b5f61113e86611515565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d6040516020016111e0929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b815260040161121b9a99989796959493929190612363565b6020604051808303815f875af1158015611237573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061125b9190612327565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b34156112b357604051631574f9f360e01b815260040160405180910390fd5b565b5f81602001516112d85760405163350b944160e11b815260040160405180910390fd5b5f856001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015611315573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113399190612327565b90506113506001600160a01b0382168630876115e3565b6113646001600160a01b0382168786611650565b505f95945050505050565b6014815110156113c65760405162461bcd60e51b815260206004820152601960248201527f496e76616c6964205f657874726144617461206c656e6774680000000000000060448201526064015b60405180910390fd5b5f818060200190518101906113db9190612327565b90506113e783836116df565b60208301516001600160a01b0316156114135760405163073f739d60e51b815260040160405180910390fd5b806001600160a01b03166372f702f36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561144f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114739190612327565b6001600160a01b0316835f01516001600160a01b0316146114a757604051630722152560e11b815260040160405180910390fd5b82608001516305f5e100146114cf576040516349db44f560e01b815260040160405180910390fd5b8260a001516305f5e100146114f7576040516318c9522360e11b815260040160405180910390fd5b505050565b5f61150e670de0b6b3a76400006106d0565b9392505050565b61151d6119fa565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b03848116602483015283811660448301526064820183905261164a9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506117f7565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526116a18482611858565b61164a576040516001600160a01b0384811660248301525f60448301526116d591869182169063095ea7b390606401611618565b61164a84826117f7565b6103e882608001511015611706576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361172b57604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061175557508161010001518260e0015161175291906123e5565b15155b156117735760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a7640000108061179f5750670de0b6b3a7640000826101c0015160200151115b806117ba5750670de0b6b3a7640000826101c0015160400151115b806117d55750670de0b6b3a7640000826101c0015160600151115b156117f3576040516322f72cc360e11b815260040160405180910390fd5b5050565b5f61180b6001600160a01b038416836118f5565b905080515f1415801561182f57508080602001905181019061182d9190612404565b155b156114f757604051635274afe760e01b81526001600160a01b03841660048201526024016113bd565b5f805f846001600160a01b031684604051611873919061241f565b5f604051808303815f865af19150503d805f81146118ac576040519150601f19603f3d011682016040523d82523d5f602084013e6118b1565b606091505b50915091508180156118db5750805115806118db5750808060200190518101906118db9190612404565b80156106c75750505050506001600160a01b03163b151590565b606061150e83835f845f80856001600160a01b03168486604051611919919061241f565b5f6040518083038185875af1925050503d805f8114611953576040519150601f19603f3d011682016040523d82523d5f602084013e611958565b606091505b5091509150611968868383611972565b9695505050505050565b60608261198757611982826119ce565b61150e565b815115801561199e57506001600160a01b0384163b155b156119c757604051639996b31560e01b81526001600160a01b03851660048201526024016113bd565b508061150e565b8051156119de5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611ac960405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611ae8578181015183820152602001611ad0565b50505f910152565b5f8151808452611b07816020860160208601611ace565b601f01601f19169290920160200192915050565b602081525f61150e6020830184611af0565b6001600160a01b03811681146119f7575f80fd5b8035611b4c81611b2d565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611b8857611b88611b51565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611b8857611b88611b51565b80151581146119f7575f80fd5b5f67ffffffffffffffff80841115611bd957611bd9611b51565b604051601f8501601f19908116603f01168101908282118183101715611c0157611c01611b51565b81604052809350858152868686011115611c19575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611c41575f80fd5b61150e83833560208501611bbf565b5f805f805f60a08688031215611c64575f80fd5b853594506020860135611c7681611b2d565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611ca0575f80fd5b908701906060828a031215611cb3575f80fd5b611cbb611b65565b8235611cc681611b2d565b81526020830135611cd681611bb2565b6020820152604083013582811115611cec575f80fd5b611cf88b828601611c32565b6040830152508093505050509295509295909350565b5f60208284031215611d1e575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611db2575f80fd5b6040516080810181811067ffffffffffffffff82111715611dd557611dd5611b51565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611e17575f80fd5b611e1f611b8e565b9050611e2a82611b41565b8152611e3860208301611b41565b6020820152611e4960408301611b41565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611ea6818401611b41565b90820152610160611eb8838201611b41565b90820152610180611eca838201611b41565b908201526101a0611edc838201611b41565b908201526101c0611eef84848301611da2565b9082015292915050565b5f805f805f6102c08688031215611f0e575f80fd5b85359450611f1f8760208801611e06565b935061026086013567ffffffffffffffff811115611f3b575f80fd5b611f4788828901611c32565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611f77575f80fd5b85359450602086013567ffffffffffffffff80821115611f95575f80fd5b818801915088601f830112611fa8575f80fd5b611fb789833560208501611bbf565b9550611fc68960408a01611e06565b9450610280880135915080821115611fdc575f80fd5b50611fe988828901611c32565b959894975092956102a001359392505050565b600181811c9082168061201057607f821691505b60208210810361202e57634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a084015261196860c0840182611af0565b5f60208284031215612089575f80fd5b5051919050565b8181038181111561074557634e487b7160e01b5f52601160045260245ffd5b81516001600160a01b03168152610240810160208301516120db60208401826001600160a01b03169052565b5060408301516120f660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015161215c828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611d9a565b80516001600160a01b0316825260208101516121ec60208401826001600160a01b03169052565b50604081015161220760408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612279828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e08082015180518285015260208101516102008501526040810151610220850152606081015161024085015261164a565b5f6102c06122f083886121c5565b6001600160a01b038616610260840152610280830181905261231481840186611af0565b915050826102a083015295945050505050565b5f60208284031215612337575f80fd5b815161150e81611b2d565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526123768184018e611af0565b9050612385602084018d6121c5565b6001600160a01b038b81166102808501528382036102a08501526123a9828c611af0565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f826123ff57634e487b7160e01b5f52601260045260245ffd5b500690565b5f60208284031215612414575f80fd5b815161150e81611bb2565b5f8251612430818460208701611ace565b919091019291505056fe4165726f64726f6d654c70487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220cd199a18587602fbf10fcb79dc6cbb4dc0695a732b46ce3e8db340e65d6d4da964736f6c63430008160033',
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
        "version()": "54fd4d50"
    }
};
