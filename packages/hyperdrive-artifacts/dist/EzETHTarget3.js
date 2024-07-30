export const EzETHTarget3 = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_config",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolConfig",
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
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                    "name": "_restakeManager",
                    "type": "address",
                    "internalType": "contract IRestakeManager"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "event",
            "name": "AddLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CheckpointRewarderUpdated",
            "inputs": [
                {
                    "name": "newCheckpointRewarder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "basePayment",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CollectGovernanceFee",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CreateCheckpoint",
            "inputs": [
                {
                    "name": "checkpointTime",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedShorts",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedLongs",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "newGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialize",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "apr",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "baseProceeds",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauseStatusUpdated",
            "inputs": [
                {
                    "name": "isPaused",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauserUpdated",
            "inputs": [
                {
                    "name": "newPauser",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "status",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RedeemWithdrawalShares",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RemoveLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Sweep",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TransferSingle",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "id",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DistributeExcessIdleFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTimestamp",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MinimumTransactionAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotPayable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OutputLimit",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolAlreadyInitialized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolIsPaused",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReentrancyGuardReentrantCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RestrictedZeroAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint112",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620042393803806200423983398101604081905262000035916200028b565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151840151905280516040908101516101609081529151606090810151610180908152828a0151881661022052908901516102405291880151600980549188166001600160a01b031992831617905591880151600a805491881691841691909117905593870151600b805491871691831691909117905590860151600c805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000176573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019c9190620003c8565b6001600160a01b03166102805250620003ef915050565b60405161020081016001600160401b0381118282101715620001e557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200020157600080fd5b50565b80516200021181620001eb565b919050565b6000608082840312156200022957600080fd5b604051608081016001600160401b03811182821017156200025a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620002a157600080fd5b61026080821215620002b257600080fd5b620002bc620001b3565b9150620002c98562000204565b8252620002d96020860162000204565b6020830152620002ec6040860162000204565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200035781870162000204565b908301526101806200036b86820162000204565b908301526101a06200037f86820162000204565b908301526101c06200039386820162000204565b908301526101e0620003a88787830162000216565b8184015250819350620003bd81860162000204565b925050509250929050565b600060208284031215620003db57600080fd5b8151620003e881620001eb565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613c73620005c66000396000612b4601526000612b67015260005050600050506000818161030301528181610332015261035f01526000818160de015281816105a9015261169901526000818161085601528181610941015281816109d401528181610add0152818161156a015281816116730152818161201d015281816120800152818161295f01528181612cac0152612ce801526000818161013f015281816108c601528181610ea70152818161142e01528181611492015281816114d9015261164d01526000611c22015260008181611d7d0152612f4801526000818161106b0152611d5101526000612efe0152600081816101810152818161091901528181610ec8015281816113fe01528181611462015281816114fa01526116bf01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa301526128f501526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b0152600081816119700152612b88015260005050613c736000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c366004613557565b610066565b60405190815260200160405180910390f35b6100416100613660046135bb565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613621565b611381565b6113cb565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613634565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115d8565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613621565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613634565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613634565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c908390613621565b9050600080600061043c8a611604565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104769084906004016136c5565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b791906136d4565b91506104ca6104c58c61173e565b61176c565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b918591016136c5565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c91906136d4565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613634565b9190611792565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117b0565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b91906136ed565b8e6117c5565b61063a8961186d565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613621565b9b5090508a158061073757506107348c600061187a565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611792565b610770565b60005b905061077f60208501856136ed565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613724565b866107ca60408c018c613741565b6040516107dd9796959493929190613788565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f000000000000000000000000000000000000000000000000000000000000000060026137dc565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc91906137f3565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd848461188f565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e858585896000806113cb565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a66856118b5565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846118df565b600480546001600160801b0319166001600160801b0392909216919091179055610ab8836118b5565b600280546001600160801b03928316600160801b029216919091179055610b016000807f00000000000000000000000000000000000000000000000000000000000000006117c5565b610b196000610b1360208c018c6136ed565b8a6117c5565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f60208201826136ed565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613724565b87610b8a6040890189613741565b604051610b9d9796959493929190613788565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c1360208301836136ed565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b61188f565b905090565b600080610c728787878661191b565b9050610c7e81856115d8565b979650505050505050565b81600080610c9d6040850160208601613724565b15610cc257610cb885610cb36040870187613741565b611932565b9093509050610cda565b5034610cda85610cd56040870187613741565b61194e565b610ce26119eb565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f00000000000000000000000000000000000000000000000000000000000000006119fe565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611379565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b613621565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b92505b50610ef9836118b5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613634565b8a84611a14565b610f8d89610f87610f807f000000000000000000000000000000000000000000000000000000000000000083613621565b4290611b52565b84611a14565b610f9688611b61565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613634565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611d05565b6000818152601060205260408120549192508c8c831561113a576001925060008061102386898d866000611d3a565b9150915080600d60008282546110399190613621565b9091555061105590508660008461104f8161173e565b88611e09565b61105f8183613621565b915061108f86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f83565b91506110a361109e8385611fc7565b611fdc565b600680546002906110c49084906201000090046001600160701b0316613821565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f1826118b5565b60068054601090611113908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611d05565b60008181526010602052604090205490915080156112565760019450600080611174838b8f886001611d3a565b9150915080600d600082825461118a9190613621565b909155506111a69050836000846111a08161173e565b8a612006565b6111b08183613634565b91506111bf61109e8387611fc7565b600680546002906111e09084906201000090046001600160701b0316613821565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d826118b5565b6006805460109061122f908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611290576112826112688761173e565b6112718361173e565b61127b9190613861565b60006121f7565b8e61128d8482612236565b50505b600061129b84612430565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615611369578e6113655a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061257c565b5050505b50999b5050505050505050505050505b949350505050565b60006113a960106000611395600286611d05565b81526020019081526020016000205461173e565b6113bb60106000611395600187611d05565b6113c59190613861565b92915050565b6000806000806113db8a8a612609565b91509150806113f2576000809350935050506115cd565b6000611452838a61142b7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613634565b8b7f0000000000000000000000000000000000000000000000000000000000000000612645565b50905060006114b6848b8461148f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613634565b8d7f0000000000000000000000000000000000000000000000000000000000000000612702565b5090508115806114c4575080155b156114d0575060009050805b600061151e858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b905061152c83838c846127c0565b509093506000905061153e848f613621565b9050600061155f8b8b6115508761173e565b61155a908e613881565b61280c565b90508b61159461158f7f000000000000000000000000000000000000000000000000000000000000000083612873565b61173e565b61159d8361173e565b6115aa61158f8685611fc7565b6115b49190613861565b6115be9190613861565b60019950995050505050505050505b965096945050505050565b60006100916115ec84846301e13380612884565b6115fe85670de0b6b3a7640000613634565b906117b0565b61160c613492565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161170491166128aa565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611736929004166128aa565b905292915050565b60006001600160ff1b038211156117685760405163396ea70160e11b815260040160405180910390fd5b5090565b61177581612919565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117a957600080fd5b5091020490565b600061009183670de0b6b3a764000084611792565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906117f7908490613621565b90915550506000838152601060205260408120805483929061181a908490613621565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006113c5826004612236565b60008183136118895782610091565b50919050565b60008061189c8484612609565b9092509050806118ae576118ae612ab1565b5092915050565b60006001600160801b0382111561176857604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806118fd575060016001607f1b0382135b156117685760405163a5353be560e01b815260040160405180910390fd5b60006100788261192c858888611792565b90612aca565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156119c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e591906138a9565b50505050565b6000610c5e670de0b6b3a7640000612b3f565b6000611a0a82846138dc565b6100919084613634565b600083815260086020526040902054600160801b90046001600160801b0316808303611a405750505050565b6000848152600860205260408120546001600160801b031690819003611a9a57611a69836118b5565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b18565b611aeb611ae6670de0b6b3a7640000611ab38886613634565b611abd91906137dc565b85670de0b6b3a7640000611ad1878a613634565b611adb91906137dc565b859291906001612bad565b6118b5565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b21846118b5565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118895782610091565b6006546000908190611b84908490600160801b90046001600160801b0316611fc7565b6006546201000090046001600160701b03169250905081811115611d00576000611bae8383613634565b9050611bbd611ae68286612c4b565b60068054601090611bdf908490600160801b90046001600160801b03166138f0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c1885836117b090919063ffffffff16565b90506000611c46827f0000000000000000000000000000000000000000000000000000000000000000611fc7565b905080600d6000828254611c5a9190613621565b90915550611c6a90508183613634565b9150611c75826118b5565b60028054600090611c909084906001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cbd82612c60565b60048054600090611cd2908490600f0b613910565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611d2f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611d4787856117b0565b91506000611d75837f0000000000000000000000000000000000000000000000000000000000000000611fc7565b9050611da1817f0000000000000000000000000000000000000000000000000000000000000000611fc7565b91508315611dc457611db38282613634565b611dbd9084613634565b9250611ddb565b611dce8282613634565b611dd89084613621565b92505b86861015611dfe57611dee838789611792565b9250611dfb828789611792565b91505b509550959350505050565b600454600160801b90046001600160801b0316611e52611ae682611e35670de0b6b3a7640000866137dc565b600554600160801b90046001600160801b031691908a6000612bad565b600580546001600160801b03928316600160801b029216919091179055611e78866118b5565b611e8290826138f0565b600480546001600160801b03928316600160801b029216919091179055611ea8846118b5565b60028054600090611ec39084906001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ef0836118df565b60048054600090611f05908490600f0b613910565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f35856118b5565b60028054601090611f57908490600160801b90046001600160801b03166138f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f95846115fe8a888a611792565b9050611fa2888486611792565b611fac9082613621565b905086811115611fbc5786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611792565b60006001600160701b038211156117685760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061204857507f00000000000000000000000000000000000000000000000000000000000000006120468583613634565b105b1561205557612055612ab1565b6004549084900390600f0b61206a8482613861565b9050836120768661173e565b1380156120ab57507f00000000000000000000000000000000000000000000000000000000000000006120a9838361188f565b105b156120b8576120b8612ab1565b600354600160801b90046001600160801b03166120fa611ae6826120e4670de0b6b3a7640000886137dc565b6005546001600160801b031691908c6000612bad565b600580546001600160801b0319166001600160801b03929092169190911790556121248882613634565b905061212f816118b5565b600380546001600160801b03928316600160801b029216919091179055612155836118b5565b600280546001600160801b0319166001600160801b039290921691909117905561217e826118df565b600480546001600160801b0319166001600160801b03929092169190911790556121a7876118b5565b600280546010906121c9908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461221290611ae6906001600160801b0316848461280c565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612281916001600160801b031690613634565b9050806000036122955760019150506113c5565b60006122a085612c8a565b9050806000036122b5576001925050506113c5565b6000806122c3838589612d26565b91509150806122d95760009450505050506113c5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161231592919061393d565b6040805180830381865af4158015612331573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235591906139b3565b915091506123736123658261173e565b61236e906139d7565b612919565b92508261238957600096505050505050506113c5565b612392826118b5565b600780546000906123ad9084906001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123da816118b5565b600780546010906123fc908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61245987611604565b6040518263ffffffff1660e01b815260040161247591906136c5565b6040805180830381865af4158015612491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124b591906139f3565b91509150806124cb575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161253191613621565b61253b9190613634565b90508060000361255357506000958695509350505050565b600080871161256357600061256e565b61256e848884611792565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156125a2576125a2613a23565b6040519080825280601f01601f1916602001820160405280156125cc576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156125ed578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836126188661173e565b6126229190613861565b9050600081121561263a576000809250925050610d57565b946001945092505050565b60008060006126578888888888612e9c565b90506000612682670de0b6b3a76400006126718888612c4b565b61267b9190613621565b83906117b0565b9050670de0b6b3a764000081106126b6576126af6126a8670de0b6b3a7640000896117b0565b8290612aca565b90506126ce565b6126cb6126a8670de0b6b3a764000089612c4b565b90505b6126d881866117b0565b9050888110156126f0576000809350935050506125ff565b97909703976001975095505050505050565b60008060006127148989888888612ecb565b905061272e8661192c6127278a8d613621565b8790611fc7565b985061273b858a86611792565b9850888110156127525760008092509250506115cd565b888103670de0b6b3a76400008110612780576127796126a8670de0b6b3a764000089612c4b565b9050612798565b6127956126a8670de0b6b3a7640000896117b0565b90505b808910156127ae576000809350935050506115cd565b90970398600198509650505050505050565b60008060008060006127d3898789612ef0565b90925090506127e28289613634565b975060006127f182888a611792565b90506127fd818b613634565b9a989950979650505050505050565b60008061281a846000612f76565b612825846000612f76565b61282f9190613861565b9050600081131561284b576128448186613621565b945061286a565b600081121561286a5761285d816139d7565b6128679086613634565b94505b50929392505050565b60006100918383670de0b6b3a76400005b600082600019048411830215820261289b57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006128be610d5e565b6128c891906137dc565b90508083116128d85760006128e2565b6128e28184613634565b915061009161267b670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137dc565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129f69190613a39565b935093509350935080612a125750600098975050505050505050565b868414612a4357612a22846118b5565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a7457612a53836118df565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612aa257612a84826118b5565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612ae35750670de0b6b3a76400006113c5565b82600003612af3575060006113c5565b6000612afe8361173e565b90506000612b13612b0e8661173e565b612f8c565b9050818102612b2a670de0b6b3a764000082613a7a565b9050612b35816131b2565b9695505050505050565b60006113c57f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085613347565b600082600003612bbe575084610078565b8115612c1157612bef612bd18487613621565b612bdb8587611fc7565b612be5888a611fc7565b6115fe9190613621565b90506000612bfd8588611b52565b905080821015612c0b578091505b50610078565b828503612c2057506000610078565b610075612c2d8487613634565b612c378587612873565b612c41888a611fc7565b6115fe9190613634565b600061009183670de0b6b3a764000084612884565b600060016001607f1b038211156117685760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612ca5906001600160801b031684612c4b565b9050612cd17f000000000000000000000000000000000000000000000000000000000000000082613621565b6002546001600160801b03161115611889576002547f000000000000000000000000000000000000000000000000000000000000000090612d1c9083906001600160801b0316613634565b6100919190613634565b612d2e6134f3565b600080612d3a84611604565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d7591906136c5565b6040805180830381865af4158015612d91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612db591906139f3565b9350905082612dca575060009150612e949050565b6000612dec61158f846101600151856101400151611fc790919063ffffffff16565b612e0c61158f85610120015186610100015161287390919063ffffffff16565b612e169190613861565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000612ea88585612aca565b612ec1612eb98661192c868b611fc7565b859085611792565b6100759190613621565b6000612ed78585612aca565b612ec1612ee88661192c868b612873565b859085612884565b600080612f4085612f3a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f30818c612c4b565b612f3a9190613634565b90612873565b9150612f6c827f0000000000000000000000000000000000000000000000000000000000000000611fc7565b9050935093915050565b6000818313612f855781610091565b5090919050565b6000808213612fae5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130319084901c61173e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131cd57506000919050565b680755bf798b4a1bf1e582126131f6576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b3574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61173e565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015613388573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526133b09190810190613b5d565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156133f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061341891906136d4565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa15801561346e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7e91906136d4565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613507613492565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561188957600080fd5b600080600080600060a0868803121561356f57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156135a257600080fd5b6135ae88828901613545565b9150509295509295909350565b6000806000606084860312156135d057600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156135f557600080fd5b61360186828701613545565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156113c5576113c561360b565b818103818111156113c5576113c561360b565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113c58284613647565b6000602082840312156136e657600080fd5b5051919050565b6000602082840312156136ff57600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c3a57600080fd5b60006020828403121561373657600080fd5b813561009181613716565b6000808335601e1984360301811261375857600080fd5b83018035915067ffffffffffffffff82111561377357600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113c5576113c561360b565b60008060006060848603121561380857600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118ae576118ae61360b565b6001600160801b038181168382160190808211156118ae576118ae61360b565b81810360008312801583831316838312821617156118ae576118ae61360b565b80820182811260008312801582168215821617156138a1576138a161360b565b505092915050565b6000602082840312156138bb57600080fd5b815161009181613716565b634e487b7160e01b600052601260045260246000fd5b6000826138eb576138eb6138c6565b500690565b6001600160801b038281168282160390808211156118ae576118ae61360b565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113c5576113c561360b565b60006102a082019050613951828551613647565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156139c657600080fd5b505080516020909101519092909150565b6000600160ff1b82016139ec576139ec61360b565b5060000390565b60008060408385031215613a0657600080fd5b825191506020830151613a1881613716565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613a4f57600080fd5b8451935060208501519250604085015191506060850151613a6f81613716565b939692955090935050565b600082613a8957613a896138c6565b600160ff1b821460001984141615613aa357613aa361360b565b500590565b604051601f8201601f1916810167ffffffffffffffff81118282101715613ad157613ad1613a23565b604052919050565b600067ffffffffffffffff821115613af357613af3613a23565b5060051b60200190565b600082601f830112613b0e57600080fd5b81516020613b23613b1e83613ad9565b613aa8565b82815260059290921b84018101918181019086841115613b4257600080fd5b8286015b84811015611fbc5780518352918301918301613b46565b600080600060608486031215613b7257600080fd5b835167ffffffffffffffff80821115613b8a57600080fd5b818601915086601f830112613b9e57600080fd5b81516020613bae613b1e83613ad9565b82815260059290921b8401810191818101908a841115613bcd57600080fd5b8286015b84811015613c0557805186811115613be95760008081fd5b613bf78d86838b0101613afd565b845250918301918301613bd1565b5091890151919750909350505080821115613c1f57600080fd5b50613c2c86828701613afd565b92505060408401519050925092509256fea2646970667358221220f8850a0626987e84865b1c09957cac667f0d35edb71877560c1485f392776d7564736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
