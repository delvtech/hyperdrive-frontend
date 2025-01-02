export const CornTarget2 = {
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
                },
                {
                    "name": "__cornSilo",
                    "type": "address",
                    "internalType": "contract ICornSilo"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004257380380620042578339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613d9e620004b95f395f81816116f8015261179b01525f50505f50505f610c2801525f50505f818160f9015281816103020152612dea01525f818161152f01528181611d7201528181611dd50152818161255c015281816129da01528181612a1601528181612c070152612dc401525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612d9e01525f61199c01525f8181611abd0152818161264d015281816126c50152612f0201525f81816109a301528181610e370152818161141501528181611a91015261269901525f8181610e16015281816126190152612ebe01525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612e1001525f81816101d301528181610396015281816108e1015261348e01525f81816106a7015281816107230152818161079701528181610862015261089a01525f50505f81816116cb0152818161172c015261176a0152613d9e5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613822565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613822565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613890565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613890565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e6138b7565b8b611217565b8d8a8a898e8561023e60208301836138b7565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b60408801602089016138df565b8961028960408a018a6138fa565b60405161029c9796959493929190613965565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613890565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613890565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613890565b9350505f61042784898d6114d8565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b89611509565b5f6104706002886111e3565b90508c61048a8261048460208401846138b7565b85611217565b858b868461049b60208601866138b7565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c016138df565b6104ec896104e68a8d6139a5565b90610683565b8d6104fa60408e018e6138fa565b60405161050e9897969594939291906139b8565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f61058860208301836138b7565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c560408501602086016138df565b156105ea576105e0856105db60408701876138fa565b6116bc565b9093509050610602565b5034610602856105fd60408701876138fa565b611816565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a764000061182f565b90505b92915050565b5f6106cb427f000000000000000000000000000000000000000000000000000000000000000061184a565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613890565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d161185f565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061187f565b92505b506108388361189e565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b6139a5565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613890565b42906118cb565b84610f13565b6108d5886118df565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d6139a5565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611a7c565b915091508060095f8282546109729190613890565b9091555061098d9050865f8461098781611b49565b88611b72565b6109978183613890565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ce9565b91506109db6109d68385610683565b611d32565b600680546002906109fc9084906201000090046001600160701b03166139ff565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a298261189e565b60068054601090610a4b908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611a7c565b915091508060095f828254610abe9190613890565b90915550610ad99050835f84610ad381611b49565b8a611d5b565b610ae381836139a5565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b03166139ff565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b408261189e565b60068054601090610b62908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611b49565b610ba483611b49565b610bae9190613a3f565b5f611f4b565b8e610bbf8482611f8a565b50505b5f610bcc84612179565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613a5e565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906122bb565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d4161185f565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612341565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061187f565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061236c565b6123d0565b15610e6d57610e6d612411565b610e798785888561242a565b91965094509250670de0b6b3a7640000610efb610e968784613890565b600254610eb4908890600160801b90046001600160801b03166139a5565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061187f565b1115610f0957610f09612411565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f668361189e565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf88866139a5565b610fb99190613a79565b85670de0b6b3a7640000610fcd878a6139a5565b610fd79190613a79565b859291906001612472565b61189e565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c8461189e565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613a79565b6005546001600160801b03169190886001612472565b600580546001600160801b0319166001600160801b03929092169190911790556110b78561189e565b600280545f906110d19084906001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe8461189e565b60028054601090611120908490600160801b90046001600160801b0316613a90565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d8461189e565b6111579082613a1f565b600380546001600160801b03808416600160801b02911617905590505f61117d83612516565b905061119b8161118c87611b49565b6111969084613ab0565b611f4b565b6111a484612556565b6111b0576111b0612411565b5f6111ba856125b5565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613890565b90915550505f838152600b60205260408120805483929061126a908490613890565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db61185f565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006125c1565b93508761134d85896125e1565b111561135b5761135b612411565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061187f565b93506113d58a670de0b6b3a7640000868c6125f5565b509193509091506113e8905081836139a5565b6113f290876139a5565b95508861143f816114398d611407868c6139a5565b8d6114128782612701565b877f0000000000000000000000000000000000000000000000000000000000000000612716565b906125e1565b975090945050505093509350935093565b5f61069783670de0b6b3a764000084612736565b60405163b88fed9f60e01b8152600481018290525f9073__$5682da3f97efd8f880c10f145969e15691$__9063b88fed9f90602401602060405180830381865af41580156114b4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069a9190613ad7565b5f6114e960408301602084016138df565b156114f5575082611502565b6114ff8484612759565b90505b9392505050565b6002546001600160801b03168381101561152557611525612411565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061155d908390600f0b61276d565b101561156b5761156b612411565b6004546115b590610fe290600160801b90046001600160801b0316611598670de0b6b3a764000086613a79565b600554600160801b90046001600160801b03169190896001612472565b600580546001600160801b03928316600160801b0292169190911790556115db8161189e565b600280546001600160801b0319166001600160801b03929092169190911790556116048561189e565b60028054601090611626908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116538561189e565b60048054601090611675908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116a383612516565b905061119b816116b288611b49565b6111969084613a3f565b5f806116f36001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612792565b6117537f0000000000000000000000000000000000000000000000000000000000000000611722876001613890565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906127ff565b6040516311f9fbc960e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018790525f917f0000000000000000000000000000000000000000000000000000000000000000909116906347e7ef24906044016020604051808303815f875af11580156117e3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118079190613ad7565b92505f9150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f825f190484118302158202611843575f80fd5b5091020490565b5f6118558284613b02565b61069790846139a5565b6002546004545f916106cb916001600160801b0390911690600f0b61276d565b5f6118958261188f85888861182f565b9061288e565b95945050505050565b5f6001600160801b038211156118c757604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116118d95782610697565b50919050565b6006545f908190611901908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a77575f61192a83836139a5565b9050611939610fe28286611450565b6006805460109061195b908490600160801b90046001600160801b0316613a90565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611993858361275990919063ffffffff16565b90505f6119c0827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f8282546119d39190613890565b909155506119e3905081836139a5565b91506119ee8261189e565b600280545f90611a089084906001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a35826128f3565b600480545f90611a49908490600f0b613b15565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a888785612759565b91505f611ab5837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611ae1817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611b0457611af382826139a5565b611afd90846139a5565b9250611b1b565b611b0e82826139a5565b611b189084613890565b92505b86861015611b3e57611b2e83878961182f565b9250611b3b82878961182f565b91505b509550959350505050565b5f6001600160ff1b038211156118c75760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611bba610fe282611b9e670de0b6b3a764000086613a79565b600554600160801b90046001600160801b031691908a5f612472565b600580546001600160801b03928316600160801b029216919091179055611be08661189e565b611bea9082613a90565b600480546001600160801b03928316600160801b029216919091179055611c108461189e565b600280545f90611c2a9084906001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c578361291c565b600480545f90611c6b908490600f0b613b15565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c9b8561189e565b60028054601090611cbd908490600160801b90046001600160801b0316613a90565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611d0084611cfa8a888a61182f565b90612759565b9050611d0d88848661182f565b611d179082613890565b905086811115611d275786810391505b509695505050505050565b5f6001600160701b038211156118c75760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d9d57507f0000000000000000000000000000000000000000000000000000000000000000611d9b85836139a5565b105b15611daa57611daa612411565b6004549084900390600f0b611dbf8482613a3f565b905083611dcb86611b49565b138015611e0057507f0000000000000000000000000000000000000000000000000000000000000000611dfe838361276d565b105b15611e0d57611e0d612411565b600354600160801b90046001600160801b0316611e4e610fe282611e39670de0b6b3a764000088613a79565b6005546001600160801b031691908c5f612472565b600580546001600160801b0319166001600160801b0392909216919091179055611e7888826139a5565b9050611e838161189e565b600380546001600160801b03928316600160801b029216919091179055611ea98361189e565b600280546001600160801b0319166001600160801b0392909216919091179055611ed28261291c565b600480546001600160801b0319166001600160801b0392909216919091179055611efb8761189e565b60028054601090611f1d908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f6690610fe2906001600160801b03168484612957565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611fd4916001600160801b0316906139a5565b9050805f03611fe757600191505061069a565b5f611ff1856129b9565b9050805f036120055760019250505061069a565b5f80612012838589612a54565b9150915080612027575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612062929190613bc0565b6040805180830381865af415801561207c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120a09190613c35565b915091506120be6120b082611b49565b6120b990613c57565b612bc1565b9250826120d3575f965050505050505061069a565b6120dc8261189e565b600780545f906120f69084906001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121238161189e565b60078054601090612145908490600160801b90046001600160801b0316613a1f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6121a087612d55565b6040518263ffffffff1660e01b81526004016121bc9190613c71565b6040805180830381865af41580156121d6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121fa9190613c80565b915091508061220f57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161227491613890565b61227e91906139a5565b9050805f0361229457505f958695509350505050565b5f8087116122a2575f6122ad565b6122ad84888461182f565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156122de576122de613cae565b6040519080825280601f01601f191660200182016040528015612308576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612328578692505b828152825f602083013e90999098509650505050505050565b5f61236187878761235a88670de0b6b3a76400006139a5565b8787612e8f565b979650505050505050565b5f6114ff6123ac61238584670de0b6b3a76400006139a5565b611439670de0b6b3a764000061239b818a611450565b6123a591906139a5565b87906125e1565b6123be90670de0b6b3a7640000613890565b611cfa84670de0b6b3a76400006139a5565b5f80612406856123de61185f565b6123e89190613890565b600254610eb4908790600160801b90046001600160801b03166139a5565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f61243a898789612eb1565b909250905061244982896139a5565b97505f61245782888a61182f565b9050612463818b6139a5565b9a989950979650505050505050565b5f825f03612481575084611895565b81156124d3576124b26124948487613890565b61249e8587610683565b6124a8888a610683565b611cfa9190613890565b90505f6124bf85886118cb565b9050808210156124cd578091505b50611895565b8285036124e157505f611895565b61250c6124ee84876139a5565b6124f885876125e1565b612502888a610683565b611cfa91906139a5565b9695505050505050565b5f61253b600b5f6125286002866111e3565b81526020019081526020015f2054611b49565b61254c600b5f6125286001876111e3565b61069a9190613a3f565b5f6125817f0000000000000000000000000000000000000000000000000000000000000000836125e1565b60035461259791906001600160801b0316613890565b6002546125ad906001600160801b031684610683565b101592915050565b5f61069a826004611f8a565b5f6123618787876125da88670de0b6b3a76400006139a5565b8787612f30565b5f6106978383670de0b6b3a7640000612736565b5f808080612645878661263e8b6114396126178c670de0b6b3a76400006139a5565b7f0000000000000000000000000000000000000000000000000000000000000000906125e1565b9190612736565b9350612671847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61269161268989670de0b6b3a76400006139a5565b8a9088612736565b90506126bd817f00000000000000000000000000000000000000000000000000000000000000006125e1565b93506126e9847f0000000000000000000000000000000000000000000000000000000000000000610683565b6126f39084613890565b915050945094509450949050565b5f81831161270f5781610697565b5090919050565b5f8061272d846127278a888a612736565b90611450565b9050611d0d8884865b5f825f19048411830215820261274a575f80fd5b50910281810615159190040190565b5f61069783670de0b6b3a76400008461182f565b5f806127798484612f40565b90925090508061278b5761278b612411565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127f99186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612f78565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526128508482612fe3565b6127f9576040516001600160a01b0384811660248301525f604483015261288491869182169063095ea7b3906064016127c7565b6127f98482612f78565b5f815f036128a55750670de0b6b3a764000061069a565b825f036128b357505f61069a565b5f6128bd83611b49565b90505f6128d16128cc86611b49565b613080565b90508181026128e8670de0b6b3a764000082613cc2565b905061250c816132a5565b5f60016001607f1b038211156118c75760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612939575060016001607f1b0382135b156118c75760405163a5353be560e01b815260040160405180910390fd5b5f80612963845f613437565b61296d845f613437565b6129779190613a3f565b90505f8113156129925761298b8186613890565b94506129b0565b5f8112156129b0576129a381613c57565b6129ad90866139a5565b94505b50929392505050565b6003545f9081906129d3906001600160801b031684611450565b90506129ff7f000000000000000000000000000000000000000000000000000000000000000082613890565b6002546001600160801b031611156118d9576002547f000000000000000000000000000000000000000000000000000000000000000090612a4a9083906001600160801b03166139a5565b61150291906139a5565b612a5c613783565b5f80612a6784612d55565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612aa19190613c71565b6040805180830381865af4158015612abb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612adf9190613c80565b9350905082612af357505f915061180e9050565b5f612b19612b1484610160015185610140015161068390919063ffffffff16565b611b49565b612b39612b148561012001518661010001516125e190919063ffffffff16565b612b439190613a3f565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c77573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c9b9190613cee565b935093509350935080612cb657505f98975050505050505050565b868414612ce757612cc68461189e565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d1857612cf78361291c565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d4657612d288261189e565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d5d6137cd565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e559116613445565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e8792900416613445565b905292915050565b5f80612e9f8888888888886134b9565b909250905080611d2757611d27612411565b5f80612efa8561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612ef0818c611450565b61143991906139a5565b9150612f26827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612e9f88888888888861357d565b5f805f83612f4d86611b49565b612f579190613a3f565b90505f811215612f6d575f80925092505061067c565b946001945092505050565b5f612f8c6001600160a01b03841683613639565b905080515f14158015612fb0575080806020019051810190612fae9190613d21565b155b15612fde57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b031684604051612ffe9190613d3c565b5f604051808303815f865af19150503d805f8114613037576040519150601f19603f3d011682016040523d82523d5f602084013e61303c565b606091505b50915091508180156130665750805115806130665750808060200190518101906130669190613d21565b80156118955750505050506001600160a01b03163b151590565b5f8082136130a15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131249084901c611b49565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132be57505f919050565b680755bf798b4a1bf1e582126132e7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061250c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b49565b5f81831361270f5781610697565b5f80670de0b6b3a76400006134586106a0565b6134629190613a79565b9050808311613471575f61347b565b61347b81846139a5565b91506115026134b2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a79565b8390612759565b5f805f6134c98989888888613646565b90506134e38661188f6134dc8a8d613890565b8790610683565b98506134f0858a8661182f565b985088811015613506575f809250925050613572565b888103670de0b6b3a7640000811061353b5761353461352d670de0b6b3a764000089611450565b829061288e565b9050613553565b61355061352d670de0b6b3a764000089612759565b90505b80891015613568575f80935093505050613572565b8803925060019150505b965096945050505050565b5f805f61358d8989888888613646565b905061359d8661188f898b613890565b9750878110156135b3575f809250925050613572565b8781036135c1818688612736565b9050670de0b6b3a764000081106135ee576135e761352d670de0b6b3a764000089611450565b9050613606565b61360361352d670de0b6b3a764000089612759565b90505b6136108186611450565b9050808a1015613627575f80935093505050613572565b90980398600198509650505050505050565b606061069783835f613674565b5f613651858561288e565b61366a6136628661188f868b6125e1565b859085612736565b61250c9190613890565b6060814710156136995760405163cd78605960e01b8152306004820152602401612fd5565b5f80856001600160a01b031684866040516136b49190613d3c565b5f6040518083038185875af1925050503d805f81146136ee576040519150601f19603f3d011682016040523d82523d5f602084013e6136f3565b606091505b509150915061250c8683836060826137135761370e8261375a565b611502565b815115801561372a57506001600160a01b0384163b155b1561375357604051639996b31560e01b81526001600160a01b0385166004820152602401612fd5565b5080611502565b80511561376a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806137976137cd565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613835575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613860575f80fd5b850160608188031215613871575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a61387c565b6001600160a01b03811681146105af575f80fd5b5f602082840312156138c7575f80fd5b8135611502816138a3565b80151581146105af575f80fd5b5f602082840312156138ef575f80fd5b8135611502816138d2565b5f808335601e1984360301811261390f575f80fd5b83018035915067ffffffffffffffff821115613929575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61399860c08301848661393d565b9998505050505050505050565b8181038181111561069a5761069a61387c565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6139f160e08301848661393d565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561278b5761278b61387c565b6001600160801b0381811683821601908082111561278b5761278b61387c565b8181035f83128015838313168383128216171561278b5761278b61387c565b5f60208284031215613a6e575f80fd5b8151611502816138a3565b808202811582820484141761069a5761069a61387c565b6001600160801b0382811682821603908082111561278b5761278b61387c565b8082018281125f831280158216821582161715613acf57613acf61387c565b505092915050565b5f60208284031215613ae7575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613b1057613b10613aee565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a61387c565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613bd3828551613b42565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613c46575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613c6b57613c6b61387c565b505f0390565b610180810161069a8284613b42565b5f8060408385031215613c91575f80fd5b825191506020830151613ca3816138d2565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613cd057613cd0613aee565b600160ff1b82145f1984141615613ce957613ce961387c565b500590565b5f805f8060808587031215613d01575f80fd5b8451935060208501519250604085015191506060850151613871816138d2565b5f60208284031215613d31575f80fd5b8151611502816138d2565b5f82515f5b81811015613d5b5760208186018101518583015201613d41565b505f92019182525091905056fea2646970667358221220c27e73e1ec88ba30adc104222cfe01c1fcc1678226aad26d6d21f8628f993c1c64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};