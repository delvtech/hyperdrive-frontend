export const EzETHHyperdriveDeployerCoordinator = {
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
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertToBase",
            "inputs": [
                {
                    "name": "_renzoOracle",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                },
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
                    "name": "_renzoOracle",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                },
                {
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                },
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
            "name": "ezETH",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
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
            "name": "renzoOracle",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRenzoOracle"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "restakeManager",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
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
    bytecode: '0x6101c060405234801562000011575f80fd5b5060405162002e0f38038062002e0f8339810160408190526200003491620001c1565b88888888888888885f620000498982620003ab565b506001600160a01b0396871660805294861660a05292851660c05290841660e052831661010052821661012052811661014052821661016081905260408051630274e78f60e31b815290519192506313a73c789160048083019260209291908290030181865afa158015620000c0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000e6919062000477565b6001600160a01b03166101a0816001600160a01b031681525050610160516001600160a01b031663892866a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000140573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000166919062000477565b6001600160a01b031661018052506200049c975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381168114620001ac575f80fd5b50565b8051620001bc8162000197565b919050565b5f805f805f805f805f6101208a8c031215620001db575f80fd5b89516001600160401b0380821115620001f2575f80fd5b818c0191508c601f83011262000206575f80fd5b8151818111156200021b576200021b62000183565b604051601f8201601f19908116603f0116810190838211818310171562000246576200024662000183565b81604052828152602093508f8484870101111562000262575f80fd5b5f91505b8282101562000285578482018401518183018501529083019062000266565b5f848483010152809d505050506200029f818d01620001af565b99505050620002b160408b01620001af565b9650620002c160608b01620001af565b9550620002d160808b01620001af565b9450620002e160a08b01620001af565b9350620002f160c08b01620001af565b92506200030160e08b01620001af565b9150620003126101008b01620001af565b90509295985092959850929598565b600181811c908216806200033657607f821691505b6020821081036200035557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620003a657805f5260205f20601f840160051c81016020851015620003825750805b601f840160051c820191505b81811015620003a3575f81556001016200038e565b50505b505050565b81516001600160401b03811115620003c757620003c762000183565b620003df81620003d8845462000321565b846200035b565b602080601f83116001811462000415575f8415620003fd5750858301515b5f19600386901b1c1916600185901b1785556200046f565b5f85815260208120601f198616915b82811015620004455788860151825594840194600190910190840162000424565b50858210156200046357878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f6020828403121562000488575f80fd5b8151620004958162000197565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a051612877620005985f395f818161019b0152818161145a0152818161148f015261161101525f818161034301526116c501525f818161052c01526116e601525f81816103760152610e3101525f81816103dc0152610cfe01525f81816104420152610bcb01525f81816103a90152610a9801525f818161040f015261088f01525f81816104c7015261118001525f818161049401528181610617015281816107b8015281816108bf01528181610ac801528181610bfb01528181610d2e01528181610e6101528181610f5401526111b101526128775ff3fe60806040526004361061011b575f3560e01c8063a085fa301161009d578063c45a015511610062578063c45a015514610483578063c83e1f51146104b6578063e990eba8146104e9578063e99be39614610508578063ff0996b51461051b575f80fd5b8063a085fa3014610398578063aa8cd6c4146103cb578063ab71905f146103fe578063b6cb111814610431578063c151061814610464575f80fd5b806337404017116100e357806337404017146101e85780635111bea2146102e457806354fd4d5014610303578063892866a414610332578063966ecd1c14610365575f80fd5b806304baa00b1461011f57806306fdde0314610149578063079554e71461015d57806313a73c781461018a57806316abfc70146101d5575b5f80fd5b34801561012a575f80fd5b5061013361054e565b6040516101409190611d2f565b60405180910390f35b348015610154575f80fd5b5061013361056a565b348015610168575f80fd5b5061017c610177366004611d65565b6105f5565b604051908152602001610140565b348015610195575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610140565b61017c6101e3366004611ec5565b61060b565b3480156101f3575f80fd5b506102d7610202366004611f83565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101409190611f9a565b3480156102ef575f80fd5b5061017c6102fe366004611d65565b61079f565b34801561030e575f80fd5b50604080518082019091526007815266076312e302e32360cc1b6020820152610133565b34801561033d575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b348015610370575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a3575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d6575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b348015610409575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561043c575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561046f575f80fd5b506101bd61047e36600461216e565b6107ac565b34801561048e575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104c1575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104f4575f80fd5b506101bd6105033660046121d7565b610f48565b348015610513575f80fd5b50600561017c565b348015610526575f80fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b6040518060600160405280602281526020016128206022913981565b5f805461057690612271565b80601f01602080910402602001604051908101604052809291908181526020018280546105a290612271565b80156105ed5780601f106105c4576101008083540402835291602001916105ed565b820191905f5260205f20905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b5f610602858585856112bb565b95945050505050565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461065557604051634084351160e01b815260040160405180910390fd5b61065d611408565b5f868152600160205260409020600301546001600160a01b0316806106955760405163952b05cb60e01b815260040160405180910390fd5b5f6106a282888887611429565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016106d5939291906122a9565b60206040518083038185885af11580156106f1573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061071691906122f8565b92505f610723823461230f565b90508015610793576040515f90339083908381818185875af1925050503d805f811461076a576040519150601f19603f3d011682016040523d82523d5f602084013e61076f565b606091505b5050905080610791576040516312171d8360e31b815260040160405180910390fd5b505b50505095945050505050565b5f610602858585856114c0565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107f657604051634084351160e01b815260040160405180910390fd5b5f868152600160205260408120908490036109a65780541561082b57604051633be1b34d60e11b815260040160405180910390fd5b61083586866115c7565b5f61084087876116bf565b90505f87604051602001610854919061232e565b6040516020818303038152906040528051906020012090505f878051906020012090505f6108818a611721565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016108fb929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b81526004016109309493929190612561565b6020604051808303815f875af115801561094c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061097091906125a6565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610602565b5f87815260016020526040902054806109d25760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109e4919061232e565b6040516020818303038152906040528051906020012014610a185760405163332ee11f60e01b815260040160405180910390fd5b60018201548651602088012014610a4257604051631a3272d160e31b815260040160405180910390fd5b610a4c87876115c7565b5f610a5688611721565b6002840154608082015290506001869003610b965760058301546001600160a01b031615610a965760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610afd939291906125c1565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b329493929190612561565b6020604051808303815f875af1158015610b4e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b7291906125a6565b6005840180546001600160a01b0319166001600160a01b0383161790559350610793565b85600203610cc95760068301546001600160a01b031615610bc95760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c30939291906125c1565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c659493929190612561565b6020604051808303815f875af1158015610c81573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca591906125a6565b6006840180546001600160a01b0319166001600160a01b0383161790559350610793565b85600303610dfc5760078301546001600160a01b031615610cfc5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d63939291906125c1565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d989493929190612561565b6020604051808303815f875af1158015610db4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dd891906125a6565b6007840180546001600160a01b0319166001600160a01b0383161790559350610793565b85600403610f2f5760088301546001600160a01b031615610e2f5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610e96939291906125c1565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610ecb9493929190612561565b6020604051808303815f875af1158015610ee7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f0b91906125a6565b6008840180546001600160a01b0319166001600160a01b0383161790559350610793565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f9257604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e084015260089093015416610100820152901561103a57604051632c95caeb60e01b815260040160405180910390fd5b80516110595760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b0316158061107e575060a08101516001600160a01b0316155b80611094575060c08101516001600160a01b0316155b806110aa575060e08101516001600160a01b0316155b806110c157506101008101516001600160a01b0316155b156110df5760405163e97cc2bf60e01b815260040160405180910390fd5b80516040516110f290879060200161232e565b60405160208183030381529060405280519060200120146111265760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461115157604051631a3272d160e31b815260040160405180910390fd5b61115b85856115c7565b5f61116586611721565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d604051602001611207929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016112429a999897969594939291906125e2565b6020604051808303815f875af115801561125e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061128291906125a6565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156112f8573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261131f91908101906126f3565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611360573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061138491906122f8565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064015b602060405180830381865afa1580156113d9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113fd91906122f8565b979650505050505050565b341561142757604051631574f9f360e01b815260040160405180910390fd5b565b5f81602001511561144d5760405163350b944160e11b815260040160405180910390fd5b6114826001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168530866117ef565b6114b66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868561185c565b505f949350505050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156114fd573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261152491908101906126f3565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611565573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061158991906122f8565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064016113be565b6115d182826118eb565b81516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461160f57604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031682602001516001600160a01b0316146116655760405163073f739d60e51b815260040160405180910390fd5b816080015166038d7ea4c6800014611690576040516349db44f560e01b815260040160405180910390fd5b8160a0015166038d7ea4c68000146116bb576040516318c9522360e11b815260040160405180910390fd5b5050565b5f6117187f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008560200151670de0b6b3a764000061079f565b90505b92915050565b611729611c0e565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526118569186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506119ff565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526118ad8482611a6a565b611856576040516001600160a01b0384811660248301525f60448301526118e191869182169063095ea7b390606401611824565b61185684826119ff565b6103e882608001511015611912576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361193757604051635428734d60e01b815260040160405180910390fd5b8161010001518260e00151108061196157508161010001518260e0015161195e91906127ca565b15155b1561197f5760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806119ab5750670de0b6b3a7640000826101c0015160200151115b806119c65750670de0b6b3a7640000826101c0015160400151115b806119e15750670de0b6b3a7640000826101c0015160600151115b156116bb576040516322f72cc360e11b815260040160405180910390fd5b5f611a136001600160a01b03841683611b07565b905080515f14158015611a37575080806020019051810190611a3591906127e9565b155b15611a6557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b031684604051611a859190612804565b5f604051808303815f865af19150503d805f8114611abe576040519150601f19603f3d011682016040523d82523d5f602084013e611ac3565b606091505b5091509150818015611aed575080511580611aed575080806020019051810190611aed91906127e9565b80156106025750505050506001600160a01b03163b151590565b606061171883835f845f80856001600160a01b03168486604051611b2b9190612804565b5f6040518083038185875af1925050503d805f8114611b65576040519150601f19603f3d011682016040523d82523d5f602084013e611b6a565b606091505b5091509150611b7a868383611b86565b925050505b9392505050565b606082611b9b57611b9682611be2565b611b7f565b8151158015611bb257506001600160a01b0384163b155b15611bdb57604051639996b31560e01b81526001600160a01b0385166004820152602401611a5c565b5080611b7f565b805115611bf25780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611cdd60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611cfc578181015183820152602001611ce4565b50505f910152565b5f8151808452611d1b816020860160208601611ce2565b601f01601f19169290920160200192915050565b602081525f6117186020830184611d04565b6001600160a01b0381168114611c0b575f80fd5b8035611d6081611d41565b919050565b5f805f8060808587031215611d78575f80fd5b8435611d8381611d41565b93506020850135611d9381611d41565b92506040850135611da381611d41565b9396929550929360600135925050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611dea57611dea611db3565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611dea57611dea611db3565b604051601f8201601f1916810167ffffffffffffffff81118282101715611e3d57611e3d611db3565b604052919050565b8015158114611c0b575f80fd5b5f67ffffffffffffffff831115611e6b57611e6b611db3565b611e7e601f8401601f1916602001611e14565b9050828152838383011115611e91575f80fd5b828260208301375f602084830101529392505050565b5f82601f830112611eb6575f80fd5b61171883833560208501611e52565b5f805f805f60a08688031215611ed9575f80fd5b853594506020860135611eeb81611d41565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611f15575f80fd5b908701906060828a031215611f28575f80fd5b611f30611dc7565b8235611f3b81611d41565b81526020830135611f4b81611e45565b6020820152604083013582811115611f61575f80fd5b611f6d8b828601611ea7565b6040830152508093505050509295509295909350565b5f60208284031215611f93575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215612027575f80fd5b6040516080810181811067ffffffffffffffff8211171561204a5761204a611db3565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f610240828403121561208c575f80fd5b612094611df0565b905061209f82611d55565b81526120ad60208301611d55565b60208201526120be60408301611d55565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014061211b818401611d55565b9082015261016061212d838201611d55565b9082015261018061213f838201611d55565b908201526101a0612151838201611d55565b908201526101c061216484848301612017565b9082015292915050565b5f805f805f6102c08688031215612183575f80fd5b85359450612194876020880161207b565b935061026086013567ffffffffffffffff8111156121b0575f80fd5b6121bc88828901611ea7565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c086880312156121ec575f80fd5b85359450602086013567ffffffffffffffff8082111561220a575f80fd5b818801915088601f83011261221d575f80fd5b61222c89833560208501611e52565b955061223b8960408a0161207b565b9450610280880135915080821115612251575f80fd5b5061225e88828901611ea7565b959894975092956102a001359392505050565b600181811c9082168061228557607f821691505b6020821081036122a357634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a08401526122ee60c0840182611d04565b9695505050505050565b5f60208284031215612308575f80fd5b5051919050565b8181038181111561171b57634e487b7160e01b5f52601160045260245ffd5b81516001600160a01b031681526102408101602083015161235a60208401826001600160a01b03169052565b50604083015161237560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516123db828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e08501526040810151610200850152606081015161022085015261200f565b80516001600160a01b03168252602081015161246b60208401826001600160a01b03169052565b50604081015161248660408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516124f8828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611856565b5f6102c061256f8388612444565b6001600160a01b038616610260840152610280830181905261259381840186611d04565b915050826102a083015295945050505050565b5f602082840312156125b6575f80fd5b8151611b7f81611d41565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526125f58184018e611d04565b9050612604602084018d612444565b6001600160a01b038b81166102808501528382036102a0850152612628828c611d04565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f67ffffffffffffffff82111561267d5761267d611db3565b5060051b60200190565b5f82601f830112612696575f80fd5b815160206126ab6126a683612664565b611e14565b8083825260208201915060208460051b8701019350868411156126cc575f80fd5b602086015b848110156126e857805183529183019183016126d1565b509695505050505050565b5f805f60608486031215612705575f80fd5b835167ffffffffffffffff8082111561271c575f80fd5b818601915086601f83011261272f575f80fd5b8151602061273f6126a683612664565b82815260059290921b8401810191818101908a84111561275d575f80fd5b8286015b8481101561279357805186811115612777575f80fd5b6127858d86838b0101612687565b845250918301918301612761565b50918901519197509093505050808211156127ac575f80fd5b506127b986828701612687565b925050604084015190509250925092565b5f826127e457634e487b7160e01b5f52601260045260245ffd5b500690565b5f602082840312156127f9575f80fd5b8151611b7f81611e45565b5f8251612815818460208701611ce2565b919091019291505056fe457a455448487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220c481fd737d68f65e134bf8a9ac399c7d6aa52f9ed8bea236e80df2c9feeab78664736f6c63430008160033',
    methodIdentifiers: {
        "convertToBase(address,address,address,uint256)": "5111bea2",
        "convertToShares(address,address,address,uint256)": "079554e7",
        "coreDeployer()": "c83e1f51",
        "deployHyperdrive(bytes32,string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "e990eba8",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "c1510618",
        "deployments(bytes32)": "37404017",
        "ezETH()": "13a73c78",
        "factory()": "c45a0155",
        "getNumberOfTargets()": "e99be396",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "renzoOracle()": "892866a4",
        "restakeManager()": "ff0996b5",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c",
        "version()": "54fd4d50"
    }
};
