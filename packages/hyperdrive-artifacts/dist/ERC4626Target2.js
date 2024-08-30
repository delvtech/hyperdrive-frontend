export const ERC4626Target2 = {
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
            "name": "AddressEmptyCode",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "AddressInsufficientBalance",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
            "name": "FailedInnerCall",
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
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
    bytecode: '0x6102806040523480156200001257600080fd5b5060405162004386380380620043868339810160408190526200003591620001ae565b600160005581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002eb565b60405161020081016001600160401b03811182821017156200011657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013457600080fd5b919050565b6000608082840312156200014c57600080fd5b604051608081016001600160401b03811182821017156200017d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610280811215620001c457600080fd5b61026080821215620001d557600080fd5b620001df620000e4565b9150620001ec856200011c565b8252620001fc602086016200011c565b60208301526200020f604086016200011c565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200027a8187016200011c565b908301526101806200028e8682016200011c565b908301526101a0620002a28682016200011c565b908301526101c0620002b68682016200011c565b908301526101e0620002cb8787830162000139565b8184015250819350620002e08186016200011c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613ec7620004bf60003960005050600050506000610c4101526000505060008181610100015281816103100152612e1e0152600081816114d801528181611d3601528181611d990152818161254b01528181612a0301528181612a3f01528181612c370152612df80152600081816107ef01528181610da101528181610de301528181610ed50152818161134b015281816113aa0152612dd201526000611955015260008181611a7b0152818161266c015281816126e50152612f380152600081816109b301528181610e560152818161144501528181611a4f01526126b9015260008181610e35015281816126380152612ef401526000818161081001528181610d7f01528181610e0401528181610ef601528181611329015281816113cb0152612e440152600081816101de015281816103a8015281816108eb01526135650152600081816106a9015281816107290152818161079f0152818161086b01526108a30152600081816116a30152818161171d015281816117af01526125b801526000818161167601526116d70152613ec76000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c36600461391b565b61006d565b6040805192835260208301919091520160405180910390f35b61004161006836600461391b565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610d50565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600960008282546101c89190613990565b909155506101d99050844283610f32565b6102037f000000000000000000000000000000000000000000000000000000000000000085613990565b98506102118389888c611070565b600061021e60018b61120a565b90506102378161023160208e018e6139b8565b8b61123f565b8d8a8a898e8561024a60208301836139b8565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661028760408801602089016139e3565b8961029560408a018a613a00565b6040516102a89796959493929190613a70565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b60006103596112e7565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613990565b90506000806000806103e08e89886112fa565b60098054949850929650909450925083916000906103ff908490613990565b909155506104109050874283610f32565b50600061041e84898d611480565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b896114b2565b600061046860028861120a565b90508c6104828261047c60208401846139b8565b8561123f565b858b868461049360208601866139b8565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c016139e3565b6104e4896104de8a8d613ab1565b90610683565b8d6104f260408e018e613a00565b604051610506989796959493929190613ac4565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b600061058460208301836139b8565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c260408501602086016139e3565b156105e7576105dd856105d86040870187613a00565b611666565b90935090506105ff565b50346105ff856105fa6040870187613a00565b6117a2565b6106076112e7565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a76400006117dc565b90505b92915050565b60006106cd427f00000000000000000000000000000000000000000000000000000000000000006117fa565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610d48565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613990565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611810565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611831565b92505b5061084183611851565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613ab1565b8a84610f32565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613990565b429061187f565b84610f32565b6108de88611894565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613ab1565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c61120a565b6000818152600b60205260408120549192508c8c8315610a82576001925060008061096b86898d866000611a38565b9150915080600960008282546109819190613990565b9091555061099d90508660008461099781611b07565b88611b31565b6109a78183613990565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cab565b91506109eb6109e68385610683565b611cf5565b60068054600290610a0c9084906201000090046001600160701b0316613b0c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3982611851565b60068054601090610a5b908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f60018461120a565b6000818152600b60205260409020549091508015610b9e5760019450600080610abc838b8f886001611a38565b915091508060096000828254610ad29190613990565b90915550610aee905083600084610ae881611b07565b8a611d1f565b610af88183613ab1565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613b0c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5582611851565b60068054601090610b77908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611b07565b610bb983611b07565b610bc39190613b4c565b6000611f10565b8e610bd58482611f4f565b50505b6000610be384612149565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a260008f905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190613b6c565b90506001600160a01b03811615610d3657610d335a604051336024820152604481018a90528415156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612295565b50505b509b9d50505050505050505050505050505b949350505050565b6000806000806000610d60611810565b600254909150610dc5908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612320565b600254909450610e28908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611831565b9150610e7f8785610e7a857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061234c565b6123b1565b15610e8c57610e8c6123f3565b610e988785888561240c565b91965094509250670de0b6b3a7640000610f1a610eb58784613990565b600254610ed3908890600160801b90046001600160801b0316613ab1565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611831565b1115610f2857610f286123f3565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610f5e5750505050565b6000848152600860205260408120546001600160801b031690819003610fb857610f8783611851565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611036565b611009611004670de0b6b3a7640000610fd18886613ab1565b610fdb9190613b89565b85670de0b6b3a7640000610fef878a613ab1565b610ff99190613b89565b859291906001612458565b611851565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61103f84611851565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b26110048261109c670de0b6b3a764000086613b89565b6005546001600160801b03169190886001612458565b600580546001600160801b0319166001600160801b03929092169190911790556110db85611851565b600280546000906110f69084906001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061112384611851565b60028054601090611145908490600160801b90046001600160801b0316613ba0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061117284611851565b61117c9082613b2c565b600380546001600160801b03808416600160801b029116179055905060006111a383612500565b90506111c1816111b287611b07565b6111bc9084613bc0565b611f10565b6111ca84612544565b6111d6576111d66123f3565b60006111e1856125a4565b90508061120157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156112345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600a602090815260408083206001600160a01b038616845290915281208054839290611271908490613990565b90915550506000838152600b602052604081208054839290611294908490613990565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a76400006125b1565b600080600080600061130a611810565b60025490915061136f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006125dd565b93508761137c85896125fe565b111561138a5761138a6123f3565b60025460009081906113ef908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611831565b93506114058a670de0b6b3a7640000868c612613565b5091935090915061141890508183613ab1565b6114229087613ab1565b95508861146f816114698d611437868c613ab1565b8d6114428782612721565b877f0000000000000000000000000000000000000000000000000000000000000000612737565b906125fe565b975090945050505093509350935093565b600061149260408301602084016139e3565b1561149e5750826114ab565b6114a8848461275c565b90505b9392505050565b6002546001600160801b0316838110156114ce576114ce6123f3565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611506908390600f0b612771565b1015611514576115146123f3565b60045461155e9061100490600160801b90046001600160801b0316611541670de0b6b3a764000086613b89565b600554600160801b90046001600160801b03169190896001612458565b600580546001600160801b03928316600160801b02921691909117905561158481611851565b600280546001600160801b0319166001600160801b03929092169190911790556115ad85611851565b600280546010906115cf908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115fc85611851565b6004805460109061161e908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164d83612500565b90506111c18161165c88611b07565b6111bc9084613b4c565b60008061169e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612797565b6116fe7f00000000000000000000000000000000000000000000000000000000000000006116cd876001613990565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612804565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af115801561176e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117929190613be8565b925060009150505b935093915050565b6117d76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612797565b505050565b60008260001904841183021582026117f357600080fd5b5091020490565b60006118068284613c17565b6106989084613ab1565b6002546004546000916106cd916001600160801b0390911690600f0b612771565b6000611848826118428588886117dc565b90612894565b95945050505050565b60006001600160801b0382111561187b57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161188e5782610698565b50919050565b60065460009081906118b7908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a335760006118e18383613ab1565b90506118f061100482866128ff565b60068054601090611912908490600160801b90046001600160801b0316613ba0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061194b858361275c90919063ffffffff16565b90506000611979827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050806009600082825461198d9190613990565b9091555061199d90508183613ab1565b91506119a882611851565b600280546000906119c39084906001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119f082612914565b60048054600090611a05908490600f0b613c2b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a45878561275c565b91506000611a73837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611a9f817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611ac257611ab18282613ab1565b611abb9084613ab1565b9250611ad9565b611acc8282613ab1565b611ad69084613990565b92505b86861015611afc57611aec8387896117dc565b9250611af98287896117dc565b91505b509550959350505050565b60006001600160ff1b0382111561187b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b7a61100482611b5d670de0b6b3a764000086613b89565b600554600160801b90046001600160801b031691908a6000612458565b600580546001600160801b03928316600160801b029216919091179055611ba086611851565b611baa9082613ba0565b600480546001600160801b03928316600160801b029216919091179055611bd084611851565b60028054600090611beb9084906001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c188361293e565b60048054600090611c2d908490600f0b613c2b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c5d85611851565b60028054601090611c7f908490600160801b90046001600160801b0316613ba0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611cc384611cbd8a888a6117dc565b9061275c565b9050611cd08884866117dc565b611cda9082613990565b905086811115611cea5786810391505b509695505050505050565b60006001600160701b0382111561187b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d6157507f0000000000000000000000000000000000000000000000000000000000000000611d5f8583613ab1565b105b15611d6e57611d6e6123f3565b6004549084900390600f0b611d838482613b4c565b905083611d8f86611b07565b138015611dc457507f0000000000000000000000000000000000000000000000000000000000000000611dc28383612771565b105b15611dd157611dd16123f3565b600354600160801b90046001600160801b0316611e1361100482611dfd670de0b6b3a764000088613b89565b6005546001600160801b031691908c6000612458565b600580546001600160801b0319166001600160801b0392909216919091179055611e3d8882613ab1565b9050611e4881611851565b600380546001600160801b03928316600160801b029216919091179055611e6e83611851565b600280546001600160801b0319166001600160801b0392909216919091179055611e978261293e565b600480546001600160801b0319166001600160801b0392909216919091179055611ec087611851565b60028054601090611ee2908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f2b90611004906001600160801b0316848461297a565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b6000908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f9a916001600160801b031690613ab1565b905080600003611fae57600191505061069b565b6000611fb9856129e1565b905080600003611fce5760019250505061069b565b600080611fdc838589612a7d565b9150915080611ff257600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161202e929190613cd6565b6040805180830381865af415801561204a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061206e9190613d4c565b9150915061208c61207e82611b07565b61208790613d70565b612bf1565b9250826120a2576000965050505050505061069b565b6120ab82611851565b600780546000906120c69084906001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120f381611851565b60078054601090612115908490600160801b90046001600160801b0316613b2c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61217287612d89565b6040518263ffffffff1660e01b815260040161218e9190613d8c565b6040805180830381865af41580156121aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ce9190613d9b565b91509150806121e4575060009485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435460008080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161224a91613990565b6122549190613ab1565b90508060000361226c57506000958695509350505050565b600080871161227c576000612287565b6122878488846117dc565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156122bb576122bb613dcb565b6040519080825280601f01601f1916602001820160405280156122e5576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612306578692505b828152826000602083013e90999098509650505050505050565b600061234187878761233a88670de0b6b3a7640000613ab1565b8787612ec3565b979650505050505050565b60006114a861238d61236684670de0b6b3a7640000613ab1565b611469670de0b6b3a764000061237c818a6128ff565b6123869190613ab1565b87906125fe565b61239f90670de0b6b3a7640000613990565b611cbd84670de0b6b3a7640000613ab1565b6000806123e8856123c0611810565b6123ca9190613990565b600254610ed3908790600160801b90046001600160801b0316613ab1565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080600080600061241f898789612ee6565b909250905061242e8289613ab1565b9750600061243d82888a6117dc565b9050612449818b613ab1565b9a989950979650505050505050565b600082600003612469575084611848565b81156124bc5761249a61247c8487613990565b6124868587610683565b612490888a610683565b611cbd9190613990565b905060006124a8858861187f565b9050808210156124b6578091505b50611848565b8285036124cb57506000611848565b6124f66124d88487613ab1565b6124e285876125fe565b6124ec888a610683565b611cbd9190613ab1565b9695505050505050565b6000612528600b600061251460028661120a565b815260200190815260200160002054611b07565b61253a600b600061251460018761120a565b61069b9190613b4c565b60006125707f0000000000000000000000000000000000000000000000000000000000000000836125fe565b60035461258691906001600160801b0316613990565b60025461259c906001600160801b031684610683565b101592915050565b600061069b826004611f4f565b600061069b7f000000000000000000000000000000000000000000000000000000000000000083612f66565b60006123418787876125f788670de0b6b3a7640000613ab1565b8787612fd2565b60006106988383670de0b6b3a7640000612fe3565b6000808080612664878661265d8b6114696126368c670de0b6b3a7640000613ab1565b7f0000000000000000000000000000000000000000000000000000000000000000906125fe565b9190612fe3565b9350612690847f0000000000000000000000000000000000000000000000000000000000000000610683565b915060006126b16126a989670de0b6b3a7640000613ab1565b8a9088612fe3565b90506126dd817f00000000000000000000000000000000000000000000000000000000000000006125fe565b9350612709847f0000000000000000000000000000000000000000000000000000000000000000610683565b6127139084613990565b915050945094509450949050565b60008183116127305781610698565b5090919050565b60008061274f846127498a888a612fe3565b906128ff565b9050611cd0888486612fe3565b600061069883670de0b6b3a7640000846117dc565b60008061277e8484613009565b909250905080612790576127906123f3565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127fe9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613045565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261285584826130ad565b6127fe576040516001600160a01b0384811660248301526000604483015261288a91869182169063095ea7b3906064016127cc565b6127fe8482613045565b6000816000036128ad5750670de0b6b3a764000061069b565b826000036128bd5750600061069b565b60006128c883611b07565b905060006128dd6128d886611b07565b613150565b90508181026128f4670de0b6b3a764000082613de1565b90506124f681613376565b600061069883670de0b6b3a764000084612fe3565b600060016001607f1b0382111561187b5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061295c575060016001607f1b0382135b1561187b5760405163a5353be560e01b815260040160405180910390fd5b60008061298884600061350b565b61299384600061350b565b61299d9190613b4c565b905060008113156129b9576129b28186613990565b94506129d8565b60008112156129d8576129cb81613d70565b6129d59086613ab1565b94505b50929392505050565b60035460009081906129fc906001600160801b0316846128ff565b9050612a287f000000000000000000000000000000000000000000000000000000000000000082613990565b6002546001600160801b0316111561188e576002547f000000000000000000000000000000000000000000000000000000000000000090612a739083906001600160801b0316613ab1565b6114ab9190613ab1565b612a85613868565b600080612a9184612d89565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612acc9190613d8c565b6040805180830381865af4158015612ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0c9190613d9b565b9350905082612b2157506000915061179a9050565b6000612b48612b4384610160015185610140015161068390919063ffffffff16565b611b07565b612b68612b438561012001518661010001516125fe90919063ffffffff16565b612b729190613b4c565b604080516101208101825285815260208082019590955260008052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612caa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cce9190613e0f565b935093509350935080612cea5750600098975050505050505050565b868414612d1b57612cfa84611851565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d4c57612d2b8361293e565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d7a57612d5c82611851565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d916138ba565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e89911661351a565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612ebb9290041661351a565b905292915050565b600080612ed4888888888888613590565b909250905080611cea57611cea6123f3565b600080612f308561146985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f26818c6128ff565b6114699190613ab1565b9150612f5c827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a90602401602060405180830381865afa158015612fae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613be8565b600080612ed4888888888888613658565b6000826000190484118302158202612ffa57600080fd5b50910281810615159190040190565b60008060008361301886611b07565b6130229190613b4c565b9050600081121561303a57600080925092505061067c565b946001945092505050565b600061305a6001600160a01b03841683613718565b9050805160001415801561307f57508080602001905181019061307d9190613e45565b155b156117d757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516130ca9190613e62565b6000604051808303816000865af19150503d8060008114613107576040519150601f19603f3d011682016040523d82523d6000602084013e61310c565b606091505b50915091508180156131365750805115806131365750808060200190518101906131369190613e45565b80156118485750505050506001600160a01b03163b151590565b60008082136131725760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131f59084901c611b07565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361339157506000919050565b680755bf798b4a1bf1e582126133ba576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906124f674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b07565b60008183136127305781610698565b600080670de0b6b3a764000061352e6106a1565b6135389190613b89565b9050808311613548576000613552565b6135528184613ab1565b91506114ab613589670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b89565b839061275c565b60008060006135a28989888888613726565b90506135bc866118426135b58a8d613990565b8790610683565b98506135c9858a866117dc565b9850888110156135e057600080925092505061364d565b888103670de0b6b3a764000081106136155761360e613607670de0b6b3a7640000896128ff565b8290612894565b905061362d565b61362a613607670de0b6b3a76400008961275c565b90505b808910156136435760008093509350505061364d565b8803925060019150505b965096945050505050565b600080600061366a8989888888613726565b905061367a86611842898b613990565b97508781101561369157600080925092505061364d565b87810361369f818688612fe3565b9050670de0b6b3a764000081106136cc576136c5613607670de0b6b3a7640000896128ff565b90506136e4565b6136e1613607670de0b6b3a76400008961275c565b90505b6136ee81866128ff565b9050808a10156137065760008093509350505061364d565b90980398600198509650505050505050565b606061069883836000613755565b60006137328585612894565b61374b61374386611842868b6125fe565b859085612fe3565b6124f69190613990565b60608147101561377a5760405163cd78605960e01b81523060048201526024016130a4565b600080856001600160a01b031684866040516137969190613e62565b60006040518083038185875af1925050503d80600081146137d3576040519150601f19603f3d011682016040523d82523d6000602084013e6137d8565b606091505b50915091506124f68683836060826137f8576137f38261383f565b6114ab565b815115801561380f57506001600160a01b0384163b155b1561383857604051639996b31560e01b81526001600160a01b03851660048201526024016130a4565b50806114ab565b80511561384f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061387c6138ba565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561393157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561395d57600080fd5b85016060818803121561396f57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b61397a565b6001600160a01b03811681146105ab57600080fd5b6000602082840312156139ca57600080fd5b81356114ab816139a3565b80151581146105ab57600080fd5b6000602082840312156139f557600080fd5b81356114ab816139d5565b6000808335601e19843603018112613a1757600080fd5b83018035915067ffffffffffffffff821115613a3257600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613aa460c083018486613a47565b9998505050505050505050565b8181038181111561069b5761069b61397a565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613afe60e083018486613a47565b9a9950505050505050505050565b6001600160701b038181168382160190808211156127905761279061397a565b6001600160801b038181168382160190808211156127905761279061397a565b81810360008312801583831316838312821617156127905761279061397a565b600060208284031215613b7e57600080fd5b81516114ab816139a3565b808202811582820484141761069b5761069b61397a565b6001600160801b038281168282160390808211156127905761279061397a565b8082018281126000831280158216821582161715613be057613be061397a565b505092915050565b600060208284031215613bfa57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613c2657613c26613c01565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b61397a565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613cea828551613c58565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613d5f57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613d8557613d8561397a565b5060000390565b610180810161069b8284613c58565b60008060408385031215613dae57600080fd5b825191506020830151613dc0816139d5565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613df057613df0613c01565b600160ff1b821460001984141615613e0a57613e0a61397a565b500590565b60008060008060808587031215613e2557600080fd5b845193506020850151925060408501519150606085015161396f816139d5565b600060208284031215613e5757600080fd5b81516114ab816139d5565b6000825160005b81811015613e835760208186018101518583015201613e69565b50600092019182525091905056fea2646970667358221220b00d306858f2ac7be55ef35aef98b17e657e1ef98a403d06616ba59b2e4b363164736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
