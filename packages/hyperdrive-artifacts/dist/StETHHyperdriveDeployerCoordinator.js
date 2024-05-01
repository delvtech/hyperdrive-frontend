export const StETHHyperdriveDeployerCoordinator = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
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
                    "name": "_lido",
                    "type": "address",
                    "internalType": "contract ILido"
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
            "name": "deploy",
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
            "name": "lido",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract ILido"
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
    bytecode: '0x6101806040523480156200001257600080fd5b50604051620020273803806200202783398101604081905262000035916200008b565b6001600160a01b0397881660805295871660a05293861660c05291851660e05284166101005283166101205282166101405216610160526200014c565b6001600160a01b03811681146200008857600080fd5b50565b600080600080600080600080610100898b031215620000a957600080fd5b8851620000b68162000072565b60208a0151909850620000c98162000072565b60408a0151909750620000dc8162000072565b60608a0151909650620000ef8162000072565b60808a0151909550620001028162000072565b60a08a0151909450620001158162000072565b60c08a0151909350620001288162000072565b60e08a01519092506200013b8162000072565b809150509295985092959890939650565b60805160a05160c05160e05161010051610120516101405161016051611e1a6200020d6000396000818161013c01528181611010015281816110dd0152818161126e015261130601526000818161026e01526109d70152600081816102d601526108c301526000818161033e01526107af0152600081816102a2015261069b01526000818161030a01526104b00152600081816103a60152610eac015260008181610372015281816103d501528181610ae90152610c7d0152611e1a6000f3fe6080604052600436106100a75760003560e01c8063a085fa3011610064578063a085fa3014610290578063aa8cd6c4146102c4578063ab71905f146102f8578063b6cb11181461032c578063c45a015514610360578063c83e1f511461039457600080fd5b80630b3c4f86146100ac57806316abfc70146100e95780631ae6f5151461010a57806323509a2d1461012a578063374040171461015e578063966ecd1c1461025c575b600080fd5b3480156100b857600080fd5b506100cc6100c73660046117b3565b6103c8565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fc6100f736600461182f565b610adc565b6040519081526020016100e0565b34801561011657600080fd5b506100cc6101253660046118f4565b610c70565b34801561013657600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561016a57600080fd5b5061024f610179366004611957565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915250600090815260208181526040918290208251610120810184528154815260018201549281019290925260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516100e09190611970565b34801561026857600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561029c57600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d057600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561030457600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561033857600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036c57600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a057600080fd5b506100cc7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461041357604051634084351160e01b815260040160405180910390fd5b6000868152602081905260408120908490036105a85780541561044957604051633be1b34d60e11b815260040160405180910390fd5b61045286610fc7565b600061045e87876110bd565b905060008760405160200161047391906119ed565b60405160208183030381529060405280519060200120905060008780519060200120905060006104a28a611159565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663195d4bfc828b8e8b6040516020016104fb929190918252602082015260400190565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161052f93929190611c3b565b6020604051808303816000875af115801561054e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105729190611c6f565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610ad3565b600087815260208190526040902054806105d55760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016105e791906119ed565b604051602081830303815290604052805190602001201461061b5760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461064557604051631a3272d160e31b815260040160405180910390fd5b61064e87610fc7565b600061065988611159565b600284015460808201529050600186900361077a5760058301546001600160a01b0316156106995760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663195d4bfc8289338d8a6040516020016106df93929190611c93565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161071393929190611c3b565b6020604051808303816000875af1158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190611c6f565b6005840180546001600160a01b0319166001600160a01b0383161790559350610acf565b8560020361088e5760068301546001600160a01b0316156107ad5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663195d4bfc8289338d8a6040516020016107f393929190611c93565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161082793929190611c3b565b6020604051808303816000875af1158015610846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086a9190611c6f565b6006840180546001600160a01b0319166001600160a01b0383161790559350610acf565b856003036109a25760078301546001600160a01b0316156108c15760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663195d4bfc8289338d8a60405160200161090793929190611c93565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b815260040161093b93929190611c3b565b6020604051808303816000875af115801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e9190611c6f565b6007840180546001600160a01b0319166001600160a01b0383161790559350610acf565b85600403610ab65760088301546001600160a01b0316156109d55760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663195d4bfc8289338d8a604051602001610a1b93929190611c93565b604051602081830303815290604052805190602001206040518463ffffffff1660e01b8152600401610a4f93929190611c3b565b6020604051808303816000875af1158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a929190611c6f565b6008840180546001600160a01b0319166001600160a01b0383161790559350610acf565b604051631d9f815960e11b815260040160405180910390fd5b5050505b95945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b2757604051634084351160e01b815260040160405180910390fd5b6000868152602081905260409020600301546001600160a01b031680610b605760405163952b05cb60e01b815260040160405180910390fd5b6000610b6e8288888761120b565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b8152600401610ba193929190611cb4565b60206040518083038185885af1158015610bbf573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610be49190611d04565b92506000610bf28234611d1d565b90508015610acf57604051600090339083908381818185875af1925050503d8060008114610c3c576040519150601f19603f3d011682016040523d82523d6000602084013e610c41565b606091505b5050905080610c63576040516312171d8360e31b815260040160405180910390fd5b5050505095945050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cbb57604051634084351160e01b815260040160405180910390fd5b600085815260208181526040918290208251610120810184528154815260018201549281019290925260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610d6357604051632c95caeb60e01b815260040160405180910390fd5b8051610d825760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610da7575060a08101516001600160a01b0316155b80610dbd575060c08101516001600160a01b0316155b80610dd3575060e08101516001600160a01b0316155b80610dea57506101008101516001600160a01b0316155b15610e085760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610e1b9087906020016119ed565b6040516020818303038152906040528051906020012014610e4f5760405163332ee11f60e01b815260040160405180910390fd5b8060200151848051906020012014610e7a57604051631a3272d160e31b815260040160405180910390fd5b610e8385610fc7565b6000610e8e86611159565b905081604001518160800181815250506000879050600085905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ed871fd7858a88608001518960a001518a60c001518b60e001518c61010001518b8b604051602001610f11929190918252602082015260400190565b604051602081830303815290604052805190602001206040518963ffffffff1660e01b8152600401610f4a989796959493929190611d3e565b6020604051808303816000875af1158015610f69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8d9190611c6f565b60008b815260208190526040902060030180546001600160a01b0319166001600160a01b038316179055955050505050505b949350505050565b610fd08161137f565b80516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461100e57604051630722152560e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b0316146110645760405163073f739d60e51b815260040160405180910390fd5b806080015166038d7ea4c680001461108f576040516349db44f560e01b815260040160405180910390fd5b8060a0015166038d7ea4c68000146110ba576040516318c9522360e11b815260040160405180910390fd5b50565b604051630f451f7160e31b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa15801561112c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111509190611d04565b90505b92915050565b611161611491565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301518116610140808401919091528301518116610160808401919091528301511661018080830191909152909101516101a082015290565b600081602001511561123f57823410156112385760405163044044a560e21b815260040160405180910390fd5b5081610fbf565b604051636d78045960e01b81526001600160a01b038581166004830152306024830152604482018590526000917f000000000000000000000000000000000000000000000000000000000000000090911690636d780459906064016020604051808303816000875af11580156112b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112dd9190611d04565b60405163095ea7b360e01b81526001600160a01b038881166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b3906044016020604051808303816000875af1158015611351573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113759190611da5565b5050949350505050565b6103e8816080015110156113a6576040516349db44f560e01b815260040160405180910390fd5b8060e001516000036113cb57604051635428734d60e01b815260040160405180910390fd5b8060e001518160c0015110806113f357508060e001518160c001516113f09190611dc2565b15155b156114115760405163253fffcf60e11b815260040160405180910390fd5b61018081015151670de0b6b3a7640000108061143d5750670de0b6b3a764000081610180015160200151115b806114585750670de0b6b3a764000081610180015160400151115b806114735750670de0b6b3a764000081610180015160600151115b156110ba576040516322f72cc360e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161155c6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171561159b5761159b611561565b60405290565b6040516060810167ffffffffffffffff8111828210171561159b5761159b611561565b6001600160a01b03811681146110ba57600080fd5b80356115e4816115c4565b919050565b6000608082840312156115fb57600080fd5b6040516080810181811067ffffffffffffffff8211171561161e5761161e611561565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610200828403121561166257600080fd5b61166a611577565b9050611675826115d9565b8152611683602083016115d9565b6020820152611694604083016115d9565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101206116e58184016115d9565b908201526101406116f78382016115d9565b908201526101606117098382016115d9565b9082015261018061171c848483016115e9565b9082015292915050565b600082601f83011261173757600080fd5b813567ffffffffffffffff8082111561175257611752611561565b604051601f8301601f19908116603f0116810190828211818310171561177a5761177a611561565b8160405283815286602085880101111561179357600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600061028086880312156117cc57600080fd5b853594506117dd876020880161164f565b935061022086013567ffffffffffffffff8111156117fa57600080fd5b61180688828901611726565b95989497509495610240810135955061026001359392505050565b80151581146110ba57600080fd5b600080600080600060a0868803121561184757600080fd5b853594506020860135611859816115c4565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561188457600080fd5b908701906060828a03121561189857600080fd5b6118a06115a1565b82356118ab816115c4565b815260208301356118bb81611821565b60208201526040830135828111156118d257600080fd5b6118de8b828601611726565b6040830152508093505050509295509295909350565b600080600080610260858703121561190b57600080fd5b8435935061191c866020870161164f565b925061022085013567ffffffffffffffff81111561193957600080fd5b61194587828801611726565b94979396509394610240013593505050565b60006020828403121561196957600080fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b81516001600160a01b0316815261020081016020830151611a1960208401826001600160a01b03169052565b506040830151611a3460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151611a8e828501826001600160a01b03169052565b5050610140838101516001600160a01b038116848301525050610160838101516001600160a01b0381168483015250506101808381015180518483015260208101516101a085015260408101516101c085015260608101516101e08501526119e5565b80516001600160a01b031682526020810151611b1860208401826001600160a01b03169052565b506040810151611b3360408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151611b99828501826001600160a01b03169052565b5050610160818101516001600160a01b039081169184019190915261018080830151909116908301526101a09081015180519183019190915260208101516101c083015260408101516101e08301526060015161020090910152565b6000815180845260005b81811015611c1b57602081850181015186830182015201611bff565b506000602082860101526020601f19601f83011685010191505092915050565b6000610260611c4a8387611af1565b80610220840152611c5d81840186611bf5565b91505082610240830152949350505050565b600060208284031215611c8157600080fd5b8151611c8c816115c4565b9392505050565b6001600160a01b039390931683526020830191909152604082015260600190565b8381528260208201526060604082015260018060a01b03825116606082015260208201511515608082015260006040830151606060a0840152611cfa60c0840182611bf5565b9695505050505050565b600060208284031215611d1657600080fd5b5051919050565b8181038181111561115357634e487b7160e01b600052601160045260246000fd5b6000610300611d4d838c611af1565b80610220840152611d608184018b611bf5565b6001600160a01b03998a1661024085015297891661026084015250509386166102808501529185166102a08401529093166102c08201526102e0019190915292915050565b600060208284031215611db757600080fd5b8151611c8c81611821565b600082611ddf57634e487b7160e01b600052601260045260246000fd5b50069056fea26469706673582212204355d84866be9c04381f3597bc2bc297204744674a3af23c2a0fdf0d27afa7a964736f6c63430008140033',
    methodIdentifiers: {
        "coreDeployer()": "c83e1f51",
        "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86",
        "deployments(bytes32)": "37404017",
        "factory()": "c45a0155",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70",
        "lido()": "23509a2d",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c"
    }
};
