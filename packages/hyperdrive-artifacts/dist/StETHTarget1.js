export const StETHTarget1 = {
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162003e9a38038062003e9a8339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613a026200049860003960005050600050506000610b650152600050506000818160af015281816103250152612c9a0152600081816113eb015281816117fc0152818161185f01528181612878015281816128b401528181612ab30152612c7401526000818161071301528181610de801528181610e2f01528181610ff401528181611661015281816116af0152612c4e01526000611bb1015260008181611cd70152818161233a01526123b30152600081816108d701528181610f8c01528181611cab0152612387015260008181610e81015261230001526000818161073401528181610dc601528181610e50015281816110150152818161163f015281816116d00152612cc001526000818161080f01528181610f0b01528181611758015281816121d501526131f40152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600081816119ef01528181612627015261269f015260005050613a026000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046134a2565b610073565b60405190815260200160405180910390f35b61004e61006e3660046134a2565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610c73565b3387610ca8565b6000806000806000806101568b888e610d81565b95509550955095509550955060008c90508c4210156102165782600960008282546101819190613517565b9091555061019990506101926105ca565b4284611075565b6101a68c888787856111b3565b60006101b18e61132d565b90506101cf6101bf8e611377565b6101c9908361352a565b826113a5565b6101d8896113e4565b6101e4576101e4611444565b60006101ef8a61145d565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b610220868961146a565b955061022b8861145d565b505b600061023a878a8d61154b565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610c73565b61027a602083018361355f565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161358a565b6102cc8a6102c68d8f613517565b906115e5565b8d6102da60408c018c6135a7565b6040516102ee989796959493929190613617565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610c73565b6000806000806000806103bb8b888e6115fa565b95509550955095509550955060008c90508c42101561046e5782600960008282546103e69190613517565b909155506103f790506101926105ca565b6104048c888787856117e5565b600061040f8261132d565b905061042761041d8e611377565b6101c9908361365f565b610430896113e4565b61043c5761043c611444565b60006104478a61145d565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b610478868961146a565b95506104838861145d565b505b6000610492878a8d61154b565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610c73565b6104d0602083018361355f565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161358a565b8a61051c60408b018b6135a7565b60405161052f9796959493929190613687565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610588602083018361355f565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a76400006119d6565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a63565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613517565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a79565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a9a565b92505b5061076583611ab1565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6136c8565b8a84611075565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613517565b4290611adb565b84611075565b61080288611af0565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6136c8565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610c73565b6000818152600b60205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c94565b9150915080600960008282546108a59190613517565b909155506108c19050866000846108bb81611377565b886111b3565b6108cb8183613517565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d63565b915061090f61090a83856115e5565b611dad565b600680546002906109309084906201000090046001600160701b03166136db565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611ab1565b6006805460109061097f908490600160801b90046001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610c73565b6000818152600b60205260409020549091508015610ac257600194506000806109e0838b8f886001611c94565b9150915080600960008282546109f69190613517565b90915550610a12905083600084610a0c81611377565b8a6117e5565b610a1c81836136c8565b9150610a2b61090a83876115e5565b60068054600290610a4c9084906201000090046001600160701b03166136db565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611ab1565b60068054601090610a9b908490600160801b90046001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad487611377565b610add83611377565b610ae7919061352a565b60006113a5565b8e610af98482611dd7565b50505b6000610b0784611fd1565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be5919061371b565b90506001600160a01b03811615610c5a57610c575a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061211d565b50505b509b9d5050505050505050505050505050949350505050565b60006001600160f81b03821115610c9d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152902054811115610ceb57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d2e9084906136c8565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d95611a79565b90506000610da28a6121a8565b6002549091508c908c90610e0c908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121f9565b600254919d509a50909550610e74908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a9a565b9550610eaa858c610ea5897f0000000000000000000000000000000000000000000000000000000000000000612269565b612299565b15610eb757610eb7611444565b6000806000610ec885878b876122db565b9c5091945092509050610edb81846136c8565b610ee59089613517565b9750610ef18284613517565b610efb908d613517565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f3591906136c8565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f7d5760008b8152600860205260409020600101546001600160801b0316610f7f565b8b5b90508b610fb08e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d63565b9950610fbc878a6136c8565b9850670de0b6b3a7640000611039610fd48787613517565b600254610ff2908f90600160801b90046001600160801b03166136c8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a9a565b111561104757611047611444565b6110578a8a878a878760006123ef565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b6000848152600860205260408120546001600160801b0316908190036110fb576110ca83611ab1565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611179565b61114c611147670de0b6b3a764000061111488866136c8565b61111e9190613738565b85670de0b6b3a7640000611132878a6136c8565b61113c9190613738565b85929190600161248e565b611ab1565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61118284611ab1565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111fc611147826111df670de0b6b3a764000086613738565b600554600160801b90046001600160801b031691908a600061248e565b600580546001600160801b03928316600160801b02921691909117905561122286611ab1565b61122c908261374f565b600480546001600160801b03928316600160801b02921691909117905561125284611ab1565b6002805460009061126d9084906001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061129a83612538565b600480546000906112af908490600f0b61376f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112df85611ab1565b60028054601090611301908490600160801b90046001600160801b031661374f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611355600b6000611341600286610c73565b815260200190815260200160002054611377565b611367600b6000611341600187610c73565b611371919061352a565b92915050565b60006001600160ff1b038211156113a15760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113c090611147906001600160801b03168484612574565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006114107f0000000000000000000000000000000000000000000000000000000000000000836125db565b60035461142691906001600160801b0316613517565b60025461143c906001600160801b0316846115e5565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611371826004611dd7565b600080600061147884611af0565b9092509050600061148986866115e5565b9050818311156114a15761149e8683856125f0565b95505b828110156114b35780830392506114b8565b600092505b6114c183611dad565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561151457869003611518565b5060005b61152181611ab1565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008061155885856115e5565b90506115638161260e565b9450846000036115775760009150506115de565b84915061158a604084016020850161358a565b156115b9576115b2856115a0602086018661355f565b6115ad60408701876135a7565b61265e565b91506115dc565b6115dc856115ca602086018661355f565b6115d760408701876135a7565b612679565b505b9392505050565b60006115de8383670de0b6b3a76400006125f0565b60008060008060008060008061160e611a79565b9050600061161b8a6121a8565b6002549091508b908d90611685908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612713565b600254919d509b50909550600090819081906116f4908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a9a565b985061170284878b886122db565b9c50919450909250905061171682846136c8565b61172090896136c8565b975061172c8184613517565b611736908e6136c8565b9c506117428a8e613517565b9b50505050505050506117cf86868386600860007f00000000000000000000000000000000000000000000000000000000000000008f61178291906136c8565b81526020810191909152604001600020600101546001600160801b0316428e116117c65760008e8152600860205260409020600101546001600160801b03166117c8565b8e5b60016123ef565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061182757507f000000000000000000000000000000000000000000000000000000000000000061182585836136c8565b105b1561183457611834611444565b6004549084900390600f0b611849848261352a565b90508361185586611377565b13801561188a57507f00000000000000000000000000000000000000000000000000000000000000006118888383612767565b105b1561189757611897611444565b600354600160801b90046001600160801b03166118d9611147826118c3670de0b6b3a764000088613738565b6005546001600160801b031691908c600061248e565b600580546001600160801b0319166001600160801b039290921691909117905561190388826136c8565b905061190e81611ab1565b600380546001600160801b03928316600160801b02921691909117905561193483611ab1565b600280546001600160801b0319166001600160801b039290921691909117905561195d82612538565b600480546001600160801b0319166001600160801b039290921691909117905561198687611ab1565b600280546010906119a8908490600160801b90046001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611a3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611371919061379c565b6000611a6f82846137cb565b6115de90846136c8565b6002546004546000916105c5916001600160801b0390911690600f0b612767565b600061008182611aab8588886125f0565b9061278d565b60006001600160801b038211156113a157604051630f0af95160e11b815260040160405180910390fd5b6000818311611aea57826115de565b50919050565b6006546000908190611b13908490600160801b90046001600160801b03166115e5565b6006546201000090046001600160701b03169250905081811115611c8f576000611b3d83836136c8565b9050611b4c6111478286612802565b60068054601090611b6e908490600160801b90046001600160801b031661374f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ba7858361281790919063ffffffff16565b90506000611bd5827f00000000000000000000000000000000000000000000000000000000000000006115e5565b90508060096000828254611be99190613517565b90915550611bf9905081836136c8565b9150611c0482611ab1565b60028054600090611c1f9084906001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c4c8261282c565b60048054600090611c61908490600f0b61376f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611ca18785612817565b91506000611ccf837f00000000000000000000000000000000000000000000000000000000000000006115e5565b9050611cfb817f00000000000000000000000000000000000000000000000000000000000000006115e5565b91508315611d1e57611d0d82826136c8565b611d1790846136c8565b9250611d35565b611d2882826136c8565b611d329084613517565b92505b86861015611d5857611d488387896125f0565b9250611d558287896125f0565b91505b509550959350505050565b600080611d7b84611d758a888a6125f0565b90612817565b9050611d888884866125f0565b611d929082613517565b905086811115611da25786810391505b509695505050505050565b60006001600160701b038211156113a15760405163086b151760e11b815260040160405180910390fd5b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e22916001600160801b0316906136c8565b905080600003611e36576001915050611371565b6000611e4185612856565b905080600003611e5657600192505050611371565b600080611e648385896128f2565b9150915080611e7a576000945050505050611371565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611eb692919061385d565b6040805180830381865af4158015611ed2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef691906138d3565b91509150611f14611f0682611377565b611f0f906138f7565b612a6d565b925082611f2a5760009650505050505050611371565b611f3382611ab1565b60078054600090611f4e9084906001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f7b81611ab1565b60078054601090611f9d908490600160801b90046001600160801b03166136fb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ffa87612c05565b6040518263ffffffff1660e01b81526004016120169190613913565b6040805180830381865af4158015612032573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120569190613922565b915091508061206c575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120d291613517565b6120dc91906136c8565b9050806000036120f457506000958695509350505050565b600080871161210457600061210f565b61210f8488846125f0565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561214357612143613952565b6040519080825280601f01601f19166020018201604052801561216d576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561218e578692505b828152826000602083013e90999098509650505050505050565b6000806121b36105ca565b90508083116121c35760006121cd565b6121cd81846136c8565b91506115de827f0000000000000000000000000000000000000000000000000000000000000000612817565b6000808061221a61221288670de0b6b3a76400006136c8565b899087612d3f565b9050861561225c5761222c88886125db565b915061224d8a8a846122468a670de0b6b3a76400006136c8565b8989612d65565b92506122598382613517565b90505b9750975097945050505050565b600061228761228084670de0b6b3a76400006136c8565b83906125db565b6115de90670de0b6b3a76400006136c8565b6000806122d0856122a8611a79565b6122b29190613517565b600254610ff2908790600160801b90046001600160801b03166136c8565b909210949350505050565b6000808080612332878661232b8b6123256122fe8c670de0b6b3a76400006136c8565b7f0000000000000000000000000000000000000000000000000000000000000000906125db565b906125db565b9190612d3f565b935061235e847f00000000000000000000000000000000000000000000000000000000000000006115e5565b9150600061237f61237789670de0b6b3a76400006136c8565b8a9088612d3f565b90506123ab817f00000000000000000000000000000000000000000000000000000000000000006125db565b93506123d7847f00000000000000000000000000000000000000000000000000000000000000006115e5565b6123e19084613517565b915050945094509450949050565b6000806000806000808888101561245e578615612414576124118d898b6125f0565b9c505b61241f8c898b6125f0565b9b5061242a8b611377565b6124338d611377565b61243d919061352a565b905061244a8b898b6125f0565b9a506124578a898b6125f0565b995061247d565b6124678b611377565b6124708d611377565b61247a919061352a565b90505b9b9c9a9b999a975050505050505050565b60008260000361249f57508461252f565b81156124f2576124d06124b28487613517565b6124bc85876115e5565b6124c6888a6115e5565b611d759190613517565b905060006124de8588611adb565b9050808210156124ec578091505b5061252f565b8285036125015750600061252f565b61252c61250e84876136c8565b61251885876125db565b612522888a6115e5565b611d7591906136c8565b90505b95945050505050565b600060016001607f1b0319821280612556575060016001607f1b0382135b156113a15760405163a5353be560e01b815260040160405180910390fd5b600080612582846000612d88565b61258d846000612d88565b612597919061352a565b905060008113156125b3576125ac8186613517565b94506125d2565b60008112156125d2576125c5816138f7565b6125cf90866136c8565b94505b50929392505050565b60006115de8383670de0b6b3a7640000612d3f565b600082600019048411830215820261260757600080fd5b5091020490565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611a22565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af11580156126e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061270c919061379c565b5050505050565b6000808061273461272c88670de0b6b3a76400006136c8565b8990876125f0565b9050861561225c5761274688886115e5565b915061224d8a8a846127608a670de0b6b3a76400006136c8565b8989612d9e565b6000806127748484612daf565b90925090508061278657612786611444565b5092915050565b6000816000036127a65750670de0b6b3a7640000611371565b826000036127b657506000611371565b60006127c183611377565b905060006127d66127d186611377565b612dee565b90508181026127ed670de0b6b3a764000082613968565b90506127f881613014565b9695505050505050565b60006115de83670de0b6b3a764000084612d3f565b60006115de83670de0b6b3a7640000846125f0565b600060016001607f1b038211156113a15760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612871906001600160801b031684612802565b905061289d7f000000000000000000000000000000000000000000000000000000000000000082613517565b6002546001600160801b03161115611aea576002547f0000000000000000000000000000000000000000000000000000000000000000906128e89083906001600160801b03166136c8565b6115de91906136c8565b6128fa6133ef565b60008061290684612c05565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129419190613913565b6040805180830381865af415801561295d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129819190613922565b9350905082612996575060009150612a659050565b60006129bd6129b88461016001518561014001516115e590919063ffffffff16565b611377565b6129dd6129b88561012001518661010001516125db90919063ffffffff16565b6129e7919061352a565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b4a9190613996565b935093509350935080612b665750600098975050505050505050565b868414612b9757612b7684611ab1565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bc857612ba783612538565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bf657612bd882611ab1565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c0d613441565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d0591166131a9565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d37929004166131a9565b905292915050565b6000826000190484118302158202612d5657600080fd5b50910281810615159190040190565b600080612d7688888888888861321f565b909250905080611da257611da2611444565b6000818313612d9757816115de565b5090919050565b600080612d76888888888888613300565b600080600083612dbe86611377565b612dc8919061352a565b90506000811215612de0576000809250925050612de7565b9150600190505b9250929050565b6000808213612e105760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e939084901c611377565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361302f57506000919050565b680755bf798b4a1bf1e58212613058576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906127f874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611377565b600080670de0b6b3a76400006131bd6105ca565b6131c79190613738565b90508083116131d75760006131e1565b6131e181846136c8565b91506115de613218670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613738565b8390612817565b600080600061323189898888886133c0565b9050868810156132485760008092509250506132f5565b9686900396613257888761278d565b97508781101561326e5760008092509250506132f5565b87810361327c818688612d3f565b9050670de0b6b3a764000081106132b0576132a96132a2670de0b6b3a764000089612802565b829061278d565b90506132c8565b6132c56132a2670de0b6b3a764000089612817565b90505b6132d28186612802565b9050898110156132ea576000809350935050506132f5565b899003925060019150505b965096945050505050565b600080600061331289898888886133c0565b905061332286611aab898b613517565b9750878110156133395760008092509250506132f5565b878103613347818688612d3f565b9050670de0b6b3a764000081106133745761336d6132a2670de0b6b3a764000089612802565b905061338c565b6133896132a2670de0b6b3a764000089612817565b90505b6133968186612802565b9050808a10156133ae576000809350935050506132f5565b90980398600198509650505050505050565b60006133cc858561278d565b6133e56133dd86611aab868b6125db565b859085612d3f565b61252c9190613517565b604051806101200160405280613403613441565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156134b857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156134e457600080fd5b8501606081880312156134f657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561137157611371613501565b818103600083128015838313168383128216171561278657612786613501565b6001600160a01b03811681146105af57600080fd5b60006020828403121561357157600080fd5b81356115de8161354a565b80151581146105af57600080fd5b60006020828403121561359c57600080fd5b81356115de8161357c565b6000808335601e198436030181126135be57600080fd5b83018035915067ffffffffffffffff8211156135d957600080fd5b602001915036819003821315612de757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061365160e0830184866135ee565b9a9950505050505050505050565b808201828112600083128015821682158216171561367f5761367f613501565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006136bb60c0830184866135ee565b9998505050505050505050565b8181038181111561137157611371613501565b6001600160701b0381811683821601908082111561278657612786613501565b6001600160801b0381811683821601908082111561278657612786613501565b60006020828403121561372d57600080fd5b81516115de8161354a565b808202811582820484141761137157611371613501565b6001600160801b0382811682821603908082111561278657612786613501565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561137157611371613501565b6000602082840312156137ae57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b6000826137da576137da6137b5565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506138718285516137df565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156138e657600080fd5b505080516020909101519092909150565b6000600160ff1b820161390c5761390c613501565b5060000390565b610180810161137182846137df565b6000806040838503121561393557600080fd5b8251915060208301516139478161357c565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613977576139776137b5565b600160ff1b82146000198414161561399157613991613501565b500590565b600080600080608085870312156139ac57600080fd5b84519350602085015192506040850151915060608501516134f68161357c56fea264697066735822122075769775d4ffea10a0a328f4f5c4be5f02c54cef7f1cd7d551cd656798d89b9f64736f6c63430008160033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
