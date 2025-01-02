export const MockHyperdriveTarget3 = {
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
                    "name": "__adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162004328380380620043288339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613e42620004e65f395f50505f50505f6112f601525f81816102f801528181610327015261035401525f818160d901528181610596015261170c01525f81816108320152818161091d015281816109ad01528181610ab2015281816115de015281816116e6015281816123dd0152818161244001528181612ce90152818161319301526131cf01525f8181610139015281816108a201528181610eb4015281816114a70152818161150a0152818161154f015281816116c001528181611bad0152611c3c01525f611fee01525f8181612143015261341e01525f8181611071015261211701525f6133d401525f818161017b015281816108f501528181610ed501528181611477015281816114da01528181611570015261173201525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610faf0152612c7f01525f818161028d01528181610d7a01528181610df101528181610e6501528181610f300152610f6801525f50505f8181610bb6015281816119b2015281816119fb01528181611a8a01528181611b0b01528181611ca701528181611d2801528181612ed901528181612f2201528181612fcf01526130180152613e425ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046138c7565b610064565b60405190815260200160405180910390f35b61003f61005f366004613926565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610c20565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c58565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c7d565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610ca2565b915091505f6101e5610d73565b90506101f5818360046001610d9e565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613986565b611402565b611448565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f000000000000000000000000000000000000000000000000000000000000000089613999565b815260208101919091526040015f20546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061164c565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613986565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f000000000000000000000000000000000000000000000000000000000000000082613999565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b0390911690613999565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613986565b90505f805f61042d8a611677565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613a2a565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613a39565b91506104b96104b48c6117b1565b6117de565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613a2a565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613a39565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b8187613999565b9190611804565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e61181f565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613a64565b8e611833565b610625896118d8565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613986565b9b5090508a158061071857506107158c5f6118e4565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b611804565b61074f565b5f5b905061075e6020850185613a64565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b01613a8c565b866107a960408c018c613aa7565b6040516107bc9796959493929190613aea565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610c20565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610ca2565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613b3d565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613b54565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118f8565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f80611448565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c8561191d565b600280546001600160801b0319166001600160801b0392909216919091179055610a6584611946565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e8361191d565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f0000000000000000000000000000000000000000000000000000000000000000611833565b610aed5f610ae760208c018c613a64565b8a611833565b610b02610af8610d73565b8760046001610d9e565b508a8a8a610b136020820182613a64565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b506040870160208801613a8c565b87610b5e6040890189613aa7565b604051610b719796959493929190613aea565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c0057503415155b15610c1e57604051631574f9f360e01b815260040160405180910390fd5b565b5f610c2e6020830183613a64565b6001600160a01b031603610c555760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c78916001600160801b0390911690600f0b6118f8565b905090565b5f80610c8b87878786611981565b9050610c97818561164c565b979650505050505050565b815f80610cb56040850160208601613a8c565b15610cda57610cd085610ccb6040870187613aa7565b611997565b9093509050610cf2565b5034610cf285610ced6040870187613aa7565b611c21565b610cfa611dc3565b91508015610d6a576040515f90339083908381818185875af1925050503d805f8114610d41576040519150601f19603f3d011682016040523d82523d5f602084013e610d46565b606091505b5050905080610d68576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c78427f0000000000000000000000000000000000000000000000000000000000000000611dd5565b5f84815260086020526040812060018101546001600160801b0316151580610dc557504286115b15610dde57600101546001600160801b031690506113fa565b5f805f610de9610d73565b90505f610e167f00000000000000000000000000000000000000000000000000000000000000008b613986565b90505b81811015610e8a575f818152600860205260409020600101546001600160801b03168015610e62575f828152600860205260409020549094506001600160801b03169250610e8a565b507f000000000000000000000000000000000000000000000000000000000000000001610e19565b835f03610efc57889350610ef9610e9f610c58565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611981565b92505b50610f068361191d565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f5c610f557f00000000000000000000000000000000000000000000000000000000000000008b613999565b8a84611dea565b610f9a89610f94610f8d7f000000000000000000000000000000000000000000000000000000000000000083613986565b4290611f23565b84611dea565b610fa388611f31565b505f9050600881610fd47f00000000000000000000000000000000000000000000000000000000000000008d613999565b815260208101919091526040015f908120600101546001600160801b03169150610fff60028c6120ce565b5f818152600b60205260408120549192508c8c831561114057600192505f8061102b86898d865f612102565b915091508060095f8282546110409190613986565b9091555061105b9050865f84611055816117b1565b886121cf565b6110658183613986565b915061109586838a8e877f0000000000000000000000000000000000000000000000000000000000000000612346565b91506110a96110a48385612389565b61239d565b600680546002906110ca9084906201000090046001600160701b0316613b7f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f78261191d565b60068054601090611119908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f61114c6001846120ce565b5f818152600b6020526040902054909150801561125757600194505f80611177838b8f886001612102565b915091508060095f82825461118c9190613986565b909155506111a79050835f846111a1816117b1565b8a6123c6565b6111b18183613999565b91506111c06110a48387612389565b600680546002906111e19084906201000090046001600160701b0316613b7f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120e8261191d565b60068054601090611230908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611269876117b1565b611272836117b1565b61127c9190613bbf565b5f6125b6565b8e61128d84826125f5565b50505b5f61129a846127e4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611350573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113749190613bde565b90506001600160a01b038116156113e8576113e55a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612926565b50505b509b9d50505050505050505050505050505b949350505050565b5f611427600b5f6114146002866120ce565b81526020019081526020015f20546117b1565b611438600b5f6114146001876120ce565b6114429190613bbf565b92915050565b5f805f806114568a8a6129ae565b915091508061146c575f80935093505050611641565b5f6114cb838a6114a47f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613999565b8b7f00000000000000000000000000000000000000000000000000000000000000006129e6565b5090505f61152e848b846115077f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613999565b8d7f0000000000000000000000000000000000000000000000000000000000000000612a9f565b50905081158061153c575080155b1561154757505f9050805b5f611594858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611981565b90506115a283838c84612b59565b509093505f90506115b3848f613986565b90505f6115d38b8b6115c4876117b1565b6115ce908e613bf9565b612ba1565b90508b6116086116037f000000000000000000000000000000000000000000000000000000000000000083612c03565b6117b1565b611611836117b1565b61161e6116038685612389565b6116289190613bbf565b6116329190613bbf565b60019950995050505050505050505b965096945050505050565b5f61008d61165f84846301e13380612c13565b61167185670de0b6b3a7640000613999565b9061181f565b61167f613818565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117779116612c36565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117a992900416612c36565b905292915050565b5f6001600160ff1b038211156117da5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117e781612ca3565b610c5557604051635044b7f560e01b815260040160405180910390fd5b5f825f190484118302158202611818575f80fd5b5091020490565b5f61008d83670de0b6b3a764000084611804565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611864908490613986565b90915550505f838152600b602052604081208054839290611886908490613986565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6114428260046125f5565b5f8183136118f2578261008d565b50919050565b5f8061190484846129ae565b90925090508061191657611916612e37565b5092915050565b5f6001600160801b038211156117da57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611963575060016001607f1b0382135b156117da5760405163a5353be560e01b815260040160405180910390fd5b5f61007582611991858888611804565b90612e50565b5f808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119e6575047611a6f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a6c9190613a39565b90505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ae95787341015611ad8576040516312171d8360e31b815260040160405180910390fd5b611ae28834613999565b9050611b80565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611b59573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b7d9190613c20565b91505b81611b9e576040516312171d8360e31b815260040160405180910390fd5b600f545f03611be257611bd1887f000000000000000000000000000000000000000000000000000000000000000061181f565b600f81905594509250611c19915050565b600f545f90611bf3908a9086611804565b905080600f5f828254611c069190613986565b90915550909550909350611c1992505050565b935093915050565b5f611c2b84612ebf565b9050600f545f03611c6857611c60817f000000000000000000000000000000000000000000000000000000000000000061181f565b600f55611c8c565b5f611c7282612fb5565b905080600f5f828254611c859190613986565b9091555050505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d065782341015611cf5576040516312171d8360e31b815260040160405180910390fd5b611cff8334613999565b9050611d9d565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611d76573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d9a9190613c20565b91505b81611dbb576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f610c78670de0b6b3a7640000612ebf565b5f611de08284613c4f565b61008d9084613999565b5f83815260086020526040902054600160801b90046001600160801b0316808303611e155750505050565b5f848152600860205260408120546001600160801b031690819003611e6d57611e3d8361191d565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611eea565b611ebe611eb9670de0b6b3a7640000611e868886613999565b611e909190613b3d565b85670de0b6b3a7640000611ea4878a613999565b611eae9190613b3d565b85929190600161309b565b61191d565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611ef38461191d565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118f2578261008d565b6006545f908190611f53908490600160801b90046001600160801b0316612389565b6006546201000090046001600160701b031692509050818111156120c9575f611f7c8383613999565b9050611f8b611eb98286613135565b60068054601090611fad908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611fe5858361181f90919063ffffffff16565b90505f612012827f0000000000000000000000000000000000000000000000000000000000000000612389565b90508060095f8282546120259190613986565b9091555061203590508183613999565b91506120408261191d565b600280545f9061205a9084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061208782613149565b600480545f9061209b908490600f0b613c82565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156120f75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061210e878561181f565b91505f61213b837f0000000000000000000000000000000000000000000000000000000000000000612389565b9050612167817f0000000000000000000000000000000000000000000000000000000000000000612389565b9150831561218a576121798282613999565b6121839084613999565b92506121a1565b6121948282613999565b61219e9084613986565b92505b868610156121c4576121b4838789611804565b92506121c1828789611804565b91505b509550959350505050565b600454600160801b90046001600160801b0316612217611eb9826121fb670de0b6b3a764000086613b3d565b600554600160801b90046001600160801b031691908a5f61309b565b600580546001600160801b03928316600160801b02921691909117905561223d8661191d565b6122479082613c62565b600480546001600160801b03928316600160801b02921691909117905561226d8461191d565b600280545f906122879084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122b483611946565b600480545f906122c8908490600f0b613c82565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506122f88561191d565b6002805460109061231a908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80612357846116718a888a611804565b9050612364888486611804565b61236e9082613986565b90508681111561237e5786810391505b509695505050505050565b5f61008d8383670de0b6b3a7640000611804565b5f6001600160701b038211156117da5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061240857507f00000000000000000000000000000000000000000000000000000000000000006124068583613999565b105b1561241557612415612e37565b6004549084900390600f0b61242a8482613bbf565b905083612436866117b1565b13801561246b57507f000000000000000000000000000000000000000000000000000000000000000061246983836118f8565b105b1561247857612478612e37565b600354600160801b90046001600160801b03166124b9611eb9826124a4670de0b6b3a764000088613b3d565b6005546001600160801b031691908c5f61309b565b600580546001600160801b0319166001600160801b03929092169190911790556124e38882613999565b90506124ee8161191d565b600380546001600160801b03928316600160801b0292169190911790556125148361191d565b600280546001600160801b0319166001600160801b039290921691909117905561253d82611946565b600480546001600160801b0319166001600160801b03929092169190911790556125668761191d565b60028054601090612588908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546125d190611eb9906001600160801b03168484612ba1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161263f916001600160801b031690613999565b9050805f03612652576001915050611442565b5f61265c85613172565b9050805f0361267057600192505050611442565b5f8061267d83858961320d565b9150915080612692575f945050505050611442565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016126cd929190613caf565b6040805180830381865af41580156126e7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061270b9190613d24565b9150915061272961271b826117b1565b61272490613d46565b612ca3565b92508261273e575f9650505050505050611442565b6127478261191d565b600780545f906127619084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061278e8161191d565b600780546010906127b0908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61280b87611677565b6040518263ffffffff1660e01b81526004016128279190613a2a565b6040805180830381865af4158015612841573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128659190613d60565b915091508061287a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916128df91613986565b6128e99190613999565b9050805f036128ff57505f958695509350505050565b5f80871161290d575f612918565b612918848884611804565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561294957612949613d8e565b6040519080825280601f01601f191660200182016040528015612973576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612993578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836129bb866117b1565b6129c59190613bbf565b90505f8112156129db575f809250925050610d6c565b946001945092505050565b5f805f6129f68888888888613375565b90505f612a20670de0b6b3a7640000612a0f8888613135565b612a199190613986565b839061181f565b9050670de0b6b3a76400008110612a5457612a4d612a46670de0b6b3a76400008961181f565b8290612e50565b9050612a6c565b612a69612a46670de0b6b3a764000089613135565b90505b612a76818661181f565b905088811015612a8d575f809350935050506129a4565b97909703976001975095505050505050565b5f805f612aaf89898888886133a3565b9050612ac986611991612ac28a8d613986565b8790612389565b9850612ad6858a86611804565b985088811015612aec575f809250925050611641565b888103670de0b6b3a76400008110612b1a57612b13612a46670de0b6b3a764000089613135565b9050612b32565b612b2f612a46670de0b6b3a76400008961181f565b90505b80891015612b47575f80935093505050611641565b90970398600198509650505050505050565b5f805f805f612b698987896133c7565b9092509050612b788289613999565b97505f612b8682888a611804565b9050612b92818b613999565b9a989950979650505050505050565b5f80612bad845f61344c565b612bb7845f61344c565b612bc19190613bbf565b90505f811315612bdc57612bd58186613986565b9450612bfa565b5f811215612bfa57612bed81613d46565b612bf79086613999565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612c27575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612c49610d73565b612c539190613b3d565b9050808311612c62575f612c6c565b612c6c8184613999565b915061008d612a19670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b3d565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d59573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d7d9190613da2565b935093509350935080612d9857505f98975050505050505050565b868414612dc957612da88461191d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612dfa57612dd983611946565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e2857612e0a8261191d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612e675750670de0b6b3a7640000611442565b825f03612e7557505f611442565b5f612e7f836117b1565b90505f612e93612e8e866117b1565b613461565b9050818102612eaa670de0b6b3a764000082613de0565b9050612eb581613686565b9695505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f0d575047612f96565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612f6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612f939190613a39565b90505b600f545f03612fa5575f61008d565b600f5461008d9084908390611804565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161300357504761308c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613065573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130899190613a39565b90505b600f5461008d90849083611804565b5f825f036130aa575084610075565b81156130fc576130db6130bd8487613986565b6130c78587612389565b6130d1888a612389565b6116719190613986565b90505f6130e88588611f23565b9050808210156130f6578091505b50610075565b82850361310a57505f610075565b6100726131178487613999565b6131218587612c03565b61312b888a612389565b6116719190613999565b5f61008d83670de0b6b3a764000084612c13565b5f60016001607f1b038211156117da5760405163a5353be560e01b815260040160405180910390fd5b6003545f90819061318c906001600160801b031684613135565b90506131b87f000000000000000000000000000000000000000000000000000000000000000082613986565b6002546001600160801b031611156118f2576002547f0000000000000000000000000000000000000000000000000000000000000000906132039083906001600160801b0316613999565b61008d9190613999565b61321561386d565b5f8061322084611677565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161325a9190613a2a565b6040805180830381865af4158015613274573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906132989190613d60565b93509050826132ac57505f9150611c199050565b5f6132cd61160384610160015185610140015161238990919063ffffffff16565b6132ed611603856101200151866101000151612c0390919063ffffffff16565b6132f79190613bbf565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f6133808585612e50565b61339961339186611991868b612389565b859085611804565b6100729190613986565b5f6133ae8585612e50565b6133996133bf86611991868b612c03565b859085612c13565b5f806134168561341085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613406818c613135565b6134109190613999565b90612c03565b9150613442827f0000000000000000000000000000000000000000000000000000000000000000612389565b9050935093915050565b5f81831361345a578161008d565b5090919050565b5f8082136134825760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135059084901c6117b1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361369f57505f919050565b680755bf798b4a1bf1e582126136c8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612eb574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117b1565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b604051806101200160405280613881613818565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118f2575f80fd5b5f805f805f60a086880312156138db575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561390d575f80fd5b613919888289016138b7565b9150509295509295909350565b5f805f60608486031215613938575f80fd5b8335925060208401359150604084013567ffffffffffffffff81111561395c575f80fd5b613968868287016138b7565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561144257611442613972565b8181038181111561144257611442613972565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144282846139ac565b5f60208284031215613a49575f80fd5b5051919050565b6001600160a01b0381168114610c55575f80fd5b5f60208284031215613a74575f80fd5b813561008d81613a50565b8015158114610c55575f80fd5b5f60208284031215613a9c575f80fd5b813561008d81613a7f565b5f808335601e19843603018112613abc575f80fd5b83018035915067ffffffffffffffff821115613ad6575f80fd5b602001915036819003821315610d6c575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144257611442613972565b5f805f60608486031215613b66575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561191657611916613972565b6001600160801b0381811683821601908082111561191657611916613972565b8181035f83128015838313168383128216171561191657611916613972565b5f60208284031215613bee575f80fd5b815161008d81613a50565b8082018281125f831280158216821582161715613c1857613c18613972565b505092915050565b5f60208284031215613c30575f80fd5b815161008d81613a7f565b634e487b7160e01b5f52601260045260245ffd5b5f82613c5d57613c5d613c3b565b500690565b6001600160801b0382811682821603908082111561191657611916613972565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144257611442613972565b5f6102a082019050613cc28285516139ac565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613d35575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613d5a57613d5a613972565b505f0390565b5f8060408385031215613d71575f80fd5b825191506020830151613d8381613a7f565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613db5575f80fd5b8451935060208501519250604085015191506060850151613dd581613a7f565b939692955090935050565b5f82613dee57613dee613c3b565b600160ff1b82145f1984141615613e0757613e07613972565b50059056fea2646970667358221220d426ba5f7020e09bbfea80f6e77d21cc660f32b25d7e2adec3c6a8f1dc6df22d64736f6c63430008160033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
