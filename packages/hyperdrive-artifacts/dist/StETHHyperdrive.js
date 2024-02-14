export const StETHHyperdrive = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_target0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target2",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target3",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target4",
                    "type": "address"
                },
                {
                    "internalType": "contract ILido",
                    "name": "_lido",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "InvalidBaseToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnexpectedSuccess",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "name": "batchTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "checkpoint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "collectGovernanceFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permitForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "redeemWithdrawalShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "setApproval",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "setApprovalBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "setGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "name": "setPauser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "sweep",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target0",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target1",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target2",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target3",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "target4",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "transferFromBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x6103206040523480156200001257600080fd5b5060405162001600380380620016008339810160408190526200003591620002e9565b6001600081905587516001600160a01b0390811660809081526060808b015161018052908a01516101a05260a0808b01516101c05260e0808c015190915260c0808c01519052610100808c0151909152610160808c0180515190925281516020908101516101209081528351604090810151610140908152945190950151909252808d0151851661020052838d015161022052908c0151600880549186166001600160a01b0319909216919091179055908b015183166101e052828a166102405282891661026052828816610280528287166102a0529185166102c05280518082018252928352603160f81b9282019290925290518291899189918991899189918991620001aa917f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6914691309101938452602084019290925260408301526001600160a01b0316606082015260800190565b60408051601f1981840301815291905280516020909101206102e052505050506001600160a01b0392831661030052505087511673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146200021257604051630722152560e11b815260040160405180910390fd5b505050505050506200043f565b60405161018081016001600160401b03811182821017156200025157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200026f57600080fd5b919050565b6000608082840312156200028757600080fd5b604051608081016001600160401b0381118282101715620002b857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008060008060008789036102a08112156200030757600080fd5b6101e0808212156200031857600080fd5b620003226200021f565b91506200032f8a62000257565b82526200033f60208b0162000257565b602083015260408a0151604083015260608a0151606083015260808a0151608083015260a08a015160a083015260c08a015160c083015260e08a015160e0830152610100808b015181840152506101206200039c818c0162000257565b90830152610140620003b08b820162000257565b90830152610160620003c58c8c830162000274565b8184015250819850620003da818b0162000257565b97505050620003ed610200890162000257565b9450620003fe610220890162000257565b93506200040f610240890162000257565b925062000420610260890162000257565b915062000431610280890162000257565b905092959891949750929550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516110826200057e600039600050506000818161043e015261081b01526000818161063501526109cd01526000818161057a015281816107ea0152610997015260008181610533015281816107220152610a270152600081816105e10152818161068c01526107870152600081816101ce015281816103900152818161065c015281816106be015281816106f001528181610756015281816107ba015281816108ac0152818161096501526109f6015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506110826000f3fe6080604052600436106101b75760003560e01c80639032c726116100ec578063d899e1121161008a578063e44808bc11610064578063e44808bc146105af578063eac3e799146105cf578063ed64bab214610603578063f3f7070714610623576101b7565b8063d899e11214610568578063dbbe80701461059c578063ded06231146103ca576101b7565b8063a6e8a859116100c6578063a6e8a85914610521578063ab033ea9146102c7578063cba2e58d14610555578063cbc1343414610304576101b7565b80639032c726146104e15780639cd241af14610501578063a22cb465146104ae576101b7565b806330adf81f116101595780634c2ac1d9116101335780634c2ac1d9146104805780634ed2d6ac146104935780637180c8ca146104ae57806377d05ff4146104ce576101b7565b806330adf81f146103f85780633644e5151461042c5780633e691db914610460576101b7565b806317fad7fc1161019557806317fad7fc1461033e5780631c0f12b61461035e57806321b57d531461037e57806329b23fc1146103ca576101b7565b806301681a62146102c757806302329a29146102e9578063074a6de914610304575b3480156101c357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610206929190610a63565b600060405180830381855af49150503d8060008114610241576040519150601f19603f3d011682016040523d82523d6000602084013e610246565b606091505b5091509150811561026a57604051638bb0a34b60e01b815260040160405180910390fd5b600061027582610a73565b90506001600160e01b03198116636e64089360e11b1461029757815160208301fd5b8151600319810160048401908152926102b891810160200190602401610ae4565b80519650602001945050505050f35b3480156102d357600080fd5b506102e76102e2366004610ba9565b610657565b005b3480156102f557600080fd5b506102e76102e2366004610be2565b34801561031057600080fd5b5061032461031f366004610c0f565b610684565b604080519283526020830191909152015b60405180910390f35b34801561034a57600080fd5b506102e7610359366004610cab565b6106b9565b34801561036a57600080fd5b506102e7610379366004610d40565b6106eb565b34801561038a57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610335565b3480156103d657600080fd5b506103ea6103e5366004610d88565b61071b565b604051908152602001610335565b34801561040457600080fd5b506103ea7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561043857600080fd5b506103ea7f000000000000000000000000000000000000000000000000000000000000000081565b34801561046c57600080fd5b506103ea61047b366004610de2565b61074f565b6103ea61048e366004610e1f565b610780565b34801561049f57600080fd5b506102e7610379366004610e83565b3480156104ba57600080fd5b506102e76104c9366004610ecd565b6107b5565b6103ea6104dc366004610c0f565b6107e3565b3480156104ed57600080fd5b506102e76104fc366004610f02565b610816565b34801561050d57600080fd5b506102e761051c366004610f80565b610960565b34801561052d57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b610324610563366004610d88565b61098f565b34801561057457600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6103246105aa366004610d88565b6109c5565b3480156105bb57600080fd5b506102e76105ca366004610fb8565b6109f1565b3480156105db57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561060f57600080fd5b506102e761061e366004611017565b610a22565b34801561062f57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6106807f0000000000000000000000000000000000000000000000000000000000000000610a47565b5050565b6000806106b07f0000000000000000000000000000000000000000000000000000000000000000610a47565b50935093915050565b6106e27f0000000000000000000000000000000000000000000000000000000000000000610a47565b50505050505050565b6107147f0000000000000000000000000000000000000000000000000000000000000000610a47565b5050505050565b60006107467f0000000000000000000000000000000000000000000000000000000000000000610a47565b50949350505050565b600061077a7f0000000000000000000000000000000000000000000000000000000000000000610a47565b50919050565b60006107ab7f0000000000000000000000000000000000000000000000000000000000000000610a47565b5095945050505050565b6107de7f0000000000000000000000000000000000000000000000000000000000000000610a47565b505050565b600061080e7f0000000000000000000000000000000000000000000000000000000000000000610a47565b509392505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109069190611030565b600060405180830381855af49150503d8060008114610941576040519150601f19603f3d011682016040523d82523d6000602084013e610946565b606091505b50915091508161095857805160208201fd5b805160208201f35b6109897f0000000000000000000000000000000000000000000000000000000000000000610a47565b50505050565b6000806109bb7f0000000000000000000000000000000000000000000000000000000000000000610a47565b5094509492505050565b6000806109bb7f0000000000000000000000000000000000000000000000000000000000000000610a47565b610a1a7f0000000000000000000000000000000000000000000000000000000000000000610a47565b505050505050565b6106807f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b03166000366040516109069291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610aa25780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610adb578181015183820152602001610ac3565b50506000910152565b600060208284031215610af657600080fd5b815167ffffffffffffffff80821115610b0e57600080fd5b818401915084601f830112610b2257600080fd5b815181811115610b3457610b34610aaa565b604051601f8201601f19908116603f01168101908382118183101715610b5c57610b5c610aaa565b81604052828152876020848701011115610b7557600080fd5b610b86836020830160208801610ac0565b979650505050505050565b6001600160a01b0381168114610ba657600080fd5b50565b600060208284031215610bbb57600080fd5b8135610bc681610b91565b9392505050565b80358015158114610bdd57600080fd5b919050565b600060208284031215610bf457600080fd5b610bc682610bcd565b60006060828403121561077a57600080fd5b600080600060608486031215610c2457600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610c4957600080fd5b610c5586828701610bfd565b9150509250925092565b60008083601f840112610c7157600080fd5b50813567ffffffffffffffff811115610c8957600080fd5b6020830191508360208260051b8501011115610ca457600080fd5b9250929050565b60008060008060008060808789031215610cc457600080fd5b8635610ccf81610b91565b95506020870135610cdf81610b91565b9450604087013567ffffffffffffffff80821115610cfc57600080fd5b610d088a838b01610c5f565b90965094506060890135915080821115610d2157600080fd5b50610d2e89828a01610c5f565b979a9699509497509295939492505050565b60008060008060808587031215610d5657600080fd5b843593506020850135610d6881610b91565b92506040850135610d7881610b91565b9396929550929360600135925050565b60008060008060808587031215610d9e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610dca57600080fd5b610dd687828801610bfd565b91505092959194509250565b600060208284031215610df457600080fd5b813567ffffffffffffffff811115610e0b57600080fd5b610e1784828501610bfd565b949350505050565b600080600080600060a08688031215610e3757600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e6a57600080fd5b610e7688828901610bfd565b9150509295509295909350565b60008060008060808587031215610e9957600080fd5b843593506020850135610eab81610b91565b9250604085013591506060850135610ec281610b91565b939692955090935050565b60008060408385031215610ee057600080fd5b8235610eeb81610b91565b9150610ef960208401610bcd565b90509250929050565b600080600080600080600060e0888a031215610f1d57600080fd5b8735610f2881610b91565b96506020880135610f3881610b91565b9550610f4660408901610bcd565b945060608801359350608088013560ff81168114610f6357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610f9557600080fd5b833592506020840135610fa781610b91565b929592945050506040919091013590565b600080600080600060a08688031215610fd057600080fd5b853594506020860135610fe281610b91565b93506040860135610ff281610b91565b925060608601359150608086013561100981610b91565b809150509295509295909350565b60006020828403121561102957600080fd5b5035919050565b60008251611042818460208701610ac0565b919091019291505056fea2646970667358221220eedb1e9574539da87cb48f6aebd01c42bd483f30316299d2f41ee4a2ede5904464736f6c63430008140033",
        "sourceMap": "3710:1178:31:-:0;;;4262:510;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;;;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;;;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;6834:20;;;;6818:36;;;;6116:18:15;;::::1;;::::0;6144;;::::1;;::::0;6172;;::::1;;::::0;6200;;::::1;;::::0;6228;;::::1;;::::0;6810:10;;;;::::1;::::0;;;;;-1:-1:-1;;;6810:10:15;;::::1;::::0;;;;6633:264;;4574:5:31;;4497:7;;4506:8;;4516;;4526;;4536;;4546;;6633:264:15::1;::::0;6661:121:::1;::::0;6800:21;;6839:13:::1;::::0;6878:4:::1;::::0;6633:264:::1;3321:25:182::0;;;3377:2;3362:18;;3355:34;;;;3420:2;3405:18;;3398:34;-1:-1:-1;;;;;3468:32:182;3463:2;3448:18;;3441:60;3308:3;3293:19;;3090:417;6633:264:15::1;;::::0;;-1:-1:-1;;6633:264:15;;::::1;::::0;;;;;;6610:297;;6633:264:::1;6610:297:::0;;::::1;::::0;6591:316:::1;::::0;-1:-1:-1;;;;;;;;;1214:14:30;;;;;-1:-1:-1;;4677:17:31;;4669:33:::2;3811:42;4669:33;4665:101;;4725:30;;-1:-1:-1::0;;;4725:30:31::2;;;;;;;;;;;4665:101;4262:510:::0;;;;;;;3710:1178;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1843::-;1408:6;1416;1424;1432;1440;1448;1456;1500:9;1491:7;1487:23;1530:3;1526:2;1522:12;1519:32;;;1547:1;1544;1537:12;1519:32;1570:6;1596:2;1592;1588:11;1585:31;;;1612:1;1609;1602:12;1585:31;1638:17;;:::i;:::-;1625:30;;1678:48;1716:9;1678:48;:::i;:::-;1671:5;1664:63;1759:57;1812:2;1801:9;1797:18;1759:57;:::i;:::-;1754:2;1747:5;1743:14;1736:81;1870:2;1859:9;1855:18;1849:25;1844:2;1837:5;1833:14;1826:49;1928:2;1917:9;1913:18;1907:25;1902:2;1895:5;1891:14;1884:49;1987:3;1976:9;1972:19;1966:26;1960:3;1953:5;1949:15;1942:51;2047:3;2036:9;2032:19;2026:26;2020:3;2013:5;2009:15;2002:51;2107:3;2096:9;2092:19;2086:26;2080:3;2073:5;2069:15;2062:51;2167:3;2156:9;2152:19;2146:26;2140:3;2133:5;2129:15;2122:51;2192:3;2248:2;2237:9;2233:18;2227:25;2222:2;2215:5;2211:14;2204:49;;2272:3;2307:57;2360:2;2349:9;2345:18;2307:57;:::i;:::-;2291:14;;;2284:81;2384:3;2419:57;2457:18;;;2419:57;:::i;:::-;2403:14;;;2396:81;2496:3;2531:62;2585:7;2565:18;;;2531:62;:::i;:::-;2526:2;2519:5;2515:14;2508:86;;2613:5;2603:15;;2637:57;2690:2;2679:9;2675:18;2637:57;:::i;:::-;2627:67;;;;2713:58;2766:3;2755:9;2751:19;2713:58;:::i;:::-;2703:68;;2790:58;2843:3;2832:9;2828:19;2790:58;:::i;:::-;2780:68;;2867:58;2920:3;2909:9;2905:19;2867:58;:::i;:::-;2857:68;;2944:58;2997:3;2986:9;2982:19;2944:58;:::i;:::-;2934:68;;3021:58;3074:3;3063:9;3059:19;3021:58;:::i;:::-;3011:68;;1242:1843;;;;;;;;;;:::o;3090:417::-;3710:1178:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106101b75760003560e01c80639032c726116100ec578063d899e1121161008a578063e44808bc11610064578063e44808bc146105af578063eac3e799146105cf578063ed64bab214610603578063f3f7070714610623576101b7565b8063d899e11214610568578063dbbe80701461059c578063ded06231146103ca576101b7565b8063a6e8a859116100c6578063a6e8a85914610521578063ab033ea9146102c7578063cba2e58d14610555578063cbc1343414610304576101b7565b80639032c726146104e15780639cd241af14610501578063a22cb465146104ae576101b7565b806330adf81f116101595780634c2ac1d9116101335780634c2ac1d9146104805780634ed2d6ac146104935780637180c8ca146104ae57806377d05ff4146104ce576101b7565b806330adf81f146103f85780633644e5151461042c5780633e691db914610460576101b7565b806317fad7fc1161019557806317fad7fc1461033e5780631c0f12b61461035e57806321b57d531461037e57806329b23fc1146103ca576101b7565b806301681a62146102c757806302329a29146102e9578063074a6de914610304575b3480156101c357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610206929190610a63565b600060405180830381855af49150503d8060008114610241576040519150601f19603f3d011682016040523d82523d6000602084013e610246565b606091505b5091509150811561026a57604051638bb0a34b60e01b815260040160405180910390fd5b600061027582610a73565b90506001600160e01b03198116636e64089360e11b1461029757815160208301fd5b8151600319810160048401908152926102b891810160200190602401610ae4565b80519650602001945050505050f35b3480156102d357600080fd5b506102e76102e2366004610ba9565b610657565b005b3480156102f557600080fd5b506102e76102e2366004610be2565b34801561031057600080fd5b5061032461031f366004610c0f565b610684565b604080519283526020830191909152015b60405180910390f35b34801561034a57600080fd5b506102e7610359366004610cab565b6106b9565b34801561036a57600080fd5b506102e7610379366004610d40565b6106eb565b34801561038a57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610335565b3480156103d657600080fd5b506103ea6103e5366004610d88565b61071b565b604051908152602001610335565b34801561040457600080fd5b506103ea7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561043857600080fd5b506103ea7f000000000000000000000000000000000000000000000000000000000000000081565b34801561046c57600080fd5b506103ea61047b366004610de2565b61074f565b6103ea61048e366004610e1f565b610780565b34801561049f57600080fd5b506102e7610379366004610e83565b3480156104ba57600080fd5b506102e76104c9366004610ecd565b6107b5565b6103ea6104dc366004610c0f565b6107e3565b3480156104ed57600080fd5b506102e76104fc366004610f02565b610816565b34801561050d57600080fd5b506102e761051c366004610f80565b610960565b34801561052d57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b610324610563366004610d88565b61098f565b34801561057457600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6103246105aa366004610d88565b6109c5565b3480156105bb57600080fd5b506102e76105ca366004610fb8565b6109f1565b3480156105db57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561060f57600080fd5b506102e761061e366004611017565b610a22565b34801561062f57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6106807f0000000000000000000000000000000000000000000000000000000000000000610a47565b5050565b6000806106b07f0000000000000000000000000000000000000000000000000000000000000000610a47565b50935093915050565b6106e27f0000000000000000000000000000000000000000000000000000000000000000610a47565b50505050505050565b6107147f0000000000000000000000000000000000000000000000000000000000000000610a47565b5050505050565b60006107467f0000000000000000000000000000000000000000000000000000000000000000610a47565b50949350505050565b600061077a7f0000000000000000000000000000000000000000000000000000000000000000610a47565b50919050565b60006107ab7f0000000000000000000000000000000000000000000000000000000000000000610a47565b5095945050505050565b6107de7f0000000000000000000000000000000000000000000000000000000000000000610a47565b505050565b600061080e7f0000000000000000000000000000000000000000000000000000000000000000610a47565b509392505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109069190611030565b600060405180830381855af49150503d8060008114610941576040519150601f19603f3d011682016040523d82523d6000602084013e610946565b606091505b50915091508161095857805160208201fd5b805160208201f35b6109897f0000000000000000000000000000000000000000000000000000000000000000610a47565b50505050565b6000806109bb7f0000000000000000000000000000000000000000000000000000000000000000610a47565b5094509492505050565b6000806109bb7f0000000000000000000000000000000000000000000000000000000000000000610a47565b610a1a7f0000000000000000000000000000000000000000000000000000000000000000610a47565b505050505050565b6106807f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b03166000366040516109069291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610aa25780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610adb578181015183820152602001610ac3565b50506000910152565b600060208284031215610af657600080fd5b815167ffffffffffffffff80821115610b0e57600080fd5b818401915084601f830112610b2257600080fd5b815181811115610b3457610b34610aaa565b604051601f8201601f19908116603f01168101908382118183101715610b5c57610b5c610aaa565b81604052828152876020848701011115610b7557600080fd5b610b86836020830160208801610ac0565b979650505050505050565b6001600160a01b0381168114610ba657600080fd5b50565b600060208284031215610bbb57600080fd5b8135610bc681610b91565b9392505050565b80358015158114610bdd57600080fd5b919050565b600060208284031215610bf457600080fd5b610bc682610bcd565b60006060828403121561077a57600080fd5b600080600060608486031215610c2457600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610c4957600080fd5b610c5586828701610bfd565b9150509250925092565b60008083601f840112610c7157600080fd5b50813567ffffffffffffffff811115610c8957600080fd5b6020830191508360208260051b8501011115610ca457600080fd5b9250929050565b60008060008060008060808789031215610cc457600080fd5b8635610ccf81610b91565b95506020870135610cdf81610b91565b9450604087013567ffffffffffffffff80821115610cfc57600080fd5b610d088a838b01610c5f565b90965094506060890135915080821115610d2157600080fd5b50610d2e89828a01610c5f565b979a9699509497509295939492505050565b60008060008060808587031215610d5657600080fd5b843593506020850135610d6881610b91565b92506040850135610d7881610b91565b9396929550929360600135925050565b60008060008060808587031215610d9e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610dca57600080fd5b610dd687828801610bfd565b91505092959194509250565b600060208284031215610df457600080fd5b813567ffffffffffffffff811115610e0b57600080fd5b610e1784828501610bfd565b949350505050565b600080600080600060a08688031215610e3757600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e6a57600080fd5b610e7688828901610bfd565b9150509295509295909350565b60008060008060808587031215610e9957600080fd5b843593506020850135610eab81610b91565b9250604085013591506060850135610ec281610b91565b939692955090935050565b60008060408385031215610ee057600080fd5b8235610eeb81610b91565b9150610ef960208401610bcd565b90509250929050565b600080600080600080600060e0888a031215610f1d57600080fd5b8735610f2881610b91565b96506020880135610f3881610b91565b9550610f4660408901610bcd565b945060608801359350608088013560ff81168114610f6357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610f9557600080fd5b833592506020840135610fa781610b91565b929592945050506040919091013590565b600080600080600060a08688031215610fd057600080fd5b853594506020860135610fe281610b91565b93506040860135610ff281610b91565b925060608601359150608086013561100981610b91565b809150509295509295909350565b60006020828403121561102957600080fd5b5035919050565b60008251611042818460208701610ac0565b919091019291505056fea2646970667358221220eedb1e9574539da87cb48f6aebd01c42bd483f30316299d2f41ee4a2ede5904464736f6c63430008140033",
        "sourceMap": "3710:1178:31:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7297:12:15;7451;7465:23;7492:7;-1:-1:-1;;;;;7492:20:15;7513:5;;7492:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7450:69;;;;7533:7;7529:76;;;7563:31;;-1:-1:-1;;;7563:31:15;;;;;;;;;;;7529:76;7614:15;7632:18;7639:10;7632:18;:::i;:::-;7614:36;-1:-1:-1;;;;;;;7664:43:15;;-1:-1:-1;;;7664:43:15;7660:160;;7784:10;7778:17;7773:2;7761:10;7757:19;7750:46;7660:160;8021:17;;-1:-1:-1;;8017:25:15;;8040:1;7995:20;;7988:55;;;7995:20;8122:31;;;;;;;;;;:::i;:::-;3710:1178:31;;;-1:-1:-1;3710:1178:31;;;-1:-1:-1;;;;;3710:1178:31;4819:67;;;;;;;;;;-1:-1:-1;4819:67:31;;;;;:::i;:::-;;:::i;:::-;;10424:65:15;;;;;;;;;;-1:-1:-1;10424:65:15;;;;;:::i;9864:181::-;;;;;;;;;;-1:-1:-1;9864:181:15;;;;;:::i;:::-;;:::i;:::-;;;;3544:25:182;;;3600:2;3585:18;;3578:34;;;;3517:18;9864:181:15;;;;;;;;11553:167;;;;;;;;;;-1:-1:-1;11553:167:15;;;;;:::i;:::-;;:::i;10793:102::-;;;;;;;;;;-1:-1:-1;10793:102:15;;;;;:::i;:::-;;:::i;4449:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5776:32:182;;;5758:51;;5746:2;5731:18;4449:32:15;5612:203:182;8956:177:15;;;;;;;;;;-1:-1:-1;8956:177:15;;;;;:::i;:::-;;:::i;:::-;;;6532:25:182;;;6520:2;6505:18;8956:177:15;6386::182;5184:174:15;;;;;;;;;;;;5234:124;5184:174;;5422:41;;;;;;;;;;;;;;;10246:136;;;;;;;;;;-1:-1:-1;10246:136:15;;;;;:::i;:::-;;:::i;9402:204::-;;;;;;:::i;:::-;;:::i;11142:107::-;;;;;;;;;;-1:-1:-1;11142:107:15;;;;;:::i;10649:78::-;;;;;;;;;;-1:-1:-1;10649:78:15;;;;;:::i;:::-;;:::i;9192:168::-;;;;;;:::i;:::-;;:::i;12885:868::-;;;;;;;;;;-1:-1:-1;12885:868:15;;;;;:::i;:::-;;:::i;11419:92::-;;;;;;;;;;-1:-1:-1;11419:92:15;;;;;:::i;:::-;;:::i;4751:32::-;;;;;;;;;;;;;;;8249:192;;;;;;:::i;:::-;;:::i;4902:32::-;;;;;;;;;;;;;;;8721:193;;;;;;:::i;:::-;;:::i;10937:163::-;;;;;;;;;;-1:-1:-1;10937:163:15;;;;;:::i;:::-;;:::i;4600:32::-;;;;;;;;;;;;;;;10112:73;;;;;;;;;;-1:-1:-1;10112:73:15;;;;;:::i;:::-;;:::i;5062:32::-;;;;;;;;;;;;;;;4819:67:31;4861:18;4871:7;4861:9;:18::i;:::-;;4819:67;:::o;9864:181:15:-;9992:7;10001;10020:18;10030:7;10020:9;:18::i;:::-;;9864:181;;;;;;:::o;11553:167::-;11695:18;11705:7;11695:9;:18::i;:::-;;11553:167;;;;;;:::o;10793:102::-;10870:18;10880:7;10870:9;:18::i;:::-;;10793:102;;;;:::o;8956:177::-;9089:7;9108:18;9118:7;9108:9;:18::i;:::-;;8956:177;;;;;;:::o;10246:136::-;10338:7;10357:18;10367:7;10357:9;:18::i;:::-;;10246:136;;;:::o;9402:204::-;9562:7;9581:18;9591:7;9581:9;:18::i;:::-;;9402:204;;;;;;;:::o;10649:78::-;10702:18;10712:7;10702:9;:18::i;:::-;;10649:78;;:::o;9192:168::-;9316:7;9335:18;9345:7;9335:9;:18::i;:::-;;9192:168;;;;;:::o;12885:868::-;13157:373;;13259:16;13157:373;;;11368:25:182;5234:124:15;11409:18:182;;;11402:34;-1:-1:-1;;;;;11510:15:182;;;11490:18;;;11483:43;11562:15;;;11542:18;;;11535:43;11622:14;;11615:22;11594:19;;;11587:51;11654:19;;;11647:35;;;11731:4;11719:17;;11698:19;;;11691:46;11753:19;;;11746:35;;;11797:19;;;11790:35;;;13086:12:15;;;;13123:7;:20;;11340:19:182;;13157:373:15;;;-1:-1:-1;;13157:373:15;;;;;;;;;;;;;;-1:-1:-1;;;;;13157:373:15;-1:-1:-1;;;13157:373:15;;;13123:417;;;13157:373;13123:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13085:455;;;;13555:7;13550:117;;13635:6;13629:13;13624:2;13616:6;13612:15;13605:38;13550:117;13729:6;13723:13;13718:2;13710:6;13706:15;13699:38;11419:92;11486:18;11496:7;11486:9;:18::i;:::-;;11419:92;;;:::o;8249:192::-;8388:7;8397;8416:18;8426:7;8416:9;:18::i;:::-;;8249:192;;;;;;;:::o;8721:193::-;8861:7;8870;8889:18;8899:7;8889:9;:18::i;10937:163::-;11075:18;11085:7;11075:9;:18::i;:::-;;10937:163;;;;;:::o;10112:73::-;10160:18;10170:7;14031:359;14085:12;14110;14124:19;14147:7;-1:-1:-1;;;;;14147:20:15;14168:8;;14147:30;;;;;;14:271:182;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:182:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:182;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:182;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:182;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:182:o;1944:139::-;-1:-1:-1;;;;;2027:31:182;;2017:42;;2007:70;;2073:1;2070;2063:12;2007:70;1944:139;:::o;2088:270::-;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;:::-;2347:5;2088:270;-1:-1:-1;;;2088:270:182:o;2363:160::-;2428:20;;2484:13;;2477:21;2467:32;;2457:60;;2513:1;2510;2503:12;2457:60;2363:160;;;:::o;2528:180::-;2584:6;2637:2;2625:9;2616:7;2612:23;2608:32;2605:52;;;2653:1;2650;2643:12;2605:52;2676:26;2692:9;2676:26;:::i;2713:155::-;2773:5;2818:2;2809:6;2804:3;2800:16;2796:25;2793:45;;;2834:1;2831;2824:12;2873:492;2977:6;2985;2993;3046:2;3034:9;3025:7;3021:23;3017:32;3014:52;;;3062:1;3059;3052:12;3014:52;3098:9;3085:23;3075:33;;3155:2;3144:9;3140:18;3127:32;3117:42;;3210:2;3199:9;3195:18;3182:32;3237:18;3229:6;3226:30;3223:50;;;3269:1;3266;3259:12;3223:50;3292:67;3351:7;3342:6;3331:9;3327:22;3292:67;:::i;:::-;3282:77;;;2873:492;;;;;:::o;3623:367::-;3686:8;3696:6;3750:3;3743:4;3735:6;3731:17;3727:27;3717:55;;3768:1;3765;3758:12;3717:55;-1:-1:-1;3791:20:182;;3834:18;3823:30;;3820:50;;;3866:1;3863;3856:12;3820:50;3903:4;3895:6;3891:17;3879:29;;3963:3;3956:4;3946:6;3943:1;3939:14;3931:6;3927:27;3923:38;3920:47;3917:67;;;3980:1;3977;3970:12;3917:67;3623:367;;;;;:::o;3995:1066::-;4135:6;4143;4151;4159;4167;4175;4228:3;4216:9;4207:7;4203:23;4199:33;4196:53;;;4245:1;4242;4235:12;4196:53;4284:9;4271:23;4303:39;4336:5;4303:39;:::i;:::-;4361:5;-1:-1:-1;4418:2:182;4403:18;;4390:32;4431:41;4390:32;4431:41;:::i;:::-;4491:7;-1:-1:-1;4549:2:182;4534:18;;4521:32;4572:18;4602:14;;;4599:34;;;4629:1;4626;4619:12;4599:34;4668:70;4730:7;4721:6;4710:9;4706:22;4668:70;:::i;:::-;4757:8;;-1:-1:-1;4642:96:182;-1:-1:-1;4845:2:182;4830:18;;4817:32;;-1:-1:-1;4861:16:182;;;4858:36;;;4890:1;4887;4880:12;4858:36;;4929:72;4993:7;4982:8;4971:9;4967:24;4929:72;:::i;:::-;3995:1066;;;;-1:-1:-1;3995:1066:182;;-1:-1:-1;3995:1066:182;;5020:8;;3995:1066;-1:-1:-1;;;3995:1066:182:o;5066:541::-;5152:6;5160;5168;5176;5229:3;5217:9;5208:7;5204:23;5200:33;5197:53;;;5246:1;5243;5236:12;5197:53;5282:9;5269:23;5259:33;;5342:2;5331:9;5327:18;5314:32;5355:39;5388:5;5355:39;:::i;:::-;5413:5;-1:-1:-1;5470:2:182;5455:18;;5442:32;5483:41;5442:32;5483:41;:::i;:::-;5066:541;;;;-1:-1:-1;5543:7:182;;5597:2;5582:18;5569:32;;-1:-1:-1;;5066:541:182:o;5820:561::-;5933:6;5941;5949;5957;6010:3;5998:9;5989:7;5985:23;5981:33;5978:53;;;6027:1;6024;6017:12;5978:53;6063:9;6050:23;6040:33;;6120:2;6109:9;6105:18;6092:32;6082:42;;6171:2;6160:9;6156:18;6143:32;6133:42;;6226:2;6215:9;6211:18;6198:32;6253:18;6245:6;6242:30;6239:50;;;6285:1;6282;6275:12;6239:50;6308:67;6367:7;6358:6;6347:9;6343:22;6308:67;:::i;:::-;6298:77;;;5820:561;;;;;;;:::o;6750:356::-;6836:6;6889:2;6877:9;6868:7;6864:23;6860:32;6857:52;;;6905:1;6902;6895:12;6857:52;6945:9;6932:23;6978:18;6970:6;6967:30;6964:50;;;7010:1;7007;7000:12;6964:50;7033:67;7092:7;7083:6;7072:9;7068:22;7033:67;:::i;:::-;7023:77;6750:356;-1:-1:-1;;;;6750:356:182:o;7111:630::-;7233:6;7241;7249;7257;7265;7318:3;7306:9;7297:7;7293:23;7289:33;7286:53;;;7335:1;7332;7325:12;7286:53;7371:9;7358:23;7348:33;;7428:2;7417:9;7413:18;7400:32;7390:42;;7479:2;7468:9;7464:18;7451:32;7441:42;;7530:2;7519:9;7515:18;7502:32;7492:42;;7585:3;7574:9;7570:19;7557:33;7613:18;7605:6;7602:30;7599:50;;;7645:1;7642;7635:12;7599:50;7668:67;7727:7;7718:6;7707:9;7703:22;7668:67;:::i;:::-;7658:77;;;7111:630;;;;;;;;:::o;7746:541::-;7832:6;7840;7848;7856;7909:3;7897:9;7888:7;7884:23;7880:33;7877:53;;;7926:1;7923;7916:12;7877:53;7962:9;7949:23;7939:33;;8022:2;8011:9;8007:18;7994:32;8035:39;8068:5;8035:39;:::i;:::-;8093:5;-1:-1:-1;8145:2:182;8130:18;;8117:32;;-1:-1:-1;8201:2:182;8186:18;;8173:32;8214:41;8173:32;8214:41;:::i;:::-;7746:541;;;;-1:-1:-1;7746:541:182;;-1:-1:-1;;7746:541:182:o;8292:323::-;8357:6;8365;8418:2;8406:9;8397:7;8393:23;8389:32;8386:52;;;8434:1;8431;8424:12;8386:52;8473:9;8460:23;8492:39;8525:5;8492:39;:::i;:::-;8550:5;-1:-1:-1;8574:35:182;8605:2;8590:18;;8574:35;:::i;:::-;8564:45;;8292:323;;;;;:::o;8620:845::-;8728:6;8736;8744;8752;8760;8768;8776;8829:3;8817:9;8808:7;8804:23;8800:33;8797:53;;;8846:1;8843;8836:12;8797:53;8885:9;8872:23;8904:39;8937:5;8904:39;:::i;:::-;8962:5;-1:-1:-1;9019:2:182;9004:18;;8991:32;9032:41;8991:32;9032:41;:::i;:::-;9092:7;-1:-1:-1;9118:35:182;9149:2;9134:18;;9118:35;:::i;:::-;9108:45;;9200:2;9189:9;9185:18;9172:32;9162:42;;9256:3;9245:9;9241:19;9228:33;9305:4;9296:7;9292:18;9283:7;9280:31;9270:59;;9325:1;9322;9315:12;9270:59;8620:845;;;;-1:-1:-1;8620:845:182;;;;9348:7;9402:3;9387:19;;9374:33;;-1:-1:-1;9454:3:182;9439:19;;;9426:33;;8620:845;-1:-1:-1;;8620:845:182:o;9470:391::-;9547:6;9555;9563;9616:2;9604:9;9595:7;9591:23;9587:32;9584:52;;;9632:1;9629;9622:12;9584:52;9668:9;9655:23;9645:33;;9728:2;9717:9;9713:18;9700:32;9741:39;9774:5;9741:39;:::i;:::-;9470:391;;9799:5;;-1:-1:-1;;;9851:2:182;9836:18;;;;9823:32;;9470:391::o;10126:691::-;10221:6;10229;10237;10245;10253;10306:3;10294:9;10285:7;10281:23;10277:33;10274:53;;;10323:1;10320;10313:12;10274:53;10359:9;10346:23;10336:33;;10419:2;10408:9;10404:18;10391:32;10432:39;10465:5;10432:39;:::i;:::-;10490:5;-1:-1:-1;10547:2:182;10532:18;;10519:32;10560:41;10519:32;10560:41;:::i;:::-;10620:7;-1:-1:-1;10674:2:182;10659:18;;10646:32;;-1:-1:-1;10730:3:182;10715:19;;10702:33;10744:41;10702:33;10744:41;:::i;:::-;10804:7;10794:17;;;10126:691;;;;;;;;:::o;10822:180::-;10881:6;10934:2;10922:9;10913:7;10909:23;10905:32;10902:52;;;10950:1;10947;10940:12;10902:52;-1:-1:-1;10973:23:182;;10822:180;-1:-1:-1;10822:180:182:o;11836:287::-;11965:3;12003:6;11997:13;12019:66;12078:6;12073:3;12066:4;12058:6;12054:17;12019:66;:::i;:::-;12101:16;;;;;11836:287;-1:-1:-1;;11836:287:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "1846": [
                {
                    "start": 462,
                    "length": 32
                },
                {
                    "start": 912,
                    "length": 32
                },
                {
                    "start": 1628,
                    "length": 32
                },
                {
                    "start": 1726,
                    "length": 32
                },
                {
                    "start": 1776,
                    "length": 32
                },
                {
                    "start": 1878,
                    "length": 32
                },
                {
                    "start": 1978,
                    "length": 32
                },
                {
                    "start": 2220,
                    "length": 32
                },
                {
                    "start": 2405,
                    "length": 32
                },
                {
                    "start": 2550,
                    "length": 32
                }
            ],
            "1849": [
                {
                    "start": 1505,
                    "length": 32
                },
                {
                    "start": 1676,
                    "length": 32
                },
                {
                    "start": 1927,
                    "length": 32
                }
            ],
            "1852": [
                {
                    "start": 1331,
                    "length": 32
                },
                {
                    "start": 1826,
                    "length": 32
                },
                {
                    "start": 2599,
                    "length": 32
                }
            ],
            "1855": [
                {
                    "start": 1402,
                    "length": 32
                },
                {
                    "start": 2026,
                    "length": 32
                },
                {
                    "start": 2455,
                    "length": 32
                }
            ],
            "1858": [
                {
                    "start": 1589,
                    "length": 32
                },
                {
                    "start": 2509,
                    "length": 32
                }
            ],
            "1867": [
                {
                    "start": 1086,
                    "length": 32
                },
                {
                    "start": 2075,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "PERMIT_TYPEHASH()": "30adf81f",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "checkpoint(uint256)": "ed64bab2",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "sweep(address)": "01681a62",
        "target0()": "21b57d53",
        "target1()": "eac3e799",
        "target2()": "a6e8a859",
        "target3()": "d899e112",
        "target4()": "f3f70707",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target4\",\"type\":\"address\"},{\"internalType\":\"contract ILido\",\"name\":\"_lido\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The number of LP tokens created.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The amount collected in units specified by _options.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_lido\":\"The Lido contract.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_target2\":\"The target2 address.\",\"_target3\":\"The target3 address.\",\"_target4\":\"The target4 address.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount to open a long with.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount of base per LP share that        was redeemed.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"StETHHyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates Hyperdrive with StETH as the yield source.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of the      withdrawal pool's proceeds. This function redeems the maximum      amount of the specified withdrawal shares given the amount of      withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"______  __                           _________      _____      ___  / / /____  ___________________________  /_________(_)__   ______      __  /_/ /__  / / /__  __ \\\\  _ \\\\_  ___/  __  /__  ___/_  /__ | / /  _ \\\\      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/      /_/ /_/  _\\\\__, / _   ___/\\\\___//_/    \\\\__,_/  /_/    /_/  _____/ \\\\___/               /____/   /_/                     XXX          ++          ++          XXX     ############   XXXXX        ++0+        +0++        XXXXX   ###########   ##////////////########       ++00++      ++00++       ########///////////##  ##////////////##########      ++000++    ++000++      ##########///////////##  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%         %&&&                ##  +o000+    +000o+  ##              &&&%                              ## ++00+-    -+00++ ##                               #% ++0+      +0++ %#                               ###-:Oo.++++.oO:-###                                ##: 00++++++00 :##                    #S###########* 0++00+++00++0 *##########S#                  #S               % $ 0+++0 $ %              S#                #S   ----------   %+++++:#:+++++%-----------    S#              #S   ------------- %++++: ### :++++%------------    S#             S    ---------------%++++*\\\\ | /*++++%-------------     S           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#         #S?      ---------------  %+++++~+++++%&&&8 o  \\\\  /  o       ?S#        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?      #?+////////////////////////////////////////////////////////////////+?#    #;;;;;//////////////////////////////////////////////////////////////;;;;;#  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\\ |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|  \\\\[__ |   \\\\  /===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\\\/ ===========OOOOOOOO||OOOOOOOO||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||////////000000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||| SSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\00000000000//////////SSS SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS SSSSSSSS                                                                SSSSSSSS SSSSSSSS                                                                SSSSSSSSA Hyperdrive instance that uses StETH as the yield source.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/steth/StETHHyperdrive.sol\":\"StETHHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634\",\"dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f\",\"dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk\"]},\"contracts/src/instances/steth/StETHBase.sol\":{\"keccak256\":\"0x0cb486eaa8d75908bd8e91db3269ec203918cdd288d5aa7938ee45d405efcad2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b0aa85afa7f423a01c7d1c28e42d0ee75ced8d568eb5e085d700042c1a8756ec\",\"dweb:/ipfs/QmTSiyx6WzWsYv9viG6Dv81xpgoynU2A6uLDVXriTVtmjH\"]},\"contracts/src/instances/steth/StETHHyperdrive.sol\":{\"keccak256\":\"0x55dbee3eff41c301b8f1565e09ff7759b619d1cf7aaf7840827de6155e4f2098\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c8e4094ce22de0b3a47b881049add0c5b60984014e27ad3bfcca756fea427e4\",\"dweb:/ipfs/QmfXKFQLvMAS3fe6EEVqoBmVg9NqihKfigTyT7Thh2qM6p\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3\",\"dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/interfaces/IStETHHyperdriveCore.sol\":{\"keccak256\":\"0x8abf9d221a8a171e715dab48fd5af1325c466e8fad5ba714b4825a8a10cab043\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fdbe3b808c700d7f7476848c43da095c75bcecdff3b8af5b99f8958f1784c9ff\",\"dweb:/ipfs/QmRKWJ5k33UpdYXCyAhXkHUXrttEn9tVrfVKy5Dnbx83CB\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "_config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "address",
                            "name": "_target0",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_target1",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_target2",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_target3",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_target4",
                            "type": "address"
                        },
                        {
                            "internalType": "contract ILido",
                            "name": "_lido",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidBaseToken"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnexpectedSuccess"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "fallback"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "PERMIT_TYPEHASH",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "addLiquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "batchTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "checkpoint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeLong",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeShort",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "collectGovernanceFee",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "initialize",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "openLong",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "openShort",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "pause"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "_approved",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permitForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "redeemWithdrawalShares",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "removeLiquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalBridge"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setGovernance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPauser"
                },
                {
                    "inputs": [
                        {
                            "internalType": "contract IERC20",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "sweep"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "target0",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "target1",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "target2",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "target3",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "target4",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFromBridge"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_contribution": "The amount to supply.",
                            "_maxApr": "The maximum APR at which the LP is willing to supply.",
                            "_minApr": "The minimum APR at which the LP is willing to supply.",
                            "_minLpSharePrice": "The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The number of LP tokens created."
                        }
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "params": {
                            "from": "The source account.",
                            "ids": "The array of token ids of the asset to transfer.",
                            "to": "The destination account.",
                            "values": "The amount of each token to transfer."
                        }
                    },
                    "checkpoint(uint256)": {
                        "params": {
                            "_checkpointTime": "The time of the checkpoint to create."
                        }
                    },
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of longs to close.",
                            "_maturityTime": "The maturity time of the short.",
                            "_minOutput": "The minimum amount of base the trader will accept.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The amount of underlying the user receives."
                        }
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of shorts to close.",
                            "_maturityTime": "The maturity time of the short.",
                            "_minOutput": "The minimum output of this trade.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The amount of base tokens produced by closing this short."
                        }
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "params": {
                            "_options": "The options that configure how the fees are settled."
                        },
                        "returns": {
                            "_0": "The amount collected in units specified by _options."
                        }
                    },
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the Hyperdrive pool.",
                            "_lido": "The Lido contract.",
                            "_target0": "The target0 address.",
                            "_target1": "The target1 address.",
                            "_target2": "The target2 address.",
                            "_target3": "The target3 address.",
                            "_target4": "The target4 address."
                        }
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount to supply.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_amount": "The amount to open a long with.",
                            "_minOutput": "The minimum number of bonds to receive.",
                            "_minVaultSharePrice": "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the bonds.",
                            "_1": "The amount of bonds the user received"
                        }
                    },
                    "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of bonds to short.",
                            "_maxDeposit": "The most the user expects to deposit for this trade.",
                            "_minVaultSharePrice": "The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the short.",
                            "_1": "The amount the user deposited for this trade."
                        }
                    },
                    "pause(bool)": {
                        "params": {
                            "_status": "True to pause all deposits and false to unpause them."
                        }
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
                        "params": {
                            "_approved": "A boolean of the approval status to set to.",
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
                        }
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
                            "_options": "The options that configure how the operation is settled.",
                            "_withdrawalShares": "The withdrawal shares to redeem."
                        },
                        "returns": {
                            "_0": "The amount the LP received.",
                            "_1": "The amount of withdrawal shares that         were redeemed."
                        }
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_lpShares": "The LP shares to burn.",
                            "_minOutputPerShare": "The minimum amount of base per LP share that        was redeemed.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital",
                            "_1": "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares."
                        }
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
                            "caller": "The eth address which called the linking contract.",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalForAll(address,bool)": {
                        "params": {
                            "approved": "True to approve, false to remove approval.",
                            "operator": "The eth address which can access the caller's assets."
                        }
                    },
                    "setGovernance(address)": {
                        "params": {
                            "_who": "The new governance address."
                        }
                    },
                    "setPauser(address,bool)": {
                        "params": {
                            "status": "The new pauser status.",
                            "who": "The address to change."
                        }
                    },
                    "sweep(address)": {
                        "details": "WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
                        "params": {
                            "_target": "The target token to sweep."
                        }
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "caller": "The msg.sender or the caller of the ERC20Forwarder.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "notice": "This contract's EIP712 domain separator."
                    },
                    "PERMIT_TYPEHASH()": {
                        "notice": "The typehash used to calculate the EIP712 hash for `permitForAll`."
                    },
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows LPs to supply liquidity for LP shares."
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "notice": "Transfers several assets from one account to another."
                    },
                    "checkpoint(uint256)": {
                        "notice": "Attempts to mint a checkpoint with the specified checkpoint time."
                    },
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a long position with a specified maturity time."
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a short position with a specified maturity time."
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "notice": "This function collects the governance fees accrued by the pool."
                    },
                    "constructor": {
                        "notice": "Instantiates Hyperdrive with StETH as the yield source."
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows the first LP to initialize the market with a target APR."
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a long position."
                    },
                    "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a short position."
                    },
                    "pause(bool)": {
                        "notice": "Allows an authorized address to pause this contract."
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature."
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of the      withdrawal pool's proceeds. This function redeems the maximum      amount of the specified withdrawal shares given the amount of      withdrawal shares ready to withdraw."
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows an LP to burn shares and withdraw from the pool."
                    },
                    "setApproval(uint256,address,uint256)": {
                        "notice": "Allows a user to set an approval for an individual asset with         specific amount."
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
                    },
                    "setApprovalForAll(address,bool)": {
                        "notice": "Allows a user to approve an operator to use all of their assets."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "sweep(address)": {
                        "notice": "Transfers the contract's balance of a target token to the fee         collector address."
                    },
                    "target0()": {
                        "notice": "The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions."
                    },
                    "target1()": {
                        "notice": "The target1 address. This is a logic contract that contains         stateful functions."
                    },
                    "target2()": {
                        "notice": "The target2 address. This is a logic contract that contains         stateful functions."
                    },
                    "target3()": {
                        "notice": "The target3 address. This is a logic contract that contains         stateful functions."
                    },
                    "target4()": {
                        "notice": "The target4 address. This is a logic contract that contains all         some stateful functions."
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "notice": "Transfers an amount of assets from the source to the destination."
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/instances/steth/StETHHyperdrive.sol": "StETHHyperdrive"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965",
                "urls": [
                    "bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634",
                    "dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3",
                "urls": [
                    "bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f",
                    "dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHBase.sol": {
                "keccak256": "0x0cb486eaa8d75908bd8e91db3269ec203918cdd288d5aa7938ee45d405efcad2",
                "urls": [
                    "bzz-raw://b0aa85afa7f423a01c7d1c28e42d0ee75ced8d568eb5e085d700042c1a8756ec",
                    "dweb:/ipfs/QmTSiyx6WzWsYv9viG6Dv81xpgoynU2A6uLDVXriTVtmjH"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/steth/StETHHyperdrive.sol": {
                "keccak256": "0x55dbee3eff41c301b8f1565e09ff7759b619d1cf7aaf7840827de6155e4f2098",
                "urls": [
                    "bzz-raw://3c8e4094ce22de0b3a47b881049add0c5b60984014e27ad3bfcca756fea427e4",
                    "dweb:/ipfs/QmfXKFQLvMAS3fe6EEVqoBmVg9NqihKfigTyT7Thh2qM6p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9",
                "urls": [
                    "bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3",
                    "dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IStETHHyperdriveCore.sol": {
                "keccak256": "0x8abf9d221a8a171e715dab48fd5af1325c466e8fad5ba714b4825a8a10cab043",
                "urls": [
                    "bzz-raw://fdbe3b808c700d7f7476848c43da095c75bcecdff3b8af5b99f8958f1784c9ff",
                    "dweb:/ipfs/QmRKWJ5k33UpdYXCyAhXkHUXrttEn9tVrfVKy5Dnbx83CB"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5",
                "urls": [
                    "bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc",
                    "dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717",
                "urls": [
                    "bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc",
                    "dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582",
                "urls": [
                    "bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e",
                    "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf",
                "urls": [
                    "bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc",
                    "dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370",
                "urls": [
                    "bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626",
                    "dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058",
                "urls": [
                    "bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11",
                    "dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982",
                "urls": [
                    "bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f",
                    "dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
                "urls": [
                    "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
                    "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
                "urls": [
                    "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
                    "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
                "urls": [
                    "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
                    "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
                "urls": [
                    "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
                    "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
                "urls": [
                    "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
                    "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
                "urls": [
                    "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
                    "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/instances/steth/StETHHyperdrive.sol",
        "id": 6403,
        "exportedSymbols": {
            "Hyperdrive": [
                2383
            ],
            "IERC20": [
                6793
            ],
            "IHyperdrive": [
                7480
            ],
            "ILido": [
                8338
            ],
            "IStETHHyperdriveCore": [
                8601
            ],
            "StETHBase": [
                6319
            ],
            "StETHHyperdrive": [
                6402
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:4850:31",
        "nodes": [
            {
                "id": 6321,
                "nodeType": "PragmaDirective",
                "src": "39:23:31",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 6323,
                "nodeType": "ImportDirective",
                "src": "64:59:31",
                "nodes": [],
                "absolutePath": "contracts/src/external/Hyperdrive.sol",
                "file": "../../external/Hyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 2384,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6322,
                            "name": "Hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2383,
                            "src": "73:10:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6325,
                "nodeType": "ImportDirective",
                "src": "124:63:31",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6324,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "133:11:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6327,
                "nodeType": "ImportDirective",
                "src": "188:53:31",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 6794,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6326,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6793,
                            "src": "197:6:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6329,
                "nodeType": "ImportDirective",
                "src": "242:51:31",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/ILido.sol",
                "file": "../../interfaces/ILido.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 8339,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6328,
                            "name": "ILido",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8338,
                            "src": "251:5:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6331,
                "nodeType": "ImportDirective",
                "src": "294:81:31",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IStETHHyperdriveCore.sol",
                "file": "../../interfaces/IStETHHyperdriveCore.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 8602,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6330,
                            "name": "IStETHHyperdriveCore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8601,
                            "src": "303:20:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6333,
                "nodeType": "ImportDirective",
                "src": "376:44:31",
                "nodes": [],
                "absolutePath": "contracts/src/instances/steth/StETHBase.sol",
                "file": "./StETHBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6403,
                "sourceUnit": 6320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6332,
                            "name": "StETHBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6319,
                            "src": "385:9:31",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6402,
                "nodeType": "ContractDefinition",
                "src": "3710:1178:31",
                "nodes": [
                    {
                        "id": 6343,
                        "nodeType": "VariableDeclaration",
                        "src": "3788:65:31",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ETH",
                        "nameLocation": "3805:3:31",
                        "scope": 6402,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 6341,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3788:7:31",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": {
                            "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
                            "id": 6342,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3811:42:31",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            },
                            "value": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 6389,
                        "nodeType": "FunctionDefinition",
                        "src": "4262:510:31",
                        "nodes": [],
                        "body": {
                            "id": 6388,
                            "nodeType": "Block",
                            "src": "4585:187:31",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 6380,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 6376,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 6347,
                                                        "src": "4677:7:31",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    },
                                                    "id": 6377,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4685:9:31",
                                                    "memberName": "baseToken",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7245,
                                                    "src": "4677:17:31",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 6375,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4669:7:31",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 6374,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4669:7:31",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 6378,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4669:26:31",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 6379,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6343,
                                            "src": "4699:3:31",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4669:33:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 6387,
                                    "nodeType": "IfStatement",
                                    "src": "4665:101:31",
                                    "trueBody": {
                                        "id": 6386,
                                        "nodeType": "Block",
                                        "src": "4704:62:31",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 6381,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7480,
                                                            "src": "4725:11:31",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7480_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 6383,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4737:16:31",
                                                        "memberName": "InvalidBaseToken",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7369,
                                                        "src": "4725:28:31",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 6384,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4725:30:31",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 6385,
                                                "nodeType": "RevertStatement",
                                                "src": "4718:37:31"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 6344,
                            "nodeType": "StructuredDocumentation",
                            "src": "3860:397:31",
                            "text": "@notice Instantiates Hyperdrive with StETH as the yield source.\n @param _config The configuration of the Hyperdrive pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param _target2 The target2 address.\n @param _target3 The target3 address.\n @param _target4 The target4 address.\n @param _lido The Lido contract."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 6363,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6347,
                                        "src": "4497:7:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    {
                                        "id": 6364,
                                        "name": "_target0",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6349,
                                        "src": "4506:8:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 6365,
                                        "name": "_target1",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6351,
                                        "src": "4516:8:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 6366,
                                        "name": "_target2",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6353,
                                        "src": "4526:8:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 6367,
                                        "name": "_target3",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6355,
                                        "src": "4536:8:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 6368,
                                        "name": "_target4",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6357,
                                        "src": "4546:8:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 6369,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6362,
                                    "name": "Hyperdrive",
                                    "nameLocations": [
                                        "4486:10:31"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 2383,
                                    "src": "4486:10:31"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4486:69:31"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 6371,
                                        "name": "_lido",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6360,
                                        "src": "4574:5:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                            "typeString": "contract ILido"
                                        }
                                    }
                                ],
                                "id": 6372,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 6370,
                                    "name": "StETHBase",
                                    "nameLocations": [
                                        "4564:9:31"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 6319,
                                    "src": "4564:9:31"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4564:16:31"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 6361,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6347,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "4313:7:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4283:37:31",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 6346,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6345,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "4283:11:31",
                                                "4295:10:31"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "4283:22:31"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "4283:22:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6349,
                                    "mutability": "mutable",
                                    "name": "_target0",
                                    "nameLocation": "4338:8:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4330:16:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6348,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4330:7:31",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6351,
                                    "mutability": "mutable",
                                    "name": "_target1",
                                    "nameLocation": "4364:8:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4356:16:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6350,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4356:7:31",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6353,
                                    "mutability": "mutable",
                                    "name": "_target2",
                                    "nameLocation": "4390:8:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4382:16:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6352,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4382:7:31",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6355,
                                    "mutability": "mutable",
                                    "name": "_target3",
                                    "nameLocation": "4416:8:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4408:16:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6354,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4408:7:31",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6357,
                                    "mutability": "mutable",
                                    "name": "_target4",
                                    "nameLocation": "4442:8:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4434:16:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6356,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4434:7:31",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6360,
                                    "mutability": "mutable",
                                    "name": "_lido",
                                    "nameLocation": "4466:5:31",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6389,
                                    "src": "4460:11:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILido_$8338",
                                        "typeString": "contract ILido"
                                    },
                                    "typeName": {
                                        "id": 6359,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6358,
                                            "name": "ILido",
                                            "nameLocations": [
                                                "4460:5:31"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8338,
                                            "src": "4460:5:31"
                                        },
                                        "referencedDeclaration": 8338,
                                        "src": "4460:5:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILido_$8338",
                                            "typeString": "contract ILido"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4273:204:31"
                        },
                        "returnParameters": {
                            "id": 6373,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4585:0:31"
                        },
                        "scope": 6402,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 6401,
                        "nodeType": "FunctionDefinition",
                        "src": "4819:67:31",
                        "nodes": [],
                        "body": {
                            "id": 6400,
                            "nodeType": "Block",
                            "src": "4851:35:31",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 6397,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1846,
                                                "src": "4871:7:31",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 6396,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2382,
                                            "src": "4861:9:31",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 6398,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4861:18:31",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 6399,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4861:18:31"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8600
                        ],
                        "documentation": {
                            "id": 6390,
                            "nodeType": "StructuredDocumentation",
                            "src": "4778:36:31",
                            "text": "@inheritdoc IStETHHyperdriveCore"
                        },
                        "functionSelector": "01681a62",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "4828:5:31",
                        "parameters": {
                            "id": 6394,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6393,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6401,
                                    "src": "4834:6:31",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6793",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 6392,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6391,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "4834:6:31"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 6793,
                                            "src": "4834:6:31"
                                        },
                                        "referencedDeclaration": 6793,
                                        "src": "4834:6:31",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6793",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4833:8:31"
                        },
                        "returnParameters": {
                            "id": 6395,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4851:0:31"
                        },
                        "scope": 6402,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 6335,
                            "name": "IStETHHyperdriveCore",
                            "nameLocations": [
                                "3738:20:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8601,
                            "src": "3738:20:31"
                        },
                        "id": 6336,
                        "nodeType": "InheritanceSpecifier",
                        "src": "3738:20:31"
                    },
                    {
                        "baseName": {
                            "id": 6337,
                            "name": "Hyperdrive",
                            "nameLocations": [
                                "3760:10:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 2383,
                            "src": "3760:10:31"
                        },
                        "id": 6338,
                        "nodeType": "InheritanceSpecifier",
                        "src": "3760:10:31"
                    },
                    {
                        "baseName": {
                            "id": 6339,
                            "name": "StETHBase",
                            "nameLocations": [
                                "3772:9:31"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6319,
                            "src": "3772:9:31"
                        },
                        "id": 6340,
                        "nodeType": "InheritanceSpecifier",
                        "src": "3772:9:31"
                    }
                ],
                "canonicalName": "StETHHyperdrive",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 6334,
                    "nodeType": "StructuredDocumentation",
                    "src": "422:3288:31",
                    "text": "______  __                           _________      _____\n      ___  / / /____  ___________________________  /_________(_)__   ______\n      __  /_/ /__  / / /__  __ \\  _ \\_  ___/  __  /__  ___/_  /__ | / /  _ \\\n      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/\n      /_/ /_/  _\\__, / _   ___/\\___//_/    \\__,_/  /_/    /_/  _____/ \\___/\n               /____/   /_/\n                     XXX          ++          ++          XXX\n     ############   XXXXX        ++0+        +0++        XXXXX   ###########\n   ##////////////########       ++00++      ++00++       ########///////////##\n  ##////////////##########      ++000++    ++000++      ##########///////////##\n  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##\n    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%\n         %&&&                ##  +o000+    +000o+  ##              &&&%\n                              ## ++00+-    -+00++ ##\n                               #% ++0+      +0++ %#\n                               ###-:Oo.++++.oO:-###\n                                ##: 00++++++00 :##\n                    #S###########* 0++00+++00++0 *##########S#\n                  #S               % $ 0+++0 $ %              S#\n                #S   ----------   %+++++:#:+++++%-----------    S#\n              #S   ------------- %++++: ### :++++%------------    S#\n             S    ---------------%++++*\\ | /*++++%-------------     S\n           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#\n         #S?      ---------------  %+++++~+++++%&&&8 o  \\  /  o       ?S#\n        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?\n      #?+////////////////////////////////////////////////////////////////+?#\n    #;;;;;//////////////////////////////////////////////////////////////;;;;;#\n  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S\n /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\n |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|  \\[__ |   \\  /===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\/ ===========OOOOOOOO||OOOOOOOO|||\n ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n |||////////000000000000\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\|||\n SSS\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\00000000000//////////SSS\n SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS\n SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n @author DELV\n @title StETHHyperdrive\n @notice A Hyperdrive instance that uses StETH as the yield source.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    6402,
                    6319,
                    2383,
                    10186,
                    13270,
                    11906,
                    11031,
                    12387,
                    8790,
                    9728,
                    13478,
                    67358,
                    7924,
                    8482,
                    8601,
                    7648,
                    8448
                ],
                "name": "StETHHyperdrive",
                "nameLocation": "3719:15:31",
                "scope": 6403,
                "usedErrors": [
                    7369,
                    7437,
                    67303
                ],
                "usedEvents": [
                    7773,
                    7788,
                    7805,
                    7818,
                    7835,
                    7854,
                    7871,
                    7888,
                    7901,
                    7908,
                    7913,
                    7918,
                    7923,
                    8463,
                    8472,
                    8481
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 31
};
