export const MockHyperdriveTarget1 = {
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
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200425c3803806200425c8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613da1620004bb60003960005050600050506000610b650152600050506000818160af01528181610325015261301c0152600081816113eb015281816117fc0152818161185f01528181612bfa01528181612c3601528181612e350152612ff601526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612fd001526000611c1f015260008181611d45015281816123a801526124210152600081816108d701528181610f8c01528181611d1901526123f5015260008181610e81015261236e01526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d0015261304201526000818161080f01528181610f0b015281816117580152818161224301526135760152600081816105d20152818161064d015281816106c30152818161078f01526107c7015260005050600081816119f101528181611a3a01528181612697015281816126e0015281816127bb015281816128670152818161295301526129ff0152613da16000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613824565b610073565b60405190815260200160405180910390f35b61004e61006e366004613824565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613899565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c990836138ac565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a60208301836138e1565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161390c565b6102cc8a6102c68d8f613899565b906115e5565b8d6102da60408c018c613929565b6040516102ee989796959493929190613999565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613899565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c990836139e1565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d060208301836138e1565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161390c565b8a61051c60408b018b613929565b60405161052f9796959493929190613a09565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836138e1565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611ad1565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613899565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611ae7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b92505b5061076583611b1f565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b613a4a565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613899565b4290611b49565b84611075565b61080288611b5e565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d613a4a565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611d02565b9150915080600960008282546108a59190613899565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613899565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611dd1565b915061090f61090a83856115e5565b611e1b565b600680546002906109309084906201000090046001600160701b0316613a5d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611b1f565b6006805460109061097f908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611d02565b9150915080600960008282546109f69190613899565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c8183613a4a565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b0316613a5d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611b1f565b60068054601090610a9b908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae791906138ac565b60006113a5565b8e610af98482611e45565b50505b6000610b078461203f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be59190613a9d565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061218b565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e908490613a4a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611ae7565b90506000610da28a612216565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612267565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b9550610eaa858c610ea5897f00000000000000000000000000000000000000000000000000000000000000006122d7565b612307565b15610eb757610eb7611444565b6000806000610ec885878b87612349565b9c5091945092509050610edb8184613a4a565b610ee59089613899565b9750610ef18284613899565b610efb908d613899565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f359190613a4a565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611dd1565b9950610fbc878a613a4a565b9850670de0b6b3a7640000611039610fd48787613899565b600254610ff2908f90600160801b90046001600160801b0316613a4a565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b111561104757611047611444565b6110578a8a878a8787600061245d565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611b1f565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a76400006111148886613a4a565b61111e9190613aba565b85670de0b6b3a7640000611132878a613a4a565b61113c9190613aba565b8592919060016124fc565b611b1f565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611b1f565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a764000086613aba565b600554600160801b90046001600160801b031691908a60006124fc565b600580546001600160801b03928316600160801b02921691909117905561122286611b1f565b61122c9082613ad1565b600480546001600160801b03928316600160801b02921691909117905561125284611b1f565b6002805460009061126d9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a836125a6565b600480546000906112af908490600f0b613af1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611b1f565b60028054601090611301908490600160801b90046001600160801b0316613ad1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b61137191906138ac565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b031684846125e2565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f000000000000000000000000000000000000000000000000000000000000000083612649565b60035461142691906001600160801b0316613899565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611e45565b600080600061147884611b5e565b9092509050600061148986866115e5565b9050818311156114a15761149e86838561265e565b95505b828110156114b35780830392506114b8565b600092505b6114c183611e1b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611b1f565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b90506115638161267c565b9450846000036115775760009150506115de565b84915061158a604084016020850161390c565b156115b9576115b2856115a060208601866138e1565b6115ad6040870187613929565b612765565b91506115dc565b6115dc856115ca60208601866138e1565b6115d76040870187613929565b6128ff565b505b9392505050565b60006115de8383670de0b6b3a764000061265e565b60008060008060008060008061160e611ae7565b9050600061161b8a612216565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a95565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611b08565b985061170284878b88612349565b9c5091945090925090506117168284613a4a565b6117209089613a4a565b975061172c8184613899565b611736908e613a4a565b9c506117428a8e613899565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117829190613a4a565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b600161245d565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f00000000000000000000000000000000000000000000000000000000000000006118258583613a4a565b105b1561183457611834611444565b6004549084900390600f0b61184984826138ac565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612ae9565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a764000088613aba565b6005546001600160801b031691908c60006124fc565b600580546001600160801b0319166001600160801b03929092169190911790556119038882613a4a565b905061190e81611b1f565b600380546001600160801b03928316600160801b02921691909117905561193483611b1f565b600280546001600160801b0319166001600160801b039290921691909117905561195d826125a6565b600480546001600160801b0319166001600160801b039290921691909117905561198687611b1f565b600280546010906119a8908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611a25575047611ab0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aad9190613b1e565b90505b600f54600003611ac15760006115de565b600f546115de908490839061265e565b6000611add8284613b4d565b6115de9084613a4a565b6002546004546000916105c5916001600160801b0390911690600f0b612ae9565b600061008182611b1985888861265e565b90612b0f565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611b5857826115de565b50919050565b6006546000908190611b81908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611cfd576000611bab8383613a4a565b9050611bba6111478286612b84565b60068054601090611bdc908490600160801b90046001600160801b0316613ad1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c158583612b9990919063ffffffff16565b90506000611c43827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611c579190613899565b90915550611c6790508183613a4a565b9150611c7282611b1f565b60028054600090611c8d9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cba82612bae565b60048054600090611ccf908490600f0b613af1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611d0f8785612b99565b91506000611d3d837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611d69817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611d8c57611d7b8282613a4a565b611d859084613a4a565b9250611da3565b611d968282613a4a565b611da09084613899565b92505b86861015611dc657611db683878961265e565b9250611dc382878961265e565b91505b509550959350505050565b600080611de984611de38a888a61265e565b90612b99565b9050611df688848661265e565b611e009082613899565b905086811115611e105786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e90916001600160801b031690613a4a565b905080600003611ea4576001915050611371565b6000611eaf85612bd8565b905080600003611ec457600192505050611371565b600080611ed2838589612c74565b9150915080611ee8576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f24929190613bdf565b6040805180830381865af4158015611f40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f649190613c55565b91509150611f82611f7482611377565b611f7d90613c79565b612def565b925082611f985760009650505050505050611371565b611fa182611b1f565b60078054600090611fbc9084906001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fe981611b1f565b6007805460109061200b908490600160801b90046001600160801b0316613a7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61206887612f87565b6040518263ffffffff1660e01b81526004016120849190613c95565b6040805180830381865af41580156120a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c49190613ca4565b91509150806120da575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161214091613899565b61214a9190613a4a565b90508060000361216257506000958695509350505050565b600080871161217257600061217d565b61217d84888461265e565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121b1576121b1613cd4565b6040519080825280601f01601f1916602001820160405280156121db576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121fc578692505b828152826000602083013e90999098509650505050505050565b6000806122216105ca565b905080831161223157600061223b565b61223b8184613a4a565b91506115de827f0000000000000000000000000000000000000000000000000000000000000000612b99565b6000808061228861228088670de0b6b3a7640000613a4a565b8990876130c1565b905086156122ca5761229a8888612649565b91506122bb8a8a846122b48a670de0b6b3a7640000613a4a565b89896130e7565b92506122c78382613899565b90505b9750975097945050505050565b60006122f56122ee84670de0b6b3a7640000613a4a565b8390612649565b6115de90670de0b6b3a7640000613a4a565b60008061233e85612316611ae7565b6123209190613899565b600254610ff2908790600160801b90046001600160801b0316613a4a565b909210949350505050565b60008080806123a087866123998b61239361236c8c670de0b6b3a7640000613a4a565b7f000000000000000000000000000000000000000000000000000000000000000090612649565b90612649565b91906130c1565b93506123cc847f00000000000000000000000000000000000000000000000000000000000000006115e5565b915060006123ed6123e589670de0b6b3a7640000613a4a565b8a90886130c1565b9050612419817f0000000000000000000000000000000000000000000000000000000000000000612649565b9350612445847f00000000000000000000000000000000000000000000000000000000000000006115e5565b61244f9084613899565b915050945094509450949050565b600080600080600080888810156124cc5786156124825761247f8d898b61265e565b9c505b61248d8c898b61265e565b9b506124988b611377565b6124a18d611377565b6124ab91906138ac565b90506124b88b898b61265e565b9a506124c58a898b61265e565b99506124eb565b6124d58b611377565b6124de8d611377565b6124e891906138ac565b90505b9b9c9a9b999a975050505050505050565b60008260000361250d57508461259d565b81156125605761253e6125208487613899565b61252a85876115e5565b612534888a6115e5565b611de39190613899565b9050600061254c8588611b49565b90508082101561255a578091505b5061259d565b82850361256f5750600061259d565b61259a61257c8487613a4a565b6125868587612649565b612590888a6115e5565b611de39190613a4a565b90505b95945050505050565b600060016001607f1b03198212806125c4575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b6000806125f084600061310a565b6125fb84600061310a565b61260591906138ac565b905060008113156126215761261a8186613899565b9450612640565b60008112156126405761263381613c79565b61263d9086613a4a565b94505b50929392505050565b60006115de8383670de0b6b3a76400006130c1565b600082600019048411830215820261267557600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126cb575047612756565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561272f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127539190613b1e565b90505b600f546115de9084908361265e565b6000600f548511612776578461277a565b600f545b94506000612787866119d6565b905085600f600082825461279b9190613a4a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612841576040516001600160a01b038716908390600081818185875af1925050503d8060008114612831576040519150601f19603f3d011682016040523d82523d6000602084013e612836565b606091505b5050809150506128d7565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d49190613cea565b90505b806128f5576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f54841161290e5783612912565b600f545b9350600061291f856119d6565b905084600f60008282546129339190613a4a565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016129d9576040516001600160a01b038616908390600081818185875af1925050503d80600081146129c9576040519150601f19603f3d011682016040523d82523d6000602084013e6129ce565b606091505b505080915050612a6f565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6c9190613cea565b90505b80612a8d576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612ab6612aae88670de0b6b3a7640000613a4a565b89908761265e565b905086156122ca57612ac888886115e5565b91506122bb8a8a84612ae28a670de0b6b3a7640000613a4a565b8989613120565b600080612af68484613131565b909250905080612b0857612b08611444565b5092915050565b600081600003612b285750670de0b6b3a7640000611371565b82600003612b3857506000611371565b6000612b4383611377565b90506000612b58612b5386611377565b613170565b9050818102612b6f670de0b6b3a764000082613d07565b9050612b7a81613396565b9695505050505050565b60006115de83670de0b6b3a7640000846130c1565b60006115de83670de0b6b3a76400008461265e565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612bf3906001600160801b031684612b84565b9050612c1f7f000000000000000000000000000000000000000000000000000000000000000082613899565b6002546001600160801b03161115611b58576002547f000000000000000000000000000000000000000000000000000000000000000090612c6a9083906001600160801b0316613a4a565b6115de9190613a4a565b612c7c613771565b600080612c8884612f87565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612cc39190613c95565b6040805180830381865af4158015612cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d039190613ca4565b9350905082612d18575060009150612de79050565b6000612d3f612d3a8461016001518561014001516115e590919063ffffffff16565b611377565b612d5f612d3a85610120015186610100015161264990919063ffffffff16565b612d6991906138ac565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ecc9190613d35565b935093509350935080612ee85750600098975050505050505050565b868414612f1957612ef884611b1f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612f4a57612f29836125a6565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f7857612f5a82611b1f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f8f6137c3565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191613087911661352b565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926130b99290041661352b565b905292915050565b60008260001904841183021582026130d857600080fd5b50910281810615159190040190565b6000806130f88888888888886135a1565b909250905080611e1057611e10611444565b600081831361311957816115de565b5090919050565b6000806130f8888888888888613682565b60008060008361314086611377565b61314a91906138ac565b90506000811215613162576000809250925050613169565b9150600190505b9250929050565b60008082136131925760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132159084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136133b157506000919050565b680755bf798b4a1bf1e582126133da576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b7a74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a764000061353f6105ca565b6135499190613aba565b9050808311613559576000613563565b6135638184613a4a565b91506115de61359a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613aba565b8390612b99565b60008060006135b38989888888613742565b9050868810156135ca576000809250925050613677565b96869003966135d98887612b0f565b9750878110156135f0576000809250925050613677565b8781036135fe8186886130c1565b9050670de0b6b3a764000081106136325761362b613624670de0b6b3a764000089612b84565b8290612b0f565b905061364a565b613647613624670de0b6b3a764000089612b99565b90505b6136548186612b84565b90508981101561366c57600080935093505050613677565b899003925060019150505b965096945050505050565b60008060006136948989888888613742565b90506136a486611b19898b613899565b9750878110156136bb576000809250925050613677565b8781036136c98186886130c1565b9050670de0b6b3a764000081106136f6576136ef613624670de0b6b3a764000089612b84565b905061370e565b61370b613624670de0b6b3a764000089612b99565b90505b6137188186612b84565b9050808a101561373057600080935093505050613677565b90980398600198509650505050505050565b600061374e8585612b0f565b61376761375f86611b19868b612649565b8590856130c1565b61259a9190613899565b6040518061012001604052806137856137c3565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561383a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561386657600080fd5b85016060818803121561387857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561137157611371613883565b8181036000831280158383131683831282161715612b0857612b08613883565b6001600160a01b03811681146105af57600080fd5b6000602082840312156138f357600080fd5b81356115de816138cc565b80151581146105af57600080fd5b60006020828403121561391e57600080fd5b81356115de816138fe565b6000808335601e1984360301811261394057600080fd5b83018035915067ffffffffffffffff82111561395b57600080fd5b60200191503681900382131561316957600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006139d360e083018486613970565b9a9950505050505050505050565b8082018281126000831280158216821582161715613a0157613a01613883565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613a3d60c083018486613970565b9998505050505050505050565b8181038181111561137157611371613883565b6001600160701b03818116838216019080821115612b0857612b08613883565b6001600160801b03818116838216019080821115612b0857612b08613883565b600060208284031215613aaf57600080fd5b81516115de816138cc565b808202811582820484141761137157611371613883565b6001600160801b03828116828216039080821115612b0857612b08613883565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137157611371613883565b600060208284031215613b3057600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613b5c57613b5c613b37565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613bf3828551613b61565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c6857600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c8e57613c8e613883565b5060000390565b61018081016113718284613b61565b60008060408385031215613cb757600080fd5b825191506020830151613cc9816138fe565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613cfc57600080fd5b81516115de816138fe565b600082613d1657613d16613b37565b600160ff1b821460001984141615613d3057613d30613883565b500590565b60008060008060808587031215613d4b57600080fd5b8451935060208501519250604085015191506060850151613878816138fe56fea26469706673582212207255e7d73034b69a3e5d352773f7784542b092b7199cade1ede58995980a29b164736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
