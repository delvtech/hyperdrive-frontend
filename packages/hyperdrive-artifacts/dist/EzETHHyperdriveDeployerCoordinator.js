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
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "nonpayable"
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
    bytecode: '0x6101a06040523480156200001257600080fd5b5060405162002a4f38038062002a4f8339810160408190526200003591620001c1565b8787878787878760006200004a8882620003a8565b506001600160a01b0395861660805293851660a05291841660c052831660e052821661010052811661012052821661014081905260408051630274e78f60e31b815290519192506313a73c789160048083019260209291908290030181865afa158015620000bc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e2919062000474565b6001600160a01b0316610180816001600160a01b031681525050610140516001600160a01b031663892866a46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200013e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000164919062000474565b6001600160a01b031661016052506200049b9650505050505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620001ac57600080fd5b50565b8051620001bc8162000196565b919050565b600080600080600080600080610100898b031215620001df57600080fd5b88516001600160401b0380821115620001f757600080fd5b818b0191508b601f8301126200020c57600080fd5b81518181111562000221576200022162000180565b604051601f8201601f19908116603f011681019083821181831017156200024c576200024c62000180565b81604052828152602093508e848487010111156200026957600080fd5b600091505b828210156200028d57848201840151818301850152908301906200026e565b6000848483010152809c50505050620002a8818c01620001af565b98505050620002ba60408a01620001af565b9550620002ca60608a01620001af565b9450620002da60808a01620001af565b9350620002ea60a08a01620001af565b9250620002fa60c08a01620001af565b91506200030a60e08a01620001af565b90509295985092959890939650565b600181811c908216806200032e57607f821691505b6020821081036200034f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003a357600081815260208120601f850160051c810160208610156200037e5750805b601f850160051c820191505b818110156200039f578281556001016200038a565b5050505b505050565b81516001600160401b03811115620003c457620003c462000180565b620003dc81620003d5845462000319565b8462000355565b602080601f831160018114620004145760008415620003fb5750858301515b600019600386901b1c1916600185901b1785556200039f565b600085815260208120601f198616915b82811015620004455788860151825594840194600190910190840162000424565b5085821015620004645787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200048757600080fd5b8151620004948162000196565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516124e16200056e60003960008181610155015281816110fa0152818161112f015281816111aa01526112e80152600081816103400152611396015260008181610500015261125c0152600081816103a80152610c960152600081816104100152610b790152600081816103740152610a5c0152600081816103dc01526108520152600081816104980152610f91015260008181610464015281816105d9015281816107770152610d8501526124e16000f3fe6080604052600436106100fe5760003560e01c8063aa8cd6c411610095578063c45a015511610064578063c45a015514610452578063c83e1f5114610486578063e990eba8146104ba578063e99be396146104da578063ff0996b5146104ee57600080fd5b8063aa8cd6c414610396578063ab71905f146103ca578063b6cb1118146103fe578063c15106181461043257600080fd5b806337404017116100d157806337404017146101b057806354fd4d50146102fe578063892866a41461032e578063a085fa301461036257600080fd5b806304baa00b1461010357806306fdde031461012e57806313a73c781461014357806316abfc701461018f575b600080fd5b34801561010f57600080fd5b50610118610522565b6040516101259190611a72565b60405180910390f35b34801561013a57600080fd5b5061011861053e565b34801561014f57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610125565b6101a261019d366004611bc4565b6105cc565b604051908152602001610125565b3480156101bc57600080fd5b5061028d6101cb366004611c89565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091525060009081526001602081815260409283902083516101008101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c083015260079092015490911660e082015290565b60405161012591908151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e09283015116918101919091526101000190565b34801561030a57600080fd5b506040805180820190915260078152663b18971817189960c91b6020820152610118565b34801561033a57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b34801561036e57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a257600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d657600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b34801561040a57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b34801561043e57600080fd5b5061017761044d366004611dfd565b61076a565b34801561045e57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b34801561049257600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b3480156104c657600080fd5b506101776104d5366004611e6b565b610d78565b3480156104e657600080fd5b5060046101a2565b3480156104fa57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b60405180606001604052806022815260200161248a6022913981565b6000805461054b90611f0c565b80601f016020809104026020016040519081016040528092919081815260200182805461057790611f0c565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b505050505081565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461061757604051634084351160e01b815260040160405180910390fd5b61061f6110a7565b6000868152600160205260409020600301546001600160a01b0316806106585760405163952b05cb60e01b815260040160405180910390fd5b6000610666828888876110c8565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b815260040161069993929190611f46565b60206040518083038185885af11580156106b7573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106dc9190611f8c565b925060006106ea8234611fa5565b9050801561075d57604051600090339083908381818185875af1925050503d8060008114610734576040519150601f19603f3d011682016040523d82523d6000602084013e610739565b606091505b505090508061075b576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107b557604051634084351160e01b815260040160405180910390fd5b60008681526001602052604081209084900361094a578054156107eb57604051633be1b34d60e11b815260040160405180910390fd5b6107f486611161565b60006108008787611257565b90506000876040516020016108159190611fc6565b60405160208183030381529060405280519060200120905060008780519060200120905060006108448a611414565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636b323707828b8e8b60405160200161089d929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b81526004016108d1939291906121fc565b6020604051808303816000875af11580156108f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109149190612230565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610761565b600087815260016020526040902054806109775760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016109899190611fc6565b60405160208183030381529060405280519060200120146109bd5760405163332ee11f60e01b815260040160405180910390fd5b600182015486516020880120146109e757604051631a3272d160e31b815260040160405180910390fd5b6109f087611161565b60006109fb88611414565b6002840154608082015290506001869003610b255760058301546001600160a01b031615610a3b5760405162e896af60e31b815260040160405180910390fd5b604080513360208201529081018a9052606081018690526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636b3237079083908a90608001604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610abe939291906121fc565b6020604051808303816000875af1158015610add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b019190612230565b6005840180546001600160a01b0319166001600160a01b038316179055935061075d565b85600203610c425760068301546001600160a01b031615610b585760405162e896af60e31b815260040160405180910390fd5b604080513360208201529081018a9052606081018690526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636b3237079083908a90608001604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610bdb939291906121fc565b6020604051808303816000875af1158015610bfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1e9190612230565b6006840180546001600160a01b0319166001600160a01b038316179055935061075d565b85600303610d5f5760078301546001600160a01b031615610c755760405162e896af60e31b815260040160405180910390fd5b604080513360208201529081018a9052606081018690526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636b3237079083908a90608001604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610cf8939291906121fc565b6020604051808303816000875af1158015610d17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3b9190612230565b6007840180546001600160a01b0319166001600160a01b038316179055935061075d565b604051631d9f815960e11b815260040160405180910390fd5b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610dc357604051634084351160e01b815260040160405180910390fd5b60008681526001602081815260409283902083516101008101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007909301541660e08201529015610e5f57604051632c95caeb60e01b815260040160405180910390fd5b8051610e7e5760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610ea3575060a08101516001600160a01b0316155b80610eb9575060c08101516001600160a01b0316155b80610ecf575060e08101516001600160a01b0316155b15610eed5760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610f00908790602001611fc6565b6040516020818303038152906040528051906020012014610f345760405163332ee11f60e01b815260040160405180910390fd5b8060200151848051906020012014610f5f57604051631a3272d160e31b815260040160405180910390fd5b610f6885611161565b6000610f7386611414565b905081604001518160800181815250506000889050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636a4625798b868b89608001518a60a001518b60c001518c60e001518b8b604051602001610ff1929190918252602082015260400190565b604051602081830303815290604052805190602001206040518963ffffffff1660e01b815260040161102a98979695949392919061224d565b6020604051808303816000875af1158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d9190612230565b60009b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b34156110c657604051631574f9f360e01b815260040160405180910390fd5b565b60008160200151156110ed5760405163350b944160e11b815260040160405180910390fd5b6111226001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168530866114e2565b6111566001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868561154f565b506000949350505050565b61116a816115df565b80516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146111a857604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b0316146111fe5760405163073f739d60e51b815260040160405180910390fd5b806080015166038d7ea4c6800014611229576040516349db44f560e01b815260040160405180910390fd5b8060a0015166038d7ea4c6800014611254576040516318c9522360e11b815260040160405180910390fd5b50565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156112b8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112e0919081019061234e565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113689190611f8c565b604051630c5c83cb60e41b8152670de0b6b3a7640000600482015260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa1580156113e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114099190611f8c565b925050505b92915050565b61141c61193b565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526115499186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506116f4565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526115a08482611761565b611549576040516001600160a01b038481166024830152600060448301526115d591869182169063095ea7b390606401611517565b61154984826116f4565b6103e881608001511015611606576040516349db44f560e01b815260040160405180910390fd5b80610100015160000361162c57604051635428734d60e01b815260040160405180910390fd5b8061010001518160e00151108061165657508061010001518160e00151611653919061242e565b15155b156116745760405163253fffcf60e11b815260040160405180910390fd5b6101c081015151670de0b6b3a764000010806116a05750670de0b6b3a7640000816101c0015160200151115b806116bb5750670de0b6b3a7640000816101c0015160400151115b806116d65750670de0b6b3a7640000816101c0015160600151115b15611254576040516322f72cc360e11b815260040160405180910390fd5b60006117096001600160a01b03841683611804565b9050805160001415801561172e57508080602001905181019061172c9190612450565b155b1561175c57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b03168460405161177e919061246d565b6000604051808303816000865af19150503d80600081146117bb576040519150601f19603f3d011682016040523d82523d6000602084013e6117c0565b606091505b50915091508180156117ea5750805115806117ea5750808060200190518101906117ea9190612450565b80156114095750505050506001600160a01b03163b151590565b606061181283836000611819565b9392505050565b60608147101561183e5760405163cd78605960e01b8152306004820152602401611753565b600080856001600160a01b0316848660405161185a919061246d565b60006040518083038185875af1925050503d8060008114611897576040519150601f19603f3d011682016040523d82523d6000602084013e61189c565b606091505b50915091506118ac8683836118b6565b9695505050505050565b6060826118cb576118c682611912565b611812565b81511580156118e257506001600160a01b0384163b155b1561190b57604051639996b31560e01b81526001600160a01b0385166004820152602401611753565b5080611812565b8051156119225780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610200016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a1d6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60005b83811015611a3d578181015183820152602001611a25565b50506000910152565b60008151808452611a5e816020860160208601611a22565b601f01601f19169290920160200192915050565b6020815260006118126020830184611a46565b6001600160a01b038116811461125457600080fd5b8035611aa581611a85565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611ae357611ae3611aaa565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611ae357611ae3611aaa565b604051601f8201601f1916810167ffffffffffffffff81118282101715611b3657611b36611aaa565b604052919050565b801515811461125457600080fd5b600067ffffffffffffffff831115611b6657611b66611aaa565b611b79601f8401601f1916602001611b0d565b9050828152838383011115611b8d57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611bb557600080fd5b61181283833560208501611b4c565b600080600080600060a08688031215611bdc57600080fd5b853594506020860135611bee81611a85565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611c1957600080fd5b908701906060828a031215611c2d57600080fd5b611c35611ac0565b8235611c4081611a85565b81526020830135611c5081611b3e565b6020820152604083013582811115611c6757600080fd5b611c738b828601611ba4565b6040830152508093505050509295509295909350565b600060208284031215611c9b57600080fd5b5035919050565b600060808284031215611cb457600080fd5b6040516080810181811067ffffffffffffffff82111715611cd757611cd7611aaa565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006102408284031215611d1b57600080fd5b611d23611ae9565b9050611d2e82611a9a565b8152611d3c60208301611a9a565b6020820152611d4d60408301611a9a565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611daa818401611a9a565b90820152610160611dbc838201611a9a565b90820152610180611dce838201611a9a565b908201526101a0611de0838201611a9a565b908201526101c0611df384848301611ca2565b9082015292915050565b60008060008060006102c08688031215611e1657600080fd5b85359450611e278760208801611d08565b935061026086013567ffffffffffffffff811115611e4457600080fd5b611e5088828901611ba4565b9598949750949561028081013595506102a001359392505050565b60008060008060006102c08688031215611e8457600080fd5b85359450602086013567ffffffffffffffff80821115611ea357600080fd5b818801915088601f830112611eb757600080fd5b611ec689833560208501611b4c565b9550611ed58960408a01611d08565b9450610280880135915080821115611eec57600080fd5b50611ef988828901611ba4565b959894975092956102a001359392505050565b600181811c90821680611f2057607f821691505b602082108103611f4057634e487b7160e01b600052602260045260246000fd5b50919050565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a08401526118ac60c0840182611a46565b600060208284031215611f9e57600080fd5b5051919050565b8181038181111561140e57634e487b7160e01b600052601160045260246000fd5b81516001600160a01b0316815261024081016020830151611ff260208401826001600160a01b03169052565b50604083015161200d60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612073828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c09283015180519383019390935260208301516101e083015260408301516102008301526060909201516102209091015290565b80516001600160a01b03168252602081015161210660208401826001600160a01b03169052565b50604081015161212160408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612193828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e080820151805182850152602081015161020085015260408101516102208501526060810151610240850152611549565b60006102a061220b83876120df565b8061026084015261221e81840186611a46565b91505082610280830152949350505050565b60006020828403121561224257600080fd5b815161181281611a85565b60006103408083526122618184018c611a46565b9050612270602084018b6120df565b828103610280840152612283818a611a46565b6001600160a01b039889166102a08501529688166102c084015250509285166102e0840152931661030082015261032001919091529392505050565b600067ffffffffffffffff8211156122d9576122d9611aaa565b5060051b60200190565b600082601f8301126122f457600080fd5b81516020612309612304836122bf565b611b0d565b82815260059290921b8401810191818101908684111561232857600080fd5b8286015b84811015612343578051835291830191830161232c565b509695505050505050565b60008060006060848603121561236357600080fd5b835167ffffffffffffffff8082111561237b57600080fd5b818601915086601f83011261238f57600080fd5b8151602061239f612304836122bf565b82815260059290921b8401810191818101908a8411156123be57600080fd5b8286015b848110156123f6578051868111156123da5760008081fd5b6123e88d86838b01016122e3565b8452509183019183016123c2565b509189015191975090935050508082111561241057600080fd5b5061241d868287016122e3565b925050604084015190509250925092565b60008261244b57634e487b7160e01b600052601260045260246000fd5b500690565b60006020828403121561246257600080fd5b815161181281611b3e565b6000825161247f818460208701611a22565b919091019291505056fe457a455448487970657264726976654465706c6f796572436f6f7264696e61746f72a26469706673582212200c1a56662cea7d471fb32464d95ba68f05a475766f38dc34933b3990c0aed54364736f6c63430008140033',
    methodIdentifiers: {
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
        "version()": "54fd4d50"
    }
};
