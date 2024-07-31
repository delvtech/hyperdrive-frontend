export const EzETHTarget4 = {
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
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
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
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientBalance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidCheckpointTime",
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
            "name": "OutputLimit",
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
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620037263803806200372683398101604081905262000035916200028b565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151840151905280516040908101516101609081529151606090810151610180908152828a0151881661022052908901516102405291880151600980549188166001600160a01b031992831617905591880151600a805491881691841691909117905593870151600b805491871691831691909117905590860151600c805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000176573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019c9190620003c8565b6001600160a01b03166102805250620003ef915050565b60405161020081016001600160401b0381118282101715620001e557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200020157600080fd5b50565b80516200021181620001eb565b919050565b6000608082840312156200022957600080fd5b604051608081016001600160401b03811182821017156200025a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620002a157600080fd5b61026080821215620002b257600080fd5b620002bc620001b3565b9150620002c98562000204565b8252620002d96020860162000204565b6020830152620002ec6040860162000204565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200035781870162000204565b908301526101806200036b86820162000204565b908301526101a06200037f86820162000204565b908301526101c06200039386820162000204565b908301526101e0620003a88787830162000216565b8184015250819350620003bd81860162000204565b925050509250929050565b600060208284031215620003db57600080fd5b8151620003e881620001eb565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516131f86200052e60003960008181611054015261238c01526000818161107501526123ad01526000505060005050600050506000818161026d0152611f40015260008181611786015281816117e901528181611b2501528181611b6101528181611d590152611f1a01526000818161056f0152611ef40152600061135b015260006114b6015260008181610733015261148a015260005050600081816105900152611f6601526000818161066b01526125190152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260008181611096015281816123ce01526124340152600050506131f86000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612b16565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612b6d565b6100b5565b005b610059610095366004612b16565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612b8f565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612bc6565b61017160408c018c612be3565b60405161018396959493929190612c53565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612ca3565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612b8f565b88610e61565b60006103066102fd6020870187612b8f565b88848989610a49565b90945090506103158188612ccd565b9250600061032283610f01565b5090506103326020870187612b8f565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612bc6565b8a888e80604001906103829190612be3565b604051610396989796959493929190612ce0565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612b8f565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f00000000000000000000000000000000000000000000000000000000000000006110bb565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612d28565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6110d8565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110f9565b92505b506105c183611119565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612ccd565b8a84611147565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612d28565b4290611285565b84611147565b61065e8861129a565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612ccd565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c61143e565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611473565b9150915080600d60008282546107019190612d28565b9091555061071d90508660008461071781611542565b8861156c565b6107278183612d28565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006116e6565b915061076b6107668385611730565b611745565b6006805460029061078c9084906201000090046001600160701b0316612d3b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b982611119565b600680546010906107db908490600160801b90046001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f60018461143e565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611473565b9150915080600d60008282546108529190612d28565b9091555061086e90508360008461086881611542565b8a61176f565b6108788183612ccd565b91506108876107668387611730565b600680546002906108a89084906201000090046001600160701b0316612d3b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d582611119565b600680546010906108f7908490600160801b90046001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611542565b61093983611542565b6109439190612d7b565b6000611960565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061199f565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611a2a565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611a37565b9050610acf83611119565b610ad99083612d9b565b600780546001600160801b0319166001600160801b0392909216919091179055610b0281611119565b60078054601090610b24908490600160801b90046001600160801b0316612d9b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611a55565b9350610b5f8684611aee565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612ccd565b905080600003610beb576001915050610d81565b6000610bf685611b03565b905080600003610c0b57600192505050610d81565b600080610c19838589611b9f565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612e39565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612eaf565b91509150610cc9610cbb82611542565b610cc490612ed3565b611d13565b925082610cdf5760009650505050505050610d81565b610ce882611119565b60078054600090610d039084906001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d3081611119565b60078054601090610d52908490600160801b90046001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612ccd565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612d28565b909155505060008381526010602052604081208054839290610eb6908490612d28565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611eab565b6040518263ffffffff1660e01b8152600401610f469190612eef565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612efe565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612d28565b61100c9190612ccd565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611a37565b976001975095505050505050565b6000610d817f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085611fe5565b60006110c78284612ca3565b6110d19084612ccd565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b61213c565b60006111108261110a858888611a37565b90612162565b95945050505050565b60006001600160801b0382111561114357604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111735750505050565b6000848152600860205260408120546001600160801b0316908190036111cd5761119c83611119565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561124b565b61121e611219670de0b6b3a76400006111e68886612ccd565b6111f09190612f2e565b85670de0b6b3a7640000611204878a612ccd565b61120e9190612f2e565b8592919060016121d7565b611119565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61125484611119565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161129457826110d1565b50919050565b60065460009081906112bd908490600160801b90046001600160801b0316611730565b6006546201000090046001600160701b031692509050818111156114395760006112e78383612ccd565b90506112f66112198286612275565b60068054601090611318908490600160801b90046001600160801b0316612d9b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611351858361228a90919063ffffffff16565b9050600061137f827f0000000000000000000000000000000000000000000000000000000000000000611730565b905080600d60008282546113939190612d28565b909155506113a390508183612ccd565b91506113ae82611119565b600280546000906113c99084906001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113f68261229f565b6004805460009061140b908490600f0b612f45565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114685760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611480878561228a565b915060006114ae837f0000000000000000000000000000000000000000000000000000000000000000611730565b90506114da817f0000000000000000000000000000000000000000000000000000000000000000611730565b915083156114fd576114ec8282612ccd565b6114f69084612ccd565b9250611514565b6115078282612ccd565b6115119084612d28565b92505b8686101561153757611527838789611a37565b9250611534828789611a37565b91505b509550959350505050565b60006001600160ff1b038211156111435760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115b561121982611598670de0b6b3a764000086612f2e565b600554600160801b90046001600160801b031691908a60006121d7565b600580546001600160801b03928316600160801b0292169190911790556115db86611119565b6115e59082612d9b565b600480546001600160801b03928316600160801b02921691909117905561160b84611119565b600280546000906116269084906001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611653836122c9565b60048054600090611668908490600f0b612f45565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061169885611119565b600280546010906116ba908490600160801b90046001600160801b0316612d9b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806116fe846116f88a888a611a37565b9061228a565b905061170b888486611a37565b6117159082612d28565b9050868111156117255786810391505b509695505050505050565b60006110d18383670de0b6b3a7640000611a37565b60006001600160701b038211156111435760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117b157507f00000000000000000000000000000000000000000000000000000000000000006117af8583612ccd565b105b156117be576117be612305565b6004549084900390600f0b6117d38482612d7b565b9050836117df86611542565b13801561181457507f0000000000000000000000000000000000000000000000000000000000000000611812838361213c565b105b1561182157611821612305565b600354600160801b90046001600160801b03166118636112198261184d670de0b6b3a764000088612f2e565b6005546001600160801b031691908c60006121d7565b600580546001600160801b0319166001600160801b039290921691909117905561188d8882612ccd565b905061189881611119565b600380546001600160801b03928316600160801b0292169190911790556118be83611119565b600280546001600160801b0319166001600160801b03929092169190911790556118e7826122c9565b600480546001600160801b0319166001600160801b039290921691909117905561191087611119565b60028054601090611932908490600160801b90046001600160801b0316612d5b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461197b90611219906001600160801b0316848461231e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff8111156119c5576119c5612f72565b6040519080825280601f01601f1916602001820160405280156119ef576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a10578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611a4e57600080fd5b5091020490565b600080611a628585611730565b9050611a6d81612385565b945084600003611a815760009150506110d1565b849150611a946040840160208501612bc6565b15611ac357611abc85611aaa6020860186612b8f565b611ab76040870187612be3565b6123f3565b9150611ae6565b611ae685611ad46020860186612b8f565b611ae16040870187612be3565b61240e565b509392505050565b60006110d18383670de0b6b3a76400006124a8565b6003546000908190611b1e906001600160801b031684612275565b9050611b4a7f000000000000000000000000000000000000000000000000000000000000000082612d28565b6002546001600160801b03161115611294576002547f000000000000000000000000000000000000000000000000000000000000000090611b959083906001600160801b0316612ccd565b6110d19190612ccd565b611ba7612a63565b600080611bb384611eab565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bee9190612eef565b6040805180830381865af4158015611c0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2e9190612efe565b9350905082611c435750600091506100ad9050565b6000611c6a611c6584610160015185610140015161173090919063ffffffff16565b611542565b611c8a611c65856101200151866101000151611aee90919063ffffffff16565b611c949190612d7b565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df09190612f88565b935093509350935080611e0c5750600098975050505050505050565b868414611e3d57611e1c84611119565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e6e57611e4d836122c9565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e9c57611e7e82611119565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611eb3612ab5565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fab91166124ce565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fdd929004166124ce565b905292915050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612026573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261204e919081019061307e565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612092573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b6919061315e565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa15801561210d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612131919061315e565b979650505050505050565b6000806121498484612544565b90925090508061215b5761215b612305565b5092915050565b60008160000361217b5750670de0b6b3a7640000610d81565b8260000361218b57506000610d81565b600061219683611542565b905060006121ab6121a686611542565b612583565b90508181026121c2670de0b6b3a764000082613177565b90506121cd816127a9565b9695505050505050565b6000826000036121e8575084611110565b811561223b576122196121fb8487612d28565b6122058587611730565b61220f888a611730565b6116f89190612d28565b905060006122278588611285565b905080821015612235578091505b50611110565b82850361224a57506000611110565b6121cd6122578487612ccd565b6122618587611aee565b61226b888a611730565b6116f89190612ccd565b60006110d183670de0b6b3a7640000846124a8565b60006110d183670de0b6b3a764000084611a37565b600060016001607f1b038211156111435760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806122e7575060016001607f1b0382135b156111435760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b60008061232c84600061293e565b61233784600061293e565b6123419190612d7b565b9050600081131561235d576123568186612d28565b945061237c565b600081121561237c5761236f81612ed3565b6123799086612ccd565b94505b50929392505050565b6000610d817f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612954565b600060405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561247d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124a191906131a5565b5050505050565b60008260001904841183021582026124bf57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006124e2610426565b6124ec9190612f2e565b90508083116124fc576000612506565b6125068184612ccd565b91506110d161253d670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612f2e565b839061228a565b60008060008361255386611542565b61255d9190612d7b565b9050600081121561257557600080925092505061257c565b9150600190505b9250929050565b60008082136125a55760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906126289084901c611542565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136127c457506000919050565b680755bf798b4a1bf1e582126127ed576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906121cd74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611542565b600081831361294d57816110d1565b5090919050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612995573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526129bd919081019061307e565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a25919061315e565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064016120f0565b604051806101200160405280612a77612ab5565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612b2b57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612b5057600080fd5b840160608187031215612b6257600080fd5b809150509250925092565b60008060408385031215612b8057600080fd5b50508035926020909101359150565b600060208284031215612ba157600080fd5b81356001600160a01b03811681146110d157600080fd5b801515811461040b57600080fd5b600060208284031215612bd857600080fd5b81356110d181612bb8565b6000808335601e19843603018112612bfa57600080fd5b83018035915067ffffffffffffffff821115612c1557600080fd5b60200191503681900382131561257c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612c8160a083018486612c2a565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612cb257612cb2612c8d565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612cb7565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612d1a60e083018486612c2a565b9a9950505050505050505050565b80820180821115610d8157610d81612cb7565b6001600160701b0381811683821601908082111561215b5761215b612cb7565b6001600160801b0381811683821601908082111561215b5761215b612cb7565b818103600083128015838313168383128216171561215b5761215b612cb7565b6001600160801b0382811682821603908082111561215b5761215b612cb7565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612e4d828551612dbb565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612ec257600080fd5b505080516020909101519092909150565b6000600160ff1b8201612ee857612ee8612cb7565b5060000390565b6101808101610d818284612dbb565b60008060408385031215612f1157600080fd5b825191506020830151612f2381612bb8565b809150509250929050565b8082028115828204841417610d8157610d81612cb7565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612cb7565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612f9e57600080fd5b8451935060208501519250604085015191506060850151612fbe81612bb8565b939692955090935050565b604051601f8201601f1916810167ffffffffffffffff81118282101715612ff257612ff2612f72565b604052919050565b600067ffffffffffffffff82111561301457613014612f72565b5060051b60200190565b600082601f83011261302f57600080fd5b8151602061304461303f83612ffa565b612fc9565b82815260059290921b8401810191818101908684111561306357600080fd5b8286015b848110156117255780518352918301918301613067565b60008060006060848603121561309357600080fd5b835167ffffffffffffffff808211156130ab57600080fd5b818601915086601f8301126130bf57600080fd5b815160206130cf61303f83612ffa565b82815260059290921b8401810191818101908a8411156130ee57600080fd5b8286015b848110156131265780518681111561310a5760008081fd5b6131188d86838b010161301e565b8452509183019183016130f2565b509189015191975090935050508082111561314057600080fd5b5061314d8682870161301e565b925050604084015190509250925092565b60006020828403121561317057600080fd5b5051919050565b60008261318657613186612c8d565b600160ff1b8214600019841416156131a0576131a0612cb7565b500590565b6000602082840312156131b757600080fd5b81516110d181612bb856fea2646970667358221220264014f3a6865abe48e92e0b7b73f5fc482a5d154f59cedec6c0c227ada43d5764736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
