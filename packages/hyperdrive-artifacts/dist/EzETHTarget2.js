export const EzETHTarget2 = {
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "openShort",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
            "name": "MinimumSharePrice",
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
        }
    ],
    bytecode: '0x6102a06040523480156200001257600080fd5b50604051620042783803806200427883398101604081905262000035916200028b565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151840151905280516040908101516101609081529151606090810151610180908152828a0151881661022052908901516102405291880151600980549188166001600160a01b031992831617905591880151600a805491881691841691909117905593870151600b805491871691831691909117905590860151600c805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000176573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019c9190620003c8565b6001600160a01b03166102805250620003ef915050565b60405161020081016001600160401b0381118282101715620001e557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200020157600080fd5b50565b80516200021181620001eb565b919050565b6000608082840312156200022957600080fd5b604051608081016001600160401b03811182821017156200025a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620002a157600080fd5b61026080821215620002b257600080fd5b620002bc620001b3565b9150620002c98562000204565b8252620002d96020860162000204565b6020830152620002ec6040860162000204565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200035781870162000204565b908301526101806200036b86820162000204565b908301526101a06200037f86820162000204565b908301526101c06200039386820162000204565b908301526101e0620003a88787830162000216565b8184015250819350620003bd81860162000204565b925050509250929050565b600060208284031215620003db57600080fd5b8151620003e881620001eb565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613cc2620005b6600039600061247401526000612495015260005050600050506000505060008181610100015281816103100152612c2601526000818161145101528181611bf201528181611c5501528181612407015281816128040152818161284001528181612a3f0152612c000152600081816107ef01528181610d1a01528181610d5c01528181610e4e015281816112c4015281816113230152612bda015260006118110152600081816119370152818161256a015281816125e30152612d400152600081816109b301528181610dcf015281816113be0152818161190b01526125b7015260008181610dae015281816125360152612cfc01526000818161081001528181610cf801528181610d7d01528181610e6f015281816112a2015281816113440152612c4c0152600081816101de015281816103a8015281816108eb01526133410152600081816106a9015281816107290152818161079f0152818161086b01526108a301526000818161161d01526124b6015260005050613cc26000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046135d6565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046135d6565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610cc9565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c8919061364b565b909155506101d99050844283610eab565b6102037f00000000000000000000000000000000000000000000000000000000000000008561364b565b98506102118389888c610fe9565b600061021e60018b611183565b90506102378161023160208e018e61365e565b8b6111b8565b8d8a8a898e8561024a602083018361365e565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613695565b8961029560408a018a6136b2565b6040516102a89796959493929190613722565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611260565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f00000000000000000000000000000000000000000000000000000000000000008461364b565b90506000806000806103e08e8988611273565b600d8054949850929650909450925083916000906103ff90849061364b565b909155506104109050874283610eab565b50600061041e84898d6113f9565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b8961142b565b6000610468600288611183565b90508c6104828261047c602084018461365e565b856111b8565b858b8684610493602086018661365e565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613695565b6104e4896104de8a8d613763565b90610683565b8d6104f260408e018e6136b2565b604051610506989796959493929190613776565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b6000610584602083018361365e565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613695565b156105e7576105dd856105d860408701876136b2565b6115df565b90935090506105ff565b50346105ff856105fa60408701876136b2565b6115fb565b610607611260565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a7640000611698565b90505b92915050565b60006106cd427f00000000000000000000000000000000000000000000000000000000000000006116b6565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610cc1565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b61364b565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da6116cc565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116ed565b92505b506108418361170d565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613763565b8a84610eab565b6108d5896108cf6108c87f00000000000000000000000000000000000000000000000000000000000000008361364b565b429061173b565b84610eab565b6108de88611750565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613763565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c611183565b6000818152601060205260408120549192508c8c8315610a82576001925060008061096b86898d8660006118f4565b9150915080600d6000828254610981919061364b565b9091555061099d905086600084610997816119c3565b886119ed565b6109a7818361364b565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b67565b91506109eb6109e68385610683565b611bb1565b60068054600290610a0c9084906201000090046001600160701b03166137be565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a398261170d565b60068054601090610a5b908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f600184611183565b6000818152601060205260409020549091508015610b9e5760019450600080610abc838b8f8860016118f4565b9150915080600d6000828254610ad2919061364b565b90915550610aee905083600084610ae8816119c3565b8a611bdb565b610af88183613763565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b03166137be565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b558261170d565b60068054601090610b77908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb0876119c3565b610bb9836119c3565b610bc391906137fe565b6000611dcc565b8e610bd58482611e0b565b50505b6000610be384612005565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb1578e610cad5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612151565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cd96116cc565b600254909150610d3e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006121dc565b600254909450610da1908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116ed565b9150610df88785610df3857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612208565b61226d565b15610e0557610e056122af565b610e11878588856122c8565b91965094509250670de0b6b3a7640000610e93610e2e878461364b565b600254610e4c908890600160801b90046001600160801b0316613763565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116ed565b1115610ea157610ea16122af565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed75750505050565b6000848152600860205260408120546001600160801b031690819003610f3157610f008361170d565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610faf565b610f82610f7d670de0b6b3a7640000610f4a8886613763565b610f54919061381e565b85670de0b6b3a7640000610f68878a613763565b610f72919061381e565b859291906001612314565b61170d565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb88461170d565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661102b610f7d82611015670de0b6b3a76400008661381e565b6005546001600160801b03169190886001612314565b600580546001600160801b0319166001600160801b03929092169190911790556110548561170d565b6002805460009061106f9084906001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109c8461170d565b600280546010906110be908490600160801b90046001600160801b0316613835565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110eb8461170d565b6110f590826137de565b600380546001600160801b03808416600160801b0291161790559050600061111c836123bc565b905061113a8161112b876119c3565b6111359084613855565b611dcc565b61114384612400565b61114f5761114f6122af565b600061115a85612460565b90508061117a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111ea90849061364b565b90915550506000838152601060205260408120805483929061120d90849061364b565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a764000061246d565b60008060008060006112836116cc565b6002549091506112e8908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006124db565b9350876112f585896124fc565b1115611303576113036122af565b6002546000908190611368908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116ed565b935061137e8a670de0b6b3a7640000868c612511565b5091935090915061139190508183613763565b61139b9087613763565b9550886113e8816113e28d6113b0868c613763565b8d6113bb878261261f565b877f0000000000000000000000000000000000000000000000000000000000000000612635565b906124fc565b975090945050505093509350935093565b600061140b6040830160208401613695565b15611417575082611424565b611421848461265a565b90505b9392505050565b6002546001600160801b031683811015611447576114476122af565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147f908390600f0b61266f565b101561148d5761148d6122af565b6004546114d790610f7d90600160801b90046001600160801b03166114ba670de0b6b3a76400008661381e565b600554600160801b90046001600160801b03169190896001612314565b600580546001600160801b03928316600160801b0292169190911790556114fd8161170d565b600280546001600160801b0319166001600160801b03929092169190911790556115268561170d565b60028054601090611548908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115758561170d565b60048054601090611597908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c6836123bc565b905061113a816115d5886119c3565b61113590846137fe565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561166e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611692919061387d565b50505050565b60008260001904841183021582026116af57600080fd5b5091020490565b60006116c282846138b0565b6106989084613763565b6002546004546000916106cd916001600160801b0390911690600f0b61266f565b6000611704826116fe858888611698565b90612695565b95945050505050565b60006001600160801b0382111561173757604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161174a5782610698565b50919050565b6006546000908190611773908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b031692509050818111156118ef57600061179d8383613763565b90506117ac610f7d8286612700565b600680546010906117ce908490600160801b90046001600160801b0316613835565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611807858361265a90919063ffffffff16565b90506000611835827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600d6000828254611849919061364b565b9091555061185990508183613763565b91506118648261170d565b6002805460009061187f9084906001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118ac82612715565b600480546000906118c1908490600f0b6138c4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611901878561265a565b9150600061192f837f0000000000000000000000000000000000000000000000000000000000000000610683565b905061195b817f0000000000000000000000000000000000000000000000000000000000000000610683565b9150831561197e5761196d8282613763565b6119779084613763565b9250611995565b6119888282613763565b611992908461364b565b92505b868610156119b8576119a8838789611698565b92506119b5828789611698565b91505b509550959350505050565b60006001600160ff1b038211156117375760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a36610f7d82611a19670de0b6b3a76400008661381e565b600554600160801b90046001600160801b031691908a6000612314565b600580546001600160801b03928316600160801b029216919091179055611a5c8661170d565b611a669082613835565b600480546001600160801b03928316600160801b029216919091179055611a8c8461170d565b60028054600090611aa79084906001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ad48361273f565b60048054600090611ae9908490600f0b6138c4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b198561170d565b60028054601090611b3b908490600160801b90046001600160801b0316613835565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b7f84611b798a888a611698565b9061265a565b9050611b8c888486611698565b611b96908261364b565b905086811115611ba65786810391505b509695505050505050565b60006001600160701b038211156117375760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c1d57507f0000000000000000000000000000000000000000000000000000000000000000611c1b8583613763565b105b15611c2a57611c2a6122af565b6004549084900390600f0b611c3f84826137fe565b905083611c4b866119c3565b138015611c8057507f0000000000000000000000000000000000000000000000000000000000000000611c7e838361266f565b105b15611c8d57611c8d6122af565b600354600160801b90046001600160801b0316611ccf610f7d82611cb9670de0b6b3a76400008861381e565b6005546001600160801b031691908c6000612314565b600580546001600160801b0319166001600160801b0392909216919091179055611cf98882613763565b9050611d048161170d565b600380546001600160801b03928316600160801b029216919091179055611d2a8361170d565b600280546001600160801b0319166001600160801b0392909216919091179055611d538261273f565b600480546001600160801b0319166001600160801b0392909216919091179055611d7c8761170d565b60028054601090611d9e908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611de790610f7d906001600160801b0316848461277b565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e56916001600160801b031690613763565b905080600003611e6a57600191505061069b565b6000611e75856127e2565b905080600003611e8a5760019250505061069b565b600080611e9883858961287e565b9150915080611eae57600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611eea92919061396f565b6040805180830381865af4158015611f06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2a91906139e5565b91509150611f48611f3a826119c3565b611f4390613a09565b6129f9565b925082611f5e576000965050505050505061069b565b611f678261170d565b60078054600090611f829084906001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611faf8161170d565b60078054601090611fd1908490600160801b90046001600160801b03166137de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61202e87612b91565b6040518263ffffffff1660e01b815260040161204a9190613a25565b6040805180830381865af4158015612066573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061208a9190613a34565b91509150806120a0575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916121069161364b565b6121109190613763565b90508060000361212857506000958695509350505050565b6000808711612138576000612143565b612143848884611698565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561217757612177613a64565b6040519080825280601f01601f1916602001820160405280156121a1576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121c2578692505b828152826000602083013e90999098509650505050505050565b60006121fd8787876121f688670de0b6b3a7640000613763565b8787612ccb565b979650505050505050565b600061142161224961222284670de0b6b3a7640000613763565b6113e2670de0b6b3a7640000612238818a612700565b6122429190613763565b87906124fc565b61225b90670de0b6b3a764000061364b565b611b7984670de0b6b3a7640000613763565b6000806122a48561227c6116cc565b612286919061364b565b600254610e4c908790600160801b90046001600160801b0316613763565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060008060006122db898789612cee565b90925090506122ea8289613763565b975060006122f982888a611698565b9050612305818b613763565b9a989950979650505050505050565b600082600003612325575084611704565b811561237857612356612338848761364b565b6123428587610683565b61234c888a610683565b611b79919061364b565b90506000612364858861173b565b905080821015612372578091505b50611704565b82850361238757506000611704565b6123b26123948487613763565b61239e85876124fc565b6123a8888a610683565b611b799190613763565b9695505050505050565b60006123e4601060006123d0600286611183565b8152602001908152602001600020546119c3565b6123f6601060006123d0600187611183565b61069b91906137fe565b600061242c7f0000000000000000000000000000000000000000000000000000000000000000836124fc565b60035461244291906001600160801b031661364b565b600254612458906001600160801b031684610683565b101592915050565b600061069b826004611e0b565b600061069b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612d6e565b60006121fd8787876124f588670de0b6b3a7640000613763565b8787612eb9565b60006106988383670de0b6b3a7640000612eca565b6000808080612562878661255b8b6113e26125348c670de0b6b3a7640000613763565b7f0000000000000000000000000000000000000000000000000000000000000000906124fc565b9190612eca565b935061258e847f0000000000000000000000000000000000000000000000000000000000000000610683565b915060006125af6125a789670de0b6b3a7640000613763565b8a9088612eca565b90506125db817f00000000000000000000000000000000000000000000000000000000000000006124fc565b9350612607847f0000000000000000000000000000000000000000000000000000000000000000610683565b612611908461364b565b915050945094509450949050565b600081831161262e5781610698565b5090919050565b60008061264d846126478a888a612eca565b90612700565b9050611b8c888486612eca565b600061069883670de0b6b3a764000084611698565b60008061267c8484612ef0565b90925090508061268e5761268e6122af565b5092915050565b6000816000036126ae5750670de0b6b3a764000061069b565b826000036126be5750600061069b565b60006126c9836119c3565b905060006126de6126d9866119c3565b612f2c565b90508181026126f5670de0b6b3a764000082613a7a565b90506123b281613152565b600061069883670de0b6b3a764000084612eca565b600060016001607f1b038211156117375760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061275d575060016001607f1b0382135b156117375760405163a5353be560e01b815260040160405180910390fd5b6000806127898460006132e7565b6127948460006132e7565b61279e91906137fe565b905060008113156127ba576127b3818661364b565b94506127d9565b60008112156127d9576127cc81613a09565b6127d69086613763565b94505b50929392505050565b60035460009081906127fd906001600160801b031684612700565b90506128297f00000000000000000000000000000000000000000000000000000000000000008261364b565b6002546001600160801b0316111561174a576002547f0000000000000000000000000000000000000000000000000000000000000000906128749083906001600160801b0316613763565b6114249190613763565b612886613523565b60008061289284612b91565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128cd9190613a25565b6040805180830381865af41580156128e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290d9190613a34565b93509050826129225750600091506129f19050565b600061294961294484610160015185610140015161068390919063ffffffff16565b6119c3565b6129696129448561012001518661010001516124fc90919063ffffffff16565b61297391906137fe565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ab2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ad69190613aa8565b935093509350935080612af25750600098975050505050505050565b868414612b2357612b028461170d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b5457612b338361273f565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b8257612b648261170d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b99613575565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c9191166132f6565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612cc3929004166132f6565b905292915050565b600080612cdc88888888888861336c565b909250905080611ba657611ba66122af565b600080612d38856113e285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612d2e818c612700565b6113e29190613763565b9150612d64827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b600080846001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa158015612daf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612dd79190810190613b93565b925050506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612e1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e3f9190613c73565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa158015612e95573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121fd9190613c73565b600080612cdc888888888888613434565b6000826000190484118302158202612ee157600080fd5b50910281810615159190040190565b600080600083612eff866119c3565b612f0991906137fe565b90506000811215612f2157600080925092505061067c565b946001945092505050565b6000808213612f4e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fd19084901c6119c3565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361316d57506000919050565b680755bf798b4a1bf1e58212613196576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123b274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119c3565b600081831361262e5781610698565b600080670de0b6b3a764000061330a6106a1565b613314919061381e565b905080831161332457600061332e565b61332e8184613763565b9150611424613365670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061381e565b839061265a565b600080600061337e89898888886134f4565b9050613398866116fe6133918a8d61364b565b8790610683565b98506133a5858a86611698565b9850888110156133bc576000809250925050613429565b888103670de0b6b3a764000081106133f1576133ea6133e3670de0b6b3a764000089612700565b8290612695565b9050613409565b6134066133e3670de0b6b3a76400008961265a565b90505b8089101561341f57600080935093505050613429565b8803925060019150505b965096945050505050565b600080600061344689898888886134f4565b9050613456866116fe898b61364b565b97508781101561346d576000809250925050613429565b87810361347b818688612eca565b9050670de0b6b3a764000081106134a8576134a16133e3670de0b6b3a764000089612700565b90506134c0565b6134bd6133e3670de0b6b3a76400008961265a565b90505b6134ca8186612700565b9050808a10156134e257600080935093505050613429565b90980398600198509650505050505050565b60006135008585612695565b613519613511866116fe868b6124fc565b859085612eca565b6123b2919061364b565b604051806101200160405280613537613575565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156135ec57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561361857600080fd5b85016060818803121561362a57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613635565b60006020828403121561367057600080fd5b81356001600160a01b038116811461142457600080fd5b80151581146105ab57600080fd5b6000602082840312156136a757600080fd5b813561142481613687565b6000808335601e198436030181126136c957600080fd5b83018035915067ffffffffffffffff8211156136e457600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061375660c0830184866136f9565b9998505050505050505050565b8181038181111561069b5761069b613635565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006137b060e0830184866136f9565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561268e5761268e613635565b6001600160801b0381811683821601908082111561268e5761268e613635565b818103600083128015838313168383128216171561268e5761268e613635565b808202811582820484141761069b5761069b613635565b6001600160801b0382811682821603908082111561268e5761268e613635565b808201828112600083128015821682158216171561387557613875613635565b505092915050565b60006020828403121561388f57600080fd5b815161142481613687565b634e487b7160e01b600052601260045260246000fd5b6000826138bf576138bf61389a565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613635565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139838285516138f1565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156139f857600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a1e57613a1e613635565b5060000390565b610180810161069b82846138f1565b60008060408385031215613a4757600080fd5b825191506020830151613a5981613687565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613a8957613a8961389a565b600160ff1b821460001984141615613aa357613aa3613635565b500590565b60008060008060808587031215613abe57600080fd5b845193506020850151925060408501519150606085015161362a81613687565b604051601f8201601f1916810167ffffffffffffffff81118282101715613b0757613b07613a64565b604052919050565b600067ffffffffffffffff821115613b2957613b29613a64565b5060051b60200190565b600082601f830112613b4457600080fd5b81516020613b59613b5483613b0f565b613ade565b82815260059290921b84018101918181019086841115613b7857600080fd5b8286015b84811015611ba65780518352918301918301613b7c565b600080600060608486031215613ba857600080fd5b835167ffffffffffffffff80821115613bc057600080fd5b818601915086601f830112613bd457600080fd5b81516020613be4613b5483613b0f565b82815260059290921b8401810191818101908a841115613c0357600080fd5b8286015b84811015613c3b57805186811115613c1f5760008081fd5b613c2d8d86838b0101613b33565b845250918301918301613c07565b5091890151919750909350505080821115613c5557600080fd5b50613c6286828701613b33565b925050604084015190509250925092565b600060208284031215613c8557600080fd5b505191905056fea2646970667358221220b0f55d8cf64916f3973d90e6fdc6fedad2e14f50e0520742605a0137aa2a31a364736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
