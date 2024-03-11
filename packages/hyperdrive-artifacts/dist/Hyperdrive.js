export const Hyperdrive = {
    "abi": [
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
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
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
            "inputs": [],
            "name": "domainSeparator",
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
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "PERMIT_TYPEHASH()": "30adf81f",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "checkpoint(uint256)": "ed64bab2",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "domainSeparator()": "f698da25",
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
        "target0()": "21b57d53",
        "target1()": "eac3e799",
        "target2()": "a6e8a859",
        "target3()": "d899e112",
        "target4()": "f3f70707",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The number of LP tokens created.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the pool.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_target2\":\"The target2 address.\",\"_target3\":\"The target3 address.\",\"_target4\":\"The target4 address.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates a Hyperdrive pool.\"},\"domainSeparator()\":{\"notice\":\"Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains         stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"______  __                           _________      _____      ___  / / /____  ___________________________  /_________(_)__   ______      __  /_/ /__  / / /__  __ \\\\  _ \\\\_  ___/  __  /__  ___/_  /__ | / /  _ \\\\      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/      /_/ /_/  _\\\\__, / _   ___/\\\\___//_/    \\\\__,_/  /_/    /_/  _____/ \\\\___/               /____/   /_/                     XXX          ++          ++          XXX     ############   XXXXX        ++0+        +0++        XXXXX   ###########   ##////////////########       ++00++      ++00++       ########///////////##  ##////////////##########      ++000++    ++000++      ##########///////////##  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%         %&&&                ##  +o000+    +000o+  ##              &&&%                              ## ++00+-    -+00++ ##                               #% ++0+      +0++ %#                               ###-:Oo.++++.oO:-###                                ##: 00++++++00 :##                    #S###########* 0++00+++00++0 *##########S#                  #S               % $ 0+++0 $ %              S#                #S   ----------   %+++++:#:+++++%-----------    S#              #S   ------------- %++++: ### :++++%------------    S#             S    ---------------%++++*\\\\ | /*++++%-------------     S           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#         #S?      ---------------  %+++++~+++++%&&&8 o  \\\\  /  o       ?S#        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?      #?+////////////////////////////////////////////////////////////////+?#    #;;;;;//////////////////////////////////////////////////////////////;;;;;#  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\\ |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|  \\\\[__ |   \\\\  /===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\\\/ ===========OOOOOOOO||OOOOOOOO||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||////////000000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||| SSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\00000000000//////////SSS SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS SSSSSSSS                                                                SSSSSSSS SSSSSSSS                                                                SSSSSSSSA fixed-rate AMM that mints bonds on demand for longs and shorts.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/Hyperdrive.sol\":\"Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x1f3a60886fc6733bfb62ab8424aa8c37654278b7cc445d490f8af55a5001ab9b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ce4a76f0078526f191f4f341ecf353c6322be0aaf68493d4a473e55ed1ed13\",\"dweb:/ipfs/QmfKhUhGH7P6CiUF58T8Yw17CfoHoUu5KNp2DPvbsyiRZJ\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b\",\"dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9\",\"dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba\",\"dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca\",\"dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
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
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "domainSeparator",
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
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_maxApr": "The maximum APR at which the LP is willing to supply.",
                            "_minApr": "The minimum APR at which the LP is willing to supply.",
                            "_minLpSharePrice": "The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.",
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
                            "_maturityTime": "The maturity time of the long.",
                            "_minOutput": "The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of shorts to close.",
                            "_maturityTime": "The maturity time of the short.",
                            "_minOutput": "The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "params": {
                            "_options": "The options that configure how the fees are settled."
                        },
                        "returns": {
                            "_0": "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the pool.",
                            "_target0": "The target0 address.",
                            "_target1": "The target1 address.",
                            "_target2": "The target2 address.",
                            "_target3": "The target3 address.",
                            "_target4": "The target4 address."
                        }
                    },
                    "domainSeparator()": {
                        "returns": {
                            "_0": "The EIP712 domain separator."
                        }
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_amount": "The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_minOutput": "The minimum number of bonds to receive.",
                            "_minVaultSharePrice": "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the bonds.",
                            "_1": "The amount of bonds the user received."
                        }
                    },
                    "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of bonds to short.",
                            "_maxDeposit": "The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.",
                            "_minVaultSharePrice": "The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the short.",
                            "_1": "The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
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
                            "_minOutputPerShare": "The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled.",
                            "_withdrawalShares": "The withdrawal shares to redeem."
                        },
                        "returns": {
                            "_0": "The amount the LP received. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.",
                            "_1": "The amount of withdrawal shares that were redeemed."
                        }
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_lpShares": "The LP shares to burn.",
                            "_minOutputPerShare": "The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The amount the LP removing liquidity receives. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_1": "The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares."
                        }
                    },
                    "setApproval(uint256,address,uint256)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
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
                        "notice": "Instantiates a Hyperdrive pool."
                    },
                    "domainSeparator()": {
                        "notice": "Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712."
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
                        "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
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
                        "notice": "The target4 address. This is a logic contract that contains         stateful functions."
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
                "contracts/src/external/Hyperdrive.sol": "Hyperdrive"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0x1f3a60886fc6733bfb62ab8424aa8c37654278b7cc445d490f8af55a5001ab9b",
                "urls": [
                    "bzz-raw://d1ce4a76f0078526f191f4f341ecf353c6322be0aaf68493d4a473e55ed1ed13",
                    "dweb:/ipfs/QmfKhUhGH7P6CiUF58T8Yw17CfoHoUu5KNp2DPvbsyiRZJ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0xea27bb5ed4b35c9f1a4d42102108f07289520ab27e8e33fcac6809f8123955d8",
                "urls": [
                    "bzz-raw://488203c6bcf5d3cbb092800a9457e77cde06a80f406794cea42ed86b839a824b",
                    "dweb:/ipfs/QmRGZNWhrAhubpWvkQtCryUMWG4XKscSEYJ9uxePHzozDy"
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
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
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
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
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x8807f9479246301d783b015d6b7f2d7f7e03ab3685302848c57436ebb36a1ce5",
                "urls": [
                    "bzz-raw://28a4f5d567a5c086ac2ae7e346c207422844865aa5e416909c522556245f8fc9",
                    "dweb:/ipfs/QmUXZ2aeMFh86LCxyB4xQTuU4fR5xTcN9VwVtKzZNkv1dX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc",
                "urls": [
                    "bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa",
                    "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12",
                "urls": [
                    "bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba",
                    "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x20aad0da5f27cbdded488149694f0c126bfada17ebea0a690f5386a19b826ed0",
                "urls": [
                    "bzz-raw://de8345bda127a4c5c101fb2668ede0011dbd82ff1ca3dcabd37905d56485efba",
                    "dweb:/ipfs/QmYc3Jkm8c5FB1oEZwgWTNGEa8q96WWEJNyjumD8nirBdk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xa6a716eac09df69f29b4fd76314104895b18c350679132de2db805e673d3650c",
                "urls": [
                    "bzz-raw://5d1e6f1092fa727453030eca383b77182755c972b83b74e6d3cf5937cc50caca",
                    "dweb:/ipfs/QmNk5UeZ9ZzNLuivQQjkihaVrQ6y1pnFUn1PdWvpfDJnSU"
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
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
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
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
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
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "id": 2495,
        "exportedSymbols": {
            "Hyperdrive": [
                2494
            ],
            "HyperdriveAdmin": [
                8936
            ],
            "HyperdriveBase": [
                9917
            ],
            "HyperdriveCheckpoint": [
                10381
            ],
            "HyperdriveLP": [
                11279
            ],
            "HyperdriveLong": [
                12198
            ],
            "HyperdriveShort": [
                13634
            ],
            "HyperdriveStorage": [
                13842
            ],
            "HyperdriveTarget0": [
                3257
            ],
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveCore": [
                7784
            ],
            "IMultiTokenCore": [
                8589
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:14244:15",
        "nodes": [
            {
                "id": 1916,
                "nodeType": "PragmaDirective",
                "src": "39:23:15",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 1918,
                "nodeType": "ImportDirective",
                "src": "64:70:15",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "../external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 3258,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1917,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3257,
                            "src": "73:17:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1920,
                "nodeType": "ImportDirective",
                "src": "135:60:15",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1919,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "144:11:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1922,
                "nodeType": "ImportDirective",
                "src": "196:68:15",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveCore.sol",
                "file": "../interfaces/IHyperdriveCore.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 7785,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1921,
                            "name": "IHyperdriveCore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7784,
                            "src": "205:15:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1924,
                "nodeType": "ImportDirective",
                "src": "265:68:15",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
                "file": "../interfaces/IMultiTokenCore.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 8590,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1923,
                            "name": "IMultiTokenCore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8589,
                            "src": "274:15:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1926,
                "nodeType": "ImportDirective",
                "src": "334:66:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
                "file": "../internal/HyperdriveAdmin.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 8937,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1925,
                            "name": "HyperdriveAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8936,
                            "src": "343:15:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1928,
                "nodeType": "ImportDirective",
                "src": "401:64:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "../internal/HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 9918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1927,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9917,
                            "src": "410:14:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1930,
                "nodeType": "ImportDirective",
                "src": "466:76:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
                "file": "../internal/HyperdriveCheckpoint.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 10382,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1929,
                            "name": "HyperdriveCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10381,
                            "src": "475:20:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1932,
                "nodeType": "ImportDirective",
                "src": "543:64:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
                "file": "../internal/HyperdriveLong.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 12199,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1931,
                            "name": "HyperdriveLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12198,
                            "src": "552:14:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1934,
                "nodeType": "ImportDirective",
                "src": "608:60:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "../internal/HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 11280,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1933,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11279,
                            "src": "617:12:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1936,
                "nodeType": "ImportDirective",
                "src": "669:66:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
                "file": "../internal/HyperdriveShort.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 13635,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1935,
                            "name": "HyperdriveShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13634,
                            "src": "678:15:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1938,
                "nodeType": "ImportDirective",
                "src": "736:70:15",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "../internal/HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 2495,
                "sourceUnit": 13843,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 1937,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13842,
                            "src": "745:17:15",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 2494,
                "nodeType": "ContractDefinition",
                "src": "4098:10184:15",
                "nodes": [
                    {
                        "id": 1954,
                        "nodeType": "VariableDeclaration",
                        "src": "4449:32:15",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 1952,
                            "nodeType": "StructuredDocumentation",
                            "src": "4262:182:15",
                            "text": "@notice The target0 address. This is a logic contract that contains all\n         of the getters for the Hyperdrive pool as well as some stateful\n         functions."
                        },
                        "functionSelector": "21b57d53",
                        "mutability": "immutable",
                        "name": "target0",
                        "nameLocation": "4474:7:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 1953,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4449:7:15",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 1957,
                        "nodeType": "VariableDeclaration",
                        "src": "4600:32:15",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 1955,
                            "nodeType": "StructuredDocumentation",
                            "src": "4488:107:15",
                            "text": "@notice The target1 address. This is a logic contract that contains\n         stateful functions."
                        },
                        "functionSelector": "eac3e799",
                        "mutability": "immutable",
                        "name": "target1",
                        "nameLocation": "4625:7:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 1956,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4600:7:15",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 1960,
                        "nodeType": "VariableDeclaration",
                        "src": "4751:32:15",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 1958,
                            "nodeType": "StructuredDocumentation",
                            "src": "4639:107:15",
                            "text": "@notice The target2 address. This is a logic contract that contains\n         stateful functions."
                        },
                        "functionSelector": "a6e8a859",
                        "mutability": "immutable",
                        "name": "target2",
                        "nameLocation": "4776:7:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 1959,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4751:7:15",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 1963,
                        "nodeType": "VariableDeclaration",
                        "src": "4902:32:15",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 1961,
                            "nodeType": "StructuredDocumentation",
                            "src": "4790:107:15",
                            "text": "@notice The target3 address. This is a logic contract that contains\n         stateful functions."
                        },
                        "functionSelector": "d899e112",
                        "mutability": "immutable",
                        "name": "target3",
                        "nameLocation": "4927:7:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 1962,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4902:7:15",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 1966,
                        "nodeType": "VariableDeclaration",
                        "src": "5053:32:15",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 1964,
                            "nodeType": "StructuredDocumentation",
                            "src": "4941:107:15",
                            "text": "@notice The target4 address. This is a logic contract that contains\n         stateful functions."
                        },
                        "functionSelector": "f3f70707",
                        "mutability": "immutable",
                        "name": "target4",
                        "nameLocation": "5078:7:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 1965,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5053:7:15",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 1972,
                        "nodeType": "VariableDeclaration",
                        "src": "5175:174:15",
                        "nodes": [],
                        "constant": true,
                        "documentation": {
                            "id": 1967,
                            "nodeType": "StructuredDocumentation",
                            "src": "5092:78:15",
                            "text": "@notice The typehash used to calculate the EIP712 hash for `permitForAll`."
                        },
                        "functionSelector": "30adf81f",
                        "mutability": "constant",
                        "name": "PERMIT_TYPEHASH",
                        "nameLocation": "5199:15:15",
                        "scope": 2494,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 1968,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5175:7:15",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "hexValue": "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                                    "id": 1970,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "5248:91:15",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                                        "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                                    },
                                    "value": "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                                        "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                                    }
                                ],
                                "id": 1969,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "5225:9:15",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 1971,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5225:124:15",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 2013,
                        "nodeType": "FunctionDefinition",
                        "src": "5683:413:15",
                        "nodes": [],
                        "body": {
                            "id": 2012,
                            "nodeType": "Block",
                            "src": "5905:191:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 1994,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 1992,
                                            "name": "target0",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1954,
                                            "src": "5959:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 1993,
                                            "name": "_target0",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1978,
                                            "src": "5969:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5959:18:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1995,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5959:18:15"
                                },
                                {
                                    "expression": {
                                        "id": 1998,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 1996,
                                            "name": "target1",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1957,
                                            "src": "5987:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 1997,
                                            "name": "_target1",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1980,
                                            "src": "5997:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5987:18:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1999,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5987:18:15"
                                },
                                {
                                    "expression": {
                                        "id": 2002,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 2000,
                                            "name": "target2",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1960,
                                            "src": "6015:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 2001,
                                            "name": "_target2",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1982,
                                            "src": "6025:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6015:18:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2003,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6015:18:15"
                                },
                                {
                                    "expression": {
                                        "id": 2006,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 2004,
                                            "name": "target3",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1963,
                                            "src": "6043:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 2005,
                                            "name": "_target3",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1984,
                                            "src": "6053:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6043:18:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2007,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6043:18:15"
                                },
                                {
                                    "expression": {
                                        "id": 2010,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 2008,
                                            "name": "target4",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1966,
                                            "src": "6071:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 2009,
                                            "name": "_target4",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1986,
                                            "src": "6081:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6071:18:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2011,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6071:18:15"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 1973,
                            "nodeType": "StructuredDocumentation",
                            "src": "5356:322:15",
                            "text": "@notice Instantiates a Hyperdrive pool.\n @param _config The configuration of the pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param _target2 The target2 address.\n @param _target3 The target3 address.\n @param _target4 The target4 address."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 1989,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1976,
                                        "src": "5896:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 1990,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 1988,
                                    "name": "HyperdriveStorage",
                                    "nameLocations": [
                                        "5878:17:15"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13842,
                                    "src": "5878:17:15"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5878:26:15"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 1987,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1976,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "5734:7:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5704:37:15",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 1975,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 1974,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "5704:11:15",
                                                "5716:10:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "5704:22:15"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "5704:22:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1978,
                                    "mutability": "mutable",
                                    "name": "_target0",
                                    "nameLocation": "5759:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5751:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1977,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5751:7:15",
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
                                    "id": 1980,
                                    "mutability": "mutable",
                                    "name": "_target1",
                                    "nameLocation": "5785:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5777:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1979,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5777:7:15",
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
                                    "id": 1982,
                                    "mutability": "mutable",
                                    "name": "_target2",
                                    "nameLocation": "5811:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5803:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1981,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5803:7:15",
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
                                    "id": 1984,
                                    "mutability": "mutable",
                                    "name": "_target3",
                                    "nameLocation": "5837:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5829:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1983,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5829:7:15",
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
                                    "id": 1986,
                                    "mutability": "mutable",
                                    "name": "_target4",
                                    "nameLocation": "5863:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2013,
                                    "src": "5855:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1985,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5855:7:15",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5694:183:15"
                        },
                        "returnParameters": {
                            "id": 1991,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5905:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 2067,
                        "nodeType": "FunctionDefinition",
                        "src": "6430:940:15",
                        "nodes": [],
                        "body": {
                            "id": 2066,
                            "nodeType": "Block",
                            "src": "6493:877:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        2022,
                                        2024
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2022,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "6638:7:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2066,
                                            "src": "6633:12:15",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 2021,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6633:4:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 2024,
                                            "mutability": "mutable",
                                            "name": "returndata",
                                            "nameLocation": "6660:10:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2066,
                                            "src": "6647:23:15",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 2023,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6647:5:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2029,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 2027,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2016,
                                                "src": "6695:5:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            ],
                                            "expression": {
                                                "id": 2025,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "6674:7:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 2026,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6682:12:15",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "6674:20:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 2028,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6674:27:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6632:69:15"
                                },
                                {
                                    "condition": {
                                        "id": 2030,
                                        "name": "success",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2022,
                                        "src": "6715:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2037,
                                    "nodeType": "IfStatement",
                                    "src": "6711:76:15",
                                    "trueBody": {
                                        "id": 2036,
                                        "nodeType": "Block",
                                        "src": "6724:63:15",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 2031,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "6745:11:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 2033,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6757:17:15",
                                                        "memberName": "UnexpectedSuccess",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7570,
                                                        "src": "6745:29:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 2034,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6745:31:15",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 2035,
                                                "nodeType": "RevertStatement",
                                                "src": "6738:38:15"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        2039
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2039,
                                            "mutability": "mutable",
                                            "name": "selector",
                                            "nameLocation": "6803:8:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2066,
                                            "src": "6796:15:15",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            },
                                            "typeName": {
                                                "id": 2038,
                                                "name": "bytes4",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6796:6:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2044,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 2042,
                                                "name": "returndata",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2024,
                                                "src": "6821:10:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 2041,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "6814:6:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_bytes4_$",
                                                "typeString": "type(bytes4)"
                                            },
                                            "typeName": {
                                                "id": 2040,
                                                "name": "bytes4",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6814:6:15",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 2043,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6814:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6796:36:15"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        },
                                        "id": 2049,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 2045,
                                            "name": "selector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2039,
                                            "src": "6846:8:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "expression": {
                                                "expression": {
                                                    "id": 2046,
                                                    "name": "IHyperdrive",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 7616,
                                                    "src": "6858:11:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                        "typeString": "type(contract IHyperdrive)"
                                                    }
                                                },
                                                "id": 2047,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6870:10:15",
                                                "memberName": "ReturnData",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7555,
                                                "src": "6858:22:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                                                    "typeString": "function (bytes memory) pure"
                                                }
                                            },
                                            "id": 2048,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6881:8:15",
                                            "memberName": "selector",
                                            "nodeType": "MemberAccess",
                                            "src": "6858:31:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            }
                                        },
                                        "src": "6846:43:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2052,
                                    "nodeType": "IfStatement",
                                    "src": "6842:160:15",
                                    "trueBody": {
                                        "id": 2051,
                                        "nodeType": "Block",
                                        "src": "6891:111:15",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "6914:78:15",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6943:10:15"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "6955:2:15",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6939:3:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6939:19:15"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "returndata",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6966:10:15"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mload",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6960:5:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6960:17:15"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6932:6:15"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "6932:46:15"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "6932:46:15"
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 2024,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6943:10:15",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 2024,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "6966:10:15",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 2050,
                                                "nodeType": "InlineAssembly",
                                                "src": "6905:87:15"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "7156:126:15",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "returndata",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7181:10:15"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "7193:3:15",
                                                                    "type": "",
                                                                    "value": "0x4"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7177:3:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7177:20:15"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "returndata",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "7209:10:15"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mload",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "7203:5:15"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "7203:17:15"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "7222:1:15",
                                                                    "type": "",
                                                                    "value": "4"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7199:3:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7199:25:15"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7170:6:15"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7170:55:15"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "7170:55:15"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "7238:34:15",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "returndata",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "7256:10:15"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "7268:3:15",
                                                            "type": "",
                                                            "value": "0x4"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7252:3:15"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7252:20:15"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "returndata",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7238:10:15"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 2024,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7181:10:15",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 2024,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7209:10:15",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 2024,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7238:10:15",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 2024,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7256:10:15",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 2053,
                                    "nodeType": "InlineAssembly",
                                    "src": "7147:135:15"
                                },
                                {
                                    "expression": {
                                        "id": 2062,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 2054,
                                            "name": "returndata",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2024,
                                            "src": "7291:10:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 2057,
                                                    "name": "returndata",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2024,
                                                    "src": "7315:10:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                {
                                                    "components": [
                                                        {
                                                            "id": 2059,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "7328:5:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 2058,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "7328:5:15",
                                                                "typeDescriptions": {}
                                                            }
                                                        }
                                                    ],
                                                    "id": 2060,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "7327:7:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 2055,
                                                    "name": "abi",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -1,
                                                    "src": "7304:3:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_abi",
                                                        "typeString": "abi"
                                                    }
                                                },
                                                "id": 2056,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "7308:6:15",
                                                "memberName": "decode",
                                                "nodeType": "MemberAccess",
                                                "src": "7304:10:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                    "typeString": "function () pure"
                                                }
                                            },
                                            "id": 2061,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7304:31:15",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes memory"
                                            }
                                        },
                                        "src": "7291:44:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2063,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7291:44:15"
                                },
                                {
                                    "expression": {
                                        "id": 2064,
                                        "name": "returndata",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2024,
                                        "src": "7353:10:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 2020,
                                    "id": 2065,
                                    "nodeType": "Return",
                                    "src": "7346:17:15"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2014,
                            "nodeType": "StructuredDocumentation",
                            "src": "6102:323:15",
                            "text": "@notice If we get to the fallback function, we make a read-only\n         delegatecall to the target0 contract. This target contains all\n         of the getters for the Hyperdrive pool.\n @param _data The data to be passed to the data provider.\n @return The return data from the data provider."
                        },
                        "implemented": true,
                        "kind": "fallback",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 2017,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2016,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "6454:5:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2067,
                                    "src": "6439:20:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2015,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6439:5:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6438:22:15"
                        },
                        "returnParameters": {
                            "id": 2020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2019,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2067,
                                    "src": "6479:12:15",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2018,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6479:5:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6478:14:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2089,
                        "nodeType": "FunctionDefinition",
                        "src": "7431:192:15",
                        "nodes": [],
                        "body": {
                            "id": 2088,
                            "nodeType": "Block",
                            "src": "7588:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2085,
                                                "name": "target3",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1963,
                                                "src": "7608:7:15",
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
                                            "id": 2084,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "7598:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2086,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7598:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2087,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7598:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7641
                        ],
                        "documentation": {
                            "id": 2068,
                            "nodeType": "StructuredDocumentation",
                            "src": "7395:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "cba2e58d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openLong",
                        "nameLocation": "7440:8:15",
                        "parameters": {
                            "id": 2078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2070,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7458:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2069,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7458:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2072,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7475:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2071,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7475:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2074,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7492:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2073,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7492:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2077,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7509:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2076,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2075,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "7509:11:15",
                                                "7521:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "7509:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "7509:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7448:95:15"
                        },
                        "returnParameters": {
                            "id": 2083,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2080,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7570:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2079,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7570:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2082,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2089,
                                    "src": "7579:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2081,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7579:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7569:18:15"
                        },
                        "scope": 2494,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2109,
                        "nodeType": "FunctionDefinition",
                        "src": "7665:176:15",
                        "nodes": [],
                        "body": {
                            "id": 2108,
                            "nodeType": "Block",
                            "src": "7806:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2105,
                                                "name": "target2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "7826:7:15",
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
                                            "id": 2104,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "7816:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2106,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7816:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2107,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7816:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7656
                        ],
                        "documentation": {
                            "id": 2090,
                            "nodeType": "StructuredDocumentation",
                            "src": "7629:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "ded06231",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeLong",
                        "nameLocation": "7674:9:15",
                        "parameters": {
                            "id": 2100,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2092,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2109,
                                    "src": "7693:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2091,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7693:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2094,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2109,
                                    "src": "7710:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2093,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7710:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2096,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2109,
                                    "src": "7727:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2095,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7727:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2099,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2109,
                                    "src": "7744:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2098,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2097,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "7744:11:15",
                                                "7756:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "7744:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "7744:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7683:95:15"
                        },
                        "returnParameters": {
                            "id": 2103,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2102,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2109,
                                    "src": "7797:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2101,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7797:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7796:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2131,
                        "nodeType": "FunctionDefinition",
                        "src": "7903:193:15",
                        "nodes": [],
                        "body": {
                            "id": 2130,
                            "nodeType": "Block",
                            "src": "8061:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2127,
                                                "name": "target4",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1966,
                                                "src": "8081:7:15",
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
                                            "id": 2126,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "8071:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8071:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8071:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7673
                        ],
                        "documentation": {
                            "id": 2110,
                            "nodeType": "StructuredDocumentation",
                            "src": "7867:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "dbbe8070",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openShort",
                        "nameLocation": "7912:9:15",
                        "parameters": {
                            "id": 2120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2112,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "7931:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2111,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7931:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2114,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "7948:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2113,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7948:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2116,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "7965:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2115,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7965:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2119,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "7982:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2118,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2117,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "7982:11:15",
                                                "7994:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "7982:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "7982:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7921:95:15"
                        },
                        "returnParameters": {
                            "id": 2125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2122,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "8043:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2121,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8043:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2124,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2131,
                                    "src": "8052:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2123,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8052:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8042:18:15"
                        },
                        "scope": 2494,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2151,
                        "nodeType": "FunctionDefinition",
                        "src": "8138:177:15",
                        "nodes": [],
                        "body": {
                            "id": 2150,
                            "nodeType": "Block",
                            "src": "8280:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2147,
                                                "name": "target2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "8300:7:15",
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
                                            "id": 2146,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "8290:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2148,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8290:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2149,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8290:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7688
                        ],
                        "documentation": {
                            "id": 2132,
                            "nodeType": "StructuredDocumentation",
                            "src": "8102:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "29b23fc1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeShort",
                        "nameLocation": "8147:10:15",
                        "parameters": {
                            "id": 2142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2134,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2151,
                                    "src": "8167:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2133,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8167:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2136,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2151,
                                    "src": "8184:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2135,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8184:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2138,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2151,
                                    "src": "8201:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2137,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8201:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2141,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2151,
                                    "src": "8218:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2140,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2139,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8218:11:15",
                                                "8230:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8218:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8218:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8157:95:15"
                        },
                        "returnParameters": {
                            "id": 2145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2144,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2151,
                                    "src": "8271:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8271:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8270:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2169,
                        "nodeType": "FunctionDefinition",
                        "src": "8374:168:15",
                        "nodes": [],
                        "body": {
                            "id": 2168,
                            "nodeType": "Block",
                            "src": "8507:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2165,
                                                "name": "target3",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1963,
                                                "src": "8527:7:15",
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
                                            "id": 2164,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "8517:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2166,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8517:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2167,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8517:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7701
                        ],
                        "documentation": {
                            "id": 2152,
                            "nodeType": "StructuredDocumentation",
                            "src": "8338:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "77d05ff4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "8383:10:15",
                        "parameters": {
                            "id": 2160,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2154,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2169,
                                    "src": "8403:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2153,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8403:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2156,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2169,
                                    "src": "8420:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8420:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2159,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2169,
                                    "src": "8437:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2158,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2157,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8437:11:15",
                                                "8449:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8437:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8437:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8393:78:15"
                        },
                        "returnParameters": {
                            "id": 2163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2162,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2169,
                                    "src": "8498:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2161,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8498:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8497:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2191,
                        "nodeType": "FunctionDefinition",
                        "src": "8584:204:15",
                        "nodes": [],
                        "body": {
                            "id": 2190,
                            "nodeType": "Block",
                            "src": "8753:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2187,
                                                "name": "target1",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1957,
                                                "src": "8773:7:15",
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
                                            "id": 2186,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "8763:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2188,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8763:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2189,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8763:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7718
                        ],
                        "documentation": {
                            "id": 2170,
                            "nodeType": "StructuredDocumentation",
                            "src": "8548:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "4c2ac1d9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addLiquidity",
                        "nameLocation": "8593:12:15",
                        "parameters": {
                            "id": 2182,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2172,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8615:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2171,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8615:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2174,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8632:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2173,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8632:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2176,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8649:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2175,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8649:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2178,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8666:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2177,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8666:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2181,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8683:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2180,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2179,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8683:11:15",
                                                "8695:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8683:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8683:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8605:112:15"
                        },
                        "returnParameters": {
                            "id": 2185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2184,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2191,
                                    "src": "8744:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8744:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8743:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2211,
                        "nodeType": "FunctionDefinition",
                        "src": "8830:174:15",
                        "nodes": [],
                        "body": {
                            "id": 2210,
                            "nodeType": "Block",
                            "src": "8969:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2207,
                                                "name": "target1",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1957,
                                                "src": "8989:7:15",
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
                                            "id": 2206,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "8979:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2208,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8979:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2209,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8979:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7733
                        ],
                        "documentation": {
                            "id": 2192,
                            "nodeType": "StructuredDocumentation",
                            "src": "8794:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "cbc13434",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "removeLiquidity",
                        "nameLocation": "8839:15:15",
                        "parameters": {
                            "id": 2200,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2194,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2211,
                                    "src": "8864:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2193,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8864:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2196,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2211,
                                    "src": "8881:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2195,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8881:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2199,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2211,
                                    "src": "8898:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2198,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2197,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8898:11:15",
                                                "8910:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8898:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8898:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8854:78:15"
                        },
                        "returnParameters": {
                            "id": 2205,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2202,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2211,
                                    "src": "8951:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2201,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8951:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2204,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2211,
                                    "src": "8960:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2203,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8960:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8950:18:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2231,
                        "nodeType": "FunctionDefinition",
                        "src": "9046:181:15",
                        "nodes": [],
                        "body": {
                            "id": 2230,
                            "nodeType": "Block",
                            "src": "9192:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2227,
                                                "name": "target1",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1957,
                                                "src": "9212:7:15",
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
                                            "id": 2226,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9202:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2228,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9202:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2229,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9202:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7748
                        ],
                        "documentation": {
                            "id": 2212,
                            "nodeType": "StructuredDocumentation",
                            "src": "9010:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "074a6de9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeemWithdrawalShares",
                        "nameLocation": "9055:22:15",
                        "parameters": {
                            "id": 2220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2214,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2231,
                                    "src": "9087:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2213,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9087:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2216,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2231,
                                    "src": "9104:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2215,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9104:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2219,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2231,
                                    "src": "9121:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2218,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2217,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "9121:11:15",
                                                "9133:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "9121:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "9121:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9077:78:15"
                        },
                        "returnParameters": {
                            "id": 2225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2222,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2231,
                                    "src": "9174:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2221,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9174:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2224,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2231,
                                    "src": "9183:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2223,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9183:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9173:18:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2242,
                        "nodeType": "FunctionDefinition",
                        "src": "9294:73:15",
                        "nodes": [],
                        "body": {
                            "id": 2241,
                            "nodeType": "Block",
                            "src": "9332:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2238,
                                                "name": "target2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "9352:7:15",
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
                                            "id": 2237,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9342:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2239,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9342:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2240,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9342:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7754
                        ],
                        "documentation": {
                            "id": 2232,
                            "nodeType": "StructuredDocumentation",
                            "src": "9258:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "ed64bab2",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "checkpoint",
                        "nameLocation": "9303:10:15",
                        "parameters": {
                            "id": 2235,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2234,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2242,
                                    "src": "9314:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2233,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9314:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9313:9:15"
                        },
                        "returnParameters": {
                            "id": 2236,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9332:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2256,
                        "nodeType": "FunctionDefinition",
                        "src": "9428:136:15",
                        "nodes": [],
                        "body": {
                            "id": 2255,
                            "nodeType": "Block",
                            "src": "9529:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2252,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "9549:7:15",
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
                                            "id": 2251,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9539:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2253,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9539:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2254,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9539:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7763
                        ],
                        "documentation": {
                            "id": 2243,
                            "nodeType": "StructuredDocumentation",
                            "src": "9392:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "3e691db9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "collectGovernanceFee",
                        "nameLocation": "9437:20:15",
                        "parameters": {
                            "id": 2247,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2246,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2256,
                                    "src": "9467:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 2245,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 2244,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "9467:11:15",
                                                "9479:7:15"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "9467:19:15"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "9467:19:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9457:44:15"
                        },
                        "returnParameters": {
                            "id": 2250,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2249,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2256,
                                    "src": "9520:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2248,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9520:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9519:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2267,
                        "nodeType": "FunctionDefinition",
                        "src": "9606:65:15",
                        "nodes": [],
                        "body": {
                            "id": 2266,
                            "nodeType": "Block",
                            "src": "9636:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2263,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "9656:7:15",
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
                                            "id": 2262,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9646:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2264,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9646:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2265,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9646:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7769
                        ],
                        "documentation": {
                            "id": 2257,
                            "nodeType": "StructuredDocumentation",
                            "src": "9570:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "02329a29",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pause",
                        "nameLocation": "9615:5:15",
                        "parameters": {
                            "id": 2260,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2259,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2267,
                                    "src": "9621:4:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2258,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9621:4:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9620:6:15"
                        },
                        "returnParameters": {
                            "id": 2261,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9636:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2278,
                        "nodeType": "FunctionDefinition",
                        "src": "9713:76:15",
                        "nodes": [],
                        "body": {
                            "id": 2277,
                            "nodeType": "Block",
                            "src": "9754:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2274,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "9774:7:15",
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
                                            "id": 2273,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9764:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9764:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9764:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7775
                        ],
                        "documentation": {
                            "id": 2268,
                            "nodeType": "StructuredDocumentation",
                            "src": "9677:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "ab033ea9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGovernance",
                        "nameLocation": "9722:13:15",
                        "parameters": {
                            "id": 2271,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2270,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2278,
                                    "src": "9736:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2269,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9736:7:15",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9735:9:15"
                        },
                        "returnParameters": {
                            "id": 2272,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9754:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2291,
                        "nodeType": "FunctionDefinition",
                        "src": "9831:78:15",
                        "nodes": [],
                        "body": {
                            "id": 2290,
                            "nodeType": "Block",
                            "src": "9874:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2287,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "9894:7:15",
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
                                            "id": 2286,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "9884:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2288,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9884:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2289,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9884:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7783
                        ],
                        "documentation": {
                            "id": 2279,
                            "nodeType": "StructuredDocumentation",
                            "src": "9795:31:15",
                            "text": "@inheritdoc IHyperdriveCore"
                        },
                        "functionSelector": "7180c8ca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setPauser",
                        "nameLocation": "9840:9:15",
                        "parameters": {
                            "id": 2284,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2281,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2291,
                                    "src": "9850:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2280,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9850:7:15",
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
                                    "id": 2283,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2291,
                                    "src": "9859:4:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2282,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9859:4:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9849:15:15"
                        },
                        "returnParameters": {
                            "id": 2285,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9874:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2308,
                        "nodeType": "FunctionDefinition",
                        "src": "9975:102:15",
                        "nodes": [],
                        "body": {
                            "id": 2307,
                            "nodeType": "Block",
                            "src": "10042:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2304,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10062:7:15",
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
                                            "id": 2303,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10052:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2305,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10052:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2306,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10052:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8512
                        ],
                        "documentation": {
                            "id": 2292,
                            "nodeType": "StructuredDocumentation",
                            "src": "9939:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "1c0f12b6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "9984:12:15",
                        "parameters": {
                            "id": 2301,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2294,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2308,
                                    "src": "9997:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2293,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9997:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2296,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2308,
                                    "src": "10006:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2295,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10006:7:15",
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
                                    "id": 2298,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2308,
                                    "src": "10015:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2297,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10015:7:15",
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
                                    "id": 2300,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2308,
                                    "src": "10024:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2299,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10024:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9996:36:15"
                        },
                        "returnParameters": {
                            "id": 2302,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10042:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2327,
                        "nodeType": "FunctionDefinition",
                        "src": "10119:163:15",
                        "nodes": [],
                        "body": {
                            "id": 2326,
                            "nodeType": "Block",
                            "src": "10247:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2323,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10267:7:15",
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
                                            "id": 2322,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10257:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2324,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10257:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2325,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10257:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8526
                        ],
                        "documentation": {
                            "id": 2309,
                            "nodeType": "StructuredDocumentation",
                            "src": "10083:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "e44808bc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFromBridge",
                        "nameLocation": "10128:18:15",
                        "parameters": {
                            "id": 2320,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2311,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2327,
                                    "src": "10156:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2310,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10156:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2313,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2327,
                                    "src": "10173:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2312,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10173:7:15",
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
                                    "id": 2315,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2327,
                                    "src": "10190:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2314,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10190:7:15",
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
                                    "id": 2317,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2327,
                                    "src": "10207:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2316,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10207:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2319,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2327,
                                    "src": "10224:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2318,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10224:7:15",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10146:91:15"
                        },
                        "returnParameters": {
                            "id": 2321,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10247:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2344,
                        "nodeType": "FunctionDefinition",
                        "src": "10324:107:15",
                        "nodes": [],
                        "body": {
                            "id": 2343,
                            "nodeType": "Block",
                            "src": "10396:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2340,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10416:7:15",
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
                                            "id": 2339,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10406:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2341,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10406:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2342,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10406:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8548
                        ],
                        "documentation": {
                            "id": 2328,
                            "nodeType": "StructuredDocumentation",
                            "src": "10288:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "4ed2d6ac",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalBridge",
                        "nameLocation": "10333:17:15",
                        "parameters": {
                            "id": 2337,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2330,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "10351:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2329,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10351:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2332,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "10360:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2331,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10360:7:15",
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
                                    "id": 2334,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "10369:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2333,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10369:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2336,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "10378:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2335,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10378:7:15",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10350:36:15"
                        },
                        "returnParameters": {
                            "id": 2338,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10396:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2357,
                        "nodeType": "FunctionDefinition",
                        "src": "10473:86:15",
                        "nodes": [],
                        "body": {
                            "id": 2356,
                            "nodeType": "Block",
                            "src": "10524:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2353,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10544:7:15",
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
                                            "id": 2352,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10534:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2354,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10534:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2355,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10534:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8556
                        ],
                        "documentation": {
                            "id": 2345,
                            "nodeType": "StructuredDocumentation",
                            "src": "10437:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "a22cb465",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApprovalForAll",
                        "nameLocation": "10482:17:15",
                        "parameters": {
                            "id": 2350,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2347,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2357,
                                    "src": "10500:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2346,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10500:7:15",
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
                                    "id": 2349,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2357,
                                    "src": "10509:4:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2348,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10509:4:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10499:15:15"
                        },
                        "returnParameters": {
                            "id": 2351,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10524:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2372,
                        "nodeType": "FunctionDefinition",
                        "src": "10601:92:15",
                        "nodes": [],
                        "body": {
                            "id": 2371,
                            "nodeType": "Block",
                            "src": "10658:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2368,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10678:7:15",
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
                                            "id": 2367,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10668:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10668:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2370,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10668:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8536
                        ],
                        "documentation": {
                            "id": 2358,
                            "nodeType": "StructuredDocumentation",
                            "src": "10565:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "9cd241af",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setApproval",
                        "nameLocation": "10610:11:15",
                        "parameters": {
                            "id": 2365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2360,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2372,
                                    "src": "10622:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2359,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10622:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2362,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2372,
                                    "src": "10631:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2361,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10631:7:15",
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
                                    "id": 2364,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2372,
                                    "src": "10640:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2363,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10640:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10621:27:15"
                        },
                        "returnParameters": {
                            "id": 2366,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10658:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2391,
                        "nodeType": "FunctionDefinition",
                        "src": "10735:167:15",
                        "nodes": [],
                        "body": {
                            "id": 2390,
                            "nodeType": "Block",
                            "src": "10867:35:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 2387,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "10887:7:15",
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
                                            "id": 2386,
                                            "name": "_delegate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2493,
                                            "src": "10877:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (address) returns (bytes memory)"
                                            }
                                        },
                                        "id": 2388,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10877:18:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "id": 2389,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10877:18:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8570
                        ],
                        "documentation": {
                            "id": 2373,
                            "nodeType": "StructuredDocumentation",
                            "src": "10699:31:15",
                            "text": "@inheritdoc IMultiTokenCore"
                        },
                        "functionSelector": "17fad7fc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchTransferFrom",
                        "nameLocation": "10744:17:15",
                        "parameters": {
                            "id": 2384,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2375,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2391,
                                    "src": "10771:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2374,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10771:7:15",
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
                                    "id": 2377,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2391,
                                    "src": "10788:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2376,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10788:7:15",
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
                                    "id": 2380,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2391,
                                    "src": "10805:18:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2378,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "10805:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2379,
                                        "nodeType": "ArrayTypeName",
                                        "src": "10805:9:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2383,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2391,
                                    "src": "10833:18:15",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2381,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "10833:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2382,
                                        "nodeType": "ArrayTypeName",
                                        "src": "10833:9:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10761:96:15"
                        },
                        "returnParameters": {
                            "id": 2385,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10867:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2440,
                        "nodeType": "FunctionDefinition",
                        "src": "12067:869:15",
                        "nodes": [],
                        "body": {
                            "id": 2439,
                            "nodeType": "Block",
                            "src": "12257:679:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        2410,
                                        2412
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2410,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "12273:7:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2439,
                                            "src": "12268:12:15",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 2409,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12268:4:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 2412,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "12295:6:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2439,
                                            "src": "12282:19:15",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 2411,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12282:5:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2432,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 2417,
                                                            "name": "HyperdriveTarget0",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3257,
                                                            "src": "12371:17:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveTarget0_$3257_$",
                                                                "typeString": "type(contract HyperdriveTarget0)"
                                                            }
                                                        },
                                                        "id": 2418,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12389:12:15",
                                                        "memberName": "permitForAll",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 2771,
                                                        "src": "12371:30:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                            "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    },
                                                    {
                                                        "components": [
                                                            {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "id": 2419,
                                                                    "name": "domainSeparator",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2468,
                                                                    "src": "12441:15:15",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                                        "typeString": "function () view returns (bytes32)"
                                                                    }
                                                                },
                                                                "id": 2420,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12441:17:15",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 2421,
                                                                "name": "PERMIT_TYPEHASH",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1972,
                                                                "src": "12480:15:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 2422,
                                                                "name": "owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2394,
                                                                "src": "12517:5:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 2423,
                                                                "name": "spender",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2396,
                                                                "src": "12544:7:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 2424,
                                                                "name": "_approved",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2398,
                                                                "src": "12573:9:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            {
                                                                "id": 2425,
                                                                "name": "deadline",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2400,
                                                                "src": "12604:8:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 2426,
                                                                "name": "v",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2402,
                                                                "src": "12634:1:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint8",
                                                                    "typeString": "uint8"
                                                                }
                                                            },
                                                            {
                                                                "id": 2427,
                                                                "name": "r",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2404,
                                                                "src": "12657:1:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 2428,
                                                                "name": "s",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2406,
                                                                "src": "12680:1:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "id": 2429,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "12419:280:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                                                            "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2415,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "12339:3:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2416,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12343:10:15",
                                                    "memberName": "encodeCall",
                                                    "nodeType": "MemberAccess",
                                                    "src": "12339:14:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2430,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "12339:374:15",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 2413,
                                                "name": "target0",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1954,
                                                "src": "12305:7:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 2414,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12313:12:15",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "12305:20:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 2431,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12305:418:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12267:456:15"
                                },
                                {
                                    "condition": {
                                        "id": 2434,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "12737:8:15",
                                        "subExpression": {
                                            "id": 2433,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2410,
                                            "src": "12738:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2437,
                                    "nodeType": "IfStatement",
                                    "src": "12733:117:15",
                                    "trueBody": {
                                        "id": 2436,
                                        "nodeType": "Block",
                                        "src": "12747:103:15",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "12770:70:15",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "12799:6:15"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "12807:2:15",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "12795:3:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "12795:15:15"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "12818:6:15"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mload",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "12812:5:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "12812:13:15"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "12788:6:15"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "12788:38:15"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "12788:38:15"
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 2412,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "12799:6:15",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 2412,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "12818:6:15",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 2435,
                                                "nodeType": "InlineAssembly",
                                                "src": "12761:79:15"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "12868:62:15",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "12893:6:15"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "12901:2:15",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "12889:3:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "12889:15:15"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "12912:6:15"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mload",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "12906:5:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "12906:13:15"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "return",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "12882:6:15"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "12882:38:15"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "12882:38:15"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 2412,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "12893:6:15",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 2412,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "12912:6:15",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 2438,
                                    "nodeType": "InlineAssembly",
                                    "src": "12859:71:15"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8588
                        ],
                        "documentation": {
                            "id": 2392,
                            "nodeType": "StructuredDocumentation",
                            "src": "10908:1154:15",
                            "text": "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
                        },
                        "functionSelector": "9032c726",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permitForAll",
                        "nameLocation": "12076:12:15",
                        "parameters": {
                            "id": 2407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2394,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "12106:5:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12098:13:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2393,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12098:7:15",
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
                                    "id": 2396,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "12129:7:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12121:15:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2395,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12121:7:15",
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
                                    "id": 2398,
                                    "mutability": "mutable",
                                    "name": "_approved",
                                    "nameLocation": "12151:9:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12146:14:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2397,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12146:4:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2400,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "12178:8:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12170:16:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2399,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12170:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2402,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "12202:1:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12196:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 2401,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12196:5:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2404,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "12221:1:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12213:9:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2403,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12213:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2406,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "12240:1:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2440,
                                    "src": "12232:9:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2405,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12232:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12088:159:15"
                        },
                        "returnParameters": {
                            "id": 2408,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12257:0:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 2468,
                        "nodeType": "FunctionDefinition",
                        "src": "13217:426:15",
                        "nodes": [],
                        "body": {
                            "id": 2467,
                            "nodeType": "Block",
                            "src": "13274:369:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                                                "id": 2450,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "13397:72:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                                                    "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                                                },
                                                                "value": "EIP712Domain(string version,uint256 chainId,address verifyingContract)"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                                                    "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                                                }
                                                            ],
                                                            "id": 2449,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "13362:9:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 2451,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13362:129:15",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "31",
                                                                        "id": 2455,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "13529:3:15",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                            "typeString": "literal_string \"1\""
                                                                        },
                                                                        "value": "1"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                            "typeString": "literal_string \"1\""
                                                                        }
                                                                    ],
                                                                    "id": 2454,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "13523:5:15",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 2453,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "13523:5:15",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 2456,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "13523:10:15",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 2452,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "13513:9:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 2457,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13513:21:15",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 2458,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -4,
                                                            "src": "13556:5:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 2459,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13562:7:15",
                                                        "memberName": "chainid",
                                                        "nodeType": "MemberAccess",
                                                        "src": "13556:13:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 2462,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "13599:4:15",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Hyperdrive_$2494",
                                                                    "typeString": "contract Hyperdrive"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_Hyperdrive_$2494",
                                                                    "typeString": "contract Hyperdrive"
                                                                }
                                                            ],
                                                            "id": 2461,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "13591:7:15",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 2460,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "13591:7:15",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 2463,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13591:13:15",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 2447,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "13330:3:15",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2448,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13334:6:15",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "13330:10:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2464,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13330:292:15",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 2446,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -8,
                                            "src": "13303:9:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 2465,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13303:333:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 2445,
                                    "id": 2466,
                                    "nodeType": "Return",
                                    "src": "13284:352:15"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2441,
                            "nodeType": "StructuredDocumentation",
                            "src": "12958:254:15",
                            "text": "@notice Computes the EIP712 domain separator which prevents user signed\n         messages for this contract to be replayed in other contracts:\n         https://eips.ethereum.org/EIPS/eip-712.\n @return The EIP712 domain separator."
                        },
                        "functionSelector": "f698da25",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "domainSeparator",
                        "nameLocation": "13226:15:15",
                        "parameters": {
                            "id": 2442,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13241:2:15"
                        },
                        "returnParameters": {
                            "id": 2445,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2444,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2468,
                                    "src": "13265:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2443,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13265:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13264:9:15"
                        },
                        "scope": 2494,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 2493,
                        "nodeType": "FunctionDefinition",
                        "src": "13921:359:15",
                        "nodes": [],
                        "body": {
                            "id": 2492,
                            "nodeType": "Block",
                            "src": "13989:291:15",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        2477,
                                        2479
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2477,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "14005:7:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2492,
                                            "src": "14000:12:15",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 2476,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14000:4:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 2479,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "14027:6:15",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2492,
                                            "src": "14014:19:15",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 2478,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14014:5:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2485,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 2482,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "14058:3:15",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 2483,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14062:4:15",
                                                "memberName": "data",
                                                "nodeType": "MemberAccess",
                                                "src": "14058:8:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            ],
                                            "expression": {
                                                "id": 2480,
                                                "name": "_target",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2471,
                                                "src": "14037:7:15",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 2481,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "14045:12:15",
                                            "memberName": "delegatecall",
                                            "nodeType": "MemberAccess",
                                            "src": "14037:20:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 2484,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14037:30:15",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13999:68:15"
                                },
                                {
                                    "condition": {
                                        "id": 2487,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "14081:8:15",
                                        "subExpression": {
                                            "id": 2486,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2477,
                                            "src": "14082:7:15",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2490,
                                    "nodeType": "IfStatement",
                                    "src": "14077:117:15",
                                    "trueBody": {
                                        "id": 2489,
                                        "nodeType": "Block",
                                        "src": "14091:103:15",
                                        "statements": [
                                            {
                                                "AST": {
                                                    "nodeType": "YulBlock",
                                                    "src": "14114:70:15",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "14143:6:15"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "14151:2:15",
                                                                                "type": "",
                                                                                "value": "32"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "14139:3:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "14139:15:15"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "result",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "14162:6:15"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mload",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "14156:5:15"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "14156:13:15"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "14132:6:15"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "14132:38:15"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "14132:38:15"
                                                        }
                                                    ]
                                                },
                                                "evmVersion": "paris",
                                                "externalReferences": [
                                                    {
                                                        "declaration": 2479,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "14143:6:15",
                                                        "valueSize": 1
                                                    },
                                                    {
                                                        "declaration": 2479,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "14162:6:15",
                                                        "valueSize": 1
                                                    }
                                                ],
                                                "id": 2488,
                                                "nodeType": "InlineAssembly",
                                                "src": "14105:79:15"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "14212:62:15",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "14237:6:15"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "14245:2:15",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "14233:3:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "14233:15:15"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "result",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "14256:6:15"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mload",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "14250:5:15"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "14250:13:15"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "return",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "14226:6:15"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "14226:38:15"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "14226:38:15"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 2479,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "14237:6:15",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 2479,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "14256:6:15",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 2491,
                                    "nodeType": "InlineAssembly",
                                    "src": "14203:71:15"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 2469,
                            "nodeType": "StructuredDocumentation",
                            "src": "13670:246:15",
                            "text": "@dev Makes a delegatecall to the extras contract with the provided\n      calldata. This will revert if the call is unsuccessful.\n @param _target The target of the delegatecall.\n @return The returndata of the delegatecall."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_delegate",
                        "nameLocation": "13930:9:15",
                        "parameters": {
                            "id": 2472,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2471,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "13948:7:15",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2493,
                                    "src": "13940:15:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2470,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13940:7:15",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13939:17:15"
                        },
                        "returnParameters": {
                            "id": 2475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2474,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2493,
                                    "src": "13975:12:15",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2473,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13975:5:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13974:14:15"
                        },
                        "scope": 2494,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 1940,
                            "name": "IHyperdriveCore",
                            "nameLocations": [
                                "4134:15:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7784,
                            "src": "4134:15:15"
                        },
                        "id": 1941,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4134:15:15"
                    },
                    {
                        "baseName": {
                            "id": 1942,
                            "name": "HyperdriveAdmin",
                            "nameLocations": [
                                "4155:15:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8936,
                            "src": "4155:15:15"
                        },
                        "id": 1943,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4155:15:15"
                    },
                    {
                        "baseName": {
                            "id": 1944,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "4176:12:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11279,
                            "src": "4176:12:15"
                        },
                        "id": 1945,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4176:12:15"
                    },
                    {
                        "baseName": {
                            "id": 1946,
                            "name": "HyperdriveLong",
                            "nameLocations": [
                                "4194:14:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12198,
                            "src": "4194:14:15"
                        },
                        "id": 1947,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4194:14:15"
                    },
                    {
                        "baseName": {
                            "id": 1948,
                            "name": "HyperdriveShort",
                            "nameLocations": [
                                "4214:15:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13634,
                            "src": "4214:15:15"
                        },
                        "id": 1949,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4214:15:15"
                    },
                    {
                        "baseName": {
                            "id": 1950,
                            "name": "HyperdriveCheckpoint",
                            "nameLocations": [
                                "4235:20:15"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10381,
                            "src": "4235:20:15"
                        },
                        "id": 1951,
                        "nodeType": "InheritanceSpecifier",
                        "src": "4235:20:15"
                    }
                ],
                "canonicalName": "Hyperdrive",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 1939,
                    "nodeType": "StructuredDocumentation",
                    "src": "808:3290:15",
                    "text": "______  __                           _________      _____\n      ___  / / /____  ___________________________  /_________(_)__   ______\n      __  /_/ /__  / / /__  __ \\  _ \\_  ___/  __  /__  ___/_  /__ | / /  _ \\\n      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/\n      /_/ /_/  _\\__, / _   ___/\\___//_/    \\__,_/  /_/    /_/  _____/ \\___/\n               /____/   /_/\n                     XXX          ++          ++          XXX\n     ############   XXXXX        ++0+        +0++        XXXXX   ###########\n   ##////////////########       ++00++      ++00++       ########///////////##\n  ##////////////##########      ++000++    ++000++      ##########///////////##\n  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##\n    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%\n         %&&&                ##  +o000+    +000o+  ##              &&&%\n                              ## ++00+-    -+00++ ##\n                               #% ++0+      +0++ %#\n                               ###-:Oo.++++.oO:-###\n                                ##: 00++++++00 :##\n                    #S###########* 0++00+++00++0 *##########S#\n                  #S               % $ 0+++0 $ %              S#\n                #S   ----------   %+++++:#:+++++%-----------    S#\n              #S   ------------- %++++: ### :++++%------------    S#\n             S    ---------------%++++*\\ | /*++++%-------------     S\n           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#\n         #S?      ---------------  %+++++~+++++%&&&8 o  \\  /  o       ?S#\n        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?\n      #?+////////////////////////////////////////////////////////////////+?#\n    #;;;;;//////////////////////////////////////////////////////////////;;;;;#\n  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S\n /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\n |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|  \\[__ |   \\  /===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\/ ===========OOOOOOOO||OOOOOOOO|||\n ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n |||////////000000000000\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\|||\n SSS\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\00000000000//////////SSS\n SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS\n SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n @author DELV\n @title Hyperdrive\n @notice A fixed-rate AMM that mints bonds on demand for longs and shorts.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    2494,
                    10381,
                    13634,
                    12198,
                    11279,
                    12682,
                    8936,
                    9917,
                    13842,
                    67058,
                    8062,
                    8623,
                    7784,
                    8589
                ],
                "name": "Hyperdrive",
                "nameLocation": "4116:10:15",
                "scope": 2495,
                "usedErrors": [
                    7570,
                    67003
                ],
                "usedEvents": [
                    7909,
                    7924,
                    7941,
                    7954,
                    7971,
                    7990,
                    8007,
                    8024,
                    8037,
                    8044,
                    8049,
                    8056,
                    8061,
                    8604,
                    8613,
                    8622
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 15
};
