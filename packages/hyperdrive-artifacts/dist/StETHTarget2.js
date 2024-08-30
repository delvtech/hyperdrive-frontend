export const StETHTarget2 = {
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
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004040380380620040408339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613b8c620004b4600039600050506000505060008181610c1001526116900152600050506000818160f8015281816103000152612dc70152600081816114a701528181611d7c01528181611ddf01528181612591015281816129ac015281816129e801528181612be00152612da10152600081816107be01528181610d7001528181610db201528181610ea40152818161131a015281816113790152612d7b0152600061199b015260008181611ac1015281816127120152818161278b0152612ee101526000818161098201528181610e250152818161141401528181611a95015261275f015260008181610e04015281816126de0152612e9d0152600081816107df01528181610d4e01528181610dd301528181610ec5015281816112f80152818161139a0152612ded0152600081816101d601528181610398015281816108ba0152613397015260008181610678015281816106f80152818161076e0152818161083a0152610872015260008181611660015281816117a70152612610015260005050613b8c6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c36600461362c565b61006d565b6040805192835260208301919091520160405180910390f35b61004161006836600461362c565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c1565b6000806100a461051a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d683610544565b6000806100e3888661057d565b909250905060006100f48383610652565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101375760405163211ddda360e11b815260040160405180910390fd5b86821015610158576040516342af972b60e01b815260040160405180910390fd5b6000610162610670565b90506101728184600460016106a1565b5060008060006101828787610d1f565b919a5091945090925090508b8810156101ae5760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c091906136a1565b909155506101d19050844283610f01565b6101fb7f0000000000000000000000000000000000000000000000000000000000000000856136a1565b98506102098389888c61103f565b600061021660018b6111d9565b905061022f8161022960208e018e6136c9565b8b61120e565b8d8a8a898e8561024260208301836136c9565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027f60408801602089016136f4565b8961028d60408a018a613711565b6040516102a09796959493929190613781565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102cc61051a565b600654610100900460ff16156102f5576040516321081abf60e01b815260040160405180910390fd5b6102fe83610544565b7f000000000000000000000000000000000000000000000000000000000000000086101561033f5760405163211ddda360e11b815260040160405180910390fd5b60006103496112b6565b90508481101561036c576040516342af972b60e01b815260040160405180910390fd5b6000610376610670565b9050600061038f610385610670565b84600460016106a1565b905060006103bd7f0000000000000000000000000000000000000000000000000000000000000000846136a1565b90506000806000806103d08e89886112c9565b60098054949850929650909450925083916000906103ef9084906136a1565b909155506104009050874283610f01565b50600061040e84898d61144f565b9050808d10156104315760405163c972651760e01b815260040160405180910390fd5b61043b818c61057d565b508e905061044b81858b89611481565b60006104586002886111d9565b90508c6104728261046c60208401846136c9565b8561120e565b858b868461048360208601866136c9565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104c060408b0160208c016136f4565b6104d4896104ce8a8d6137c2565b90610652565b8d6104e260408e018e613711565b6040516104f69897969594939291906137d5565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361053d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061055360208301836136c9565b6001600160a01b03160361057a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b8160008061059160408501602086016136f4565b156105b6576105ac856105a76040870187613711565b611635565b90935090506105ce565b50346105ce856105c96040870187613711565b611785565b6105d66112b6565b9150801561064957604051600090339083908381818185875af1925050503d8060008114610620576040519150601f19603f3d011682016040523d82523d6000602084013e610625565b606091505b5050905080610647576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106678383670de0b6b3a7640000611822565b90505b92915050565b600061069c427f0000000000000000000000000000000000000000000000000000000000000000611840565b905090565b600084815260086020526040812060018101546001600160801b03161515806106c957504286115b156106e257600101546001600160801b03169050610d17565b60008060006106ef610670565b9050600061071d7f00000000000000000000000000000000000000000000000000000000000000008b6136a1565b90505b81811015610793576000818152600860205260409020600101546001600160801b0316801561076b576000828152600860205260409020549094506001600160801b03169250610793565b507f000000000000000000000000000000000000000000000000000000000000000001610720565b83600003610806578893506108036107a9611856565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611877565b92505b5061081083611897565b6001850180546001600160801b0319166001600160801b039290921691909117905561086661085f7f00000000000000000000000000000000000000000000000000000000000000008b6137c2565b8a84610f01565b6108a48961089e6108977f0000000000000000000000000000000000000000000000000000000000000000836136a1565b42906118c5565b84610f01565b6108ad886118da565b50600090506008816108df7f00000000000000000000000000000000000000000000000000000000000000008d6137c2565b815260208101919091526040016000908120600101546001600160801b0316915061090b60028c6111d9565b6000818152600b60205260408120549192508c8c8315610a51576001925060008061093a86898d866000611a7e565b91509150806009600082825461095091906136a1565b9091555061096c90508660008461096681611b4d565b88611b77565b61097681836136a1565b91506109a686838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cf1565b91506109ba6109b58385610652565b611d3b565b600680546002906109db9084906201000090046001600160701b031661381d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a0882611897565b60068054601090610a2a908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a5e6001846111d9565b6000818152600b60205260409020549091508015610b6d5760019450600080610a8b838b8f886001611a7e565b915091508060096000828254610aa191906136a1565b90915550610abd905083600084610ab781611b4d565b8a611d65565b610ac781836137c2565b9150610ad66109b58387610652565b60068054600290610af79084906201000090046001600160701b031661381d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b2482611897565b60068054601090610b46908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ba757610b99610b7f87611b4d565b610b8883611b4d565b610b92919061385d565b6000611f56565b8e610ba48482611f95565b50505b6000610bb28461218f565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c90919061387d565b90506001600160a01b03811615610d0557610d025a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906122db565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d2f611856565b600254909150610d94908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612366565b600254909450610df7908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611877565b9150610e4e8785610e49857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612392565b6123f7565b15610e5b57610e5b612439565b610e6787858885612452565b91965094509250670de0b6b3a7640000610ee9610e8487846136a1565b600254610ea2908890600160801b90046001600160801b03166137c2565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611877565b1115610ef757610ef7612439565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f2d5750505050565b6000848152600860205260408120546001600160801b031690819003610f8757610f5683611897565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611005565b610fd8610fd3670de0b6b3a7640000610fa088866137c2565b610faa919061389a565b85670de0b6b3a7640000610fbe878a6137c2565b610fc8919061389a565b85929190600161249e565b611897565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61100e84611897565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b0316611081610fd38261106b670de0b6b3a76400008661389a565b6005546001600160801b0316919088600161249e565b600580546001600160801b0319166001600160801b03929092169190911790556110aa85611897565b600280546000906110c59084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110f284611897565b60028054601090611114908490600160801b90046001600160801b03166138b1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114184611897565b61114b908261383d565b600380546001600160801b03808416600160801b0291161790559050600061117283612546565b90506111908161118187611b4d565b61118b90846138d1565b611f56565b6111998461258a565b6111a5576111a5612439565b60006111b0856125ea565b9050806111d057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112035760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b0386168452909152812080548392906112409084906136a1565b90915550506000838152600b6020526040812080548392906112639084906136a1565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061069c670de0b6b3a76400006125f7565b60008060008060006112d9611856565b60025490915061133e908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612683565b93508761134b85896126a4565b111561135957611359612439565b60025460009081906113be908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611877565b93506113d48a670de0b6b3a7640000868c6126b9565b509193509091506113e7905081836137c2565b6113f190876137c2565b95508861143e816114388d611406868c6137c2565b8d61141187826127c7565b877f00000000000000000000000000000000000000000000000000000000000000006127dd565b906126a4565b975090945050505093509350935093565b600061146160408301602084016136f4565b1561146d57508261147a565b6114778484612802565b90505b9392505050565b6002546001600160801b03168381101561149d5761149d612439565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114d5908390600f0b612817565b10156114e3576114e3612439565b60045461152d90610fd390600160801b90046001600160801b0316611510670de0b6b3a76400008661389a565b600554600160801b90046001600160801b0316919089600161249e565b600580546001600160801b03928316600160801b02921691909117905561155381611897565b600280546001600160801b0319166001600160801b039290921691909117905561157c85611897565b6002805460109061159e908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115cb85611897565b600480546010906115ed908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061161c83612546565b90506111908161162b88611b4d565b61118b908461385d565b60008084341015611659576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a1903eab867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611710919061387d565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af1158015611755573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061177a91906138f9565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af11580156117f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181c91906138f9565b50505050565b600082600019048411830215820261183957600080fd5b5091020490565b600061184c8284613928565b61066790846137c2565b60025460045460009161069c916001600160801b0390911690600f0b612817565b600061188e82611888858888611822565b9061283d565b95945050505050565b60006001600160801b038211156118c157604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116118d45782610667565b50919050565b60065460009081906118fd908490600160801b90046001600160801b0316610652565b6006546201000090046001600160701b03169250905081811115611a7957600061192783836137c2565b9050611936610fd382866128a8565b60068054601090611958908490600160801b90046001600160801b03166138b1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611991858361280290919063ffffffff16565b905060006119bf827f0000000000000000000000000000000000000000000000000000000000000000610652565b905080600960008282546119d391906136a1565b909155506119e3905081836137c2565b91506119ee82611897565b60028054600090611a099084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a36826128bd565b60048054600090611a4b908490600f0b61393c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a8b8785612802565b91506000611ab9837f0000000000000000000000000000000000000000000000000000000000000000610652565b9050611ae5817f0000000000000000000000000000000000000000000000000000000000000000610652565b91508315611b0857611af782826137c2565b611b0190846137c2565b9250611b1f565b611b1282826137c2565b611b1c90846136a1565b92505b86861015611b4257611b32838789611822565b9250611b3f828789611822565b91505b509550959350505050565b60006001600160ff1b038211156118c15760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611bc0610fd382611ba3670de0b6b3a76400008661389a565b600554600160801b90046001600160801b031691908a600061249e565b600580546001600160801b03928316600160801b029216919091179055611be686611897565b611bf090826138b1565b600480546001600160801b03928316600160801b029216919091179055611c1684611897565b60028054600090611c319084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c5e836128e7565b60048054600090611c73908490600f0b61393c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ca385611897565b60028054601090611cc5908490600160801b90046001600160801b03166138b1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d0984611d038a888a611822565b90612802565b9050611d16888486611822565b611d2090826136a1565b905086811115611d305786810391505b509695505050505050565b60006001600160701b038211156118c15760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611da757507f0000000000000000000000000000000000000000000000000000000000000000611da585836137c2565b105b15611db457611db4612439565b6004549084900390600f0b611dc9848261385d565b905083611dd586611b4d565b138015611e0a57507f0000000000000000000000000000000000000000000000000000000000000000611e088383612817565b105b15611e1757611e17612439565b600354600160801b90046001600160801b0316611e59610fd382611e43670de0b6b3a76400008861389a565b6005546001600160801b031691908c600061249e565b600580546001600160801b0319166001600160801b0392909216919091179055611e8388826137c2565b9050611e8e81611897565b600380546001600160801b03928316600160801b029216919091179055611eb483611897565b600280546001600160801b0319166001600160801b0392909216919091179055611edd826128e7565b600480546001600160801b0319166001600160801b0392909216919091179055611f0687611897565b60028054601090611f28908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f7190610fd3906001600160801b03168484612923565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611fe0916001600160801b0316906137c2565b905080600003611ff457600191505061066a565b6000611fff8561298a565b9050806000036120145760019250505061066a565b600080612022838589612a26565b915091508061203857600094505050505061066a565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120749291906139e7565b6040805180830381865af4158015612090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b49190613a5d565b915091506120d26120c482611b4d565b6120cd90613a81565b612b9a565b9250826120e8576000965050505050505061066a565b6120f182611897565b6007805460009061210c9084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061213981611897565b6007805460109061215b908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6121b887612d32565b6040518263ffffffff1660e01b81526004016121d49190613a9d565b6040805180830381865af41580156121f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122149190613aac565b915091508061222a575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612290916136a1565b61229a91906137c2565b9050806000036122b257506000958695509350505050565b60008087116122c25760006122cd565b6122cd848884611822565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561230157612301613adc565b6040519080825280601f01601f19166020018201604052801561232b576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561234c578692505b828152826000602083013e90999098509650505050505050565b600061238787878761238088670de0b6b3a76400006137c2565b8787612e6c565b979650505050505050565b60006114776123d36123ac84670de0b6b3a76400006137c2565b611438670de0b6b3a76400006123c2818a6128a8565b6123cc91906137c2565b87906126a4565b6123e590670de0b6b3a76400006136a1565b611d0384670de0b6b3a76400006137c2565b60008061242e85612406611856565b61241091906136a1565b600254610ea2908790600160801b90046001600160801b03166137c2565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612465898789612e8f565b909250905061247482896137c2565b9750600061248382888a611822565b905061248f818b6137c2565b9a989950979650505050505050565b6000826000036124af57508461188e565b8115612502576124e06124c284876136a1565b6124cc8587610652565b6124d6888a610652565b611d0391906136a1565b905060006124ee85886118c5565b9050808210156124fc578091505b5061188e565b8285036125115750600061188e565b61253c61251e84876137c2565b61252885876126a4565b612532888a610652565b611d0391906137c2565b9695505050505050565b600061256e600b600061255a6002866111d9565b815260200190815260200160002054611b4d565b612580600b600061255a6001876111d9565b61066a919061385d565b60006125b67f0000000000000000000000000000000000000000000000000000000000000000836126a4565b6003546125cc91906001600160801b03166136a1565b6002546125e2906001600160801b031684610652565b101592915050565b600061066a826004611f95565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa15801561265f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066a91906138f9565b600061238787878761269d88670de0b6b3a76400006137c2565b8787612f0f565b60006106678383670de0b6b3a7640000612f20565b600080808061270a87866127038b6114386126dc8c670de0b6b3a76400006137c2565b7f0000000000000000000000000000000000000000000000000000000000000000906126a4565b9190612f20565b9350612736847f0000000000000000000000000000000000000000000000000000000000000000610652565b9150600061275761274f89670de0b6b3a76400006137c2565b8a9088612f20565b9050612783817f00000000000000000000000000000000000000000000000000000000000000006126a4565b93506127af847f0000000000000000000000000000000000000000000000000000000000000000610652565b6127b990846136a1565b915050945094509450949050565b60008183116127d65781610667565b5090919050565b6000806127f5846127ef8a888a612f20565b906128a8565b9050611d16888486612f20565b600061066783670de0b6b3a764000084611822565b6000806128248484612f46565b90925090508061283657612836612439565b5092915050565b6000816000036128565750670de0b6b3a764000061066a565b826000036128665750600061066a565b600061287183611b4d565b9050600061288661288186611b4d565b612f82565b905081810261289d670de0b6b3a764000082613af2565b905061253c816131a8565b600061066783670de0b6b3a764000084612f20565b600060016001607f1b038211156118c15760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612905575060016001607f1b0382135b156118c15760405163a5353be560e01b815260040160405180910390fd5b60008061293184600061333d565b61293c84600061333d565b612946919061385d565b905060008113156129625761295b81866136a1565b9450612981565b60008112156129815761297481613a81565b61297e90866137c2565b94505b50929392505050565b60035460009081906129a5906001600160801b0316846128a8565b90506129d17f0000000000000000000000000000000000000000000000000000000000000000826136a1565b6002546001600160801b031611156118d4576002547f000000000000000000000000000000000000000000000000000000000000000090612a1c9083906001600160801b03166137c2565b61147a91906137c2565b612a2e613579565b600080612a3a84612d32565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a759190613a9d565b6040805180830381865af4158015612a91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ab59190613aac565b9350905082612aca57506000915061177d9050565b6000612af1612aec84610160015185610140015161065290919063ffffffff16565b611b4d565b612b11612aec8561012001518661010001516126a490919063ffffffff16565b612b1b919061385d565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c779190613b20565b935093509350935080612c935750600098975050505050505050565b868414612cc457612ca384611897565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cf557612cd4836128e7565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d2357612d0582611897565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d3a6135cb565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e32911661334c565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e649290041661334c565b905292915050565b600080612e7d8888888888886133c2565b909250905080611d3057611d30612439565b600080612ed98561143885817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612ecf818c6128a8565b61143891906137c2565b9150612f05827f0000000000000000000000000000000000000000000000000000000000000000610652565b9050935093915050565b600080612e7d88888888888861348a565b6000826000190484118302158202612f3757600080fd5b50910281810615159190040190565b600080600083612f5586611b4d565b612f5f919061385d565b90506000811215612f7757600080925092505061064b565b946001945092505050565b6000808213612fa45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130279084901c611b4d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131c357506000919050565b680755bf798b4a1bf1e582126131ec576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061253c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b4d565b60008183136127d65781610667565b600080670de0b6b3a7640000613360610670565b61336a919061389a565b905080831161337a576000613384565b61338481846137c2565b915061147a6133bb670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061389a565b8390612802565b60008060006133d4898988888861354a565b90506133ee866118886133e78a8d6136a1565b8790610652565b98506133fb858a86611822565b98508881101561341257600080925092505061347f565b888103670de0b6b3a7640000811061344757613440613439670de0b6b3a7640000896128a8565b829061283d565b905061345f565b61345c613439670de0b6b3a764000089612802565b90505b808910156134755760008093509350505061347f565b8803925060019150505b965096945050505050565b600080600061349c898988888861354a565b90506134ac86611888898b6136a1565b9750878110156134c357600080925092505061347f565b8781036134d1818688612f20565b9050670de0b6b3a764000081106134fe576134f7613439670de0b6b3a7640000896128a8565b9050613516565b613513613439670de0b6b3a764000089612802565b90505b61352081866128a8565b9050808a10156135385760008093509350505061347f565b90980398600198509650505050505050565b6000613556858561283d565b61356f61356786611888868b6126a4565b859085612f20565b61253c91906136a1565b60405180610120016040528061358d6135cb565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561364257600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561366e57600080fd5b85016060818803121561368057600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561066a5761066a61368b565b6001600160a01b038116811461057a57600080fd5b6000602082840312156136db57600080fd5b813561147a816136b4565b801515811461057a57600080fd5b60006020828403121561370657600080fd5b813561147a816136e6565b6000808335601e1984360301811261372857600080fd5b83018035915067ffffffffffffffff82111561374357600080fd5b60200191503681900382131561064b57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006137b560c083018486613758565b9998505050505050505050565b8181038181111561066a5761066a61368b565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061380f60e083018486613758565b9a9950505050505050505050565b6001600160701b038181168382160190808211156128365761283661368b565b6001600160801b038181168382160190808211156128365761283661368b565b81810360008312801583831316838312821617156128365761283661368b565b60006020828403121561388f57600080fd5b815161147a816136b4565b808202811582820484141761066a5761066a61368b565b6001600160801b038281168282160390808211156128365761283661368b565b80820182811260008312801582168215821617156138f1576138f161368b565b505092915050565b60006020828403121561390b57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261393757613937613912565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561066a5761066a61368b565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139fb828551613969565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a7057600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a9657613a9661368b565b5060000390565b610180810161066a8284613969565b60008060408385031215613abf57600080fd5b825191506020830151613ad1816136e6565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613b0157613b01613912565b600160ff1b821460001984141615613b1b57613b1b61368b565b500590565b60008060008060808587031215613b3657600080fd5b8451935060208501519250604085015191506060850151613680816136e656fea2646970667358221220a93250ef554bd26e832e1f7587e371e36eaa9d5d9dc46211434186c49b5c58bd64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
