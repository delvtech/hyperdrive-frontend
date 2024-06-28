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
    bytecode: '0x6102a06040523480156200001257600080fd5b506040516200426e3803806200426e83398101604081905262000035916200028b565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a0908152918501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151840151905280516040908101516101609081529151606090810151610180908152828a0151881661022052908901516102405291880151600980549188166001600160a01b031992831617905591880151600a805491881691841691909117905593870151600b805491871691831691909117905590860151600c805491861691909216179055918316610260819052815163224a19a960e21b815291518493919263892866a49260048083019391928290030181865afa15801562000176573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019c9190620003c8565b6001600160a01b03166102805250620003ef915050565b60405161020081016001600160401b0381118282101715620001e557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200020157600080fd5b50565b80516200021181620001eb565b919050565b6000608082840312156200022957600080fd5b604051608081016001600160401b03811182821017156200025a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620002a157600080fd5b61026080821215620002b257600080fd5b620002bc620001b3565b9150620002c98562000204565b8252620002d96020860162000204565b6020830152620002ec6040860162000204565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200035781870162000204565b908301526101806200036b86820162000204565b908301526101a06200037f86820162000204565b908301526101c06200039386820162000204565b908301526101e0620003a88787830162000216565b8184015250819350620003bd81860162000204565b925050509250929050565b600060208284031215620003db57600080fd5b8151620003e881620001eb565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613cb8620005b6600039600061268c01526000612559015260005050600050506000505060008181610100015281816103100152612df201526000818161147e01528181611c1f01528181611c82015281816124ee015281816129d001528181612a0c01528181612c0b0152612dcc0152600081816107f301528181610d2001528181610d6201528181610e79015281816112f1015281816113500152612da60152600061183e015260008181611964015281816123cd0152818161278e01526128070152600081816109b701528181610dd5015281816113eb0152818161193801526127db015260008181610db401528181612389015261275a01526000818161081401528181610cfe01528181610d8301528181610e9a015281816112cf015281816113710152612e180152600081816101de015281816103a8015281816108ef01526133d60152600081816106ad0152818161072d015281816107a30152818161086f01526108a701526000818161164a01526125e5015260005050613cb86000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046135a6565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046135a6565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610687565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a5565b905061017a8184600460016106d6565b50600080600061018a8787610ccf565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c8919061361b565b909155506101d99050844283610ed8565b6102037f00000000000000000000000000000000000000000000000000000000000000008561361b565b98506102118389888c611016565b600061021e60018b6111b0565b90506102378161023160208e018e61362e565b8b6111e5565b8d8a8a898e8561024a602083018361362e565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613665565b8961029560408a018a613682565b6040516102a897969594939291906136f2565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b600061035961128d565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a5565b9050600061039f6103956106a5565b84600460016106d6565b905060006103cd7f00000000000000000000000000000000000000000000000000000000000000008461361b565b90506000806000806103e08e89886112a0565b600d8054949850929650909450925083916000906103ff90849061361b565b909155506104109050874283610ed8565b50600061041e84898d611426565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b89611458565b60006104686002886111b0565b90508c6104828261047c602084018461362e565b856111e5565b858b8684610493602086018661362e565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613665565b6104e4896104de8a8d613733565b90610687565b8d6104f260408e018e613682565b604051610506989796959493929190613746565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b6000610584602083018361362e565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105c26040850160208601613665565b156105e7576105dd856105d86040870187613682565b61160c565b9093509050610603565b50346105ff856105fa6040870187613682565b611628565b8492505b61060b61128d565b9150801561067e57604051600090339083908381818185875af1925050503d8060008114610655576040519150601f19603f3d011682016040523d82523d6000602084013e61065a565b606091505b505090508061067c576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061069c8383670de0b6b3a76400006116c5565b90505b92915050565b60006106d1427f00000000000000000000000000000000000000000000000000000000000000006116e3565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fe57504286115b1561071757600101546001600160801b03169050610cc7565b60008060006107246106a5565b905060006107527f00000000000000000000000000000000000000000000000000000000000000008b61361b565b90505b818110156107c8576000818152600860205260409020600101546001600160801b031680156107a0576000828152600860205260409020549094506001600160801b031692506107c8565b507f000000000000000000000000000000000000000000000000000000000000000001610755565b8360000361083b578893506108386107de6116f9565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171a565b92505b506108458361173a565b6001850180546001600160801b0319166001600160801b039290921691909117905561089b6108947f00000000000000000000000000000000000000000000000000000000000000008b613733565b8a84610ed8565b6108d9896108d36108cc7f00000000000000000000000000000000000000000000000000000000000000008361361b565b4290611768565b84610ed8565b6108e28861177d565b50600090506008816109147f00000000000000000000000000000000000000000000000000000000000000008d613733565b815260208101919091526040016000908120600101546001600160801b0316915061094060028c6111b0565b6000818152601060205260408120549192508c8c8315610a86576001925060008061096f86898d866000611921565b9150915080600d6000828254610985919061361b565b909155506109a190508660008461099b816119f0565b88611a1a565b6109ab818361361b565b91506109db86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b94565b91506109ef6109ea8385610687565b611bde565b60068054600290610a109084906201000090046001600160701b031661378e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3d8261173a565b60068054601090610a5f908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a936001846111b0565b6000818152601060205260409020549091508015610ba25760019450600080610ac0838b8f886001611921565b9150915080600d6000828254610ad6919061361b565b90915550610af2905083600084610aec816119f0565b8a611c08565b610afc8183613733565b9150610b0b6109ea8387610687565b60068054600290610b2c9084906201000090046001600160701b031661378e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b598261173a565b60068054601090610b7b908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bdc57610bce610bb4876119f0565b610bbd836119f0565b610bc791906137ce565b6000611df9565b8e610bd98482611eac565b50505b6000610be7846120a6565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb7578e610cb35a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612204565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cdf6116f9565b600254909150610d44908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061228f565b600254909450610da7908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171a565b9150610dfe8785610df9857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122bb565b612320565b15610e0b57610e0b612362565b600080610e1989858a61237b565b9092509050610e288287613733565b9550610e3581858a6116c5565b9450610e41858a613733565b9650670de0b6b3a7640000610ebe610e59898661361b565b600254610e77908a90600160801b90046001600160801b0316613733565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171a565b1115610ecc57610ecc612362565b50505092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f045750505050565b6000848152600860205260408120546001600160801b031690819003610f5e57610f2d8361173a565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fdc565b610faf610faa670de0b6b3a7640000610f778886613733565b610f8191906137ee565b85670de0b6b3a7640000610f95878a613733565b610f9f91906137ee565b8592919060016123fb565b61173a565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fe58461173a565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611058610faa82611042670de0b6b3a7640000866137ee565b6005546001600160801b031691908860016123fb565b600580546001600160801b0319166001600160801b03929092169190911790556110818561173a565b6002805460009061109c9084906001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c98461173a565b600280546010906110eb908490600160801b90046001600160801b0316613805565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111188461173a565b61112290826137ae565b600380546001600160801b03808416600160801b02911617905590506000611149836124a3565b905061116781611158876119f0565b6111629084613825565b611df9565b611170846124e7565b61117c5761117c612362565b600061118785612547565b9050806111a757604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111da5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b03861684529091528120805483929061121790849061361b565b90915550506000838152601060205260408120805483929061123a90849061361b565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106d1670de0b6b3a7640000612554565b60008060008060006112b06116f9565b600254909150611315908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006126ff565b9350876113228589612720565b111561133057611330612362565b6002546000908190611395908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171a565b93506113ab8a670de0b6b3a7640000868c612735565b509193509091506113be90508183613733565b6113c89087613733565b9550886114158161140f8d6113dd868c613733565b8d6113e88782612843565b877f0000000000000000000000000000000000000000000000000000000000000000612859565b90612720565b975090945050505093509350935093565b60006114386040830160208401613665565b15611444575082611451565b61144e848461287e565b90505b9392505050565b6002546001600160801b03168381101561147457611474612362565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114ac908390600f0b612893565b10156114ba576114ba612362565b60045461150490610faa90600160801b90046001600160801b03166114e7670de0b6b3a7640000866137ee565b600554600160801b90046001600160801b031691908960016123fb565b600580546001600160801b03928316600160801b02921691909117905561152a8161173a565b600280546001600160801b0319166001600160801b03929092169190911790556115538561173a565b60028054601090611575908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115a28561173a565b600480546010906115c4908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115f3836124a3565b905061116781611602886119f0565b61116290846137ce565b60008060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf919061384d565b50505050565b60008260001904841183021582026116dc57600080fd5b5091020490565b60006116ef8284613880565b61069c9084613733565b6002546004546000916106d1916001600160801b0390911690600f0b612893565b60006117318261172b8588886116c5565b906128b9565b95945050505050565b60006001600160801b0382111561176457604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611777578261069c565b50919050565b60065460009081906117a0908490600160801b90046001600160801b0316610687565b6006546201000090046001600160701b0316925090508181111561191c5760006117ca8383613733565b90506117d9610faa8286612924565b600680546010906117fb908490600160801b90046001600160801b0316613805565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611834858361287e90919063ffffffff16565b90506000611862827f0000000000000000000000000000000000000000000000000000000000000000610687565b905080600d6000828254611876919061361b565b9091555061188690508183613733565b91506118918261173a565b600280546000906118ac9084906001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118d982612939565b600480546000906118ee908490600f0b613894565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061192e878561287e565b9150600061195c837f0000000000000000000000000000000000000000000000000000000000000000610687565b9050611988817f0000000000000000000000000000000000000000000000000000000000000000610687565b915083156119ab5761199a8282613733565b6119a49084613733565b92506119c2565b6119b58282613733565b6119bf908461361b565b92505b868610156119e5576119d58387896116c5565b92506119e28287896116c5565b91505b509550959350505050565b60006001600160ff1b038211156117645760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611a63610faa82611a46670de0b6b3a7640000866137ee565b600554600160801b90046001600160801b031691908a60006123fb565b600580546001600160801b03928316600160801b029216919091179055611a898661173a565b611a939082613805565b600480546001600160801b03928316600160801b029216919091179055611ab98461173a565b60028054600090611ad49084906001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b0183612963565b60048054600090611b16908490600f0b613894565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b468561173a565b60028054601090611b68908490600160801b90046001600160801b0316613805565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611bac84611ba68a888a6116c5565b9061287e565b9050611bb98884866116c5565b611bc3908261361b565b905086811115611bd35786810391505b509695505050505050565b60006001600160701b038211156117645760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611c4a57507f0000000000000000000000000000000000000000000000000000000000000000611c488583613733565b105b15611c5757611c57612362565b6004549084900390600f0b611c6c84826137ce565b905083611c78866119f0565b138015611cad57507f0000000000000000000000000000000000000000000000000000000000000000611cab8383612893565b105b15611cba57611cba612362565b600354600160801b90046001600160801b0316611cfc610faa82611ce6670de0b6b3a7640000886137ee565b6005546001600160801b031691908c60006123fb565b600580546001600160801b0319166001600160801b0392909216919091179055611d268882613733565b9050611d318161173a565b600380546001600160801b03928316600160801b029216919091179055611d578361173a565b600280546001600160801b0319166001600160801b0392909216919091179055611d8082612963565b600480546001600160801b0319166001600160801b0392909216919091179055611da98761173a565b60028054601090611dcb908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611e22611e08848361299f565b611e1384600061299f565b611e1d91906137ce565b612963565b9050600081600f0b1315611e775760038054829190600090611e4e9084906001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611ea757611e8c816138c1565b60038054600090611e4e9084906001600160801b0316613805565b505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611ef7916001600160801b031690613733565b905080600003611f0b57600191505061069f565b6000611f16856129ae565b905080600003611f2b5760019250505061069f565b600080611f39838589612a4a565b9150915080611f4f57600094505050505061069f565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f8b929190613965565b6040805180830381865af4158015611fa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fcb91906139db565b91509150611fe9611fdb826119f0565b611fe4906139ff565b612bc5565b925082611fff576000965050505050505061069f565b6120088261173a565b600780546000906120239084906001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120508161173a565b60078054601090612072908490600160801b90046001600160801b03166137ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120cf87612d5d565b6040518263ffffffff1660e01b81526004016120eb9190613a1b565b6040805180830381865af4158015612107573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061212b9190613a2a565b9150915080612141575060009485945092505050565b600080861161215157600061215b565b61215b8387610687565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916121c6919061361b565b6121d09190613733565b9050806000036121e95750600096879650945050505050565b60006121f5838361287e565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561222a5761222a613a5a565b6040519080825280601f01601f191660200182016040528015612254576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612275578692505b828152826000602083013e90999098509650505050505050565b60006122b08787876122a988670de0b6b3a7640000613733565b8787612e97565b979650505050505050565b600061144e6122fc6122d584670de0b6b3a7640000613733565b61140f670de0b6b3a76400006122eb818a612924565b6122f59190613733565b8790612720565b61230e90670de0b6b3a764000061361b565b611ba684670de0b6b3a7640000613733565b6000806123578561232f6116f9565b612339919061361b565b600254610e77908790600160801b90046001600160801b0316613733565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123c58561140f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006123bb818c612924565b61140f9190613733565b91506123f1827f0000000000000000000000000000000000000000000000000000000000000000610687565b9050935093915050565b60008260000361240c575084611731565b811561245f5761243d61241f848761361b565b6124298587610687565b612433888a610687565b611ba6919061361b565b9050600061244b8588611768565b905080821015612459578091505b50611731565b82850361246e57506000611731565b61249961247b8487613733565b6124858587612720565b61248f888a610687565b611ba69190613733565b9695505050505050565b60006124cb601060006124b76002866111b0565b8152602001908152602001600020546119f0565b6124dd601060006124b76001876111b0565b61069f91906137ce565b60006125137f000000000000000000000000000000000000000000000000000000000000000083612720565b60035461252991906001600160801b031661361b565b60025461253f906001600160801b031684610687565b101592915050565b600061069f826004611eac565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ff9969cd6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156125b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125dd9190810190613b25565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126659190613c05565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c5c83cb090606401602060405180830381865afa1580156126db573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc79190613c05565b60006122b087878761271988670de0b6b3a7640000613733565b8787612f4b565b600061069c8383670de0b6b3a7640000612f6e565b6000808080612786878661277f8b61140f6127588c670de0b6b3a7640000613733565b7f000000000000000000000000000000000000000000000000000000000000000090612720565b9190612f6e565b93506127b2847f0000000000000000000000000000000000000000000000000000000000000000610687565b915060006127d36127cb89670de0b6b3a7640000613733565b8a9088612f6e565b90506127ff817f0000000000000000000000000000000000000000000000000000000000000000612720565b935061282b847f0000000000000000000000000000000000000000000000000000000000000000610687565b612835908461361b565b915050945094509450949050565b6000818311612852578161069c565b5090919050565b6000806128718461286b8a888a612f6e565b90612924565b9050611bb9888486612f6e565b600061069c83670de0b6b3a7640000846116c5565b6000806128a08484612f94565b9092509050806128b2576128b2612362565b5092915050565b6000816000036128d25750670de0b6b3a764000061069f565b826000036128e25750600061069f565b60006128ed836119f0565b905060006129026128fd866119f0565b612fd0565b9050818102612919670de0b6b3a764000082613c1e565b9050612499816131f6565b600061069c83670de0b6b3a764000084612f6e565b600060016001607f1b038211156117645760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612981575060016001607f1b0382135b156117645760405163a5353be560e01b815260040160405180910390fd5b6000818313612852578161069c565b60035460009081906129c9906001600160801b031684612924565b90506129f57f00000000000000000000000000000000000000000000000000000000000000008261361b565b6002546001600160801b03161115611777576002547f000000000000000000000000000000000000000000000000000000000000000090612a409083906001600160801b0316613733565b6114519190613733565b612a526134f3565b600080612a5e84612d5d565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a999190613a1b565b6040805180830381865af4158015612ab5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ad99190613a2a565b9350905082612aee575060009150612bbd9050565b6000612b15612b1084610160015185610140015161068790919063ffffffff16565b6119f0565b612b35612b1085610120015186610100015161272090919063ffffffff16565b612b3f91906137ce565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ca29190613c4c565b935093509350935080612cbe5750600098975050505050505050565b868414612cef57612cce8461173a565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d2057612cff83612963565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d4e57612d308261173a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d65613545565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e5d911661338b565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e8f9290041661338b565b905292915050565b600080612ea78888878787613401565b9050612ec18561172b612eba898c61361b565b8690610687565b9750612ece8489856116c5565b975087811015612ee057612ee0612362565b878103670de0b6b3a76400008110612f1557612f0e612f07670de0b6b3a764000088612924565b82906128b9565b9050612f2d565b612f2a612f07670de0b6b3a76400008861287e565b90505b80881015612f3d57612f3d612362565b909603979650505050505050565b600080612f5c888888888888613430565b909250905080611bd357611bd3612362565b6000826000190484118302158202612f8557600080fd5b50910281810615159190040190565b600080600083612fa3866119f0565b612fad91906137ce565b90506000811215612fc5576000809250925050610680565b946001945092505050565b6000808213612ff25760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130759084901c6119f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361321157506000919050565b680755bf798b4a1bf1e5821261323a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061249974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119f0565b600080670de0b6b3a764000061339f6106a5565b6133a991906137ee565b90508083116133b95760006133c3565b6133c38184613733565b91506114516133fa670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ee565b839061287e565b600061340d85856128b9565b61342661341e8661172b868b612720565b859085612f6e565b612499919061361b565b60008060006134428989888888613401565b90506134528661172b898b61361b565b9750878110156134695760008092509250506134e8565b878103613477818688612f6e565b9050670de0b6b3a764000081106134a45761349d612f07670de0b6b3a764000089612924565b90506134bc565b6134b9612f07670de0b6b3a76400008961287e565b90505b6134c68186612924565b9050808a10156134de576000809350935050506134e8565b8903925060019150505b965096945050505050565b604051806101200160405280613507613545565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156135bc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156135e857600080fd5b8501606081880312156135fa57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069f5761069f613605565b60006020828403121561364057600080fd5b81356001600160a01b038116811461145157600080fd5b80151581146105ab57600080fd5b60006020828403121561367757600080fd5b813561145181613657565b6000808335601e1984360301811261369957600080fd5b83018035915067ffffffffffffffff8211156136b457600080fd5b60200191503681900382131561068057600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061372660c0830184866136c9565b9998505050505050505050565b8181038181111561069f5761069f613605565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061378060e0830184866136c9565b9a9950505050505050505050565b6001600160701b038181168382160190808211156128b2576128b2613605565b6001600160801b038181168382160190808211156128b2576128b2613605565b81810360008312801583831316838312821617156128b2576128b2613605565b808202811582820484141761069f5761069f613605565b6001600160801b038281168282160390808211156128b2576128b2613605565b808201828112600083128015821682158216171561384557613845613605565b505092915050565b60006020828403121561385f57600080fd5b815161145181613657565b634e487b7160e01b600052601260045260246000fd5b60008261388f5761388f61386a565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069f5761069f613605565b600081600f0b60016001607f1b031981036138de576138de613605565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139798285516138e7565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156139ee57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a1457613a14613605565b5060000390565b610180810161069f82846138e7565b60008060408385031215613a3d57600080fd5b825191506020830151613a4f81613657565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715613a9957613a99613a5a565b604052919050565b600067ffffffffffffffff821115613abb57613abb613a5a565b5060051b60200190565b600082601f830112613ad657600080fd5b81516020613aeb613ae683613aa1565b613a70565b82815260059290921b84018101918181019086841115613b0a57600080fd5b8286015b84811015611bd35780518352918301918301613b0e565b600080600060608486031215613b3a57600080fd5b835167ffffffffffffffff80821115613b5257600080fd5b818601915086601f830112613b6657600080fd5b81516020613b76613ae683613aa1565b82815260059290921b8401810191818101908a841115613b9557600080fd5b8286015b84811015613bcd57805186811115613bb15760008081fd5b613bbf8d86838b0101613ac5565b845250918301918301613b99565b5091890151919750909350505080821115613be757600080fd5b50613bf486828701613ac5565b925050604084015190509250925092565b600060208284031215613c1757600080fd5b5051919050565b600082613c2d57613c2d61386a565b600160ff1b821460001984141615613c4757613c47613605565b500590565b60008060008060808587031215613c6257600080fd5b84519350602085015192506040850151915060608501516135fa8161365756fea264697066735822122027eaceec35549ab20bd7a036fd24b4b2c4cfcd25c648785d2ea299a67a3d2e3c64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
