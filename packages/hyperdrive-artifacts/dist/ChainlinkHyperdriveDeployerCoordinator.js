export const ChainlinkHyperdriveDeployerCoordinator = {
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
            "name": "UnsafeCastToUint256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x61016060405234801562000011575f80fd5b50604051620029e2380380620029e28339810160408190526200003491620000bb565b87878787878787875f62000049898262000293565b506001600160a01b0396871660805294861660a05292851660c05290841660e0528316610100528216610120521661014052506200035f975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000b6575f80fd5b919050565b5f805f805f805f80610100898b031215620000d4575f80fd5b88516001600160401b0380821115620000eb575f80fd5b818b0191508b601f830112620000ff575f80fd5b8151818111156200011457620001146200008b565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f6200008b565b81604052828152602093508e848487010111156200015b575f80fd5b5f91505b828210156200017e57848201840151818301850152908301906200015f565b5f848483010152809c5050505062000198818c016200009f565b98505050620001aa60408a016200009f565b9550620001ba60608a016200009f565b9450620001ca60808a016200009f565b9350620001da60a08a016200009f565b9250620001ea60c08a016200009f565b9150620001fa60e08a016200009f565b90509295985092959890939650565b600181811c908216806200021e57607f821691505b6020821081036200023d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028e57805f5260205f20601f840160051c810160208510156200026a5750805b601f840160051c820191505b818110156200028b575f815560010162000276565b50505b505050565b81516001600160401b03811115620002af57620002af6200008b565b620002c781620002c0845462000209565b8462000243565b602080601f831160018114620002fd575f8415620002e55750858301515b5f19600386901b1c1916600185901b17855562000357565b5f85815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e0516101005161012051610140516125c86200041a5f395f81816102830152610d0101525f81816103010152610bce01525f81816103670152610a9b01525f81816102ce015261096801525f8181610334015261075f01525f81816103ec015261105001525f81816103b9015281816104f3015281816106880152818161078f0152818161099801528181610acb01528181610bfe01528181610d3101528181610e24015261108101526125c85ff3fe6080604052600436106100e4575f3560e01c8063aa8cd6c411610087578063c45a015511610057578063c45a0155146103a8578063c83e1f51146103db578063e990eba81461040e578063e99be3961461042d575f80fd5b8063aa8cd6c4146102f0578063ab71905f14610323578063b6cb111814610356578063c151061814610389575f80fd5b806337404017116100c2578063374040171461014757806354fd4d5014610243578063966ecd1c14610272578063a085fa30146102bd575f80fd5b806304baa00b146100e857806306fdde031461011257806316abfc7014610126575b5f80fd5b3480156100f3575f80fd5b506100fc610440565b6040516101099190611a9c565b60405180910390f35b34801561011d575f80fd5b506100fc61045c565b610139610134366004611bd1565b6104e7565b604051908152602001610109565b348015610152575f80fd5b50610236610161366004611c8f565b60408051610120810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152505f9081526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b0390811660608301526004830154811660808301526005830154811660a08301526006830154811660c08301526007830154811660e083015260089092015490911661010082015290565b6040516101099190611ca6565b34801561024e575f80fd5b50604080518082019091526007815266076312e302e32360cc1b60208201526100fc565b34801561027d575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610109565b3480156102c8575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b3480156102fb575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b34801561032e575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b348015610361575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b348015610394575f80fd5b506102a56103a3366004611e7a565b61067c565b3480156103b3575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e6575f80fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b348015610419575f80fd5b506102a5610428366004611ee3565b610e18565b348015610438575f80fd5b506005610139565b60405180606001604052806026815260200161256d6026913981565b5f805461046890611f7d565b80601f016020809104026020016040519081016040528092919081815260200182805461049490611f7d565b80156104df5780601f106104b6576101008083540402835291602001916104df565b820191905f5260205f20905b8154815290600101906020018083116104c257829003601f168201915b505050505081565b5f336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461053157604051634084351160e01b815260040160405180910390fd5b61053961118b565b5f868152600160205260409020600301546001600160a01b0316806105715760405163952b05cb60e01b815260040160405180910390fd5b5f61057e828888876111ac565b9050816001600160a01b03166377d05ff4828888886040518563ffffffff1660e01b81526004016105b193929190611fb5565b60206040518083038185885af11580156105cd573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906105f29190611ffa565b92505f6105ff8234612025565b9050801561066f576040515f90339083908381818185875af1925050503d805f8114610646576040519150601f19603f3d011682016040523d82523d5f602084013e61064b565b606091505b505090508061066d576040516312171d8360e31b815260040160405180910390fd5b505b5050505b95945050505050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106c657604051634084351160e01b815260040160405180910390fd5b5f86815260016020526040812090849003610876578054156106fb57604051633be1b34d60e11b815260040160405180910390fd5b6107058686611265565b5f6107108787611353565b90505f876040516020016107249190612038565b6040516020818303038152906040528051906020012090505f878051906020012090505f6107518a611387565b9050838160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008c8f8c6040516020016107cb929190918252602082015260400190565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610800949392919061226b565b6020604051808303815f875af115801561081c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061084091906122b0565b9285555060018401556002830191909155600490910180546001600160a01b0319166001600160a01b0383161790559050610673565b5f87815260016020526040902054806108a25760405163398b1c0960e21b815260040160405180910390fd5b80876040516020016108b49190612038565b60405160208183030381529060405280519060200120146108e85760405163332ee11f60e01b815260040160405180910390fd5b6001820154865160208801201461091257604051631a3272d160e31b815260040160405180910390fd5b61091c8787611265565b5f61092688611387565b6002840154608082015290506001869003610a665760058301546001600160a01b0316156109665760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b6040516020016109cd939291906122cb565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610a02949392919061226b565b6020604051808303815f875af1158015610a1e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a4291906122b0565b6005840180546001600160a01b0319166001600160a01b038316179055935061066f565b85600203610b995760068301546001600160a01b031615610a995760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610b00939291906122cb565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610b35949392919061226b565b6020604051808303815f875af1158015610b51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b7591906122b0565b6006840180546001600160a01b0319166001600160a01b038316179055935061066f565b85600303610ccc5760078301546001600160a01b031615610bcc5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610c33939291906122cb565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610c68949392919061226b565b6020604051808303815f875af1158015610c84573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca891906122b0565b6007840180546001600160a01b0319166001600160a01b038316179055935061066f565b85600403610dff5760088301546001600160a01b031615610cff5760405162e896af60e31b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638c98b3c6827f00000000000000000000000000000000000000000000000000000000000000008a338e8b604051602001610d66939291906122cb565b604051602081830303815290604052805190602001206040518563ffffffff1660e01b8152600401610d9b949392919061226b565b6020604051808303815f875af1158015610db7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ddb91906122b0565b6008840180546001600160a01b0319166001600160a01b038316179055935061066f565b604051631d9f815960e11b815260040160405180910390fd5b5f336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e6257604051634084351160e01b815260040160405180910390fd5b5f8681526001602081815260409283902083516101208101855281548152928101549183019190915260028101549282019290925260038201546001600160a01b03908116606083018190526004840154821660808401526005840154821660a08401526006840154821660c08401526007840154821660e0840152600890930154166101008201529015610f0a57604051632c95caeb60e01b815260040160405180910390fd5b8051610f295760405163398b1c0960e21b815260040160405180910390fd5b60808101516001600160a01b03161580610f4e575060a08101516001600160a01b0316155b80610f64575060c08101516001600160a01b0316155b80610f7a575060e08101516001600160a01b0316155b80610f9157506101008101516001600160a01b0316155b15610faf5760405163e97cc2bf60e01b815260040160405180910390fd5b8051604051610fc2908790602001612038565b6040516020818303038152906040528051906020012014610ff65760405163332ee11f60e01b815260040160405180910390fd5b806020015184805190602001201461102157604051631a3272d160e31b815260040160405180910390fd5b61102b8585611265565b5f61103586611387565b905081604001518160800181815250505f8890505f8590505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638cc23ce08b867f00000000000000000000000000000000000000000000000000000000000000008c8a608001518b60a001518c60c001518d60e001518e61010001518d8d6040516020016110d7929190918252602082015260400190565b604051602081830303815290604052805190602001206040518b63ffffffff1660e01b81526004016111129a999897969594939291906122ec565b6020604051808303815f875af115801561112e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061115291906122b0565b5f9b8c5260016020526040909b2060030180546001600160a01b0319166001600160a01b038d1617905550989998505050505050505050565b34156111aa57604051631574f9f360e01b815260040160405180910390fd5b565b5f8160200151156111d05760405163350b944160e11b815260040160405180910390fd5b5f856001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa15801561120d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061123191906122b0565b90506112486001600160a01b038216863087611455565b61125c6001600160a01b03821687866114c2565b50949350505050565b61126f8282611551565b81516001600160a01b03161561129857604051630722152560e11b815260040160405180910390fd5b60208201516001600160a01b03166112c35760405163073f739d60e51b815260040160405180910390fd5b5f818060200190518101906112d8919061236e565b91506112e790506003826123ab565b6112f290600a6124a4565b836080015114611315576040516349db44f560e01b815260040160405180910390fd5b6113206003826123ab565b61132b90600a6124a4565b8360a001511461134e576040516318c9522360e11b815260040160405180910390fd5b505050565b5f808280602001905181019061136991906122b0565b905061137d81670de0b6b3a7640000611669565b9150505b92915050565b61138f61197b565b81516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015190830152608083015160a08084019190915283015160c08084019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015181166101608084019190915283015181166101808084019190915283015181166101a080840191909152830151166101c080830191909152909101516101e082015290565b6040516001600160a01b0384811660248301528381166044830152606482018390526114bc9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611684565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261151384826116ea565b6114bc576040516001600160a01b0384811660248301525f604483015261154791869182169063095ea7b39060640161148a565b6114bc8482611684565b6103e882608001511015611578576040516349db44f560e01b815260040160405180910390fd5b8161010001515f0361159d57604051635428734d60e01b815260040160405180910390fd5b8161010001518260e0015110806115c757508161010001518260e001516115c491906124b2565b15155b156115e55760405163253fffcf60e11b815260040160405180910390fd5b6101c082015151670de0b6b3a764000010806116115750670de0b6b3a7640000826101c0015160200151115b8061162c5750670de0b6b3a7640000826101c0015160400151115b806116475750670de0b6b3a7640000826101c0015160600151115b15611665576040516322f72cc360e11b815260040160405180910390fd5b5050565b5f61167d61167684611787565b83906117f8565b9392505050565b5f6116986001600160a01b0384168361180c565b905080515f141580156116bc5750808060200190518101906116ba91906124d1565b155b1561134e57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b03168460405161170591906124ec565b5f604051808303815f865af19150503d805f811461173e576040519150601f19603f3d011682016040523d82523d5f602084013e611743565b606091505b509150915081801561176d57508051158061176d57508080602001905181019061176d91906124d1565b80156106735750505050506001600160a01b03163b151590565b5f80826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156117c5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117e99190612520565b50505091505061167d81611819565b5f61167d8383670de0b6b3a764000061183f565b606061167d83835f61185a565b5f8082121561183b5760405163071d137160e51b815260040160405180910390fd5b5090565b5f825f190484118302158202611853575f80fd5b5091020490565b60608147101561187f5760405163cd78605960e01b81523060048201526024016116e1565b5f80856001600160a01b0316848660405161189a91906124ec565b5f6040518083038185875af1925050503d805f81146118d4576040519150601f19603f3d011682016040523d82523d5f602084013e6118d9565b606091505b50915091506118e98683836118f3565b9695505050505050565b606082611908576119038261194f565b61167d565b815115801561191f57506001600160a01b0384163b155b1561194857604051639996b31560e01b81526001600160a01b03851660048201526024016116e1565b508061167d565b80511561195f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001611a4a60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f5b83811015611a69578181015183820152602001611a51565b50505f910152565b5f8151808452611a88816020860160208601611a4f565b601f01601f19169290920160200192915050565b602081525f61167d6020830184611a71565b6001600160a01b0381168114611978575f80fd5b8035611acd81611aae565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff81118282101715611b0957611b09611ad2565b60405290565b6040516101e0810167ffffffffffffffff81118282101715611b0957611b09611ad2565b8015158114611978575f80fd5b5f67ffffffffffffffff80841115611b5a57611b5a611ad2565b604051601f8501601f19908116603f01168101908282118183101715611b8257611b82611ad2565b81604052809350858152868686011115611b9a575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112611bc2575f80fd5b61167d83833560208501611b40565b5f805f805f60a08688031215611be5575f80fd5b853594506020860135611bf781611aae565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611c21575f80fd5b908701906060828a031215611c34575f80fd5b611c3c611ae6565b8235611c4781611aae565b81526020830135611c5781611b33565b6020820152604083013582811115611c6d575f80fd5b611c798b828601611bb3565b6040830152508093505050509295509295909350565b5f60208284031215611c9f575f80fd5b5035919050565b8151815260208083015190820152604080830151908201526060808301516001600160a01b039081169183019190915260808084015182169083015260a08084015182169083015260c08084015182169083015260e08084015182169083015261010080840151918216818401526101208301915b505092915050565b5f60808284031215611d33575f80fd5b6040516080810181811067ffffffffffffffff82111715611d5657611d56611ad2565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102408284031215611d98575f80fd5b611da0611b0f565b9050611dab82611ac2565b8152611db960208301611ac2565b6020820152611dca60408301611ac2565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e0820152610100808301358183015250610120808301358183015250610140611e27818401611ac2565b90820152610160611e39838201611ac2565b90820152610180611e4b838201611ac2565b908201526101a0611e5d838201611ac2565b908201526101c0611e7084848301611d23565b9082015292915050565b5f805f805f6102c08688031215611e8f575f80fd5b85359450611ea08760208801611d87565b935061026086013567ffffffffffffffff811115611ebc575f80fd5b611ec888828901611bb3565b9598949750949561028081013595506102a001359392505050565b5f805f805f6102c08688031215611ef8575f80fd5b85359450602086013567ffffffffffffffff80821115611f16575f80fd5b818801915088601f830112611f29575f80fd5b611f3889833560208501611b40565b9550611f478960408a01611d87565b9450610280880135915080821115611f5d575f80fd5b50611f6a88828901611bb3565b959894975092956102a001359392505050565b600181811c90821680611f9157607f821691505b602082108103611faf57634e487b7160e01b5f52602260045260245ffd5b50919050565b8381528260208201526060604082015260018060a01b0382511660608201526020820151151560808201525f6040830151606060a08401526118e960c0840182611a71565b5f6020828403121561200a575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561138157611381612011565b81516001600160a01b031681526102408101602083015161206460208401826001600160a01b03169052565b50604083015161207f60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401516120e5828501826001600160a01b03169052565b5050610160838101516001600160a01b0390811691840191909152610180808501518216908401526101a080850151909116908301526101c08084015180518285015260208101516101e085015260408101516102008501526060810151610220850152611d1b565b80516001600160a01b03168252602081015161217560208401826001600160a01b03169052565b50604081015161219060408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151612202828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e0808201518051828501526020810151610200850152604081015161022085015260608101516102408501526114bc565b5f6102c0612279838861214e565b6001600160a01b038616610260840152610280830181905261229d81840186611a71565b915050826102a083015295945050505050565b5f602082840312156122c0575f80fd5b815161167d81611aae565b6001600160a01b039390931683526020830191909152604082015260600190565b5f6103808083526122ff8184018e611a71565b905061230e602084018d61214e565b6001600160a01b038b81166102808501528382036102a0850152612332828c611a71565b9981166102c08501529788166102e084015250509385166103008501529184166103208401529092166103408201526103600152949350505050565b5f806040838503121561237f575f80fd5b825161238a81611aae565b602084015190925060ff811681146123a0575f80fd5b809150509250929050565b60ff828116828216039081111561138157611381612011565b600181815b808511156123fe57815f19048211156123e4576123e4612011565b808516156123f157918102915b93841c93908002906123c9565b509250929050565b5f8261241457506001611381565b8161242057505f611381565b816001811461243657600281146124405761245c565b6001915050611381565b60ff84111561245157612451612011565b50506001821b611381565b5060208310610133831016604e8410600b841016171561247f575081810a611381565b61248983836123c4565b805f190482111561249c5761249c612011565b029392505050565b5f61167d60ff841683612406565b5f826124cc57634e487b7160e01b5f52601260045260245ffd5b500690565b5f602082840312156124e1575f80fd5b815161167d81611b33565b5f82516124fd818460208701611a4f565b9190910192915050565b805169ffffffffffffffffffff81168114611acd575f80fd5b5f805f805f60a08688031215612534575f80fd5b61253d86612507565b945060208601519350604086015192506060860151915061256060808701612507565b9050929550929590935056fe436861696e6c696e6b487970657264726976654465706c6f796572436f6f7264696e61746f72a2646970667358221220f6ab7d4f2c983fe186e6a41effaa7165ecf5b9b966e646324127c6bcec27dc1864736f6c63430008160033',
    methodIdentifiers: {
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
